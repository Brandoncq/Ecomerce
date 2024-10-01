"use client";
import { useState, useEffect } from "react";

export default function Monitores() {
  const [Monitores, setMonitores] = useState([]);
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
    setMonitores(refinando);
  };
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <div className="w-full flex flex-col">
      <section className="w-full flex min-h-lvh">
        <div className="w-full flex justify-center items-center h-lvh relative">
          <img
            src="https://images.unsplash.com/photo-1636036824578-d0d300a4effb?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full h-full flex justify-center items-center">
            <h2 className="text-4xl text-white font-semibold">Quines Somos</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
