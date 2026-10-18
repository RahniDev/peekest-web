
const Hero = () => {
  return (
    <section className="flex min-h-svh flex-col bg-bone px-6 text-ink md:px-12 lg:px-20">
<div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-12">        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em]">
          Independent web design studio
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          Websites that make{" "}
          <span className="text-concrete">
            an impact.
          </span>
        </h1>

<div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:pr-12 lg:pr-24">          <p className="max-w-lg text-lg leading-relaxed text-concrete md:text-xl">
            Bold, thoughtful websites for small businesses
            ready to stand out and grow.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 rounded-md bg-lime px-6 py-4 font-semibold text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            Start a project
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
