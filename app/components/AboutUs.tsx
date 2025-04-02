"use client";

import { MdOutlineTaskAlt, MdFamilyRestroom } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";
import { GiBrain, GiTrophyCup } from "react-icons/gi";
import { ReactNode, useMemo } from "react";
import { Card, CardContent, CardHeader } from "./ui/Card";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Definir interfaces para los tipos de datos
interface ListItem {
  title: string;
}

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

// Componente para las tarjetas de características
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <Card className="bg-transparent h-full transition-all duration-300 hover:shadow-lg border-[0.5px] hover:scale-105 border-primary">
    <CardHeader className="flex items-center justify-center pt-6">
      <div className="border-b-4 border-l-2 border-[#7248d4] w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-primary text-xl">{description}</p>
    </CardContent>
  </Card>
);

export default function AboutUs() {
  const t = useTranslations("about");
  // Extraer datos a constantes para mejorar mantenibilidad
  const LIST_ITEMS: ListItem[] = useMemo(
    () => [
      { title: t("services.specializations1") },
      {
        title: t("services.specializations2"),
      },
      {
        title: t("services.specializations3"),
      },
    ],
    []
  );

  const FEATURES: FeatureItem[] = useMemo(
    () => [
      {
        icon: <GiTrophyCup className="size-6 text-white" aria-hidden="true" />,
        title: t("whyWorkWithMe.reasons1.heading"),
        description: t("whyWorkWithMe.reasons1.description"),
      },
      {
        icon: <LuLanguages className="size-6 text-white" aria-hidden="true" />,
        title: t("whyWorkWithMe.reasons2.heading"),
        description: t("whyWorkWithMe.reasons2.description"),
      },
      {
        icon: <GiBrain className="size-6 text-white" aria-hidden="true" />,
        title: t("whyWorkWithMe.reasons3.heading"),
        description: t("whyWorkWithMe.reasons3.description"),
      },
      {
        icon: (
          <MdFamilyRestroom className="size-6 text-white" aria-hidden="true" />
        ),
        title: t("whyWorkWithMe.reasons4.heading"),
        description: t("whyWorkWithMe.reasons4.description"),
      },
    ],
    []
  );

  return (
    <section
      className="-mt-[1px] relative isolate overflow-hidden bg-secondary px-6 py-10 sm:py-24 lg:overflow-visible lg:px-0"
      id="about"
      aria-labelledby="about-heading"
    >
      {/* Comentario: Fondo SVG eliminado para reducir la complejidad - se puede restaurar si es necesario */}

      {/* Contenido principal */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Sección izquierda */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p
                id="about-heading"
                className="mb-5 text-2xl font-semibold text-primary underline underline-offset-4 decoration-2"
              >
                {t("title")}
              </p>
              <h1 className="mt-4 text-2xl font-semibold tracking-tight text-pretty text-primary sm:text-[2.50rem]">
                {t("professional.name")},{" "}
                <span className="text-3xl">
                  {t("professional.credentials1")}
                </span>
              </h1>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-primary sm:text-[2.50rem]">
                {t("professional.credentials2")}{" "}
                <span className="text-3xl">
                  {t("professional.credentials3")}
                </span>
              </h1>
              <p className="mt-8 text-lg/7 text-primary">
                {t.rich("professional.bio.introduction", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}{" "}
                {t.rich("professional.bio.bilingual", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
                <br />
                <br />
                {t.rich("professional.bio.career", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}{" "}
                {t.rich("professional.bio.approach", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="-mt-6 -ml-12 p-12 lg:sticky lg:top-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-full max-w-[48rem] rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10"
            src="/aboutMe.avif"
            alt="Rebeca Schvartzman, Speech-Language Pathologist"
            width={800}
            height={600}
            priority // Si es above-the-fold
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 768px"
          />
        </div>

        {/* Sección derecha */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-primary lg:max-w-lg">
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-pretty text-primary sm:text-[2.50rem]">
                {t("services.title")}
              </h2>
              <p className="mt-4 text-lg/7 font-semibold text-primary">
                {t("services.description")}
              </p>

              {/* Lista de especialidades */}
              <ul role="list" className="mt-8 space-y-4 text-primary">
                {LIST_ITEMS.map((item, index) => (
                  <li key={index} className="flex gap-x-3">
                    <MdOutlineTaskAlt
                      aria-hidden="true"
                      className="mt-1 size-6 flex-none text-primary"
                    />
                    <span>
                      <strong className="text-lg/7 font-semibold text-primary">
                        {item.title}
                      </strong>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-lg/7 text-primary">
                {t.rich("services.philosophy", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <span className="block mt-8 text-primary italic">
                {t("closingMessage")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Me? */}
      <div className="md:px-8">
        <div className="border-[0.8px] rounded-3xl border-primary bg-white p-5 mx-auto grid max-w-2xl grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none">
          <div className="flex items-center justify-center">
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-primary sm:text-[2.50rem]">
              {t("whyWorkWithMe.title")}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-4 mx-auto lg:gap-x-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-8">
            <p className="text-primary text-center text-lg/7">
              {t("whyWorkWithMe.closingMessage")}
            </p>
            <a
              href="#contact"
              className="text-base truncate rounded-xl font-extrabold tracking-wider relative inline-flex group items-center justify-center px-2 py-2 md:px-3.5 md:py-2 md:m-1 cursor-pointer border-b-4 border-l-2 active:scale-105 transition-all duration-300 ease-out active:shadow-none shadow-lg bg-primary border-[#7248d4] text-white"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded group-hover:w-full group-hover:h-10 opacity-10"></span>
              <span>{t("whyWorkWithMe.callToAction")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
