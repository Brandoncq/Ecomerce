import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex">
      <section className="w-full flex">
        <div className="w-full relative">
          <img
            src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-auto h-lvh md:w-full md:h-auto object-cover"
          />
          <div className="absolute h-full inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl font-semibold text-center">
              Bienvenido a Compu-Fenix
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
