
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-bone px-6 py-24 text-ink md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-concrete">
          Get in touch
        </p>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Introduction */}
          <div>
            <h2 className="max-w-xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              Have a project
              <br />
              in mind<span className="text-lime">?</span>
            </h2>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-concrete">
              Whether you need a new website, improvements
              to an existing one, or an online shop, I'd love
              to hear what you're working on.
            </p>

            <div className="mt-10">
              <p className="mb-2 text-sm text-concrete">
                Prefer email?
              </p>

              {/* Replace with your actual business email */}
              <a
                href="mailto:hello@peekest.com"
                className="inline-flex items-center gap-3 border-b border-ink pb-2 text-lg font-semibold transition-colors hover:border-lime"
              >
                hello@peekest.com
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            action="mailto:hello@peekest.com"
            method="post"
            encType="text/plain"
            className="flex flex-col gap-6"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
                className="w-full border-b border-ink/25 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-concrete/60 focus:border-ink"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
                className="w-full border-b border-ink/25 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-concrete/60 focus:border-ink"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-medium"
              >
                What do you need?
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                required
                className="w-full border-b border-ink/25 bg-bone px-0 py-3 outline-none focus:border-ink"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Business website">
                  Business website
                </option>
                <option value="Website improvements">
                  Website improvements
                </option>
                <option value="E-commerce website">
                  E-commerce website
                </option>
                <option value="Other">
                  Something else
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Tell me about your project
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="A little about your business and what you need..."
                className="w-full resize-y border-b border-ink/25 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-concrete/60 focus:border-ink"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center gap-4 rounded-md bg-lime px-6 py-4 font-semibold text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              Send enquiry
              <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
