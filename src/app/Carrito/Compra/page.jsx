"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
function CarritoCompra() {
  const [cartItems, setCartItems] = useState([]);
  const getcart = async () => {
    const response = await fetch("/api/carrito");
    const data = await response.json();
    setCartItems(data);
  };
  useEffect(() => {
    getcart();
  }, []);
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
  };
  const actualizarCantidad = (id, nuevaCantidad) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id_producto === id ? { ...item, cantidad: nuevaCantidad } : item
      )
    );
    fetch("/api/carrito", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        nuevaCantidad: nuevaCantidad,
      }),
    });
    const UpdateCarEvent = new CustomEvent("updatecart");
    window.dispatchEvent(UpdateCarEvent);
  };
  return (
    <div className="w-full flex flex-wrap justify-center p-5 md:px-5 lg:px-20 mb-4 border-t-4 border-zinc-200">
      <div className="text-xl my-4 w-full flex flex-col items-center">
        <div className="w-full md:w-1/2 p-5 md:px-10 lg:px-20 justify-between items-center flex">
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            1
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center">
            2
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center">
            3
          </div>
        </div>
        <div className="w-full md:w-1/2 justify-between items-center flex text-sm md:text-base text-center">
          <div className="flex justify-center items-center w-1/3">
            <p>Carrito de Compras</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Pasarela de Pagos</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Confirmación del Pago</p>
          </div>
        </div>
        <div className="text-left w-full mt-3 max-lg:mt-6 flex items-center">
          <div className="border-2 border-green-600 rounded-full w-10 h-10 flex justify-center items-center">
            1
          </div>
          <h2 className="px-2">Carrito de Compras</h2>
        </div>
      </div>
      <div className="w-full md:w-4/5 py-5 shadow-l">
        {cartItems.length > 0 &&
          cartItems.map((item, index) => (
            <div
              className="w-full flex flex-wrap justify-center p-2 md:py-5 lg:py-10 border-t-4 border-zinc-200"
              key={index}
            >
              <div className="w-full md:w-1/6 flex justify-center items-center">
                <img
                  src={item.imagen}
                  alt=""
                  className="w-full h-auto object-cover p-1"
                />
              </div>
              <div className="w-full md:w-5/6 mt-3 md:mt-0 flex flex-col md:px-10">
                <div className="w-full flex justify-between">
                  <h2 className="text-lg md:text-xl text-black font-semibold">
                    {item.nombre}
                  </h2>
                  <h2 className="text-lg md:text-xl text-black font-semibold">
                    S/.{item.precio * item.cantidad}
                  </h2>
                </div>
                <div className="w-full flex justify-between mt-5">
                  <div className="flex flex-col">
                    <h3 className="text-base md:text-lg">{item.modelo}</h3>
                    <Link
                      href={"/Buscar/" + item.nombre}
                      className="font-semibold text-blue-500 hover:underline hover:underline-offset-8"
                    >
                      Mostrar mas detalles
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative flex items-center max-w-[8rem]">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="quantity-input"
                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                        onClick={() => {
                          if (0 < item.cantidad - 1) {
                            actualizarCantidad(
                              item.id_producto,
                              item.cantidad - 1
                            );
                          }
                        }}
                      >
                        <svg
                          className="w-3 h-3 text-gray-900"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                        placeholder="999"
                        required
                        value={item.cantidad}
                      />
                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="quantity-input"
                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                        onClick={() => {
                          if (item.stock >= item.cantidad + 1) {
                            actualizarCantidad(
                              item.id_producto,
                              item.cantidad + 1
                            );
                          }
                        }}
                      >
                        <svg
                          className="w-3 h-3 text-gray-900"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <button
                      onClick={(e) => {
                        eliminar(item.id_producto);
                      }}
                      className="font-semibold text-blue-500 hover:underline hover:underline-offset-8"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CarritoCompra;
