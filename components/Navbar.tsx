
const Navbar = () => {
  return (
    <header className="w-full bg-bone px-6 text-ink md:px-12 lg:px-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-ink/15 py-6">
        {/* Brand */}
        <a
          href="/"
          aria-label="Peekest home"
          className="text-2xl font-bold tracking-tight"
        >
          peekest<span className="text-lime">.</span>
        </a>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm text-concrete transition-colors hover:text-ink"
          >
            Services
          </a>
          <a
            href="#work"
            className="text-sm text-concrete transition-colors hover:text-ink"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-sm text-concrete transition-colors hover:text-ink"
          >
            About
          </a>
        </div>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-lime px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-bone"
        >
          Let's talk
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
