"use client";
import { useState } from "react";

function CrearCuenta() {
  const [user, setUser] = useState({
    correo: "",
    nombres: "",
    apellidos: "",
    password: "",
    password_validate: "",
  });
  const Enviar = async () => {
    const response = await fetch("/api/tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        nombres: user.nombres,
        apellidos: user.apellidos,
        password: user.password,
        password_validate: user.password_validate,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="w-full flex flex-wrap justify-center p-5 md:px-20 mb-4">
      <div className="text-xl my-4 w-full flex flex-col items-center">
        <div className="w-full md:w-1/2 p-5 md:px-20 justify-between items-center flex">
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            1{/* &#10003; Simbolo de check*/}
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
            1
          </div>
          <h2 className="px-2">Crear el ID de Compu-Fenix</h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 shadow-lg md:px-20">
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
            Dirección de Correo Electrónico
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={user.nombres}
              onChange={(e) => {
                setUser((prevUser) => ({
                  ...prevUser,
                  nombres: e.target.value,
                }));
              }}
            />
            <label
              htmlFor="from_name"
              className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombres
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="from_apellido"
              id="from_apellido"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={user.apellidos}
              onChange={(e) => {
                setUser((prevUser) => ({
                  ...prevUser,
                  apellidos: e.target.value,
                }));
              }}
            />
            <label
              htmlFor="from_apellido"
              className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellidos
            </label>
          </div>
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
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="from_password_validate"
            id="from_password_validate"
            className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={user.password_validate}
            onChange={(e) => {
              setUser((prevUser) => ({
                ...prevUser,
                password_validate: e.target.value,
              }));
            }}
          />

          <label
            htmlFor="from_password_validate"
            className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirmar Contraseña
          </label>
        </div>
        <div className="w-full flex justify-center my-2 mt-6">
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-md text-xl"
            onClick={Enviar}
          >
            Crear ID
          </button>
        </div>
      </div>
    </div>
  );
}

export default CrearCuenta;
