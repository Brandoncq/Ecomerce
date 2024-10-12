import ClientAccesorioss from "./client";
export const metadata = {
  title: "Accesorios Compu-Fenix",
  description:
    "Compra Accesorios a tu comidad desde diversos precios y marcas.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
export default function Accesorios() {
  return (
    <div className="w-full flex flex-col min-h-lvh">
      <section className="w-full flex">
        <div
          className="w-full h-24 md:h-28 flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1645669141400-4f3f0350585a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <h2 className="text-white text-xl md:text-4xl font-bold text-center">
            Accesorios para computadoras, laptops y Software
          </h2>
        </div>
      </section>
      <section className="w-full flex">
        <ClientAccesorioss />
      </section>
    </div>
  );
}
