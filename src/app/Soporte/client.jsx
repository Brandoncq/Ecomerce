"use lcient";
import Link from "next/link";
export default function SoporteClient() {
  return (
    <div className="w-full flex flex-col">
      <section className="w-full flex">
        <div className="w-full h-32 flex justify-center items-center relative">
          <h2 className="text-white text-4xl font-bold text-center absolute">
            Centro de Soporte al Cliente
          </h2>
          <img
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="w-full flex border-b-2 border-zinc-300">
        <div className="w-full flex flex-wrap justify-center items-center px-2 md:px-10 mb-10">
          <div className="w-full flex justify-center items-center">
            <h2 className="my-4">¿Cómo podemos ayudarlo?</h2>
          </div>
          <div className="w-full flex flex-wrap justify-center items-stretch">
            <div className="w-1/2 md:w-1/4 p-4 flex">
              <div className="w-full h-full border border-zinc-400 group cursor-pointer flex flex-col">
                <div className="w-full h-full group-hover:bg-blue-200 flex items-center p-4 border-b border-zinc-400">
                  SVG
                </div>
                <div></div>
                <div className="w-full h-full group-hover:bg-blue-100 p-4">
                  Use Herramientas de diágnostico para encontrar y soucionar
                  problemas
                </div>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 flex">
              <div className="w-full h-full border border-zinc-400 group cursor-pointer flex flex-col">
                <div className="w-full h-full group-hover:bg-blue-200 flex items-center p-4 border-b border-zinc-400">
                  SVG
                </div>
                <div></div>
                <div className="w-full h-full group-hover:bg-blue-100 p-4">
                  Comprueba el Estado de la Garantía
                </div>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 flex">
              <div className="w-full h-full border border-zinc-400 group cursor-pointer flex flex-col">
                <div className="w-full h-full group-hover:bg-blue-200 flex items-center p-4 border-b border-zinc-400">
                  SVG
                </div>
                <div></div>
                <div className="w-full h-full group-hover:bg-blue-100 p-4">
                  Contacte un agente de BranviaTech soporte
                </div>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-base flex flex-col px-6">
              <h3 className="font-semibold">Más recursos de soporte</h3>
              <Link
                href=""
                className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-1"
              >
                Información de compatibilidad con Windows 11
              </Link>
              <Link
                href=""
                className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-1"
              >
                Registre su producto
              </Link>
              <Link
                href=""
                className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-1"
              >
                Visitar el Centro de reparación Dispositivos de colaboración de
                Poly
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-ful flex flex-col my-10">
        <div className="w-full flex justify-center px-2 md:px-10">
          <h2 className="text-black text-4xl font-light my-6 lg:px-20 p-4">
            Identifique su producto para obtener manuales y información
            específica del producto
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center px-2 md:px-10 mb-5">
          <div className="w-full md:w-1/2 p-4 flex flex-col lg:px-20">
            <h3>
              Introduzca su número de serie, número de producto o nombre del
              producto
            </h3>{" "}
            <div className="relative z-0 w-full mt-6 mb-4 group">
              <input
                type="search"
                id="default-serie"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Ejepmlos: HUdawkjhop986V"
                required
              />
            </div>
            <div className="w-full flex flex-col">
              <Link
                href="/IniciarSesion"
                className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-3"
              >
                SVG Identifíquese para seleccionar un producto ya guardado
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
                <Link
                  href="/Comprar/Impresoras"
                  className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-3"
                >
                  SVG Impresoras
                </Link>
              </div>
              <div className="w-full flex">
                <Link
                  href="/Comprar/LaptosGamer"
                  className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-3"
                >
                  SVG Laptos Gamer
                </Link>
              </div>{" "}
              <div className="w-full flex">
                <Link
                  href="/Comprar/LaptosOficina"
                  className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-3"
                >
                  SVG Laptos de Gamer
                </Link>
              </div>{" "}
              <div className="w-full flex">
                <Link
                  href="/Comprar/Perifericos"
                  className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-3"
                >
                  SVG Perifericos
                </Link>
              </div>{" "}
              <div className="w-full flex">
                <Link
                  href="/Comprar/Monitores"
                  className="text-blue-500 hover:text-blue-700 underline underline-offset-2 my-3"
                >
                  SVG Monitores
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
