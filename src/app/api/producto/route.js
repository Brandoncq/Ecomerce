import pool from "../config/route";
import { NextResponse } from "next/server";
console.log(pool);
export async function GET(request) {
  const [rows] = await pool.query(`SELECT * FROM producto`, []);
  return NextResponse.json(rows);
}
