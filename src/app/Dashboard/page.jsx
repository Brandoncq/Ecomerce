"use client";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
function Dashboard() {
  const [ventas, setVentas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [ventaSeleccionada, setVentaSeleccionada] = useState(null);
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

  const formatearFecha = (fechaMySQL) => {
    const fecha = new Date(fechaMySQL);
    return fecha.toLocaleDateString();
  };
  const abrirComprobante = async (id) => {
    // Aquí debes hacer la solicitud para obtener los detalles del comprobante
    await fetch(`/api/comprobante/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVentaSeleccionada(data); // Establecer los datos de la venta seleccionada
        setModalVisible(true); // Mostrar el modal
      })
      .catch((error) => console.error("Error al obtener comprobante:", error));
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setVentaSeleccionada(null); // Limpiar los datos al cerrar el modal
  };
  const descargarImagen = () => {
    const modalContent = document.getElementById("modal-content");
    html2canvas(modalContent).then((canvas) => {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "comprobante.png"; // Nombre del archivo
      link.click();
    });
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
                <div className="w-full flex justify-between">
                  <p className="border-b border-zinc-600 px-4 py-2">
                    <span className="font-bold">
                      Compra ID: {venta.id_venta}
                    </span>{" "}
                    - Total: S/. {venta.pago_total} - Fecha de Compra:{" "}
                    {formatearFecha(venta.registro_venta)} - Fecha de Envío:{" "}
                    {formatearFecha(venta.fecha_envio)} - Código Postal:{" "}
                    {venta.codigo_postal} - Región: {venta.region} - Ciudad:{" "}
                    {venta.ciudad}
                  </p>{" "}
                  <i
                    className="rounded-full hover:bg-black flex items-center justify-center p-1 cursor-pointer group"
                    onClick={() => {
                      abrirComprobante(venta.id_venta);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="800"
                      height="800"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 stroke-black group-hover:stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12.001 5C7.524 5 3.733 7.943 2.46 12c1.274 4.057 5.065 7 9.542 7 4.478 0 8.268-2.943 9.542-7-1.274-4.057-5.064-7-9.542-7"
                      ></path>
                    </svg>
                  </i>
                </div>

                <ul className="ml-4 list-circle">
                  {venta.detalles.map((detalle) => (
                    <div
                      key={detalle.id_producto}
                      className="flex flex-wrap items-center mb-2 md:space-x-10"
                    >
                      <li>
                        <p>{detalle.producto_nombre} </p>{" "}
                        <p>Cantidad: {detalle.cantidad_ordenada} </p>
                        <p>Precio: S/. {detalle.subtotal} </p>
                        <div className="text-sm text-gray-800">
                          <p>Series:</p>
                          {detalle.series.length > 0 ? (
                            <ul>
                              {detalle.series.map((serie, index) => (
                                <li key={index}>{serie}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>No hay series asociadas.</p>
                          )}
                        </div>
                      </li>
                      <div className="w-full md:w-40 flex justify-center">
                        <img
                          src={detalle.imagen}
                          alt={detalle.producto_nombre}
                          className="md:w-full w-40"
                        />
                      </div>
                    </div>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-2">No hay ventas registradas.</p>
        )}
      </div>
      {modalVisible && ventaSeleccionada && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              cerrarModal();
            }
          }}
        >
          <div
            id="modal-content"
            className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 flex flex-col justify-center items-center"
          >
            <h2 className="font-bold text-xl md:text-3xl text-center">
              TIENDA COMPUFENIX S.A.C.
            </h2>
            <div className="md:w-1/4 w-1/3 md:p-2 flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="650"
                height="650"
                fill="none"
                viewBox="0 0 650 650"
                className="w-full h-auto"
              >
                <circle
                  cx="321.5"
                  cy="339.5"
                  r="222"
                  fill="none"
                  stroke="#000"
                  strokeWidth="4"
                ></circle>
                <path
                  fill="#FFFDFD"
                  stroke="#000"
                  strokeWidth="5"
                  d="m73 336 11.21-14.796a6.36 6.36 0 0 0 1.29-3.842v-4.978a1.384 1.384 0 0 0-2.412-.926L79 316l-11.5 14.5-11 15-13 20-12 21-5.449 13.462a75 75 0 0 0-4.415 15.555l-1.573 9.235A75 75 0 0 0 19 437.337v7.702c0 5.953.709 11.885 2.111 17.67l.201.83a75 75 0 0 0 4.663 13.477l1.689 3.7a75 75 0 0 0 15.905 22.588l1.113 1.084a75 75 0 0 0 17.48 12.681l13.56 7.113a75 75 0 0 0 15.21 5.969l14.854 4.028a75 75 0 0 0 13.649 2.376L150 539l40.5-1 51.5-7 54.5-14 59.898-19.352a75 75 0 0 0 9.917-4.005L433 461l48.457-32.457a75 75 0 0 0 8.596-6.712L533.5 382.5l38-43L588 319l21.179-33.463a75 75 0 0 0 6.433-12.686L624 251.5l4.5-16L631 218l.552-8.555c.298-4.62.168-9.258-.389-13.854l-.45-3.709a75 75 0 0 0-2.341-11.579l-1.879-6.577a75 75 0 0 0-6.996-16.606l-4.975-8.706a75 75 0 0 0-10.808-14.514l-7.183-7.543a75 75 0 0 0-14.561-11.876L574 109.5l-11.5-6-18.213-7.669a4.2 4.2 0 0 0-1.641-.331h-3.537c-2.079 0-3.249 2.391-1.973 4.033.24.307.547.554.899.722L548 105l22 11 9.076 5.899a75 75 0 0 1 18.813 17.47l4.055 5.329a75 75 0 0 1 9.188 15.727l3.94 9.142a75 75 0 0 1 5.898 23.845l.977 12.515a75 75 0 0 1-.23 14.124l-.84 7.552a75 75 0 0 1-3.39 15.435l-2.503 7.511a75 75 0 0 1-4.929 11.49l-14.974 28.166a75 75 0 0 1-7.121 10.967L567 328l-25 28.5-51.442 50.064a75 75 0 0 1-9.798 8.041l-52.251 35.949a75 75 0 0 1-10.507 6.04L352.5 487.5l-66 23-47 10.5-41.5 7-49 1.5-35.09-3.433a75 75 0 0 1-21.058-5.212l-17.384-7.1a75 75 0 0 1-14.992-8.23l-2.608-1.848a66.9 66.9 0 0 1-27.7-46.168l-1.297-10.215a75 75 0 0 1 .382-21.533l.73-4.474a75 75 0 0 1 5.28-17.911L43.5 384.5l9.5-19z"
                ></path>
                <path
                  fill="#000"
                  d="M393.5 300.579V320.5l4.099 8.943a15.41 15.41 0 0 1-.226 13.31L392.5 352.5h6.409c3.048 0 6.084.387 9.035 1.152l3.494.906A22.111 22.111 0 0 1 428 375.961v.737a23.83 23.83 0 0 1-4.614 14.094l-.762 1.039a24.07 24.07 0 0 1-14.972 9.422l-.954.179a26.5 26.5 0 0 1-11.322-.338l-1.652-.413a21.284 21.284 0 0 1-15.442-15.308l-.477-1.838a27.2 27.2 0 0 1-.66-10.196L378 366.5l-4.675 3.506a41 41 0 0 1-11.64 6.099l-3.572 1.191a20.622 20.622 0 0 1-20.705-4.594L333.5 369h-2.823c-4.442 0-8.876-.395-13.249-1.18l-3.808-.683a59.2 59.2 0 0 1-17.303-5.984l-5.663-3.008a16.3 16.3 0 0 1-3.879-2.87l-1.947-1.947A9.66 9.66 0 0 0 278 350.5l-7.5 9 14.502 15.308a18 18 0 0 1 4.152 17.614l-.356 1.17a22.74 22.74 0 0 1-6.337 10.096L170.5 507l-.777-.621a34.8 34.8 0 0 1-7.223-7.879l113-103 1.5-3.5-1.5-4-58.5-62.5-4-1.5-4 1.5-99 88.5-2-6-2-6.5 93.918-85.423a19.5 19.5 0 0 1 16.021-4.861l.325.049c5.334.8 10.24 3.379 13.923 7.319L246 335.5l12.5-11.5-1.971-4.121a52.5 52.5 0 0 1-4.835-28.3L253 279.5l-2-13.5a23.44 23.44 0 0 1 3.303-17.632L256.5 245a5.6 5.6 0 0 0-7.194-2.388l-2.967 1.335a9.14 9.14 0 0 1-4.884.735l-5.08-.635a25.48 25.48 0 0 1-21.883-20.587l-.297-1.584a23.26 23.26 0 0 1 8.224-22.358l.614-.497a23.16 23.16 0 0 1 25.754-2.277l1.988 1.098a24.26 24.26 0 0 1 12.361 18.242l.335 2.681c.351 2.814.379 5.659.082 8.479L263 232.5l1 2.5 3 1 14.12-8.265a29.8 29.8 0 0 1 13.766-4.056l2.011-.088a15.237 15.237 0 0 1 13.891 7.663l.712 1.246h6.5l3.875.258a75 75 0 0 1 21.553 4.688l8.072 3.054 12.5 7 9.5-7.5-5.66-4.994a27.9 27.9 0 0 1-4.909-5.679l-1.689-2.589a19.224 19.224 0 0 1 3.075-24.637L429 142.5l5.5 3 4.5 3-67 65-1.5 4 1 4.5 56.5 60 4 1 5-1 73.5-65.5.331.473a75 75 0 0 1 5.64 9.469l.029.058-75 67h-19l-25.5-28-9 6.5 3.5 11 .675 3.546a75 75 0 0 1 1.325 14.033"
                ></path>
                <circle cx="322" cy="299" r="48.5" fill="#fff"></circle>
                <circle cx="322" cy="299" r="40.5" fill="#000"></circle>
                <path
                  fill="#FFFDFD"
                  d="M264.704 256.507 260.5 261.5v1.67c0 3.549.252 7.093.754 10.607l.246 1.723 8-9 4.683-5.463a75 75 0 0 1 9.451-9.238L289.5 247l13-9-.104-.09A36.3 36.3 0 0 0 295 233l-11 6.5-8 6-3.047 2.641a75 75 0 0 0-8.249 8.366"
                ></path>
                <path
                  fill="#fff"
                  d="m350.038 363.818-.105-.089a4.105 4.105 0 0 1 .286-6.457l1.318-.941a7 7 0 0 1 .972-.585l1.768-.884a32.5 32.5 0 0 0 6.856-4.603L366 346l3.731-3.731a75 75 0 0 0 6.967-8.033l2.802-3.736 3-4.5 3.222 3.938a5.66 5.66 0 0 1 .552 6.353l-2.326 4.134a23.8 23.8 0 0 1-3.483 4.717l-4.251 4.475a63.4 63.4 0 0 1-6.889 6.259l-6.144 4.809a13.6 13.6 0 0 1-3.684 2.053l-5.072 1.868a4.4 4.4 0 0 1-4.387-.788"
                ></path>
                <circle cx="240" cy="219" r="13.5" fill="#fff"></circle>
                <circle cx="404" cy="377" r="13.5" fill="#fff"></circle>
                <path
                  fill="#000"
                  d="m251.423 268.5-142.807.524a43.3 43.3 0 0 0-2.991 9.784l-.125.692h148zM101 300l1-5.5 35.5 2.5 14.024 1.516a33.6 33.6 0 0 1 8.666 2.13l9.572 3.761a.814.814 0 0 1-.309 1.571L100 305zM287.5 397.5h212l-9 8.5-215.5 3zM426 370.5h101l-5.5 5.5-5 4.5H426zM394.5 346h150.83l-.33 6.5-2.5 3h-148L393 352zM394.5 322h150.233l.267 5 .295 5.5H394.5zM401.212 295H541l1 4.5.695 4.5H395.5v-3.288a5.712 5.712 0 0 1 5.712-5.712M458 279h79.234l-1.734-5.5-1.357-5H468.5zM462.214 424.5H259.5l-11 10.5H448zM221 459.5l8-9h195.5l-13.5 7zM194 485l163.5-1.5 4.5-3 9.5-5H204zM234.5 534.5l28.5-7h180.5l-12 7zM499 476l-9 11.5-102-2.5 20.5-10.5zM515 452l-5 9-70.5-1.5 15-10.5zM529 426l-5.5 10-47.5-1 14-10.5zM538 397l-2 10.5-27-1 10.5-8.5z"
                ></path>
                <path
                  fill="#000"
                  stroke="#000"
                  strokeWidth="3"
                  d="M525 189.5 471 131l-25 23.5 54 58.5z"
                ></path>
                <path
                  fill="#000"
                  d="M403.5 242 379 217.5l60.5-56L461 186zM494 219.5l-26.5-27L409 249l25 26.5zM533 185.5l-56.5-60 29-26 23.5 26-19.5 18.5 5 4.5 19-19L561 159z"
                ></path>
                <path
                  fill="#fff"
                  d="M498.264 92.792 373.45 209.946c-3.485 3.271-3.462 8.812.05 12.054L512 93.5c-3.547-4.093-9.787-4.415-13.736-.708M565.5 152.5 428.5 282a9.56 9.56 0 0 0 12.985-.017L565.707 166.73c4.167-3.865 4.07-10.488-.207-14.23"
                ></path>
                <path
                  fill="#fff"
                  d="m499.5 215-6 6-54.5-60.5 6-5zM435.5 277l-6.5 5.5-56.5-62 6-5zM566 153l-6 5-55.5-59.5 7-5.5zM532.5 184.5 526 190l-54.5-60.5 6-5z"
                ></path>
                <path
                  fill="#fff"
                  d="m462.5 184.5-59.5 58 6 6 60.5-57zM514.5 149l-5.5-5 20.5-19 4.5 5z"
                ></path>
                <path
                  fill="#000"
                  d="m207 388-25.5-26-24.5 23 24.5 26.5zM213 394l-24 23.5 24 26.5 24.5-23.5zM119.5 469.5l-25-27L151 391l23 25.5zM204.5 449 180 422.5l-55.5 53 24 25zM214 382l-27-26.5 28-25 25 26.5zM270 389.5l-26.5 25-25-26.5 27.5-25.5z"
                ></path>
                <path
                  fill="#FFFCFC"
                  d="M206.52 324.891 88.824 433.331c-4.453 4.103-4.382 11.156.152 15.169L219.5 326.555c-2.871-4.466-9.075-5.261-12.98-1.664M273.5 385l-132 122c4.757 4.489 12.191 4.484 16.941-.013L274.45 397.174c3.629-3.436 3.168-9.343-.95-12.174"
                ></path>
                <path
                  fill="#000"
                  d="m409 161.5-8.5 8.5h-168a5.28 5.28 0 0 1 .85-6.35L238 159zM248 147l163.5-2.5-3.048-1.355a75 75 0 0 0-12.271-4.225L392.5 138 254 139a35.3 35.3 0 0 0-5.904 7.827z"
                ></path>
                <path
                  fill="#fff"
                  d="m142 507.5-53-59 6.5-6.5 55 58zM203.5 450l-53-59 6.5-6.5 55 58zM236.5 423 181 362l7-6 57 59.5z"
                ></path>
                <path
                  fill="#FFF4F4"
                  d="M119 468.5 235 360l7.5 7-117 108.5z"
                ></path>
                <path
                  fill="#fff"
                  d="m266 393.5-55.5-61 8.5-6 55.5 59.5z"
                ></path>
              </svg>
            </div>
            <p>
              <strong>RUC:</strong> 20100015915
            </p>
            <p>
              <strong>Dirección:</strong> Av. Alfonso Ugarte N26
            </p>
            <hr class="h-px my-2 w-full bg-gray-500 border-0 dark:bg-gray-700" />
            <h3 className="text-xl font-semibold mb-2">
              {
                (ventaSeleccionada.serie = "F100"
                  ? "FACTURA DE VENTA ELECTRÓNICA"
                  : "BOLETA DE VENTA ELECTRÓNICA")
              }
            </h3>
            <div className="flex space-x-4">
              <p>
                <strong>Serie:</strong> {ventaSeleccionada.serie}
              </p>
              <p>
                <strong>Número:</strong> {ventaSeleccionada.numero}
              </p>
            </div>
            <p>
              <strong>Fecha de Emisión:</strong>{" "}
              {formatearFecha(ventaSeleccionada.fecha_emision)}
            </p>
            <p>
              <strong>Vendedor:</strong> {ventaSeleccionada.nombre_vendedor}
            </p>
            <p>
              <strong>Cliente:</strong> {ventaSeleccionada.nombre_cliente}
            </p>
            <p>
              <strong>N° Documento:</strong> {ventaSeleccionada.nro_documento}
            </p>
            <div className="flex space-x-4">
              {ventaSeleccionada.ciudad && (
                <p>
                  <strong>Ciudad:</strong> {ventaSeleccionada.ciudad}
                </p>
              )}
              {ventaSeleccionada.region && (
                <p>
                  <strong>Región:</strong> {ventaSeleccionada.region}
                </p>
              )}
              {ventaSeleccionada.codigo_postal && (
                <p>
                  <strong>Código Postal:</strong>{" "}
                  {ventaSeleccionada.codigo_postal}
                </p>
              )}
            </div>
            <div className="flex space-x-4">
              <p>
                <strong>Subtotal:</strong> S/. {ventaSeleccionada.subtotal}
              </p>
              <p>
                <strong>IGV:</strong> S/. {ventaSeleccionada.impuestos}
              </p>
            </div>
            <p>
              <strong>Total:</strong> S/. {ventaSeleccionada.total}
            </p>
            <div className="md:p-2 flex justify-center items-center space-x-2">
              <button
                onClick={descargarImagen}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
              >
                Descargar como Imagen
              </button>
              <button
                className="mt-4 p-2 bg-red-500 text-white rounded-lg"
                onClick={cerrarModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
