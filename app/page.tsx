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

export default function Home() {
  return (
    <main className="bg-secondary">
      <div className="relative overflow-hidden lg:overflow-visible" id="home">
        <TopBar />
        <Header />
        {/* <Parallax /> */}
        <Hero />
        <div className="bg-white h-[8.5rem] mt-2">
          <LogoCarousel />
        </div>
      </div>
      <AboutUs />
      <Services />
      <Testimonials />
      <Blog />
      <FAQ />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
}
