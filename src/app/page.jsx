import Carousel from "@/components/Carrusel";
import Link from "next/link";
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "CompuFenix",
    frase: "Nuestra Historia",
    text: "Innovando en tecnología, brindando soluciones tecnológicas para mejorar tu experiencia digital.",
    url: "/Nosotros",
    button: "Mas Información",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Comprar",
    frase: "Encuentra lo que necesitas",
    text: "Explora una amplia gama de productos tecnológicos al mejor precio.",
    url: "/Comprar",
    button: "Comprar ahora",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1598870783724-2ecf2e0653b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Ofertas Especiales",
    frase: "Aprovecha los mejores descuentos",
    text: "Descubre una selección de productos tecnológicos con precios reducidos.",
    url: "/Ofertas",
    button: "Ver Ofertas",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Registrate",
    frase: "Únete a nuestra comunidad",
    text: "Accede a ofertas exclusivas y la mejor tecnología al registrarte hoy.",
    url: "/CrearCuenta/Crear",
    button: "Crear Cuenta",
  },
];
export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col">
        <section className="w-full h-lvh">
          <Carousel slides={slides} />
        </section>
        <section className="w-full flex flex-col">
          <div className="w-full flex my-8">
            <h2 className="text-3xl md:text-5xl px-4 md:px-10 font-bold">
              Explorar CompuFenix
            </h2>
          </div>
          <div className="w-full flex flex-wrap justify-center items-start px-4 md:px-10 mb-5 md:mb-10">
            <div className="w-1/3 md:w-1/5 p-2 lg:px-2 xl:px-20 flex flex-col justify-center items-center">
              <Link
                href="/Comprar/Perifericos"
                className="w-full flex flex-col justify-center items-center"
              >
                <div className="w-full aspect-square rounded-full hover:bg-zinc-200 flex justify-center">
                  <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      id="Layer_1"
                      width="800"
                      height="800"
                      version="1.1"
                      viewBox="0 0 18 32"
                      className="w-full h-auto"
                    >
                      <g className="fill-back">
                        <path d="M9.628 3.5c0-.976.311-1.693.876-2.021.466-.271 1.057-.241 1.617.078.931.531 2.013 1.03 2.975.713.628-.207 1.114-.719 1.489-1.567a.5.5 0 0 0-.914-.405c-.254.575-.545.909-.888 1.022-.468.152-1.134-.042-2.166-.631-.866-.494-1.843-.523-2.616-.075-.886.514-1.373 1.539-1.373 2.886a.5.5 0 0 0 1 0M9 16.927c1.103 0 2-.897 2-2v-3c0-1.103-.897-2-2-2s-2 .897-2 2v3c0 1.103.897 2 2 2m-1-5a1.001 1.001 0 0 1 2 0v3a1.001 1.001 0 0 1-2 0z"></path>
                        <path d="M0 14v9c0 4.962 4.037 9 9 9s9-4.038 9-9v-9c0-4.962-4.037-9-9-9s-9 4.038-9 9m9-8c4.411 0 8 3.589 8 8v9c0 4.411-3.589 8-8 8s-8-3.589-8-8v-9c0-4.411 3.589-8 8-8"></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl hover:underline hover:underline-offset-8">
                  Perifericos
                </h3>
              </Link>
            </div>
            <div className="w-1/3 md:w-1/5 p-2 lg:px-2 xl:px-20 flex flex-col justify-center items-center">
              <Link
                href="/Comprar/LaptopsGamer"
                className="w-full flex flex-col justify-center items-center text-center"
              >
                <div className="w-full aspect-square rounded-full hover:bg-zinc-200 flex justify-center">
                  <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="682.667"
                      height="682.667"
                      version="1"
                      viewBox="0 0 512 512"
                      className="w-full h-auto"
                    >
                      <path d="M62.2 34.3c-4.9 1.5-12.2 8.5-14.8 14.2l-2.4 5v121.1c0 87.9.3 122 1.1 124.5.7 1.9 2.2 4.8 3.5 6.5l2.3 3.1-2.4 2.3c-1.3 1.2-3.5 4.5-4.9 7.4-1.4 2.8-10.9 32-21.1 65-17.6 57-18.5 60.2-18.5 68 0 6.8.4 9.1 2.6 13.4 2.8 5.7 6.9 9.6 12.9 12.3 3.8 1.8 13.6 1.9 235.6 1.9h231.5l5.2-2.6c9.8-4.9 14.1-12.6 14.2-25.1 0-7.8-.8-10.8-18.5-68-10.2-32.9-19.4-61.7-20.5-63.9-1-2.3-3.2-5.7-4.9-7.7-2.6-2.9-2.9-3.7-1.7-4.6.8-.6 2.3-3.4 3.5-6.1l2.1-4.9-.2-122.3-.3-122.3-2.2-4.1c-2.9-5.4-10.1-11.7-15.1-13.2-5.3-1.6-382-1.5-387 .1m384.6 13.3c1.5.9 3.6 2.8 4.7 4.2 2 2.7 2 4.5 2.3 122.2.2 114.3.1 119.6-1.6 122.9-1 1.9-3.4 4.3-5.3 5.3-3.2 1.7-11.2 1.8-190.9 1.8s-187.7-.1-190.9-1.8c-1.9-1-4.3-3.4-5.3-5.3-1.7-3.3-1.8-8.6-1.6-122.9.3-117.7.3-119.5 2.3-122.2 4.7-6.2-11.4-5.7 195.3-5.8 170.2 0 188.6.2 191 1.6m2.5 270.8c1.8.7 4 2.2 5 3.3 1.2 1.4 37.7 115.4 37.7 117.9 0 .2-36.4.4-80.9.4h-80.9l-4.7-14c-3.1-9.2-5.3-14.4-6.5-15-2.5-1.4-123.5-1.4-126 0-1.2.6-3.4 5.8-6.5 15l-4.7 14h-81c-76.6 0-80.9-.1-80.4-1.8 16.9-55.4 36-115 37.3-116.5 4.3-4.8-4.4-4.6 198.1-4.7 158.4 0 190.8.2 193.5 1.4M312.9 430.2c1.3 4 2.6 7.9 2.8 8.5.4 1-11.9 1.3-59.7 1.3s-60.1-.3-59.7-1.3c.2-.6 1.5-4.5 2.8-8.5l2.3-7.2h109.2zM494 454.5c0 2.9-3.1 7.6-6.3 9.5-3.1 2-6.8 2-231.7 2s-228.6 0-231.7-2c-3.2-1.9-6.3-6.6-6.3-9.5 0-1.3 23.7-1.5 238-1.5s238 .2 238 1.5"></path>
                      <path d="M89.5 56.9c-7.2 1.8-13.2 6.8-15.9 13.3-1.4 3.3-1.6 15.7-1.6 105 0 96.5.1 101.5 1.9 105.3 1 2.2 3.1 5.2 4.7 6.7 5.4 5 8.9 5.8 26.3 5.8 15.4 0 16-.1 17.5-2.2 2.2-3.2 2-5.5-.9-8.3-2.3-2.4-2.9-2.5-16.5-2.5H90.8l-2.9-2.9-2.9-2.9V76l2.9-3.2 2.9-3.3h330.4l2.9 3.3L427 76v198.2l-2.9 2.9-2.9 2.9H288.1c-131.8 0-133.1 0-135.1 2-2.4 2.4-2.6 7.2-.4 9.4 1.4 1.4 15.1 1.6 136 1.6 119.3 0 134.9-.2 138.2-1.6 4.9-2 9-6 11.3-10.9 1.8-3.8 1.9-8.8 1.9-105.3 0-82.7-.2-101.9-1.3-104.5-2-4.7-6.4-9.5-11.1-12l-4.1-2.2-165.5-.2c-91 0-166.8.2-168.5.6"></path>
                      <path d="M152.7 145.8c-2.6 2.8-2.2 7.8.7 9.7 2 1.4 6.7 1.5 34.6 1.3 30.5-.3 32.2-.4 33.6-2.2 1.9-2.7 1.8-7-.4-8.9-1.7-1.5-5.5-1.7-34.4-1.7-30.2 0-32.6.1-34.1 1.8M153.2 184.6c-2.8 1.9-3 7.4-.4 9.7 1.7 1.6 10.3 1.7 103.4 1.7 97.1 0 101.6-.1 103.1-1.8 2.5-2.7 2.2-7.8-.5-9.6-2-1.4-13.4-1.6-102.8-1.6s-100.8.2-102.8 1.6M152.7 224.8c-2.5 2.7-2.2 7.8.5 9.6 2 1.4 13.4 1.6 102.8 1.6 111.6 0 105 .4 105-6.4 0-7.1 7.7-6.6-105.2-6.6-97.1 0-101.6.1-103.1 1.8M77.7 328.8C76 330.6 62 389 62 394.2c0 6.2-11 5.8 161.1 5.8 150.4 0 156.7-.1 158.2-1.8 2.2-2.5 2.1-7.5-.1-9.5-1.7-1.6-13.8-1.7-153-1.7-83.2 0-151.2-.3-151.2-.8 0-.4 2.3-10.9 5.1-23.5l5.2-22.7h337.4l5.2 22.7c2.8 12.6 5.1 23.1 5.1 23.5 0 .5-4.7.8-10.3.8-11.6 0-13.7 1-13.7 6.7s1.9 6.3 19.1 6.3 19.9-.8 19.9-5.8c0-5.2-14-63.6-15.7-65.4-1.5-1.7-9.1-1.8-178.3-1.8s-176.8.1-178.3 1.8"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl hover:underline hover:underline-offset-8">
                  Laptops Gamer
                </h3>
              </Link>
            </div>
            <div className="w-1/3 md:w-1/5 p-2 lg:px-2 xl:px-20 flex flex-col justify-center items-center">
              <Link
                href="/Nosotros"
                className="w-full flex flex-col justify-center items-center"
              >
                <div className="w-full aspect-square rounded-full hover:bg-zinc-200 flex justify-center">
                  <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="650"
                      height="650"
                      fill="none"
                      viewBox="0 0 650 650"
                      className="w-full h-auto"
                    >
                      <circle
                        cx="321.5"
                        cy="339.5"
                        r="222"
                        fill="none"
                        stroke="#000"
                        strokeWidth="4"
                      ></circle>
                      <path
                        fill="#FFFDFD"
                        stroke="#000"
                        strokeWidth="5"
                        d="m73 336 11.21-14.796a6.36 6.36 0 0 0 1.29-3.842v-4.978a1.384 1.384 0 0 0-2.412-.926L79 316l-11.5 14.5-11 15-13 20-12 21-5.449 13.462a75 75 0 0 0-4.415 15.555l-1.573 9.235A75 75 0 0 0 19 437.337v7.702c0 5.953.709 11.885 2.111 17.67l.201.83a75 75 0 0 0 4.663 13.477l1.689 3.7a75 75 0 0 0 15.905 22.588l1.113 1.084a75 75 0 0 0 17.48 12.681l13.56 7.113a75 75 0 0 0 15.21 5.969l14.854 4.028a75 75 0 0 0 13.649 2.376L150 539l40.5-1 51.5-7 54.5-14 59.898-19.352a75 75 0 0 0 9.917-4.005L433 461l48.457-32.457a75 75 0 0 0 8.596-6.712L533.5 382.5l38-43L588 319l21.179-33.463a75 75 0 0 0 6.433-12.686L624 251.5l4.5-16L631 218l.552-8.555c.298-4.62.168-9.258-.389-13.854l-.45-3.709a75 75 0 0 0-2.341-11.579l-1.879-6.577a75 75 0 0 0-6.996-16.606l-4.975-8.706a75 75 0 0 0-10.808-14.514l-7.183-7.543a75 75 0 0 0-14.561-11.876L574 109.5l-11.5-6-18.213-7.669a4.2 4.2 0 0 0-1.641-.331h-3.537c-2.079 0-3.249 2.391-1.973 4.033.24.307.547.554.899.722L548 105l22 11 9.076 5.899a75 75 0 0 1 18.813 17.47l4.055 5.329a75 75 0 0 1 9.188 15.727l3.94 9.142a75 75 0 0 1 5.898 23.845l.977 12.515a75 75 0 0 1-.23 14.124l-.84 7.552a75 75 0 0 1-3.39 15.435l-2.503 7.511a75 75 0 0 1-4.929 11.49l-14.974 28.166a75 75 0 0 1-7.121 10.967L567 328l-25 28.5-51.442 50.064a75 75 0 0 1-9.798 8.041l-52.251 35.949a75 75 0 0 1-10.507 6.04L352.5 487.5l-66 23-47 10.5-41.5 7-49 1.5-35.09-3.433a75 75 0 0 1-21.058-5.212l-17.384-7.1a75 75 0 0 1-14.992-8.23l-2.608-1.848a66.9 66.9 0 0 1-27.7-46.168l-1.297-10.215a75 75 0 0 1 .382-21.533l.73-4.474a75 75 0 0 1 5.28-17.911L43.5 384.5l9.5-19z"
                      ></path>
                      <path
                        fill="#000"
                        d="M393.5 300.579V320.5l4.099 8.943a15.41 15.41 0 0 1-.226 13.31L392.5 352.5h6.409c3.048 0 6.084.387 9.035 1.152l3.494.906A22.111 22.111 0 0 1 428 375.961v.737a23.83 23.83 0 0 1-4.614 14.094l-.762 1.039a24.07 24.07 0 0 1-14.972 9.422l-.954.179a26.5 26.5 0 0 1-11.322-.338l-1.652-.413a21.284 21.284 0 0 1-15.442-15.308l-.477-1.838a27.2 27.2 0 0 1-.66-10.196L378 366.5l-4.675 3.506a41 41 0 0 1-11.64 6.099l-3.572 1.191a20.622 20.622 0 0 1-20.705-4.594L333.5 369h-2.823c-4.442 0-8.876-.395-13.249-1.18l-3.808-.683a59.2 59.2 0 0 1-17.303-5.984l-5.663-3.008a16.3 16.3 0 0 1-3.879-2.87l-1.947-1.947A9.66 9.66 0 0 0 278 350.5l-7.5 9 14.502 15.308a18 18 0 0 1 4.152 17.614l-.356 1.17a22.74 22.74 0 0 1-6.337 10.096L170.5 507l-.777-.621a34.8 34.8 0 0 1-7.223-7.879l113-103 1.5-3.5-1.5-4-58.5-62.5-4-1.5-4 1.5-99 88.5-2-6-2-6.5 93.918-85.423a19.5 19.5 0 0 1 16.021-4.861l.325.049c5.334.8 10.24 3.379 13.923 7.319L246 335.5l12.5-11.5-1.971-4.121a52.5 52.5 0 0 1-4.835-28.3L253 279.5l-2-13.5a23.44 23.44 0 0 1 3.303-17.632L256.5 245a5.6 5.6 0 0 0-7.194-2.388l-2.967 1.335a9.14 9.14 0 0 1-4.884.735l-5.08-.635a25.48 25.48 0 0 1-21.883-20.587l-.297-1.584a23.26 23.26 0 0 1 8.224-22.358l.614-.497a23.16 23.16 0 0 1 25.754-2.277l1.988 1.098a24.26 24.26 0 0 1 12.361 18.242l.335 2.681c.351 2.814.379 5.659.082 8.479L263 232.5l1 2.5 3 1 14.12-8.265a29.8 29.8 0 0 1 13.766-4.056l2.011-.088a15.237 15.237 0 0 1 13.891 7.663l.712 1.246h6.5l3.875.258a75 75 0 0 1 21.553 4.688l8.072 3.054 12.5 7 9.5-7.5-5.66-4.994a27.9 27.9 0 0 1-4.909-5.679l-1.689-2.589a19.224 19.224 0 0 1 3.075-24.637L429 142.5l5.5 3 4.5 3-67 65-1.5 4 1 4.5 56.5 60 4 1 5-1 73.5-65.5.331.473a75 75 0 0 1 5.64 9.469l.029.058-75 67h-19l-25.5-28-9 6.5 3.5 11 .675 3.546a75 75 0 0 1 1.325 14.033"
                      ></path>
                      <circle cx="322" cy="299" r="48.5" fill="#fff"></circle>
                      <circle cx="322" cy="299" r="40.5" fill="#000"></circle>
                      <path
                        fill="#FFFDFD"
                        d="M264.704 256.507 260.5 261.5v1.67c0 3.549.252 7.093.754 10.607l.246 1.723 8-9 4.683-5.463a75 75 0 0 1 9.451-9.238L289.5 247l13-9-.104-.09A36.3 36.3 0 0 0 295 233l-11 6.5-8 6-3.047 2.641a75 75 0 0 0-8.249 8.366"
                      ></path>
                      <path
                        fill="#fff"
                        d="m350.038 363.818-.105-.089a4.105 4.105 0 0 1 .286-6.457l1.318-.941a7 7 0 0 1 .972-.585l1.768-.884a32.5 32.5 0 0 0 6.856-4.603L366 346l3.731-3.731a75 75 0 0 0 6.967-8.033l2.802-3.736 3-4.5 3.222 3.938a5.66 5.66 0 0 1 .552 6.353l-2.326 4.134a23.8 23.8 0 0 1-3.483 4.717l-4.251 4.475a63.4 63.4 0 0 1-6.889 6.259l-6.144 4.809a13.6 13.6 0 0 1-3.684 2.053l-5.072 1.868a4.4 4.4 0 0 1-4.387-.788"
                      ></path>
                      <circle cx="240" cy="219" r="13.5" fill="#fff"></circle>
                      <circle cx="404" cy="377" r="13.5" fill="#fff"></circle>
                      <path
                        fill="#000"
                        d="m251.423 268.5-142.807.524a43.3 43.3 0 0 0-2.991 9.784l-.125.692h148zM101 300l1-5.5 35.5 2.5 14.024 1.516a33.6 33.6 0 0 1 8.666 2.13l9.572 3.761a.814.814 0 0 1-.309 1.571L100 305zM287.5 397.5h212l-9 8.5-215.5 3zM426 370.5h101l-5.5 5.5-5 4.5H426zM394.5 346h150.83l-.33 6.5-2.5 3h-148L393 352zM394.5 322h150.233l.267 5 .295 5.5H394.5zM401.212 295H541l1 4.5.695 4.5H395.5v-3.288a5.712 5.712 0 0 1 5.712-5.712M458 279h79.234l-1.734-5.5-1.357-5H468.5zM462.214 424.5H259.5l-11 10.5H448zM221 459.5l8-9h195.5l-13.5 7zM194 485l163.5-1.5 4.5-3 9.5-5H204zM234.5 534.5l28.5-7h180.5l-12 7zM499 476l-9 11.5-102-2.5 20.5-10.5zM515 452l-5 9-70.5-1.5 15-10.5zM529 426l-5.5 10-47.5-1 14-10.5zM538 397l-2 10.5-27-1 10.5-8.5z"
                      ></path>
                      <path
                        fill="#000"
                        stroke="#000"
                        strokeWidth="3"
                        d="M525 189.5 471 131l-25 23.5 54 58.5z"
                      ></path>
                      <path
                        fill="#000"
                        d="M403.5 242 379 217.5l60.5-56L461 186zM494 219.5l-26.5-27L409 249l25 26.5zM533 185.5l-56.5-60 29-26 23.5 26-19.5 18.5 5 4.5 19-19L561 159z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M498.264 92.792 373.45 209.946c-3.485 3.271-3.462 8.812.05 12.054L512 93.5c-3.547-4.093-9.787-4.415-13.736-.708M565.5 152.5 428.5 282a9.56 9.56 0 0 0 12.985-.017L565.707 166.73c4.167-3.865 4.07-10.488-.207-14.23"
                      ></path>
                      <path
                        fill="#fff"
                        d="m499.5 215-6 6-54.5-60.5 6-5zM435.5 277l-6.5 5.5-56.5-62 6-5zM566 153l-6 5-55.5-59.5 7-5.5zM532.5 184.5 526 190l-54.5-60.5 6-5z"
                      ></path>
                      <path
                        fill="#fff"
                        d="m462.5 184.5-59.5 58 6 6 60.5-57zM514.5 149l-5.5-5 20.5-19 4.5 5z"
                      ></path>
                      <path
                        fill="#000"
                        d="m207 388-25.5-26-24.5 23 24.5 26.5zM213 394l-24 23.5 24 26.5 24.5-23.5zM119.5 469.5l-25-27L151 391l23 25.5zM204.5 449 180 422.5l-55.5 53 24 25zM214 382l-27-26.5 28-25 25 26.5zM270 389.5l-26.5 25-25-26.5 27.5-25.5z"
                      ></path>
                      <path
                        fill="#FFFCFC"
                        d="M206.52 324.891 88.824 433.331c-4.453 4.103-4.382 11.156.152 15.169L219.5 326.555c-2.871-4.466-9.075-5.261-12.98-1.664M273.5 385l-132 122c4.757 4.489 12.191 4.484 16.941-.013L274.45 397.174c3.629-3.436 3.168-9.343-.95-12.174"
                      ></path>
                      <path
                        fill="#000"
                        d="m409 161.5-8.5 8.5h-168a5.28 5.28 0 0 1 .85-6.35L238 159zM248 147l163.5-2.5-3.048-1.355a75 75 0 0 0-12.271-4.225L392.5 138 254 139a35.3 35.3 0 0 0-5.904 7.827z"
                      ></path>
                      <path
                        fill="#fff"
                        d="m142 507.5-53-59 6.5-6.5 55 58zM203.5 450l-53-59 6.5-6.5 55 58zM236.5 423 181 362l7-6 57 59.5z"
                      ></path>
                      <path
                        fill="#FFF4F4"
                        d="M119 468.5 235 360l7.5 7-117 108.5z"
                      ></path>
                      <path
                        fill="#fff"
                        d="m266 393.5-55.5-61 8.5-6 55.5 59.5z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl hover:underline hover:underline-offset-8">
                  Nosotros
                </h3>
              </Link>
            </div>
            <div className="w-1/3 md:w-1/5 p-2 lg:px-2 xl:px-20 flex flex-col justify-center items-center">
              <Link
                href="/Soporte"
                className="w-full flex flex-col justify-center items-center"
              >
                <div className="w-full aspect-square rounded-full hover:bg-zinc-200 flex justify-center">
                  <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="133.333"
                      height="133.333"
                      version="1"
                      viewBox="0 0 100 100"
                      className="w-full h-auto"
                    >
                      <path
                        d="M315 987C199 948 125 885 77 782c-31-64-32-72-32-194V461l58-111c59-114 76-180 77-297 0-47 2-53 21-53 20 0 21 4 17 123-3 132-3 132-90 292-32 57-33 65-33 170 0 100 3 116 29 172 45 99 135 169 239 188l37 7V655l-30-17c-68-39-94-154-50-226 40-65 131-91 215-61 29 11 36 9 79-20 36-25 46-38 46-59 0-38 17-52 60-52 45 0 60 15 60 60 0 44-15 60-54 60-42 0-129 58-120 79 5 9 9 43 11 76 4 69-17 115-67 143l-30 17v297l38-7c50-9 130-46 167-78 42-35 83-114 99-190 8-39 31-94 60-143 25-43 46-82 46-86 0-5-20-18-45-30l-45-22v-55c-1-85-15-133-50-163-27-25-38-28-100-28h-70V75c0-68 2-75 20-75 17 0 20 7 20 50v50h51c58 0 112 26 144 68 15 21 21 46 23 107l4 81 46 24c67 35 68 66 7 171-27 46-54 112-66 156-33 131-96 210-208 261-49 23-71 26-181 29-84 2-138-2-165-10zm221-411c28-28 34-42 34-76s-6-48-34-76-42-34-76-34-48 6-76 34-34 42-34 76 6 48 34 76 42 34 76 34 48-6 76-34z"
                        transform="matrix(.1 0 0 -.1 0 100)"
                      ></path>
                      <path
                        d="M400 560c-13-13-20-33-20-60s7-47 20-60 33-20 60-20 47 7 60 20 20 33 20 60-7 47-20 60-33 20-60 20-47-7-60-20z"
                        transform="matrix(.1 0 0 -.1 0 100)"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl hover:underline hover:underline-offset-8">
                  Soporte
                </h3>
              </Link>
            </div>
            <div className="w-1/3 md:w-1/5 p-2 lg:px-2 xl:px-20 flex flex-col justify-center items-center">
              <Link
                href="/Comprar/Ofertas"
                className="w-full flex flex-col justify-center items-center"
              >
                <div className="w-full aspect-square rounded-full hover:bg-zinc-200 flex justify-center">
                  <div className="md:w-2/3 w-1/2 md:p-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      id="Capa_1"
                      width="800"
                      height="800"
                      version="1.1"
                      viewBox="0 0 201.289 201.289"
                      className="w-full h-auto"
                    >
                      <path
                        fill="#010002"
                        d="M189.135 15.174 124.226 0 .032 124.193l77.085 77.096 124.14-124.136zM10.046 124.193 126.455 7.798l56.6 13.224 10.515 53.794L77.114 191.275z"
                      ></path>
                      <path
                        fill="#010002"
                        d="M145.534 36.379c-4.284 4.287-4.284 11.238 0 15.529 4.28 4.291 11.22 4.291 15.521 0 4.291-4.291 4.291-11.241 0-15.529-4.301-4.291-11.241-4.277-15.521 0M128.542 68.624l-7.931 7.916c-8.4-6.02-18.041-5.701-24.622.884-6.889 6.886-5.612 15.589-.719 26.841 3.489 8.239 3.378 13.507-.973 17.858-4.509 4.524-11.062 4.474-16.681-1.138-4.438-4.449-6.979-10.15-7.916-14.745l-7.208 3.407c.798 4.742 4.037 10.844 8.543 15.529l-7.916 7.916 4.989 4.992 8.235-8.238c9.423 6.889 19.648 5.383 25.972-.956 7.047-7.05 6.972-15.199 2.158-26.684-3.969-9.831-4.327-14.305-.301-18.345 3.25-3.235 8.686-5.1 14.777 1.006 5.075 5.064 6.492 10.135 7.215 12.748l7.201-3.25c-1.031-3.715-3.003-8.235-7.526-13.063l7.695-7.684z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl hover:underline hover:underline-offset-8">
                  Ofertas
                </h3>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="w-full flex flex-wrap items-start justify-center px-4 md:px-5 lg;px-10 mb-5 md:mb-20">
            <h1 className="w-full text-3xl md:text-5xl md:px-6 font-bold my-10">
              Acceso Rápido
            </h1>
            <div className="w-full md:w-1/2 flex flex-col md:px-5">
              <Link
                className="w-full border border-zinc-400 flex flex-col group"
                href={"/IniciarSesion"}
              >
                <div className="w-full border-b border-zinc-400 p-5 bg-slate-100 group-hover:bg-slate-300 transition-all duration-500 ease-in-out">
                  <h1 className="text-3xl mb-2 font-light">INICIAR SESIÓN</h1>
                  <p className="text-sm">
                    Accede a tu cuenta para gestionar tus preferencias
                  </p>
                </div>
                <div className="w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1615494487949-f5f68968330e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-80 object-cover group-hover:grayscale group-hover:scale-110 transition-all ease-in-out duration-500"
                  />
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:px-5">
              <Link
                className="w-full border border-zinc-400 flex flex-col group"
                href={"/Comprar"}
              >
                <div className="w-full border-b border-zinc-400 p-5 bg-slate-100 group-hover:bg-slate-300 transition-all duration-500 ease-in-out">
                  <h1 className="text-3xl mb-2 font-light">COMPRAR</h1>
                  <p className="text-sm">
                    Explora nuestras categorías y encuentra lo que necesitas
                  </p>
                </div>
                <div className="w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580983559367-0dc2f8934365?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-80 object-cover group-hover:grayscale group-hover:scale-110 transition-all ease-in-out duration-500"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
