"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientMonitores() {
  const router = useRouter();
  const [Monitores, setMonitores] = useState([]);
  const getProducto = async () => {
    const productos = await fetch("/api/producto").then((res) => res.json());
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
    setMonitores(refinando);
  };
  useEffect(() => {
    getProducto();
  }, []);
  const redireccion = (suggestion) => {
    router.push(`/Buscar/${suggestion}`);
  };

  return (
    <div className="w-full px-2 md:px-20 flex flex-wrap">
      {Monitores.map((Monitor, index) => (
        <div className="w-1/2 md:w-1/5 p-2" key={index}>
          <div className="w-full p-2 flex flex-col shadow-md shadow-zinc-400">
            <img
              className="w-full cursor-pointer"
              src="https://p1-ofp.static.pub//fes/cms/2024/04/01/w5xzl0a0vcja2jirmi04tmaxy7nw1g409296.png"
              alt=""
              onClick={() => {
                redireccion(Monitor.nombre_producto);
              }}
            />
            <h2
              className="text-lg text-blue-600 cursor-pointer"
              onClick={() => {
                redireccion(Monitor.nombre_producto);
              }}
            >
              {Monitor.nombre_producto}
            </h2>
            <h2 className="text-lg">A partir de:</h2>
            <h2 className="text-2xl font-semibold">
              S/.{Monitor.precio_unitario}
            </h2>
            <h3>{Monitor.modelo}</h3>
            <p className="text-xs my-2">{Monitor.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
