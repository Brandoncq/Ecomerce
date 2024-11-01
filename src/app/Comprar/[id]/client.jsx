"use client";
import Productos from "@/components/Productos";
import Filtro from "@/components/Filtro";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
const categoriaMapping = {
  Laptops: 1,
  Computadoras: 2,
  Tablets: 3,
  Accesorios: 4,
  Monitores: 5,
  Celulares: 6,
};

function buildDynamicFilters(filtros) {
  return Object.entries(filtros)
    .map(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        const isRange =
          value[0] &&
          typeof value[0] === "object" &&
          "min" in value[0] &&
          "max" in value[0];
        if (isRange) {
          return `${key}=${value
            .map(({ min, max }) => `${min}-${max}`)
            .join(",")}`;
        }
        return `${key}=${value.join(",")}`;
      } else if (!Array.isArray(value) && value) {
        return `${key}=${value}`;
      }
      return null;
    })
    .filter(Boolean)
    .join("&");
}

export default function ClientLaptops({ params }) {
  const [menufiltro, setMenuFiltro] = useState(true);
  const [filtros, setFiltros] = useState({
    id_categoria_producto: categoriaMapping[params],
    precios: [],
    modelos: [],
  });
  const [count, setCount] = useState({});
  const [list, setList] = useState("ASC");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [paginaActual, setPaginaActual] = useState(() => {
    const initialPage = searchParams.get("page");
    return initialPage ? parseInt(initialPage) : "";
  });

  const [limite, setLimite] = useState(() => {
    const initialLimit = searchParams.get("limit");
    return initialLimit ? parseInt(initialLimit) : "";
  });
  const [resultados, setResultados] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const preciosOptions = [
    { min: 1200.0, max: 1799.0 },
    { min: 1800.0, max: 2399.0 },
    { min: 2400.0, max: 3999.0 },
  ];
  const modelosOptions = ["F17", "G16 (2024)", "16-r0073cl"];
  useEffect(() => {
    setTotalPaginas(Math.ceil(resultados / (limite || 15)));
  }, [resultados, limite]);
  useEffect(() => {
    const updatedFiltros = { ...filtros };

    searchParams.forEach((value, key) => {
      if (key === "id_categoria_producto") return;

      const isIntervalFormat = value.split(",").every((item) => {
        const parts = item.split("-");
        return parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]);
      });

      if (isIntervalFormat) {
        updatedFiltros[key] = value.split(",").map((range) => {
          const [min, max] = range.split("-").map(Number);
          return { min, max };
        });
      } else {
        updatedFiltros[key] = value
          .split(",")
          .map((item) => decodeURIComponent(item).trim());
      }
    });

    if (JSON.stringify(filtros) !== JSON.stringify(updatedFiltros)) {
      setFiltros(updatedFiltros);
    }
  }, [searchParams]);

  const updatePageFromUrl = () => {
    const pageFromUrl = searchParams.get("page")
      ? parseInt(searchParams.get("page"))
      : "";
    setPaginaActual(pageFromUrl);

    const limitFromUrl = searchParams.get("limit")
      ? parseInt(searchParams.get("limit"))
      : "";
    setLimite(limitFromUrl);
  };

  useEffect(() => {
    updatePageFromUrl();
  }, [searchParams]);

  useEffect(() => {
    const handlePopState = () => {
      updatePageFromUrl();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handlePageChange = (newPage) => {
    let parsedNewPage = newPage === "1" ? 2 : parseInt(newPage, 10);

    const newQuery = new URLSearchParams(searchParams.toString());

    if (parsedNewPage <= 0) {
      newQuery.delete("page");
      setPaginaActual("");
    } else {
      newQuery.set("page", parsedNewPage);
      setPaginaActual(parsedNewPage);
    }

    const newUrl = `${pathname}?${newQuery.toString()}`;
    window.history.pushState({}, "", newUrl);
  };

  const handleLimitChange = (newLimit) => {
    const parsedNewLimit =
      parseInt(newLimit, 10) == "" ? 15 : parseInt(newLimit, 10);

    const newQuery = new URLSearchParams(searchParams.toString());

    if (parsedNewLimit <= 0) {
      newQuery.delete("limit");
      setLimite(15);
    } else {
      newQuery.set("limit", parsedNewLimit);
      setLimite(parsedNewLimit);
    }

    const newUrl = `${pathname}?${newQuery.toString()}`;
    window.history.pushState({}, "", newUrl);
  };

  const handleCheckboxChange = (type, option, event) => {
    const isRange =
      option.hasOwnProperty("min") && option.hasOwnProperty("max");
    setFiltros((prevFiltros) => {
      const updatedOptions = event.target.checked
        ? [...prevFiltros[type], option]
        : prevFiltros[type].filter((item) =>
            isRange
              ? !(item.min === option.min && item.max === option.max)
              : item !== option
          );

      return { ...prevFiltros, [type]: updatedOptions };
    });
  };

  const conteofiltros = async () => {
    try {
      const filtros = {
        precios: preciosOptions,
        modelos: modelosOptions,
        id_categoria_producto: categoriaMapping[params],
      };

      const queryParams = buildDynamicFilters(filtros);
      const url = `/api/filtros?${queryParams}`;
      const response = await fetch(url);
      const data = await response.json();
      setCount(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    conteofiltros();
  }, []);
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full flex flex-wrap justify-center items-center bg-black max-lg:py-2 px-2 md:px-10">
        <div className="lg:hidden w-full flex justify-between items-center max-md:px-2">
          <div className="text-white flex items-center justify-center">
            <p>
              {resultados < (limite || 15) ? resultados : limite || 15} de{" "}
              {resultados} Resultados
            </p>
          </div>
          <div
            className="p-2 flex justify-center items-center transition-all ease-in-out duration-300 hover:bg-slate-300 border-2 border-white bg-white rounded-lg cursor-pointer"
            onClick={() => {
              setMenuFiltro(!menufiltro);
            }}
          >
            <div className="text-balck flex items-center justify-center space-x-2">
              <h3
                className={`transition-all ease-in-out duration-500 ${
                  menufiltro ? "rotate-180" : "rotate-90"
                }`}
              >
                ▲
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="133.333"
                height="133.333"
                version="1"
                viewBox="0 0 100 100"
                className="w-8 h-8 fill-black stroke-black"
              >
                <path
                  d="M440 840c-11-11-20-24-20-30s-70-10-190-10c-183 0-190-1-190-20s7-20 190-20c120 0 190-4 190-10 0-24 41-50 80-50s80 26 80 50c0 6 70 10 190 10 183 0 190 1 190 20s-7 20-190 20c-120 0-190 4-190 10 0 24-41 50-80 50-27 0-47-7-60-20zM720 560c-11-11-20-24-20-30s-117-10-330-10c-323 0-330 0-330-20s7-20 330-20c213 0 330-4 330-10 0-24 41-50 80-50s80 26 80 50c0 6 23 10 50 10 43 0 50 3 50 20s-7 20-50 20c-27 0-50 5-50 10 0 24-41 50-80 50-27 0-47-7-60-20zM220 280c-11-11-20-24-20-30s-33-10-80-10c-73 0-80-2-80-20s7-20 80-20c47 0 80-4 80-10 0-24 41-50 80-50s80 26 80 50c0 6 107 10 300 10 293 0 300 0 300 20s-7 20-300 20c-193 0-300 4-300 10 0 24-41 50-80 50-27 0-47-7-60-20z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
              </svg>
              <p>
                Odenar y Filtros{" "}
                {Object.keys(filtros)
                  .filter((key) => key !== "id_categoria_producto")
                  .reduce((total, key) => total + filtros[key].length, 0)}
              </p>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden w-full flex flex-wrap items-center">
          <div className="w-full lg:w-1/3 flex max-lg:justify-center">
            <p className="text-white">
              {Object.keys(filtros)
                .filter((key) => key !== "id_categoria_producto")
                .reduce((total, key) => total + filtros[key].length, 0)}{" "}
              Filtros Aplicados
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <p className="text-white">
              {resultados < (limite || 15) ? resultados : limite || 15} de{" "}
              {resultados} Resultados
            </p>{" "}
          </div>
          <div className="w-full lg:w-1/3 flex flex-wrap items-center justify-end max-lg:justify-center">
            <div className="w-full flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <p className="text-white">Vista</p>
                <nav aria-label="w-full">
                  <ul className="inline-flex -space-x-px text-sm p-2">
                    <li>
                      <a
                        onClick={() => handleLimitChange(15)}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-white border-l border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                      >
                        15
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleLimitChange(24)}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-white border-l border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                      >
                        24
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleLimitChange(36)}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-white border-l border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                      >
                        36
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="w-full lg:w-1/2 flex items-center text-white pl-2">
                <select
                  id="underline_select"
                  className="px-2 my-1.5 cursor-pointer block py-2.5 w-full text-md font-semibold bg-white text-black bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white peer rounded-lg"
                  value={list}
                  onChange={(e) => {
                    setList(e.target.value);
                  }}
                >
                  <option value="ASC">Ordenar | Precio: Menor a Mayor</option>
                  <option value="DESC">Ordenar | Precio: Mayor a Menor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full lg:w-1/4 lg:sticky lg:top-16 md:px-5 flex flex-wrap max-lg:bg-black max-lg:text-white ${
          menufiltro ? "" : "max-md:p-4"
        }`}
      >
        <div
          className={`w-full transition-all ease-in-out duration-500 max-lg:bg-black ${
            menufiltro
              ? "-translate-x-full lg:translate-x-0 max-lg:max-h-0 overflow-hidden"
              : "translate-x-0"
          }`}
        >
          <div className="w-full flex justify-center flex-col mt-4 lg:hidden">
            <h3 className="text-xl lg:text-2xl">ORDEN</h3>
            <hr className="w-full h-px mt-2 mb-4 max-lg:bg-gray-200 bg-gray-800 border-0" />
          </div>
          <div className="w-full flex justify-between lg:hover:bg-zinc-100 mb-4 lg:hidden">
            <select
              id="underline_select"
              className="px-2 my-1.5 cursor-pointer block py-2.5 w-full text-md font-semibold bg-white text-black bg-transparent border-0 border-b-2 border-white  focus:outline-none focus:ring-0 focus:border-white peer rounded-lg"
              value={list}
              onChange={(e) => {
                setList(e.target.value);
              }}
            >
              <option value="ASC">Ordenar | Precio: Menor a Mayor</option>
              <option value="DESC">Ordenar | Precio: Mayor a Menor</option>
            </select>
          </div>
          <Filtro
            label="PRECIO"
            options={preciosOptions}
            isRange={true}
            count={count.precios}
            selectedOptions={filtros.precios}
            handleChange={(option, event) =>
              handleCheckboxChange("precios", option, event)
            }
            formatOption={(min, max) =>
              `S/.${min.toFixed(2)} a S/.${max.toFixed(2)}`
            }
          />
          <Filtro
            label="MODELO"
            options={modelosOptions}
            isRange={false}
            count={count.modelos}
            selectedOptions={filtros.modelos}
            handleChange={(option, event) =>
              handleCheckboxChange("modelos", option, event)
            }
          />
        </div>
      </div>
      <div className="w-full lg:w-3/4 md:px-5">
        <Productos
          filtros={filtros}
          paginaActual={paginaActual}
          limite={limite}
          list={list}
          setResultados={setResultados}
        />
      </div>
      <div className="w-full flex justify-center mb-10">
        <nav aria-label="w-full">
          <ul className="inline-flex -space-x-px text-xl p-2">
            <li>
              <a
                onClick={() => handlePageChange(Math.max(1, paginaActual - 1))}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              >
                <p className="flex items-center -rotate-90 lg:hidden">▲</p>
                <p className="max-lg:hidden">Anterior</p>
              </a>
            </li>

            {Array.from({ length: totalPaginas }, (_, index) => (
              <li key={index + 1}>
                <a
                  onClick={() => handlePageChange(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer ${
                    paginaActual === index + 1
                      ? "bg-gray-300 text-gray-700"
                      : ""
                  }`}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() =>
                  handlePageChange(Math.min(totalPaginas, paginaActual + 1))
                }
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              >
                <p className="flex items-center rotate-90 lg:hidden">▲</p>
                <p className="max-lg:hidden">Siguiente</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
