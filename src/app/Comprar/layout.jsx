import Nav from "./nav";
export const metadata = {
  title: "Comprar CompuFenix",
  description: "Compra los distintos productos de la tienda online CompuFenix",
  openGraph: {
    title: "Comprar en CompuFenix",
    url: "https://ecomerce-five-lilac.vercel.app/Comprar",
    images: "https://brandoncq.github.io/GaleriaImagenes/satelite-ico.jpg",
    siteName: "CompuFenix",
    type: "website",
  },
  authors: [{ name: "Davis Brandon", url: "https://github.com/Brandoncq" }],
  appleWebApp: {
    title: "CompuFenix",
  },
};
export default function RootLayout_comprar({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
