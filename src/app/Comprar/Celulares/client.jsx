"use client";
import Productos from "@/components/Productos";
import { useState, useEffect } from "react";
export default function ClientCelulares() {
  const [Celulares, setCelulares] = useState([]);
  const getProducto = async () => {
    const productos = await fetch("/api/producto").then((res) => res.json());
    const refinando = [];
    productos.map((values) => {
      refinando.push({
        nombre_producto: values.nombre_producto,
        stock: values.stock,
        precio_unitario: values.precio_unitario,
        modelo: values.modelo,
        imagen: values.imagen,
        descripcion: values.descripcion,
      });
    });
    setCelulares(refinando);
  };
  useEffect(() => {
    getProducto();
  }, []);

  return <Productos produtos={Celulares} />;
}
