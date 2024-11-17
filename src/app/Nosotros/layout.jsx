export const metadata = {
  title: "Nosotros BranviaTech",
  description:
    "Nuestra Tienda Online tiene el objetivo de satisfacer las necesidades del cliente",
  openGraph: {
    title: "Nosotros BranViaTech",
    url: "https://ecomerce-five-lilac.vercel.app/Nosotros",
    images: "https://brandoncq.github.io/GaleriaImagenes/satelite-ico.jpg",
    siteName: "BranviaTech",
    type: "website",
  },
  authors: [{ name: "Davis Brandon", url: "https://github.com/Brandoncq" }],
  appleWebApp: {
    title: "BranViaTech",
  },
};
export default function RootLayout_Nosotros({ children }) {
  return <>{children}</>;
}
