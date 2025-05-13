import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
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
const ContactLink = ({ href, icon, label, ariaLabel }: ContactItem) => {
  const isGoogleMaps = href.includes("google.com/maps");
  const target = isGoogleMaps ? "_blank" : "_self";
  // const rel = a ? "noopener noreferrer" : undefined;
  return (
    <Link
      href={href}
      className="flex items-center"
      target={target}
      aria-label={ariaLabel}
    >
      <span className="border-b-4 border-l-2 border-[#7248d4] md:border-transparent block p-2 rounded-full bg-primary text-white md:text-gray-900 transition-all duration-200 ease-in-out transform md:pointer-events-none hover:scale-110 active:scale-95 md:bg-transparent md:hover:bg-gray-700 md:p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        {icon}
      </span>
      {label && <span className="hidden md:block">{label}</span>}
    </Link>
  );
};

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
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "1136 Centre St, Thornhill, ON L4J 3M8"
  )}`;
  const contactItems: ContactItem[] = [
    {
      href: "tel:+4162746729",
      icon: <FaPhoneSquareAlt className="h-5 w-5 text-white md:text-primary" />,
      label: "+1 (416) 274-6729",
      ariaLabel: "Call us +1 (416) 274-6729",
    },
    {
      href: "mailto:info@talkandbloom.ca",
      icon: <IoIosMail className="h-5 w-5 text-white md:text-primary" />,
      label: "info@talkandbloom.ca",
      ariaLabel: "Send an email to info@talkandbloom.ca",
    },
    {
      href: googleMapsUrl,
      icon: <IoLocation className="h-5 w-5 text-white md:text-primary" />,
      label: "1136 Centre St, Thornhill, ON. Unit 206",
      ariaLabel: "View our office address on Google Maps",
    },
    {
      href: "#",
      icon: <IoMdTime className="h-5 w-5 text-white md:text-primary" />,
      label: "Office hours by appointment",
      ariaLabel: "Office hours by appointment",
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
    <div className="relative z-40 bg-secondary text-primary">
      <div className="flex justify-between items-center text-sm px-3">
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
