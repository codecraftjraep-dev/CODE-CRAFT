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
        threshold: 0.1,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative z-30 flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:h-screen lg:py-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 flex flex-col gap-4 transition-all duration-700 ease-out sm:mb-10 lg:flex-row lg:items-end lg:justify-between ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] text-blue-600 sm:text-xs">
              WHAT WE DO
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#06193E] sm:mt-4 sm:text-5xl">
              Services built around
              <br className="hidden sm:block" />
              <span className="text-blue-600 sm:ml-2">your needs.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 lg:pb-1">
            From simple websites to complex software systems, we provide
            practical digital solutions that help your business move forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                style={{
                  transitionDelay: visible ? `${150 + index * 100}ms` : "0ms",
                }}
                className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-700 ease-out sm:p-5 lg:p-6 ${
                  visible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-6 opacity-0 lg:scale-95"
                } hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5`}
              >
                <div className="mb-4 flex items-center justify-between sm:mb-5">
                  <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white sm:p-3">
                    <Icon size={21} className="sm:h-6 sm:w-6" />
                  </div>

                  <span className="text-[10px] font-semibold tracking-widest text-slate-300 sm:text-xs">
                    {service.number} / 06
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#06193E] sm:text-lg lg:text-xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500 sm:mt-3 sm:text-sm">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-bold text-blue-600 transition-all duration-300 group-hover:gap-3 sm:mt-5 sm:text-sm"
                >
                  Discuss this service
                  <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
