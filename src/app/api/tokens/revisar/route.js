import pool from "../../config/route";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { token } = await req.json();
  const date = new Date();

  const [tokenData] = await pool.query(`SELECT * FROM tokens WHERE token = ?`, [
    token,
    date,
  ]);

  if (tokenData.length === 0) {
    return NextResponse.json(
      { message: "Token inválido o expirado" },
      { status: 400 }
    );
  }

  const { email, name, lastname, password } = tokenData[0];

  const defaultPhoneNumber = "123456789";
  const defaultAddress = "Calle Falsa 123";
  const defaultNationality = "PE";

  const [contactResult] = await pool.query(
    `INSERT INTO contacto (email, nro_celular, direccion, nacionalidad) 
     VALUES (?, ?, ?, ?)`,
    [email, defaultPhoneNumber, defaultAddress, defaultNationality]
  );

  const id_contacto = contactResult.insertId;

  const tipo_cliente = "DNI";
  const nro_documento = "12345678";

  await pool.query(
    `INSERT INTO cliente (id_contacto, tipo_cliente, nro_documento, nombre, registro_cliente, password)
     VALUES (?, ?, ?, ?, NOW(), ?)`,
    [id_contacto, tipo_cliente, nro_documento, `${name} ${lastname}`, password]
  );

  return NextResponse.json({ message: "Cliente creado correctamente" });
}
