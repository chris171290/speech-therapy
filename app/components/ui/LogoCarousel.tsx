"use client";

import Image from "next/image";
import { FC } from "react";

// Interfaz para los datos de las instituciones
interface Institution {
  name: string;
  src: string;
  alt: string;
}

// Datos de las instituciones (eliminando duplicados)
const institutions: Institution[] = [
  // {
  //   name: "Universidad del Rosario",
  //   src: "/UniversidadRosario.svg?height=80&width=160",
  //   alt: "Logo de Universidad del Rosario",
  // },
  // {
  //   name: "University of Toronto",
  //   src: "/UoT.png?height=80&width=160",
  //   alt: "Logo de University of Toronto",
  // },
  {
    name: "CASLPO",
    src: "/CASLPO.svg?height=80&width=160",
    alt: "Logo de CASLPO",
  },
  {
    name: "The Hanen Centre",
    src: "/hanen.avif?height=80&width=160",
    alt: "Logo de The Hanen Centre",
  },
  {
    name: "Social Thinking",
    src: "/SocialThinking.png?height=80&width=160",
    alt: "Logo de Social Thinking",
  },
  {
    name: "DIR Floortime",
    src: "/DIRFloorTime.png?height=80&width=160",
    alt: "Logo de DIR Floortime",
  },
  {
    name: "MeaningFullSpeech",
    src: "/MeaningFullSpeech.webp?height=80&width=160",
    alt: "Logo de MeaningFullSpeech",
  },
  {
    name: "GenevaCentre",
    src: "/GenevaCentre.png?height=80&width=160",
    alt: "Logo de GenevaCentre",
  },
];

// Componente reutilizable para mostrar un logo
const LogoItem: FC<Institution> = ({ name, src, alt }) => (
  <div className="flex flex-col items-center justify-center w-[200px] flex-shrink-0 group">
    <div className="h-[50px] w-[150px] md:h-[100px] md:w-[200px] flex items-center justify-center bg-[#f9f9f9] rounded-lg shadow-md transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={160}
        height={80}
        className="max-w-[80%] max-h-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
    {/* Opcional: Mostrar el nombre de la institución */}
    {/* <p className="mt-4 text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
      {name}
    </p> */}
  </div>
);

export default function LogoCarousel() {
  return (
    <div className="absolute w-full overflow-hidden rounded-2xl shadow-lg bg-white p-5 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
      {/* <div className="flex animate-marquee space-x-0 md:space-x-12 hover:[animation-play-state:paused]"> */}
      <div className="flex space-x-0 md:space-x-12">
        {/* Renderizado dinámico de los logos */}
        {institutions.map((institution, index) => (
          <LogoItem key={index} {...institution} />
        ))}
        {/* Repetición del array para crear un efecto continuo */}
        {institutions.map((institution, index) => (
          <LogoItem key={index + institutions.length} {...institution} />
        ))}
      </div>
    </div>
  );
}
