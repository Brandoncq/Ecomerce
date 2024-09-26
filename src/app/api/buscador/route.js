import pool from "../config/route";
import { NextResponse } from "next/server";
console.log(pool);
export async function GET(request) {
  const query = request.nextUrl.searchParams.get("query");
  const [rows] = await pool.query(
    "SELECT * FROM producto WHERE nombre_producto LIKE ?",
    [`%${query}%`]
  );
  return NextResponse.json(rows);
}
