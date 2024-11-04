import pool from "../config/route";
import { NextResponse } from "next/server";
export async function GET(request) {
  const query = request.nextUrl.searchParams.get("query");
  const [rows] = await pool.query(
    "SELECT * FROM producto WHERE nombre_producto LIKE ? LIMIT 4",
    [`%${query}%`]
  );
  return NextResponse.json(rows);
}
