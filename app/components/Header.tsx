"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlSpeech } from "react-icons/sl";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        // Ajusta este valor según la altura de tu TopBar
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 w-full z-50 bg-white opacity-90 transition-all duration-500 ease-in-out ${
        isScrolled ? "top-0 shadow-md" : "top-11 sm:top-11 md:top-9 lg:top-9 " // Ajusta este valor según la altura de tu TopBar
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-1.5 transition-all duration-500 ease-in-out">
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-2 items-center px-1">
            <SlSpeech className="text-xl md:text-4xl" />
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-gray-900"
            >
              Rebeca Schvartzman
            </Link>
          </div>

          <div className="lg:gap-6 md:flex md:items-center md:gap-3">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center lg:gap-10 text-base md:gap-3">
                <li>
                  <NavLink href="#about">About</NavLink>
                </li>
                <li>
                  <NavLink href="#services">Services</NavLink>
                </li>
                <li>
                  <NavLink href="#testimonials">Testimonials</NavLink>
                </li>
                <li>
                  <NavLink href="#blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink href="#faq">FAQ</NavLink>
                </li>
                <li>
                  <NavLink href="#contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <div className="border-l border-gray-400/50 h-8 mx-1 hidden md:block" />
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-primary text-white hover:bg-secondary hover:text-gray-500 px-5 py-2.5 lg:text-base text-sm font-medium shadow-sm"
                  href="#"
                >
                  Free Consultation
                </a>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="md:hidden mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <NavLink href="#about" mobile>
              About
            </NavLink>
            <NavLink href="#services" mobile>
              Services
            </NavLink>
            <NavLink href="#testimonials" mobile>
              Testimonials
            </NavLink>
            <NavLink href="#blog" mobile>
              Blog
            </NavLink>
            <NavLink href="#faq" mobile>
              FAQ
            </NavLink>
            <NavLink href="#contact" mobile>
              Contact
            </NavLink>
          </motion.div>
        )}
      </div>
    </header>
  );
}

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 40, // Adjust for header height
      behavior: "smooth",
    });
  }
};

function NavLink({
  href,
  children,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}) {
  return (
    <button
      // href={"#"}
      className={`font-semibold text-[#8770e3] hover:text-primary transition duration-500 ${
        mobile ? "block py-2" : ""
      }`}
      onClick={() => scrollTo(href.slice(1))}
    >
      {children}
    </button>
  );
}
