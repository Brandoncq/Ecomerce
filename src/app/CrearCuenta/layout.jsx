import { FormProvider } from "./context";
export const metadata = {
  title: "Soporte Tecnico CompuFenix",
  description: "Soporte Tecnico de la Empresa CompuFenix",
  openGraph: {
    title: "Crear Cuenta CompuFenix",
    url: "https://ecomerce-five-lilac.vercel.app/CrearCuenta",
    images: "https://brandoncq.github.io/GaleriaImagenes/satelite-ico.jpg",
    siteName: "CompuFenix",
    type: "website",
  },
  authors: [{ name: "Davis Brandon", url: "https://github.com/Brandoncq" }],
  appleWebApp: {
    title: "CompuFenix",
  },
};
export default function LayoutCrearCuenta({ children }) {
  return (
    <FormProvider>
      <div className="border-t-4 boerder-zinc-200">{children}</div>
    </FormProvider>
  );
}
