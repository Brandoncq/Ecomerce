"use client";
import { useRouter } from "next/navigation";
import AgregarCarrito from "./AgregarCarrito";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Productos({
  filtros,
  paginaActual,
  setResultados,
  limite,
  list,
  centrar,
}) {
  const router = useRouter();
  const [productos, setProducto] = useState([]);
  const cambiarPagina = async (nuevaPagina) => {
    const dynamicFilters = Object.fromEntries(
      Object.entries(filtros)
        .map(([key, value]) => {
          if (Array.isArray(value) && value.length > 0) {
            const isRange =
              value[0] &&
              typeof value[0] === "object" &&
              "min" in value[0] &&
              "max" in value[0];
            if (isRange) {
              return [
                key,
                value.map(({ min, max }) => `${min}-${max}`).join(","),
              ];
            }
            return [key, value.join(",")];
          } else if (
            !Array.isArray(value) &&
            value !== null &&
            value !== undefined &&
            value !== ""
          ) {
            return [key, value];
          }
          return undefined;
        })
        .filter(Boolean)
    );
    const queryParams = new URLSearchParams({
      ...dynamicFilters,
      list: list,
      ...(limite ? { limit: limite } : {}),
      ...(nuevaPagina ? { page: nuevaPagina } : {}),
    }).toString();

    const queryParamsForUrl = new URLSearchParams(queryParams);
    queryParamsForUrl.delete("id_categoria_producto");
    queryParamsForUrl.delete("list");
    const queryString = queryParamsForUrl.toString();
    router.push(`?${queryString}`, undefined, { shallow: true });

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
        descuento: values.descuento_fijo,
      });
    });
    setProducto(refinando);
    setResultados(refinando.length);
  };
  const redireccion = (nombre_producto) => {
    router.push(`/Buscar/${nombre_producto}`);
  };
  useEffect(() => {
    cambiarPagina(paginaActual);
  }, [JSON.stringify(filtros), paginaActual, limite, list]);
  return (
    <div
      className={`w-full max-w-full md:py-5 md:px-2 flex flex-wrap items-stretch ${
        centrar ? "justify-center" : ""
      }`}
    >
      {productos.map((producto, index) => (
        <div
          className="hover:border-zinc-500 border border-zinc-200 group w-full md:w-1/3"
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
              <Link
                className="text-lg text-blue-600 cursor-pointer"
                href={`/Buscar/${producto.nombre_producto}`}
              >
                {producto.nombre_producto}
              </Link>
              <h2 className="text-lg">A partir de:</h2>
              <h2 className="text-2xl font-semibold flex max-xl:flex-col">
                {producto.stock > 0 ? (
                  producto.descuento > 0 ? (
                    <>
                      <span className="line-through text-gray-500 font-light">
                        S/.{producto.precio_unitario}
                      </span>
                      <span className="text-blue-700 xl:ml-2">
                        S/.
                        {(
                          producto.precio_unitario * producto.descuento
                        ).toFixed(2)}
                      </span>
                    </>
                  ) : producto.descuento < 0 ? (
                    <>
                      <span className="line-through text-gray-500 font-light">
                        S/.{producto.precio_unitario}
                      </span>
                      <span className="text-blue-700 xl:ml-2">
                        S/.
                        {(
                          parseFloat(producto.precio_unitario) +
                          parseFloat(producto.descuento)
                        ).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <>S/.{producto.precio_unitario}</>
                  )
                ) : (
                  <>S/.{producto.precio_unitario}</>
                )}
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
                <div className="w-full flex justify-center text-gray-500 py-2 xl:py-5 cursor-pointer">
                  <Link
                    href={`/Buscar/${producto.nombre_producto}`}
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
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
