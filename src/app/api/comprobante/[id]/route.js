import pool from "../../config/route";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  console.log(params);
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { error: "Debe proporcionar un id_venta válido." },
        { status: 400 }
      );
    }

    // Consulta a la vista para obtener los datos
    const query = `
      SELECT * FROM vista_comprobante
      WHERE id_venta = ?;
    `;

    const [rows] = await pool.query(query, [id]);

    // Verificar si se encontraron resultados
    if (rows.length === 0) {
      return NextResponse.json(
        { error: "No se encontraron datos para el id_venta proporcionado." },
        { status: 404 }
      );
    }

    // Retornar los datos encontrados
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error al consultar la vista_comprobante:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al obtener los datos del comprobante." },
      { status: 500 }
    );
  }
}
