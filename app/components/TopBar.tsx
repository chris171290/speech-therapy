import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Link from "next/link";

// Definimos una interfaz para los ítems de contacto
interface ContactItem {
  href: string;
  icon: JSX.Element;
  label?: string; // Opcional porque algunos ítems no tienen etiqueta
  ariaLabel: string;
}

// Definimos una interfaz para los ítems de redes sociales
interface SocialItem {
  href: string;
  icon: JSX.Element;
  ariaLabel: string;
}

// Componente reutilizable para los ítems de contacto
const ContactLink = ({ href, icon, label, ariaLabel }: ContactItem) => (
  <Link href={href} className="flex items-center" aria-label={ariaLabel}>
    <span className="border-b-4 border-l-2 border-[#7248d4] md:border-transparent block p-2 rounded-full bg-primary text-white md:text-gray-900 transition-all duration-200 ease-in-out transform md:pointer-events-none hover:scale-110 active:scale-95 md:bg-transparent md:hover:bg-gray-700 md:p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
      {icon}
    </span>
    {label && <span className="hidden md:block">{label}</span>}
  </Link>
);

// Componente reutilizable para los ítems de redes sociales
const SocialLink = ({ href, icon, ariaLabel }: SocialItem) => (
  <Link href={href} className="flex items-center" aria-label={ariaLabel}>
    <span className="border-b-4 border-l-2 border-[#7248d4] md:border-transparent block p-2 rounded-full bg-primary text-white md:text-gray-900 transition-all duration-200 ease-in-out transform md:pointer-events-none hover:scale-110 active:scale-95 md:bg-transparent md:hover:bg-gray-700 md:p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
      {icon}
    </span>
  </Link>
);

export default function TopBar() {
  // Datos de los ítems de contacto
  const contactItems: ContactItem[] = [
    {
      href: "tel:+123456789",
      icon: <FaPhoneSquareAlt className="h-5 w-5 text-white md:text-primary" />,
      label: "+1 (234) 567-89",
      ariaLabel: "Call +1 (234) 567-89",
    },
    {
      href: "mailto:info@example.com",
      icon: <IoIosMail className="h-5 w-5 text-white md:text-primary" />,
      label: "info@example.com",
      ariaLabel: "Send an email to info@example.com",
    },
    {
      href: "#",
      icon: <IoLocation className="h-5 w-5 text-white md:text-primary" />,
      label: "123 Calle Principal, Ciudad",
      ariaLabel: "View our office address on Google Maps",
    },
  ];

  // Datos de los ítems de redes sociales
  const socialItems: SocialItem[] = [
    {
      href: "#",
      icon: <FaFacebookF className="h-5 w-5 text-white md:text-primary" />,
      ariaLabel: "Go to our Facebook page",
    },
    {
      href: "#",
      icon: <FaInstagram className="h-5 w-5 text-white md:text-primary" />,
      ariaLabel: "Go to our Instagram account",
    },
    {
      href: "#",
      icon: (
        <RiLinkedinBoxLine className="h-6 w-6 text-white md:text-primary" />
      ),
      ariaLabel: "Go to our LinkedIn account",
    },
  ];

  return (
    <div className="relative z-40 bg-secondary text-primary py-1 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
        {/* Renderizado dinámico de los ítems de contacto */}
        <div className="flex items-center space-x-4">
          {contactItems.map((item, index) => (
            <ContactLink key={index} {...item} />
          ))}
        </div>

        {/* Renderizado dinámico de los ítems de redes sociales */}
        <div className="flex items-center space-x-4">
          {socialItems.map((item, index) => (
            <SocialLink key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
