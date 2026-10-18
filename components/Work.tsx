
const projects = [
  {
    number: "01",
    name: "Handmade Creations E-commerce",
    description:
      "A multilingual online shop for handmade products, featuring product catalogues, translated content and cloud-hosted images.",
    technologies: ["React", "TypeScript", "MongoDB"],
    link: "https://ecommerce-26-rust.vercel.app/",
    linkLabel: "Visit live website",
    featured: true,
  },
  {
    number: "02",
    name: "",
    description:
      "Showcases the works of an artist",
    technologies: ["React"],
    link: "",
    linkLabel: "Visit live website",
    featured: false,
  },
];

const SelectedWork = () => {
  return (
    <section
      id="work"
      className="bg-ink px-6 py-24 text-bone md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime">
              Selected work
            </p>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Built with purpose.
              <br />
              <span className="text-concrete">
                Made to work.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-relaxed text-bone/70 md:text-lg">
            A couple of my recent websites demonstrating
            effective solutions, smooth user experiences
            and attention to detail.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-12 md:gap-16">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-6 border-t border-bone/20 pt-6 md:grid-cols-2 md:gap-12 md:pt-8"
            >
              {/* Project visual placeholder */}
              <a
                href={project.link || undefined}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noreferrer" : undefined}
                aria-label={
                  project.link
                    ? `Visit ${project.name}`
                    : `${project.name} is in development`
                }
                className={`flex min-h-64 items-center justify-center overflow-hidden rounded-sm p-8 md:min-h-80 ${
                  project.featured
                    ? "bg-bone text-ink"
                    : "bg-[#292929] text-bone"
                }`}
              >
                <div className="w-full max-w-sm">
                  <p className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                    {project.featured ? (
                      <>
                      </>
                    //   website image
                    ) : (
                        <></>
                    //   website image
                      
                    )}
                  </p>

                </div>
              </a>

              {/* Project details */}
              <div className="flex flex-col justify-center py-2">
                <p className="mb-4 text-sm text-lime">
                  ({project.number})
                </p>

                <h3 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">
                  {project.name}
                </h3>

                <p className="mb-6 max-w-lg leading-relaxed text-bone/70">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-bone/20 px-3 py-1.5 text-xs text-bone/80"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-fit items-center gap-3 font-semibold transition-colors hover:text-lime"
                  >
                    {project.linkLabel}
                    <span aria-hidden="true" className="text-xl">
                      ↗
                    </span>
                  </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
