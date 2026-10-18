
const Footer = () => {
    return (
        <footer className="bg-ink px-6 text-bone md:px-12 lg:px-20">
            <div className="mx-auto max-w-6xl">
                {/* Main footer */}
                <div className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between md:py-16">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <a
                            href="/"
                            aria-label="Peekest home"
                            className="text-3xl font-bold tracking-tight"
                        >
                            peekest<span className="text-lime">.</span>
                        </a>

                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/60">
                            Independent web development for small businesses.
                            Building modern websites that help businesses move forward.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-bone/40">
                            Explore
                        </p>

                        <nav className="flex flex-col items-start gap-3">
                            <a
                                href="#services"
                                className="text-sm text-bone/70 transition-colors hover:text-lime"
                            >
                                Services
                            </a>
                            <a
                                href="#work"
                                className="text-sm text-bone/70 transition-colors hover:text-lime"
                            >
                                Work
                            </a>
                            <a
                                href="#contact"
                                className="text-sm text-bone/70 transition-colors hover:text-lime"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-bone/40">
                            Have a project?
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 font-semibold transition-colors hover:text-lime"
                        >
                            Let's talk
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-3 border-t border-bone/15 py-6 text-xs text-bone/50 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Peekest. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="/mentions-legales"
                            className="text-sm text-bone/60 transition-colors hover:text-lime"
                        >
                            Mentions légales
                        </a>

                        <a
                            href="#top"
                            className="inline-flex w-fit items-center gap-2 transition-colors hover:text-lime"
                        >
                            Back to top
                            <span aria-hidden="true">↑</span>
                        </a>
                    </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
