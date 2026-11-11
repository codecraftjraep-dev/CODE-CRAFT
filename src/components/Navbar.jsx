
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Code2
} from "lucide-react";

import logo from "../assets/codecraft-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Technologies", href: "#technologies" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map(({ href }) => document.querySelector(href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile navigation after clicking a link
  const handleNavigation = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">

        {/* LOGO */}
        <a
          href="#home"
          onClick={() => handleNavigation("home")}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="CodeCraft - Build Develop Innovate"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() =>
                handleNavigation(link.href.replace("#", ""))
              }
              className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
                activeSection === link.href.replace("#", "")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}

              {activeSection === link.href.replace("#", "") && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-600" />
              )}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          onClick={() => handleNavigation("contact")}
          className="hidden items-center gap-2 rounded-xl bg-[#06193E] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600 lg:inline-flex"
        >
          Let's Talk
          <ArrowUpRight size={17} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#06193E] transition hover:bg-blue-50 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl space-y-1 px-6 py-5">

          {navLinks.map((link, index) => {
            const section = link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavigation(section)}
                style={{ transitionDelay: `${index * 30}ms` }}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  activeSection === section
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                {link.name}

                {activeSection === section && (
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => handleNavigation("contact")}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </a>
        </nav>

        <div className="border-t border-slate-100 px-6 py-4">
          <p className="text-center text-[10px] font-bold tracking-[0.25em] text-slate-400">
            BUILD · DEVELOP · INNOVATE
          </p>
        </div>
      </div>
    </header>
  );
}
