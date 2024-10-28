"use client";
import Link from "next/link";
import { useState } from "react";
export default function Nav() {
  const [menuopen, setmenu] = useState(true);

  return (
    <nav className="w-full bg-zinc-200">
      <div className="w-full px-5 flex flex-wrap items-center mx-auto pt-1 lg:pb-2">
        <div className="w-full flex flex-wrap justify-between items-center max-lg:pb-1">
          <div className="block py-2 px-1 md:hidden font-semibold text-xl">
            CATEGORIAS
          </div>
          <div
            className="md:hidden w-8 h-8 flex justify-center items-center cursor-pointer"
            onClick={() => setmenu(!menuopen)}
          >
            <h3
              className={`text-3xl hover:bg-zinc-600 hover:text-zinc-200 rounded-lg w-full text-center transition-all duration-300 transform ${
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
              }`}
            >
              <path
                d="M273 764c-31-13-12-65 62-168 41-57 75-108 75-113s-36-60-80-122c-80-114-90-137-68-159 35-35 69-8 168 136 23 34 44 62 46 62s35-45 74-101c40-55 78-103 86-106s25-2 39 1c46 12 33 52-55 174l-80 111 85 117c47 64 85 124 85 133 0 25-20 41-50 41-22 0-38-17-99-105-39-58-75-105-79-104-4 0-38 46-77 102-70 102-91 118-132 101z"
                transform="matrix(.1 0 0 -.1 0 96)"
              ></path>
            </svg>
          </div>
        </div>
        <div
          className={`w-full md:w-auto transition-all ease-in-out duration-500
            ${
              menuopen
                ? "-translate-x-full lg:translate-x-0 max-lg:max-h-0 overflow-hidden"
                : "translate-x-0"
            }`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row">
            <li className="group max-md:border-b-2 border-zinc-400">
              <Link
                href="/Comprar/Ofertas"
                className="block py-2 px-1 rounded hover:text-zinc-600"
                aria-current="page"
              >
                Ofertas
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group max-md:border-b-2 border-zinc-400">
              <Link
                href="/Comprar/Laptops"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Laptops
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group max-md:border-b-2 border-zinc-400">
              <Link
                href="/Comprar/Computadoras"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Computadoras
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group max-md:border-b-2 border-zinc-400">
              <Link
                href="/Comprar/Tablets"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Tablets
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group max-md:border-b-2 border-zinc-400">
              <Link
                href="/Comprar/Accesorios"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Accesorios de Software
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group max-md:border-b-2 border-zinc-400">
              <Link
                href="/Comprar/Monitores"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Monitores
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group max-md:border-b-2 border-zinc-400">
              <Link
                href="/Comprar/Celulares"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Celulares
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
