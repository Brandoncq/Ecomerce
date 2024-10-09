import ClientTablets from "./client";
export const metadata = {
  title: "Tablets Compu-Fenix",
  description: "Compra Tablets a tu comidad desde diversos precios y marcas.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
export default function Tablets() {
  return (
    <div className="w-full flex flex-col min-h-lvh">
      <section className="w-full flex">
        <div
          className="w-full h-28 md:h-44 flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1564216329574-c839d4eedb1b?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <h2 className="text-white text-xl md:text-4xl font-bold text-center">
            Tablets
          </h2>
        </div>
      </section>
      <section className="w-full flex">
        <ClientTablets />
      </section>
    </div>
  );
}
