import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Parallax from "./components/Parallax";
import LogoCarousel from "./components/ui/LogoCarousel";
import CTA from "./components/CTA";
import { FaVideo } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-secondary">
      <div className="relative overflow-hidden lg:overflow-visible" id="home">
        <TopBar />
        {/* <div className="mx-4 flex flex-col sm:flex-row gap-4 w-auto">
          <a
            href="#_"
            className="flex-1 md:hidden text-base truncate rounded-xl font-extrabold tracking-wider relative inline-flex group items-center justify-center cursor-pointer border-b-4 border-l-2 active:scale-105 transition-all duration-300 ease-out active:shadow-none shadow-lg bg-primary border-[#D07468] text-white"
          >
            <span className="relative z-50 w-0 h-0 transition-all duration-300 ease-out bg-black rounded group-hover:w-full group-hover:h-10 opacity-10"></span>
            <FaVideo className="mr-2 text-center" />
            <span className="relative">Free Consultation</span>
          </a>
        </div> */}
        <Header />
        {/* <Parallax /> */}
        <Hero />
        <div className="bg-white h-[5rem] md:h-[9rem] mt-2">
          {/* <svg
            // id="visual"
            viewBox="0 0 900 60"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M0 32L12.5 30.7C25 29.3 50 26.7 75 26.7C100 26.7 125 29.3 150 30.3C175 31.3 200 30.7 225 34C250 37.3 275 44.7 300 48.2C325 51.7 350 51.3 375 44C400 36.7 425 22.3 450 19.3C475 16.3 500 24.7 525 25.7C550 26.7 575 20.3 600 17.8C625 15.3 650 16.7 675 20.5C700 24.3 725 30.7 750 29.5C775 28.3 800 19.7 825 16.8C850 14 875 17 887.5 18.5L900 20L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z"
              fill="#e1dad5"
              strokeLinecap="round"
              strokeLinejoin="miter"
            />
          </svg> */}
          <LogoCarousel />
        </div>
        {/* <div className="bg-white h-[5rem] md:h-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            transform="matrix(1,0,0,-1,0,0)"
            className="w-full h-auto block m-0 p-0"
          >
            <g fill="#e1dad5">
              <path
                d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
                opacity={0.5}
              />
              <path
                d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
                opacity={0.5}
              />
              <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z" />
            </g>
          </svg>
        </div> */}
      </div>
      <AboutUs />
      <Services />
      <Testimonials />
      <CTA />
      <Blog />
      <FAQ />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
}
