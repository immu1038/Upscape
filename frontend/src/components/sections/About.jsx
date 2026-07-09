import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 sm:py-32 lg:py-40 bg-[color:var(--maran-charcoal)] text-[color:var(--maran-off-white)] overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
                        <img
                            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80"
                            alt="Interior of a curated Dubai villa"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[color:var(--maran-gold)] text-[color:var(--maran-charcoal)] p-5 max-w-[220px]">
                        <p className="font-serif-display text-3xl leading-none">
                            Est.
                            <br />
                            2011
                        </p>
                        <p className="text-[10px] tracking-[0.3em] uppercase mt-2">
                            Dubai · UAE
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="lg:col-span-7 lg:pl-8"
                >
                    <p className="text-eyebrow mb-5">The Atelier — 05</p>
                    <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                        A quiet studio for the{" "}
                        <span className="italic text-[color:var(--maran-gold)]">
                            considered
                        </span>{" "}
                        few.
                    </h2>
                    <p className="mt-8 text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                        MARÁN Atelier is a Dubai-born practice of architects,
                        interior designers and landscape artisans. We accept a
                        limited number of private commissions each year — always
                        end-to-end, always with the same team from first sketch
                        to final styling.
                    </p>

                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {[
                            { k: "Discovery", v: "Site, story & brief" },
                            { k: "Design", v: "Architecture & interiors" },
                            { k: "Delivery", v: "Build & final styling" },
                        ].map((s, i) => (
                            <div
                                key={s.k}
                                className="border-t border-white/15 pt-4"
                                data-testid={`about-step-${i}`}
                            >
                                <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--maran-gold)] mb-2">
                                    Phase 0{i + 1}
                                </p>
                                <p className="font-serif-display text-2xl">
                                    {s.k}
                                </p>
                                <p className="text-white/60 text-sm mt-1">
                                    {s.v}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
