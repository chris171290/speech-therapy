import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Regla general para todos los agentes
      {
        userAgent: "*",
        allow: ["/", "/es/", "/en/"], // Permitir las rutas principales y localizadas
        disallow: ["/admin/", "/private/", "/api/"], // Bloquear rutas sensibles
      },
      // Regla específica para Googlebot (opcional)
      {
        userAgent: "Googlebot",
        allow: ["/", "/es/", "/en/"],
        disallow: ["/admin/", "/private/", "/api/"],
      },
    ],
    sitemap: `https://talkandbloom.ca/sitemap.xml`, // Referencia al archivo sitemap
  };
}
