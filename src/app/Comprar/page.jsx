import Carousel from "@/components/Carrusel";
export const metadata = {
  title: "Tablets Compu-Fenix",
  description: "Compra los Productos o Equipos de Computo en un solo lugar.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1528914137830-c85ee162f588?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "MONITORES",
    frase: "La mejor tecnología a tu alcance",
    text: "Descubre la nueva generación de monitores con calidad superior.",
    url: "/Comprar/Monitores",
    button: "Comprar",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1626379961798-54f819ee896a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "ACCESORIOS",
    frase: "Los accesorios más cómodos",
    text: "Complementos diseñados para profesionales.",
    url: "/Comprar/Accesorios",
    button: "Comprar",
  },
  {
    id: 3,
    image:
      "https://www.notebookcheck.org/fileadmin/Notebooks/Asus/ROG_Strix_G16_G614JZ/Asus_ROG_Strix_14.jpg",
    titulo: "ASUS ROG Strix G16",
    frase: "La gama de computadoras mas alta",
    text: "Tecnología de última generación al alcance de tus manos.",
    url: "/Buscar/ASUS%20ROG%20Strix%20G16%20(2024)",
    button: "Comprar",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "LAPTOPS",
    frase: "El poder en tus manos para usted",
    text: "Rendimiento excepcional para tareas exigentes y productividad",
    url: "/Comprar/Laptops",
    button: "Comprar",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1533310266094-8898a03807dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Lenovo IdeaPad",
    frase: "A tu comidad y donde estes dispuesto",
    text: "Perfectos para el trabajo y el entretenimiento.",
    url: "/Buscar/Lenovo%20IdeaPad%201",
    button: "Comprar",
  },
];
export default function Comprar() {
  return (
    <>
      <div className="w-full flex flex-col h-lvh">
        <div className="w-full h-4/5">
          <Carousel slides={slides} />
        </div>
        <div className="w-full h-1/5 my-8">
          <h2 className="text-3xl md:text-5xl px-2 md:px-10 font-bold">
            Comprar Productos
          </h2>
        </div>
      </div>
    </>
  );
}
