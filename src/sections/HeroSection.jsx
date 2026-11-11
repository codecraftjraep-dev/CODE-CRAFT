import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Terminal,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden bg-white"
    >
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-12">
        {/* LEFT CONTENT */}
        <div className="z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-700">
              DIGITAL SOLUTIONS STUDIO
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-[#06193E] sm:text-6xl lg:text-7xl">
            Ideas into
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              digital impact.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-500">
            We design and develop innovative digital solutions that help
            businesses simplify processes, solve problems, and achieve more
            through technology.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Start a Project
              <ArrowUpRight
                size={19}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-7 py-4 font-semibold text-[#06193E] transition hover:border-blue-600 hover:text-blue-600"
            >
              Explore Services
              <ArrowDown size={17} />
            </a>
          </div>

          <div className="mt-16 flex items-center gap-4 border-t border-slate-100 pt-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#06193E] text-white">
              <Code2 size={25} />
            </div>
            <div>
              <p className="font-bold text-[#06193E]">
                Build. Develop. Innovate.
              </p>
              <p className="text-sm text-slate-500">
                Technology crafted with purpose.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative rotate-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-blue-950/10">
            <div className="rounded-xl bg-[#06193E] p-5 sm:p-8">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <Terminal size={15} />
                  codecraft.js
                </div>
              </div>

              <div className="space-y-5 font-mono text-sm sm:text-base">
                <p className="text-slate-500">
                  // Transforming ideas into solutions
                </p>

                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-white">vision</span> ={" "}
                  <span className="text-green-300">"Your next big idea"</span>;
                </p>

                <p>
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-300">createFuture</span>() {"{"}
                </p>

                <p className="pl-6 text-white">design();</p>

                <p className="pl-6 text-white">develop();</p>

                <p className="pl-6 text-white">innovate();</p>

                <p>{"}"}</p>

                <p>
                  <span className="text-blue-300">createFuture</span>
                  ();
                </p>

                <div className="h-6 w-2 animate-pulse bg-blue-400" />
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-blue-200">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Ready to create
                </span>
                <span>CODECRAFT STUDIO</span>
              </div>
            </div>
          </div>

          {/* FLOATING ELEMENTS */}
          <div className="absolute -left-8 top-16 hidden items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
            <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
              <Code2 size={22} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#06193E]">Clean Code</p>
              <p className="text-xs text-slate-400">Built to scale</p>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-5 hidden items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
            <Sparkles className="text-blue-600" size={23} />
            <div>
              <p className="text-sm font-bold text-[#06193E]">Creative Ideas</p>
              <p className="text-xs text-slate-400">Made into reality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
