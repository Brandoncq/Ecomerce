export async function generateMetadata({ params }) {
  const { id } = params;
  const readableId = decodeURIComponent(id);
  return {
    title: `Buscar CompuFenix - ${readableId}`,
    description: `Resultados de búsqueda para ${readableId} en nuestra tienda online CompuFenix`,
    openGraph: {
      title: `Buscar CompuFenix - ${readableId}`,
      url: `https://ecomerce-five-lilac.vercel.app/Buscar/${id}`,
      images: [
        {
          url: "https://brandoncq.github.io/GaleriaImagenes/satelite-ico.jpg",
          alt: "CompuFenix Logo",
        },
      ],
      siteName: "CompuFenix",
      type: "website",
    },
    authors: [{ name: "Davis Brandon", url: "https://github.com/Brandoncq" }],
    appleWebApp: {
      title: "CompuFenix",
    },
  };
}

export default function RootLayoutBuscar({ children }) {
  return <>{children}</>;
}
