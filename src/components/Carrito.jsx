"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Carrito() {
  const [scrolled, setScrolled] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRefCart = useRef(null);
  const [quantityChanged, setQuantityChanged] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const getcart = async (addedItem = false) => {
    const response = await fetch("/api/carrito");
    const data = await response.json();
    setCartItems(data);
    if (addedItem) {
      setQuantityChanged(true);
      setTimeout(() => setQuantityChanged(false), 2000);
    }
  };
  useEffect(() => {
    getcart();
    const handleCart = (event) => {
      getcart(event.type === "addcart");
    };

    window.addEventListener("addcart", handleCart);
    window.addEventListener("updatecart", handleCart);
    window.addEventListener("deletecart", handleCart);
    window.addEventListener("login", handleCart);
    window.addEventListener("logout", handleCart);

    return () => {
      window.removeEventListener("addcart", handleCart);
      window.removeEventListener("updatecart", handleCart);
      window.removeEventListener("deletecart", handleCart);
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
  const eliminar = async (id) => {
    await fetch("/api/carrito", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    getcart();
    router.refresh();
  };
  return (
    <li className="relative w-full inline-block" ref={dropdownRefCart}>
      <button className="w-full cursor-pointer" onClick={toggleCart}>
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
      </button>

      {cartItems.length > 0 && (
        <span
          className="absolute top-0 right-0 flex h-5 w-5 cursor-pointer select-none"
          onClick={toggleCart}
        >
          {quantityChanged && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          )}
          <span className="relative rounded-full h-5 w-5 bg-red-500 text-white text-xs flex items-center justify-center">
            {cartItems.reduce((total, item) => total + item.cantidad, 0)}
          </span>
        </span>
      )}
      {isOpen && (
        <>
          {cartItems.length > 0 ? (
            <div className="absolute right-0 bg-white border border-gray-300 shadow-lg mt-2 p-1 rounded-md w-64 md:w-96 z-10">
              <div className="w-full flex flex-col p-2 md:p-4 text-black">
                <div className="flex flex-col">
                  <div className="w-full flex justify-between items-center">
                    <h3 className="font-bold">
                      {cartItems.reduce((total, item) => {
                        return total + item.cantidad;
                      }, 0)}{" "}
                      {cartItems.length === 1 ? "artículo" : "artículos"}
                    </h3>
                    <button
                      className="text-zinc-500 hover:text-blue-700 font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      X
                    </button>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <p>Subtotal del carrito </p>
                    <h4 className="font-bold">
                      S/.
                      {cartItems.reduce(
                        (total, item) => total + item.precio * item.cantidad,
                        0
                      )}
                    </h4>
                  </div>
                  <Link
                    href="/Carrito/Compra"
                    className="transition-all duration-300 ease-in-out bg-blue-600 hover:bg-blue-200 border border-blue-500 hover:border-zinc-800 hover:text-zinc-800 my-2 text-white px-2 py-3 font-semibold rounded-md flex justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    VER Y EDITAR EL CARRITO
                  </Link>
                </div>
              </div>
              <ul className="w-full border-t border-zinc-400">
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 border-b last:border-b-0 hover:bg-zinc-100"
                  >
                    <div className="w-full flex justify-between">
                      <div className="w-1/2 md:w-1/3 h-auto p-px md:p-1 lg:p-2 flex justify-center items-center">
                        <Link
                          className="w-full"
                          href={"/Buscar/" + item.nombre}
                        >
                          <img
                            className="w-full h-auto object-cover"
                            src={item.imagen}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="w-full flex flex-col justify-between p-2">
                        <Link
                          className="w-full"
                          href={"/Buscar/" + item.nombre}
                        >
                          <h2 className="text-lg text-blue-600 cursor-pointer hover:underline">
                            {item.nombre}
                          </h2>
                          <h2 className="text-base text-black cursor-pointer">
                            {item.modelo}
                          </h2>
                        </Link>
                        <div className="w-full flex justify-between items-center text-black">
                          <Link
                            className="w-full"
                            href={"/Buscar/" + item.nombre}
                          >
                            <h3 className="font-semibold">S/.{item.precio}</h3>{" "}
                          </Link>
                          <div className="flex items-center">
                            <h3 className="border border-zinc-400 px-2 py-1 rounded">
                              {item.cantidad}
                            </h3>
                            <div className="pl-1">
                              <button
                                onClick={(e) => {
                                  eliminar(item.id_producto);
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100"
                                  height="100"
                                  x="0"
                                  y="0"
                                  viewBox="0 0 50 50"
                                  className="w-6 h-6 hover:fill-blue-600"
                                >
                                  <path d="M21 0c-1.645 0-3 1.355-3 3v2h-7.813a1.009 1.009 0 00-.374 0H7.905c-.55.027-.98.496-.953 1.047.027.55.496.98 1.047.953h1.094l3.594 40.5c.124 1.398 1.316 2.5 2.718 2.5h19.188c1.402 0 2.593-1.102 2.718-2.5L40.907 7H42c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496H32V3c0-1.645-1.355-3-3-3zm0 2h8c.563 0 1 .438 1 1v2H20V3c0-.563.438-1 1-1zm-9.906 5h27.812l-3.593 40.344c-.032.347-.403.656-.72.656H15.407c-.316 0-.687-.309-.719-.656zm7.812 2.969c-.043.008-.086.02-.125.031A1.002 1.002 0 0018 11v33c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V11a1 1 0 00-1.094-1.031zm6 0c-.043.008-.086.02-.125.031A1.002 1.002 0 0024 11v33c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V11a1 1 0 00-1.094-1.031zm6 0c-.043.008-.086.02-.125.031A1.002 1.002 0 0030 11v33c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V11a1 1 0 00-1.094-1.031z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div
              className="absolute right-0 bg-white border border-gray-300 shadow-lg mt-2 rounded-md w-60 md:w-96 z-10 p-4 text-center"
              ref={dropdownRefCart}
            >
              <div className="flex w-full justify-end">
                <button
                  className="text-zinc-500 hover:text-blue-700 font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </div>
              <p className="text-gray-600 py-4">
                No hay artículos en su carrito de compras.
              </p>
            </div>
          )}
        </>
      )}
    </li>
  );
}

export default Carrito;
