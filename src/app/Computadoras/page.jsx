"use client";
import { useState, useEffect } from "react";

export default function Computadoras() {
  const [Computadoras, setComputadoras] = useState([]);
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
    setComputadoras(refinando);
  };
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <div className="w-full flex flex-col min-h-lvh">
      <section className="w-full flex">
        <div
          className="w-full h-28 md:h-44 flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582731595896-f959c4fb1509?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <h2 className="text-white text-xl md:text-4xl font-bold text-center">
            Computadoras de Escritorio y All in One
          </h2>
        </div>
      </section>
      <section className="w-full flex">
        <div className="w-full px-2 md:px-20 flex flex-wrap">
          {Computadoras.map((Computadora) => (
            <div className="w-1/2 md:w-1/5 p-2">
              <div className="w-full p-2 flex flex-col shadow-md shadow-zinc-400">
                <img
                  className="w-full cursor-pointer"
                  src="https://p1-ofp.static.pub//fes/cms/2024/04/01/w5xzl0a0vcja2jirmi04tmaxy7nw1g409296.png"
                  alt=""
                />
                <h2 className="text-lg text-blue-600 cursor-pointer">
                  {Computadora.nombre_producto}
                </h2>
                <h2 className="text-lg">A partir de:</h2>
                <h2 className="text-2xl font-semibold">
                  S/.{Computadora.precio_unitario}
                </h2>
                <h3>{Computadora.modelo}</h3>
                <p className="text-xs my-2">{Computadora.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
