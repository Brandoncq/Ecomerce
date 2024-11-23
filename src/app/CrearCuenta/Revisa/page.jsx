"use client";
import { useState } from "react";
import { useFormContext } from "../context";
import { useRouter } from "next/navigation";
function RevisaCuenta() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const { formData } = useFormContext();
  const [token, setToken] = useState("");
  const Enviar = async () => {
    event.preventDefault();
    setIsLoadingButton(true);
    setError("");
    try {
      const response = await fetch("/api/tokens/revisar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      });
      if (!response.ok) {
        const errorDetails = await response.json();
        setError(errorDetails.error);
        throw new Error(errorDetails.error || "Error en la petición");
      }
      const CreateEvent = new CustomEvent("login");
      window.dispatchEvent(CreateEvent);
      router.push("/CrearCuenta/Verifica");
      setIsLoadingButton(false);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setIsLoadingButton(false);
    }
  };
  return (
    <div className="w-full flex flex-wrap justify-center p-5 md:px-5 lg:px-20 mb-4">
      <div className="text-xl my-4 w-full flex flex-col items-center">
        <div className="w-full md:w-1/2 p-5 md:px-10 lg:px-20 justify-between items-center flex">
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            &#10003;
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            2
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center">
            3
          </div>
        </div>
        <div className="w-full md:w-1/2 justify-center items-center flex text-sm md:text-base text-center">
          <div className="flex justify-center items-center w-1/3">
            <p>Crear ID de CompuFenix</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Revisa el correo electrónico</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Verificar la cuenta creada</p>
          </div>
        </div>
        <div className="text-left w-full mt-3 max-lg:mt-6 flex items-center">
          <div className="border-2 border-green-600 rounded-full w-10 h-10 flex justify-center items-center">
            2
          </div>
          <h2 className="px-2">Revisa el correo electrónico</h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 shadow-lg shadow-zinc-400 md:px-5 lg:px-20 border border-zinc-200 rounded-lg">
        <h3 className="my-4">¡Gracias por crear una cuenta!</h3>
        <p>
          Hemos enviado un código de verificación a tu correo electrónico{" "}
          <a className="font-bold">{formData.correo}</a>. Por favor, revisa tu
          bandeja de entrada y utiliza el código para verificar tu cuenta.
          <br />
          <br />
          Recuerda que el código expirará en{" "}
          <a className="font-bold">10 minutos</a>, así que no olvides
          completarlo a tiempo.
          <br />
          <br />
          ¡Estamos emocionados de darte la bienvenida,{" "}
          <a className="font-bold">{formData.nombre}</a>, a nuestra comunidad de
          usuarios!
        </p>

        <form onSubmit={Enviar} className="w-full flex-col">
          <div className="relative z-0 w-full my-5 group">
            <input
              type="text"
              name="from_token"
              id="from_token"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              value={token}
              onChange={(e) => {
                setToken(e.target.value);
              }}
            />
            <label
              htmlFor="from_token"
              className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Codigo de Verificación
            </label>
          </div>
          <div className="w-full min-h-8 flex justify-center">
            {error && (
              <p className="text-red-500 text-sm font-semibold">{error}</p>
            )}
          </div>
          <div className="w-full flex justify-center my-2 mt-6">
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
                "Ingresar Token"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RevisaCuenta;
