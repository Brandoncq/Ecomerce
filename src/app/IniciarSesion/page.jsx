"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
function IniciarSesion() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    correo: "",
    password: "",
  });
  const Enviar = async () => {
    event.preventDefault();
    try {
      const response = await fetch("/api/cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.correo,
          password: user.password,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en la solicitud:", errorData);
        setError(errorData.error);
        throw new Error(errorData.error || "Error desconocido");
      }
      const response_auth = await fetch("/api/cliente", {
        method: "GET",
        credentials: "include",
      });
      const data = response_auth.json();
      localStorage.setItem(
        "auth",
        JSON.stringify({
          nombre: data.username,
          email: data.email,
        })
      );
      const loginEvent = new CustomEvent("login", {
        detail: {
          nombre: data.username,
          email: data.email,
        },
      });
      window.dispatchEvent(loginEvent);
      router.push("/");
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-center border-t-4 boerder-zinc-200">
      <div className="w-full flex flex-wrap justify-center p-5 md:px-5 lg:px-20 mb-4 md:my-16">
        <div className="my-4 w-full flex flex-col items-center">
          <div className="w-full md:w-3/5 lg:w-2/5 max-md:mt-6 flex flex-col items-center justify-center">
            <h2 className="px-2 font-bold md:text-3xl text-xl">
              Iniciar Sesion
            </h2>
            <p className="md:px-10 text-base text-center my-4">
              Hemos creado una nueva experiencia que te permitirá hacer un
              seguimiento de todos los pedidos y productos de Lenovo en un solo
              lugar.
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/5 lg:w-2/5 p-5 shadow-lg md:px-5 lg:px-20">
          <form onSubmit={Enviar} className="w-full flex-col">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="from_email"
                id="from_email"
                className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={user.correo}
                onChange={(e) => {
                  setUser((prevUser) => ({
                    ...prevUser,
                    correo: e.target.value,
                  }));
                }}
              />
              <label
                htmlFor="from_email"
                className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo Electrónico
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="from_password"
                id="from_password"
                className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={user.password}
                onChange={(e) => {
                  setUser((prevUser) => ({
                    ...prevUser,
                    password: e.target.value,
                  }));
                }}
              />

              <label
                htmlFor="from_password"
                className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contraseña
              </label>
            </div>
            <div className="w-full min-h-5 flex justify-center">
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            <div className="w-full flex justify-center my-2 mt-6">
              <button
                type="submit"
                className="transition-all duration-300 ease-in-out bg-blue-600 text-white px-5 py-2 rounded-md text-lg hover:bg-zinc-800"
                onClick={Enviar}
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IniciarSesion;
