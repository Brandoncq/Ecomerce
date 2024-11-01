"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

function Busqueda() {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const suggestionsRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 0) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/buscador?query=${query}`).then(
            (res) => res.json()
          );
          setFilteredSuggestions(response);
          setIsSuggestionsOpen(true);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    } else {
      setFilteredSuggestions([]);
      setIsSuggestionsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setIsSuggestionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (suggestion) => {
    setQuery("");
    setFilteredSuggestions([]);
    setIsSuggestionsOpen(false);
    router.push(`/Buscar/${suggestion.nombre_producto}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0) {
        handleSelect(filteredSuggestions[selectedIndex]);
      }
    }
  };

  return (
    <form
      className="w-full max-w-lg mx-auto max-lg:order-last max-md:mt-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="relative" ref={suggestionsRef}>
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
          onFocus={() => setIsSuggestionsOpen(filteredSuggestions.length > 0)}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="¿Qué estás buscando?"
          required
        />

        {isSuggestionsOpen && filteredSuggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelect(suggestion)}
                className={`p-2 cursor-pointer hover:bg-gray-100 ${
                  index === selectedIndex ? "bg-gray-200" : ""
                }`}
              >
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-base text-blue-600 cursor-pointer">
                      {suggestion.nombre_producto}
                    </h2>
                    <h2 className="text-lg font-semibold text-black">
                      S/.{suggestion.precio_unitario}
                    </h2>
                    <h3 className="text-black">{suggestion.modelo}</h3>
                  </div>
                  <div className="w-1/4 md:w-1/3 h-auto md:p-2 text-black">
                    <img
                      className="w-full h-auto object-cover"
                      src={suggestion.imagen}
                      alt=""
                    />
                  </div>
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
