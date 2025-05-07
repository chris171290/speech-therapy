import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="w-full py-8 px-4 md:px-8 flex flex-col items-center bg-white">
      {/* Logo */}
      <div className="m-11 flex items-center justify-center">
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <Image
              src={"/logo/hor_logo.png"}
              alt="Company logo"
              width={500}
              height={100}
              priority={true} // Carga prioritaria para el logo
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mb-12">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-base lg:font-semibold text-primary">
          <li>
            <Link href="#about" className="hover:underline">
              {t("navigation.about")}
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:underline">
              {t("navigation.services")}
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:underline">
              {t("navigation.testimonials")}
            </Link>
          </li>
          <li>
            <Link href="#blog" className="hover:underline">
              {t("navigation.blog")}
            </Link>
          </li>
          <li>
            <Link href="#faq" className="hover:underline">
              {t("navigation.faq")}
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              {t("navigation.contact")}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Policies Links */}
      <div className="w-full max-w-4xl mb-8">
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <li>
            <a
              href={t("policies.privacyUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors hover:underline"
            >
              {t("policies.privacy") || "Privacy Policy"}
            </a>
          </li>
          <div
            className="border-l border-gray-400/50 h-6 mx-1 hidden md:block"
            aria-hidden="true"
          />
          <li>
            <a
              href={t("policies.termsUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors hover:underline"
            >
              {t("policies.terms") || "Terms of Service"}
            </a>
          </li>
          <div
            className="border-l border-gray-400/50 h-6 mx-1 hidden md:block"
            aria-hidden="true"
          />
          <li>
            <a
              href={t("policies.cookiesUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors hover:underline"
            >
              {t("policies.cookies") || "Cookies Policy"}
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright and Social Media */}
      <div className="mt-6 w-full flex flex-col md:flex-row justify-between items-center">
        <p className="text-base mb-4 md:mb-0 font-medium text-primary">
          {t("copyright")}
        </p>
        <div className="flex gap-4 text-primary">
          <Link href="https://facebook.com" aria-label="Facebook">
            <FaFacebookF className="h-6 w-6" />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn">
            <RiLinkedinBoxLine className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
