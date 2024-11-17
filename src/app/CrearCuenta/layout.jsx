import { FormProvider } from "./context";
export const metadata = {
  title: "Soporte Tecnico BranviaTech",
  description: "Soporte Tecnico de la Empresa BranviaTech",
  openGraph: {
    title: "Crear Cuenta BranViaTech",
    url: "https://ecomerce-five-lilac.vercel.app/CrearCuenta",
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
export default function LayoutCrearCuenta({ children }) {
  return (
    <FormProvider>
      <div className="border-t-4 boerder-zinc-200">{children}</div>
    </FormProvider>
  );
}
