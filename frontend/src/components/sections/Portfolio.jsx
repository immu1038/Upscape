import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const ITEMS = [
    {
        id: "villa-emirates-hills",
        type: "renovation",
        title: "Villa · Emirates Hills",
        location: "Emirates Hills, Dubai",
        img: "https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg",
    },
    {
        id: "penthouse-downtown",
        type: "renovation",
        title: "Penthouse · Burj Views",
        location: "Downtown Dubai",
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "garden-palm",
        type: "landscape",
        title: "Palm Frond Garden",
        location: "Palm Jumeirah",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "poolside-marina",
        type: "landscape",
        title: "Marina Poolside Retreat",
        location: "Dubai Marina",
        img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "majlis-jumeirah",
        type: "renovation",
        title: "Grand Majlis Suite",
        location: "Jumeirah Bay",
        img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "desert-courtyard",
        type: "landscape",
        title: "Desert Courtyard",
        location: "Al Barari",
        img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    },
];

const FILTERS = [
    { id: "all", label: "All Projects" },
    { id: "renovation", label: "Renovation" },
    { id: "landscape", label: "Landscape" },
];

export default function Portfolio() {
    const [filter, setFilter] = useState("all");

    const visible = useMemo(
        () => (filter === "all" ? ITEMS : ITEMS.filter((i) => i.type === filter)),
        [filter],
    );

    return (
        <section
            id="portfolio"
            data-testid="portfolio-section"
            className="relative py-24 sm:py-32 lg:py-40 bg-white"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-2xl"
                    >
                        <p className="text-eyebrow mb-5">Selected Works — 03</p>
                        <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-[color:var(--maran-charcoal)]">
                            Private residences,{" "}
                            <span className="italic">re-authored.</span>
                        </h2>
                    </motion.div>

                    <div
                        role="tablist"
                        aria-label="Filter portfolio"
                        className="flex flex-wrap gap-3"
                    >
                        {FILTERS.map((f) => (
                            <button
                                key={f.id}
                                type="button"
                                role="tab"
                                aria-selected={filter === f.id}
                                data-testid={`portfolio-filter-${f.id}`}
                                className={`chip ${
                                    filter === f.id ? "active" : ""
                                }`}
                                onClick={() => setFilter(f.id)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Before/After Feature */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                    className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                    data-testid="before-after-feature"
                >
                    <div className="lg:col-span-7">
                        <BeforeAfterSlider
                            beforeSrc="https://images.unsplash.com/photo-1707725669525-d925dc9e9010"
                            afterSrc="https://images.unsplash.com/photo-1705326701287-346fc37a2c86"
                            beforeAlt="Villa interior before renovation"
                            afterAlt="Villa interior after renovation"
                        />
                    </div>
                    <div className="lg:col-span-5">
                        <p className="text-eyebrow mb-4">
                            Feature · Al Barari Renovation
                        </p>
                        <h3 className="font-serif-display text-3xl sm:text-4xl leading-tight text-[color:var(--maran-charcoal)] mb-4">
                            From dated shell to a sculpted living volume.
                        </h3>
                        <p className="text-[15px] leading-relaxed text-[color:var(--maran-charcoal-60)] mb-6">
                            A 12,000 sq ft villa reconceived around light and
                            movement — travertine floors, hand-brushed brass
                            details, and a double-height majlis that opens onto
                            a new evening garden.
                        </p>
                        <p className="text-sm tracking-[0.24em] uppercase text-[color:var(--maran-charcoal)]">
                            Drag the divider →
                        </p>
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {visible.map((item, i) => (
                            <motion.a
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 12 }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.06,
                                    ease: [0.2, 0.8, 0.2, 1],
                                }}
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector("#contact")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="portfolio-tile aspect-[4/5]"
                                data-testid={`portfolio-item-${item.id}`}
                                aria-label={`${item.title} in ${item.location}`}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="overlay" />
                                <div className="absolute inset-x-6 bottom-6 text-white">
                                    <p className="text-[10px] tracking-[0.28em] uppercase opacity-80">
                                        {item.type === "renovation"
                                            ? "Renovation"
                                            : "Landscape"}
                                    </p>
                                    <h4 className="font-serif-display text-2xl mt-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs opacity-80 mt-1">
                                        {item.location}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
