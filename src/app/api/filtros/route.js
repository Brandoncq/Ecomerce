import pool from "../config/route";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

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

    const resultados = { precios: [], marcas: [], colores: [], ofertas: [] };

    // Lista base para asegurar que todos los rangos se incluyan
    const basePrecios = precios.map((range) => ({
      rango: range,
      total: 0,
    }));
    const baseMarcas = marcasOptions.map((marca) => ({
      marca,
      total: 0,
    }));
    const baseColores = coloresOptions.map((color) => ({
      color,
      total: 0,
    }));

    // Consulta agrupada para rangos de precios
    if (preciosOptions.length > 0) {
      const preciosPlaceholders = preciosOptions
        .map(() => "(precio_unitario BETWEEN ? AND ?)")
        .join(" OR ");

      const preciosParams = preciosOptions.flatMap((range) => [
        range.min,
        range.max,
      ]);

      const preciosQuery = `
        SELECT 
          CASE 
            ${preciosOptions
              .map(
                (range, index) =>
                  `WHEN precio_unitario BETWEEN ${range.min} AND ${range.max} THEN '${range.min}-${range.max}'`
              )
              .join(" ")} 
            ELSE NULL 
          END AS rango,
          COUNT(*) AS total
        FROM producto
        WHERE (${preciosPlaceholders}) AND status = 1
        ${!isNaN(id_categoria) ? "AND id_categoria_producto = ?" : ""}
        GROUP BY rango
        ORDER BY rango ASC;
      `;

      const [preciosRows] = await pool.query(
        preciosQuery,
        !isNaN(id_categoria) ? [...preciosParams, id_categoria] : preciosParams
      );

      resultados.precios = basePrecios.map((base) => {
        const match = preciosRows.find((row) => row.rango === base.rango);
        return match || base; // Incluye el rango base con total 0 si no se encuentra
      });
    }

    // Consulta agrupada para marcas
    if (marcasOptions.length > 0) {
      const [marcasRows] = await pool.query(
        `
          SELECT marca, COUNT(*) AS total
          FROM producto
          WHERE marca IN (?) AND status = 1
          ${!isNaN(id_categoria) ? "AND id_categoria_producto = ?" : ""}
          GROUP BY marca
          ORDER BY FIELD(marca, ?) ASC;
        `,
        !isNaN(id_categoria)
          ? [marcasOptions, id_categoria, ...marcasOptions]
          : [marcasOptions, ...marcasOptions]
      );

      resultados.marcas = baseMarcas.map((base) => {
        const match = marcasRows.find((row) => row.marca === base.marca);
        return match || base;
      });
    }

    // Consulta agrupada para colores
    if (coloresOptions.length > 0) {
      const [coloresRows] = await pool.query(
        `
          SELECT color, COUNT(*) AS total
          FROM producto
          WHERE color IN (?) AND status = 1
          ${!isNaN(id_categoria) ? "AND id_categoria_producto = ?" : ""}
          GROUP BY color
          ORDER BY FIELD(color, ?) ASC;
        `,
        !isNaN(id_categoria)
          ? [coloresOptions, id_categoria, ...coloresOptions]
          : [coloresOptions, ...coloresOptions]
      );

      resultados.colores = baseColores.map((base) => {
        const match = coloresRows.find((row) => row.color === base.color);
        return match || base;
      });
    }

    // Consulta para ofertas
    const [ofertasRows] = await pool.query(
      `
        SELECT COUNT(*) AS total
        FROM producto
        WHERE descuento_fijo != 0 AND status = 1 AND stock > 0
        ${!isNaN(id_categoria) ? "AND id_categoria_producto = ?" : ""}
      `,
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
