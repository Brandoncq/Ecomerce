"use client";
import Link from "next/link";
import { useCompra } from "../CompraContext";
function ConfirmarPago() {
  const { compra } = useCompra();
  return (
    <div className="w-full flex flex-wrap justify-center p-5 md:px-5 lg:px-20 mb-4 border-t-4 border-zinc-200">
      <div className="text-xl my-4 w-full flex flex-col items-center">
        <div className="w-full md:w-1/2 p-5 md:px-10 lg:px-20 justify-between items-center flex">
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            &#10003;
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            &#10003;
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
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
            3
          </div>
          <h2 className="px-2">Confirmación del Pago</h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 shadow-lg md:px-5 lg:px-20">
        <h3 className="text-2xl font-bold mb-4 text-green-600">
          ¡Pago Confirmado!
        </h3>
        <p className="text-gray-700 mb-6">
          Tu pago ha sido procesado con éxito. Gracias por tu compra.
        </p>

        <div className="mb-4">
          <p className="text-gray-500">Número de pedido:</p>
          <p className="text-lg font-semibold">#{compra.ventaId}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Monto total pagado:</p>
          <p className="text-lg font-semibold">S/. {compra.totalVenta}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <Link
            href={"/Dashboard"}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Ver detalles del pedido
          </Link>
          <Link
            href={"/"}
            className="bg-zinc-200 text-zinc-700 py-2 px-4 rounded-lg mt-3 md:mt-0 hover:bg-zinc-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmarPago;
