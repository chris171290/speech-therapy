"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

export interface ImageWithFallbackProps
  extends Omit<ImageProps, "onLoadingComplete" | "onError"> {
  /**
   * URL de la imagen para mostrar en caso de error
   * Si no se proporciona, se mostrará un estado de error básico
   */
  fallbackSrc?: string;

  /**
   * Si es true, muestra un placeholder mientras la imagen carga
   * @default true
   */
  showPlaceholder?: boolean;

  /**
   * Clase CSS adicional para el placeholder
   */
  placeholderClassName?: string;

  /**
   * Si es true, agrega un preload link al head del documento
   * @default true para imágenes con priority=true
   */
  addPreloadLink?: boolean;
}

/**
 * Componente ImageWithFallback que mejora el componente Image de Next.js
 * con estados de carga, manejo de errores y precarga de imágenes.
 */
const ImageWithFallback = ({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes,
  className = "",
  fallbackSrc,
  showPlaceholder = true,
  placeholderClassName = "",
  addPreloadLink,
  ...props
}: ImageWithFallbackProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Por defecto, agregar preload link si la imagen es priority
  const shouldAddPreloadLink =
    addPreloadLink !== undefined ? addPreloadLink : priority;

  // Resetear estados cuando cambia la fuente
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setImgSrc(src);
  }, [src]);

  // Precarga la imagen
  useEffect(() => {
    // Si la imagen ya está en caché, no es necesario precargarla
    const imageExists = () => {
      const img = new window.Image(); // Corregido: usar window.Image
      img.src = typeof src === "string" ? src : "";
      return img.complete;
    };

    if (!imageExists() && typeof src === "string") {
      // Precarga mediante JavaScript
      const img = new window.Image(); // Corregido: usar window.Image
      img.src = src;
      img.onload = () => setIsLoading(false);
      img.onerror = () => {
        setHasError(true);
        if (fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      };

      // Agrega un link de precarga al head si es necesario
      if (shouldAddPreloadLink) {
        const linkEl = document.createElement("link");
        linkEl.rel = "preload";
        linkEl.as = "image";
        linkEl.href = src;

        // Detectar tipo de imagen por extensión
        if (src.endsWith(".avif")) {
          linkEl.type = "image/avif";
        } else if (src.endsWith(".webp")) {
          linkEl.type = "image/webp";
        } else if (src.endsWith(".jpg") || src.endsWith(".jpeg")) {
          linkEl.type = "image/jpeg";
        } else if (src.endsWith(".png")) {
          linkEl.type = "image/png";
        }

        // Evitar duplicados
        const existingLink = document.querySelector(
          `link[rel="preload"][href="${src}"]`
        );
        if (!existingLink) {
          document.head.appendChild(linkEl);

          return () => {
            try {
              if (document.head.contains(linkEl)) {
                document.head.removeChild(linkEl);
              }
            } catch (e) {
              console.warn("Error removing preload link:", e);
            }
          };
        }
      }
    }
  }, [src, fallbackSrc, shouldAddPreloadLink]);

  // Clase base para placeholder
  const placeholderBaseClass = "absolute inset-0 bg-slate-100 animate-pulse";
  const placeholderClasses = `${placeholderBaseClass} ${placeholderClassName}`;

  // Componente real
  return (
    <div className="relative">
      {/* Placeholder de carga */}
      {showPlaceholder && isLoading && !hasError && (
        <div
          className={placeholderClasses}
          style={{
            width: typeof width === "number" ? width : "100%",
            height: typeof height === "number" ? height : "100%",
          }}
          aria-hidden="true"
        />
      )}

      {/* Imagen real */}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          if (fallbackSrc) {
            setImgSrc(fallbackSrc);
            // Intentar cargar la imagen de fallback
            setIsLoading(true);
          }
        }}
        {...props}
      />

      {/* Fallback en caso de error y sin imagen de respaldo */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-gray-500 rounded">
          <span className="text-sm">Error loading image</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
