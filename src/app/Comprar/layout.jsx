"use client";
import Nav from "./nav";

export default function RootLayout_comprar({ children }) {
  return (
    <>
      <Nav></Nav>
      {children}
    </>
  );
}
