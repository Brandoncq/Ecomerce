"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Autenticacion() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [payload, setPayload] = useState({
    nombre: "",
    email: "",
  });
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  /*useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("/api/cliente", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setIsLoggedIn(true);
            setPayload({
              nombre: data.username,
              email: data.email,
            });
          } else {
            setIsLoggedIn(false);
          }
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error fetching auth status:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  });*/
  const evaluar = async () => {
    try {
      const response = await fetch("/api/cliente", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setIsLoggedIn(true);
          setPayload({
            nombre: data.username,
            email: data.email,
          });
        } else {
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error fetching auth status:", error);
      setIsLoggedIn(false);
    }
  };
  useEffect(() => {
    evaluar();
    const handleLogin = (event) => {
      evaluar();
    };

    window.addEventListener("login", handleLogin);

    return () => {
      window.removeEventListener("login", handleLogin);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = async () => {
    await fetch("/api/cliente", {
      method: "DELETE",
    });
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <li className="relative inline-block" ref={dropdownRef}>
      <button className={`flex items-center px-1`} onClick={toggleDropdown}>
        <p className="max-md:hidden">{isLoggedIn ? payload.nombre : ""}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          version="1"
          viewBox="0 0 96 96"
          className={`w-10 h-10 p-1`}
        >
          {isLoggedIn ? (
            <g>
              <path
                d="M260 860c-19-19-20-33-20-380s1-361 20-380 33-20 220-20c254 0 240-9 240 160v120h-80V160H320v640h320V600h80v120c0 169 14 160-240 160-187 0-201-1-220-20z"
                transform="matrix(.1 0 0 -.1 0 96)"
              />
              <path
                d="M800 582v-62H440v-80h360V315l82 83 83 82-83 82-82 83v-63z"
                transform="matrix(.1 0 0 -.1 0 96)"
              />
            </g>
          ) : (
            <g>
              <path
                d="M373 854c-62-37-93-95-93-174 0-123 77-200 200-200s200 77 200 200-77 200-201 200c-51 0-73-5-106-26zm198-83c35-35 39-44 39-91s-4-56-39-91-44-39-91-39-56 4-91 39-39 44-39 91 4 56 39 91 44 39 91 39 56-4 91-39zM180 380c-16-16-20-33-20-80 0-93 38-147 135-192 44-20 65-23 185-23s141 3 185 23c98 45 152 127 140 210s-7 82-325 82c-267 0-281-1-300-20zm549-54c19-22-4-90-40-120-89-75-329-75-418 0-36 30-59 98-40 120 17 21 481 21 498 0z"
                transform="matrix(.1 0 0 -.1 0 96)"
              />
            </g>
          )}
        </svg>
        <p className="max-md:hidden">
          {isLoggedIn ? "" : "Iniciar Sesión / Crear Cuenta"}
        </p>
      </button>
      {showDropdown && (
        <ul
          className={`absolute top-full right-0 bg-blue-600 mt-2 shadow-lg p-2 rounded`}
        >
          {isLoggedIn ? (
            <li
              className="py-2 px-4 text-zinc-200 hover:bg-blue-500 rounded cursor-pointer"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </li>
          ) : (
            <>
              <li className="py-2 px-4 text-zinc-200 hover:bg-blue-500 rounded">
                <Link href="/IniciarSesion">Iniciar Sesión</Link>
              </li>
              <li className="py-2 px-4 text-zinc-200 hover:bg-blue-500 rounded">
                <Link href="/CrearCuenta/Crear">Crear Cuenta</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </li>
  );
}

export default Autenticacion;
