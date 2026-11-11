export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative z-20 w-full bg-[#06193E] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <span className="text-xs font-bold tracking-[0.3em] text-blue-400">
          OUR PHILOSOPHY
        </span>

        <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl">
            Great technology isn't just about
            <span className="text-blue-400"> writing code.</span>
            It's about creating solutions that matter.
          </h2>

          <p className="max-w-sm leading-7 text-blue-100/60">
            We combine creativity, technology, and strategic thinking to turn
            complex challenges into simple digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
