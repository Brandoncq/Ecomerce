"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Productos from "@/components/Productos";
export default function ClientComputadoras() {
  const [Computadoras, setComputadoras] = useState([]);
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
    setComputadoras(refinando);
  };
  useEffect(() => {
    getProducto();
  }, []);

  return <Productos produtos={Computadoras} />;
}
