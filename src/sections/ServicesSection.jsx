
import {
  Code2,
  Monitor,
  Palette,
  Database,
  Smartphone,
  Settings,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites tailored to your business."
  },
  {
    icon: Code2,
    number: "02",
    title: "Custom Software",
    description:
      "Custom-built applications and management systems designed around your workflow."
  },
  {
    icon: Palette,
    number: "03",
    title: "UI / UX Design",
    description:
      "Beautiful, intuitive, and user-centered interfaces that improve user experience."
  },
  {
    icon: Database,
    number: "04",
    title: "Database Solutions",
    description:
      "Organized, secure, and scalable database architecture for your applications."
  },
  {
    icon: Smartphone,
    number: "05",
    title: "Responsive Design",
    description:
      "Seamless digital experiences across desktops, tablets, and mobile devices."
  },
  {
    icon: Settings,
    number: "06",
    title: "Maintenance & Support",
    description:
      "Technical assistance, system improvements, updates, and ongoing maintenance."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-blue-600">
              WHAT WE DO
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#06193E] sm:text-5xl">
              Services built around
              <br />
              <span className="text-blue-600">your needs.</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-slate-500">
            From simple websites to complex software systems,
            we provide practical digital solutions that help
            your business move forward.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="rounded-xl bg-blue-50 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-slate-300">
                    {service.number} / 06
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#06193E]">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-20 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:gap-4"
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
