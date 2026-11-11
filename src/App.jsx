import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroSection from "./sections/HeroSection";
import IntroSection from "./sections/IntroSection";
import ServicesSection from "./sections/ServicesSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ProcessSection from "./sections/ProcessSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import CTASection from "./sections/CTASection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <IntroSection />

        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <TechnologiesSection />
        <CTASection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
