import nodemailer from "nodemailer";
import crypto from "crypto";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const { email } = await req.json();
  console.log(email);
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const token = crypto.randomBytes(20).toString("hex");
  try {
    // Enviar el correo
    await transporter.sendMail({
      from: '"Nombre de tu empresa" COMPU-FENIX@gmail.com>',
      to: email,
      subject: "Verificación de cuenta",
      text: `Tu código de verificación es: ${token}`,
      html: `<p>Tu código de verificación es: <strong>${token}</strong></p>`,
    });
    console.log(token);
    // Responde con éxito si el correo fue enviado
    return NextResponse.json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando el correo: ", error);
    return NextResponse.json({ message: "Error enviando el correo" });
  }
}
