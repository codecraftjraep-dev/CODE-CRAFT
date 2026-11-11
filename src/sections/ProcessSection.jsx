
import {
  MessageCircle,
  PenTool,
  Code2,
  Rocket
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discover",
    description:
      "We start by understanding your goals, requirements, challenges, and expectations."
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "We plan the structure, user experience, and visual direction of your solution."
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "We transform the approved design into a functional, responsive, and reliable product."
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    description:
      "We test, launch, and provide support to ensure your solution is ready for real use."
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#F5F8FF] px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-blue-600">
            OUR WORKFLOW
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#06193E] sm:text-5xl">
            From concept to
            <span className="text-blue-600"> creation.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-500">
            A straightforward and collaborative process
            designed to turn your ideas into working solutions.
          </p>
        </div>

        <div className="relative mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div className="absolute left-[10%] right-[10%] top-9 hidden border-t-2 border-dashed border-blue-200 lg:block" />

          {steps.map(({ number, icon: Icon, title, description }) => (
            <article key={number} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-lg shadow-blue-900/5 transition hover:-translate-y-2 hover:bg-blue-600 hover:text-white">
                <Icon size={30} />
              </div>

              <span className="mt-7 block text-xs font-bold tracking-[0.2em] text-blue-600">
                STEP {number}
              </span>

              <h3 className="mt-3 text-xl font-bold text-[#06193E]">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
