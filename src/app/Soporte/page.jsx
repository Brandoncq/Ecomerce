export const metadata = {
  title: "Soporte Tecnico CompuFenix",
  description: "Soporte Tecnico de la Empresa CompuFenix",
  openGraph: {
    title: "Soporte CompuFenix",
    url: "https://ecomerce-five-lilac.vercel.app/Soporte",
    images: "https://brandoncq.github.io/GaleriaImagenes/satelite-ico.jpg",
    siteName: "CompuFenix",
    type: "website",
  },
  authors: [{ name: "Davis Brandon", url: "https://github.com/Brandoncq" }],
  appleWebApp: {
    title: "CompuFenix",
  },
};
import SoporteClient from "./client";
export default function Soporte() {
  return <SoporteClient />;
}
