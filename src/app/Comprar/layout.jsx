import Nav from "./nav";
export const metadata = {
  title: "Comprar BranviaTech",
  description: "Compra los distintos productos de la tienda online BranviaTech",
  openGraph: {
    title: "Comprar en BranViaTech",
    url: "https://ecomerce-five-lilac.vercel.app/Comprar",
    images: "https://brandoncq.github.io/GaleriaImagenes/satelite-ico.jpg",
    siteName: "BranviaTech",
    type: "website",
  },
  authors: [{ name: "Davis Brandon", url: "https://github.com/Brandoncq" }],
  appleWebApp: {
    title: "BranViaTech",
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
