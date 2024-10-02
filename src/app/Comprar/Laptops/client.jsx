"use client";
import Productos from "@/components/Productos";
import { useState, useEffect } from "react";

export default function ClientLaptops() {
  const [laptops, setLaptops] = useState([]);
  const getProducto = async () => {
    const productos = await fetch("/api/producto").then((res) => res.json());
    const refinando = [];
    productos.map((values) => {
      refinando.push({
        id: values.id_producto,
        nombre_producto: values.nombre_producto,
        stock: values.stock,
        precio_unitario: values.precio_unitario,
        modelo: values.modelo,
        imagen: values.imagen,
        descripcion: values.descripcion,
      });
    });
    setLaptops(refinando);
  };
  useEffect(() => {
    getProducto();
  }, []);
  return <Productos produtos={laptops} />;
}
