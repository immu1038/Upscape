import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (href) => (e) => {
        e.preventDefault();
        setOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header
            data-testid="site-header"
            className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,padding] duration-500 ${
                scrolled
                    ? "glass-light py-3 shadow-[0_10px_30px_rgba(26,26,26,0.06)]"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={handleNav("#home")}
                    data-testid="brand-logo"
                    className="flex items-center gap-3 group"
                    aria-label="UPSCAPE — Renovations & Fit-out"
                >
                    <img
                        src="https://customer-assets.emergentagent.com/job_desert-gold-design/artifacts/qj4647hy_Untitled%20design%20%287%29.png"
                        alt="UPSCAPE logo"
                        className={`w-auto transition-all duration-500 ${
                            scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12"
                        }`}
                        style={{
                            filter: scrolled ? "none" : "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
                        }}
                    />
                </a>

                {/* Desktop nav */}
                <nav
                    aria-label="Primary"
                    className="hidden lg:flex items-center gap-10"
                >
                    {NAV.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            onClick={handleNav(n.href)}
                            data-testid={`nav-link-${n.label.toLowerCase()}`}
                            className="nav-link"
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden lg:block">
                    <a
                        href="#contact"
                        onClick={handleNav("#contact")}
                        data-testid="header-book-cta"
                        className="btn-pill"
                    >
                        Book Consultation
                        <span className="arrow" aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    data-testid="mobile-menu-toggle"
                    className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[color:var(--maran-line)] text-[color:var(--maran-charcoal)]"
                    onClick={() => setOpen((o) => !o)}
                >
                    {open ? (
                        <X className="w-5 h-5" />
                    ) : (
                        <Menu className="w-5 h-5" />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                        className="lg:hidden mx-6 sm:mx-10 mt-3 rounded-2xl glass-light p-6"
                        data-testid="mobile-menu"
                    >
                        <ul className="flex flex-col gap-4">
                            {NAV.map((n) => (
                                <li key={n.href}>
                                    <a
                                        href={n.href}
                                        onClick={handleNav(n.href)}
                                        data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                                        className="block text-sm tracking-[0.24em] uppercase py-2 border-b border-[color:var(--maran-line)]"
                                    >
                                        {n.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            onClick={handleNav("#contact")}
                            data-testid="mobile-book-cta"
                            className="btn-pill mt-6 w-full justify-center"
                        >
                            Book Consultation
                            <span className="arrow" aria-hidden="true">
                                →
                            </span>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
