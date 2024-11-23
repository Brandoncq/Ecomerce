export const metadata = {
  title: "Soporte Tecnico CompuFenix",
  description: "Soporte Tecnico de la Empresa CompuFenix",
  openGraph: {
    title: "Historail de Compras CompuFenix",
    url: "https://ecomerce-five-lilac.vercel.app/Dashboard",
    images: "https://brandoncq.github.io/GaleriaImagenes/satelite-ico.jpg",
    siteName: "CompuFenix",
    type: "website",
  },
  authors: [{ name: "Davis Brandon", url: "https://github.com/Brandoncq" }],
  appleWebApp: {
    title: "CompuFenix",
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
