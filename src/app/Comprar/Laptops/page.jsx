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
        <div
          className="w-full h-24 md:h-28 flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <h2 className="text-white text-xl md:text-4xl font-bold text-center">
            Laptops Compu-Fenix: Tu compañera para todos los días
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
