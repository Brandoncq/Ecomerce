export const metadata = {
  title: "Soporte Tecnico BranviaTech",
  description: "Soporte Tecnico de la Empresa BranviaTech",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
export default function Soporte() {
  return (
    <div className="w-full flex flex-col min-h-lvh">
      <section className="w-full flex">
        <div
          className="w-full h-28 md:h-44 flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <h2 className="text-white text-xl md:text-4xl font-bold text-center">
            Soporte
          </h2>
        </div>
      </section>
      <section className="w-full flex"></section>
    </div>
  );
}
