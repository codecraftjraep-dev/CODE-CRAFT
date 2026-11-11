import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/codecraft-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Technologies", href: "#technologies" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerMode, setHeaderMode] = useState("top");
  const [activeSection, setActiveSection] = useState("home");

  const navigationTimer = useRef(null);
  const lastScrollY = useRef(0);

  const scrollToSection = (e, href) => {
    e.preventDefault();

    const target = document.getElementById(href.replace("#", ""));
    if (!target) return;

    clearTimeout(navigationTimer.current);

    setMenuOpen(false);
    window.history.replaceState(null, "", href);

    navigationTimer.current = setTimeout(() => {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;

      const offset = window.scrollY < targetPosition ? 24 : 88;

      window.scrollTo({
        top: Math.max(0, targetPosition - offset),
        behavior: "smooth",
      });
    }, 100);
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const difference = currentScrollY - lastScrollY.current;

        if (currentScrollY <= 20) {
          setHeaderMode("top");
        } else if (difference > 3) {
          setHeaderMode("hidden");
        } else if (difference < -3) {
          setHeaderMode("floating");
        }

        lastScrollY.current = currentScrollY;

        const sections = navLinks
          .map((link) => document.getElementById(link.href.replace("#", "")))
          .filter(Boolean);

        let current = "home";

        sections.forEach((section) => {
          if (section.getBoundingClientRect().top <= 120) {
            current = section.id;
          }
        });

        setActiveSection(current);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(navigationTimer.current);
    };
  }, []);

  const isTop = headerMode === "top";
  const isFloating = headerMode === "floating";
  const isVisible = headerMode !== "hidden";

  return (
    <header
      className={`fixed left-1/2 z-50 -translate-x-1/2 transition-[top,width,max-width,border-radius,background-color,border-color,box-shadow,opacity,visibility,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isTop
          ? "top-0 w-full max-w-none rounded-none border-transparent bg-white/80 shadow-none backdrop-blur-md"
          : "top-4 w-[calc(100%-2rem)] max-w-6xl rounded-2xl border border-white/50 bg-white/60 shadow-xl shadow-blue-950/10 backdrop-blur-2xl"
      } ${
        isVisible
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0"
      }`}
      style={{
        WebkitBackdropFilter: isFloating
          ? "blur(24px) saturate(180%)"
          : "blur(12px)",
        backdropFilter: isFloating ? "blur(24px) saturate(180%)" : "blur(12px)",
      }}
    >
      <nav
        className={`mx-auto flex items-center justify-between px-5 transition-[height,max-width,padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-8 ${
          isTop ? "h-[84px] max-w-7xl" : "h-[68px] max-w-6xl"
        }`}
      >
        {/* Logo and Brand */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <img
            src={logo}
            alt="CodeCraft Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              isTop ? "h-11" : "h-9"
            } group-hover:scale-105`}
          />

          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tight text-[#06193E]">
              Code<span className="text-blue-600">Craft</span>
            </span>

            <span className="mt-1 text-[8px] font-bold tracking-[0.2em] text-slate-400">
              BUILD · DEVELOP · INNOVATE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-50/80 hover:text-blue-600"
              }`}
            >
              {link.name}

              <span
                className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? "w-4" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact")}
          className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/30 lg:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[450px] border-t border-slate-200/50 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                activeSection === link.href.substring(1)
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
