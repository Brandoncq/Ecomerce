import Nav from "./nav";
export const metadata = {
  title: "Comprar BranviaTech",
  description: "Compra los distintos productos de la tienda online BranviaTech",
  openGraph: {
    title: "Comprar en BranViaTech",
    url: "https://ecomerce-five-lilac.vercel.app/Comprar",
    images:
      "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1731785868/satelite-ico_rcneow.jpg",
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
