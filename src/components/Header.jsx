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
      className={`w-full md:sticky top-0 z-40 transition-all duration-300 ease-in-out flex flex-col py-2 ${
        scrolled
          ? "bg-white md:bg-zinc-900 md:bg-opacity-85 md:text-zinc-200 md:p-px xl:px-2 md:backdrop-blur lg:py-1.5"
          : "bg-white text-zinc-800 px-0"
      } ${menuopen ? "" : "h-lvh fixed"}`}
    >
      <div className="w-full px-3 lg:px-5 flex flex-wrap items-center justify-between">
        <div className="flex flex-row items-center max-md:space-x-4">
          <div
            className="w-8 h-8 flex justify-center items-center cursor-pointer md:hidden"
            onClick={() => setmenu(!menuopen)}
          >
            <h3
              className={`text-black text-3xl rounded-lg w-full text-center transition-all duration-300 transform ${
                !menuopen ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
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
              } fill-black stroke-black`}
            >
              <path
                d="M273 764c-31-13-12-65 62-168 41-57 75-108 75-113s-36-60-80-122c-80-114-90-137-68-159 35-35 69-8 168 136 23 34 44 62 46 62s35-45 74-101c40-55 78-103 86-106s25-2 39 1c46 12 33 52-55 174l-80 111 85 117c47 64 85 124 85 133 0 25-20 41-50 41-22 0-38-17-99-105-39-58-75-105-79-104-4 0-38 46-77 102-70 102-91 118-132 101z"
                transform="matrix(.1 0 0 -.1 0 96)"
              ></path>
            </svg>
          </div>
          <Link
            href="/"
            className={`select-none transition-all ease-in-out duration-300 p-2 rounded text-2xl font-bold text-white ${
              scrolled
                ? "bg-blue-700 md:bg-transparent md:hover:bg-white md:hover:text-black"
                : "bg-blue-700"
            }`}
          >
            CompuFenix
          </Link>
        </div>
        <div
          className={`m-0 md:mx-2 lg:m-0 flex-grow max-w-full lg:mx-3 max-md:order-last flex transition-all ease-in-out duration-300 z-30 ${
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
                ? "hover:text-blue-400 md:fill-zinc-200 hover:fill-blue-400"
                : "hover:text-blue-600 md:fill-zinc-900 hover:fill-blue-600"
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
            <li className="group max-md:border-b-[1px] border-zinc-600">
              <Link
                href="/Nosotros"
                className="group"
                onClick={() => setmenu(!menuopen)}
                aria-current="page"
              >
                <p className="block py-2 px-1 rounded group-hover:text-zinc-800">
                  Nosotros
                </p>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
              </Link>
            </li>
            <li className="group max-md:border-b-[1px] border-zinc-600">
              <Link
                href="/Soporte"
                className="group"
                onClick={() => setmenu(!menuopen)}
                aria-current="page"
              >
                <p className="block py-2 px-1 rounded hover:text-zinc-800">
                  Soporte
                </p>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>{" "}
              </Link>
            </li>
            <li className="max-md:border-b-[1px] border-zinc-600">
              <Link
                href="/Ofertas"
                className="group"
                aria-current="page"
                onClick={() => setmenu(!menuopen)}
              >
                <p className="block py-2 px-1 rounded group-hover:text-zinc-800">
                  Ofertas
                </p>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>{" "}
              </Link>
            </li>
            <li className="max-md:border-b-[1px] border-zinc-600">
              <div className="w-full flex flex-col group">
                <div className="w-full flex justify-between">
                  <Link
                    href="/Comprar"
                    className="block py-2 px-1 rounded hover:text-zinc-800 flex-grow"
                    aria-current="page"
                    onClick={() => setmenu(!menuopen)}
                  >
                    Comprar
                  </Link>
                  <button
                    className={`block py-2 px-1 rounded hover:text-zinc-800 transition-all ease-in-out duration-300 ${
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
                      className={`w-6 h-6 transition-all duration-300 ease-in-out fill-blue-600`}
                    >
                      <path d="M12 35.8c0 2.2 2.9 5.7 15.3 18C38.8 65.3 43.1 69 45 69c3.8 0 33-29.4 33-33.3V33H12z"></path>
                    </svg>
                  </button>
                </div>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
              </div>

              {/* Submenu */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  comprarOpen
                    ? "-translate-x-full lg:translate-x-0 max-lg:max-h-0 overflow-hidden"
                    : "translate-x-0"
                }`}
              >
                <ul className="flex flex-col pl-4">
                  {[
                    { href: "/Comprar/LaptopsGamer", label: "Laptops Gamer" },
                    {
                      href: "/Comprar/LaptopsOficina",
                      label: "Laptops de Oficina",
                    },
                    { href: "/Comprar/Monitores", label: "Monitores" },
                    { href: "/Comprar/Impresoras", label: "Impresoras" },
                    { href: "/Comprar/Perifericos", label: "Periféricos" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="max-md:border-b-[1px] border-zinc-600"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setmenu(!menuopen)}
                        className="group"
                      >
                        <p className="block py-2 px-1 rounded group-hover:text-zinc-800">
                          {item.label}
                        </p>
                        <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
