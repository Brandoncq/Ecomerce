import pool from "../config/route";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const id_categoria_producto = searchParams.get("id_categoria_producto");
  const modelosJson = searchParams.get("modelos");
  const list = searchParams.get("list");
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 15;
  const offset = (page - 1) * limit;
  const preciosJson = searchParams.get("precios");
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
  let modelosArray = [];
  if (modelosJson && modelosJson !== "") {
    modelosArray = modelosJson
      .split(",")
      .map((modelo) => decodeURIComponent(modelo).trim())
      .filter((modelo) => modelo !== "");
  }

  let query = `SELECT * FROM producto WHERE 1=1`;
  const queryParams = [];

  if (id_categoria_producto) {
    query += ` AND id_categoria_producto = ?`;
    queryParams.push(id_categoria_producto);
  }

  if (modelosArray.length > 0) {
    const modelosCondition = modelosArray.map(() => `modelo = ?`).join(" OR ");

    query += ` AND (${modelosCondition})`;

    modelosArray.forEach((modelo) => {
      queryParams.push(modelo);
    });
  }

  if (preciosArray.length > 0) {
    const preciosCondition = preciosArray
      .map(() => `(precio_unitario >= ? AND precio_unitario <= ?)`)
      .join(" OR ");

    query += ` AND (${preciosCondition})`;

    preciosArray.forEach(({ min, max }) => {
      queryParams.push(min, max);
    });
  }
  const validSortOrders = ["ASC", "DESC"];
  if (list && validSortOrders.includes(list.toUpperCase())) {
    query += ` ORDER BY precio_unitario ${list.toUpperCase()}`;
  }
  query += ` LIMIT ? OFFSET ?`;
  queryParams.push(limit, offset);
  const [rows] = await pool.query(query, queryParams);

  return NextResponse.json(rows);
}
