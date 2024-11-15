"use client";
import { useState, useEffect } from "react";

function Dashboard() {
  const [ventas, setVentas] = useState([]);
  const [error, setError] = useState(null);

  // Fetch datos de ventas
  useEffect(() => {
    fetch("/api/venta")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos obtenidos de la API:", data);
        setVentas(data.ventas);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="w-full p-5 h-[calc(100vh-8rem)] overflow-y-auto flex flex-col gap-4">
      {/* Mostrar error si ocurre */}
      {error && (
        <div className="text-red-500 px-4">
          <p>Error al cargar las ventas: {error}</p>
        </div>
      )}
      <div className="border border-gray-300 p-4 rounded shadow h-full overflow-y-auto">
        <h2 className="text-2xl font-bold mb-2 px-4">Compras</h2>
        {ventas.length > 0 ? (
          <ul className="list-none list-inside border border-zinc-200 bg-slate-200 p-4 rounded-lg">
            {ventas.map((venta, index) => (
              <li key={venta.id_venta} className="mb-2">
                <p className="font-bold">
                  Compra ID: {venta.id_venta} - Total: ${" "}
                  {venta.detalles.reduce(
                    (total, detalle) => total + parseFloat(detalle.subtotal),
                    0
                  )}
                </p>
                <ul className="ml-4 list-circle">
                  {venta.detalles.map((detalle, idx) => (
                    <li key={idx}>
                      {detalle.producto_nombre} - Cantidad:{" "}
                      {detalle.cantidad_ordenada} - Precio: ${detalle.subtotal}{" "}
                      - Serie: {detalle.serie}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay ventas registradas.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
