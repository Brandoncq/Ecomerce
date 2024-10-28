"use client";
import Productos from "@/components/Productos";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

export default function ClientComputadoras() {
  const [menufiltro, setMenuFiltro] = useState(true);
  const [filtros, setFiltros] = useState({
    id_categoria_producto: 1,
    precios: [],
    modelos: [],
  });
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
  useEffect(() => {
    const preciosJson = searchParams.get("precios");
    const modelosJson = searchParams.get("modelos");

    if (preciosJson) {
      const preciosArray = preciosJson.split(",").map((priceRange) => {
        const [min, max] = priceRange.split("-").map(Number);
        return { min, max };
      });
      setFiltros((prevFiltros) => ({ ...prevFiltros, precios: preciosArray }));
    }

    if (modelosJson) {
      const modelosArray = modelosJson
        .split(",")
        .map((modelo) => decodeURIComponent(modelo).trim());
      setFiltros((prevFiltros) => ({ ...prevFiltros, modelos: modelosArray }));
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

  const handleCheckboxChangePrecios = (minPrecio, maxPrecio, event) => {
    if (event.target.checked) {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        precios: [...prevFiltros.precios, { min: minPrecio, max: maxPrecio }],
      }));
    } else {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        precios: prevFiltros.precios.filter(
          (rango) => !(rango.min === minPrecio && rango.max === maxPrecio)
        ),
      }));
    }
  };

  const handleCheckboxChangeModelo = (modelo, event) => {
    if (event.target.checked) {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        modelos: [...(prevFiltros.modelos || []), modelo],
      }));
    } else {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        modelos: (prevFiltros.modelos || []).filter((m) => m !== modelo),
      }));
    }
  };
  const isCheckedPrecios = (min, max) => {
    return filtros.precios.some(
      (price) => price.min === min && price.max === max
    );
  };
  const isCheckedModelo = (modelo) => {
    return filtros.modelos.includes(modelo);
  };
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full flex flex-wrap justify-center items-center bg-black max-lg:py-2 px-2 md:px-10">
        <div className="lg:hidden w-full flex justify-between items-center max-md:px-2">
          <div className="text-white flex items-center justify-center">
            <p>{"105 Resultados"}</p>
          </div>
          <div
            className="p-2 flex justify-center items-center hover:bg-slate-600 border-2 border-white"
            onClick={() => {
              setMenuFiltro(!menufiltro);
            }}
          >
            <div className="text-white flex items-center justify-center space-x-2">
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
                className="w-8 h-8 fill-white stroke-white"
              >
                <path
                  d="M440 840c-11-11-20-24-20-30s-70-10-190-10c-183 0-190-1-190-20s7-20 190-20c120 0 190-4 190-10 0-24 41-50 80-50s80 26 80 50c0 6 70 10 190 10 183 0 190 1 190 20s-7 20-190 20c-120 0-190 4-190 10 0 24-41 50-80 50-27 0-47-7-60-20zM720 560c-11-11-20-24-20-30s-117-10-330-10c-323 0-330 0-330-20s7-20 330-20c213 0 330-4 330-10 0-24 41-50 80-50s80 26 80 50c0 6 23 10 50 10 43 0 50 3 50 20s-7 20-50 20c-27 0-50 5-50 10 0 24-41 50-80 50-27 0-47-7-60-20zM220 280c-11-11-20-24-20-30s-33-10-80-10c-73 0-80-2-80-20s7-20 80-20c47 0 80-4 80-10 0-24 41-50 80-50s80 26 80 50c0 6 107 10 300 10 293 0 300 0 300 20s-7 20-300 20c-193 0-300 4-300 10 0 24-41 50-80 50-27 0-47-7-60-20z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
              </svg>
              <p>
                Odenar y Filtros{" "}
                {filtros.precios.length + filtros.modelos.length}
              </p>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden w-full flex flex-wrap items-center">
          <div className="w-full lg:w-1/3 flex max-lg:justify-center">
            <p className="text-white">
              {filtros.precios.length + filtros.modelos.length} filtros
              aplicados
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <p className="text-white">
              {limite == "" ? 15 : limite} de 34 Resultados
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
                  className="px-2 my-1.5 cursor-pointer block py-2.5 w-full text-md font-semibold bg-white text-black bg-transparent border-0 border-b-2 border-white  focus:outline-none focus:ring-0 focus:border-white peer"
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
        className={`w-full lg:w-1/4 lg:sticky lg:top-5 md:px-5 flex flex-wrap max-lg:border-b-4 max-lg:border-zinc-400 max-lg:bg-black max-lg:text-white ${
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
              className="px-2 my-1.5 cursor-pointer block py-2.5 w-full text-md font-semibold bg-white text-black bg-transparent border-0 border-b-2 border-white  focus:outline-none focus:ring-0 focus:border-white peer"
              value={list}
              onChange={(e) => {
                setList(e.target.value);
              }}
            >
              <option value="ASC">Ordenar | Precio: Menor a Mayor</option>
              <option value="DESC">Ordenar | Precio: Mayor a Menor</option>
            </select>
          </div>
          <div className="w-full flex justify-center flex-col mt-4">
            <h3 className="text-xl lg:text-2xl">PRECIO</h3>
            <hr className="w-full h-px mt-2 mb-4 max-lg:bg-gray-200 bg-gray-800 border-0" />
          </div>
          <div className="w-full flex justify-between lg:hover:bg-zinc-100 mb-4">
            <div className="flex items-center">
              <input
                id="default-checkbox_p1"
                type="checkbox"
                onChange={(e) => handleCheckboxChangePrecios(1200, 1799, e)}
                checked={isCheckedPrecios(1200, 1799)}
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="default-checkbox_p1"
                className="ms-2 text-lg font-base cursor-pointer"
              >
                S/ 1200 a 1799
              </label>
            </div>
            <p className="px-2">2</p>
          </div>
          <div className="w-full flex justify-between lg:hover:bg-zinc-100 mb-4">
            <div className="flex items-center">
              <input
                id="default-checkbox_p2"
                type="checkbox"
                onChange={(e) => {
                  handleCheckboxChangePrecios(1800, 2399, e);
                }}
                checked={isCheckedPrecios(1800, 2399)}
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="default-checkbox_p2"
                className="ms-2 text-lg font-base cursor-pointer"
              >
                S/ 1800 a 2399
              </label>
            </div>
            <p className="px-2">2</p>
          </div>
          <div className="w-full flex justify-between lg:hover:bg-zinc-100 mb-4">
            <div className="flex items-center">
              <input
                id="default-checkbox_p3"
                type="checkbox"
                onChange={(e) => {
                  handleCheckboxChangePrecios(2400, 3999, e);
                }}
                checked={isCheckedPrecios(2400, 3999)}
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="default-checkbox_p3"
                className="ms-2 text-lg font-base cursor-pointer"
              >
                S/ 2400 a 3999
              </label>
            </div>
            <p className="px-2">2</p>
          </div>
          <div className="w-full flex justify-center flex-col mt-4">
            <h3 className="text-xl lg:text-2xl">MODELO</h3>
            <hr className="w-full h-px mt-2 mb-4 max-lg:bg-gray-200 bg-gray-800 border-0" />
          </div>
          <div className="w-full flex justify-between lg:hover:bg-zinc-100 mb-4">
            <div className="flex items-center">
              <input
                id="default-checkbox_m1"
                type="checkbox"
                onChange={(e) => {
                  handleCheckboxChangeModelo("F17", e);
                }}
                checked={isCheckedModelo("F17")}
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="default-checkbox_m1"
                className="ms-2 text-lg font-base cursor-pointer"
              >
                F17
              </label>
            </div>
            <p className="px-2">2</p>
          </div>
          <div className="w-full flex justify-between lg:hover:bg-zinc-100 mb-4">
            <div className="flex items-center">
              <input
                id="default-checkbox_m2"
                type="checkbox"
                onChange={(e) => {
                  handleCheckboxChangeModelo("G16 (2024)", e);
                }}
                checked={isCheckedModelo("G16 (2024)")}
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="default-checkbox_m2"
                className="ms-2 text-lg font-base cursor-pointer"
              >
                G16 (2024)
              </label>
            </div>
            <p className="px-2">2</p>
          </div>
          <div className="w-full flex justify-between lg:hover:bg-zinc-100 mb-4">
            <div className="flex items-center">
              <input
                id="default-checkbox_m3"
                type="checkbox"
                onChange={(e) => {
                  handleCheckboxChangeModelo("16-r0073cl", e);
                }}
                checked={isCheckedModelo("16-r0073cl")}
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="default-checkbox_m3"
                className="ms-2 text-lg font-base cursor-pointer"
              >
                16-r0073cl
              </label>
            </div>
            <p className="px-2">2</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/4 md:px-5">
        <Productos
          filtros={filtros}
          paginaActual={paginaActual}
          limite={limite}
          list={list}
        />
      </div>
      <div className="w-full flex justify-center mb-10">
        <nav aria-label="w-full">
          <ul className="inline-flex -space-x-px text-xl p-2">
            <li>
              <a
                onClick={() => handlePageChange(paginaActual - 1)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              >
                Anterior
              </a>
            </li>
            <li>
              <a
                onClick={() => handlePageChange(1)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              >
                1
              </a>
            </li>
            <li>
              <a
                onClick={() => handlePageChange(2)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              >
                2
              </a>
            </li>
            <li>
              <a
                onClick={() => handlePageChange(3)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              >
                3
              </a>
            </li>
            <li>
              <a
                onClick={() => handlePageChange(4)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              >
                4
              </a>
            </li>
            <li>
              <a
                onClick={() => handlePageChange(5)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              >
                5
              </a>
            </li>
            <li>
              <a
                onClick={() => handlePageChange(paginaActual + 1)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              >
                Siguiente
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
