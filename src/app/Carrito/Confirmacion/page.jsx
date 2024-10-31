"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function VerificaCuenta() {
  return (
    <div className="w-full flex flex-wrap justify-center p-5 md:px-5 lg:px-20 mb-4 border-t-4 border-zinc-200">
      <div className="text-xl my-4 w-full flex flex-col items-center">
        <div className="w-full md:w-1/2 p-5 md:px-10 lg:px-20 justify-between items-center flex">
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            &#10003;
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            &#10003;
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            3
          </div>
        </div>
        <div className="w-full md:w-1/2 justify-between items-center flex text-sm md:text-base text-center">
          <div className="flex justify-center items-center w-1/3">
            <p>Carrito de Compras</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Pasarela de Pagos</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Confirmación del Pago</p>
          </div>
        </div>
        <div className="text-left w-full mt-3 max-lg:mt-6 flex items-center">
          <div className="border-2 border-green-600 rounded-full w-10 h-10 flex justify-center items-center">
            3
          </div>
          <h2 className="px-2">Verificar la cuenta creada</h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 shadow-lg md:px-5 lg:px-20">
        <h4 className="my-4">¡Gracias por verificar tu cuenta, </h4>
        <p>
          Nos complace informarte que tu cuenta ha sido verificada con éxito. A
          partir de este momento, puedes disfrutar de todos los beneficios que
          ofrecemos en nuestra tienda. Navega por nuestra selección de productos
          y comienza a disfrutar de una experiencia de compra única y
          personalizada.
          <br />
          <br />
          Si tienes alguna duda o necesitas asistencia, no dudes en
          contactarnos. ¡Estamos aquí para ayudarte a encontrar exactamente lo
          que necesitas!
          <br />
          <br />
          ¡Bienvenido/a a la familia Compu-Fenix!
        </p>
      </div>
    </div>
  );
}

export default VerificaCuenta;
