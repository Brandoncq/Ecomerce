export const metadata = {
  title: "Ofertas BranviaTech",
  description: "Compra laptos a tu comidad desde diversos precios y marcas.",
  openGraph: {
    images: "https://purepng.com/public/uploads/large/laptop-symbol-azy.png",
  },
};
import ClientOfertas from "./clientOfertas";
export const Ofertas = async ({ params }) => {
  return (
    <div className="w-full flex flex-col border-t-4 boerder-zinc-200">
      <section className="w-full flex flex-col">
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-blue-300 p-6 md:p-10 xl:p-20">
            <div className="w-full flex items-start my-2 md:my-4">
              <div className="bg-black text-white text-xl font-bold p-2">
                <p>TIEMPO ILIMITADO</p>
              </div>
            </div>
            <h2 className="text-black text-xl md:text-4xl font-light my-1 md:mb-5">
              ¡<span className="font-bold">APROVECHA</span> los{" "}
              <span className="font-bold">DESCUENTOS IMPERDIBLES</span> en
              nuestros productos!
            </h2>
            <p className="max-md:text-sm">
              Encuentra ofertas exclusivas y{" "}
              <span className="font-bold">ahorra</span> en una amplia variedad
              de artículos. No dejes pasar esta{" "}
              <span className="font-bold">oportunidad única</span> para
              conseguir lo mejor a precios{" "}
              <span className="font-bold">irresistibles</span>. ¡Compra ahora y{" "}
              <span className="font-bold">disfruta del ahorro</span>!
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center bg-blue-300">
            <img
              src="https://plus.unsplash.com/premium_photo-1729036341117-5324b3caab25?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="bg-blue-200 max-lg:hidden"
              style={{
                clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1729036341117-5324b3caab25?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="bg-blue-200 lg:hidden"
            />
          </div>
        </div>
      </section>
      <section className="w-full flex">
        <ClientOfertas />
      </section>
    </div>
  );
};
export default Ofertas;
