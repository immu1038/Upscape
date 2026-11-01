import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV, waLink } from "@/data/site";

export default function Header({ onOpenEnquiry }) {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const loc = useLocation();
    const nav = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [loc.pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleNav = (href) => (e) => {
        if (href.startsWith("/#")) {
            e.preventDefault();
            const id = href.slice(2);
            if (loc.pathname !== "/") {
                nav("/");
                setTimeout(() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }, 60);
            } else {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }
            setOpen(false);
        } else {
            setOpen(false);
        }
    };

    return (
        <header
            data-testid="site-header"
            className="fixed top-0 inset-x-0 z-50 bg-[color:var(--fg)] text-white"
            style={{
                paddingTop: scrolled ? "10px" : "16px",
                paddingBottom: scrolled ? "10px" : "16px",
                transition: "padding 0.4s var(--easeOut)",
            }}
        >
            <div className="container-u flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="UPSCAPE — home"
                    data-testid="brand-logo"
                    onClick={(e) => {
                        if (loc.pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        setOpen(false);
                    }}
                    className="inline-flex items-center"
                >
                    <Logo
                        className={`${scrolled ? "h-6" : "h-7 sm:h-8"} w-auto transition-[height] duration-500`}
                    />
                </Link>

                <nav
                    aria-label="Primary"
                    className="hidden lg:flex items-center gap-10"
                >
                    {NAV.map((n) =>
                        n.href.startsWith("/#") ? (
                            <a
                                key={n.href}
                                href={n.href}
                                onClick={handleNav(n.href)}
                                data-testid={`nav-${n.label.toLowerCase()}`}
                                className="ul-link text-xs tracking-[0.18em] uppercase font-medium text-white/85 hover:text-white"
                            >
                                {n.label}
                            </a>
                        ) : (
                            <Link
                                key={n.href}
                                to={n.href}
                                data-testid={`nav-${n.label.toLowerCase()}`}
                                className="ul-link text-xs tracking-[0.18em] uppercase font-medium text-white/85 hover:text-white"
                            >
                                {n.label}
                            </Link>
                        ),
                    )}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href={waLink("Hi UPSCAPE, I'd like to enquire about your services.")}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="header-whatsapp"
                        className="btn btn-wa"
                    >
                        WhatsApp
                    </a>
                    <button
                        type="button"
                        onClick={onOpenEnquiry}
                        data-testid="header-quote"
                        className="btn btn-inverse"
                    >
                        Request a Quote
                        <span className="arr">→</span>
                    </button>
                </div>

                <button
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={open}
                    data-testid="mobile-menu-toggle"
                    className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/25 text-white"
                    onClick={() => setOpen((o) => !o)}
                >
                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="mobile-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-0 bg-[color:var(--fg)] text-white lg:hidden overflow-y-auto"
                        data-testid="mobile-menu"
                        style={{ paddingTop: 80 }}
                    >
                        {/* Close button inside the overlay */}
                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setOpen(false)}
                            data-testid="mobile-menu-close"
                            className="absolute top-4 right-5 w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/25 text-white z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <div className="container-u py-6 pb-10">
                            <ul className="flex flex-col gap-1">
                                {NAV.map((n, i) => (
                                    <motion.li
                                        key={n.href}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 + i * 0.05 }}
                                    >
                                        {n.href.startsWith("/#") ? (
                                            <a
                                                href={n.href}
                                                onClick={handleNav(n.href)}
                                                className="block py-4 text-2xl font-bold tracking-tight border-b border-white/10"
                                                data-testid={`m-nav-${n.label.toLowerCase()}`}
                                            >
                                                {n.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={n.href}
                                                onClick={() => setOpen(false)}
                                                className="block py-4 text-2xl font-bold tracking-tight border-b border-white/10"
                                                data-testid={`m-nav-${n.label.toLowerCase()}`}
                                            >
                                                {n.label}
                                            </Link>
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-col gap-3">
                                <a
                                    href={waLink()}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setOpen(false)}
                                    className="btn btn-wa justify-center"
                                    data-testid="m-whatsapp"
                                >
                                    Chat on WhatsApp
                                </a>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setOpen(false);
                                        onOpenEnquiry?.();
                                    }}
                                    className="btn btn-inverse justify-center"
                                    data-testid="m-quote"
                                >
                                    Request a Quote
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
