"use client";
import { useRouter } from "next/navigation";
import AgregarCarrito from "./AgregarCarrito";

export default function Productos({ produtos }) {
  const router = useRouter();
  const redireccion = (suggestion) => {
    router.push(`/Buscar/${suggestion}`);
  };

  return (
    <div className="w-full md:p-10 grid grid-cols-2 md:grid-cols-4 gap-0 items-stretch">
      {produtos.map((produto, index) => (
        <div
          className="hover:border-zinc-500 border border-zinc-200 group"
          key={index}
        >
          <div className="w-full p-2 flex flex-col h-full">
            <div className="w-full p-2 flex flex-col h-full">
              <img
                className="w-full cursor-pointer group-hover:scale-110 transition-all duration-300 ease-in-out p-4 group"
                src={produto.imagen}
                alt=""
                onClick={() => {
                  redireccion(produto.nombre_producto);
                }}
              />
              <div className="w-full flex bg-zinc-200 mb-2 mt-4">
                <div
                  className={`w-2 ${
                    produto.stock > 0 ? "bg-green-600" : "bg-zinc-500"
                  }`}
                ></div>
                <div className="px-2 text-left text-base text-zinc-600 p-1">
                  <h2>{produto.stock > 0 ? "En inventario" : "Agotado"}</h2>
                </div>
              </div>
              <h2
                className="text-lg text-blue-600 cursor-pointer"
                onClick={() => {
                  redireccion(produto.nombre_producto);
                }}
              >
                {produto.nombre_producto}
              </h2>
              <h2 className="text-lg">A partir de:</h2>
              <h2 className="text-2xl font-semibold">
                S/.{produto.precio_unitario}
              </h2>
              <h3>{produto.modelo}</h3>
              <p className="text-xs my-2">{produto.descripcion}</p>
            </div>

            <div className="mt-auto flex flex-col items-start xl:px-4">
              {/* Conditionally render the button and the Add to Cart component */}
              {produto.stock > 0 ? (
                <>
                  <AgregarCarrito
                    productId={produto.id}
                    productName={produto.nombre_producto}
                  />
                </>
              ) : (
                <div className="text-gray-500 py-5 cursor-pointer">
                  {" "}
                  <a
                    onClick={() => {
                      redireccion(produto.nombre_producto);
                    }}
                    className="px-1 rounded hover:text-zinc-600 flex items-center hover:underline hover:underline-offset-8"
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
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
