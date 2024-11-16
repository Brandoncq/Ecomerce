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

  // Función para agrupar detalles por id_producto
  const agruparDetalles = (detalles) => {
    return detalles.reduce((acumulador, detalle) => {
      if (!acumulador[detalle.id_producto]) {
        // Si no existe en el acumulador, añadirlo
        acumulador[detalle.id_producto] = {
          ...detalle,
          cantidad_total: detalle.cantidad_ordenada,
          subtotal_total: detalle.subtotal,
          series: [detalle.serie],
        };
      } else {
        // Si ya existe, actualizar cantidad, subtotal y series
        acumulador[detalle.id_producto].cantidad_total +=
          detalle.cantidad_ordenada;
        acumulador[detalle.id_producto].subtotal_total += detalle.subtotal;
        acumulador[detalle.id_producto].series.push(detalle.serie);
      }
      return acumulador;
    }, {});
  };
  const formatearFecha = (fechaMySQL) => {
    const fecha = new Date(fechaMySQL);
    return fecha.toLocaleDateString(); // Formato de fecha regional
  };
  return (
    <div className="w-full p-5 h-[calc(100vh-8rem)] overflow-y-auto flex flex-col gap-4">
      <div className="border border-gray-300 p-4 rounded shadow h-full overflow-y-auto bg-slate-200">
        <h2 className="text-2xl font-semibold my-2 px-2">
          HISTORIAL DE COMPRAS
        </h2>
        {ventas.length > 0 ? (
          <ul className="list-none list-inside">
            {ventas.map((venta) => (
              <li
                key={venta.id_venta}
                className="mb-4 border border-zinc-300 bg-white p-4 rounded-lg shadow-lg"
              >
                <p className="border-b border-zinc-600 px-4 py-2">
                  <span className="font-bold">Compra ID: {venta.id_venta}</span>{" "}
                  - Total: S/. {venta.pago_total} - Fecha de Compra:{" "}
                  {formatearFecha(venta.registro_venta)} - Fecha de Envío:{" "}
                  {formatearFecha(venta.fecha_envio)} - Código Postal:{" "}
                  {venta.codigo_postal} - Región: {venta.region} - Ciudad:{" "}
                  {venta.ciudad}
                </p>
                <ul className="ml-4 list-circle">
                  {Object.values(agruparDetalles(venta.detalles)).map(
                    (detalle) => (
                      <div
                        key={detalle.id_producto}
                        className="flex flex-wrap items-center mb-2 md:space-x-10"
                      >
                        <li>
                          <p>{detalle.producto_nombre} </p>{" "}
                          <p>Cantidad: {detalle.cantidad_ordenada} </p>
                          <p>Precio: S/. {detalle.subtotal} </p>
                          <p className="text-sm text-gray-800">
                            Series: {detalle.series.join(", ")}
                          </p>
                        </li>
                        <div className="w-full md:w-40 flex justify-center">
                          <img
                            src={detalle.imagen}
                            alt={detalle.producto_nombre}
                            className="md:w-full w-40"
                          />
                        </div>
                      </div>
                    )
                  )}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-2">No hay ventas registradas.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
