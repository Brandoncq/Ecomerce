import React from "react";

function Button({ onsubmit, type }) {
  return (
    <button
      type={type}
      className="w-full transition-all duration-300 ease-in-out bg-blue-600 text-white px-5 py-2 rounded-md text-lg hover:bg-zinc-800"
      onSubmit={onsubmit}
    >
      Crear Cuenta
    </button>
  );
}

export default Button;
