export const metadata = {
  title: "Soporte Tecnico BranviaTech",
  description: "Soporte Tecnico de la Empresa BranviaTech",
  openGraph: {
    title: "Soporte BranViaTech",
    url: "https://ecomerce-five-lilac.vercel.app/Soporte",
    images:
      "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1731785868/satelite-ico_rcneow.jpg",
  },
};
import SoporteClient from "./client";
export default function Soporte() {
  return <SoporteClient />;
}
