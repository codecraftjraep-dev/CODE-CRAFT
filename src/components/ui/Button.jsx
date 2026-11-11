
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Code2, Minus, Square, X } from "lucide-react";

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const section = document.getElementById("home");

        if (section) {
          const distance = section.offsetHeight - window.innerHeight;
          const progress = distance > 0
            ? Math.min(Math.max(-section.getBoundingClientRect().top / distance, 0), 1)
            : 0;

          setScrollProgress(progress);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blur = scrollProgress * 12;
  const opacity = 1 - scrollProgress * 0.75;

  return (
    <section id="home" className="relative h-[180vh] w-full">
      <div
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-5 md:px-8"
        style={{
          backgroundColor: `rgb(
            ${Math.round(255 - scrollProgress * 235)},
            ${Math.round(255 - scrollProgress * 211)},
            ${Math.round(255 - scrollProgress * 59)}
          )`,
        }}
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] transition-colors"
            style={{
              backgroundColor: `rgba(0, 99, 236, ${0.08 + scrollProgress * 0.35})`,
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(#0063EC 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* Main hero content and floating screens */}
        <div
          className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center transition-none"
          style={{
            filter: `blur(${blur}px)`,
            opacity,
            transform: `scale(${1 - scrollProgress * 0.04})`,
          }}
        >
          {/* Top-left browser screen */}
          <div className="floating-screen-left absolute -left-2 -top-36 hidden w-[260px] rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-2xl shadow-blue-950/10 lg:block xl:-left-4">
            <div className="flex items-center justify-between border-b border-slate-100 px-2 py-2">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
              <span className="text-[9px] font-medium text-slate-400">codecraft.dev</span>
              <div className="flex gap-1 text-slate-300">
                <Minus size={11} />
                <Square size={9} />
                <X size={11} />
              </div>
            </div>

            <div className="relative h-[125px] overflow-hidden rounded-b-lg bg-slate-50 p-3">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-5 w-5 rounded-md bg-blue-600" />
                <div className="h-2 w-16 rounded bg-slate-200" />
                <div className="ml-auto h-4 w-12 rounded bg-blue-100" />
              </div>

              <div className="space-y-2">
                <div className="h-2 w-3/4 rounded bg-slate-200" />
                <div className="h-2 w-1/2 rounded bg-slate-200" />
                <div className="mt-3 flex gap-2">
                  <div className="h-12 flex-1 rounded-md bg-blue-100" />
                  <div className="h-12 flex-1 rounded-md bg-slate-200" />
                </div>
              </div>

              <div className="sample-cursor absolute left-5 top-8 z-10">
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                  <path d="M2 1L15 13L9 14L12 20L9 21L6 15L2 19V1Z" fill="#0063EC" stroke="white" strokeWidth="1.2" />
                </svg>
                <span className="ml-3 rounded bg-blue-600 px-2 py-1 text-[8px] font-semibold text-white shadow">
                  CodeCraft
                </span>
              </div>
            </div>
          </div>

          {/* Right typing screen */}
          <div className="floating-screen-right absolute -right-2 -top-28 hidden w-[270px] overflow-hidden rounded-xl border border-white/10 bg-[#06193E] text-left shadow-2xl shadow-blue-950/20 lg:block xl:-right-4">
            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
              <span className="ml-2 text-[10px] text-blue-200">terminal — codecraft</span>
            </div>

            <div className="min-h-[155px] p-4 font-mono text-[10px] leading-6">
              <p className="text-slate-500">$ npm run build</p>
              <p className="text-green-400">✓ Compiling project...</p>
              <p className="text-green-400">✓ Optimizing assets...</p>
              <p className="text-blue-300">✓ Building digital solutions</p>
              <div className="mt-2 flex items-center gap-1 text-white">
                <span className="text-blue-400">codecraft</span>
                <span className="typing-command" />
                <span className="h-3 w-1 animate-pulse bg-blue-400" />
              </div>
            </div>
          </div>

          {/* Center content */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-700">
              DIGITAL SOLUTIONS STUDIO
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-[#06193E] sm:text-6xl md:text-7xl lg:text-8xl">
            Ideas into
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              digital impact.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            We design and develop innovative digital solutions that help
            businesses simplify processes, solve problems, and achieve more
            through technology.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Start a Project
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-7 py-4 font-semibold text-[#06193E] transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
            >
              Explore Services
              <ArrowDown size={17} />
            </a>
          </div>

          <div className="mt-14 flex items-center gap-3 text-[#06193E]">
            <Code2 size={20} className="text-blue-600" />
            <span className="text-sm font-semibold tracking-wide">
              BUILD. DEVELOP. INNOVATE.
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          style={{ opacity: 1 - scrollProgress }}
        >
          <span className="text-[9px] font-bold tracking-[0.3em] text-slate-500">
            SCROLL TO EXPLORE
          </span>
          <div className="h-8 w-[1px] overflow-hidden bg-slate-300">
            <div className="scroll-indicator-line h-3 w-full bg-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
