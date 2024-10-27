import ClientMonitores from "./client";
export const metadata = {
  title: "Monitores Compu-Fenix",
  description: "Compra Monitores a tu comidad desde diversos precios y marcas.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
export default function Monitores() {
  return (
    <div className="w-full flex flex-col min-h-lvh">
      <section className="w-full flex">
        <div className="w-full h-24 md:h-24 px-2 flex justify-center items-center bg-slate-100">
          <h2 className="text-black text-xl md:text-2xl font-light text-center">
            Monitores: Mejora tu experiencia visual con nuestra selección.
          </h2>
        </div>
      </section>
      <section className="w-full flex">
        <ClientMonitores />
      </section>
    </div>
  );
}
