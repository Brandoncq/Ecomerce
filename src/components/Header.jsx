"use client";
import Carrito from "./Carrito";
import { useEffect, useState } from "react";
import Busqueda from "./Busqueda";
import Autenticacion from "./Autenticacion";
import Link from "next/link";
function Header() {
  const [scrolled, setScrolled] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-full sticky top-0 z-40 transition-all duration-500 ease-in-out flex flex-col ${
        scrolled
          ? "bg-zinc-900 text-zinc-200 p-1 md:p-1 lg:p-px xl:px-2"
          : "bg-white text-zinc-800 px-0"
      }`}
    >
      <div className="w-full px-5 flex flex-wrap items-center justify-between pt-3 pb-2">
        <Link
          href="/"
          className={`p-2 rounded text-2xl font-bold bg-blue-700 text-white`}
        >
          Compu-Fenix
        </Link>
        <Busqueda />
        <div className="flex">
          <div
            className={`flex items-center ${
              scrolled
                ? "hover:text-blue-400 fill-zinc-200 hover:fill-blue-400"
                : "hover:text-blue-600 fill-zinc-900 hover:fill-blue-600"
            }`}
          >
            <Autenticacion />
          </div>
          <div className="flex items-center px-1">
            <Carrito />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
