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
    const marcasOptions = searchParams.get("marcas")?.split(",") || [];
    const coloresOptions = searchParams.get("colores")?.split(",") || [];

    const id_categoria = parseInt(
      searchParams.get("id_categoria_producto"),
      10
    );
    const ofertas = searchParams.get("ofertas") === "true";
    const resultados = {
      precios: [],
      marcas: [],
      colores: [],
      ofertas: [],
    };

    // Contar productos por cada rango de precio
    for (const range of preciosOptions) {
      const [rows] = await pool.query(
        `SELECT COUNT(*) AS total 
         FROM producto 
         WHERE precio_unitario BETWEEN ? AND ? 
           AND status = 1
           ${!isNaN(id_categoria) ? "AND id_categoria_producto = ?" : ""}`,
        !isNaN(id_categoria)
          ? [range.min, range.max, id_categoria]
          : [range.min, range.max]
      );
      resultados.precios.push({
        rango: `${range.min}-${range.max}`,
        total: rows[0]?.total || 0,
      });
    }

    // Contar productos por cada marca
    for (const marca of marcasOptions) {
      const [rows] = await pool.query(
        `SELECT COUNT(*) AS total 
         FROM producto 
         WHERE marca = ? 
           AND status = 1
           ${!isNaN(id_categoria) ? "AND id_categoria_producto = ?" : ""}`,
        !isNaN(id_categoria) ? [marca, id_categoria] : [marca]
      );
      resultados.marcas.push({
        marca,
        total: rows[0]?.total || 0,
      });
    }

    // Contar productos por cada color
    for (const color of coloresOptions) {
      const [rows] = await pool.query(
        `SELECT COUNT(*) AS total 
         FROM producto 
         WHERE color = ? 
           AND status = 1
           ${!isNaN(id_categoria) ? "AND id_categoria_producto = ?" : ""}`,
        !isNaN(id_categoria) ? [color, id_categoria] : [color]
      );
      resultados.colores.push({
        color,
        total: rows[0]?.total || 0,
      });
    }
    // Contar total de productos en oferta
    const [ofertasRows] = await pool.query(
      `SELECT COUNT(*) AS total 
      FROM producto 
      WHERE descuento_fijo != 0 
      AND status = 1 AND stock > 0
     ${!isNaN(id_categoria) ? "AND id_categoria_producto = ?" : ""}`,
      !isNaN(id_categoria) ? [id_categoria] : []
    );
    resultados.ofertas.push({
      tipo: "ofertas",
      total: ofertasRows[0]?.total || 0,
    });

    return NextResponse.json(resultados);
  } catch (error) {
    console.error("Error fetching product counts:", error);
    return NextResponse.json(
      { error: "Failed to fetch product counts" },
      { status: 500 }
    );
  }
}
