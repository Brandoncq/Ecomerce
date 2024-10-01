import Carousel from "@/components/Carrusel";
import Link from "next/link";
export const metadata = {
  title: "Tablets Compu-Fenix",
  description: "Compra los Productos o Equipos de Computo en un solo lugar.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1528914137830-c85ee162f588?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "MONITORES",
    frase: "La mejor tecnología a tu alcance",
    text: "Descubre la nueva generación de monitores con calidad superior.",
    url: "/Comprar/Monitores",
    button: "Comprar",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1626379961798-54f819ee896a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "ACCESORIOS",
    frase: "Los accesorios más cómodos",
    text: "Complementos diseñados para profesionales.",
    url: "/Comprar/Accesorios",
    button: "Comprar",
  },
  {
    id: 3,
    image:
      "https://www.notebookcheck.org/fileadmin/Notebooks/Asus/ROG_Strix_G16_G614JZ/Asus_ROG_Strix_14.jpg",
    titulo: "ASUS ROG Strix G16",
    frase: "La gama de computadoras mas alta",
    text: "Tecnología de última generación al alcance de tus manos.",
    url: "/Buscar/ASUS%20ROG%20Strix%20G16%20(2024)",
    button: "Comprar",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "LAPTOPS",
    frase: "El poder en tus manos para usted",
    text: "Rendimiento excepcional para tareas exigentes y productividad",
    url: "/Comprar/Laptops",
    button: "Comprar",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1533310266094-8898a03807dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Lenovo IdeaPad",
    frase: "A tu comidad y donde estes dispuesto",
    text: "Perfectos para el trabajo y el entretenimiento.",
    url: "/Buscar/Lenovo%20IdeaPad%201",
    button: "Comprar",
  },
];
export default function Comprar() {
  return (
    <>
      <div className="w-full flex flex-col h-lvh">
        <div className="w-full h-full md:h-[90%]">
          <Carousel slides={slides} />
        </div>
        <div className="w-full md:h-[10%] mt-8">
          <h2 className="text-3xl md:text-5xl px-4 md:px-10 font-bold">
            Comprar Productos
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center px-4 md:px-10 mb-5 md:mb-10">
        <div className="w-1/3 md:w-[14.25%] px-2 md:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Computadoras"
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="133.333"
                height="133.333"
                version="1"
                viewBox="0 0 100 100"
                className="md:w-2/3 w-1/2 md:p-2"
              >
                <path
                  d="M5 928c-3-7-4-218-3-468L5 5h310v930l-153 3C46 940 8 938 5 928zm275-458V40H40v860h240V470zM360 920c0-20 6-20 300-20h300V200H660c-293 0-300 0-300-20 0-17 7-20 50-20s50-3 50-20c0-16-7-20-38-20-50 0-62-14-62-72V0h400v48c0 58-12 72-62 72-31 0-38 4-38 20 0 19 8 20 168 22l167 3v770l-317 3c-313 2-318 2-318-18z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
                <path
                  d="M360 840c0-20 6-20 260-20h260V340H620c-254 0-260 0-260-20s5-20 278-18l277 3v550l-277 3c-273 2-278 2-278-18z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Computadoras
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-[14.25%] px-2 md:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Laptops"
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="133.333"
                height="133.333"
                version="1"
                viewBox="0 0 100 100"
                className="md:w-2/3 w-1/2 md:p-2"
              >
                <path
                  d="M87 913c-4-3-7-128-7-276V368l-31-98c-21-70-29-114-27-152l3-53h950l3 53c2 37-5 78-25 140-27 85-28 94-33 372l-5 285-411 3c-226 1-413-1-417-5zm793-283V380H120v500h760V630zM182 300l-4-40h644l-4 40c-3 39-3 40 29 40s33-2 56-78l24-77-214-3c-117-1-309-1-426 0l-214 3 24 78c23 75 24 77 56 77s32-1 29-40zm581 20c5-20 0-20-263-20s-268 0-263 20c5 19 14 20 263 20s258-1 263-20zm177-200c0-20-7-20-440-20s-440 0-440 20 7 20 440 20 440 0 440-20z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Laptops
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-[14.25%] px-2 md:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Tablets"
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="133.333"
                height="133.333"
                version="1"
                viewBox="0 0 100 100"
                className="md:w-2/3 w-1/2 md:p-2"
              >
                <path
                  d="M34 846L0 812V178l29-29 29-29h884l29 29 29 29v634l-34 34-34 34H68l-34-34zm871-20c52-22 57-52 53-353-3-258-3-263-26-285l-23-23H91l-23 23c-23 22-23 27-26 285-4 298 1 330 51 352 47 21 763 21 812 1z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
                <path
                  d="M120 500V200h780v600H120V500zm740 0V240H160v520h700V500z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Tablets
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-[14.25%] px-2 md:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Accesorios"
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="133.333"
                height="133.333"
                version="1"
                viewBox="0 0 100 100"
                className="md:w-2/3 w-1/2 md:p-2"
              >
                <path
                  d="M92 908c-17-17-17-739 0-756 7-7 25-12 40-12 24 0 28-4 28-30V80h120v60h80c70 0 80-2 80-18 0-39 16-42 240-42 155 0 219 3 228 12 17 17 17 479 0 496-8 8-52 12-130 12H660v148c0 102-4 152-12 160-17 17-539 17-556 0zm516-40c7-7 12-43 12-90v-78H130v83c0 46 3 87 7 90 12 13 458 8 471-5zm12-238v-30h-78c-47 0-83-5-90-12-9-9-12-69-12-210V179l-152 3-153 3-3 238-2 237h490v-30zm248-82c17-17 17-399 0-416s-359-17-376 0-17 399 0 416 359 17 376 0z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
                <path
                  d="M611 426c-33-18-50-53-51-104 0-81 40-122 121-122 78 0 119 41 119 120 0 52-18 88-51 106-35 17-106 18-138 0zm121-53c23-20 24-80 1-105-20-23-80-24-105-1-23 20-24 80-1 105 20 23 80 24 105 1z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Accesorios
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-[14.25%] px-2 md:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Monitores"
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="133.333"
                height="133.333"
                version="1"
                viewBox="0 0 100 100"
                className="md:w-2/3 w-1/2 md:p-2"
              >
                <path
                  d="M45 888c-3-7-4-155-3-328l3-315 167-3 168-2v-30c0-29-1-30-48-30-58 0-72-12-72-62V80h480v38c0 50-14 62-72 62-47 0-48 1-48 30v30l168 2 167 3v650l-453 3c-358 2-454 0-457-10zm875-258V400H80v460h840V630zm0-310v-40H80v80h840v-40z"
                  transform="matrix(.1 0 0 -.1 0 100)"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Monitores
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-[14.25%] px-2 md:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Celulares"
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130.667"
                height="130.667"
                version="1"
                viewBox="0 0 98 98"
                className="md:w-2/3 w-1/2 md:p-2"
              >
                <path
                  d="M220 961c-14-27-14-915 0-942C230 1 244 0 490 0s260 1 270 19c14 27 14 915 0 942-10 18-24 19-270 19s-260-1-270-19zm510-441V200H250v640h480V520zm-2-417l-3-58-105-3c-98-2-104-2-83 13 25 18 31 63 11 83-16 16-100 16-116 0-20-20-14-65 11-83 21-15 15-15-83-13l-105 3-3 58-3 57h482l-3-57z"
                  transform="matrix(.1 0 0 -.1 0 98)"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Celulares
            </h3>
          </Link>
        </div>
        <div className="w-1/3 md:w-[14.25%] px-2 md:px-10 flex flex-col justify-center items-center">
          <Link
            href="/Comprar/Ofertas"
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full rounded-full hover:bg-zinc-200 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                version="1"
                viewBox="0 0 96 96"
                className="md:w-2/3 w-1/2 md:p-2"
              >
                <path
                  d="M293 667L80 454V346l133-133L346 80h108l213 213 213 213v160c0 161 0 161-26 188-27 26-27 26-188 26H506L293 667zm508 132c19-19 20-30 17-140l-3-119-195-195C471 196 419 150 400 150c-36 0-250 214-250 250 0 19 44 69 193 216 105 106 199 194 207 197s63 6 123 6c96 1 109-1 128-20z"
                  transform="matrix(.1 0 0 -.1 0 96)"
                ></path>
                <path
                  d="M286 465c-3-8-3-22 0-30 9-22 319-22 328 0 3 8 3 22 0 30-9 22-319 22-328 0z"
                  transform="matrix(.1 0 0 -.1 0 96)"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl hover:underline hover:underline-offset-8">
              Ofertas
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}
