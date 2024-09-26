import ClientComprar from "./client";
export const metadata = {
  title: "Tablets Compu-Fenix",
  description: "Compra los Productos o Equipos de Computo en un solo lugar.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
export default function Comprar() {
  return <ClientComprar />;
}
