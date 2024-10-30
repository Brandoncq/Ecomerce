import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sections from "@/components/Sections";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Compu-Fenix Ecomerce",
  description: "Tienda Online de Equipos de Computo",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="max-md:hidden w-full flex flex-wrap justify-center items-center">
          <Sections
            menuItems={[
              { label: "Comprar", href: "/Comprar" },
              { label: "Nosotros", href: "/Nosotros" },
              { label: "Soporte", href: "/Soporte" },
              { label: "Ofertas", href: "/Comprar/Ofertas" },
            ]}
          />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
