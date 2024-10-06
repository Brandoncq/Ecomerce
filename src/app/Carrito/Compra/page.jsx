"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
function CarritoCompra() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState([]);
  const router = useRouter();
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
    const UpdateCarEvent = new CustomEvent("deletecart");
    window.dispatchEvent(UpdateCarEvent);
    getcart();
    router.refresh();
  };
  const actualizarCantidad = async (id, nuevaCantidad) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id_producto === id ? { ...item, cantidad: nuevaCantidad } : item
      )
    );
    const response = await fetch("/api/carrito", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        nuevaCantidad: nuevaCantidad,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error en la solicitud:", errorData);
      setError((prevError) => ({
        ...prevError,
        [id]: errorData.error || "Error desconocido",
      }));
      setTimeout(() => {
        setError((prevError) => ({ ...prevError, [id]: "" }));
      }, 3000);
      throw new Error(errorData.error || "Error desconocido");
    }
    const UpdateCarEvent = new CustomEvent("deletecart");
    window.dispatchEvent(UpdateCarEvent);
  };
  return (
    <div className="w-full flex flex-wrap justify-center border-t-4 border-zinc-200">
      <div className="text-xl my-4 w-full flex flex-col items-center p-5 md:px-5 lg:px-20">
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
      <div className="w-full md:w-2/3 shadow-l bg-zinc-200 p-5">
        <div className="w-full shadow-l bg-white">
          <div className="w-full flex flex-col p-5">
            <div className="w-full flex items-end">
              <h2 className="text-2xl pr-5">TU CARRITO</h2>
              <h3 className="text-lg">
                {cartItems.reduce((total, item) => {
                  return total + item.cantidad;
                }, 0)}{" "}
                ARTÍCULOS
              </h3>{" "}
            </div>
            <hr className="w-full bg-zinc-200 h-0.5 mt-2" />
          </div>
          {cartItems.length > 0 &&
            cartItems.map((item, index) => (
              <div className="w-full flexp-2 md:py-5" key={index}>
                <div className="w-full flex flex-wrap justify-center">
                  <div className="w-full md:w-1/3 flex justify-center items-center md:px-5">
                    <img
                      src={item.imagen}
                      alt=""
                      className="w-full h-auto object-cover p-3 lg:p-1"
                    />
                  </div>
                  <div className="w-full md:w-2/3 mt-3 md:mt-0 flex flex-col justify-center p-3 md:px-10">
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
                              } else {
                                setError((prevError) => ({
                                  ...prevError,
                                  [item.id_producto]: "Cantidad no válida",
                                }));
                                setTimeout(() => {
                                  setError((prevError) => ({
                                    ...prevError,
                                    [item.id_producto]: "",
                                  }));
                                }, 5000);
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
                            readOnly
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
                              } else {
                                setError((prevError) => ({
                                  ...prevError,
                                  [item.id_producto]:
                                    "No hay suficiente stock disponible",
                                }));
                                setTimeout(() => {
                                  setError((prevError) => ({
                                    ...prevError,
                                    [item.id_producto]: "",
                                  }));
                                }, 5000);
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
                <div className="w-full flex min-h-5 mt-1 justify-center">
                  {error[item.id_producto] && (
                    <p className="text-red-500 text-sm font-semibold">
                      {error[item.id_producto]}
                    </p>
                  )}
                </div>
                <hr className="w-full bg-zinc-200 h-0.5 mt-2" />
              </div>
            ))}{" "}
        </div>
      </div>
      <div className="w-full md:w-1/3 py-5 shadow-l bg-zinc-200 p-5 sticky top-0">
        <div className="w-full bg-white p-5">
          <div className="w-full flex">
            <h3 className="text-lg">RESUMEN DE TU PEDIDO</h3>
          </div>
          <hr className="w-full bg-zinc-200 h-0.5 mt-2" />
        </div>
        <div className="w-full bg-white p-5">
          <div className="w-full flex justify-between">
            <h3>Total Parcial:</h3>
            <h3>
              S/.
              {cartItems.reduce(
                (total, item) => total + item.precio * item.cantidad,
                0
              )}
            </h3>
          </div>
          <hr className="w-full bg-zinc-200 h-0.5 mt-2" />
        </div>
        <div className="w-full bg-white p-5">
          <div className="w-full flex justify-between text-xl font-semibold">
            <h3>Total del Pedido:</h3>
            <h3>
              S/.
              {cartItems.reduce(
                (total, item) => total + item.precio * item.cantidad,
                0
              )}
            </h3>
          </div>
        </div>
        <div className="w-full p-3 bg-white">
          <button className="w-full p-5 bg-blue-600 border-2 transition-all duration-300 ease-in-out hover:bg-blue-200 hover:border-zinc-900 flex justify-center text-white hover:text-zinc-900">
            COMPRAR
          </button>
        </div>
        <div className="w-full py-5">
          <h3 className="text-lg">¿Necesitas ayuda?</h3>
          <hr className="w-full bg-zinc-600 h-0.5 my-2" />
          <p>
            Llámanos 707-1481, 08-007-0027 Opción 1,1,1 Ventas 1,1,2 Postventa
          </p>
          <p>Lun - Vie 8am - 6pm</p>
          <p>Métodos de Pago Aceptado</p>
          <div className="w-full flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              x="0"
              y="0"
              viewBox="0 0 48 48"
            >
              <ellipse
                cx="23.5"
                cy="23.5"
                fill="#4fc3f7"
                rx="21.5"
                ry="15.5"
              ></ellipse>
              <path
                fill="#fafafa"
                d="M22.471 24.946c-1.978-5.537-4.884-10.881-6.085-12.995a7.974 7.974 0 00-1.29-1.69l-2.553-2.553c-.391-.391-1.414 0-1.414 0L9.497 8.734l-.162 2.319L8.773 11a.938.938 0 00-.938.938c0 .52.413.969.933.961 1.908-.03 3.567 1.601 3.567 1.601h2c.32.32 1.139 1.366 1.328 2.439.107.611.154 1.229.119 1.848C15.458 24.622 16.835 26 16.835 26c-5.5-3.5-14.819-2.964-14.819-2.964l.193 3.016L5 31c.919.212.744-.626 1.765-.504 6.199.741 13.57.004 13.57.004 1.5 0 1.958-.793 2.665-1.5 1-1-.151-2.996-.529-4.054zM24.913 24.946c1.978-5.537 4.884-10.881 6.085-12.995a7.974 7.974 0 011.29-1.69l2.553-2.553c.391-.391 1.414 0 1.414 0L37.814 9l.235 2.053.562-.053c.518 0 .938.42.938.938 0 .52-.413.969-.933.961-1.908-.03-3.567 1.601-3.567 1.601h-2c-.32.32-1.139 1.366-1.328 2.439a8.064 8.064 0 00-.119 1.848C31.926 24.622 30.549 26 30.549 26c5.5-3.5 15-3 15-3l-.165 3-3 5c-.919.212-.744-.626-1.765-.504-6.199.741-13.57.004-13.57.004-1.5 0-1.958-.793-2.665-1.5-1-1 .151-2.996.529-4.054z"
              ></path>
              <path
                fill="#1a237e"
                d="M43.832 16.326a15.506 15.506 0 00-.992-1.187c-.059-.064-.123-.123-.183-.186a16.976 16.976 0 00-.96-.938l-.079-.068a18.766 18.766 0 00-1.845-1.454 1.48 1.48 0 00.11-.555c0-.792-.643-1.437-1.481-1.437h-.004l-.015.002V9.32c0-.534-.288-1.032-.75-1.299l-1.364-.781c-.221-.085-1.356-.478-1.946.113l-1.837 1.838c-.381-.106-.89-.25-1.211-.326A31.682 31.682 0 0024 8c-3.031-.004-6.095.39-9.018 1.275l-1.921-1.921c-.59-.59-1.725-.199-2.018-.079l-1.293.746C9.288 8.288 9 8.786 9 9.32v1.186l-.062-.006A1.44 1.44 0 007.5 11.938c0 .311.103.614.283.865-.978.715-1.903 1.512-2.722 2.422-.315.35-.616.715-.9 1.096C2.638 18.346 2.061 20.87 2 23.5c-.035 2.628.455 5.223 1.932 7.343 1.478 2.132 3.451 3.854 5.624 5.163 4.378 2.609 9.436 3.749 14.444 3.846a32.546 32.546 0 007.471-.924c2.442-.624 4.81-1.582 6.986-2.9 2.163-1.328 4.143-3.041 5.617-5.18 1.476-2.122 1.932-4.719 1.894-7.347-.063-2.631-.611-5.153-2.136-7.175zm-3.039-1.187c.229.225.448.459.662.697.096.107.195.211.288.32.293.347.573.703.828 1.076 1.088 1.579 1.785 3.39 1.957 5.242-2.274-.031-8.444.114-13.042 2.342.335-1.133.619-3.016.449-6.058a7.653 7.653 0 01.113-1.733c.139-.79.702-1.618 1.054-2.026h.727a3.47 3.47 0 002.025-.647c.624-.444 1.559-.981 2.588-.954.072 0 .139-.03.21-.04.267.192.536.383.792.587.076.061.15.124.225.186a17.055 17.055 0 011.124 1.008zM24 9c2.369.026 4.734.303 7.027.87.208.053.412.118.617.181a8.399 8.399 0 00-1.246 1.652c-1.175 2.068-4.124 7.483-6.121 13.075-.075.208-.163.43-.255.66-.112.281-.226.572-.331.868a21.833 21.833 0 00-.331-.868c-.092-.23-.18-.452-.255-.66-2-5.599-4.947-11.009-6.121-13.075a8.375 8.375 0 00-1.074-1.456C18.522 9.461 21.264 9.054 24 9zM5.435 17.238c.251-.364.524-.713.811-1.052.094-.112.196-.218.294-.327.202-.225.408-.448.625-.662.115-.114.233-.224.351-.335.229-.213.463-.421.704-.622.099-.083.198-.166.299-.247.243-.193.495-.376.748-.558.886.089 1.707.522 2.262.918a3.472 3.472 0 002.026.647h.727c.352.407.915 1.235 1.054 2.026.105.597.143 1.18.113 1.733-.17 3.042.114 4.927.449 6.059-4.193-2.029-9.734-2.333-12.425-2.344.175-1.851.873-3.66 1.962-5.236zm.801 13.033c-.192-.224-.396-.437-.572-.673-1.335-1.772-2.174-3.893-2.238-6.098l.001-.025c2.878.006 9.226.351 13.305 2.947a.495.495 0 00.646-.104.506.506 0 00-.014-.662c-.012-.014-1.218-1.422-.916-6.842a8.558 8.558 0 00-.126-1.962c-.218-1.235-1.133-2.372-1.467-2.706A.51.51 0 0014.5 14h-.945a2.469 2.469 0 01-1.445-.462c-.745-.531-1.925-1.147-3.185-1.14a.384.384 0 01-.281-.117.479.479 0 01-.144-.343c0-.242.196-.438.391-.44l.562.054a.522.522 0 00.308-.084l.386.386a.5.5 0 00.511.121l1.207-.402 1.281 1.281a.502.502 0 00.708 0 .5.5 0 000-.707L12.707 11l.146-.146a.5.5 0 00.001-.708l-1-1a.5.5 0 00-.708.708l.646.646-.063.063-1.095.365-.634-.635V9.32c0-.178.096-.344.25-.434l1.22-.712c.365-.139.792-.179.883-.114l2.554 2.554a7.425 7.425 0 011.209 1.583c1.161 2.043 4.076 7.393 6.049 12.917.078.219.171.452.267.694.347.871.741 1.858.58 2.583-.204.918-1.284 1.609-2.522 1.609-.07.002-7.123.139-13.425.011-.267-.009-.556.103-.829.26zm30.981 3.647c-1.98 1.119-4.156 1.898-6.385 2.419a29.853 29.853 0 01-6.832.812c-4.592.01-9.259-.951-13.23-3.208-1.401-.799-2.709-1.764-3.832-2.891.036-.014.083-.038.107-.039 6.322.127 13.394-.01 13.455-.011 1.396 0 2.616-.673 3.192-1.67.575.997 1.794 1.67 3.182 1.67.071.002 7.146.139 13.462.011.089.003.272.102.483.249a17.537 17.537 0 01-3.602 2.658zm5.112-4.325c-.247.329-.526.635-.803.941-.37-.273-.81-.524-1.192-.524h-.017c-6.3.125-13.354-.01-13.434-.011-1.228 0-2.308-.691-2.512-1.608-.161-.725.232-1.712.58-2.583.096-.242.189-.476.267-.694 1.971-5.518 4.887-10.871 6.049-12.917a7.425 7.425 0 011.209-1.583l2.55-2.551c.096-.063.522-.026.815.077l1.293.747c.154.09.25.256.25.434v.973l-.635.635-1.095-.365-.063-.064.646-.646a.498.498 0 000-.708.5.5 0 00-.707 0l-1 1a.498.498 0 000 .708l.147.146-1.146 1.146a.5.5 0 00.707.708l1.281-1.281 1.207.402a.504.504 0 00.512-.121l.386-.386a.514.514 0 00.308.084l.515-.052c.242 0 .438.196.438.438a.482.482 0 01-.143.343.453.453 0 01-.282.117c-1.279.011-2.439.608-3.185 1.14A2.469 2.469 0 0133.83 14h-.946a.504.504 0 00-.354.146c-.334.334-1.25 1.473-1.467 2.706a8.634 8.634 0 00-.126 1.963c.302 5.419-.904 6.827-.907 6.831a.5.5 0 00.622.775c4.408-2.805 11.576-2.969 13.922-2.942l.001.02c-.068 2.206-.909 4.325-2.246 6.094z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              x="0"
              y="0"
              viewBox="0 0 48 48"
            >
              <path
                fill="#1565C0"
                d="M18.7 13.767l.005.002A.977.977 0 0119.66 13h13.472c.017 0 .034-.007.051-.006C32.896 8.215 28.887 6 25.35 6H11.878a.984.984 0 00-.955.777l-.005-.002-5.889 27.038.013.001c-.014.064-.039.125-.039.194 0 .553.447.991 1 .991h8.071L18.7 13.767z"
              ></path>
              <path
                fill="#039BE5"
                d="M33.183 12.994a10.65 10.65 0 01-.229 2.882c-1.281 5.995-5.912 9.115-11.635 9.115h-4.313a.919.919 0 00-.88.54l-1.74 8.049-.305 1.429h-.006l-1.263 5.796.013.001c-.014.064-.039.125-.039.194a1 1 0 001 1h7.333l.013-.01a.985.985 0 00.945-.788l.018-.015 1.812-8.416s.126-.803.97-.803h4.178c5.723 0 10.401-3.106 11.683-9.102 1.442-6.76-3.38-9.847-7.555-9.872z"
              ></path>
              <path
                fill="#283593"
                d="M19.66 13a.976.976 0 00-.955.769l-.005-.002-2.575 11.765a.919.919 0 01.88-.54h4.235c5.723 0 10.432-3.12 11.713-9.115a10.61 10.61 0 00.229-2.882c-.016-.002-.034.005-.05.005H19.66z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarritoCompra;
