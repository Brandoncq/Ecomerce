"use client";
import Link from "next/link";
import CarouselModal from "@/components/Modal";
const monitorSlides = [
  "https://kaas.hpcloud.hp.com/PROD/v2/renderbinary/11159209/7534719/comcon-nonos-poly-p-find-serial-numbers/realpresence-centro-monitor-serial-number-rear-unit",
  "https://uk.answers.acer.com/rnt/rnw/img/enduser/snid_monitor.jpg",
  "https://image.benq.com/is/image/benqco/2.lcd-800?$ResponsivePreset$",
];

const laptopSlides = [
  "https://cdn.windowsreport.com/wp-content/uploads/sites/5/2024/01/Diseno-sin-titulo-8.jpg",
  "https://i.redd.it/kwli8vuusumb1.jpeg",
  "https://cdn.wallapop.com/images/10420/hn/5c/__/c10420p1066806072/i5224915984.jpg?pictureSize=W320",
];

const perifericoSlides = [
  "https://pbs.twimg.com/media/FX3OPfjWYAAfRij.jpg:large",
  "https://http2.mlstatic.com/D_NQ_NP_636572-MLA43825396455_102020-O.webp",
  "https://m.media-amazon.com/images/I/71pFHsjiJ-L._AC_UF350,350_QL80_.jpg",
];
const impresoraSlides = [
  "https://cdn.wallapop.com/images/10420/hm/k7/__/c10420p1065819850/i5217767858.jpg?pictureSize=W640",
  "https://s7d1.scene7.com/is/image/canon/13744_image_1?scl=1",
  "https://www.123tinta.es/images/HP304(1).jpg",
];

import { useState, useEffect, useRef } from "react";
function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO);
  return fecha.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }); // Formato DD/MM/YYYY
}
export default function SoporteClient() {
  const [serie, setSerie] = useState("");
  const [login, setLogin] = useState(false);
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const identificacionProductoRef = useRef(null);
  const [currentSlides, setCurrentSlides] = useState([]);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const openCarousel = (slides) => {
    setCurrentSlides(slides); // Establece las imágenes actuales
    setIsCarouselOpen(true); // Abre el modal
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
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
          setLogin(true);
        } else {
          setLogin(false);
        }
      } else {
        setLogin(false);
      }
    } catch (error) {
      console.error("Error fetching auth status:", error);
      setLogin(false);
    }
  };
  useEffect(() => {
    evaluar();
  }, []);
  const buscar = async (event) => {
    event.preventDefault();
    setError(null);
    setProducto(null);

    try {
      const response = await fetch(`/api/buscador/serie?query=${serie}`);
      if (!response.ok) {
        throw new Error(
          "No se encontró el producto o hubo un error en la búsqueda."
        );
      }
      const data = await response.json();
      setProducto(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const scrollToIdentificacion = () => {
    const isDesktop = window.innerWidth >= 768; // Ajusta el valor según tu breakpoint para escritorio
    const offset = isDesktop ? -70 : 0; // Desplazamiento solo en escritorio

    if (identificacionProductoRef.current) {
      const topPosition =
        identificacionProductoRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };
  return (
    <div className="w-full flex flex-col border-t-4 boerder-zinc-200">
      <section className="w-full flex">
        <div className="w-full flex justify-center items-center mt-10">
          <h2 className="text-black text-4xl font-bold text-center">
            Centro de Soporte al Cliente
          </h2>
        </div>
      </section>
      <section className="w-full flex border-b-2 border-zinc-300">
        <div className="w-full flex flex-wrap justify-center items-center px-2 md:px-10 mb-10">
          <div className="w-full flex justify-center items-center">
            <h2 className="my-10 text-xl">¿Cómo podemos ayudarlo?</h2>
          </div>
          <div className="w-full flex flex-wrap justify-center items-stretch">
            <button
              className="w-full md:w-1/4 p-4 flex"
              onClick={scrollToIdentificacion}
            >
              <div className="w-full h-full border border-zinc-500 group cursor-pointer flex flex-col">
                <div className="w-full h-full transition-all ease-in-out duration-300 group-hover:bg-zinc-100 flex items-center p-4 border-b border-zinc-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    id="Layer_1"
                    width="800"
                    height="800"
                    fill="#000"
                    version="1.1"
                    viewBox="0 0 512 512"
                    className="w-16 h-16 md:mt-6 lg:mt-9 mb-3"
                  >
                    <path d="M501.333.762H13.714C6.976.762 0 4.696 0 11.429v341.333c0 6.732 6.976 13.714 13.714 13.714h487.619c6.738 0 10.667-6.982 10.667-13.714V11.429C512 4.696 508.071.762 501.333.762m-13.714 341.333H24.381V25.143h463.238z"></path>
                    <path d="M446.655 98.5c-5.786-3.476-13.262-1.595-16.726 4.179l-29.393 48.994-50.06-40.048c-4.619-3.685-11.214-3.536-15.643.345l-91.369 79.941L177.643 159a12.18 12.18 0 0 0-12.941 1.28L54.988 245.613c-5.31 4.137-6.274 11.798-2.131 17.107 2.405 3.089 6 4.708 9.631 4.708 2.607 0 5.25-.839 7.476-2.565l103.643-80.619 66.274 33.137a12.18 12.18 0 0 0 13.476-1.732l89.845-78.613 52.988 42.387a12.27 12.27 0 0 0 9.774 2.482 12.2 12.2 0 0 0 8.298-5.726l36.571-60.952c3.465-5.775 1.596-13.263-4.178-16.727M351.476 490.429l-85.333-85.333c-4.762-4.762-12.476-4.762-17.238 0l-85.333 85.333c-4.762 4.762-4.762 12.476 0 17.238s12.476 4.762 17.238 0l76.714-76.714 76.714 76.714a12.15 12.15 0 0 0 8.619 3.572c3.119 0 6.238-1.19 8.619-3.572 4.762-4.762 4.762-12.476 0-17.238"></path>
                  </svg>
                </div>
                <div></div>
                <div className="w-full h-full bg-zinc-800 text-white group-hover:text-black group-hover:bg-zinc-200 p-4 transition-all ease-in-out duration-300">
                  Ver detalles de los productos adquiridos
                </div>
              </div>
            </button>
            <button
              className="w-full md:w-1/4 p-4 flex"
              onClick={scrollToIdentificacion}
            >
              <div className="w-full h-full border border-zinc-500 group cursor-pointer flex flex-col">
                <div className="w-full h-full group-hover:bg-zinc-100 flex items-center p-4 border-b border-zinc-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="133.333"
                    height="133.333"
                    version="1"
                    viewBox="0 0 100 100"
                    className="w-16 h-16 md:mt-6 lg:mt-9 mb-3"
                  >
                    <path d="M36.3 4.8c-1.3 1.4-4.5 3.3-7.1 4.1-4.3 1.5-4.8 2-6.3 6.3-.8 2.6-2.7 5.8-4.1 7.1-2.4 2.2-2.5 2.8-2.5 13.7 0 11 .1 11.4 2.7 13.9 1.4 1.4 3.2 4.5 3.9 6.9s1.9 4.6 2.7 4.9c2.1.8 1.8 2.2-3.1 12.7C16.3 87.9 16.3 88 25.3 88l7.2.1 3.9 5c5.2 6.8 7.1 6.4 10.5-1.8 1.4-3.5 2.9-6.3 3.2-6.3s1.7 2.8 3.1 6.3c3.4 8.1 5.2 8.4 10.8 1.8l4.2-5.1H75c3.8 0 7.1-.4 7.5-.9.3-.5-1.7-5.9-4.5-11.9-5.5-11.9-5.7-12.7-3.6-13.5.8-.3 2-2.5 2.7-4.9s2.5-5.5 3.9-6.9c2.6-2.5 2.7-2.9 2.7-13.9 0-10.9-.1-11.5-2.5-13.7-1.4-1.3-3.3-4.5-4.1-7.1-1.5-4.3-2-4.8-6.3-6.3-2.6-.8-5.8-2.7-7.1-4.1-2.2-2.4-2.8-2.5-13.7-2.5s-11.5.1-13.7 2.5m25.2 5.5c1.5 1.5 3.8 2.7 5.1 2.7 3.1 0 6.4 3.3 6.4 6.4 0 1.3 1.4 3.7 3.2 5.5 3 3 3.2 3.3 2.1 7.1-.7 2.8-.7 5.2 0 8 1.1 3.8.9 4.1-2.1 7.1-1.8 1.8-3.2 4.2-3.2 5.5 0 3.1-3.3 6.4-6.4 6.4-1.3 0-3.6 1.2-5.1 2.7-2.5 2.6-3.3 2.8-11.5 2.8-8.5.1-9 0-11.5-2.7-1.5-1.6-3.7-2.8-5.1-2.8-3.1 0-6.4-3.3-6.4-6.4 0-1.3-1.4-3.7-3.2-5.5-3-3-3.2-3.3-2.1-7.1.7-2.8.7-5.2 0-8-1.1-3.8-.9-4.1 2.1-7.1 1.8-1.8 3.2-4.2 3.2-5.5 0-3.1 3.3-6.4 6.4-6.4 1.4 0 3.6-1.2 5.1-2.8 2.5-2.7 3-2.8 11.5-2.7 8.2 0 9 .2 11.5 2.8M45 69.7l5.9-.7-1.4 3.3c-.8 1.7-2.9 6.7-4.8 11l-3.4 7.8-2.7-3.6c-2.6-3.3-3-3.5-8.7-3.5H24l1.4-3.3c.8-1.7 2.8-6.3 4.6-10.1l3.1-6.9 3 3.3c2.9 3.2 3.2 3.3 8.9 2.7m26.5 3.9c2.5 5.3 4.5 9.8 4.5 10s-2.7.4-5.9.4c-5.5 0-6.1.2-8.1 3-1.2 1.7-2.5 3-2.9 3s-2-2.9-3.5-6.4c-2.7-6.2-2.7-6.4-1-10 1.3-2.7 2.4-3.6 4.2-3.6 1.4 0 3.5-1.2 5-3 1.5-1.7 2.8-3 3-3 .1 0 2.3 4.3 4.7 9.6"></path>
                    <path d="M58.6 30.2c-2.9 4.6-6.5 10.2-8 12.6l-2.7 4.3-6-5.5c-3.3-3.1-6.4-5.6-6.8-5.6-.5 0-1.5.7-2.2 1.6-1.1 1.4-.2 2.6 7.1 9.4 4.7 4.3 8.8 7.6 9.2 7.4 1.1-.7 18.8-29 18.8-30.1 0-.9-2.2-2.3-3.6-2.3-.2 0-2.8 3.7-5.8 8.2"></path>
                  </svg>
                </div>
                <div></div>
                <div className="w-full h-full bg-zinc-800 text-white group-hover:text-black group-hover:bg-zinc-200 p-4 transition-all ease-in-out duration-300">
                  Comprueba el Estado de la Garantía
                </div>
              </div>
            </button>
            <button
              className="w-full md:w-1/4 p-4 flex"
              onClick={() => {
                window.location.href = "mailto:cfchavezc@unjbg.edu.pe";
              }}
            >
              <div className="w-full h-full border border-zinc-500 group cursor-pointer flex flex-col">
                <div className="w-full h-full group-hover:bg-zinc-100 flex items-center p-4 border-b border-zinc-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="133.333"
                    height="133.333"
                    version="1"
                    viewBox="0 0 100 100"
                    className="w-16 h-16 md:mt-6 lg:mt-9 mb-3"
                  >
                    <path d="M38.5 5.4c-9.1 2.9-15.8 8.5-19.6 16.5-1.8 3.7-2.4 6.8-2.7 15.6-.2 6-.8 11.4-1.3 11.9-1.8 1.9-1 10.2 1.2 13 1.1 1.4 2.6 2.6 3.2 2.6.7 0 3.1 4.1 5.5 9.1 4.7 9.9 11.6 18.3 16.9 20.5 3.8 1.6 12 1.8 15.7.4C60.2 94 69 86.3 69 84.9c0-.5-1.6-.9-3.5-.9s-3.5.4-3.5.9C62 87 54.3 91 50.1 91c-5.4 0-9-1.9-13.5-7.1C33.3 80 25 64.5 25 62.1c0-.6-1.1-1.3-2.5-1.7-1.5-.4-2.8-1.6-3.1-3.1-.8-3.1-.1-3.7 2.4-2.4 1.2.6 3 1.1 4.1 1.1 1.9 0 2.1-.6 2.1-8 0-7.7.1-8 2.3-8 4.8 0 18.3-4.1 22.9-6.9l4.6-2.9 1.9 2c1 1.1 4.2 3.4 7.1 5l5.2 3v16l3-.4c2.6-.4 3-.1 3 1.8 0 1.3-.6 2.7-1.4 3.1-1.1.6-7.6 13.4-7.6 14.9 0 .2.8.4 1.8.5 2.8.2-2.9 1.7-6.8 1.8-2.5.1-3.9-.5-4.8-1.9-1-1.6-2.3-2-7-2-6.7 0-8.2 1.1-8.2 6s1.5 6 8.2 6c4.7 0 6-.4 7-2 1.1-1.7 2.4-2 7.8-2 10.3 0 17-5.6 17-14.3 0-2.9.4-3.7 1.8-3.7 3.3 0 4.2-2.2 4.2-10s-.9-10-4.2-10c-1.6 0-1.8-.9-1.8-7.5 0-13.2-4.9-21.9-15-26.4C66.5 9 62.9 8 60.9 8c-2.3 0-4.2-.7-5.4-2-2.1-2.4-10.5-2.7-17-.6m14.7 5.3c1 .9 4.3 2 7.4 2.4 7.7 1 12.6 4.5 15.8 11.1 2.8 5.9 4.7 19.8 2.7 19.8-.6 0-1.1 1.1-1.1 2.4 0 1.4-.4 2.8-1 3.1-.6.4-1-2-1-6.4v-6.9l-4.7-2.3c-2.5-1.2-6.3-4-8.3-6.1-2.1-2.1-4.2-3.8-4.8-3.8-.5 0-3.3 1.6-6.2 3.5-5.3 3.5-12.4 6.1-19.5 7.1-9 1.2-8.5.7-8.5 8.5 0 6.8 0 6.9-2.1 5.8s-2.1-1.6-1.6-10.1c1-14.8 6.5-23.3 18.2-27.8 6.3-2.4 12.2-2.5 14.7-.3"></path>
                  </svg>
                </div>
                <div></div>
                <div className="w-full h-full bg-zinc-800 text-white group-hover:text-black group-hover:bg-zinc-200 p-4 transition-all ease-in-out duration-300">
                  Contacte un agente de BranviaTech soporte
                </div>
              </div>
            </button>
            <div className="w-full md:w-1/4 p-4 text-base flex flex-col px-6">
              <h3 className="font-semibold">Más recursos de soporte</h3>
              <Link
                href="/TerminosCondiciones"
                className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-1"
              >
                Ver términos y condiciones
              </Link>
              <Link
                href={login ? "/Dashboard" : "/IniciarSesion"}
                className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-1"
              >
                {login
                  ? "Visualizar mi historial de compras"
                  : "Identifíquese para rastrear sus envíos"}
              </Link>
              <Link
                href="PoliticasPrivacidad"
                className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-1"
              >
                Políticas de privacidad
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-ful flex flex-col my-10"
        ref={identificacionProductoRef}
      >
        <div className="w-full flex justify-center px-2 md:px-10">
          <h2 className="text-black text-4xl font-light my-6 lg:px-20 p-4">
            Identifique su producto para obtener detalles e información
            relevante
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center px-2 md:px-10 mb-5">
          <div className="w-full md:w-1/2 p-4 flex flex-col lg:px-20">
            <h3>
              Introduzca su número de serie, número de producto o nombre del
              producto
            </h3>
            <div className="w-full mt-6 mb-4">
              <form className="flex items-center w-full" onSubmit={buscar}>
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      id="KEY"
                      width="40"
                      height="40"
                      version="1.1"
                      viewBox="0 0 1800 1800"
                      className="w-5 h-5"
                    >
                      <path
                        fill="#333"
                        d="M246.051 1796.104c-2.663 0-5.348-.336-7.992-1.025l-166.817-43.505a31.68 31.68 0 0 1-22.656-22.654L5.044 1562.08a31.67 31.67 0 0 1 8.251-30.397l101.307-101.312c.476-.544.968-1.069 1.481-1.587l668.3-668.298c-43.625-93.255-59.486-199.569-44.681-301.964 16.48-114 68.356-217.425 150.023-299.096C990.027 59.131 1123.381 3.896 1265.223 3.896c141.839 0 275.184 55.23 375.479 155.521 207.043 207.047 207.043 543.934 0 750.977-100.277 100.277-233.622 155.512-375.456 155.517-77.911.005-155.419-17.284-225.608-50.161l-198.6 198.589a31.67 31.67 0 0 1-19.45 9.14l-96.017 8.972-8.967 96.021a31.7 31.7 0 0 1-9.14 19.454l-.805.805a31.7 31.7 0 0 1-19.454 9.14l-96.02 8.967-8.965 96.018a31.7 31.7 0 0 1-9.184 19.498l-1.237 1.233a31.68 31.68 0 0 1-19.413 9.1l-95.584 8.927-8.925 95.58a31.7 31.7 0 0 1-9.144 19.459l-67.392 67.384a32 32 0 0 1-1.604 1.498l-101.283 101.289a31.68 31.68 0 0 1-22.403 9.28m-140.853-101.153 131.287 34.242 90.004-90.012a32 32 0 0 1 1.598-1.494l57.77-57.762 10.304-110.354c1.417-15.167 13.429-27.18 28.596-28.598l96.718-9.034 9.069-97.144c1.416-15.168 13.429-27.18 28.596-28.599l96.753-9.038 9.038-96.755c1.419-15.163 13.427-27.176 28.594-28.594l110.792-10.351 206.612-206.602c9.797-9.802 24.846-12.091 37.114-5.652 66.53 34.905 141.635 53.353 217.198 53.348 124.917-.005 242.346-48.646 330.656-136.959 182.347-182.343 182.347-479.03 0-661.377-88.318-88.323-205.758-136.964-330.674-136.964-124.92 0-242.363 48.645-330.699 136.977-145.557 145.561-179.159 365.73-83.606 547.861 6.444 12.277 4.154 27.312-5.648 37.119l-682.855 682.847a32 32 0 0 1-1.479 1.586l-90.005 90.003z"
                      ></path>
                      <path
                        fill="#333"
                        d="M1273.541 713.839c-48.809 0-94.691-19.008-129.203-53.524-71.242-71.242-71.246-187.168-.01-258.411 34.512-34.512 80.395-53.52 129.203-53.52s94.701 19.008 129.217 53.52c34.516 34.516 53.523 80.403 53.523 129.208 0 48.809-19.008 94.696-53.523 129.208-34.512 34.511-80.398 53.519-129.207 53.519m-.01-302.097c-31.881 0-61.854 12.414-84.398 34.958-46.541 46.541-46.537 122.273.01 168.814 22.543 22.548 52.516 34.967 84.398 34.967 31.887 0 61.863-12.418 84.407-34.967 22.548-22.543 34.966-52.517 34.966-84.403 0-31.882-12.418-61.859-34.966-84.403-22.548-22.547-52.53-34.966-84.417-34.966"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 outline-none"
                    placeholder="Search branch name..."
                    required
                    value={serie}
                    onChange={(e) => {
                      setSerie(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <svg
                    className="w-4 h-4"
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
                  <span className="sr-only">Search</span>
                </button>
              </form>
              {error && <p className="text-red-500 mt-4">{error}</p>}
              {producto && (
                <div className="w-full flex flex-col mt-4 p-4 border">
                  <h3 className="text-lg font-bold mb-2">
                    Información del Producto
                  </h3>
                  <p>
                    <strong>Serie:</strong> {producto.serie}
                  </p>
                  <p>
                    <strong>Fecha de Registro:</strong>{" "}
                    {formatearFecha(producto.fecha_registro)}
                  </p>
                  <p>
                    <strong>Nombre:</strong> {producto.nombre}
                  </p>
                  <p>
                    <strong>Modelo:</strong> {producto.modelo}
                  </p>
                  <p>
                    <strong>Marca:</strong> {producto.marca}
                  </p>
                  <p>
                    <strong>Color:</strong> {producto.color}
                  </p>
                  <p>
                    <strong>Precio:</strong> ${producto.precio}
                  </p>
                  {producto.fecha_garantia && (
                    <p>
                      <strong>Fecha Garantía:</strong>{" "}
                      {formatearFecha(producto.fecha_garantia)}
                    </p>
                  )}
                  <p>
                    <strong>Descripción:</strong> {producto.descripcion}
                  </p>
                  {producto.imagen ? (
                    <div className="w-full flex justify-center mt-2">
                      <img
                        src={producto.imagen}
                        alt={`Imagen de ${producto.nombre}`}
                        className="w-full md:w-2/3 lg:w-1/2 object-cover h-auto"
                      />
                    </div>
                  ) : (
                    <p>No hay imagen disponible.</p>
                  )}
                </div>
              )}
            </div>
            <div className="w-full flex flex-col">
              <Link
                href={login ? "/Dashboard" : "/IniciarSesion"}
                className="flex items-center text-blue-500 hover:text-blue-700 underline underline-offset-2 my-3 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  version="1"
                  viewBox="0 0 96 96"
                  className="w-10 h-10 p-1 fill-blue-500 group-hover:fill-blue-700"
                >
                  <g>
                    <path
                      d="M373 854c-62-37-93-95-93-174 0-123 77-200 200-200s200 77 200 200-77 200-201 200c-51 0-73-5-106-26zm198-83c35-35 39-44 39-91s-4-56-39-91-44-39-91-39-56 4-91 39-39 44-39 91 4 56 39 91 44 39 91 39 56-4 91-39zM180 380c-16-16-20-33-20-80 0-93 38-147 135-192 44-20 65-23 185-23s141 3 185 23c98 45 152 127 140 210s-7 82-325 82c-267 0-281-1-300-20zm549-54c19-22-4-90-40-120-89-75-329-75-418 0-36 30-59 98-40 120 17 21 481 21 498 0z"
                      transform="matrix(.1 0 0 -.1 0 96)"
                    />
                  </g>
                </svg>
                {login
                  ? "Busca en tu panel para seleccionar un producto guardado"
                  : "Identifíquese para seleccionar un producto ya guardado"}
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col lg:px-20">
            <p>
              Seleccione un tipo de producto para consejos sobre cómo encontrar
              su número de serie:
            </p>
            <div className="w-full flex flex-col my-5">
              <div className="w-full flex">
                <button
                  className="flex items-center text-blue-500 hover:text-blue-700 underline underline-offset-2 my-1 group"
                  onClick={() => openCarousel(impresoraSlides)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="b"
                    width="800"
                    height="800"
                    viewBox="0 0 48 48"
                    className="w-10 h-10 p-1 fill-blue-500 group-hover:fill-blue-700"
                  >
                    <path
                      d="M34.637 28.854h3.143c2.73.14 4.842 2.69 4.715 5.694-.12 2.809-2.162 5.056-4.714 5.187l-4.484-.009c-2.722.006-4.932-2.417-4.937-5.411v-.02"
                      className="fill-none stroke-blue-500 group-hover:stroke-blue-700"
                    ></path>
                    <path
                      d="M26.558 39.735h-3.143c-2.73-.14-4.841-2.689-4.714-5.694.119-2.808 2.161-5.056 4.714-5.187l4.484.009c2.721-.005 4.931 2.417 4.936 5.412v.02"
                      className="fill-none stroke-blue-500 group-hover:stroke-blue-700"
                    ></path>
                    <path
                      d="M19.133 39.758H5.5V21.115h35.511v7.506"
                      className="fill-none stroke-blue-500"
                    ></path>
                    <path
                      d="M18.082 30.437h-6.836v9.32M28.075 13.886V8.242H11.97v12.873h22.574v-7.23zM28.075 8.242l6.468 5.644M24.967 13.886h-9.385M30.801 17.183H15.582"
                      className="fill-none stroke-blue-500 group-hover:stroke-blue-700"
                    ></path>
                    <circle
                      cx="37.333"
                      cy="24.983"
                      r="0.75"
                      className="fill-blue-500 group-hover:fill-blue-700"
                    ></circle>
                  </svg>
                  <p>Impresoras</p>
                </button>
              </div>
              <div className="w-full flex">
                <button
                  className="flex items-center text-blue-500 hover:text-blue-700 underline underline-offset-2 my-1 group"
                  onClick={() => openCarousel(laptopSlides)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="682.667"
                    height="682.667"
                    version="1"
                    viewBox="0 0 512 512"
                    className="w-10 h-10 p-1 fill-blue-500 group-hover:fill-blue-700"
                  >
                    <path d="M62.2 34.3c-4.9 1.5-12.2 8.5-14.8 14.2l-2.4 5v121.1c0 87.9.3 122 1.1 124.5.7 1.9 2.2 4.8 3.5 6.5l2.3 3.1-2.4 2.3c-1.3 1.2-3.5 4.5-4.9 7.4-1.4 2.8-10.9 32-21.1 65-17.6 57-18.5 60.2-18.5 68 0 6.8.4 9.1 2.6 13.4 2.8 5.7 6.9 9.6 12.9 12.3 3.8 1.8 13.6 1.9 235.6 1.9h231.5l5.2-2.6c9.8-4.9 14.1-12.6 14.2-25.1 0-7.8-.8-10.8-18.5-68-10.2-32.9-19.4-61.7-20.5-63.9-1-2.3-3.2-5.7-4.9-7.7-2.6-2.9-2.9-3.7-1.7-4.6.8-.6 2.3-3.4 3.5-6.1l2.1-4.9-.2-122.3-.3-122.3-2.2-4.1c-2.9-5.4-10.1-11.7-15.1-13.2-5.3-1.6-382-1.5-387 .1m384.6 13.3c1.5.9 3.6 2.8 4.7 4.2 2 2.7 2 4.5 2.3 122.2.2 114.3.1 119.6-1.6 122.9-1 1.9-3.4 4.3-5.3 5.3-3.2 1.7-11.2 1.8-190.9 1.8s-187.7-.1-190.9-1.8c-1.9-1-4.3-3.4-5.3-5.3-1.7-3.3-1.8-8.6-1.6-122.9.3-117.7.3-119.5 2.3-122.2 4.7-6.2-11.4-5.7 195.3-5.8 170.2 0 188.6.2 191 1.6m2.5 270.8c1.8.7 4 2.2 5 3.3 1.2 1.4 37.7 115.4 37.7 117.9 0 .2-36.4.4-80.9.4h-80.9l-4.7-14c-3.1-9.2-5.3-14.4-6.5-15-2.5-1.4-123.5-1.4-126 0-1.2.6-3.4 5.8-6.5 15l-4.7 14h-81c-76.6 0-80.9-.1-80.4-1.8 16.9-55.4 36-115 37.3-116.5 4.3-4.8-4.4-4.6 198.1-4.7 158.4 0 190.8.2 193.5 1.4M312.9 430.2c1.3 4 2.6 7.9 2.8 8.5.4 1-11.9 1.3-59.7 1.3s-60.1-.3-59.7-1.3c.2-.6 1.5-4.5 2.8-8.5l2.3-7.2h109.2zM494 454.5c0 2.9-3.1 7.6-6.3 9.5-3.1 2-6.8 2-231.7 2s-228.6 0-231.7-2c-3.2-1.9-6.3-6.6-6.3-9.5 0-1.3 23.7-1.5 238-1.5s238 .2 238 1.5"></path>
                    <path d="M89.5 56.9c-7.2 1.8-13.2 6.8-15.9 13.3-1.4 3.3-1.6 15.7-1.6 105 0 96.5.1 101.5 1.9 105.3 1 2.2 3.1 5.2 4.7 6.7 5.4 5 8.9 5.8 26.3 5.8 15.4 0 16-.1 17.5-2.2 2.2-3.2 2-5.5-.9-8.3-2.3-2.4-2.9-2.5-16.5-2.5H90.8l-2.9-2.9-2.9-2.9V76l2.9-3.2 2.9-3.3h330.4l2.9 3.3L427 76v198.2l-2.9 2.9-2.9 2.9H288.1c-131.8 0-133.1 0-135.1 2-2.4 2.4-2.6 7.2-.4 9.4 1.4 1.4 15.1 1.6 136 1.6 119.3 0 134.9-.2 138.2-1.6 4.9-2 9-6 11.3-10.9 1.8-3.8 1.9-8.8 1.9-105.3 0-82.7-.2-101.9-1.3-104.5-2-4.7-6.4-9.5-11.1-12l-4.1-2.2-165.5-.2c-91 0-166.8.2-168.5.6"></path>
                    <path d="M152.7 145.8c-2.6 2.8-2.2 7.8.7 9.7 2 1.4 6.7 1.5 34.6 1.3 30.5-.3 32.2-.4 33.6-2.2 1.9-2.7 1.8-7-.4-8.9-1.7-1.5-5.5-1.7-34.4-1.7-30.2 0-32.6.1-34.1 1.8M153.2 184.6c-2.8 1.9-3 7.4-.4 9.7 1.7 1.6 10.3 1.7 103.4 1.7 97.1 0 101.6-.1 103.1-1.8 2.5-2.7 2.2-7.8-.5-9.6-2-1.4-13.4-1.6-102.8-1.6s-100.8.2-102.8 1.6M152.7 224.8c-2.5 2.7-2.2 7.8.5 9.6 2 1.4 13.4 1.6 102.8 1.6 111.6 0 105 .4 105-6.4 0-7.1 7.7-6.6-105.2-6.6-97.1 0-101.6.1-103.1 1.8M77.7 328.8C76 330.6 62 389 62 394.2c0 6.2-11 5.8 161.1 5.8 150.4 0 156.7-.1 158.2-1.8 2.2-2.5 2.1-7.5-.1-9.5-1.7-1.6-13.8-1.7-153-1.7-83.2 0-151.2-.3-151.2-.8 0-.4 2.3-10.9 5.1-23.5l5.2-22.7h337.4l5.2 22.7c2.8 12.6 5.1 23.1 5.1 23.5 0 .5-4.7.8-10.3.8-11.6 0-13.7 1-13.7 6.7s1.9 6.3 19.1 6.3 19.9-.8 19.9-5.8c0-5.2-14-63.6-15.7-65.4-1.5-1.7-9.1-1.8-178.3-1.8s-176.8.1-178.3 1.8"></path>
                  </svg>
                  <p>Laptops</p>
                </button>
              </div>
              <div className="w-full flex">
                <button
                  className="flex items-center text-blue-500 hover:text-blue-700 underline underline-offset-2 my-1 group"
                  onClick={() => openCarousel(perifericoSlides)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    id="Layer_1"
                    width="800"
                    height="800"
                    version="1.1"
                    viewBox="0 0 18 32"
                    className="w-10 h-10 p-1 fill-blue-500 group-hover:fill-blue-700"
                  >
                    <g className="fill-back">
                      <path d="M9.628 3.5c0-.976.311-1.693.876-2.021.466-.271 1.057-.241 1.617.078.931.531 2.013 1.03 2.975.713.628-.207 1.114-.719 1.489-1.567a.5.5 0 0 0-.914-.405c-.254.575-.545.909-.888 1.022-.468.152-1.134-.042-2.166-.631-.866-.494-1.843-.523-2.616-.075-.886.514-1.373 1.539-1.373 2.886a.5.5 0 0 0 1 0M9 16.927c1.103 0 2-.897 2-2v-3c0-1.103-.897-2-2-2s-2 .897-2 2v3c0 1.103.897 2 2 2m-1-5a1.001 1.001 0 0 1 2 0v3a1.001 1.001 0 0 1-2 0z"></path>
                      <path d="M0 14v9c0 4.962 4.037 9 9 9s9-4.038 9-9v-9c0-4.962-4.037-9-9-9s-9 4.038-9 9m9-8c4.411 0 8 3.589 8 8v9c0 4.411-3.589 8-8 8s-8-3.589-8-8v-9c0-4.411 3.589-8 8-8"></path>
                    </g>
                  </svg>{" "}
                  <p>Perifericos</p>
                </button>
              </div>{" "}
              <div className="w-full flex">
                <button
                  className="flex items-center text-blue-500 hover:text-blue-700 underline underline-offset-2 my-1 group"
                  onClick={() => openCarousel(monitorSlides)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800"
                    height="800"
                    viewBox="0 0 471 471"
                    className="w-10 h-10 p-1 fill-blue-500 group-hover:fill-blue-700"
                  >
                    <path d="M443.5 86.676h-416a5 5 0 0 0-5 5v253.493a5 5 0 0 0 5 5h416a5 5 0 0 0 5-5V91.676a5 5 0 0 0-5-5m-5 253.493h-406V96.676h406z"></path>
                    <path d="M449.055 64.176H21.946C9.845 64.176 0 74.021 0 86.121v264.602c0 12.101 9.845 21.945 21.946 21.945h148.343l-7.91 19.156h-31.772a7.5 7.5 0 0 0 0 15h209.79c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-31.772l-7.911-19.156h148.343c12.101 0 21.945-9.845 21.945-21.945V86.121c-.002-12.1-9.846-21.945-21.947-21.945M292.394 391.825H178.606l7.911-19.156h97.967zM456 350.724a6.95 6.95 0 0 1-6.945 6.945H21.946c-3.83 0-6.946-3.116-6.946-6.945V86.121a6.954 6.954 0 0 1 6.946-6.946h427.109A6.953 6.953 0 0 1 456 86.121z"></path>
                  </svg>
                  <p>Monitores</p>
                </button>{" "}
                {isCarouselOpen && (
                  <CarouselModal
                    slides={currentSlides}
                    onClose={closeCarousel}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
