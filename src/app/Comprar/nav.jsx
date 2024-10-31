"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const menuItems = [
    { label: "Laptops", href: "/Comprar/Laptops" },
    { label: "Computadoras", href: "/Comprar/Computadoras" },
    { label: "Tablets", href: "/Comprar/Tablets" },
    { label: "Accesorios de Software", href: "/Comprar/Accesorios" },
    { label: "Monitores", href: "/Comprar/Monitores" },
    { label: "Celulares", href: "/Comprar/Celulares" },
  ];

  return (
    <nav className="w-full bg-zinc-200 max-md:hidden">
      <div className="w-full px-5 flex flex-wrap items-center mx-auto pt-1 lg:pb-2">
        <div
          className="w-full md:w-auto transition-all ease-in-out duration-500"
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="group max-md:border-b-2 border-zinc-400"
                onClick={() => setSelectedIndex(index)} // Cambia el índice seleccionado al hacer clic
              >
                <Link
                  href={item.href}
                  className={`block py-2 px-1 rounded ${
                    selectedIndex === index
                      ? "text-blue-600"
                      : "hover:text-zinc-600"
                  }`}
                  aria-current="page"
                >
                  {item.label}
                </Link>
                <div
                  className={`h-1 transition-all duration-300 ease-in-out bg-blue-600 ${
                    selectedIndex === index
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
