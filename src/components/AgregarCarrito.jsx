import { useRouter } from "next/navigation";
import { useState } from "react";

function AgregarCarrito({ productId, productName }) {
  const [error, setError] = useState("");
  const router = useRouter();
  const addToCart = async (id) => {
    try {
      const response = await fetch("/api/carrito", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        setError(data.message);
        throw new Error("Error al agregar el producto al carrito.");
      }

      const AddCarEvent = new CustomEvent("addcart");
      window.dispatchEvent(AddCarEvent);
    } catch (err) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
      <div className="w-full min-h-6 flex justify-center my-3">
        {error && (
          <p className="text-red-500 text-sm font-semibold text-center">
            {error}
          </p>
        )}
      </div>
      <button className="transition-all duration-300 ease-in-out bg-blue-600 border-2 hover:bg-zinc-200 text-white hover:text-blue-600 hover:border-blue-600 p-2 rounded-md w-full text-lg my-1 font-semibold">
        Comprar
      </button>
      <div className="flex flex-col items-center justify-center w-full my-1">
        <div className="flex max-xl:flex-col items-center justify-between w-full">
          <div className="cursor-pointer max-xl:order-last">
            <a
              onClick={() => {
                router.push(`/Buscar/${productName}`);
              }}
              className="px-1 rounded hover:text-zinc-600 transition-all ease-in-out duration-300 flex items-center hover:underline hover:underline-offset-8 max-md:mt-5"
            >
              Ver detalles{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="100"
                fill="none"
                viewBox="0 0 50 100"
                className="w-5 h-8"
              >
                <path
                  stroke="#000"
                  strokeWidth="3"
                  d="M11 31l28 25-28 25"
                ></path>
              </svg>
            </a>
          </div>
          <button
            className="p-3 bg-zinc-800 text-white border-2 hover:text-zinc-800 hover:border-zinc-800 rounded-md text-sm lg:text-lg font-semibold lg:ml-1 hover:bg-zinc-200 transition-all duration-300 ease-in-out max-xl:w-full max-xl:mt-2"
            onClick={() => addToCart(productId)}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
}
export default AgregarCarrito;
