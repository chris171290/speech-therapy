import Image from "next/image";

const institutions = [
  {
    name: "Universidad del Rosario",
    src: "/UniversidadRosario.svg?height=80&width=160",
    alt: "Logo de Universidad de Stanford",
  },
  {
    name: "University of Toronto",
    src: "/UoT.png?height=80&width=160",
    alt: "Logo de MIT",
  },
  {
    name: "CASLPO",
    src: "/CASLPO.svg?height=80&width=160",
    alt: "Logo de Google",
  },
  {
    name: "The Hanen Centre",
    src: "/hanen.png?height=80&width=160",
    alt: "Logo de Harvard Business School",
  },
  {
    name: "Social Thinking",
    src: "/SocialThinking.png?height=80&width=160",
    alt: "Logo de INSEAD",
  },
  {
    name: "DIR Floortime",
    src: "/DIRFloortime.png?height=80&width=160",
    alt: "Logo de Microsoft",
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

export default function LogoCarousel() {
  return (
    <div className="w-full overflow-hidden rounded-2xl shadow-lg bg-white p-5">
      <div className="flex animate-marquee space-x-12 hover:[animation-play-state:paused]">
        {institutions.concat(institutions).map((institution, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[200px] flex-shrink-0 group"
          >
            <div className="h-[100px] w-[200px] flex items-center justify-center bg-[#f9f9f9] rounded-lg shadow-md transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
              <Image
                src={institution.src || "/placeholder.svg"}
                alt={institution.alt}
                width={160}
                height={80}
                className="max-w-[80%] max-h-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            {/* <p className="mt-4 text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
              {institution.name}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
