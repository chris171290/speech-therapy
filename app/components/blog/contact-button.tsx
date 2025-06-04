"use client";

import { MouseEvent } from "react";
import { FaVideo } from "react-icons/fa";

export default function ContactButton({
  text = "Contact Us",
}: {
  text?: string;
}) {
  const handleScrollToContact = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href="#contact"
      className="text-sm truncate rounded-xl font-black tracking-wider relative inline-flex group items-center justify-center py-1 px-1 md:px-3.5 md:py-2 md:m-1 md:text-base cursor-pointer border-b-4 border-l-2 active:scale-105 transition-all duration-300 ease-out active:shadow-none shadow-lg bg-primary border-[#7248d4] text-white"
      onClick={handleScrollToContact}
    >
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded group-hover:w-full group-hover:h-10 opacity-10"></span>
      <FaVideo className="mr-2 text-center" aria-hidden="true" />
      <span className="relative">{text}</span>
    </a>
  );
}
