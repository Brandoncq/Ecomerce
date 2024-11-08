import { useRouter } from "next/navigation";
import { useState } from "react";

function AgregarCarrito({ productId, productName }) {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const addToCart = async (id) => {
    setIsLoadingButton(true);
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
        setError(data.error);
        throw new Error("Error al agregar el producto al carrito.");
      }

      const AddCarEvent = new CustomEvent("addcart");
      window.dispatchEvent(AddCarEvent);
      setIsLoadingButton(false);
    } catch (err) {
      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setIsLoadingButton(false);
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
      <button className="select-none transition-all duration-300 ease-in-out bg-blue-600 border-2 hover:bg-zinc-200 text-white hover:text-blue-600 hover:border-blue-600 py-3 px-2 rounded-md w-full text-lg my-1 font-semibold">
        COMPRAR
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
            className="flex flex-1 justify-center items center bg-zinc-800 hover:border-zinc-800 rounded-md text-sm lg:text-lg font-semibold hover:bg-zinc-200 transition-all duration-300 ease-in-out max-xl:w-full max-xl:mt-2 border-2"
            onClick={() => addToCart(productId)}
          >
            {isLoadingButton ? (
              <div className="w-full flex justify-center items-center p-3.5">
                <svg
                  aria-hidden="true"
                  className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <div className="w-full flex justify-center p-3 items-center fill-white stroke-white transition-all ease-in-out duration-300 hover:fill-zinc-800 hover:stroke-zinc-800 space-x-2 text-white hover:text-zinc-800">
                <p className="select-none text-lg">AGREGAR</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="133.333"
                  height="133.333"
                  version="1"
                  viewBox="0 0 100 100"
                  className="w-8 h-8"
                >
                  <path d="M.4 5.4C.1 6.2 0 7.9.2 9.2c.2 1.8 1 2.4 3.6 2.6 2.7.3 3.5-.1 3.9-1.9.6-2 1-2.1 6.6-1.6 3.3.3 6.6 1.2 7.4 2S27.1 27.5 32 46.9c4.8 19.3 9.6 36.3 10.6 37.8 1.1 1.8 1.7 4.3 1.5 7-.2 3.1.3 4.7 1.8 6.2 2.8 2.8 9.3 2.9 12.1.1 1.3-1.3 2-3.3 2-6v-4h10v4c0 5.3 2.7 8 8 8 7 0 10.1-6.2 6.8-13.5L83.7 84H68.5c-20 0-21-.2-22.9-5.1-2.9-7.2-3.7-6.9 17.2-6.9h18.9l7.1-19c4-10.4 7.2-19.9 7.2-21 0-2-.6-2-31.4-2H33.2L31 20.7C28.4 10.1 26.8 6.5 24.1 5c-1.1-.5-6.7-1-12.6-1C3.3 4 .8 4.3.4 5.4M90 34.7c0 .3-2.8 8-6.2 17L77.6 68H42.4l-4.1-17-4-17h27.9c15.3 0 27.8.3 27.8.7"></path>
                  <path d="M60.7 37.6c-.4.4-.7 2.9-.7 5.5v4.8l-5.2.3c-3.9.2-5.3.7-5.3 1.8s1.4 1.6 5.3 1.8l5.2.3v5c0 4.2.3 4.9 2 4.9s2-.7 2-5v-5h5c4.3 0 5-.3 5-2s-.7-2-4.9-2h-5l-.3-5.2c-.3-4.8-1.5-6.8-3.1-5.2"></path>
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
export default AgregarCarrito;
