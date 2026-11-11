
import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send
} from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `CodeCraft Project Inquiry - ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Service: ${form.service}\n\n` +
      `Project Details:\n${form.message}`
    );

    window.location.href =
      `mailto:hello@codecraft.dev?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#F5F8FF] px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-xs font-bold tracking-[0.25em] text-blue-600">
            GET IN TOUCH
          </span>

          <h2 className="mt-5 text-5xl font-black leading-tight text-[#06193E] sm:text-6xl">
            Let's build
            <br />
            something
            <br />
            <span className="text-blue-600">together.</span>
          </h2>

          <p className="mt-8 max-w-md leading-8 text-slate-500">
            Have a project in mind? Tell us about your
            requirements and let's discuss how we can
            turn your ideas into reality.
          </p>

          <div className="mt-12 space-y-7">

            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <Mail size={23} />
              </div>

              <div>
                <p className="text-xs font-bold tracking-widest text-slate-400">
                  EMAIL
                </p>
                <a
                  href="mailto:hello@codecraft.dev"
                  className="mt-1 font-semibold text-[#06193E] hover:text-blue-600"
                >
                  hello@codecraft.dev
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <MapPin size={23} />
              </div>

              <div>
                <p className="text-xs font-bold tracking-widest text-slate-400">
                  LOCATION
                </p>
                <p className="mt-1 font-semibold text-[#06193E]">
                  Philippines
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-blue-950/5 sm:p-10"
        >
          <div className="mb-9 flex items-center justify-between">
            <h3 className="text-2xl font-black text-[#06193E]">
              Project Inquiry
            </h3>

            <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
              LET'S TALK
            </span>
          </div>

          <div className="space-y-6">

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#06193E]">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#06193E]">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#06193E]">
                Service Needed
              </label>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
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
              <label className="mb-2 block text-sm font-semibold text-[#06193E]">
                Project Details
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your project..."
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Send Inquiry
              <Send size={18} />
            </button>

            {submitted && (
              <p className="text-sm text-green-600">
                Your email application should open. Review
                the message and send it to complete your inquiry.
              </p>
            )}

            <p className="text-center text-xs text-slate-400">
              We look forward to hearing about your project.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
