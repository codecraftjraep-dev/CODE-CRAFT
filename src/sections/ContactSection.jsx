import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

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

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_cuk6jrs",
        "template_ptt0d0i",
        {
          from_name: form.name,
          reply_to: form.email,
          service: form.service,
          message: form.message,
        },
        "ywJIzw5iBuHJtezd4",
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
      className="relative z-30 isolate w-full overflow-hidden bg-[#F5F8FF] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="text-[10px] font-bold tracking-[0.25em] text-blue-600 sm:text-xs">
            GET IN TOUCH
          </span>

          <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight text-[#06193E] sm:mt-5 sm:text-5xl lg:text-6xl">
            Let's build
            <br />
            something
            <br />
            <span className="text-blue-600">together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-slate-500 sm:mt-8 sm:text-base sm:leading-8 lg:mx-0">
            Have a project in mind? Tell us about your requirements and let's
            discuss how we can turn your ideas into reality.
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:gap-7">
            <div className="flex items-center gap-4 text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:h-14 sm:w-14">
                <Mail size={21} />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-bold tracking-widest text-slate-400 sm:text-xs">
                  EMAIL
                </p>

                <a
                  href="mailto:codecraft.jra.ep@gmail.com"
                  className="mt-1 break-all text-sm font-semibold text-[#06193E] transition hover:text-blue-600 sm:text-base"
                >
                  codecraft.jra.ep@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:h-14 sm:w-14">
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-widest text-slate-400 sm:text-xs">
                  LOCATION
                </p>

                <p className="mt-1 text-sm font-semibold text-[#06193E] sm:text-base">
                  Philippines
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-7 text-center lg:text-left">
            <p className="text-xs font-medium text-slate-400">
              Prefer social media?
            </p>

            <a
              href="https://m.me/61596078106820"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Code Craft on Facebook"
              className="group mt-4 inline-flex items-center justify-center gap-3 rounded-xl border border-blue-100 bg-white px-5 py-3.5 text-sm font-bold text-[#06193E] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <FaFacebookF className="text-lg text-[#1877F2] transition-colors group-hover:text-white" />
              Or message us on Facebook
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-blue-950/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-950/10 sm:rounded-3xl sm:p-8 lg:p-10"
        >
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3 sm:mb-9">
            <h3 className="text-xl font-black text-[#06193E] sm:text-2xl">
              Project Inquiry
            </h3>

            <span className="rounded-full bg-blue-50 px-3 py-2 text-[10px] font-bold tracking-wide text-blue-600 sm:px-4 sm:text-xs">
              LET'S TALK
            </span>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div>
              <label className="mb-2 block text-xs font-semibold text-[#06193E] sm:text-sm">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#06193E] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:py-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#06193E] sm:text-sm">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#06193E] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:py-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#06193E] sm:text-sm">
                Service Needed
              </label>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#06193E] outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:py-4"
              >
                <option value="">Select a service</option>
                <option>Website Development</option>
                <option>Custom Software Development</option>
                <option>UI / UX Design</option>
                <option>Database Solutions</option>
                <option>Maintenance and Support</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#06193E] sm:text-sm">
                Project Details
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your project..."
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#06193E] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:py-4"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:py-4"
            >
              {isSending ? "Sending Inquiry..." : "Send Inquiry"}

              <Send
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            {status === "success" && (
              <p className="rounded-xl bg-green-50 p-3 text-center text-sm leading-6 text-green-700">
                Your inquiry has been sent successfully! We'll get back to you
                soon.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-xl bg-red-50 p-3 text-center text-sm leading-6 text-red-600">
                Failed to send your inquiry. Please try again or contact us
                directly by email.
              </p>
            )}

            <p className="text-center text-[11px] leading-5 text-slate-400 sm:text-xs">
              We look forward to hearing about your project.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
