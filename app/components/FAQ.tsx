"use client";

import React, { useState } from "react";

// Interfaz para los ítems del acordeón
interface AccordionItemData {
  header: string;
  text: string;
}

// Datos de los ítems del acordeón
const accordionData: AccordionItemData[] = [
  {
    header: "What is speech therapy?",
    text: "Speech therapy helps improve communication skills like speaking, understanding, fluency, and voice. It’s useful for articulation issues, stuttering, or developmental disorders.",
  },
  {
    header: "Who does a speech therapist work with?",
    text: "We work with children (speech delays, autism), adults (post-stroke, Parkinson’s), and individuals with specific disorders like stuttering or dysphonia.",
  },
  {
    header: "How do I know if my child needs speech therapy?",
    text: "Common signs include: not babbling by 12 months, trouble pronouncing words or following instructions, and delays compared to peers. Early evaluation is key.",
  },
  {
    header: "How long does treatment last?",
    text: "It depends on the case. Some improve in weeks, others need months or years. Progress varies based on age, severity, and session frequency.",
  },
  {
    header: "What happens during a session?",
    text: "Sessions include an initial assessment, interactive activities (games, exercises), personalized techniques, and homework tasks. Sessions are practical and fun, especially for kids.",
  },
  {
    header: "Is speech therapy covered by insurance?",
    text: "It depends on your insurance and medical condition. Some cover part of the costs, especially for diagnosed medical issues. Check with your provider for details.",
  },
];

// Componente reutilizable para cada ítem del acordeón
const AccordionItem: React.FC<AccordionItemData> = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-secondary/75 p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button className="faq-btn flex w-full text-left" onClick={handleToggle}>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-[#7248d4] text-primary dark:bg-white/5">
          <svg
            className={`fill-white stroke-white duration-1000 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>
        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>
      <div
        className={`pl-[62px] overflow-hidden transition-all duration-1000 ease-in-out ${
          active ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};

export default function Accordion() {
  return (
    <section
      className="relative z-20 overflow-hidden bg-white px-4 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
      id="faq"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-10">
              <span className="mb-5 block text-2xl md:text-4xl font-semibold text-primary underline underline-offset-8 decoration-2">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-[40px]/[48px]">
                Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6 text-primary">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            {accordionData.slice(0, 3).map((item, index) => (
              <AccordionItem key={index} {...item} />
            ))}
          </div>
          <div className="w-full px-4 lg:w-1/2">
            {accordionData.slice(3).map((item, index) => (
              <AccordionItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </section>
  );
}
