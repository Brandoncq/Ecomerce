import { useState, useEffect, useRef } from "react";

const DirectionSearchInputs = ({
  setLocation,
  type,
  name,
  label,
  conditional,
}) => {
  const [directions, setDirections] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type !== "countries" && !conditional) return;
        const endpoint = conditional
          ? `/api/paises/${type}?query=${conditional}`
          : `/api/paises/${type}`;
        const response = await fetch(endpoint);
        const data = await response.json();
        setDirections(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    if (conditional) {
      setInputValue("");
    }
  }, [type, conditional]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setInputValue(query);

    if (query.length > 0) {
      const filtered = directions.filter(
        (direction) =>
          direction[name] && direction[name].toLowerCase().startsWith(query)
      );
      setFiltered(filtered);
      setIsDropdownOpen(true);
    } else {
      setFiltered([]);
      setIsDropdownOpen(false);
    }
  };

  const handleSelect = (selectedValue) => {
    setInputValue(selectedValue);
    setLocation(selectedValue);
    setFiltered([]);
    setIsDropdownOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleBlurOrEnter();
    }
  };

  const handleBlurOrEnter = () => {
    setTimeout(() => {
      const matchedItem = directions.find(
        (item) =>
          item[name] && item[name].toLowerCase() === inputValue.toLowerCase()
      );

      if (matchedItem) {
        setLocation(matchedItem[name]);
      } else {
        setInputValue("");
        setLocation("");
      }
      setIsDropdownOpen(false);
    }, 100); // Agregar un pequeño retraso para permitir que el clic se registre primero
  };

  return (
    <div className="relative z-10 w-full mb-5 group my-2" ref={dropdownRef}>
      <input
        type="search"
        name="from_nacionalidad"
        id="from_nacionalidad"
        className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsDropdownOpen(filtered.length > 0)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        disabled={type !== "countries" && !conditional}
      />
      <label
        htmlFor="from_nacionalidad"
        className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
      {isDropdownOpen && filtered.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-md w-full mt-1 max-h-60 overflow-auto z-50 transform">
          {filtered.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer bg-white hover:bg-slate-300"
              onClick={() => handleSelect(item[name])}
            >
              {item[name]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DirectionSearchInputs;
