"use client";
import Link from "next/link";
import { useState } from "react";
export default function Nav() {
  const [menuopen, setmenu] = useState(false);

  return (
    <nav className="w-full bg-zinc-200">
      <div className="w-full px-5 flex flex-wrap items-center justify-between mx-auto pt-2 pb-4">
        <div className="block py-2 px-1 md:hidden"></div>
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
                className="block py-2 px-1 rounded hover:text-zinc-600"
                aria-current="page"
              >
                Ofertas
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group">
              <Link
                href="/Comprar/Laptops"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Laptops
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group">
              <Link
                href="/Comprar/Computadoras"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Computadoras
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group">
              <Link
                href="/Comprar/Tablets"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Tablets
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group">
              <Link
                href="/Comprar/Accesorios"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Accesorios de Software
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group">
              <Link
                href="/Comprar/Monitores"
                className="block py-2 px-1 rounded hover:text-zinc-600"
              >
                Monitores
              </Link>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
            </li>
            <li className="group">
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
