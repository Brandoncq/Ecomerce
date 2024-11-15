import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";
import pool from "../../config/route";
import { jwtVerify } from "jose";
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);

const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req) {
  const MytokenName = req.cookies.get("Sesion");

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
      const [existingItems] = await pool.query(
        `SELECT ci.id_producto, ci.cantidad, p.nombre_producto, p.stock, p.precio_unitario
             FROM carrito_item ci 
             JOIN producto p ON ci.id_producto = p.id_producto 
             WHERE ci.id_carrito = ?`,
        [buscar_carrito[0].id_carrito]
      );
      const insufficientStockItems = existingItems.filter(
        (item) => item.cantidad > item.stock
      );
      if (insufficientStockItems.length > 0) {
        return NextResponse.json({
          error: "Stock insuficiente para algunos artículos del carrito",
          items: insufficientStockItems.map((item) => ({
            product: item.nombre_producto,
            requestedQuantity: item.cantidad,
            availableStock: item.stock,
          })),
        });
      }
      const totalAmount = existingItems.reduce(
        (total, item) =>
          total + parseFloat(item.precio_unitario) * item.cantidad,
        0
      );
      const paypalItems = existingItems.map((item) => ({
        name: item.nombre_producto,
        quantity: String(item.cantidad),
        unit_amount: {
          currency_code: "USD",
          value: String(parseFloat(item.precio_unitario).toFixed(2)),
        },
      }));
      const paypalRequest = new paypal.orders.OrdersCreateRequest();
      paypalRequest.requestBody({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: String(totalAmount),
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: String(totalAmount),
                },
              },
            },
            items: paypalItems,
          },
        ],
      });
      const response = await client.execute(paypalRequest);
      if (response.result && response.result.id) {
        return NextResponse.json({ id: response.result.id });
      } else {
        return NextResponse.json({ error: "Error creating PayPal order" });
      }
    }
  }

  return NextResponse.json({ error: "No items found in cart" });
}
