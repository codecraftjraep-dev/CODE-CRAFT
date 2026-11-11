import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Monitor,
  Palette,
  Database,
  Smartphone,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites tailored to your business.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Custom Software",
    description:
      "Custom-built applications and management systems designed around your workflow.",
  },
  {
    icon: Palette,
    number: "03",
    title: "UI / UX Design",
    description:
      "Beautiful, intuitive, and user-centered interfaces that improve user experience.",
  },
  {
    icon: Database,
    number: "04",
    title: "Database Solutions",
    description:
      "Organized, secure, and scalable database architecture for your applications.",
  },
  {
    icon: Smartphone,
    number: "05",
    title: "Responsive Design",
    description:
      "Seamless digital experiences across desktops, tablets, and mobile devices.",
  },
  {
    icon: Settings,
    number: "06",
    title: "Maintenance & Support",
    description:
      "Technical assistance, system improvements, updates, and ongoing maintenance.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative z-30 flex h-screen w-full items-center justify-center overflow-hidden bg-white px-5 md:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div
          className={`mb-8 flex flex-col justify-between gap-4 transition-all duration-700 ease-out lg:flex-row lg:items-end ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-blue-600">
              WHAT WE DO
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#06193E] sm:text-5xl">
              Services built around
              <br />
              <span className="text-blue-600">your needs.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500 md:text-base">
            From simple websites to complex software systems, we provide
            practical digital solutions that help your business move forward.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                style={{
                  transitionDelay: visible ? `${400 + index * 150}ms` : "0ms",
                }}
                className={`group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 md:p-6 ${
                  visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-slate-300">
                    {service.number} / 06
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#06193E] md:text-xl">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all duration-300 group-hover:gap-4"
                >
                  Discuss this service
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
