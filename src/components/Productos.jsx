"use client";
import { useRouter } from "next/navigation";
import AgregarCarrito from "./AgregarCarrito";
import { useEffect, useState } from "react";
export default function Productos({ filtros, paginaActual, limite, list }) {
  const router = useRouter();
  const [productos, setProducto] = useState([]);
  const cambiarPagina = async (nuevaPagina) => {
    const queryParams = new URLSearchParams(
      Object.fromEntries(
        Object.entries({
          ...filtros,
          list: list,
          modelos:
            Array.isArray(filtros.modelos) && filtros.modelos.length > 0
              ? filtros.modelos.join(",")
              : undefined,
          precios:
            filtros.precios.length > 0
              ? filtros.precios.map(({ min, max }) => `${min}-${max}`).join(",")
              : undefined,
          limit: limite,
          page: nuevaPagina,
        }).filter(([_, value]) => value != null && value !== "")
      )
    ).toString();
    const queryParamsForUrl = new URLSearchParams(queryParams);

    queryParamsForUrl.delete("id_categoria_producto");
    queryParamsForUrl.delete("list");

    router.push(`?${queryParamsForUrl}`);
    const url = `/api/producto?${queryParams}`;

    const productos_get = await fetch(url).then((res) => res.json());
    const refinando = [];
    productos_get.map((values) => {
      refinando.push({
        id: values.id_producto,
        nombre_producto: values.nombre_producto,
        stock: values.stock,
        precio_unitario: values.precio_unitario,
        modelo: values.modelo,
        imagen: values.imagen,
        descripcion: values.descripcion,
      });
    });
    setProducto(refinando);
  };

  useEffect(() => {
    cambiarPagina(paginaActual);
  }, [filtros, paginaActual, limite, list]);

  const redireccion = (suggestion) => {
    router.push(`/Buscar/${suggestion}`);
  };
  return (
    <div className="w-full md:py-5 md:px-2 grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch">
      {productos.map((producto, index) => (
        <div
          className="hover:border-zinc-500 border border-zinc-200 group"
          key={index}
        >
          <div className="w-full p-2 flex flex-col h-full">
            <div className="w-full p-2 flex flex-col h-full">
              <img
                className="w-full cursor-pointer group-hover:scale-[1.075] transition-all duration-500 ease-in-out p-4 group"
                src={producto.imagen}
                alt=""
                onClick={() => {
                  redireccion(producto.nombre_producto);
                }}
              />
              <div className="w-full flex bg-zinc-200 mb-2 mt-4">
                <div
                  className={`w-2 ${
                    producto.stock > 0 ? "bg-green-600" : "bg-zinc-500"
                  }`}
                ></div>
                <div className="px-2 text-left text-base text-zinc-600 p-1">
                  <h2>{producto.stock > 0 ? "En inventario" : "Agotado"}</h2>
                </div>
              </div>
              <h2
                className="text-lg text-blue-600 cursor-pointer"
                onClick={() => {
                  redireccion(producto.nombre_producto);
                }}
              >
                {producto.nombre_producto}
              </h2>
              <h2 className="text-lg">A partir de:</h2>
              <h2 className="text-2xl font-semibold">
                S/.{producto.precio_unitario}
              </h2>
              <h3>{producto.modelo}</h3>
              <p className="text-xs my-2">{producto.descripcion}</p>
            </div>

            <div className="mt-auto flex flex-col items-start xl:px-4">
              {producto.stock > 0 ? (
                <>
                  <AgregarCarrito
                    productId={producto.id}
                    productName={producto.nombre_producto}
                  />
                </>
              ) : (
                <div className="text-gray-500 py-5 cursor-pointer">
                  {" "}
                  <a
                    onClick={() => {
                      redireccion(producto.nombre_producto);
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
