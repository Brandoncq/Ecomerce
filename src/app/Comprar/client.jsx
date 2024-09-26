"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientComprar() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Comprar/Ofertas");
  }, [router]);

  return <div className="w-full flex flex-col min-h-lvh"></div>;
}
