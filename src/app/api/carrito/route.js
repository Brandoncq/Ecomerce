import pool from "../config/route";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { jwtVerify } from "jose";
export async function GET(request) {
  try {
    const MytokenName = request.cookies.get("Sesion");
    let payload;

    // Verificar el token de sesión para obtener el ID del cliente
    if (MytokenName) {
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const verified = await jwtVerify(MytokenName.value, secret);
        payload = verified.payload;
      } catch (err) {
        console.error("Error de verificación de JWT:", err);
      }
    }

    // Si el token de sesión es válido, buscar en la base de datos
    if (payload) {
      const [buscar_carrito] = await pool.query(
        `SELECT * FROM carrito WHERE id_cliente = ?`,
        [payload.id]
      );

      // Si existe el carrito en la base de datos, obtener los items
      if (buscar_carrito.length > 0) {
        const [carrito_items] = await pool.query(
          `SELECT * FROM carrito_item WHERE id_carrito = ?`,
          [buscar_carrito[0].id_carrito]
        );
        const idsProductos = carrito_items.map((item) => item.id_producto);

        const [productos] = await pool.query(
          `SELECT id_producto, nombre_producto, modelo, imagen, precio_unitario FROM producto WHERE id_producto IN (?)`,
          [idsProductos]
        );

        const carritoConDetalles = carrito_items.map((item) => {
          const producto = productos.find(
            (p) => p.id_producto === item.id_producto
          );
          return {
            id_producto: item.id_producto,
            cantidad: item.cantidad,
            precio: producto ? producto.precio_unitario * item.cantidad : null,
            nombre: producto ? producto.nombre_producto : null,
            modelo: producto ? producto.modelo : null,
            imagen: producto ? producto.imagen : null,
          };
        });
        return NextResponse.json(carritoConDetalles, { status: 200 });
      } else {
        return NextResponse.json(
          { message: "No hay carrito en la base de datos." },
          { status: 404 }
        );
      }
    } else {
      // Si no hay sesión, verificar las cookies
      const CarritoCookie = request.cookies.get("Carrito");
      if (CarritoCookie) {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const verified = await jwtVerify(CarritoCookie.value, secret);
        const carrito = JSON.parse(verified.payload.carrito);

        const idsProductos = carrito.map((item) => item.id_producto);

        const [productos] = await pool.query(
          `SELECT id_producto, nombre_producto, modelo, imagen, precio_unitario FROM producto WHERE id_producto IN (?)`,
          [idsProductos]
        );
        const carritoConDetalles = carrito.map((item) => {
          const producto = productos.find(
            (p) => p.id_producto === item.id_producto
          );
          return {
            id_producto: item.id_producto,
            cantidad: item.cantidad,
            precio: producto ? producto.precio_unitario * item.cantidad : null,
            nombre: producto ? producto.nombre_producto : null,
            modelo: producto ? producto.modelo : null,
            imagen: producto ? producto.imagen : null,
          };
        });

        return NextResponse.json(carritoConDetalles, { status: 200 });
      } else {
        return NextResponse.json(
          { message: "Carrito vacío." },
          { status: 404 }
        );
      }
    }
  } catch (error) {
    console.error("Error durante la obtención de datos del carrito:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { id } = await request.json();
    const MytokenName = request.cookies.get("Sesion");

    let payload;

    if (MytokenName) {
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const verified = await jwtVerify(MytokenName.value, secret);
        payload = verified.payload;
      } catch (err) {
        console.error("Error de verificación de JWT:", err);
      }
    }

    if (payload) {
      const [buscar_carrito] = await pool.query(
        `SELECT * FROM carrito WHERE id_cliente = ?`,
        [payload.id]
      );

      if (buscar_carrito.length > 0) {
        await pool.query(
          `INSERT INTO carrito_item (id_producto, id_carrito, cantidad) VALUES (?, ?, ?)`,
          [id, buscar_carrito[0].id_carrito, 1]
        );
      } else {
        const date = new Date();
        const [result] = await pool.query(
          `INSERT INTO carrito (id_cliente, creacion, expiracion) VALUES (?, ?, ?)`,
          [payload.id, date, date]
        );

        const idCarrito = result.insertId;
        await pool.query(
          `INSERT INTO carrito_item (id_producto, id_carrito, cantidad) VALUES (?, ?, ?)`,
          [id, idCarrito, 1]
        );
      }
      return NextResponse.json(
        { message: "Producto añadido al carrito" },
        { status: 200 }
      );
    } else {
      const CarritoCookie = request.cookies.get("Carrito");
      let carrito = [];
      if (CarritoCookie) {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const verified = await jwtVerify(CarritoCookie.value, secret);
        carrito = JSON.parse(verified.payload.carrito);
        const productoIndex = carrito.findIndex(
          (item) => item.id_producto === id
        );

        if (productoIndex !== -1) {
          carrito[productoIndex].cantidad += 1;
        } else {
          carrito.push({ id_producto: id, cantidad: 1 });
        }
      } else {
        carrito.push({ id_producto: id, cantidad: 1 });
      }

      const token = jwt.sign(
        { carrito: JSON.stringify(carrito) },
        process.env.JWT_SECRET
      );

      const serialized = serialize("Carrito", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });

      return NextResponse.json(
        { message: "Producto añadido al carrito" },
        {
          headers: {
            "Set-Cookie": serialized,
          },
        }
      );
    }
  } catch (error) {
    console.error("Error durante la autenticación o inserción:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
