"use client";

export default function Monitores() {
  return (
    <div className="w-full flex flex-col">
      <section className="w-full flex flex-col h-lvh">
        <div className="w-full flex justify-center items-center h-1/3 md:h-1/2 relative">
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
        <div className="w-full h-2/3 md:h-1/2 flex justify-center items-center bg-zinc-200">
          <div className="w-full px-5 md:px-10 lg:px-20 md:py-5 text-center text-sm md:text-base lg:text-sm">
            <h2 className="my-2 text-4xl text-black font-bold">
              Acerca de Nosotros
            </h2>
            <p className="my-2 md:my-8 md:px-20">
              Creemos que el comercio digital puede marcar una diferencia
              positiva al acercar la tecnología de manera accesible y
              significativa a quienes la necesitan. Por eso, nuestro compromiso
              es ofrecer equipos confiables y de calidad, desde laptops y
              monitores hasta impresoras y periféricos, para mejorar la vida y
              el trabajo de nuestros clientes.
            </p>
            <p className="my-2 md:my-8 md:px-20">
              Nos guiamos por principios de inclusión digital y prácticas
              sostenibles, seleccionando productos que contribuyen a un futuro
              mejor.
            </p>
            <p className="my-2 md:my-8 md:px-20">
              Nuestro equipo está aquí para ayudarte a encontrar las
              herramientas ideales que impulsen tus proyectos. ¡Explora nuestro
              catálogo y descubre cómo la tecnología puede transformar tus ideas
              en realidad!
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col">
        <div className="w-full flex flex-wrap p-4 md:p-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1499789236202-ee68fec859fb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 flex flex-col justify-center">
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
