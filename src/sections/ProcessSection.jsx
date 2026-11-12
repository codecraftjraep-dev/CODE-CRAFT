import { useEffect, useRef, useState } from "react";
import { MessageCircle, PenTool, Code2, Rocket, ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discover",
    description:
      "We start by understanding your goals, requirements, challenges, and expectations.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "We plan the structure, user experience, and visual direction of your solution.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "We transform the approved design into a functional, responsive, and reliable product.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    description:
      "We test, launch, and provide support to ensure your solution is ready for real use.",
  },
];

export default function ProcessSection() {
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
        threshold: 0.12,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative z-30 isolate w-full overflow-hidden bg-[#F5F8FF] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[10px] font-bold tracking-[0.25em] text-blue-600 sm:text-xs">
            OUR WORKFLOW
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#06193E] sm:mt-5 sm:text-5xl">
            From concept to
            <span className="text-blue-600"> creation.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:mt-6 sm:text-base">
            A straightforward and collaborative process designed to turn your
            ideas into working solutions.
          </p>
        </div>

        <div className="relative mt-14 grid gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden border-t-2 border-dashed border-blue-200 lg:block">
            <div
              className={`absolute left-0 top-[-2px] h-[2px] bg-blue-500 transition-all duration-[1800ms] ease-out ${
                visible ? "w-full" : "w-0"
              }`}
            />
          </div>

          <div className="absolute bottom-8 left-[39px] top-8 w-[2px] border-l-2 border-dashed border-blue-200 sm:hidden">
            <div
              className={`absolute left-[-2px] top-0 w-[2px] bg-blue-500 transition-all duration-[1800ms] ease-out ${
                visible ? "h-full" : "h-0"
              }`}
            />
          </div>
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <article
              key={number}
              style={{
                transitionDelay: visible ? `${200 + index * 180}ms` : "0ms",
              }}
              className={`group relative z-10 flex gap-5 text-left transition-all duration-700 ease-out sm:flex-col sm:items-center sm:gap-0 sm:text-center ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative shrink-0">
                <div
                  className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border bg-white text-blue-600 shadow-lg shadow-blue-900/5 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-3 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white sm:h-20 sm:w-20 ${
                    visible
                      ? "scale-100 rotate-0 border-blue-100"
                      : "scale-90 border-blue-100"
                  }`}
                >
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <span className="absolute -right-2 -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#F5F8FF] bg-blue-600 text-[9px] font-bold text-white transition-transform duration-300 group-hover:scale-110">
                  {number}
                </span>
              </div>

              <div className="min-w-0 flex-1 pt-1 sm:mt-7 sm:pt-0">
                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 sm:text-xs">
                  STEP {number}
                </span>

                <h3 className="mt-2 text-lg font-bold text-[#06193E] transition-colors duration-300 group-hover:text-blue-600 sm:mt-3 sm:text-xl">
                  {title}
                </h3>

                <p className="mt-2 max-w-sm text-xs leading-6 text-slate-500 sm:mx-auto sm:mt-4 sm:text-sm sm:leading-7">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-14 flex justify-center transition-all duration-700 delay-700 sm:mt-16 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-xs font-bold text-[#06193E] shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:text-sm"
          >
            Ready to get started?
            <ArrowDown
              size={15}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
