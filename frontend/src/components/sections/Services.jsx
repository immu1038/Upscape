import { useRef } from "react";
import { motion } from "framer-motion";
import { Home, TreePine, Compass, Sparkles } from "lucide-react";

const SERVICES = [
    {
        icon: Home,
        title: "Premium House Renovation",
        subtitle: "Interiors · Architecture · Full-Villa",
        img: "https://images.pexels.com/photos/20418771/pexels-photo-20418771.jpeg",
        blurb:
            "Complete reimagining of Dubai villas & penthouses — from load-bearing structural design to hand-selected finishes, joinery and lighting choreography.",
        bullets: [
            "Structural & spatial redesign",
            "Bespoke joinery & millwork",
            "Curated stone, brass & timber",
        ],
        testid: "service-renovation",
    },
    {
        icon: TreePine,
        title: "Bespoke Landscape Design",
        subtitle: "Gardens · Pools · Outdoor Living",
        img: "https://images.unsplash.com/photo-1661333587575-25c87c14f398",
        blurb:
            "Landscape architecture engineered for the desert climate — private pools, shaded pavilions, native planting and evening-lit gardens that live year-round.",
        bullets: [
            "Pool & water feature design",
            "Native, drought-tolerant planting",
            "Outdoor kitchens & majlis",
        ],
        testid: "service-landscape",
    },
];

const EXTRAS = [
    {
        icon: Compass,
        title: "Site Planning",
        text: "Master-planning & orientation studies for large plots.",
    },
    {
        icon: Sparkles,
        title: "Finishing & Styling",
        text: "Furniture curation, art placement and final styling.",
    },
];

function TiltCard({ service, index }) {
    const ref = useRef(null);

    const onMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1200px) rotateX(${(-y * 5).toFixed(
            2,
        )}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
    };
    const onLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transform =
            "perspective(1200px) rotateX(0) rotateY(0) translateY(0)";
    };

    const Icon = service.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.8,
                ease: [0.2, 0.8, 0.2, 1],
                delay: index * 0.1,
            }}
            className="relative"
            data-testid={service.testid}
        >
            <div
                ref={ref}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                className="relative bg-white rounded-[6px] p-8 sm:p-10 lg:p-12 border border-[color:var(--maran-line)] transition-transform duration-500 will-change-transform"
                style={{
                    boxShadow: "0 30px 60px -30px rgba(26,26,26,0.18)",
                }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                    <div>
                        <div
                            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-8"
                            style={{
                                background:
                                    "linear-gradient(135deg, #E5D8C5 0%, #C5A880 100%)",
                            }}
                        >
                            <Icon
                                className="w-6 h-6 text-[color:var(--maran-charcoal)]"
                                strokeWidth={1.4}
                                aria-hidden="true"
                            />
                        </div>
                        <p className="text-eyebrow mb-4">{service.subtitle}</p>
                        <h3 className="font-serif-display text-3xl sm:text-4xl leading-tight text-[color:var(--maran-charcoal)] mb-5">
                            {service.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-[color:var(--maran-charcoal-60)] mb-6">
                            {service.blurb}
                        </p>
                        <ul className="space-y-2.5">
                            {service.bullets.map((b) => (
                                <li
                                    key={b}
                                    className="flex items-center gap-3 text-sm text-[color:var(--maran-charcoal)]"
                                >
                                    <span className="inline-block w-4 h-[1px] bg-[color:var(--maran-gold)]" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(180deg, transparent 60%, rgba(26,26,26,0.45) 100%)",
                            }}
                        />
                        <span className="absolute bottom-4 left-4 text-white text-[10px] tracking-[0.28em] uppercase">
                            0{index + 1} · MARÁN
                        </span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function Services() {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="relative py-24 sm:py-32 lg:py-40 bg-[color:var(--maran-off-white)]"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mb-16 sm:mb-20"
                >
                    <p className="text-eyebrow mb-5">Our Craft — 02</p>
                    <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-[color:var(--maran-charcoal)]">
                        Two disciplines.{" "}
                        <span className="italic">One atelier.</span>
                    </h2>
                    <p className="mt-6 text-[15px] sm:text-base text-[color:var(--maran-charcoal-60)] leading-relaxed max-w-2xl">
                        We work at the intersection of architecture, interiors
                        and landscape — orchestrating every millimetre of your
                        residence into a single, coherent statement.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {SERVICES.map((s, i) => (
                        <TiltCard key={s.title} service={s} index={i} />
                    ))}
                </div>

                {/* Extras */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {EXTRAS.map((e, idx) => {
                        const Icon = e.icon;
                        return (
                            <motion.div
                                key={e.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: idx * 0.08,
                                }}
                                className="flex items-start gap-5 p-8 rounded-[4px] border border-[color:var(--maran-line)] bg-white"
                                data-testid={`service-extra-${idx}`}
                            >
                                <Icon
                                    className="w-6 h-6 text-[color:var(--maran-gold)] shrink-0"
                                    strokeWidth={1.4}
                                    aria-hidden="true"
                                />
                                <div>
                                    <h4 className="font-serif-display text-2xl mb-2 text-[color:var(--maran-charcoal)]">
                                        {e.title}
                                    </h4>
                                    <p className="text-sm text-[color:var(--maran-charcoal-60)]">
                                        {e.text}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
