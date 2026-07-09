import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SLIDES = [
    {
        src: "https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg",
        alt: "Modern luxury Dubai villa exterior at dusk",
    },
    {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
        alt: "Bespoke interior of a Dubai villa",
    },
    {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80",
        alt: "Landscape architecture with pool and palms",
    },
];

const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6500);
        return () => clearInterval(t);
    }, []);

    return (
        <section
            id="home"
            data-testid="hero-section"
            className="relative min-h-screen w-full overflow-hidden grain"
        >
            {/* Slider */}
            <div className="absolute inset-0">
                <AnimatePresence mode="sync">
                    <motion.img
                        key={SLIDES[i].src}
                        src={SLIDES[i].src}
                        alt={SLIDES[i].alt}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                        data-testid={`hero-slide-${i}`}
                    />
                </AnimatePresence>
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.35) 45%, rgba(26,26,26,0.75) 100%)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex flex-col justify-end">
                <div className="grid grid-cols-12 gap-6 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                        className="col-span-12 lg:col-span-8"
                    >
                        <p
                            data-testid="hero-eyebrow"
                            className="text-eyebrow text-[color:var(--maran-gold-soft)] mb-6"
                        >
                            Dubai · Renovations · Fit-out
                        </p>
                        <h1
                            data-testid="hero-title"
                            className="font-serif-display text-white text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight"
                        >
                            Redefining
                            <br />
                            Dubai&apos;s{" "}
                            <span className="italic text-[color:var(--maran-gold)]">
                                Luxury
                            </span>
                            <br />
                            Living Spaces.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.2, 0.8, 0.2, 1],
                            delay: 0.15,
                        }}
                        className="col-span-12 lg:col-span-4 lg:pl-8"
                    >
                        <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-md">
                            A Dubai studio of architects, interior specialists
                            and landscape artisans delivering full-turnkey
                            renovations & fit-out across Downtown, Palm
                            Jumeirah, Emirates Hills & Marina.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#portfolio"
                                onClick={scrollTo("#portfolio")}
                                data-testid="hero-portfolio-cta"
                                className="btn-pill"
                                style={{
                                    background:
                                        "var(--maran-gold)",
                                    borderColor: "var(--maran-gold)",
                                }}
                            >
                                View Portfolio
                                <ArrowRight
                                    className="w-4 h-4 arrow"
                                    aria-hidden="true"
                                />
                            </a>
                            <a
                                href="https://wa.me/971566095076"
                                target="_blank"
                                rel="noreferrer"
                                data-testid="hero-consult-cta"
                                className="text-white/90 nav-link"
                                style={{ color: "#fff" }}
                            >
                                Book a private consultation
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Slide indicators */}
                <div className="mt-14 sm:mt-20 flex items-center justify-between text-white/80">
                    <div className="flex items-center gap-3">
                        {SLIDES.map((s, idx) => (
                            <button
                                key={s.src}
                                type="button"
                                aria-label={`Show slide ${idx + 1}`}
                                data-testid={`hero-indicator-${idx}`}
                                onClick={() => setI(idx)}
                                className="group flex items-center gap-2"
                            >
                                <span
                                    className={`block h-[1px] transition-all duration-500 ${
                                        i === idx
                                            ? "w-14 bg-[color:var(--maran-gold)]"
                                            : "w-6 bg-white/40 group-hover:bg-white"
                                    }`}
                                />
                                <span className="text-[10px] tracking-[0.24em] uppercase">
                                    0{idx + 1}
                                </span>
                            </button>
                        ))}
                    </div>
                    <p className="hidden sm:block text-[11px] tracking-[0.28em] uppercase">
                        Scroll ↓
                    </p>
                </div>
            </div>
        </section>
    );
}
