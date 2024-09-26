"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
function Busqueda() {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const router = useRouter();
  useEffect(() => {
    if (query.length > 0) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/buscador?query=${query}`).then(
            (res) => res.json()
          );
          console.log(response);
          setFilteredSuggestions(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    } else {
      setFilteredSuggestions([]);
    }
  }, [query]);

  const handleSelect = (suggestion) => {
    setQuery(suggestion.nombre_producto);
    setFilteredSuggestions([]);
    router.push(`/Buscar/${suggestion.nombre_producto}`);
  };

  return (
    <form className="w-full max-w-lg mx-auto max-md:order-last">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="¿Qué estas buscando?"
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Buscar
        </button>
        {filteredSuggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelect(suggestion)}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-base text-blue-600 cursor-pointer">
                      {suggestion.nombre_producto}
                    </h2>
                    <h2 className="text-lg font-semibold">
                      S/.{suggestion.precio_unitario}
                    </h2>
                    <h3>{suggestion.modelo}</h3>
                  </div>
                  <img
                    className="w-1/4 cursor-pointer"
                    src="https://p1-ofp.static.pub//fes/cms/2024/04/01/w5xzl0a0vcja2jirmi04tmaxy7nw1g409296.png"
                    alt=""
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}

export default Busqueda;
