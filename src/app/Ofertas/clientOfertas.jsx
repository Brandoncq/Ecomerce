"use client";
import Productos from "@/components/Productos";
import { useState } from "react";
import Link from "next/link";

function ClientOfertas() {
  const categories = [
    { id: 1, name: "Laptops Gamer", link: "/Comprar/LaptopsGamer?ofertas=Si" },
    {
      id: 2,
      name: "Laptops de Oficina",
      link: "/Comprar/LaptopsOficina?ofertas=Si",
    },
    { id: 3, name: "Monitores", link: "/Comprar/Monitores?ofertas=Si" },
    { id: 4, name: "Impresoras", link: "/Comprar/Impresoras?ofertas=Si" },
    { id: 5, name: "Perifericos", link: "/Comprar/Perifericos?ofertas=Si" },
  ];

  const [resultados, setResultados] = useState([]);

  const actualizarResultados = (index, valor) => {
    setResultados((prev) => {
      const copia = [...prev];
      copia[index] = valor;
      return copia;
    });
  };

  return (
    <div className="w-full flex flex-wrap">
      {categories.map((category, index) =>
        resultados[index] !== 0 ? (
          <div
            key={category.id}
            className="w-full flex flex-col items-center px-2 md:px-20 my-5"
          >
            <h2 className="text-4xl font-light my-4">{category.name}</h2>
            <div className="w-full flex px-2 md:px-20">
              <div className="w-full flex md:px-20">
                <Productos
                  filtros={{
                    id_categoria_producto: category.id,
                    ofertas: ["Si"],
                  }}
                  setResultados={(valor) => actualizarResultados(index, valor)}
                  centrar={true}
                />
              </div>
            </div>
            <Link
              href={category.link}
              className="select-none transition-all duration-300 ease-in-out bg-blue-600 border-2 hover:bg-zinc-200 text-white hover:text-blue-600 hover:border-blue-600 py-3 px-4 rounded-md text-lg my-1 font-semibold"
            >
              Ver más {category.name} en Oferta
            </Link>
          </div>
        ) : null
      )}
    </div>
  );
}

export default ClientOfertas;
