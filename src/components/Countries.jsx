import { useState, useEffect } from "react";

const CountrySearchInput = ({ userNacionalidad, setUserNacionalidad }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const paises = async () => {
      try {
        const response = await fetch("/api/paises");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    paises();
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setUserNacionalidad({ nombre: query, codigo: "" });

    if (query.length > 0) {
      const filtered = countries.filter((country) =>
        country.country_name.toLowerCase().startsWith(query)
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  };

  const handleCountrySelect = (country) => {
    setUserNacionalidad({
      nombre: country.country_name,
      codigo: country.country_short_name,
    });
    setFilteredCountries([]);
  };
  const handleBlurOrEnter = () => {
    const matchedCountry = countries.find(
      (country) =>
        country.country_name.toLowerCase() ===
        userNacionalidad.nombre.toLowerCase()
    );

    if (matchedCountry) {
      setUserNacionalidad({
        nombre: matchedCountry.country_name,
        codigo: matchedCountry.country_short_name,
      });
    } else {
      setUserNacionalidad((prev) => ({
        ...prev,
        codigo: "",
      }));
    }
  };
  return (
    <div className="relative z-10 w-full mb-5 group my-2">
      <input
        type="search"
        name="from_nacionalidad"
        id="from_nacionalidad"
        className="block py-2.5 px-0 w-full text-lg text-gray-900 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
        value={userNacionalidad.nombre}
        onChange={handleInputChange}
        onBlur={handleBlurOrEnter}
        onKeyDown={(e) => e.key === "Enter" && handleBlurOrEnter()}
        autoComplete="off"
      />
      <label
        htmlFor="from_nacionalidad"
        className="peer-focus:font-medium absolute text-lg text-gray-800 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Nacionalidad
      </label>
      {filteredCountries.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-md w-full mt-1 max-h-60 overflow-auto z-10">
          {filteredCountries.map((country) => (
            <li
              key={country.country_short_name}
              className="px-4 py-2 cursor-pointer bg-gray-100"
              onClick={() => handleCountrySelect(country)}
            >
              {country.country_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySearchInput;
