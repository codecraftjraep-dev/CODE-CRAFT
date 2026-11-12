
export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative z-20 flex min-h-[20vh] w-full items-center justify-center bg-[#06193E] px-5 py-24 md:px-8"
    >
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-xs font-bold tracking-[0.3em] text-blue-400">
          BUILT FOR WHAT'S NEXT
        </span>

        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Let's Turn Your Ideas Into
          <span className="text-blue-400"> Powerful Digital Solutions.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white0 sm:text-lg">
          We create custom software, intelligent systems, and digital
          experiences designed to simplify work and move your business forward.
        </p>
      </div>
    </section>
  );
}
