export async function generateMetadata({ params }) {
  const { id } = params;
  const readableId = decodeURIComponent(id);
  return {
    title: `Buscar BranviaTech - ${readableId}`,
    description: `Resultados de búsqueda para ${readableId} en nuestra tienda online BranviaTech`,
    openGraph: {
      title: `Buscar BranViaTech - ${readableId}`,
      url: `https://ecomerce-five-lilac.vercel.app/Buscar/${id}`,
      images: [
        {
          url: "https://brandoncq.github.io/GaleriaImagenes/satelite-ico.jpg",
          alt: "BranViaTech Logo",
        },
      ],
      siteName: "BranviaTech",
      type: "website",
    },
    authors: [{ name: "Davis Brandon", url: "https://github.com/Brandoncq" }],
    appleWebApp: {
      title: "BranViaTech",
    },
  };
}

export default function RootLayoutBuscar({ children }) {
  return <>{children}</>;
}
