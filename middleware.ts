import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

// Crea el middleware de next-intl con tu configuración de routing
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si el usuario accede a la raíz "/"
  if (pathname === "/") {
    // Redirige a "/en"
    return NextResponse.redirect(new URL("/en", request.url));
  }

  // Para cualquier otra ruta, usa el middleware de next-intl
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(en|es)/:path*"], // Mantén tus rutas definidas
};
