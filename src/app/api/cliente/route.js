import pool from "../config/route";
import { NextResponse } from "next/server";
export async function GET(request) {
  const { email, password } = await request.json();
  const [rows] = await pool.query(`SELECT * FROM cliente`, []);
  return NextResponse.json(rows);
}
