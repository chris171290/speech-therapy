"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlSpeech } from "react-icons/sl";
import LanguageSwitch from "./ui/LanguageSwitch";

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
              className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900"
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
              <a
                className="rounded-md bg-primary text-white font-extrabold hover:bg-tertiary p-2 py-1 lg:text-xl text-base shadow-sm truncate [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]"
                href="#"
              >
                Free Consultation
              </a>

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
            className="md:hidden mt-4"
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
