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

    // Obtener las ventas asociadas al cliente autenticado
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

    // Iterar sobre las ventas para obtener los detalles
    for (const venta of ventas) {
      const [detallesVenta] = await pool.query(
        `SELECT 
          dv.id_detalle_venta,
          dv.id_producto,
          dv.cantidad_ordenada,
          dv.subtotal,
          p.nombre_producto AS producto_nombre,
          p.imagen,
          GROUP_CONCAT(pi.serie) AS series
        FROM 
          detalle_venta dv
        LEFT JOIN 
          detalle_venta_has_producto_item dvhpi ON dv.id_detalle_venta = dvhpi.id_detalle_venta
        LEFT JOIN 
          producto_item pi ON dvhpi.id_producto_item = pi.id_producto_item
        LEFT JOIN 
          producto p ON dv.id_producto = p.id_producto
        WHERE 
          dv.id_venta = ?
        GROUP BY 
          dv.id_detalle_venta;`,
        [venta.id_venta]
      );

      detallesVenta.forEach((detalle) => {
        detalle.series = detalle.series ? detalle.series.split(",") : [];
      });
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

    const { pais, cpostal, direccion, referencia, region, ciudad, factura } =
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
    fechaEnvio.setDate(fechaEnvio.getDate() + 14);
    const fechaEnvioFormateada = fechaEnvio.toISOString().slice(0, 10);

    let total = 0;
    for (const item of carrito_items) {
      const producto = productosDisponibles.find(
        (p) => p.id_producto === item.id_producto
      );
      const descuento =
        item.cantidad *
        (producto.descuento_fijo > 0
          ? (1 - producto.descuento_fijo) * producto.precio
          : producto.descuento_fijo < 0
          ? -producto.descuento_fijo
          : 0);
      total += (producto.precio - descuento) * item.cantidad;
    }
    const [nuevaVenta] = await pool.query(
      "INSERT INTO venta (id_cliente, id_empleado, id_metodo_pago, pago_total, registro_venta, fecha_envio, pais, codigo_postal, direccion_completa, ciudad, region, referencia) VALUES (?, 2, 4, ?, NOW(), ?, ?, ?, ?, ?, ?, ?)",
      [
        payload.id,
        total,
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

    for (const item of carrito_items) {
      const producto = productosDisponibles.find(
        (p) => p.id_producto === item.id_producto
      );
      const subtotal = item.cantidad * producto.precio;
      const descuento =
        item.cantidad *
        (producto.descuento_fijo > 0
          ? (1 - producto.descuento_fijo) * producto.precio
          : producto.descuento_fijo < 0
          ? -producto.descuento_fijo
          : 0);

      await pool.query(
        "INSERT INTO detalle_venta (id_venta, id_producto, cantidad_ordenada, subtotal, descuento) VALUES (?, ?, ?, ?, ?)",
        [ventaId, item.id_producto, item.cantidad, subtotal, descuento]
      );
    }

    await pool.query("DELETE FROM carrito_item WHERE id_carrito = ?", [
      carritoId,
    ]);
    await pool.query("DELETE FROM carrito WHERE id_carrito = ?", [carritoId]);

    const [max_num] = await pool.query(
      `SELECT MAX(numero) AS ultimo_numero 
       FROM comprobante 
       WHERE serie = ?`,
      [factura ? "F100" : "B100"]
    );

    const ultimoNumero = max_num[0]?.ultimo_numero || 0;
    const nuevoNumero = ultimoNumero + 1;
    console.log(factura);
    await pool.query(
      `INSERT INTO comprobante (
            id_venta,
            tipo_comprobante,
            serie,
            numero,
            fecha_emision,
            subtotal,
            impuestos,
            total
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        ventaId,
        factura ? "FACTURA" : "BOLETA",
        factura ? "F100" : "B100",
        nuevoNumero,
        new Date(),
        total * 0.82,
        total * 0.18,
        total,
      ]
    );

    return NextResponse.json(
      {
        message: "Venta realizada con éxito",
        ventaId: ventaId,
        totalVenta: total,
      },
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
