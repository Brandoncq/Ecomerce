import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);
export async function POST(req) {
  const price = await req.json();
  const request = new paypal.orders.OrdersCreateRequest();
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: String(price.price),
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: String(price.price),
            },
          },
        },
        items: [
          {
            name: "Laptop",
            description: "Equipo de Computo",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: String(price.price),
            },
          },
        ],
      },
    ],
  });
  const response = await client.execute(request);
  return NextResponse.json({ id: response.result.id });
}
