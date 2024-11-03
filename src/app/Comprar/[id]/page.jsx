import ClientLaptops from "./client";
export const metadata = {
  title: "Laptops BranviaTech",
  description: "Compra laptos a tu comidad desde diversos precios y marcas.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
const categoriaBanner = {
  LaptopsGamer: "Laptops BranviaTech: Tu compañera para todos los días",
  LaptopsOficina: "Computadoras de Escritorio y All in One",
  Monitores: "Tablets: Potencia y versatilidad en un solo dispositivo",
  Impresoras: "Accesorios para computadoras, laptops y Software",
  Perifericos: "Monitores: Mejora tu experiencia visual con nuestra selección.",
  Celulares: "Celulares: La tecnología que necesitas, siempre a tu alcance.",
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
