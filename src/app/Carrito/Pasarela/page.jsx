"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { useCompra } from "../CompraContext";
import { useState } from "react";
function Pasarela() {
  const router = useRouter();
  const [errorItems, setErrorItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { compra } = useCompra();
  const venta = async () => {
    try {
      const url = "/api/venta";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pais: compra.pais,
          cpostal: compra.cpostal,
          direccion: compra.direccion,
          referencia: compra.referencia,
          region: compra.region,
          ciudad: compra.ciudad,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.error && data.items) {
          setErrorMessage(data.error);
          setErrorItems(data.items);
        } else {
          throw new Error("Error inesperado en el proceso de compra.");
        }
        return;
      }

      console.log("Compra exitosa:", data.message);
      setErrorMessage("");
      setErrorItems([]);
    } catch (error) {
      setErrorMessage(
        "Hubo un problema al realizar la venta. Intenta nuevamente."
      );
    }
  };
  return (
    <div className="w-full flex flex-wrap justify-center p-5 md:px-5 lg:px-20 mb-4 border-t-4 border-zinc-200">
      <div className="text-xl my-4 w-full flex flex-col items-center">
        <div className="w-full md:w-1/2 p-5 md:px-10 lg:px-20 justify-between items-center flex">
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            &#10003;
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            2
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center">
            3
          </div>
        </div>
        <div className="w-full md:w-1/2 justify-between items-center flex text-sm md:text-base text-center">
          <div className="flex justify-center items-center w-1/3">
            <p>Carrito de Compras</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Pasarela de Pagos</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Confirmación del Pago</p>
          </div>
        </div>
        <div className="text-left w-full mt-3 max-lg:mt-6 flex items-center">
          <div className="border-2 border-green-600 rounded-full w-10 h-10 flex justify-center items-center">
            2
          </div>
          <h2 className="px-2">Pasarela de Pagos</h2>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-5 shadow-lg md:px-5 lg:px-20">
        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4">
            <p className="font-bold">{errorMessage}</p>
            {errorItems.length > 0 && (
              <ul className="mt-2 list-disc list-inside">
                {errorItems.map((item, index) => (
                  <li key={index}>
                    Producto: <strong>{item.product}</strong>, Solicitado:{" "}
                    {item.requestedQuantity}, Disponible: {item.availableStock}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        <PayPalScriptProvider
          options={{
            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          }}
        >
          <PayPalButtons
            style={{ color: "blue", label: "buynow" }}
            createOrder={async () => {
              const order = await fetch("/api/pasarela/paypal", {
                method: "POST",
              });
              const res = await order.json();
              return res.id;
            }}
            onCancel={(data) => {
              console.log(data);
            }}
            onApprove={async (data, actions) => {
              try {
                const capture = await actions.order.capture();
                console.log("Pago aprobado:", data);
                console.log("Captura exitosa:", capture);
                await venta();
                const UpdateCarEvent = new CustomEvent("deletecart");
                window.dispatchEvent(UpdateCarEvent);
                router.push("/Carrito/Confirmacion");
              } catch (error) {
                console.error("Error al capturar el pago:", error);
              }
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default Pasarela;
