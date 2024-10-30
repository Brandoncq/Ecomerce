"use client";
import { useState } from "react";
import Link from "next/link";
function Sections({ menuItems }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <nav className="w-full mb-1.5">
      <div className="w-full px-5 flex flex-wrap items-center mx-auto md:space-x-4">
        <ul className="flex flex-col font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="group"
              onClick={() => setSelectedIndex(index)}
            >
              <Link
                href={item.href}
                className={`block py-1 px-1 rounded ${
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
                  selectedIndex === index ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Sections;
