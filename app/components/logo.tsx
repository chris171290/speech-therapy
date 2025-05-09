// components/Logo.tsx
import Image from "next/image";
// import { useTheme } from "next-themes"; // Si usas modo oscuro

type LogoProps = {
  variant?: "default" | "symbol" | "horizontal";
  size?: "sm" | "md" | "lg" | "xl";
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  className?: string;
};

export const Logo = ({
  variant = "default",
  size = "sm",
  textSize = "2xl",
  className = "",
}: LogoProps) => {
  // const { theme } = useTheme();
  // const isDark = theme === "dark";

  // Mapeo de tamaños
  const sizeMap = {
    sm: { width: 52, height: 52 },
    md: { width: 150, height: 40 },
    lg: { width: 170, height: 60 },
    xl: { width: 300, height: 80 },
  };

  const textSizeMap = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  // Selección de la variante del logo
  let src = "/logo/logo.svg";

  // if (variant === "symbol") {
  //   src = "/images/logo/logo-symbol.svg";
  // } else if (variant === "horizontal") {
  //   src = "/images/logo/logo-horizontal.svg";
  // }

  // Versión para modo oscuro si existe
  // if (isDark) {
  //   src = src.replace(".svg", "-dark.svg");
  // }

  return (
    <a href="/" className={`flex items-center ${className}`}>
      <Image
        src={src}
        alt="Company logo"
        width={sizeMap[size].width}
        height={sizeMap[size].height}
        priority={true} // Carga prioritaria para el logo
        className="object-contain"
      />

      {/* <span
        // className={` text-6xl font-bold text-primary dark:text-purple-100 ml-2`}
        className={`${textSizeMap[textSize]} font-bold text-primary dark:text-purple-100 ml-2`}
      >
        Talk & Bloom
      </span> */}
    </a>
  );
};
