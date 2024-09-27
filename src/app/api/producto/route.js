import pool from "../config/route";
import { NextResponse } from "next/server";
export async function POST(request) {
  const { email } = await req.json();
  const [rows] = await pool.query(`SELECT * FROM producto`, []);
  return NextResponse.json(rows);
}
