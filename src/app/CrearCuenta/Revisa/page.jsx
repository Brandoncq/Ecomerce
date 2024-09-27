"use client";
import { useState } from "react";
import { useFormContext } from "../context";
import { useRouter } from "next/navigation";
function RevisaCuenta() {
  const router = useRouter();
  const { formData } = useFormContext();
  const [token, setToken] = useState("");
  const Enviar = () => {
    router.push("/CrearCuenta/Verifica");
  };
  console.log(formData);
  return (
    <div className="w-full flex flex-wrap justify-center p-5 md:px-20 mb-4 min-h-lvh">
      <div className="text-xl my-4 w-full flex flex-col items-center">
        <div className="w-full md:w-1/2 p-5 md:px-20 justify-between items-center flex">
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
            <p> Crear ID de Compu-Fenix</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Revisa el correo electrónico</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Verificar la cuenta creada</p>
          </div>
        </div>
        <div className="text-left w-full max-md:mt-6 flex items-center">
          <div className="border-2 border-green-600 rounded-full w-10 h-10 flex justify-center items-center">
            2
          </div>
          <h2 className="px-2">Revisa el correo electrónico</h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 shadow-lg md:px-20">
        <h3 className="my-4">¡Gracias por crear una cuenta!</h3>
        <p>
          Hemos enviado un código de verificación a tu correo electrónico{" "}
          <a className="font-bold">{formData.correo}</a>. Por favor, revisa tu
          bandeja de entrada y utiliza el código para verificar tu cuenta.
          <br />
          <br />
          Recuerda que el código expirará en{" "}
          <a className="font-bold">5 minutos</a>, así que no olvides completarlo
          a tiempo.
          <br />
          <br />
          ¡Estamos emocionados de darte la bienvenida,{" "}
          <a className="font-bold">{formData.nombre}</a>, a nuestra comunidad de
          usuarios!
        </p>
        <div className="relative z-0 w-full my-5 group">
          <input
            type="email"
            name="from_email"
            id="from_email"
            className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={token}
            onChange={(e) => {
              setToken(e.target.value);
            }}
          />
          <label
            htmlFor="from_email"
            className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Codigo de Verificación
          </label>
        </div>
        <div className="w-full flex justify-center my-2 mt-6">
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-md text-lg"
            onClick={Enviar}
          >
            Crear ID
          </button>
        </div>
      </div>
    </div>
  );
}

export default RevisaCuenta;
