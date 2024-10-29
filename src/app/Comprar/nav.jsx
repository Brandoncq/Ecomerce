"use client";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="w-full bg-zinc-200 max-md:hidden">
      <div className="w-full px-5 flex flex-wrap items-center mx-auto pt-1 lg:pb-2">
        <div
          className={`w-full md:w-auto transition-all ease-in-out duration-500`}
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
