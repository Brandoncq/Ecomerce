"use client";
import { useEffect, useState } from "react";
import Busqueda from "./Busqueda";
import Autenticacion from "./Autenticacion";
import Link from "next/link";
function Header() {
  const [menuopen, setmenu] = useState(false);
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
      className={`w-full sticky top-0 z-20 transition-all duration-500 ease-in-out flex flex-col ${
        scrolled
          ? "bg-zinc-900 text-zinc-200 md:px-2 px-1"
          : "bg-zinc-200 text-zinc-800 px-0"
      }`}
    >
      <div className="w-full px-5 flex flex-wrap items-center justify-between pt-4 pb-2">
        <Link
          href="/"
          className={`p-2 text-2xl font-bold bg-blue-700 text-white`}
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
            <div className="full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="133.333"
                height="133.333"
                version="1"
                viewBox="0 0 100 100"
                className={`w-10 h-10 p-1 ${
                  scrolled
                    ? "fill-zinc-200 hover:fill-blue-400"
                    : "fill-zinc-900 hover:fill-blue-600"
                }`}
              >
                <path
                  d="M4 946c-3-8-4-25-2-38 2-18 10-24 36-26 27-3 35 1 39 19 6 20 10 21 66 16 33-3 66-12 74-20s54-172 103-366c48-193 96-363 106-378 11-18 17-43 15-70-2-31 3-47 18-62 28-28 93-29 121-1 13 13 20 33 20 60v40h100V80c0-53 27-80 80-80 70 0 101 62 68 135l-11 25-161 1c-89 1-172 4-185 8-16 4-29 19-37 41-26 74-35 70 174 70h189l71 190c40 104 72 199 72 210 0 20-6 20-314 20H332l-22 93c-26 106-42 142-69 157-11 5-67 10-126 10-82 0-107-3-111-14zm896-293c0-3-28-80-62-170l-62-163H424l-41 170-40 170h279c153 0 278-3 278-7z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <nav className="w-full">
        <div className="w-full px-5 flex flex-wrap items-center justify-between mx-auto pt-2 pb-4">
          <Link href="/Nosotros" className="block py-2 px-1">
            Nosotros
          </Link>
          <div
            className="md:hidden w-8 h-8 flex justify-center items-center"
            onClick={() => {
              setmenu(!menuopen);
            }}
          >
            <h3 className="text-3xl hover:bg-zinc-600 hover:text-zinc-200 rounded-lg w-full text-center items-center">
              &equiv;
            </h3>
            <span></span>
            <span></span>
          </div>
          <div
            className={`w-full md:w-auto  ${
              menuopen ? "block" : "max-md:hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row">
              <li className="group">
                <Link
                  href="/Comprar/Ofertas"
                  className={`block py-2 px-1 rounded ${
                    scrolled ? "hover:text-zinc-100" : "hover:text-zinc-600"
                  }`}
                  aria-current="page"
                >
                  Ofertas
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
              </li>
              <li className="group">
                <Link
                  href="/Comprar/Laptops"
                  className={`block py-2 px-1 rounded ${
                    scrolled ? "hover:text-zinc-100" : "hover:text-zinc-600"
                  }`}
                >
                  Laptops
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
              </li>
              <li className="group">
                <Link
                  href="/Comprar/Computadoras"
                  className={`block py-2 px-1 rounded ${
                    scrolled ? "hover:text-zinc-100" : "hover:text-zinc-600"
                  }`}
                >
                  Computadoras
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
              </li>
              <li className="group">
                <Link
                  href="/Comprar/Tablets"
                  className={`block py-2 px-1 rounded ${
                    scrolled ? "hover:text-zinc-100" : "hover:text-zinc-600"
                  }`}
                >
                  Tablets
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
              </li>
              <li className="group">
                <Link
                  href="/Comprar/Accesorios"
                  className={`block py-2 px-1 rounded ${
                    scrolled ? "hover:text-zinc-100" : "hover:text-zinc-600"
                  }`}
                >
                  Accesorios de Software
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
              </li>
              <li className="group">
                <Link
                  href="/Comprar/Monitores"
                  className={`block py-2 px-1 rounded ${
                    scrolled ? "hover:text-zinc-100" : "hover:text-zinc-600"
                  }`}
                >
                  Monitores
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
              </li>
              <li className="group">
                <Link
                  href="/Comprar/Celulares"
                  className={`block py-2 px-1 rounded ${
                    scrolled ? "hover:text-zinc-100" : "hover:text-zinc-600"
                  }`}
                >
                  Celulares
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;