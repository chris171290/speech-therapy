"use client";

import React, { useState, useCallback, memo, useMemo } from "react";
import { useTranslations } from "next-intl";

// Interfaz para los ítems del acordeón
interface AccordionItemData {
  header: string;
  text: string;
}

// Componente reutilizable para cada ítem del acordeón
const AccordionItem: React.FC<AccordionItemData & { id: string }> = memo(
  ({ header, text, id }) => {
    const [active, setActive] = useState(false);

    const handleToggle = useCallback(() => {
      setActive((prev) => !prev);
    }, []);

    return (
      <div className="mb-8 w-full rounded-lg bg-secondary/75 p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8">
        <button
          className="faq-btn flex w-full text-left"
          onClick={handleToggle}
          aria-expanded={active}
          aria-controls={`faq-content-${id}`}
        >
          <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-[#7248d4] text-primary">
            <svg
              className={`fill-white stroke-white transition-transform duration-700 ease-in-out ${
                active ? "rotate-180" : ""
              }`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z" />
            </svg>
          </div>
          <div className="w-full">
            <h4 className="mt-1 text-lg font-semibold text-dark md:truncate">
              {header}
            </h4>
          </div>
        </button>
        <div
          id={`faq-content-${id}`}
          className={`pl-[62px] overflow-hidden transition-all duration-700 ease-in-out ${
            active ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!active}
        >
          <p className="py-3 text-base leading-relaxed text-body-color">
            {text}
          </p>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default function FAQ() {
  const t = useTranslations("faq");
  // Datos de los ítems del acordeón - mover fuera del componente con useMemo
  const accordionData: AccordionItemData[] = useMemo(
    () => [
      {
        header: t("question1.question"),
        text: t("question1.answer"),
      },
      {
        header: t("question2.question"),
        text: t("question2.answer"),
      },
      {
        header: t("question3.question"),
        text: t("question3.answer"),
      },
      {
        header: t("question4.question"),
        text: t("question4.answer"),
      },
      {
        header: t("question5.question"),
        text: t("question5.answer"),
      },
      {
        header: t("question6.question"),
        text: t("question6.answer"),
      },
    ],
    []
  );

  // Dividir los datos en dos columnas de manera memoizada
  const { leftColumnItems, rightColumnItems } = useMemo(() => {
    const midpoint = Math.ceil(accordionData.length / 2);
    return {
      leftColumnItems: accordionData.slice(0, midpoint),
      rightColumnItems: accordionData.slice(midpoint),
    };
  }, [accordionData]);

  return (
    <section
      className="relative z-20 overflow-hidden bg-white px-4 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-10">
              <span
                id="faq-heading"
                className="mb-5 block text-2xl md:text-4xl font-semibold text-primary underline underline-offset-8 decoration-2"
              >
                {t("title")}
              </span>
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-[40px]/[48px]">
                {t("subtitle")}
              </h2>
              <p className="text-base text-primary">{t("description")}</p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            {leftColumnItems.map((item, index) => (
              <AccordionItem
                key={`left-${index}`}
                id={`left-${index}`}
                header={item.header}
                text={item.text}
              />
            ))}
          </div>
          <div className="w-full px-4 lg:w-1/2">
            {rightColumnItems.map((item, index) => (
              <AccordionItem
                key={`right-${index}`}
                id={`right-${index}`}
                header={item.header}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
