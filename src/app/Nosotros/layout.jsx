export const metadata = {
  title: "Nosotros BranviaTech",
  description:
    "Nuestra Tienda Online tiene el objetivo de satisfacer las necesidades del cliente",
  openGraph: {
    title: "Nosotros BranViaTech",
    url: "https://ecomerce-five-lilac.vercel.app/Nosotros",
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
export default function RootLayout_Nosotros({ children }) {
  return <>{children}</>;
}
