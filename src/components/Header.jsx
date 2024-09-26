"use client";
import { useEffect, useState } from "react";
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
          href="/Nosotros"
          className={`p-2 text-2xl font-bold bg-blue-700 text-white`}
        >
          Compu-Fenix
        </Link>
        <form className="w-full max-w-lg mx-auto max-md:order-last">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="¿Qué estas buscando?"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Buscar
            </button>
          </div>
        </form>
        <div className="flex">
          <div
            className={`flex items-center ${
              scrolled
                ? "hover:text-blue-400 fill-zinc-200 hover:fill-blue-400"
                : "hover:text-blue-600 fill-zinc-900 hover:fill-blue-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              version="1"
              viewBox="0 0 96 96"
              className={`w-10 h-10 p-1`}
            >
              <path
                d="M373 854c-62-37-93-95-93-174 0-123 77-200 200-200s200 77 200 200-77 200-201 200c-51 0-73-5-106-26zm198-83c35-35 39-44 39-91s-4-56-39-91-44-39-91-39-56 4-91 39-39 44-39 91 4 56 39 91 44 39 91 39 56-4 91-39zM180 380c-16-16-20-33-20-80 0-93 38-147 135-192 44-20 65-23 185-23s141 3 185 23c98 45 152 127 140 210s-7 82-325 82c-267 0-281-1-300-20zm549-54c19-22-4-90-40-120-89-75-329-75-418 0-36 30-59 98-40 120 17 21 481 21 498 0z"
                transform="matrix(.1 0 0 -.1 0 96)"
              ></path>
            </svg>
            <button className={`px-1 max-md:hidden`}>
              Ingresar Sesión / Crear Cuenta
            </button>
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
          <Link href="/" className="block py-2 px-1">
            Comprar
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
                  href="/Ofertas"
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
                  href="/Laptops"
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
                  href="/Computadoras"
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
                  href="/Tablets"
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
                  href="/Accesorios"
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
                  href="/Monitores"
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
                  href="/Celulares"
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
