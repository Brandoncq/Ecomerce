"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientTablets() {
  const router = useRouter();
  const [tablets, setTablets] = useState([]);
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
    setTablets(refinando);
  };
  useEffect(() => {
    getProducto();
  }, []);
  const redireccion = (suggestion) => {
    router.push(`/Buscar/${suggestion}`);
  };
  return (
    <div className="w-full px-2 md:px-20 flex flex-wrap">
      {tablets.map((tablet, index) => (
        <div className="w-1/2 md:w-1/5 p-2" key={index}>
          <div className="w-full p-2 flex flex-col shadow-md shadow-zinc-400">
            <img
              className="w-full cursor-pointer"
              src={tablet.imagen}
              alt=""
              onClick={() => {
                redireccion(tablet.nombre_producto);
              }}
            />
            <h2
              className="text-lg text-blue-600 cursor-pointer"
              onClick={() => {
                redireccion(tablet.nombre_producto);
              }}
            >
              {tablet.nombre_producto}
            </h2>
            <h2 className="text-lg">A partir de:</h2>
            <h2 className="text-2xl font-semibold">
              S/.{tablet.precio_unitario}
            </h2>
            <h3>{tablet.modelo}</h3>
            <p className="text-xs my-2">{tablet.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
