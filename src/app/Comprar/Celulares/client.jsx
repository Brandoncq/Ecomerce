"use client";
import Productos from "@/components/Productos";
import { useState, useEffect } from "react";
export default function ClientCelulares() {
  const [filtros, setFiltros] = useState({
    id_categoria_producto: 1,
    precios: [],
    modelos: [],
  });

  const handleCheckboxChangePrecios = (minPrecio, maxPrecio, event) => {
    if (event.target.checked) {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        precios: [...prevFiltros.precios, { min: minPrecio, max: maxPrecio }],
      }));
    } else {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        precios: prevFiltros.precios.filter(
          (rango) => !(rango.min === minPrecio && rango.max === maxPrecio)
        ),
      }));
    }
  };

  const handleCheckboxChangeModelo = (modelo, event) => {
    if (event.target.checked) {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        modelos: [...(prevFiltros.modelos || []), modelo],
      }));
    } else {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        modelos: (prevFiltros.modelos || []).filter((m) => m !== modelo),
      }));
    }
  };
  return (
    <div className="w-full flex flex-wrap md:px-5">
      <div className="w-full lg:w-1/4 p-4 lg:sticky lg:top-5">
        <div className="w-full flex justify-center flex-col mt-4">
          <h3 className="text-xl lg:text-2xl">PRECIO</h3>
          <hr className="w-full h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <div className="w-full flex justify-between hover:bg-zinc-100 mb-4">
          <div className="flex items-center">
            <input
              id="default-checkbox_p1"
              type="checkbox"
              onChange={(e) => {
                handleCheckboxChangePrecios(1200, 1799, e);
              }}
              value=""
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            />
            <label
              htmlFor="default-checkbox_p1"
              className="ms-2 text-lg font-base text-gray-900 cursor-pointer"
            >
              S/ 1200 a 1799
            </label>
          </div>
          <p className="px-2">2</p>
        </div>
        <div className="w-full flex justify-between hover:bg-zinc-100 mb-4">
          <div className="flex items-center">
            <input
              id="default-checkbox_p2"
              type="checkbox"
              onChange={(e) => {
                handleCheckboxChangePrecios(1800, 2399, e);
              }}
              value=""
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            />
            <label
              htmlFor="default-checkbox_p2"
              className="ms-2 text-lg font-base text-gray-900 cursor-pointer"
            >
              S/ 1800 a 2399
            </label>
          </div>
          <p className="px-2">2</p>
        </div>
        <div className="w-full flex justify-between hover:bg-zinc-100 mb-4">
          <div className="flex items-center">
            <input
              id="default-checkbox_p3"
              type="checkbox"
              onChange={(e) => {
                handleCheckboxChangePrecios(2400, 3999, e);
              }}
              value=""
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            />
            <label
              htmlFor="default-checkbox_p3"
              className="ms-2 text-lg font-base text-gray-900 cursor-pointer"
            >
              S/ 2400 a 3999
            </label>
          </div>
          <p className="px-2">2</p>
        </div>
        <div className="w-full flex justify-center flex-col mt-4">
          <h3 className="text-xl lg:text-2xl">MODELO</h3>
          <hr className="w-full h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <div className="w-full flex justify-between hover:bg-zinc-100 mb-4">
          <div className="flex items-center">
            <input
              id="default-checkbox_m1"
              type="checkbox"
              onChange={(e) => {
                handleCheckboxChangeModelo("F17", e);
              }}
              value=""
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            />
            <label
              htmlFor="default-checkbox_m1"
              className="ms-2 text-lg font-base text-gray-900 cursor-pointer"
            >
              F17
            </label>
          </div>
          <p className="px-2">2</p>
        </div>
        <div className="w-full flex justify-between hover:bg-zinc-100 mb-4">
          <div className="flex items-center">
            <input
              id="default-checkbox_m2"
              type="checkbox"
              onChange={(e) => {
                handleCheckboxChangeModelo("G16 (2024)", e);
              }}
              value=""
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            />
            <label
              htmlFor="default-checkbox_m2"
              className="ms-2 text-lg font-base text-gray-900 cursor-pointer"
            >
              G16 (2024)
            </label>
          </div>
          <p className="px-2">2</p>
        </div>
        <div className="w-full flex justify-between hover:bg-zinc-100 mb-4">
          <div className="flex items-center">
            <input
              id="default-checkbox_m3"
              type="checkbox"
              onChange={(e) => {
                handleCheckboxChangeModelo("16-r0073cl", e);
              }}
              value=""
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            />
            <label
              htmlFor="default-checkbox_m3"
              className="ms-2 text-lg font-base text-gray-900 cursor-pointer"
            >
              16-r0073cl
            </label>
          </div>
          <p className="px-2">2</p>
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        <Productos filtros={filtros} paginaActual={1} limite={20} />
      </div>
    </div>
  );
}
