"use client";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import {
  FaClipboardList,
  FaGraduationCap,
  FaMicrophoneAlt,
  FaStethoscope,
  FaUsers,
} from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { ReadMoreButton } from "./ReadMoreButton";

export default function ExpandableCardDemo() {
  const t = useTranslations("services");
  const cards = [
    {
      description: t("freeScreening.description"),
      title: t("freeScreening.title"),
      icon: <FaStethoscope className="size-6 text-white" />,
      src: "/hero-speech-therapy.avif",
      ctaText: "Book Now",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <>
            <h3 className="font-bold text-neutral-700 dark:text-neutral-200">
              {t("freeScreening.content.title")}
            </h3>
            <ul className="list-disc pl-4 text-neutral-600 dark:text-neutral-400">
              <li>{t("freeScreening.content.concern_1")}</li>
              <li>{t("freeScreening.content.concern_2")}</li>
              <li>{t("freeScreening.content.concern_3")}</li>
              <li>{t("freeScreening.content.concern_4")}</li>
              <li>{t("freeScreening.content.concern_5")}</li>
              <li>{t("freeScreening.content.concern_6")}</li>
            </ul>
            <p className="font-bold text-neutral-700 dark:text-neutral-200">
              {t("freeScreening.content.call_to_action")}
            </p>
            {/* <p>{t("freeScreening.description")}</p> */}
          </>
        );
      },
    },
    {
      description: t("fullAssessment.description"),
      title: t("fullAssessment.title"),
      icon: <FaClipboardList className="size-6 text-white" />,
      src: "/hero-speech-therapy.avif",
      ctaText: "Book Now",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <>
            <h3 className="font-bold text-neutral-700">
              {t("fullAssessment.content.title")}
            </h3>
            <ul className="list-disc pl-4 text-neutral-600 space-y-3">
              <li>{t("fullAssessment.content.concern_1")}</li>
              <li>{t("fullAssessment.content.concern_2")}</li>
              <li>{t("fullAssessment.content.concern_3")}</li>
              <li>{t("fullAssessment.content.concern_4")}</li>
              <li>{t("fullAssessment.content.concern_5")}</li>
              <li>{t("fullAssessment.content.concern_6")}</li>
              <li>{t("fullAssessment.content.concern_7")}</li>
              <li>{t("fullAssessment.content.concern_8")}</li>
            </ul>
            <p className="font-bold text-neutral-700 dark:text-neutral-200">
              {t("fullAssessment.content.call_to_action")}
            </p>
            {/* <p>{t("freeScreening.description")}</p> */}
          </>
        );
      },
    },
    {
      description: t("languageTherapy.description"),
      title: t("languageTherapy.title"),
      icon: <LuMessageSquareText className="size-6 text-white" />,
      src: "/hero-speech-therapy.avif",
      ctaText: "Book Now",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <>
            <h3 className="font-bold text-neutral-700">
              {t("languageTherapy.content.title")}
            </h3>
            <ul className="list-disc pl-4 text-neutral-600 space-y-2">
              <li>{t("languageTherapy.content.concern_1")}</li>
              <li>{t("languageTherapy.content.concern_2")}</li>
              <li>{t("languageTherapy.content.concern_3")}</li>
              <li>{t("languageTherapy.content.concern_4")}</li>
              <li>{t("languageTherapy.content.concern_5")}</li>
              <li>{t("languageTherapy.content.concern_6")}</li>
            </ul>

            <h3 className="font-bold text-neutral-700">
              {t("languageTherapy.content.title2")}
            </h3>
            <ul className="list-disc pl-4 text-neutral-600 space-y-2">
              <li>{t("languageTherapy.content.concern2_1")}</li>
              <li>{t("languageTherapy.content.concern2_2")}</li>
            </ul>

            <h3 className="font-bold text-neutral-700">
              {t("languageTherapy.content.title3")}
            </h3>
            <ul className="list-disc pl-4 text-neutral-600 space-y-2">
              <li>{t("languageTherapy.content.concern3_1")}</li>
              <li>{t("languageTherapy.content.concern3_2")}</li>
              <li>{t("languageTherapy.content.concern3_3")}</li>
              <li>{t("languageTherapy.content.concern3_4")}</li>
            </ul>
            {/* <p>{t("freeScreening.description")}</p> */}
          </>
        );
      },
    },
    {
      description: t("socialCommunicationTherapy.description"),
      title: t("socialCommunicationTherapy.title"),
      icon: <FaUsers className="size-6 text-white" />,
      src: "/hero-speech-therapy.avif",
      ctaText: "Book Now",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <>
            <h3 className="font-bold text-neutral-700">
              {t("socialCommunicationTherapy.content.title")}
            </h3>
            <ul className="list-disc pl-4 text-neutral-600 space-y-2">
              <li>{t("socialCommunicationTherapy.content.concern_1")}</li>
              <li>{t("socialCommunicationTherapy.content.concern_2")}</li>
              <li>{t("socialCommunicationTherapy.content.concern_3")}</li>
              <li>{t("socialCommunicationTherapy.content.concern_4")}</li>
              <li>{t("socialCommunicationTherapy.content.concern_5")}</li>
              <li>{t("socialCommunicationTherapy.content.concern_6")}</li>
            </ul>
            {/* <p>{t("freeScreening.description")}</p> */}
          </>
        );
      },
    },
    {
      description: t("articulationTherapy.description"),
      title: t("articulationTherapy.title"),
      icon: <FaMicrophoneAlt className="size-6 text-white" />,
      src: "/hero-speech-therapy.avif",
      ctaText: "Book Now",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <>
            <h3 className="font-bold text-neutral-700">
              {t("articulationTherapy.content.title")}
            </h3>
            <ul className="list-disc pl-4 text-neutral-600 space-y-2">
              <li>{t("articulationTherapy.content.concern_1")}</li>
              <li>{t("articulationTherapy.content.concern_2")}</li>
            </ul>
            {/* <p>{t("freeScreening.description")}</p> */}
          </>
        );
      },
    },
    {
      description: t("professionalConsultation.description"),
      title: t("professionalConsultation.title"),
      icon: <FaGraduationCap className="size-6 text-white" />,
      src: "/hero-speech-therapy.avif",
      ctaText: "Book Now",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return <p></p>;
      },
    },
  ];

  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden overflow-y-auto"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={100}
                  height={100}
                  src={active.src || "/placeholder.svg"}
                  alt={active.title}
                  className="w-full h-40 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-primary text-white"
                    rel="noreferrer"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base max-h-[300px] overflow-y-auto pb-10 flex flex-col items-start gap-4 dark:text-neutral-400 [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid gap-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 mx-auto lg:gap-x-8">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="relative flex justify-center items-center cursor-pointer"
          >
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-primary rounded-lg dark:bg-gray-200"></span>
            <div className="relative flex flex-col gap-3 h-[245px] p-6 dark:bg-gray-800 border-2 border-primary dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500 bg-secondary">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="flex items-center justify-start gap-4"
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-primary/80 text-white">
                  <FaStethoscope className="size-6 text-white" />
                </div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className=" relative text-2xl font-semibold text-primary h-16 items-center justify-center flex"
                >
                  {card.title}
                </motion.h3>
              </motion.div>
              <div className="flex flex-col gap-2">
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-body-color dark:text-dark-6 text-primary h-24"
                >
                  {card.description}
                </motion.p>
                <ReadMoreButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(card);
                  }}
                />
              </div>
            </div>
            {/* <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button> */}
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
