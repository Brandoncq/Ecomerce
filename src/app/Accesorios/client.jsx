"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientAccesorioss() {
  const router = useRouter();
  const [Accesorios, setAccesorios] = useState([]);
  const getProducto = async () => {
    const productos = await fetch("/api/producto").then((res) => res.json());
    console.log(productos);
    const refinando = [];
    productos.map((values) => {
      refinando.push({
        nombre_producto: values.nombre_producto,
        precio_unitario: values.precio_unitario,
        modelo: values.modelo,
        imagen: values.imagen,
        descripcion: values.descripcion,
      });
    });
    setAccesorios(refinando);
  };
  const redireccion = (suggestion) => {
    router.push(`/Buscar/${suggestion}`);
  };
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <div className="w-full px-2 md:px-20 flex flex-wrap">
      {Accesorios.map((Accesorio, index) => (
        <div className="w-1/2 md:w-1/5 p-2" key={index}>
          <div className="w-full p-2 flex flex-col shadow-md shadow-zinc-400">
            <img
              className="w-full cursor-pointer"
              src="https://p1-ofp.static.pub//fes/cms/2024/04/01/w5xzl0a0vcja2jirmi04tmaxy7nw1g409296.png"
              alt=""
              onClick={() => {
                redireccion(Accesorio.nombre_producto);
              }}
            />
            <h2
              className="text-lg text-blue-600 cursor-pointer"
              onClick={() => {
                redireccion(Accesorio.nombre_producto);
              }}
            >
              {Accesorio.nombre_producto}
            </h2>
            <h2 className="text-lg">A partir de:</h2>
            <h2 className="text-2xl font-semibold">
              S/.{Accesorio.precio_unitario}
            </h2>
            <h3>{Accesorio.modelo}</h3>
            <p className="text-xs my-2">{Accesorio.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
