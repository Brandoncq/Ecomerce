"use client";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-zinc-300">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-8 md:px-20 py-6 lg:py-8 md:grid-cols-4">
          <div className="max-md:px-2">
            <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase">
              Sobre Compu-Fenix
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-2">
                <Link href="/" className=" hover:underline">
                  Compras
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Nosotros" className=" hover:underline">
                  Nosotros
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Ofertas" className=" hover:underline">
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-md:px-2">
            <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase">
              Productos
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-2">
                <Link href="/Laptops" className="hover:underline">
                  Laptops
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Computadoras" className="hover:underline">
                  Computadoras
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Celulares" className="hover:underline">
                  Celulares
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Tablets" className="hover:underline">
                  Tablets
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Accesorios" className="hover:underline">
                  Accesorios
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Monitores" className="hover:underline">
                  Monitores
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-md:px-2">
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              RECURSOS
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-2">
                <Link href="/" className="hover:underline">
                  Registro de productos
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="hover:underline">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-md:px-2">
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              Ayuda al Cliente
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Contacto
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Medios de pago
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Estado de tu orden
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-2 md:px-16 py-6 bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © 2024 <Link href="https://flowbite.com/">Compu-Fenix</Link>. Todos
            los Derechos Reservados
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="https://x.com/home"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor"
                x="0"
                y="0"
                viewBox="0 0 50 50"
              >
                <path
                  fillRule="evenodd"
                  d="M6.92 6l14.217 20.727L6.229 44h3.177l13.139-15.223L32.986 44H43L28.123 22.312 42.203 6h-3.176l-12.31 14.262L16.934 6H6.92z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                x="0"
                y="0"
                fill="currentColor"
                viewBox="0 0 30 30"
              >
                <path
                  fillRule="evenodd"
                  d="M9.998 3C6.139 3 3 6.142 3 10.002v10C3 23.861 6.142 27 10.002 27h10C23.861 27 27 23.858 27 19.998v-10C27 6.139 23.858 3 19.998 3h-10zM22 7a1 1 0 110 2 1 1 0 010-2zm-7 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0 2a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
