import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
    { value: 500, suffix: "+", label: "Villas Transformed", testid: "stat-villas" },
    { value: 14, suffix: " yrs", label: "Of Atelier Practice", testid: "stat-years" },
    { value: 100, suffix: "%", label: "Premium Craftsmanship", testid: "stat-quality" },
    { value: 42, suffix: "", label: "Master Artisans", testid: "stat-artisans" },
];

function Counter({ target, suffix, active }) {
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!active) return;
        let raf;
        const dur = 1600;
        const start = performance.now();
        const step = (t) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * target));
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [active, target]);

    return (
        <span className="font-serif-display text-5xl sm:text-6xl lg:text-7xl text-[color:var(--maran-charcoal)]">
            {n}
            <span className="text-[color:var(--maran-gold)]">{suffix}</span>
        </span>
    );
}

export default function Stats() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            data-testid="stats-section"
            ref={ref}
            className="relative py-24 sm:py-32 bg-[color:var(--maran-off-white)] overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14"
                >
                    <p className="text-eyebrow mb-4">Trust — 04</p>
                    <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl text-[color:var(--maran-charcoal)]">
                        Fourteen years of{" "}
                        <span className="italic">quiet obsession</span> with
                        detail.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
                    {STATS.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.08,
                            }}
                            className="border-l border-[color:var(--maran-line)] pl-6"
                            data-testid={s.testid}
                        >
                            <Counter
                                target={s.value}
                                suffix={s.suffix}
                                active={inView}
                            />
                            <p className="mt-3 text-xs sm:text-sm tracking-[0.24em] uppercase text-[color:var(--maran-charcoal-60)]">
                                {s.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Marquee */}
                <div className="mt-24 border-y border-[color:var(--maran-line)] py-8 overflow-hidden">
                    <div className="marquee-track" aria-hidden="true">
                        {[...Array(2)].map((_, k) => (
                            <div
                                key={k}
                                className="flex items-center gap-16 pr-16 whitespace-nowrap"
                            >
                                {[
                                    "Emirates Hills",
                                    "Palm Jumeirah",
                                    "Downtown Dubai",
                                    "Jumeirah Bay",
                                    "Al Barari",
                                    "Dubai Marina",
                                    "MBR City",
                                    "Tilal Al Ghaf",
                                ].map((n) => (
                                    <span
                                        key={n + k}
                                        className="font-serif-display text-3xl sm:text-4xl text-[color:var(--maran-charcoal-60)]"
                                    >
                                        {n}{" "}
                                        <span className="text-[color:var(--maran-gold)] mx-4">
                                            ✦
                                        </span>
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
