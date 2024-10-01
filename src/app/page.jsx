import Image from "next/image";
import Carousel from "@/components/Carrusel";
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Somos Compu-Fenix",
    frase: "Nuestra Historia",
    text: "Innovando en tecnología, brindando soluciones tecnológicas para mejorar tu experiencia digital.",
    url: "/Nosotros",
    button: "Mas Información",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Registrate",
    frase: "Únete a nuestra comunidad",
    text: "Accede a ofertas exclusivas y la mejor tecnología al registrarte hoy.",
    url: "/CrearCuenta/Crear",
    button: "Crear Cuenta",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Comprar",
    frase: "Encuentra lo que necesitas",
    text: "Explora una amplia gama de productos tecnológicos al mejor precio.",
    url: "/Comprar",
    button: "Comprar ahora",
  },
];
export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col h-lvh">
        <section className="w-full h-full">
          <Carousel slides={slides} />
        </section>
      </div>
    </>
  );
}
