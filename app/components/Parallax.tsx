"use client";

import { useRef } from "react";
import { useParallax } from "../hooks/useParallax";
import Image from "next/image";

export default function Parallax() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useParallax(parallaxRef);

  return (
    <div ref={parallaxRef} className="absolute inset-0 z-0 h-[100vh] blur-sm">
      <Image
        // src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        src="/hero3.jpg"
        alt="Niño aprendiendo a hablar con bloques de letras"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-10 h-[150vh]" /> */}
    </div>
  );
}
