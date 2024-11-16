export async function generateMetadata({ params }) {
  const { id } = params;
  const readableId = decodeURIComponent(id);
  console.log(readableId);
  return {
    title: `Buscar BranviaTech - ${readableId}`,
    description: `Resultados de búsqueda para ${readableId} en nuestra tienda online BranviaTech`,
    openGraph: {
      title: `Buscar BranViaTech - ${readableId}`,
      url: `https://ecomerce-five-lilac.vercel.app/buscar/${id}`,
      images: [
        {
          url: "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1731785868/satelite-ico_rcneow.jpg",
          alt: "BranViaTech Logo",
        },
      ],
    },
  };
}

export default function RootLayoutBuscar({ children }) {
  return <>{children}</>;
}
