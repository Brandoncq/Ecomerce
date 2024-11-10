import { createContext, useContext, useState } from "react";

// Crea el contexto
const CompraContext = createContext();

// Proveedor del contexto
export function CompraProvider({ children }) {
  const [compra, setCompra] = useState({
    pais: "",
    cpostal: "",
    direccion: "",
    referencia: "",
    region: "",
    ciudad: "",
    factura: "",
  });

  return (
    <CompraContext.Provider value={{ compra, setCompra }}>
      {children}
    </CompraContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useCompra() {
  return useContext(CompraContext);
}
