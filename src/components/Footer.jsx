import { ArrowUpRight, ArrowUp, Mail, MapPin, Globe } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/codecraft-logo.png";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Our Process", href: "#process" },
];

const services = [
  "Web Development",
  "Custom Software",
  "UI / UX Design",
  "Database Solutions",
  "Maintenance & Support",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#06193E] text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 lg:px-12">
        <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="inline-flex rounded-lg bg-white p-2">
              <img
                src={logo}
                alt="CodeCraft"
                className="h-16 w-auto object-contain"
              />
            </a>

            <p className="mt-7 max-w-xs text-sm leading-7 text-blue-100/60">
              Turning ideas into meaningful digital experiences. We build modern
              websites, software systems, and technology-driven solutions.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61596078106820"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-blue-100 transition hover:border-blue-400 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://www.instagram.com/codecraft.dev.ph/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-blue-100 transition hover:border-blue-400 hover:bg-blue-600 hover:text-white"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-7 text-sm font-bold tracking-widest text-white">
              QUICK LINKS
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-blue-100/60 transition hover:text-blue-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-500 opacity-0 transition group-hover:opacity-100" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-7 text-sm font-bold tracking-widest text-white">
              OUR SERVICES
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-blue-100/60 transition hover:text-blue-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-7 text-sm font-bold tracking-widest text-white">
              GET IN TOUCH
            </h3>

            <div className="space-y-6">
              <a
                href="mailto:codecraft.jra.ep@gmail.com"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-blue-100/40">EMAIL US</p>
                  <p className="mt-1 text-sm text-blue-100 transition group-hover:text-blue-400">
                    codecraft.jra.ep@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-blue-100/40">LOCATION</p>
                  <p className="mt-1 text-sm text-blue-100/70">Philippines</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                  <Globe size={18} />
                </div>
                <div>
                  <p className="text-xs text-blue-100/40">AVAILABILITY</p>
                  <p className="mt-1 text-sm text-blue-100/70">
                    Available for projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 border-b border-white/10 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-bold text-white">
              Have an idea worth building?
            </p>
            <p className="mt-2 text-sm text-blue-100/50">
              Let's turn your vision into a working solution.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 self-start rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-500 md:self-auto"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="relative z-10 flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs text-blue-100/50">
              © {currentYear} CodeCraft. All rights reserved.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-blue-100/40">
              <a
                href="/privacy-policy"
                className="transition hover:text-blue-400"
              >
                PRIVACY POLICY
              </a>
              <span className="text-blue-500">•</span>
              <a
                href="/terms-of-service"
                className="transition hover:text-blue-400"
              >
                TERMS OF SERVICE
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest text-blue-100/40">
            BUILD
            <span className="text-blue-500">•</span>
            DEVELOP
            <span className="text-blue-500">•</span>
            INNOVATE
          </div>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 self-start text-xs text-blue-100/50 transition hover:text-white sm:self-auto"
          >
            BACK TO TOP
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 transition group-hover:border-blue-500 group-hover:bg-blue-600">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-5 left-0 z-0 select-none whitespace-nowrap text-[clamp(6rem,19vw,17rem)] font-black leading-[0.8] tracking-[-0.09em] text-white/[0.035]">
        CODE CRAFT
      </div>
    </footer>
  );
}
