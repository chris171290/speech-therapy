"use client";

import { useEffect, type RefObject } from "react";

export function useParallax(ref: RefObject<HTMLElement>, speed = 0.5) {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.scrollY;
        ref.current.style.transform = `translateY(${scrolled * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, speed]);
}
