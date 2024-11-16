import pool from "../config/route";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const id_categoria_producto = searchParams.get("id_categoria_producto");
  const marcasJson = searchParams.get("marcas");
  const coloresJson = searchParams.get("colores");
  const list = searchParams.get("list");
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 15;
  const offset = (page - 1) * limit;
  const preciosJson = searchParams.get("precios");
  const ofertas = searchParams.get("ofertas");
  let preciosArray = [];

  if (preciosJson && preciosJson !== "") {
    preciosArray = preciosJson
      .split(",")
      .map((priceRange) => {
        const [min, max] = priceRange.split("-").map(Number);
        return { min, max };
      })
      .filter(({ min, max }) => !isNaN(min) && !isNaN(max));
  }

  let marcasArray = [];
  if (marcasJson && marcasJson !== "") {
    marcasArray = marcasJson
      .split(",")
      .map((marca) => decodeURIComponent(marca).trim())
      .filter((marca) => marca !== "");
  }
  let coloresArray = [];
  if (coloresJson && coloresJson !== "") {
    coloresArray = coloresJson
      .split(",")
      .map((color) => decodeURIComponent(color).trim())
      .filter((color) => color !== "");
  }

  let query = `SELECT * FROM producto WHERE 1=1`;
  const queryParams = [];

  /*if (ofertas) {
    query += ` AND descuento_fijo != 0`;
  }*/
  if (ofertas) {
    query += ` AND descuento_fijo != 0 AND stock > 0`;
  }

  if (id_categoria_producto) {
    query += ` AND id_categoria_producto = ?`;
    queryParams.push(id_categoria_producto);
  }

  // Filtro por marcas
  if (marcasArray.length > 0) {
    const marcasCondition = marcasArray.map(() => `marca = ?`).join(" OR ");
    query += ` AND (${marcasCondition})`;
    marcasArray.forEach((marca) => queryParams.push(marca));
  }

  // Filtro por colores
  if (coloresArray.length > 0) {
    const coloresCondition = coloresArray.map(() => `color = ?`).join(" OR ");
    query += ` AND (${coloresCondition})`;
    coloresArray.forEach((color) => queryParams.push(color));
  }

  // Filtro por precios
  if (preciosArray.length > 0) {
    const preciosCondition = preciosArray
      .map(() => `(precio_unitario >= ? AND precio_unitario <= ?)`)
      .join(" OR ");
    query += ` AND (${preciosCondition})`;
    preciosArray.forEach(({ min, max }) => {
      queryParams.push(min, max);
    });
  }

  // Filtro por status
  query += ` AND status = 1`;

  const validSortOrders = ["ASC", "DESC"];
  query += ` ORDER BY stock DESC`;
  if (list && validSortOrders.includes(list.toUpperCase())) {
    query += `, precio_unitario ${list.toUpperCase()}`;
  }

  query += ` LIMIT ? OFFSET ?`;
  queryParams.push(limit, offset);
  const [rows] = await pool.query(query, queryParams);
  return NextResponse.json(rows);
}
