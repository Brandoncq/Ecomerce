"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
function IniciarSesion() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [user, setUser] = useState({
    correo: "",
    password: "",
  });
  const Enviar = async () => {
    event.preventDefault();
    setError("");
    setIsLoadingButton(true);
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
      setIsLoadingButton(false);
    } catch (error) {
      console.error("Error al enviar datos:", error);
      setIsLoadingButton(false);
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-center border-t-4 boerder-zinc-200">
      <div className="w-full flex flex-wrap justify-center p-5 md:px-5 lg:px-20 mb-4 md:my-16">
        <div className="my-4 w-full flex flex-col items-center">
          <div className="w-full md:w-3/5 lg:w-2/5 max-md:mt-6 flex flex-col items-center justify-center">
            <h2 className="px-2 font-bold md:text-3xl text-xl">
              Iniciar Sesión
            </h2>
            <p className="md:px-10 text-base text-center my-4">
              Hemos creado una nueva experiencia que te permitirá hacer un
              seguimiento de todos los pedidos y productos de Lenovo en un solo
              lugar.
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/5 lg:w-2/5 p-5 shadow-lg shadow-zinc-400 md:px-5 lg:px-20 border border-zinc-200 rounded-lg">
          <form onSubmit={Enviar} className="w-full flex-col">
            <div className="relative z-0 w-full my-5 group">
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
              {error && (
                <p className="text-red-500 text-sm font-semibold">{error}</p>
              )}
            </div>
            <div className="w-full flex justify-center my-2 mt-4">
              <button
                type="submit"
                className={`transition-all duration-300 ease-in-out bg-blue-600 text-white px-5 py-2 rounded-md text-lg w-full md:w-1/2 flex justify-center items-center ${
                  isLoadingButton
                    ? "cursor-not-allowed bg-zinc-900"
                    : "hover:bg-zinc-900"
                }`}
                onSubmit={Enviar}
              >
                {isLoadingButton ? (
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  "Iniciar Sesión"
                )}
              </button>
            </div>
            <div className="w-full flex max-md:flex-col justify-between max-md:justify-center max-md:text-center text-blue-600 my-6">
              <p className="hover:underline hover:underline-offset-8">
                ¿Olvido su Contraseña?
              </p>
              <Link
                href="/CrearCuenta/Crear"
                className="hover:underline hover:underline-offset-8"
              >
                Crear Tu Cuenta Ahora
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IniciarSesion;
