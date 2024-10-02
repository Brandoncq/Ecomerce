"use client";
import { useState, useEffect } from "react";

export default function Computadoras() {
  const [Computadoras, setComputadoras] = useState([]);
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
    setComputadoras(refinando);
  };
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <div className="w-full flex flex-col min-h-lvh">
      <section className="w-full flex">
        <div
          className="w-full h-auto md:h-20 flex flex-wrap justify-start items-center px-5 max-md:py-4"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
          }}
        >
          <div className="w-full md:w-auto">
            <h2 className="text-white text-3xl md:text-6xl font-bold text-center">
              Ofertas
            </h2>
          </div>
          <div className="flex flex-col px-6 text-white items-start w-full md:w-auto">
            <h3 className="text-xl md:text-3xl font-bold text-center">
              ¡Aprovecha las mejores ofertas y envío gratis!
            </h3>
            <p className="text-base">
              Comprar un equipo Compu-Fenix tiene sus beneficios, conoce
              nuestras Promociones vigentes Descuentos para Pymes | Descuentos
              para estudiantes
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex">
        <div className="w-full px-2 md:px-20 flex flex-wrap">
          {Computadoras.map((Computadora, index) => (
            <div className="w-1/2 md:w-1/5 p-2" key={index}>
              <div className="w-full p-2 flex flex-col shadow-md shadow-zinc-400">
                <img
                  className="w-full cursor-pointer"
                  src={Computadora.imagen}
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
