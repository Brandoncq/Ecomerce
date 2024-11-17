export const metadata = {
  title: "Soporte Tecnico BranviaTech",
  description: "Soporte Tecnico de la Empresa BranviaTech",
  openGraph: {
    title: "Historail de Compras BranViaTech",
    url: "https://ecomerce-five-lilac.vercel.app/Dashboard",
    images:
      "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1731785868/satelite-ico_rcneow.jpg",
    siteName: "BranviaTech",
    type: "website",
  },
  authors: [{ name: "Davis Brandon", url: "https://github.com/Brandoncq" }],
  appleWebApp: {
    title: "BranViaTech",
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
