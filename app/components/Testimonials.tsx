"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { ImageWithFallback } from "./ui/image";

// Define interfaces for type safety
interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
  stars?: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Gonzalez",
    role: "Mother of Carlos, 7 years old",
    text: "Therapy has done wonders for my son. His confidence in speaking has improved enormously and he now enjoys communicating with other children.",
    image: "/testimonial-avatar.avif",
    stars: 5,
  },
  {
    name: "Juan Perez",
    role: "Father of Ana, 5 years old",
    text: "The personalized approach really made the difference. We are very grateful for our daughter's progress and the constant support from the team.",
    image: "/testimonial-avatar.avif",
    stars: 5,
  },
  {
    name: "Laura Martinez",
    role: "Mother of Sofia, 6 years old",
    text: "We saw significant improvements in just a few weeks. The welcoming environment and dedicated staff made therapy a positive experience for our entire family.",
    image: "/testimonial-avatar.avif",
    stars: 5,
  },
  {
    name: "David Nguyen",
    role: "Father of Lily, 4 years old",
    text: "Rebeca's approach to speech therapy transformed my daughter's life. Within months, Lily went from struggling with basic sounds to speaking in full sentences with confidence. The warm environment makes her look forward to every session.",
    image: "/testimonial-avatar.avif",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Mother of Arjun, 8 years old",
    text: "Finding Rebeca's speech therapy center was the best thing that happened to our family. Arjun's stutter has improved dramatically, and he's now participating actively in class discussions. The personalized exercises to practice at home made all the difference.",
    image: "/testimonial-avatar.avif",
    stars: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Father of Emma, 6 years old",
    text: "We tried several therapists before coming to Rebeca's clinic. The difference was immediate - her patience and expertise created a space where Emma felt comfortable to practice and grow. After six months, teachers can't believe the transformation in her communication skills.",
    image: "/testimonial-avatar.avif",
    stars: 5,
  },
];

// Component for rendering star ratings - separated for better reusability
const StarRating = ({ rating = 5 }: { rating?: number }) => {
  return (
    <div className="flex justify-start gap-0.5 text-primary">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Single testimonial card component for better organization
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
        <div className="flex items-center gap-4">
          <ImageWithFallback
            alt={`${testimonial.name}'s avatar`}
            src={testimonial.image}
            width={56}
            height={56}
            className="size-14 rounded-full object-cover"
          />

          <div className="">
            <StarRating rating={testimonial.stars} />
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{testimonial.text}</p>
      </blockquote>
    </div>
  );
};

// Carousel navigation button component
const CarouselButton = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-primary shadow-md transition hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={
        direction === "prev" ? "Previous testimonial" : "Next testimonial"
      }
      style={{ [direction === "prev" ? "left" : "right"]: "1rem" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            direction === "prev"
              ? "M15.75 19.5L8.25 12l7.5-7.5"
              : "M8.25 4.5l7.5 7.5-7.5 7.5"
          }
        />
      </svg>
    </button>
  );
};

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-secondary py-16" id="testimonials" ref={ref}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-12"
          >
            {t("description")}
          </motion.h2>

          {/* Mobile Carousel View */}
          <div className="relative md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>

            <CarouselButton direction="prev" onClick={prevTestimonial} />
            <CarouselButton direction="next" onClick={nextTestimonial} />

            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    currentIndex === index ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid View */}
          <motion.div
            variants={containerVariants}
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
