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

export default function ExpandableCardDemo() {
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
                  width={200}
                  height={200}
                  src={active.src || "/placeholder.svg"}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
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
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
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
            <div className="relative flex flex-col gap-3 h-[200px] p-6 dark:bg-gray-800 border-2 border-primary dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500 bg-secondary">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="flex items-center justify-start gap-4"
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-primary/80 text-white">
                  <FaStethoscope className="size-6 text-white" />
                </div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className=" relative text-2xl font-semibold text-primary"
                >
                  {card.title}
                </motion.h3>
              </motion.div>
              <div className="">
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-body-color dark:text-dark-6 text-primary"
                >
                  {card.description}
                </motion.p>
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

const cards = [
  {
    description:
      "Confirm if your child is meeting age-appropriate milestones. Early identification can change your child's developmental path.",
    title: "Free Screening",
    icon: <FaStethoscope className="size-6 text-white" />,
    src: "/hero-speech-therapy.avif",
    ctaText: "Book Now",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Confirm if your child is meeting age-appropriate milestones. Early
          identification can change your child's developmental path.
        </p>
      );
    },
  },
  {
    description:
      "Comprehensive evaluation of your child's communication abilities, ideal if you have specific concerns or notice developmental delays.",
    title: "Full Assessment",
    icon: <FaClipboardList className="size-6 text-white" />,
    src: "/hero-speech-therapy.avif",
    ctaText: "Book Now",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Comprehensive evaluation of your child's communication abilities,
          ideal if you have specific concerns or notice developmental delays.
        </p>
      );
    },
  },
  {
    description:
      "Addresses difficulties in understanding and expressing language, including grammar, vocabulary, and sentence organization.",
    title: "Language Therapy",
    icon: <LuMessageSquareText className="size-6 text-white" />,
    src: "/hero-speech-therapy.avif",
    ctaText: "Book Now",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Addresses difficulties in understanding and expressing language,
          including grammar, vocabulary, and sentence organization.
        </p>
      );
    },
  },
  {
    description:
      "Improves social interaction skills, use of gestures, facial expressions, and ability to maintain conversations.",
    title: "Social Communication Therapy",
    icon: <FaUsers className="size-6 text-white" />,
    src: "/hero-speech-therapy.avif",
    ctaText: "Book Now",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Improves social interaction skills, use of gestures, facial
          expressions, and ability to maintain conversations.
        </p>
      );
    },
  },
  {
    description:
      "Helps correct difficulties in pronouncing sounds and words to improve speech clarity.",
    title: "Articulation Therapy",
    icon: <FaMicrophoneAlt className="size-6 text-white" />,
    src: "/hero-speech-therapy.avif",
    ctaText: "Book Now",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Helps correct difficulties in pronouncing sounds and words to improve
          speech clarity.
        </p>
      );
    },
  },
  {
    description:
      "Offers training and support to other professionals involved in a current client's care, including daycare and school visits.",
    title: "Professional Consultation",
    icon: <FaGraduationCap className="size-6 text-white" />,
    src: "/hero-speech-therapy.avif",
    ctaText: "Book Now",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Offers training and support to other professionals involved in a
          current client's care, including daycare and school visits.
        </p>
      );
    },
  },
];
