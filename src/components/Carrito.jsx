"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
function Carrito() {
  const [scrolled, setScrolled] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRefCart = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const getcart = async () => {
    const response = await fetch("/api/carrito");
    const data = await response.json();
    setCartItems(data);
  };
  useEffect(() => {
    getcart();
    const handleCart = (event) => {
      getcart();
    };

    window.addEventListener("addcart", handleCart);
    window.addEventListener("login", handleCart);
    window.addEventListener("logout", handleCart);

    return () => {
      window.removeEventListener("addcart", handleCart);
      window.removeEventListener("login", handleCart);
      window.removeEventListener("logout", handleCart);
    };
  }, []);
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefCart.current &&
        !dropdownRefCart.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRefCart]);
  return (
    <div
      className="relative  w-full cursor-pointer"
      onClick={toggleCart}
      ref={dropdownRefCart}
    >
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
      {cartItems.length > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartItems.length}
        </span>
      )}
      {isOpen && (
        <ul className="absolute right-0 bg-white border border-gray-300 shadow-lg mt-2 rounded-md w-60 md:w-96 z-10">
          {cartItems.map((item, index) => (
            <li key={index} className="p-2 border-b last:border-b-0">
              <Link className="w-full" href={"/Buscar/" + item.nombre}>
                <div className="w-full flex justify-between">
                  <div className="w-1/2 md:w-1/3 h-auto p -px md:p-1 lg:p-2 flex justify-center items-center">
                    <img
                      className="w-full h-auto object-cover"
                      src={item.imagen}
                      alt=""
                    />
                  </div>
                  <div className="w-full flex flex-col justify-between p-1">
                    <div>
                      <h2 className="text-lg text-blue-600 cursor-pointer hover:underline">
                        {item.nombre}
                      </h2>
                      <h2 className="text-base text-black cursor-pointer">
                        {item.modelo}
                      </h2>
                    </div>

                    <div className="w-full flex justify-between items-center text-black">
                      <h3 className="font-semibold">S/.{item.precio}</h3>
                      <div>
                        <h3 className="border border-zinc-400 px-2 py-1 rounded">
                          {item.cantidad}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;
