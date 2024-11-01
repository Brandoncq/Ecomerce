"use client";
import Carrito from "./Carrito";
import { useEffect, useState } from "react";
import Busqueda from "./Busqueda";
import Autenticacion from "./Autenticacion";
import Link from "next/link";
function Header() {
  const [menuopen, setmenu] = useState(true);
  const [comprarOpen, setComprarOpen] = useState(false);
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
      className={`w-full sticky top-0 z-40 transition-all duration-300 ease-in-out flex flex-col ${
        scrolled
          ? "bg-zinc-900 lg:bg-opacity-80 text-zinc-200 p-px lg:p-px xl:px-2 lg:backdrop-blur"
          : "bg-white text-zinc-800 px-0"
      } ${menuopen ? "" : "h-lvh"}`}
    >
      <div className="w-full px-3 lg:px-5 flex flex-wrap items-center justify-between pt-2 pb-2">
        <div className="flex flex-row items-center">
          <div
            className="w-8 h-8 flex justify-center items-center cursor-pointer md:hidden"
            onClick={() => setmenu(!menuopen)}
          >
            <h3
              className={`text-3xl hover:bg-zinc-600 hover:text-zinc-200 rounded-lg w-full text-center transition-all duration-300 transform ${
                !menuopen ? "scale-0 opacity-0" : "scale-100 opacity-100"
              } ${scrolled ? "text-white" : "text-black"}`}
            >
              &equiv;
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 96 96"
              className={`w-8 h-8 absolute transition-all duration-300 transform ${
                !menuopen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } ${
                scrolled ? "fill-white stroke-white" : "fill-black stroke-black"
              }`}
            >
              <path
                d="M273 764c-31-13-12-65 62-168 41-57 75-108 75-113s-36-60-80-122c-80-114-90-137-68-159 35-35 69-8 168 136 23 34 44 62 46 62s35-45 74-101c40-55 78-103 86-106s25-2 39 1c46 12 33 52-55 174l-80 111 85 117c47 64 85 124 85 133 0 25-20 41-50 41-22 0-38-17-99-105-39-58-75-105-79-104-4 0-38 46-77 102-70 102-91 118-132 101z"
                transform="matrix(.1 0 0 -.1 0 96)"
              ></path>
            </svg>
          </div>
          <Link
            href="/"
            className={`p-2 rounded text-2xl font-bold text-white ${
              scrolled
                ? "hover:bg-white hover:text-black transition-all ease-in-out duration-300"
                : "bg-blue-700"
            }`}
          >
            BranviaTech
          </Link>
        </div>
        <div
          className={`flex-grow max-w-full lg:mx-3 max-lg:order-last flex transition-all ease-in-out duration-300 ${
            !menuopen
              ? "-translate-x-full lg:translate-x-0 max-lg:max-h-0 overflow-hidden"
              : "translate-x-0"
          }`}
        >
          <Busqueda />
        </div>
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
        <div
          className={`w-full transition-all ease-in-out duration-300 flex items-center lg:hidden ${
            menuopen
              ? "-translate-x-full lg:translate-x-0 max-lg:max-h-0 overflow-hidden"
              : "translate-x-0"
          }`}
          id="navbar-dropdown"
        >
          <ul className="w-full flex flex-col font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row">
            <li className="group max-md:border-b-[1px] border-blue-400">
              <Link
                href="/Nosotros"
                className="block py-2 px-1 rounded hover:text-zinc-400"
                onClick={() => setmenu(!menuopen)}
              >
                Nosotros
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group max-md:border-b-[1px] border-blue-400">
              <Link
                href="/Soporte"
                className="block py-2 px-1 rounded hover:text-zinc-400"
                aria-current="page"
                onClick={() => setmenu(!menuopen)}
              >
                Soporte
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group max-md:border-b-[1px] border-blue-400">
              <Link
                href="/Ofertas"
                className="block py-2 px-1 rounded hover:text-zinc-400"
                aria-current="page"
                onClick={() => setmenu(!menuopen)}
              >
                Ofertas
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group max-md:border-b-[1px] border-blue-400">
              <div className="w-ful flex justify-between">
                <Link
                  href="/Comprar"
                  className="block py-2 px-1 rounded hover:text-zinc-600"
                  aria-current="page"
                  onClick={() => setmenu(!menuopen)}
                >
                  Comprar
                </Link>
                <Link
                  href="/Comprar"
                  className={`block py-2 px-1 rounded hover:text-zinc-600 transition-all ease-in-out duration-300 ${
                    comprarOpen ? "" : "-rotate-90"
                  }`}
                  aria-current="page"
                  onClick={() => setComprarOpen(!comprarOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    version="1"
                    viewBox="0 0 90 90"
                    className={`w-6 h-6 transition-all duration-300 ease-in-out ${
                      scrolled ? "fill-white" : "fill-blue-500"
                    }`}
                  >
                    <path d="M12 35.8c0 2.2 2.9 5.7 15.3 18C38.8 65.3 43.1 69 45 69c3.8 0 33-29.4 33-33.3V33H12z"></path>
                  </svg>
                </Link>
              </div>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <div
              className={`transition-all duration-300 ease-in-out ${
                comprarOpen
                  ? "-translate-x-full lg:translate-x-0 max-lg:max-h-0 overflow-hidden"
                  : "translate-x-0"
              }`}
            >
              <ul className="flex flex-col pl-4">
                <li className="group max-md:border-b-[1px] border-blue-400">
                  <Link
                    href="/Comprar/Laptops"
                    className="block py-2 px-1 rounded hover:text-zinc-400"
                    onClick={() => setmenu(!menuopen)}
                  >
                    Laptops
                  </Link>
                  <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
                </li>
                <li className="group max-md:border-b-[1px] border-blue-400">
                  <Link
                    href="/Comprar/Computadoras"
                    className="block py-2 px-1 rounded hover:text-zinc-400"
                    onClick={() => setmenu(!menuopen)}
                  >
                    Computadoras
                  </Link>
                  <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
                </li>
                <li className="group max-md:border-b-[1px] border-blue-400">
                  <Link
                    href="/Comprar/Tablets"
                    className="block py-2 px-1 rounded hover:text-zinc-400"
                    onClick={() => setmenu(!menuopen)}
                  >
                    Tablets
                  </Link>
                  <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
                </li>
                <li className="group max-md:border-b-[1px] border-blue-400">
                  <Link
                    href="/Comprar/Accesorios"
                    className="block py-2 px-1 rounded hover:text-zinc-400"
                    onClick={() => setmenu(!menuopen)}
                  >
                    Accesorios de Software
                  </Link>
                  <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
                </li>
                <li className="group max-md:border-b-[1px] border-blue-400">
                  <Link
                    href="/Comprar/Monitores"
                    className="block py-2 px-1 rounded hover:text-zinc-400"
                    onClick={() => setmenu(!menuopen)}
                  >
                    Monitores
                  </Link>
                  <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
                </li>
                <li className="group max-md:border-b-[1px] border-blue-400">
                  <Link
                    href="/Comprar/Celulares"
                    className="block py-2 px-1 rounded hover:text-zinc-400"
                    onClick={() => setmenu(!menuopen)}
                  >
                    Celulares
                  </Link>
                  <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
