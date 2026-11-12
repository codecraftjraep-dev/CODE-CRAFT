import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-20 flex min-h-[65vh] w-full items-center justify-center overflow-hidden bg-[#F5F8FF] px-5 py-24 sm:px-8"
    >
      {/* Expanding Circle */}
      <div
        className={`about-circle ${isVisible ? "about-circle-active" : ""}`}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span
          className={`text-xs font-bold tracking-[0.3em] transition-colors duration-700 ${
            isVisible ? "text-white/80" : "text-[#3376FF]"
          }`}
        >
          THE CODECRAFT DIFFERENCE
        </span>

        <h2
          className={`mt-7 text-3xl font-black leading-tight tracking-tight transition-colors duration-700 sm:text-5xl lg:text-6xl ${
            isVisible ? "text-white" : "text-[#06193E]"
          }`}
        >
          CodeCraft gives you
          <span
            className={`block transition-colors duration-700 ${
              isVisible ? "text-white" : "text-[#3376FF]"
            }`}
          >
            technology to grow.
          </span>
        </h2>

        <p
          className={`mx-auto mt-7 max-w-2xl text-sm leading-7 transition-colors duration-700 sm:text-lg sm:leading-8 ${
            isVisible ? "text-white/80" : "text-slate-500"
          }`}
        >
          From custom websites to intelligent systems, we create digital
          solutions that simplify your work and move your business forward.
        </p>
      </div>
    </section>
  );
}
