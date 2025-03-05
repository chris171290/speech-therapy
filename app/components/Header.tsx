"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlSpeech } from "react-icons/sl";
import LanguageSwitch from "./ui/LanguageSwitch";
import { FaVideo } from "react-icons/fa";

// Interfaz para los ítems del menú de navegación
interface NavItem {
  href: string;
  label: string;
  selected: boolean;
}

// Datos de los ítems del menú de navegación
const initialNavItems: NavItem[] = [
  { href: "#home", label: "Home", selected: true },
  { href: "#about", label: "About", selected: false },
  { href: "#services", label: "Services", selected: false },
  { href: "#testimonials", label: "Testimonials", selected: false },
  { href: "#blog", label: "Blog", selected: false },
  { href: "#faq", label: "FAQ", selected: false },
  { href: "#contact", label: "Contact", selected: false },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>(initialNavItems);

  // Efecto para detectar el scroll y ajustar el estado
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Umbral para considerar que una sección está activa
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const active = navItems.findIndex(
            (item) => item.href === `#${entry.target.id}`
          );
          handleSelect(active);
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observar todas las secciones relevantes
    navItems.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // Ajusta este valor según la altura de tu TopBar
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Función para manejar la selección de un ítem
  const handleSelect = (index: number) => {
    setNavItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        selected: i === index,
      }))
    );
  };

  return (
    <header
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "top-0 shadow-md bg-white"
          : "top-11 sm:top-11 md:top-9 lg:top-9" // Ajusta este valor según la altura de tu TopBar
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-1.5 transition-all duration-500 ease-in-out">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex gap-2 items-center px-1">
            <SlSpeech className="text-xl md:text-4xl" />
            <Link
              href="/"
              className="text-base md:text-xl lg:text-2xl font-bold text-gray-900"
            >
              Talk &amp; Bloom
            </Link>
          </div>

          {/* Menú de navegación */}
          <div className="lg:gap-6 md:flex md:items-center md:gap-3">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center md:text-sm md:gap-3 lg:gap-6 lg:text-base lg:font-medium">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      href={item.href}
                      label={item.label}
                      selected={item.selected}
                      onClick={() => handleSelect(index)}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Separador y botones adicionales */}
            <div className="border-l border-gray-400/50 h-8 mx-1 hidden md:block" />
            <div className="flex items-center gap-2 justify-center md:gap-4">
              {/* Botón de consulta gratuita */}
              {/* <a
                className="rounded-md bg-primary text-white font-extrabold hover:bg-tertiary p-2 py-1 lg:text-xl text-base shadow-sm truncate [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]"
                href="#"
              >
                Free Consultation
              </a> */}
              {/* <div className="flex justify-center items-center dark:bg-gray-200 min-w-full min-h-full">
                <div className="group p-5">
                  <button className="border-2 dark:bg-purple-500 dark:text-blue-800 dark:font-bold shadow-md drop-shadow-lg shadow-gray-400 dark:shadow-gray-500 p-5 rounded-full group-hover:bg-blue-500  group-hover:text-white group-hover:border-none group-hover:shadow-2xl group-hover:shadow-purple-700 group-hover:font-bold group-hover:translate-y-2 duration-500 group-hover:skew-x-6 group-hover:skew-y-3 ease-in-out">
                    Free Consultation
                  </button>
                  <div className="hidden absolute bg-slate-700 text-wrap border-white border-2 rounded text-white px-2 py-1 line-height-2 translate-y-5 translate-x-10 group-hover:block duration-500 ease-in dark:bg-gray-200 dark:text-gray-800">
                    You have hovered on me!
                  </div>
                </div>
              </div> */}
              <a
                href="#_"
                className="text-sm truncate rounded-xl font-black tracking-wider relative inline-flex group items-center justify-center py-1 px-1 md:px-3.5 md:py-2 md:m-1 md:text-base cursor-pointer border-b-4 border-l-2 active:scale-105 transition-all duration-300 ease-out active:shadow-none shadow-lg bg-primary border-[#D07468] text-white"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded group-hover:w-full group-hover:h-10 opacity-10"></span>
                <FaVideo className="mr-2 text-center" />
                <span className="relative">Free Consultation</span>
              </a>
              {/* <a
                href="#_"
                className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:scale-105 transition-all duration-300 ease-out active:shadow-none shadow-lg bg-gradient-to-tr from-primary to-accent border-[#D07468] text-white"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded group-hover:w-full group-hover:h-10 opacity-10"></span>
                <span className="relative">Free Consultation</span>
              </a> */}

              {/* Selector de idioma */}
              <LanguageSwitch />

              {/* Botón de menú móvil */}
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

        {/* Menú móvil */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 p-4 bg-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                href={item.href}
                label={item.label}
                selected={item.selected}
                onClick={() => handleSelect(index)}
                mobile
              />
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
}

// Componente NavLink reutilizable
function NavLink({
  href,
  label,
  selected,
  onClick,
  mobile = false,
}: {
  href: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  mobile?: boolean;
}) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40, // Ajusta para la altura del encabezado
        behavior: "smooth",
      });
    }
    onClick();
  };

  return (
    <Link
      href={href}
      className={`text-gray-900 hover:text-primary transition duration-700 relative group ${
        mobile ? "block py-2" : ""
      }`}
      onClick={scrollTo}
    >
      {label}
      <span
        className={`absolute h-0.5 w-full bg-primary bottom-0 left-0 transform scale-x-0 transition duration-700 group-hover:scale-x-100 ${
          selected && "scale-x-100"
        }`}
      ></span>
    </Link>
  );
}
