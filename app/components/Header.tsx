"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LanguageSwitch from "./ui/LanguageSwitch";
import { FaVideo } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Logo } from "./logo";

// Interfaz para los ítems del menú de navegación
interface NavItem {
  href: string;
  label: string;
  selected: boolean;
  origins?: string[]; // Orígenes donde este ítem debe mostrarse
}

// Props para el componente Header
interface HeaderProps {
  origin?: "home" | "blog" | "blogpost"; // Origen para filtrar los ítems
}

export default function Header({ origin = "home" }: HeaderProps) {
  const t = useTranslations("home");

  // Datos de los ítems del menú de navegación con orígenes permitidos
  const allNavItems: NavItem[] = [
    {
      href: "#home",
      label: t("navbar.home"),
      selected: true,
      origins: ["home"],
    },
    {
      href: "#about",
      label: t("navbar.about"),
      selected: false,
      origins: ["home"],
    },
    {
      href: "#services",
      label: t("navbar.services"),
      selected: false,
      origins: ["home"],
    },
    {
      href: "#testimonials",
      label: t("navbar.testimonials"),
      selected: false,
      origins: ["home"],
    },
    {
      href: "#blog",
      label: t("navbar.blog"),
      selected: false,
      origins: ["home"],
    },
    {
      href: "#faq",
      label: t("navbar.faq"),
      selected: false,
      origins: ["home"],
    },
    {
      href: "#contact",
      label: t("navbar.contact"),
      selected: false,
      origins: ["home"],
    },
    // Elementos específicos para blog y blogpost
    {
      href: "/en",
      label: "Home",
      selected: false,
      origins: ["blog", "blogpost"],
    },
    {
      href: "/en/blog",
      label: "Post List",
      selected: false,
      origins: ["blogpost"],
    },
    {
      href: "#contact",
      label: t("navbar.contact"),
      selected: false,
      origins: ["blog", "blogpost"],
    },
  ];

  // Filtrar los ítems según el origen
  const initialNavItems = useMemo(() => {
    return allNavItems
      .filter((item) => !item.origins || item.origins.includes(origin))
      .map((item, index) => ({
        ...item,
        selected: index === 0, // El primer ítem después del filtro será seleccionado por defecto
      }));
  }, [origin, t]);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>(initialNavItems);

  // Actualizamos los navItems cuando cambia el origen
  useEffect(() => {
    setNavItems(initialNavItems);
  }, [initialNavItems]);

  // Función para manejar la selección de un ítem, memorizada para evitar recreaciones
  const handleSelect = useCallback((index: number) => {
    setNavItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        selected: i === index,
      }))
    );
  }, []);

  // Determinar si es una URL completa o un ancla
  const isExternalLink = (href: string) => {
    return !href.startsWith("#");
  };

  // Efecto para detectar el scroll y ajustar el estado
  useEffect(() => {
    // Solo activar la observación de secciones en la página principal
    if (origin === "home") {
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
            if (active !== -1) {
              handleSelect(active);
            }
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      // Observar solo las secciones con anclas #
      navItems.forEach(({ href }) => {
        if (href.startsWith("#")) {
          const section = document.querySelector(href);
          if (section) observer.observe(section);
        }
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [navItems, handleSelect, origin]);

  // Efecto para el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll(); // Inicializar el estado

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Botón de menú memorizado
  const mobileMenuButton = useMemo(
    () => (
      <button
        className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    ),
    [isOpen]
  );

  // Cálculo de la clase de header basada en el estado de scroll
  const headerClass = useMemo(
    () => `
    fixed left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out
    ${
      isScrolled
        ? "top-0 shadow-md bg-white"
        : "top-11 sm:top-11 md:top-9 lg:top-9"
    }
  `,
    [isScrolled]
  );

  return (
    <header className={headerClass}>
      <div className="mx-auto max-w-screen-xl px-1 py-1.5 transition-all duration-500 ease-in-out">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex gap-2 items-center px-1">
            <Logo size="lg" />
          </div>

          {/* Menú de navegación */}
          <div className="lg:gap-6 md:flex md:items-center md:gap-3">
            <nav aria-label="Main navigation" className="hidden md:block">
              <ul className="flex items-center md:text-sm md:gap-3 lg:gap-6 lg:text-base lg:font-medium">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      href={item.href}
                      label={item.label}
                      selected={item.selected}
                      onClick={() => handleSelect(index)}
                      isExternal={isExternalLink(item.href)}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Separador y botones adicionales */}

            <div
              className="border-l border-gray-400/50 h-8 mx-1 hidden md:block"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2 justify-center md:gap-4">
              {/* Botón de consulta gratuita - Solo mostrar en home y blog */}

              <a
                href="#contact"
                className="text-sm truncate rounded-xl font-black tracking-wider relative inline-flex group items-center justify-center py-1 px-1 md:px-3.5 md:py-2 md:m-1 md:text-base cursor-pointer border-b-4 border-l-2 active:scale-105 transition-all duration-300 ease-out active:shadow-none shadow-lg bg-primary border-[#7248d4] text-white"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("contact");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 40,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded group-hover:w-full group-hover:h-10 opacity-10"></span>
                <FaVideo className="mr-2 text-center" aria-hidden="true" />
                <span className="relative">{t("navbar.cta")}</span>
              </a>

              {/* Selector de idioma */}
              {origin === "home" && <LanguageSwitch />}

              {/* Botón de menú móvil */}
              <div className="block md:hidden">{mobileMenuButton}</div>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <motion.nav
            className="md:hidden mt-4 p-4 bg-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                href={item.href}
                label={item.label}
                selected={item.selected}
                onClick={() => {
                  handleSelect(index);
                  setIsOpen(false); // Cerrar el menú después de seleccionar
                }}
                mobile
                isExternal={isExternalLink(item.href)}
              />
            ))}
          </motion.nav>
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
  isExternal = false,
}: {
  href: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  mobile?: boolean;
  isExternal?: boolean;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Para enlaces externos o rutas completas, comportamiento normal
    if (isExternal) {
      onClick();
      return;
    }

    // Para anclas, comportamiento con scroll suave
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
      className={`text-gray-900 font-semibold hover:text-primary transition duration-700 relative group ${
        mobile ? "block py-2" : ""
      }`}
      onClick={handleClick}
      aria-current={selected ? "page" : undefined}
    >
      {label}
      <span
        className={`absolute h-0.5 w-full bg-primary bottom-0 left-0 transform scale-x-0 transition duration-700 group-hover:scale-x-100 ${
          selected && "scale-x-100"
        }`}
        aria-hidden="true"
      ></span>
    </Link>
  );
}
