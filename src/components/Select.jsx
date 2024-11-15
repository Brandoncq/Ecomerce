import { useState } from "react";
import Link from "next/link";
function Select({ nombre, tipos, menu, svg }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center w-full p-2 hover:bg-slate-600 ${
          menu ? "justify-center" : " justify-between"
        }`}
      >
        <span className={`text-base ${menu ? "hidden" : ""}`}>{nombre}</span>

        <svg
          className={`stroke-white fill-white w-7 h-7 mr-2 ${
            menu ? "block" : "hidden"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width={svg.width}
          height={svg.height}
          version="1"
          viewBox={svg.viewbox}
          strokeWidth={6}
        >
          {svg.path.map((item) => (
            <path d={item.d} transform={item.transform} />
          ))}
        </svg>
        <span
          className={`transform transition-transform font-bold ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          ▷
        </span>
      </button>
      <div
        className={`w-full flex flex-col bg-zinc-700 overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        {tipos.map((item, index) => (
          <div className="w-full flex border-t-2 border-black hover:bg-slate-600">
            <Link href={`/Dashboard/${item}`} className="w-full flex">
              <p className="p-2">{item}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Select;
