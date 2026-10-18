
const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Modern, responsive websites that give your business a professional online presence and help turn visitors into customers.",
    tags: ["Responsive", "Next.js", "Business websites"],
  },
  {
    number: "02",
    title: "Website Improvements",
    description:
      "Make your existing website work better. From fixing bugs and improving mobile layouts to adding features and refining performance.",
    tags: ["Bug fixes", "New features", "Optimisation"],
  },
  {
    number: "03",
    title: "E-commerce Websites",
    description:
      "Online shops designed to make buying simple, with product pages, shopping carts and the functionality your business needs.",
    tags: ["Online shops", "Payments", "Product catalogues"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-bone px-6 py-24 text-ink md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-concrete">
              What I do
            </p>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Development that
              <br />
              <span className="text-concrete">
                moves you forward.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-relaxed text-concrete md:text-lg">
            Practical web solutions for small businesses,
            from building a website from scratch to improving
            what you already have.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 border-t border-ink/20 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group flex flex-col border-b border-ink/20 py-8 md:border-b-0 md:border-r md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="mb-10 text-sm text-concrete">
                ({service.number})
              </span>

              <h3 className="mb-4 text-2xl font-bold tracking-tight">
                {service.title}
              </h3>

              <p className="mb-8 flex-1 leading-relaxed text-concrete">
                {service.description}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink/20 px-3 py-1.5 text-xs text-concrete"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="flex w-fit items-center gap-3 font-semibold transition-colors hover:text-concrete"
              >
                Discuss a project
                <span className="text-xl transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
