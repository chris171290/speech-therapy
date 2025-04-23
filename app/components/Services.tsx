"use client";

import {
  FaStethoscope,
  FaClipboardList,
  FaUsers,
  FaMicrophoneAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import ExpandableCardDemo from "./ui/expandable-card-demo-standard";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";

// Interfaz para la estructura de un servicio
interface Service {
  icon: ReactNode;
  title: string;
  details: string;
}

// Componente para la curva decorativa superior
const TopCurveDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 100"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="bg-white"
    aria-hidden="true"
    role="presentation"
  >
    <path d="M0 0v100S0 4 500 4s500 96 500 96V0H0Z" fill="#E0E2FF" />
  </svg>
);

// Componente para la curva decorativa inferior
const BottomCurveDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 100"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="bg-white -mt-[1px]"
    aria-hidden="true"
    role="presentation"
  >
    <path d="M0 100v-100S0 96 500 96s500 -96 500 -96V100H0Z" fill="#E0E2FF" />
  </svg>
);

// Componente principal de Servicios
const Services = () => {
  const t = useTranslations("services");

  return (
    <>
      <TopCurveDecoration />
      <section
        className="px-4 pb-12 pt-5 bg-white lg:py-10"
        id="services"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-12">
                <span className="mb-5 block text-3xl font-semibold text-primary underline underline-offset-4 decoration-2">
                  {t("title")}
                </span>
                <h2
                  id="services-heading"
                  className="mb-3 text-3xl text-primary font-bold leading-[1.2] sm:text-4xl md:text-[40px]"
                >
                  {t("subtitle")}
                </h2>
                <p className="text-base text-primary">{t("description")}</p>
              </div>
            </div>
          </div>
          <ExpandableCardDemo />
        </div>
      </section>
      <BottomCurveDecoration />
    </>
  );
};

export default Services;

// Interface for ServiceCard props
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  details: string;
}
