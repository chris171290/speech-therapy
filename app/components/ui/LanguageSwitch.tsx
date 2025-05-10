"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const pathname = usePathname(); // Obtiene la ruta actual
  const router = useRouter(); // Para redirigir al cambiar idioma
  const [isEnglish, setIsEnglish] = useState(true);

  // Detecta el idioma inicial basado en la URL
  useEffect(() => {
    const locale = pathname.startsWith("/en") ? "en" : "es";
    setIsEnglish(locale === "en");
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta

  const toggleLanguage = () => {
    const newLocale = isEnglish ? "/es" : "/en";
    // Redirige a la misma página pero con el nuevo idioma
    const newPath = pathname.replace(/^\/(en|es)/, newLocale) || newLocale;
    router.push(newPath);
    setIsEnglish(!isEnglish); // Cambia el estado después de redirigir
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={toggleLanguage}
        className={`border-b-2 border-l border-[#7248d4] w-[2.8rem] h-3 md:w-[4rem] md:h-3 bg-primary mt-1.5 rounded-full flex items-center ${
          isEnglish ? "justify-start" : "justify-end"
        } transition-colors duration-300`}
        aria-label={isEnglish ? "Switch to Spanish" : "Switch to English"}
      >
        <motion.div
          className="w-7 h-6 md:w-7 md:h-6 bg-white rounded-full border-black border-[0.5px] shadow-md flex items-center justify-center"
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        >
          <Image
            src={isEnglish ? "/canada.svg" : "/spain.svg"}
            alt={isEnglish ? "Canadian flag" : "Spanish flag"}
            width={20}
            height={20}
            className="rounded-full w-3/4 h-auto"
          />
        </motion.div>
      </button>
      <span className="mt-0.5 md:mt-1.5 text-[0.7rem] font-bold text-primary">
        {isEnglish ? "English" : "Español"}
      </span>
    </div>
  );
}
