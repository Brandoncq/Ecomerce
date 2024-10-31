import pool from "../config/route";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    // Procesar `precios` como una lista de rangos formateados "min-max"
    const precios = searchParams.get("precios")?.split(",") || [];
    const preciosOptions = precios.map((range) => {
      const [min, max] = range.split("-").map(Number);
      return { min, max };
    });

    // Procesar `modelos` como una lista de strings separados por comas
    const modelosOptions = searchParams.get("modelos")?.split(",") || [];
    const id_categoria = parseInt(
      searchParams.get("id_categoria_producto"),
      10
    );

    const resultados = {
      precios: [],
      modelos: [],
    };

    // Contar productos por cada rango de precio
    for (const range of preciosOptions) {
      const [rows] = await pool.query(
        `SELECT COUNT(*) AS total FROM producto WHERE precio_unitario BETWEEN ? AND ? ${
          !isNaN(id_categoria) ? "AND id_categoria_producto = ?" : ""
        }`,
        !isNaN(id_categoria)
          ? [range.min, range.max, id_categoria]
          : [range.min, range.max]
      );
      resultados.precios.push({
        rango: `${range.min}-${range.max}`,
        total: rows[0]?.total || 0,
      });
    }

    // Contar productos por cada modelo
    for (const modelo of modelosOptions) {
      const [rows] = await pool.query(
        `SELECT COUNT(*) AS total FROM producto WHERE modelo = ? ${
          !isNaN(id_categoria) ? "AND id_categoria_producto = ?" : ""
        }`,
        !isNaN(id_categoria) ? [modelo, id_categoria] : [modelo]
      );
      resultados.modelos.push({
        modelo,
        total: rows[0]?.total || 0,
      });
    }

    // Retornar la respuesta en JSON con el conteo separado
    return NextResponse.json(resultados);
  } catch (error) {
    console.error("Error fetching product counts:", error);
    return NextResponse.json(
      { error: "Failed to fetch product counts" },
      { status: 500 }
    );
  }
}
