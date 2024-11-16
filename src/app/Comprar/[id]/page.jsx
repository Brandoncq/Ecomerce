import ClientProducto from "./client";

const categoriaBanner = {
  LaptopsGamer:
    "Laptops Gamer: Potencia y rendimiento para tus juegos favoritos.",
  LaptopsOficina:
    "Laptops de Oficina: Herramientas eficientes para el trabajo diario.",
  Monitores: "Monitores: Mejora tu experiencia visual con nuestra selección.",
  Impresoras:
    "Impresoras: Calidad y velocidad para todas tus necesidades de impresión.",
  Perifericos:
    "Periféricos: Completa tu equipo con nuestros accesorios esenciales.",
};

export async function generateMetadata({ params }) {
  return {
    title: decodeURIComponent(params.id) + " - BranViaTech",
    description: categoriaBanner[params.id],
    openGraph: {
      title: decodeURIComponent(params.id) + " - BranViaTech",
      url: `https://ecomerce-five-lilac.vercel.app/buscar/${params.id}`,
      images:
        "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1731785868/satelite-ico_rcneow.jpg",
    },
  };
}
export const Productos = async ({ params }) => {
  return (
    <div className="w-full flex flex-col">
      <section className="w-full flex">
        <div className="w-full h-24 md:h-24 px-2 flex justify-center items-center bg-slate-100">
          <h2 className="text-black text-xl md:text-2xl font-light text-center">
            {categoriaBanner[params.id]}
          </h2>
        </div>
      </section>
      <section className="w-full flex">
        <ClientProducto params={params.id} />
      </section>
    </div>
  );
};
export default Productos;
