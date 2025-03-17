"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SVGLumnino from "./svg/Lumino";

// Interfaz para los datos de las reseñas
interface Review {
  rating: number;
  totalReviews: number;
}

// Datos del hero
const heroInfo = {
  title1: "Helping Kids Develop Speech, Language, and Social Skills",
  title2: "Through Play, Family Involvement, and Expert Guidance",
  description:
    "By focusing on communication, social interaction, and real-life skills to help children turn small steps into big milestones – while equipping families with the tools to support their child's growth at home and beyond.",
};

// Componente reutilizable para los íconos de estrellas
const StarIcon = () => (
  <svg
    className="size-4 text-gray-900 md:size-6"
    width="51"
    height="51"
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
      fill="currentColor"
    />
  </svg>
);

// Componente Button reutilizable
interface ButtonProps {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const Button = ({ href, variant, children, className = "" }: ButtonProps) => {
  const baseStyles =
    "text-sm truncate rounded-xl font-black tracking-wider relative inline-flex group items-center justify-center px-4 py-2 md:px-3.5 md:py-2 md:text-base cursor-pointer border-b-4 border-l-2 active:scale-105 transition-all duration-300 ease-out active:shadow-none shadow-lg";
  const variantStyles = {
    primary: "bg-primary border-[#7248d4] text-white",
    secondary: "bg-white border-[#7248d4] text-primary",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded group-hover:w-full group-hover:h-10 opacity-10"></span>
      <span className="flex items-center justify-center">{children}</span>
    </a>
  );
};

// Componente de flecha
const ArrowIcon = () => (
  <svg
    className="shrink-0 size-4 ml-1"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function Hero() {
  // Referencia para animación basada en visibilidad
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Datos de la reseña
  const reviewData: Review = {
    rating: 4.9,
    totalReviews: 137,
  };

  return (
    <section
      id="home"
      ref={ref}
      className="mt-16 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-5 gap-1"
    >
      <div className="border rounded-3xl border-primary p-3">
        <div className="relative p-4 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          {/* Sección izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-4"
          >
            <h1 className="block text-2xl font-bold text-primary lg:text-3xl lg:leading-tight">
              {heroInfo.title1} –{" "}
              <span className="text-primary">{heroInfo.title2}</span>
            </h1>
            <p className="mt-3 text-xl text-primary">{heroInfo.description}</p>
            <div className="mt-3 lg:mt-6 flex items-center gap-x-5">
              <div className="h-auto text-primary">
                <SVGLumnino
                  className="w-32 h-auto md:w-36"
                  aria-label="Lumino Logo"
                />
              </div>
              <div>
                <div
                  className="flex gap-x-1"
                  aria-label={`Rating: ${reviewData.rating} out of 5 stars`}
                >
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-900">
                  <span className="font-bold">{reviewData.rating}</span> /5 -
                  from {reviewData.totalReviews} reviews
                </p>
              </div>
            </div>
            <div className="flex mt-5 items-center justify-between sm:flex-row gap-2 md:gap-4 w-auto">
              <Button href="#contact" variant="primary" className="flex-1">
                Free Consultation
                <ArrowIcon />
              </Button>
              <Button href="#services" variant="secondary" className="flex-1">
                View more
                <ArrowIcon />
              </Button>
            </div>
          </motion.div>

          {/* Sección derecha (imagen) */}
          <motion.div
            className="lg:col-span-3 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              className="w-full max-w-2xl h-auto rounded-[2rem]"
              src="/hero-speech-therapy.avif"
              alt="Child during speech therapy session"
              width={650}
              height={550}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
