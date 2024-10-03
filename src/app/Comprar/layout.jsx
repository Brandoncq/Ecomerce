import Nav from "./nav";
export const metadata = {
  title: "Comprar Compu-Fenix",
  description: "Compra los distintos productos de la tienda online Compu-Fenix",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
export default function RootLayout_comprar({ children }) {
  return (
    <>
      <Nav></Nav>
      {children}
    </>
  );
}
