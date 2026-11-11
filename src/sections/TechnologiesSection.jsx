
import {
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Terminal
} from "lucide-react";

const technologies = [
  { name: "React", category: "FRONTEND", icon: Code2 },
  { name: "Vite", category: "BUILD TOOL", icon: Terminal },
  { name: "Tailwind CSS", category: "STYLING", icon: Globe },
  { name: "Node.js", category: "BACKEND", icon: Server },
  { name: "Express.js", category: "FRAMEWORK", icon: Terminal },
  { name: "MongoDB", category: "DATABASE", icon: Database },
  { name: "MySQL", category: "DATABASE", icon: Database },
  { name: "Responsive Design", category: "DEVELOPMENT", icon: Smartphone }
];

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-blue-600">
              OUR TECHNOLOGY STACK
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#06193E] sm:text-5xl">
              Built with the
              <br />
              <span className="text-blue-600">right technology.</span>
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-slate-500">
              We work with modern development technologies
              and tools to create scalable, maintainable,
              and efficient digital solutions.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-3 font-bold text-blue-600 transition hover:gap-5"
            >
              Discuss your technology needs
              <Code2 size={19} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {technologies.map(({ name, category, icon: Icon }) => (
              <div
                key={name}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="font-bold text-[#06193E]">
                  {name}
                </h3>

                <p className="mt-2 text-[10px] font-bold tracking-[0.15em] text-slate-400">
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
