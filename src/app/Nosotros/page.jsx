"use client";

export default function Monitores() {
  return (
    <div className="w-full flex flex-col">
      <section className="w-full flex flex-col h-lvh">
        <div className="w-full flex justify-center items-center h-1/4 md:h-1/3 relative">
          <img
            src="https://images.unsplash.com/photo-1605797925055-0b9b6d456e74?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full h-full flex justify-center items-center">
            <h2 className="text-4xl text-white font-bold text-center">
              Bienvenidos a BranviaTech
            </h2>
          </div>
        </div>
        <div className="w-full h-3/4 md:h-2/3 flex flex-wrap justify-center items-center bg-zinc-200">
          <div className="w-full md:w-1/2 px-5 md:px-5 md:py-5 text-center text-sm md:text-base lg:text-sm max-md:order-last">
            <h2 className="my-2 text-4xl text-black font-bold">
              Acerca de Nosotros
            </h2>
            <p className="my-2 md:my-8 lg:px-5 xl:20">
              Creemos que el comercio digital puede marcar una diferencia
              positiva al acercar la tecnología de manera accesible y
              significativa a quienes la necesitan. Por eso, nuestro compromiso
              es ofrecer equipos confiables y de calidad, desde laptops y
              monitores hasta impresoras y periféricos, para mejorar la vida y
              el trabajo de nuestros clientes.
            </p>
            <p className="my-2 md:my-8 lg:px-5 xl:20">
              Nos guiamos por principios de inclusión digital y prácticas
              sostenibles, seleccionando productos que contribuyen a un futuro
              mejor.
            </p>
            <p className="my-2 md:my-8 lg:px-5 xl:20">
              Nuestro equipo está aquí para ayudarte a encontrar las
              herramientas ideales que impulsen tus proyectos. ¡Explora nuestro
              catálogo y descubre cómo la tecnología puede transformar tus ideas
              en realidad!
            </p>
          </div>
          <div className="max-md:hidden w-full md:w-1/2 flex items-center justify-center md:h-full px-5 md:py-10">
            <div className="w-full flex items-center md:h-full relative">
              <img
                src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-auto md:w-full h-auto md:h-full object-cover"
              />
              <div className="absolute xl:w-1/3 bg-zinc-200 h-4 left-0 top-0"></div>
              <div className="absolute xl:w-1/3 bg-zinc-200 h-4 right-0 top-0"></div>
              <div className="absolute xl:w-1/3 bg-zinc-200 h-4 left-0 bottom-0"></div>
              <div className="absolute xl:w-1/3 bg-zinc-200 h-4 right-0 bottom-0"></div>
              <div className="absolute xl:w-4 bg-zinc-200 h-full left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute xl:w-4 bg-zinc-200 h-full left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col">
        <div className="w-full flex flex-wrap p-4 md:p-10 my-10">
          <div className="w-full md:w-1/2 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1499789236202-ee68fec859fb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-auto md:w-full h-auto md:h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 flex flex-col justify-center items-center text-center text-sm md:text-base lg:text-sm">
            <h2 className="text-black text-4xl font-bold my-2">
              Nuestro Equipo y Propósito
            </h2>
            <p className="my-2 md:my-4">
              Este proyecto nace del esfuerzo y la dedicación de un equipo de
              estudiantes universitarios en Perú, comprometidos con crear una
              plataforma digital que facilite el acceso a productos tecnológicos
              de calidad.
            </p>
            <p className="my-2 md:my-4">
              Inspirados en el impacto positivo que el comercio digital puede
              tener, hemos diseñado esta tienda en línea con el propósito de
              ofrecer una experiencia de compra práctica y segura, adaptada a
              las necesidades actuales.
            </p>
            <p className="my-2 md:my-4">
              Como equipo, buscamos que esta plataforma sirva tanto para
              nuestros usuarios como para demostrar nuestro potencial como
              futuros profesionales en tecnología y comercio electrónico.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
