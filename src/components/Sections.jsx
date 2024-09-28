"use client";

import Link from "next/link";
function Sections() {
  return (
    <nav className="w-full bg-white mb-2">
      <div className="w-full px-5 flex flex-wrap items-center mx-auto md:space-x-4">
        <ul className="flex flex-col font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row text-lg">
          <li className="group">
            <Link
              href="/Comprar"
              className="block py-2 px-1 rounded hover:text-zinc-600"
              aria-current="page"
            >
              Comprar
            </Link>
            <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
          </li>
          <li className="group">
            <Link
              href="/Nosotros"
              className="block py-2 px-1 rounded hover:text-zinc-600"
            >
              Nosotros
            </Link>
            <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
          </li>
          <li className="group">
            <Link
              href="/Soporte"
              className="block py-2 px-1 rounded hover:text-zinc-600"
              aria-current="page"
            >
              Soporte
            </Link>
            <div className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-blue-600"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sections;
