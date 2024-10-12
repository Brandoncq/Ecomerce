import nodemailer from "nodemailer";
import crypto from "crypto";
import AES from "mysql-aes";
import pool from "../config/route";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const {
    email,
    nombres,
    apellidos,
    nacionalidad,
    nro_documento,
    tipo_cliente,
    prefijo,
    celular,
    password,
    password_validate,
  } = await req.json();

  if (password !== password_validate) {
    return NextResponse.json(
      { error: "Las contraseñas no coinciden." },
      { status: 400 }
    );
  }
  if (
    (11 != nro_documento.length && tipo_cliente == "RUC") ||
    (8 != nro_documento.length && tipo_cliente == "DNI")
  ) {
    return NextResponse.json(
      { error: "Ingrese un Valor Correcto en N° Documento" },
      { status: 400 }
    );
  }
  if (prefijo.length < 0 && prefijo.length > 4) {
    return NextResponse.json(
      { error: "Ingrese un Valor Correcto en Prefijo" },
      { status: 400 }
    );
  }
  if (celular.length != 9) {
    return NextResponse.json(
      { error: "Ingrese un Valor Correcto en Celular" },
      { status: 400 }
    );
  }
  const correcto_celular = prefijo + celular;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>-]/.test(password);
  const hasMinLength = password.length >= 8;
  if (
    !hasMinLength ||
    !hasUpperCase ||
    !hasLowerCase ||
    !hasNumbers ||
    !hasSpecialChar
  ) {
    console.log("La contraseña es muy débil");
    return NextResponse.json(
      { error: "La contraseña es muy débil" },
      { status: 400 }
    );
  }
  const [existingCliente] = await pool.query(
    `SELECT * FROM contacto WHERE email = ?`,
    [email]
  );
  if (existingCliente.length > 0) {
    return NextResponse.json(
      { error: "El correo electrónico ya está registrado." },
      { status: 400 }
    );
  }
  let token;
  let tokenExists = true;
  while (tokenExists) {
    token = crypto.randomBytes(20).toString("hex");
    const existingToken = await pool.query(
      "SELECT token FROM tokens WHERE token = ?",
      [token]
    );
    if (existingToken.length > 0) {
      tokenExists = false;
    }
  }
  const expirationTime = new Date(Date.now() + 10 * 60 * 1000);

  const [existingUser] = await pool.query(
    `SELECT * FROM tokens WHERE email = ?`,
    [email]
  );
  if (existingUser.length > 0) {
    await pool.query(
      `UPDATE tokens 
       SET token = ?, expires_at = ?, name = ?, lastname = ?, password = ?, 
           password_verificar = ?, nacionalidad = ?, nrodocumento = ?, tipocliente = ?, celular = ?
       WHERE email = ?`,
      [
        token,
        expirationTime,
        nombres,
        apellidos,
        AES.encrypt(password, process.env.KEY_PASSSWORDS),
        AES.encrypt(password_validate, process.env.KEY_PASSSWORDS),
        nacionalidad,
        nro_documento,
        tipo_cliente,
        correcto_celular,
        email,
      ]
    );
    console.log(`Información actualizada para el email: ${email}`);
  } else {
    await pool.query(
      `INSERT INTO tokens (email, name, lastname, password, password_verificar, token, expires_at, is_verified, 
                           nacionalidad, nrodocumento, tipocliente, celular)
       VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?, ?)`,
      [
        email,
        nombres,
        apellidos,
        AES.encrypt(password, process.env.KEY_PASSSWORDS),
        AES.encrypt(password_validate, process.env.KEY_PASSSWORDS),
        token,
        expirationTime,
        nacionalidad,
        nro_documento,
        tipo_cliente,
        correcto_celular,
      ]
    );
    console.log(`Nuevo token generado para el email: ${email}`);
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verificación de cuenta",
      text: `Tu código de verificación es: ${token}`,
      html: `<p>Tu código de verificación es: <strong>${token}</strong></p>`,
    });
    return NextResponse.json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando el correo: ", error);
    return NextResponse.json(
      { message: "Error enviando el correo", error: error.message },
      { status: 500 }
    );
  }
}
