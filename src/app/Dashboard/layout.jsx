import ClientTablets from "./client";
export const metadata = {
  title: "Soporte Tecnico BranviaTech",
  description: "Soporte Tecnico de la Empresa BranviaTech",
  openGraph: {
    images: [
      {
        url: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
        alt: "Laptop Symbol",
      },
    ],
  },
};
export default function LayoutDashboard({ children }) {
  return (
    <div className="w-full flex flex-col border-t-4 border-zinc-200">
      <section className="w-full flex">
        <>{children}</>
      </section>
    </div>
  );
}
