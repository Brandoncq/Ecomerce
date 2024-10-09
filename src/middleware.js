import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const MytokenName = request.cookies.get("Sesion");
  if (MytokenName == undefined) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jwtVerify(MytokenName.value, secret);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
export const config = {
  matcher: ["/Usuario/:path*", "/Carrito/Pasarela", "/Carrito/Confirmacion"],
};
