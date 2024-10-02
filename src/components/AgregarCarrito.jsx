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
      className="p-3 bg-zinc-900 text-white rounded text-sm md:text-lg font-semibold mx-1 hover:bg-zinc-700"
      onClick={() => addToCart(productId)}
    >
      Agregar al Carrito
    </button>
  );
}
export default AgregarCarrito;
