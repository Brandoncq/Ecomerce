import ClientLaptops from "./client";
export const metadata = {
  title: "Laptops Compu-Fenix",
  description: "Compra laptos a tu comidad desde diversos precios y marcas.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
export const Laptops = async () => {
  return (
    <div className="w-full flex flex-col min-h-lvh">
      <section className="w-full flex">
        <div className="w-full h-24 md:h-24 px-2 flex justify-center items-center bg-slate-100">
          <h2 className="text-black text-xl md:text-2xl font-light text-center">
            Laptops Celadon: Tu compañera para todos los días
          </h2>
        </div>
      </section>
      <section className="w-full flex">
        <ClientLaptops />
      </section>
    </div>
  );
};
export default Laptops;
