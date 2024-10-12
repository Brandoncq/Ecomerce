"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "../context";
import CountrySearchInput from "@/components/Countries";
function CrearCuenta() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { setFormData } = useFormContext();
  const [validatepasword, setValidatepasword] = useState({
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumbers: false,
    hasSpecialChar: false,
    hasMinLength: false,
  });
  const [user, setUser] = useState({
    correo: "",
    nombres: "",
    apellidos: "",
    nacionalidad: {
      nombre: "",
      codigo: "",
    },
    prefijo: "",
    celular: "",
    tipodoc: "DNI",
    nrodocumento: "",
    password: "",
    password_validate: "",
  });
  const checkPasswordStrength = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>-]/.test(password);
    const hasMinLength = password.length >= 8;

    if (
      hasMinLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChar
    ) {
      return "Fuerte";
    } else if (hasMinLength && (hasUpperCase || hasLowerCase) && hasNumbers) {
      return "Media";
    } else {
      return "Débil";
    }
  };
  const Enviar = async () => {
    event.preventDefault();
    setError("");
    console.log(user);
    if (user.password !== user.password_validate) {
      return;
    }
    if (checkPasswordStrength(user.password) != "Fuerte") {
      return;
    }
    if (!user.nacionalidad.codigo) {
      setError("Por favor selecciona una nacionalidad válida.");
      return;
    }
    if (user.celular.length < 9) {
      setError("Ingresar un valor Correcto en Celular");
      return;
    }
    if (user.nrodocumento.length < 8) {
      setError("Ingresar un valor Correcto en N° Documento");
      return;
    }
    try {
      const response = await fetch("/api/tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.correo,
          nombres: user.nombres,
          apellidos: user.apellidos,
          nacionalidad: user.nacionalidad.codigo,
          prefijo: user.prefijo,
          celular: user.celular,
          tipo_cliente: user.tipodoc,
          nro_documento: user.nrodocumento,
          password: user.password,
          password_validate: user.password_validate,
        }),
      });
      if (!response.ok) {
        const errorDetails = await response.json();
        setError(errorDetails.error);
        throw new Error(errorDetails.error || "Error en la petición");
      }
      setFormData((prev) => ({
        ...prev,
        nombre: user.nombres,
        correo: user.correo,
        apellidos: user.apellidos,
      }));

      router.push("/CrearCuenta/Revisa");
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-center p-5 md:px-5 lg:px-20 mb-4">
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
        <div className="w-full md:w-1/2 justify-center items-center flex text-sm md:text-base text-center">
          <div className="flex justify-center items-center w-1/3">
            <p>Crear ID de Compu Fenix</p>
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
            1
          </div>
          <h2 className="px-2">Crear el ID de Compu-Fenix</h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 shadow-lg shadow-zinc-400 md:px-5 lg:px-20 border border-zinc-200 rounded-lg">
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
          <div className="grid grid-cols-6 md:gap-6 my-2">
            <div className="relative z-0 w-full mb-5 group group max-lg:col-span-2 col-span-1 flex items-center">
              <input
                type="text"
                name="from_prefijo"
                id="from_prefijo"
                className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                maxLength={5}
                value={user.prefijo}
                onChange={(e) => {
                  let value = e.target.value;
                  if (!value.startsWith("+")) {
                    value = "+" + value.replace(/\D/g, "");
                  } else {
                    value = "+" + value.slice(1).replace(/\D/g, "");
                  }
                  if (value.length > 1 && value[1] === "0") {
                    value = "+";
                  }
                  setUser((prevUser) => ({
                    ...prevUser,
                    prefijo: value,
                  }));
                }}
              />
              <label
                htmlFor="from_prefijo"
                className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Prefijo
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group group max-lg:col-span-4 col-span-5">
              <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-4 h-4 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                </svg>
              </span>
              <input
                type="text"
                id="floating-phone-number"
                className="block py-2.5 ps-6 pe-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder=" "
                maxLength={9}
                value={user.celular}
                onChange={(e) => {
                  let value = e.target.value;
                  value = value.replace(/[^0-9]/g, "");
                  if (value.length > 1 && value.startsWith("0")) {
                    value = value.replace(/^0+/, "");
                  }
                  setUser((prevUser) => ({
                    ...prevUser,
                    celular: value,
                  }));
                }}
              />
              <label
                htmlFor="floating-phone-number"
                className="absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Numero de Celular
              </label>
            </div>
          </div>
          <CountrySearchInput
            userNacionalidad={user.nacionalidad}
            setUserNacionalidad={(nacionalidad) =>
              setUser((prevUser) => ({
                ...prevUser,
                nacionalidad: {
                  nombre: nacionalidad.nombre,
                  codigo: nacionalidad.codigo,
                },
              }))
            }
          />

          <div className="grid grid-cols-6 md:gap-6 my-2">
            <div className="relative z-0 w-full mb-5 group group max-lg:col-span-2 col-span-1 flex items-center">
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-lg font-semibold text-gray-800 bg-transparent border-0 border-b-2 border-gray-800 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={user.tipodoc}
                onChange={(e) => {
                  setUser((prevUser) => ({
                    ...prevUser,
                    tipodoc: e.target.value,
                  }));
                }}
              >
                <option value="DNI">DNI</option>
                <option value="RUC">RUC</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-5 group group max-lg:col-span-4 col-span-5">
              <input
                type="text"
                name="from_doc"
                id="from_doc"
                className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                maxLength={11}
                value={user.nrodocumento}
                onChange={(e) => {
                  let value = e.target.value;
                  value = value.replace(/[^0-9]/g, "");
                  if (value.length > 1 && value.startsWith("0")) {
                    value = value.replace(/^0+/, "");
                  }
                  setUser((prevUser) => ({
                    ...prevUser,
                    nrodocumento: value,
                  }));
                }}
              />
              <label
                htmlFor="from_doc"
                className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                N° Documento
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
                const password = e.target.value;
                setUser((prevUser) => ({
                  ...prevUser,
                  password: e.target.value,
                }));
                if (checkPasswordStrength(password) == "Fuerte") {
                  if (password == user.password_validate) {
                    setPasswordError("");
                  } else {
                    setPasswordError("Las contraseñas no coinciden.");
                  }
                } else {
                  setPasswordError("La contraseña es demasiado débil.");
                }
                const hasUpperCase = /[A-Z]/.test(password);
                const hasLowerCase = /[a-z]/.test(password);
                const hasNumbers = /[0-9]/.test(password);
                const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>-]/.test(password);
                const hasMinLength = password.length >= 8;
                setValidatepasword({
                  hasUpperCase: hasUpperCase,
                  hasLowerCase: hasLowerCase,
                  hasNumbers: hasNumbers,
                  hasSpecialChar: hasSpecialChar,
                  hasMinLength: hasMinLength,
                });
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
                const confirmPassword = e.target.value;
                setUser((prevUser) => ({
                  ...prevUser,
                  password_validate: e.target.value,
                }));
                if (checkPasswordStrength(user.password) == "Fuerte") {
                  if (confirmPassword == user.password) {
                    setPasswordError("");
                  } else {
                    setPasswordError("Las contraseñas no coinciden.");
                  }
                }
              }}
            />
            <label
              htmlFor="from_password_validate"
              className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirmar Contraseña
            </label>
          </div>

          <div className="w-full min-h-8">
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>
          <p className="text-sm text-gray-600 font-medium mt-2">
            La contraseña tiene que contener por lo menos:
            <span
              className={`block my-1 ${
                validatepasword.hasLowerCase
                  ? "bg-green-100 text-green-800 font-semibold"
                  : ""
              }`}
            >
              {validatepasword.hasLowerCase ? "✓ 1 minúscula" : ". 1 minúscula"}
            </span>
            <span
              className={`block my-1 ${
                validatepasword.hasUpperCase
                  ? "bg-green-100 text-green-800 font-semibold"
                  : ""
              }`}
            >
              {validatepasword.hasUpperCase ? "✓ 1 mayuscula" : ". 1 mayuscula"}
            </span>
            <span
              className={`block my-1 ${
                validatepasword.hasNumbers
                  ? "bg-green-100 text-green-800 font-semibold"
                  : ""
              }`}
            >
              {validatepasword.hasNumbers ? "✓ Un número" : ". Un número"}
            </span>
            <span
              className={`block my-1 ${
                validatepasword.hasSpecialChar
                  ? "bg-green-100 text-green-800 font-semibold"
                  : ""
              }`}
            >
              {validatepasword.hasSpecialChar
                ? "✓ 1 símbolo (ej: !@#$%^&)"
                : ". 1 símbolo (ej: !@#$%^&)"}
            </span>
            <span
              className={`block my-1 ${
                validatepasword.hasMinLength
                  ? "bg-green-100 text-green-800 font-semibold"
                  : ""
              }`}
            >
              {validatepasword.hasMinLength
                ? "✓ Minimo 8 Carateres"
                : ". Minimo 8 Carateres"}
            </span>
          </p>
          <div className="w-full min-h-5 flex justify-center">
            {error && <p className="text-red-500 text-sm my-4">{error}</p>}
          </div>
          <div className="w-full flex flex-col justify-center items-center my-2 mt-6">
            <div className="w-3/4 md:w-1/2 my-1">
              <button
                className="w-full transition-all duration-300 ease-in-out bg-blue-600 text-white px-5 py-2 rounded-md text-lg hover:bg-zinc-800"
                onClick={Enviar}
              >
                Crear Cuenta
              </button>
            </div>
            <div className="w-3/4 md:w-1/2 my-1">
              <button
                className="w-full border transition-all duration-300 ease-in-out border-blue-600 text-blue-600 px-5 py-2 rounded-md text-lg hover:bg-zinc-800 hover:border-zinc-800 hover:text-white"
                onClick={() => {
                  router.push("/CrearCuenta/Revisa");
                }}
              >
                Saltar a Revisar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CrearCuenta;
