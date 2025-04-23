import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

let userConfig = undefined;
try {
  userConfig = await import("./v0-user-next.config");
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "speech-therapy-eta.vercel.app",
      },
      // Puedes agregar más patrones si necesitas cargar imágenes de otros dominios
    ],
    // Formatos modernos para mejor compresión
    formats: ["image/avif", "image/webp"],
    // Tamaños de dispositivos para optimización automática
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Tamaños de imagen para el conjunto óptimo
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Mejora la calidad predeterminada (75 es el valor por defecto)
    // quality: 80,
    // Habilita caching agresivo para imágenes
    minimumCacheTTL: 60 * 60 * 24, // 24 horas
    // Configuración de seguridad para imágenes
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    // Optimizaciones adicionales
    // optim  izeFonts: true,
    // Mejora la carga inicial
    // nextScriptWorkers: true,
  },
  // Minimiza el código con SWC (más rápido que Terser)
  swcMinify: true,
  // Optimizaciones de compilador
  compiler: {
    // Elimina los console.log en producción
    removeConsole: process.env.NODE_ENV === "production",
  },
};

mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === "object" &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

// Exportar la configuración envuelta con withNextIntl
export default withNextIntl(nextConfig);
