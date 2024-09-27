"use client";

function RevisaCuenta() {
  return (
    <div className="w-full flex flex-wrap justify-center p-5 md:px-20 mb-4">
      <div className="text-xl my-4 w-full flex flex-col items-center">
        <div className="w-full md:w-1/2 p-5 md:px-20 justify-between items-center flex">
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            &#10003;
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center bg-green-600 text-white">
            2
          </div>
          <hr className="flex-grow border-zinc-600 mx-2" />
          <div className="border border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center">
            3
          </div>
        </div>
        <div className="w-full md:w-1/2 justify-center items-center flex text-sm md:text-base text-center">
          <div className="flex justify-center items-center w-1/3">
            <p> Crear ID de Compu-Fenix</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Revisa el correo electrónico</p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <p>Verificar la cuenta creada</p>
          </div>
        </div>
        <div className="text-left w-full max-md:mt-6 flex items-center">
          <div className="border-2 border-green-600 rounded-full w-10 h-10 flex justify-center items-center">
            2
          </div>
          <h2 className="px-2">Revisa el correo electrónico</h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 shadow-lg md:px-20">
        Gracias por crear una cuenta Comprueba tu dbccoicaq@unjbg.edu.pe Cuenta
        para recibir un correo electrónico con el asunto “Te damos la bienvenida
        al ID de Lenovo”. Después, haz clic en el enlace que contiene para
        confirmar la cuenta. Este enlace de verificación caducará en 24 horas.
      </div>
    </div>
  );
}

export default RevisaCuenta;
