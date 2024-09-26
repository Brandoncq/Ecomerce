"use client";
import { useState, useEffect } from "react";

export default function Buscador({ params }) {
  const [productos, setroductos] = useState([]);
  const getProducto = async () => {
    console.log(params);
    console.log(decodeURIComponent(params));
    const productos = await fetch(
      `/api/buscador?query=${decodeURIComponent(params.id)}`
    ).then((res) => res.json());
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
    setroductos(refinando);
  };
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <div className="w-full flex flex-col min-h-lvh">
      <section className="w-full flex">
        {productos.map((producto, index) => (
          <div className="w-full flex flex-wrap px-2 md:px-20" key={index}>
            <div className="w-full md:w-1/2 p-2 flex flex-col justify-center">
              <h2 className="text-2xl md:text-4xl text-blue-600 font-semibold mb-1">
                {producto.nombre_producto}
              </h2>

              <h3 className="text-xl md:text-3xl mb-1">{producto.modelo}</h3>
              <p className="text-sm md:md:text-base mb-1">
                {producto.descripcion}
              </p>
              <h2 className="text-2xl md:text-4xl mb-1">A partir de:</h2>
              <h2 className="text-3xl md:text-5xl font-base my-2">
                S/.{producto.precio_unitario}
              </h2>
            </div>
            <div className="w-full md:w-1/2 p-2 md:px-20">
              <img
                className="w-full"
                src="https://p1-ofp.static.pub//fes/cms/2024/04/01/w5xzl0a0vcja2jirmi04tmaxy7nw1g409296.png"
                alt=""
              />
            </div>
          </div>
        ))}
      </section>
      <section className="w-full flex"></section>
    </div>
  );
}
