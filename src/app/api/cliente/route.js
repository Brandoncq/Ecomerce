import pool from "../config/route";
import AES from "mysql-aes";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { verify } from "jsonwebtoken";
import { serialize } from "cookie";
import { jwtVerify } from "jose";

export async function GET(request) {
  const MytokenName = request.cookies.get("MytokenName");

  if (MytokenName === undefined) {
    return NextResponse.json({ error: "No token found" }, { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    const { payload } = await jwtVerify(MytokenName.value, secret);

    return NextResponse.json(payload, { status: 200 });
  } catch (error) {
    console.error("Token verification failed:", error);
    // Retorna error si el token es inválido
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
            },
            process.env.JWT_SECRET
          );

          const serialized = serialize("MytokenName", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
          });

          return NextResponse.json("Successfully authenticated", {
            headers: {
              "Set-Cookie": serialized,
            },
          });
        } else {
          return NextResponse.json("Incorrect password", { status: 401 });
        }
      } else {
        return NextResponse.json("User not found", { status: 404 });
      }
    } else {
      return NextResponse.json("Email not found", { status: 404 });
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
export async function DELETE(request, response) {
  try {
    const MytokenName = request.cookies.get("MytokenName");
    if (!MytokenName) {
      return NextResponse.json("No token");
    }
    console.log(MytokenName);
    verify(MytokenName.value, process.env.JWT_SECRET);
    const serialized = serialize("MytokenName", null, {
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
