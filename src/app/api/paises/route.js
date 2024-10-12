import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const tokenResponse = await fetch(
      "https://www.universal-tutorial.com/api/getaccesstoken",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "api-token": process.env.TOKEN_PAISES,
          "user-email": process.env.EMAIL_PAISES,
        },
      }
    );

    const tokenData = await tokenResponse.json();
    const authToken = tokenData.auth_token;

    if (!authToken) {
      return NextResponse.json(
        { error: "No se pudo obtener el token." },
        { status: 401 }
      );
    }

    const countriesResponse = await fetch(
      "https://www.universal-tutorial.com/api/countries/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
        },
      }
    );

    const countriesData = await countriesResponse.json();
    return NextResponse.json(countriesData, { status: 200 });
  } catch (error) {
    console.error("Error en la API:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
