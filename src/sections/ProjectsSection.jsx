
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Business Management System",
    category: "CUSTOM SOFTWARE",
    description:
      "A centralized application for managing business operations, records, and workflows.",
    tech: ["React", "Node.js", "MongoDB"],
    style: "bg-[#06193E]",
    type: "SYSTEM"
  },
  {
    number: "02",
    title: "Corporate Website",
    category: "WEB DEVELOPMENT",
    description:
      "A modern digital presence designed to communicate a brand and connect with its audience.",
    tech: ["React", "Tailwind CSS", "Vite"],
    style: "bg-blue-600",
    type: "WEBSITE"
  },
  {
    number: "03",
    title: "Data & Records Platform",
    category: "WEB APPLICATION",
    description:
      "A structured platform for organizing information, managing records, and generating reports.",
    tech: ["React", "Express", "Database"],
    style: "bg-slate-800",
    type: "APPLICATION"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-blue-600">
              SELECTED WORK
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#06193E] sm:text-5xl">
              Ideas we've
              <br />
              <span className="text-blue-600">brought to life.</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-slate-500">
            Every project is an opportunity to create something
            useful, functional, and meaningful.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group">
              {/* PROJECT PREVIEW */}
              <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl ${project.style}`}>
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full border border-white/10" />

                <div className="relative w-[80%] rounded-xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm transition duration-500 group-hover:scale-105">
                  <div className="flex gap-1.5 border-b border-white/20 pb-3">
                    <span className="h-2 w-2 rounded-full bg-red-300" />
                    <span className="h-2 w-2 rounded-full bg-yellow-300" />
                    <span className="h-2 w-2 rounded-full bg-green-300" />
                  </div>

                  <div className="space-y-3 p-4">
                    <div className="h-3 w-2/3 rounded bg-white/80" />
                    <div className="h-2 w-full rounded bg-white/20" />
                    <div className="h-2 w-4/5 rounded bg-white/20" />
                    <div className="grid grid-cols-3 gap-2 pt-3">
                      <div className="h-12 rounded bg-white/20" />
                      <div className="h-12 rounded bg-white/20" />
                      <div className="h-12 rounded bg-white/20" />
                    </div>
                  </div>
                </div>

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white">
                  {project.type}
                </span>

                <span className="absolute bottom-5 right-5 text-xs text-white/50">
                  {project.number} / 03
                </span>
              </div>

              {/* PROJECT DETAILS */}
              <div className="pt-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600">
                  {project.category}
                </span>

                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-[#06193E]">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="shrink-0 text-blue-600 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    size={22}
                  />
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-xl border border-blue-200 px-7 py-4 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Have a project in mind?
            <ExternalLink size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
