function AgregarCarrito({ productId }) {
  const addToCart = async (id) => {
    const response = await fetch("/api/carrito", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const AddCarEvent = new CustomEvent("addcart");
    window.dispatchEvent(AddCarEvent);
    const data = await response.json();
  };
  return (
    <button
      className="p-3 bg-zinc-800 text-white hover:text-zinc-200 rounded text-sm lg:text-lg font-semibold lg:ml-1 hover:bg-zinc-900 transition-all duration-300 ease-in-out"
      onClick={() => addToCart(productId)}
    >
      Agregar al Carrito
    </button>
  );
}
export default AgregarCarrito;
