import Link from "next/link";
import { SlSpeech } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="w-full py-8 px-4 md:px-8 flex flex-col items-center bg-white">
      {/* Logo */}
      <div className="m-11 flex items-center justify-center">
        <div className="flex items-center">
          <SlSpeech className="h-10 w-10 mr-2 text-primary" />
          <Link
            href="/"
            className="text-4xl font-bold text-primary"
            aria-label="Talk and Bloom"
          >
            Talk &amp; Bloom
          </Link>
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
