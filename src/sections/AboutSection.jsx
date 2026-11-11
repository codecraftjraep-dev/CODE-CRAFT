
import {
  Code2,
  Lightbulb,
  Target,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We explore better ways to solve everyday problems."
  },
  {
    icon: Target,
    title: "Purpose Driven",
    text: "Every feature and design decision has a reason."
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "We build dependable solutions with long-term value."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-[#F5F8FF] px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* VISUAL */}
        <div className="relative flex min-h-[420px] items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-blue-200/60 blur-3xl" />

          <div className="relative flex h-72 w-72 items-center justify-center rounded-[3rem] bg-[#06193E] shadow-2xl shadow-blue-950/20 sm:h-96 sm:w-96">
            <div className="absolute inset-5 rounded-[2.5rem] border border-blue-400/20" />

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-600/30">
                <Code2 size={55} />
              </div>

              <h3 className="text-4xl font-black tracking-tight text-white">
                Code<span className="text-blue-400">Craft</span>
              </h3>

              <p className="mt-3 text-xs font-semibold tracking-[0.3em] text-blue-200">
                BUILD · DEVELOP · INNOVATE
              </p>
            </div>

            <div className="absolute -right-5 top-12 rounded-xl border border-white/20 bg-white p-4 shadow-xl">
              <Lightbulb className="text-blue-600" size={25} />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/20 bg-white p-4 shadow-xl">
              <Target className="text-blue-600" size={25} />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <span className="text-xs font-bold tracking-[0.25em] text-blue-600">
            WHO WE ARE
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-[#06193E] sm:text-5xl">
            We turn ideas into
            <br />
            <span className="text-blue-600">meaningful technology.</span>
          </h2>

          <p className="mt-8 leading-8 text-slate-600">
            CodeCraft is a software development service focused
            on creating modern websites, custom applications,
            and digital solutions that address real-world needs.
          </p>

          <p className="mt-5 leading-8 text-slate-500">
            We believe technology should be accessible,
            practical, and designed around the people who use it.
            Our approach combines creative thinking, clean
            development, and attention to detail.
          </p>

          <div className="mt-10 space-y-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <Icon size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-[#06193E]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 font-bold text-blue-600 transition hover:gap-5"
          >
            Work with us
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
