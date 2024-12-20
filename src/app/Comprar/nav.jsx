"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const pathname = usePathname();
  const menuItems = [
    { label: "Laptops Gamer", href: "/Comprar/LaptopsGamer" },
    { label: "Laptops de Oficina", href: "/Comprar/LaptopsOficina" },
    { label: "Monitores", href: "/Comprar/Monitores" },
    { label: "Impresoras", href: "/Comprar/Impresoras" },
    { label: "Perifericos", href: "/Comprar/Perifericos" },
  ];
  const getIndexByPathname = () => {
    return menuItems.findIndex((item) => item.href === pathname);
  };
  useEffect(() => {
    setSelectedIndex(getIndexByPathname);
  }, [pathname]);
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
                onClick={() => setSelectedIndex(index)}
              >
                <Link href={item.href} aria-current="page" className="group">
                  <p
                    className={`block py-2 px-1 rounded ${
                      selectedIndex === index
                        ? "text-blue-600"
                        : "group-hover:text-zinc-600"
                    }`}
                  >
                    {item.label}
                  </p>
                  <div
                    className={`h-1 transition-all duration-300 ease-in-out bg-blue-600 ${
                      selectedIndex === index
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></div>{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
