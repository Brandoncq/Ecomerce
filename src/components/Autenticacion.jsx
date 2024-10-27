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
    const LogOutEvent = new CustomEvent("logout");
    window.dispatchEvent(LogOutEvent);
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <li className="relative inline-block" ref={dropdownRef}>
      <button className={`flex items-center px-1`} onClick={toggleDropdown}>
        {isLoggedIn && (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGKdJdQi7JgxgiUBwoL5gqj280DtpOPvdHQ&s"
            alt=""
            className="w-10 h-10 rounded-full mx-1"
          />
        )}
        <p className="max-md:hidden font-semibold">
          {isLoggedIn ? payload.email : ""}
        </p>
        <div className="flex justify-center items-center">
          {" "}
          {isLoggedIn ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              className={`w-10 h-10 p-1`}
            >
              <path d="M22.205 2a1 1 0 00-.986.838l-.973 5.955c-1.17.34-2.285.8-3.336 1.371l-4.914-3.51a1 1 0 00-1.287.106l-3.89 3.886a1 1 0 00-.112 1.282l3.457 4.945a16.92 16.92 0 00-1.398 3.36l-5.93.986a1 1 0 00-.834.986v5.5a1 1 0 00.824.986l5.934 1.051a16.82 16.82 0 001.394 3.36l-3.5 4.896a1 1 0 00.106 1.287l3.888 3.89a1 1 0 001.28.114l4.955-3.469a16.85 16.85 0 003.346 1.381l.99 5.963a1 1 0 00.986.836h5.5a1 1 0 00.986-.826l1.061-5.986a16.85 16.85 0 003.33-1.397l4.988 3.5a1 1 0 001.282-.111l3.888-3.893a1 1 0 00.104-1.29l-3.557-4.938a16.769 16.769 0 001.367-3.311l6.018-1.055a1 1 0 00.826-.986v-5.5a1 1 0 00-.838-.986l-6.008-.983a16.885 16.885 0 00-1.37-3.306l3.507-4.998a1 1 0 00-.111-1.282l-3.89-3.888a1 1 0 00-1.292-.104l-4.924 3.541a16.76 16.76 0 00-3.334-1.389l-1.047-5.984A1 1 0 0027.705 2h-5.5zm.852 2h3.808l.996 5.686a1 1 0 00.743.798c1.462.365 2.836.943 4.09 1.702a1 1 0 001.1-.043l4.68-3.364 2.694 2.694-3.332 4.748a1 1 0 00-.04 1.09 14.926 14.926 0 011.686 4.07 1 1 0 00.809.744l5.707.934v3.808l-5.719 1.004a1 1 0 00-.797.746 14.798 14.798 0 01-1.681 4.069 1 1 0 00.045 1.1l3.379 4.689-2.694 2.695-4.74-3.326a1 1 0 00-1.094-.035 14.894 14.894 0 01-4.08 1.709 1 1 0 00-.74.794L26.867 46h-3.814l-.942-5.662a1 1 0 00-.746-.807 14.902 14.902 0 01-4.105-1.695 1 1 0 00-1.088.039l-4.703 3.295-2.696-2.7 3.325-4.646a1 1 0 00.04-1.1 14.859 14.859 0 01-1.71-4.115 1 1 0 00-.795-.742l-5.631-1v-3.814l5.627-.936a1 1 0 00.807-.744 14.953 14.953 0 011.71-4.117 1 1 0 00-.035-1.092L8.826 11.47l2.697-2.696 4.663 3.332a1 1 0 001.095.043 14.83 14.83 0 014.104-1.685 1 1 0 00.748-.81L23.057 4zM25 17c-4.406 0-8 3.594-8 8 0 4.406 3.594 8 8 8 4.406 0 8-3.594 8-8 0-4.406-3.594-8-8-8zm0 2c3.326 0 6 2.674 6 6s-2.674 6-6 6-6-2.674-6-6 2.674-6 6-6z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              version="1"
              viewBox="0 0 96 96"
              className={`w-10 h-10 p-1`}
            >
              <g>
                <path
                  d="M373 854c-62-37-93-95-93-174 0-123 77-200 200-200s200 77 200 200-77 200-201 200c-51 0-73-5-106-26zm198-83c35-35 39-44 39-91s-4-56-39-91-44-39-91-39-56 4-91 39-39 44-39 91 4 56 39 91 44 39 91 39 56-4 91-39zM180 380c-16-16-20-33-20-80 0-93 38-147 135-192 44-20 65-23 185-23s141 3 185 23c98 45 152 127 140 210s-7 82-325 82c-267 0-281-1-300-20zm549-54c19-22-4-90-40-120-89-75-329-75-418 0-36 30-59 98-40 120 17 21 481 21 498 0z"
                  transform="matrix(.1 0 0 -.1 0 96)"
                />
              </g>{" "}
            </svg>
          )}
        </div>

        <p className="max-md:hidden">
          {isLoggedIn ? "" : "Iniciar Sesión / Crear Cuenta"}
        </p>
      </button>
      {showDropdown && (
        <ul
          className={`absolute top-full right-0 bg-blue-600 mt-2 shadow-lg p-2 rounded w-32`}
        >
          {isLoggedIn ? (
            <>
              <li
                className="p-2 text-zinc-200 hover:bg-blue-500 rounded cursor-pointer"
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
                <Link href="/Usuario">Usuario</Link>
              </li>
              <li
                className="p-2 text-zinc-200 hover:bg-blue-500 rounded cursor-pointer"
                onClick={() => {
                  setShowDropdown(false);
                  handleLogout();
                }}
              >
                Cerrar Sesión
              </li>
            </>
          ) : (
            <>
              <li
                className="p-2 text-zinc-200 hover:bg-blue-500 rounded"
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
                <Link href="/IniciarSesion">Iniciar Sesión</Link>
              </li>
              <li
                className="p-2 text-zinc-200 hover:bg-blue-500 rounded"
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
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
