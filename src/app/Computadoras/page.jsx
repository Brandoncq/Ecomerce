import ClientComputadoras from "./client";
export const metadata = {
  title: "Computadoras Compu-Fenix",
  description:
    "Compra Computadoras a tu comidad desde diversos precios y marcas.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
export default function Computadoras() {
  return (
    <div className="w-full flex flex-col min-h-lvh">
      <section className="w-full flex">
        <div
          className="w-full h-28 md:h-44 flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582731595896-f959c4fb1509?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <h2 className="text-white text-xl md:text-4xl font-bold text-center">
            Computadoras de Escritorio y All in One
          </h2>
        </div>
      </section>
      <section className="w-full flex">
        <ClientComputadoras />
      </section>
    </div>
  );
}
