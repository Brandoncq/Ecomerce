import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex min-h-lvh">
      <section className="w-full flex">
        <div className="w-full relative">
          <img
            src="https://www.androidsis.com/wp-content/uploads/2018/01/Fondos-de-pantalla-Android.png"
            alt=""
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl">hola</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
