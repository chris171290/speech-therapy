"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const [isEnglish, setIsEnglish] = useState(true);
  const router = useRouter();

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    // Aquí puedes agregar la lógica para cambiar el idioma de tu aplicación
    // Por ejemplo, usando next-i18next o tu sistema de internacionalización preferido
    //router.push(isEnglish ? "/es" : "/en")
  };

  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <button
        onClick={toggleLanguage}
        className={`w-[4rem] h-3 bg-primary rounded-full flex items-center ${
          isEnglish ? "justify-start" : "justify-end"
        } focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors duration-300`}
        aria-label={isEnglish ? "Switch to Spanish" : "Switch to English"}
      >
        <motion.div
          className="w-7 h-6 bg-white rounded-full border-black border shadow-md flex items-center justify-center"
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        >
          <Image
            src={
              isEnglish
                ? "https://www.svgrepo.com/show/57252/canada.svg"
                : "https://www.svgrepo.com/show/401755/flag-for-spain.svg"
            }
            alt={isEnglish ? "Canadian flag" : "Spanish flag"}
            width={20}
            height={20}
            className="rounded-full"
          />
        </motion.div>
      </button>
      <span className="text-[0.7rem] font-medium">
        {isEnglish ? "English" : "Español"}
      </span>
    </div>
  );
}
