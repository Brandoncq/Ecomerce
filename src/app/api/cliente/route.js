import pool from "../config/route";
import AES from "mysql-aes";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { verify } from "jsonwebtoken";
import { serialize } from "cookie";
import { jwtVerify } from "jose";

export async function GET(request) {
  const MytokenName = request.cookies.get("Sesion");

  if (MytokenName === undefined) {
    return NextResponse.json({ error: "No token found" }, { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    const { payload } = await jwtVerify(MytokenName.value, secret);

    return NextResponse.json(payload, { status: 200 });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const [rows_contacto] = await pool.query(
      `SELECT * FROM contacto WHERE email = ?`,
      [email]
    );

    if (rows_contacto.length > 0) {
      const { id_contacto } = rows_contacto[0];
      const [rows_email] = await pool.query(
        `SELECT * FROM cliente WHERE id_contacto= ?`,
        [id_contacto]
      );

      if (rows_email.length > 0) {
        const decryptedPassword = AES.decrypt(
          rows_email[0].password.toString("utf-8"),
          process.env.KEY_PASSSWORDS
        );
        if (decryptedPassword === password) {
          const token = jwt.sign(
            {
              email: email,
              username: rows_email[0].nombre,
              id: rows_email[0].id_cliente,
            },
            process.env.JWT_SECRET
          );

          const serialized = serialize("Sesion", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
          });

          const [buscar_carrito] = await pool.query(
            `SELECT * FROM carrito WHERE id_cliente = ?`,
            [rows_email[0].id_cliente]
          );
          const CarritoCookie = request.cookies.get("Carrito");
          let carritoCookie = [];

          if (CarritoCookie) {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET);
            const verified = await jwtVerify(CarritoCookie.value, secret);
            carritoCookie = JSON.parse(verified.payload.carrito);
          }

          if (buscar_carrito.length > 0 && carritoCookie) {
            const idCarritoDB = buscar_carrito[0].id_carrito;
            for (const itemCookie of carritoCookie) {
              const [existingItem] = await pool.query(
                `SELECT * FROM carrito_item WHERE id_producto = ? AND id_carrito = ?`,
                [itemCookie.id_producto, idCarritoDB]
              );
              if (existingItem.length > 0) {
                const cantidadMaxima = Math.max(
                  existingItem[0].cantidad,
                  itemCookie.cantidad
                );

                await pool.query(
                  `UPDATE carrito_item SET cantidad = ? WHERE id_producto = ? AND id_carrito = ?`,
                  [cantidadMaxima, itemCookie.id_producto, idCarritoDB]
                );
              } else {
                await pool.query(
                  `INSERT INTO carrito_item (id_carrito, id_producto, cantidad) VALUES (?, ?, ?)`,
                  [idCarritoDB, itemCookie.id_producto, itemCookie.cantidad]
                );
              }
            }
          }
          const serializedCarrito = serialize("Carrito", null, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 0,
            path: "/",
          });
          return NextResponse.json("Successfully authenticated", {
            headers: {
              "Set-Cookie": [serialized, serializedCarrito],
            },
          });
        } else {
          return NextResponse.json(
            { error: "Contraseña Incorrecta" },
            { status: 401 }
          );
        }
      } else {
        return NextResponse.json(
          { error: "Usuario no encontrado" },
          { status: 404 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Email no encontrado" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
export async function DELETE(request, response) {
  try {
    const MytokenName = request.cookies.get("Sesion");
    if (!MytokenName) {
      return NextResponse.json("No token");
    }
    verify(MytokenName.value, process.env.JWT_SECRET);
    const serialized = serialize("Sesion", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    });
    return NextResponse.json("Successfully Logout", {
      headers: {
        "Set-Cookie": serialized,
      },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
