import Carousel from "@/components/Carrusel";
import Link from "next/link";
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "BranviaTech",
    frase: "Nuestra Historia",
    text: "Innovando en tecnología, brindando soluciones tecnológicas para mejorar tu experiencia digital.",
    url: "/Nosotros",
    button: "Mas Información",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              Explorar BranviaTech
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
                      width="133.333"
                      height="133.333"
                      version="1"
                      viewBox="0 0 100 100"
                      className="w-full h-auto"
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
      </div>
    </>
  );
}
