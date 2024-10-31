import ClientCelulares from "./client";
export const metadata = {
  title: "Celulares BranviaTech",
  description: "Compra Celulares a tu comidad desde diversos precios y marcas.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
export default function Celulares() {
  return (
    <div className="w-full flex flex-col min-h-lvh">
      <section className="w-full flex">
        <div className="w-full h-24 md:h-24 px-2 flex justify-center items-center bg-slate-100">
          <h2 className="text-black text-xl md:text-2xl font-light text-center">
            Celulares: La tecnología que necesitas, siempre a tu alcance.
          </h2>
        </div>
      </section>
      <section className="w-full flex">
        <ClientCelulares />
      </section>
    </div>
  );
}
