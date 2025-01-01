import mysql from "mysql2/promise";

/*const isLocal = process.env.NODE_ENV !== "production";

const pool = mysql.createPool({
  host: isLocal ? "localhost" : process.env.DB_HOST,
  user: isLocal ? "root" : process.env.DB_USER,
  database: isLocal ? "ecomerce" : process.env.DB_DATABASE,
  password: isLocal ? "" : process.env.DB_PASSWORD,
  port: isLocal ? 3306 : process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "SYSTEM",
});*/

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "SYSTEM",
});

export default pool;
