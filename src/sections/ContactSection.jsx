import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Code2,
  ChevronDown,
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS environment variables are missing.");
      setStatus("error");
      return;
    }

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          service: form.service,
          message: form.message,
        },
        PUBLIC_KEY,
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-30 isolate w-full overflow-hidden bg-[#F5F8FF] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="contact-reveal mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-blue-600 shadow-sm sm:text-xs">
            <Sparkles size={13} />
            LET'S CONNECT
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#06193E] sm:text-5xl lg:text-6xl">
            Have an idea?
            <span className="block text-blue-600">Let's make it happen.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Every great project starts with a conversation. Tell us what you're
            planning, and let's build something meaningful together.
          </p>
        </div>

        {/* Contact content */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Left contact panel */}
          <div className="contact-reveal relative isolate flex min-h-[500px] flex-col overflow-hidden rounded-3xl bg-[#06193E] p-6 text-white shadow-2xl shadow-blue-950/10 sm:p-9 lg:min-h-full lg:p-11">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border border-blue-400/20" />
            <div className="pointer-events-none absolute -right-12 -top-12 -z-10 h-48 w-48 rounded-full border border-blue-400/20" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-bold tracking-wide">
                <Code2 size={19} className="text-blue-400" />
                CodeCraft
              </div>

              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold text-blue-100/80">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                OPEN FOR PROJECTS
              </span>
            </div>

            <div className="mt-14 sm:mt-20">
              <span className="text-xs font-bold tracking-[0.25em] text-blue-400">
                GET IN TOUCH
              </span>

              <h3 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl">
                Let's create
                <br />
                something
                <br />
                <span className="text-blue-400">exceptional.</span>
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100/60 sm:text-base sm:leading-8">
                Have a website, system, or creative project in mind? We're ready
                to help turn your vision into a working solution.
              </p>
            </div>

            {/* Contact information */}
            <div className="mt-12 space-y-4 sm:mt-14">
              <a
                href="mailto:codecraft.jra.ep@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold tracking-widest text-blue-200/40">
                    EMAIL US
                  </p>
                  <p className="mt-1 break-all text-xs font-semibold text-white sm:text-sm">
                    codecraft.jra.ep@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-blue-300/50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-widest text-blue-200/40">
                    LOCATION
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Philippines
                  </p>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="mt-auto pt-10">
              <div className="mb-4 h-px w-full bg-white/10" />

              <p className="text-xs text-blue-100/50">
                Prefer to connect through social media?
              </p>

              <a
                href="https://m.me/61596078106820"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Code Craft on Facebook"
                className="group mt-4 inline-flex items-center gap-3 text-sm font-bold text-white transition hover:text-blue-400"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-400 transition duration-300 group-hover:-translate-y-1 group-hover:bg-blue-600 group-hover:text-white">
                  <FaFacebookF size={17} />
                </span>
                Message us on Facebook
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right inquiry form */}
          <div className="contact-reveal contact-reveal-delay relative overflow-hidden rounded-3xl border border-blue-100/80 bg-white p-5 shadow-xl shadow-blue-950/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-950/10 sm:p-8 lg:p-11">
            {/* Top accent */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-300" />

            <div className="mb-8 flex items-start justify-between gap-4 sm:mb-10">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600">
                  START A PROJECT
                </span>

                <h3 className="mt-2 text-2xl font-black tracking-tight text-[#06193E] sm:text-3xl">
                  Project Inquiry
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                  Fill out the form and we'll get back to you.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 sm:h-14 sm:w-14">
                <Send size={23} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-bold text-[#06193E]"
                  >
                    Your Name <span className="text-blue-600">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="contact-input w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-[#06193E] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:py-4"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-bold text-[#06193E]"
                  >
                    Email Address <span className="text-blue-600">*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="contact-input w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-[#06193E] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:py-4"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-xs font-bold text-[#06193E]"
                >
                  Service Needed <span className="text-blue-600">*</span>
                </label>

                <div className="relative">
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="contact-input w-full appearance-none cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-12 text-sm text-[#06193E] shadow-sm outline-none transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:py-4"
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="Custom Software Development">
                      Custom Software Development
                    </option>
                    <option value="UI / UX Design">UI / UX Design</option>
                    <option value="Database Solutions">
                      Database Solutions
                    </option>
                    <option value="Maintenance and Support">
                      Maintenance and Support
                    </option>
                    <option value="Other">Other</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-transform duration-300"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-bold text-[#06193E]"
                  >
                    Project Details <span className="text-blue-600">*</span>
                  </label>

                  <span className="text-[10px] text-slate-400">
                    Tell us what you have in mind
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Describe your project, goals, requirements, or ideas..."
                  required
                  className="contact-input w-full resize-none rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm leading-7 text-[#06193E] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:py-4"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  {isSending ? "Sending Inquiry..." : "Send Project Inquiry"}
                </span>

                <Send
                  size={17}
                  className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              {status === "success" && (
                <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                  <p>
                    <strong>Inquiry sent successfully!</strong>
                    <br />
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm leading-6 text-red-600"
                >
                  Unable to send your inquiry. Please try again or email us
                  directly.
                </p>
              )}

              <p className="text-center text-[11px] leading-5 text-slate-400">
                Your project details will be sent directly to the CodeCraft
                team.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:mt-14 sm:flex-row sm:gap-3">
          <span className="h-px w-8 bg-blue-200" />
          <p className="text-[10px] font-semibold tracking-widest text-slate-400">
            GOOD IDEAS DESERVE GREAT EXECUTION.
          </p>
          <span className="h-px w-8 bg-blue-200" />
        </div>
      </div>
    </section>
  );
}
