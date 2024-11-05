import ClientLaptops from "./client";
export const metadata = {
  title: "Laptops BranviaTech",
  description: "Compra laptos a tu comidad desde diversos precios y marcas.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
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
export const Laptops = async ({ params }) => {
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
        <ClientLaptops params={params.id} />
      </section>
    </div>
  );
};
export default Laptops;
