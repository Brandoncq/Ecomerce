import pool from "../../config/route";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const query = request.nextUrl.searchParams.get("query");

    if (!query) {
      return NextResponse.json(
        { error: "Por favor, proporcione un número de serie." },
        { status: 400 }
      );
    }

    const [items] = await pool.query(
      "SELECT * FROM vista_productos_venta WHERE serie = ?",
      [query]
    );

    if (items.length === 0) {
      return NextResponse.json(
        { error: "No se encontró el producto con la serie proporcionada." },
        { status: 404 }
      );
    }

    const producto = items[0];
    return NextResponse.json(producto);
  } catch (error) {
    console.error("Error en la consulta:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
