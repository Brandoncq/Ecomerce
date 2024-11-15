import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import pool from "../config/route";
export async function GET(request) {
  try {
    const MytokenName = request.cookies.get("Sesion");
    let payload;

    if (MytokenName) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const verified = await jwtVerify(MytokenName.value, secret);
      payload = verified.payload;
    }

    if (!payload) {
      return NextResponse.json(
        { message: "Usuario no autenticado" },
        { status: 401 }
      );
    }

    // Obtener las ventas del cliente
    const [ventas] = await pool.query(
      "SELECT * FROM venta WHERE id_cliente = ?",
      [payload.id]
    );

    if (ventas.length === 0) {
      return NextResponse.json(
        { message: "No se encontraron ventas para este usuario" },
        { status: 404 }
      );
    }

    // Agregar detalles de cada venta
    for (const venta of ventas) {
      const [detallesVenta] = await pool.query(
        "SELECT dv.*, p.nombre_producto AS producto_nombre, pi.serie FROM detalle_venta dv JOIN producto_item pi ON dv.id_producto = pi.id_producto_item JOIN producto p ON pi.id_producto = p.id_producto WHERE dv.id_venta = ?",
        [venta.id_venta]
      );

      venta.detalles = detallesVenta;
    }

    return NextResponse.json(
      {
        message: "Ventas obtenidas con éxito",
        ventas,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al obtener las ventas:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
export async function POST(request) {
  try {
    const MytokenName = request.cookies.get("Sesion");
    let payload;

    if (MytokenName) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const verified = await jwtVerify(MytokenName.value, secret);
      payload = verified.payload;
    }

    if (!payload) {
      return NextResponse.json(
        { message: "Usuario no autenticado" },
        { status: 401 }
      );
    }

    const { pais, cpostal, direccion, referencia, region, ciudad } =
      await request.json();

    const [buscar_carrito] = await pool.query(
      "SELECT * FROM carrito WHERE id_cliente = ?",
      [payload.id]
    );

    if (buscar_carrito.length === 0) {
      return NextResponse.json(
        { message: "Carrito no encontrado" },
        { status: 404 }
      );
    }

    const carritoId = buscar_carrito[0].id_carrito;

    const [carrito_items] = await pool.query(
      "SELECT * FROM carrito_item WHERE id_carrito = ?",
      [carritoId]
    );

    if (carrito_items.length === 0) {
      return NextResponse.json({ message: "Carrito vacío" }, { status: 404 });
    }

    const idsProductos = carrito_items.map((item) => item.id_producto);
    const [productosDisponibles] = await pool.query(
      "SELECT * FROM vista_productos_venta WHERE id_producto IN (?) AND estado = 'Disponible'",
      [idsProductos]
    );

    for (const item of carrito_items) {
      const producto = productosDisponibles.find(
        (p) => p.id_producto === item.id_producto
      );

      if (producto) {
        if (item.cantidad > producto.stock) {
          return NextResponse.json(
            {
              message:
                "No hay suficiente stock para el producto: ${producto.nombre}. Stock disponible: ${producto.stock}.",
            },
            { status: 400 }
          );
        }
      }
    }
    const fechaEnvio = new Date();
    fechaEnvio.setMonth(fechaEnvio.getMonth() + 3);
    const fechaEnvioFormateada = fechaEnvio.toISOString().slice(0, 10);

    const [nuevaVenta] = await pool.query(
      "INSERT INTO venta (id_cliente, id_empleado, id_metodo_pago, registro_venta, fecha_envio, pais, codigo_postal, direccion_completa, ciudad, region, referencia) VALUES (?, 2, 4, NOW(), ?, ?, ?, ?, ?, ?, ?)",
      [
        payload.id,
        fechaEnvioFormateada,
        pais,
        cpostal,
        direccion,
        ciudad,
        region,
        referencia,
      ]
    );

    const ventaId = nuevaVenta.insertId;
    let totalVenta = 0;
    for (const producto of productosDisponibles) {
      const subtotal = producto.precio - producto.descuento_fijo;
      totalVenta += subtotal;
      await pool.query(
        "SELECT id_producto FROM producto_item WHERE id_producto_item =?",
        [producto.id_producto_item]
      );

      await pool.query(
        "INSERT INTO detalle_venta (id_venta, id_producto, cantidad_ordenada, subtotal, descuento) VALUES (?, ?, ?, ?, ?)",
        [
          ventaId,
          producto.id_producto_item,
          1,
          subtotal,
          producto.descuento_fijo,
        ]
      );

      await pool.query(
        "UPDATE producto_item SET id_estado = 2 WHERE id_producto_item = ?",
        [producto.id_producto_item]
      );
    }
    await pool.query("UPDATE venta SET pago_total = ? WHERE id_venta = ?", [
      totalVenta,
      ventaId,
    ]);

    await pool.query("DELETE FROM carrito_item WHERE id_carrito = ?", [
      carritoId,
    ]);
    await pool.query("DELETE FROM carrito WHERE id_carrito = ?", [carritoId]);

    return NextResponse.json(
      { message: "Venta realizada con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error durante el proceso de venta:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
