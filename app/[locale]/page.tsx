import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import LogoCarousel from "../components/ui/LogoCarousel";
import CTA from "../components/CTA";
import Floating from "../components/Floating";

// import { useTranslations } from "next-intl";

export default function Home() {
  // const t = useTranslations("about");
  return (
    <main className="bg-secondary">
      {/* <h1>{t("title")}</h1> */}
      <div className="relative overflow-hidden lg:overflow-visible" id="home">
        <TopBar />
        <Header />
        <Hero />
        <div className="bg-white h-[1.8rem]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
            className="w-full h-10"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
              fill="#B2B8FF"
              fillOpacity="1"
            ></path>
          </svg>
        </div>
        <div className="bg-white h-[5rem] md:h-[9rem]">
          <LogoCarousel />
        </div>
      </div>
      <Floating />
      <AboutUs />
      <Services />
      <Testimonials />
      <CTA />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
