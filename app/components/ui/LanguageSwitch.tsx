"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const [isEnglish, setIsEnglish] = useState(true);
  // const router = useRouter();

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    // Aquí puedes agregar la lógica para cambiar el idioma de tu aplicación
    // Por ejemplo, usando next-i18next o tu sistema de internacionalización preferido
    //router.push(isEnglish ? "/es" : "/en")
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={toggleLanguage}
        className={`w-[2.8rem] h-2 md:w-[4rem] md:h-3 bg-primary mt-1.5 rounded-full flex items-center ${
          isEnglish ? "justify-start" : "justify-end"
        } focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors duration-300`}
        aria-label={isEnglish ? "Switch to Spanish" : "Switch to English"}
      >
        <motion.div
          className="w-[1.10rem] h-[1.15rem] md:w-7 md:h-6 bg-white rounded-full border-black border shadow-md flex items-center justify-center"
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
            className="rounded-full w-3/4 h-auto"
          />
        </motion.div>
      </button>
      <span className="mt-0.5 md:mt-1.5 text-[0.7rem] font-semibold">
        {isEnglish ? "English" : "Español"}
      </span>
    </div>
  );
}
