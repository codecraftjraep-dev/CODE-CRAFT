
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

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

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <IntroSection />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <ProcessSection />
      {/* <TechnologiesSection /> */}
      <CTASection />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
