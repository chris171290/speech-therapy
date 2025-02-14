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

export default function Home() {
  return (
    <main className="bg-main">
      <div className="relative min-h-screen overflow-hidden">
        <TopBar />
        <Header />
        <Parallax />
        <Hero />
      </div>
      <AboutUs />
      {/* <Services /> */}
      <Testimonials />
      <Blog />
      {/* <FAQ /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
}
