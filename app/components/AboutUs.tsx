"use client";

import { MdOutlineTaskAlt } from "react-icons/md";
import { CgAwards } from "react-icons/cg";
import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "./ui/Card";
import { LuLanguages } from "react-icons/lu";
import { GiBrain } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";

// Interfaz para los ítems de la lista
interface ListItem {
  title: string;
}
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function AboutUs() {
  // Datos de los ítems de la lista
  const listItems: ListItem[] = [
    { title: "Speech and language delays & disorders." },
    {
      title:
        "Autism Spectrum Disorder (ASD) & social communication challenges with all levels of ability.",
    },
    {
      title:
        "Executive Function (EF) difficulties & ADHD (Attention Deficit Hyperactivity Disorder.",
    },
  ];

  const features = [
    {
      icon: <GiTrophyCup className=" size-6 text-white" />,
      title: "Experience & Expertise",
      description: "Over two decades of hands-on experience",
    },
    {
      icon: <LuLanguages className="size-6 text-white" />,
      title: "Bilingual Services",
      description: "Full support in English & Spanish",
    },
    {
      icon: <GiBrain className="size-6 text-white" />,
      title: "Neurodiversity Affirming",
      description: "A welcoming, strengths-based approach",
    },
    {
      icon: <MdFamilyRestroom className="size-6 text-white" />,
      title: "Experience & Expertise",
      description: "Partnering with parents for real, lasting",
    },
  ];

  function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
      <Card className=" bg-transparent h-full transition-all duration-300 hover:shadow-lg border-[0.5px] hover:scale-105 border-primary">
        <CardHeader className="flex items-center justify-center pt-6">
          <div className="border-b-4 border-l-2 border-[#7248d4] w-10 h-10 inline-flex items-center justify-center rounded-full dark:bg-primary bg-primary text-white flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-primary text-xl">{description}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <section
      className="-mt-[1px] relative isolate overflow-hidden bg-secondary px-6 py-10 sm:py-24 lg:overflow-visible lg:px-0"
      id="about"
    >
      {/* Fondo SVG */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div> */}

      {/* Contenido principal */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Sección izquierda */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="mb-5 text-2xl font-semibold text-primary underline underline-offset-4 decoration-2">
                About Us
              </p>
              <h1 className="mt-4 text-2xl font-semibold tracking-tight text-pretty text-primary sm:text-[2.50rem]">
                Rebeca Schvartzman, SLP
              </h1>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-primary sm:text-[2.50rem]">
                reg. CASLPO
              </h1>
              <p className="mt-8 text-lg/7 text text-primary">
                Hi, I’m Beca!
                <br />
                <br />
                I’m a passionate, registered{" "}
                <strong>speech-language pathologist (SLP) </strong>
                with over <strong>25 years of experience</strong> helping
                children develop the communication skills they need to thrive. I
                am fully bilingual in <strong>English and Spanish</strong> and
                proudly provide services in both languages.
                <br />
                <br />
                Throughout my career, I’ve worked with children of{" "}
                <strong>diverse cultural and linguistic backgrounds</strong>,
                always striving to create an inclusive, supportive, and engaging
                environment for learning. I deeply respect each family’s unique
                experiences and tailor my approach to fit their child’s
                individual needs.
              </p>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="-mt-6 -ml-12 p-12 lg:sticky lg:top-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/aboutMe.png"
            className="w-[48rem] rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
          />
        </div>

        {/* Sección derecha */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-primary lg:max-w-lg">
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-pretty text-primary sm:text-[2.50rem]">
                How I Can Help
              </h2>
              <p className="mt-4 text-lg/7 font-semibold text text-primary">
                I specialize in assessing and treating:
              </p>

              {/* Lista de especialidades */}
              <ul role="list" className="mt-8 space-y-4 text-primary">
                {listItems.map((item, index) => (
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

              <p className="mt-8 text-lg/7 text text-primary">
                I believe in a <strong>holistic approach</strong> to learning-
                where strong foundational skills, emotional regulation, and
                sensory processing all play a role in a child’s ability to
                communicate and interact confidently.
              </p>
              <span className="block mt-8 text-primary italic">
                Your child’s voice matters—and together, we can make it heard.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className={`flex items-center justify-center my-8`}>
        <div className="flex-grow h-px bg-gradient-to-r from-transparent to-primary" />
        <div className="mx-4 w-4 h-4 bg-primary rotate-45" />
        <div className="flex-grow h-px bg-gradient-to-l from-transparent to-primary" />
      </div>
      {/* Why Work With Me? */}
      <div className="md:px-8">
        <div className="border-[0.8px] rounded-3xl border-primary bg-white p-5 mx-auto grid max-w-2xl grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none">
          <div className="flex items-center justify-center">
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-primary sm:text-[2.50rem]">
              Why Work With Me?
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-4 mx-auto lg:gap-x-8">
            {features.map((feature, index) => (
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
              Let’s help your child find their voice and build meaningful
              connections!
            </p>
            <a
              href="#_"
              className="text-base truncate rounded-xl font-extrabold tracking-wider relative inline-flex group items-center justify-center px-2 py-2 md:px-3.5 md:py-2 md:m-1 cursor-pointer border-b-4 border-l-2 active:scale-105 transition-all duration-300 ease-out active:shadow-none shadow-lg bg-primary border-[#7248d4] text-white"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded group-hover:w-full group-hover:h-10 opacity-10"></span>
              <span>Reach out today to start your journey</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
