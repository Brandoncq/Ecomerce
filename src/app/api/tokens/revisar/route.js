import pool from "../../config/route";
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { jwtVerify } from "jose";

export async function POST(req, res) {
  const { token } = await req.json();
  const date = new Date();

  const [tokenData] = await pool.query(
    `SELECT * FROM tokens WHERE token = ? AND expires_at > ?`,
    [token, date]
  );

  if (tokenData.length === 0) {
    return NextResponse.json(
      { error: "Token inválido o expirado" },
      { status: 400 }
    );
  }

  const { email, name, lastname, password } = tokenData[0];

  const defaultPhoneNumber = "";
  const defaultAddress = null;
  const defaultNationality = null;

  const [contactResult] = await pool.query(
    `INSERT INTO contacto (email, nro_celular, direccion, nacionalidad) 
     VALUES (?, ?, ?, ?)`,
    [email, defaultPhoneNumber, defaultAddress, defaultNationality]
  );

  const id_contacto = contactResult.insertId;

  const tipo_cliente = "DNI";
  const nro_documento = null;

  const [result] = await pool.query(
    `INSERT INTO cliente (id_contacto, tipo_cliente, nro_documento, nombre, registro_cliente, password)
     VALUES (?, ?, ?, ?, NOW(), ?)`,
    [id_contacto, tipo_cliente, nro_documento, `${name} ${lastname}`, password]
  );
  const id_cliente = result.insertId;
  await pool.query(`DELETE FROM tokens WHERE token = ?`, [token]);

  const carritoCookie = req.cookies.get("Carrito");

  if (carritoCookie) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const verified = await jwtVerify(carritoCookie.value, secret);
      const carrito = JSON.parse(verified.payload.carrito);

      if (carrito.length > 0) {
        const date = new Date();
        const expiracion = new Date(date.getTime() + 1000 * 60 * 60 * 24 * 30);
        const [result] = await pool.query(
          `INSERT INTO carrito (id_cliente, creacion, expiracion) VALUES (?, ?, ?)`,
          [id_cliente, date, expiracion]
        );

        const idCarrito = result.insertId;

        for (const item of carrito) {
          await pool.query(
            `INSERT INTO carrito_item (id_producto, id_carrito, cantidad) VALUES (?, ?, ?)`,
            [item.id_producto, idCarrito, item.cantidad]
          );
        }
        const serialized = serialize("Carrito", null, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 0,
          path: "/",
        });

        return NextResponse.json(
          { message: "Cliente y carrito creados correctamente" },
          {
            headers: {
              "Set-Cookie": serialized,
            },
          }
        );
      }
    } catch (error) {
      console.error("Error al verificar la cookie del carrito:", error);
      return NextResponse.json(
        { error: "No se pudo verificar el carrito" },
        { status: 400 }
      );
    }
  }

  return NextResponse.json({ message: "Cliente creado correctamente" });
}
