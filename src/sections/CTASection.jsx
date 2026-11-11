
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#06193E] px-6 py-24">

      {/* BACKGROUND DECORATION */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">

        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-widest text-blue-300">
            <Sparkles size={15} />
            LET'S CREATE SOMETHING GREAT
          </div>

          <h2 className="text-5xl font-black leading-tight text-white sm:text-6xl">
            Your idea.
            <br />
            Our expertise.
            <br />
            <span className="text-blue-400">
              One great solution.
            </span>
          </h2>

          <p className="mt-7 max-w-xl leading-8 text-blue-100/60">
            Whether you need a website, a custom software
            application, or a complete digital solution,
            let's make it happen.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400 sm:h-56 sm:w-56">
            <Code2 size={100} strokeWidth={1} />
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-7xl border-t border-white/10 pt-10">
        <a
          href="#contact"
          className="group inline-flex items-center gap-4 rounded-xl bg-blue-600 px-8 py-5 font-bold text-white shadow-xl shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-500"
        >
          Let's talk about your project
          <ArrowUpRight
            size={20}
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </section>
  );
}
