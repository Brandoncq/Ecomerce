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
          {/*<div className="w-full flex flex-wrap justify-center px-4 md:px-10 mb-5 md:mb-10">
            <div className="w-1/3 md:w-1/5 p-2 lg:px-2 xl:px-20 flex flex-col justify-center items-center">
              <Link
                href="/Comprar/Computadoras"
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
                  Computadoras
                </h3>
              </Link>
            </div>
            <div className="w-1/3 md:w-1/5 p-2 lg:px-2 xl:px-20 flex flex-col justify-center items-center">
              <Link
                href="/Comprar/Laptops"
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
                        d="M87 913c-4-3-7-128-7-276V368l-31-98c-21-70-29-114-27-152l3-53h950l3 53c2 37-5 78-25 140-27 85-28 94-33 372l-5 285-411 3c-226 1-413-1-417-5zm793-283V380H120v500h760V630zM182 300l-4-40h644l-4 40c-3 39-3 40 29 40s33-2 56-78l24-77-214-3c-117-1-309-1-426 0l-214 3 24 78c23 75 24 77 56 77s32-1 29-40zm581 20c5-20 0-20-263-20s-268 0-263 20c5 19 14 20 263 20s258-1 263-20zm177-200c0-20-7-20-440-20s-440 0-440 20 7 20 440 20 440 0 440-20z"
                        transform="matrix(.1 0 0 -.1 0 100)"
                      ></path>
                    </svg>{" "}
                  </div>
                </div>
                <h3 className="text-xl hover:underline hover:underline-offset-8">
                  Laptops
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
                      width="128"
                      height="128"
                      version="1"
                      viewBox="0 0 96 96"
                      className="w-full h-auto"
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
                </div>
                <h3 className="text-xl hover:underline hover:underline-offset-8">
                  Ofertas
                </h3>
              </Link>
            </div>
          </div>*/}
        </section>
      </div>
    </>
  );
}
