import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Brush,
    Hammer,
    Grid3x3,
    Wrench,
    Sparkles,
    KeyRound,
    Home as HomeIcon,
    LayoutGrid,
    Waves,
    Leaf,
    Snowflake,
} from "lucide-react";
import Seo from "@/components/Seo";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useOpenEnquiry } from "@/components/Layout";
import {
    BRAND,
    STATS,
    CLIENTS,
    CORE_SERVICES,
    ADDITIONAL_SERVICES,
    PROCESS,
    WHY_UPSCAPE,
    PROJECTS,
    PROJECT_CATEGORIES,
    BEFORE_AFTER,
    CASE_STUDIES,
    TESTIMONIALS,
    FAQS,
    waLink,
} from "@/data/site";

const ICONS = {
    paint: Brush,
    joinery: Hammer,
    tiles: Grid3x3,
    wrench: Wrench,
    sparkle: Sparkles,
    key: KeyRound,
    home: HomeIcon,
    layout: LayoutGrid,
    pool: Waves,
    leaf: Leaf,
    snow: Snowflake,
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.06 },
    }),
};

function Counter({ to, suffix, inView }) {
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let r;
        const start = performance.now();
        const dur = 1500;
        const step = (t) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
            if (p < 1) r = requestAnimationFrame(step);
        };
        r = requestAnimationFrame(step);
        return () => cancelAnimationFrame(r);
    }, [inView, to]);
    return (
        <span>
            {n}
            {suffix}
        </span>
    );
}

function SectionHeading({ eyebrow, title, children, light }) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 sm:mb-16"
        >
            <p className={`eyebrow ${light ? "text-white/60" : ""}`}>{eyebrow}</p>
            <h2
                className={`h-section text-[28px] sm:text-5xl lg:text-6xl mt-4 max-w-4xl leading-[1.08] ${light ? "text-white" : ""}`}
            >
                {title}
            </h2>
            {children && (
                <p
                    className={`mt-6 max-w-2xl text-base sm:text-lg leading-relaxed ${light ? "text-white/70" : "text-[color:var(--muted-3)]"}`}
                >
                    {children}
                </p>
            )}
        </motion.div>
    );
}

function Hero({ openEnquiry }) {
    return (
        <section
            id="home"
            data-testid="hero"
            className="relative min-h-[calc(100vh-64px)] bg-[color:var(--fg)] text-white overflow-hidden"
        >
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
                    alt="Finished Dubai villa"
                    className="w-full h-full object-cover opacity-70"
                    style={{ animation: "none" }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.9) 100%)",
                    }}
                />
            </div>
            <div className="container-u relative z-10 pt-24 sm:pt-32 pb-20 min-h-[calc(100vh-64px)] flex flex-col justify-end">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="eyebrow text-white/60 mb-5"
                >
                    Villa Handover & Rectification · Dubai
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
                    className="h-display text-[40px] sm:text-6xl lg:text-[108px] max-w-6xl leading-[1.02]"
                >
                    Handover-ready.
                    <br />
                    Every villa.
                    <br />
                    Every time.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
                >
                    <p className="lg:col-span-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                        We take Dubai villas from snag list to handover-ready and
                        stay on call for post-handover support — for developers,
                        contractors, FM companies and villa owners.
                    </p>
                    <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
                        <button
                            type="button"
                            onClick={() => openEnquiry()}
                            data-testid="hero-quote-cta"
                            className="btn btn-inverse"
                        >
                            Request a Quote
                            <span className="arr">→</span>
                        </button>
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="hero-wa-cta"
                            className="btn btn-wa"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function TrustBar() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <section
            ref={ref}
            data-testid="trust-bar"
            className="py-16 sm:py-20 bg-white border-b border-[color:var(--line)]"
        >
            <div className="container-u">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
                    {STATS.map((s, i) => (
                        <motion.div
                            key={s.label}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="border-l border-[color:var(--line)] pl-6"
                        >
                            <p className="h-section text-4xl sm:text-5xl lg:text-6xl">
                                <Counter to={s.value} suffix={s.suffix} inView={inView} />
                            </p>
                            <p className="mt-2 text-xs tracking-[0.2em] uppercase text-[color:var(--muted-3)]">
                                {s.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-14 border-t border-[color:var(--line)] pt-10 overflow-hidden">
                    <p className="eyebrow mb-6">Clients & Developer Programmes</p>
                    <div className="marquee-track" aria-hidden="true">
                        {[...Array(2)].map((_, k) => (
                            <div
                                key={k}
                                className="flex items-center gap-14 pr-14 whitespace-nowrap"
                            >
                                {CLIENTS.map((c) => (
                                    <span
                                        key={c + k}
                                        className="text-xl sm:text-2xl font-bold tracking-tight text-[color:var(--muted-2)] hover:text-[color:var(--muted-3)] transition-colors"
                                    >
                                        {c}
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

function CoreServices() {
    return (
        <section id="services" data-testid="services" className="py-24 sm:py-32 bg-white">
            <div className="container-u">
                <SectionHeading
                    eyebrow="Core Services — 02"
                    title={<>Six disciplines. <span className="text-[color:var(--muted-3)]">One site team.</span></>}
                >
                    Everything a developer or villa owner needs to take a unit from
                    snag list to handover — delivered by a single coordinated UPSCAPE
                    team.
                </SectionHeading>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {CORE_SERVICES.map((s, i) => {
                        const Icon = ICONS[s.icon] || Wrench;
                        return (
                            <motion.div
                                key={s.slug}
                                variants={fadeUp}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-60px" }}
                                className="card-lift border border-[color:var(--line)] rounded-sm overflow-hidden bg-white"
                            >
                                <Link
                                    to={`/services/${s.slug}`}
                                    className="block"
                                    data-testid={`svc-card-${s.slug}`}
                                >
                                    <div className="svc-img aspect-[16/10]">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="w-full h-full object-cover grayscale contrast-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[color:var(--line-strong)]">
                                                <Icon
                                                    className="w-4 h-4"
                                                    strokeWidth={1.4}
                                                />
                                            </span>
                                            <p className="eyebrow">0{i + 1}</p>
                                        </div>
                                        <h3 className="h-section text-xl sm:text-2xl mb-2">
                                            {s.title}
                                        </h3>
                                        <p className="text-sm text-[color:var(--muted-3)] leading-relaxed">
                                            {s.short}
                                        </p>
                                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                                            Learn more
                                            <ArrowRight className="w-4 h-4 arr transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function AdditionalServices() {
    return (
        <section data-testid="additional-services" className="py-24 sm:py-32 bg-[color:var(--muted-1)]">
            <div className="container-u">
                <SectionHeading
                    eyebrow="Additional Services — 03"
                    title={<>Beyond handover.</>}
                >
                    Full renovation, fit-out, pools, landscaping and AC maintenance
                    for Dubai villas and penthouses.
                </SectionHeading>

                <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:gap-5 pb-2 -mx-5 px-5 lg:mx-0 lg:px-0">
                    {ADDITIONAL_SERVICES.map((s, i) => {
                        const Icon = ICONS[s.icon] || Wrench;
                        return (
                            <motion.div
                                key={s.slug}
                                variants={fadeUp}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="min-w-[260px] lg:min-w-0 snap-start"
                            >
                                <Link
                                    to={`/services/${s.slug}`}
                                    className="card-lift block bg-white border border-[color:var(--line)] rounded-sm overflow-hidden h-full"
                                    data-testid={`add-svc-${s.slug}`}
                                >
                                    <div className="svc-img aspect-[4/5]">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="w-full h-full object-cover grayscale contrast-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <Icon
                                            className="w-5 h-5 mb-3"
                                            strokeWidth={1.4}
                                        />
                                        <h3 className="h-section text-lg mb-1">
                                            {s.title}
                                        </h3>
                                        <p className="text-xs text-[color:var(--muted-3)]">
                                            {s.short}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Process() {
    return (
        <section id="process" data-testid="process" className="py-24 sm:py-32 bg-[color:var(--fg)] text-white">
            <div className="container-u">
                <SectionHeading
                    eyebrow="Our Process — 04"
                    title={<>Five steps to handover.</>}
                    light
                >
                    A disciplined site process your developer or client can audit at
                    any point.
                </SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
                    {PROCESS.map((s, i) => (
                        <motion.div
                            key={s.step}
                            variants={fadeUp}
                            custom={i}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative pt-6 border-t border-white/15"
                            data-testid={`process-${i}`}
                        >
                            <p className="eyebrow text-white/50 mb-3">{s.step}</p>
                            <h3 className="h-section text-xl mb-2">{s.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed">
                                {s.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Projects() {
    const [cat, setCat] = useState("All");
    const visible = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);
    return (
        <section id="projects" data-testid="projects" className="py-24 sm:py-32 bg-white">
            <div className="container-u">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                    <SectionHeading
                        eyebrow="Selected Projects — 05"
                        title={<>Villas we've handed over.</>}
                    />
                    <div className="flex flex-wrap gap-2 lg:mb-6">
                        {PROJECT_CATEGORIES.map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => setCat(c)}
                                className={`chip ${cat === c ? "on" : ""}`}
                                data-testid={`filter-${c.toLowerCase()}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
                >
                    {visible.map((p, i) => (
                        <motion.div
                            layout
                            key={p.id}
                            variants={fadeUp}
                            custom={i}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={`proj aspect-[4/5] ${
                                i % 5 === 0 ? "lg:row-span-2 lg:aspect-[4/8]" : ""
                            }`}
                            data-testid={`project-${p.id}`}
                        >
                            <img src={p.image} alt={p.title} loading="lazy" />
                            <div className="proj-ov" />
                            <div className="absolute left-5 bottom-5 right-5 text-white">
                                <p className="text-[10px] tracking-[0.28em] uppercase opacity-80">
                                    {p.category}
                                </p>
                                <h4 className="text-base sm:text-lg font-semibold mt-1 leading-snug">
                                    {p.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Featured before/after */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                        <BeforeAfterSlider
                            beforeSrc={BEFORE_AFTER[0].before}
                            afterSrc={BEFORE_AFTER[0].after}
                        />
                    </div>
                    <div className="lg:col-span-5">
                        <p className="eyebrow mb-3">Featured · Before / After</p>
                        <h3 className="h-section text-3xl sm:text-4xl mb-4">
                            From snag list to handover.
                        </h3>
                        <p className="text-[color:var(--muted-3)] leading-relaxed">
                            {BEFORE_AFTER[0].label}
                        </p>
                        <p className="mt-4 text-xs tracking-[0.22em] uppercase">
                            Drag the divider →
                        </p>
                    </div>
                </div>

                {/* Case studies strip */}
                <div className="mt-20 pt-16 border-t border-[color:var(--line)]">
                    <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
                        <div>
                            <p className="eyebrow mb-3">Case Studies</p>
                            <h3 className="h-section text-3xl sm:text-4xl max-w-2xl">
                                Three programmes in detail.
                            </h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {CASE_STUDIES.map((c, i) => (
                            <motion.div
                                key={c.slug}
                                variants={fadeUp}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <Link
                                    to={`/case-studies/${c.slug}`}
                                    className="card-lift block bg-white border border-[color:var(--line)] overflow-hidden"
                                    data-testid={`case-${c.slug}`}
                                >
                                    <div className="svc-img aspect-[16/10]">
                                        <img
                                            src={c.cover}
                                            alt={c.title}
                                            className="w-full h-full object-cover grayscale contrast-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="eyebrow mb-2">
                                            {c.category} · {c.year}
                                        </p>
                                        <h4 className="h-section text-lg mb-2">
                                            {c.title}
                                        </h4>
                                        <p className="text-sm text-[color:var(--muted-3)] leading-relaxed">
                                            {c.summary}
                                        </p>
                                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                                            Read case study
                                            <ArrowRight className="w-4 h-4 arr transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Why() {
    return (
        <section data-testid="why" className="py-24 sm:py-32 bg-[color:var(--muted-1)]">
            <div className="container-u grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="lg:col-span-6 relative"
                >
                    <div className="aspect-[4/5] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80"
                            alt="UPSCAPE site team"
                            className="w-full h-full object-cover grayscale contrast-105"
                            loading="lazy"
                        />
                    </div>
                </motion.div>
                <div className="lg:col-span-6">
                    <SectionHeading
                        eyebrow="Why UPSCAPE — 06"
                        title={<>Developer-grade. Every unit.</>}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_UPSCAPE.map((w, i) => (
                            <motion.div
                                key={w.title}
                                variants={fadeUp}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="border-t border-[color:var(--line-strong)] pt-5"
                            >
                                <h3 className="h-section text-lg mb-2">
                                    {w.title}
                                </h3>
                                <p className="text-sm text-[color:var(--muted-3)] leading-relaxed">
                                    {w.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    const [i, setI] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6500);
        return () => clearInterval(t);
    }, []);
    const t = TESTIMONIALS[i];
    return (
        <section data-testid="testimonials" className="py-24 sm:py-32 bg-white">
            <div className="container-u">
                <SectionHeading eyebrow="Testimonials — 07" title={<>In their words.</>} />
                <div className="max-w-4xl">
                    <motion.blockquote
                        key={t.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug tracking-tight"
                    >
                        “{t.quote}”
                    </motion.blockquote>
                    <div className="mt-8 flex items-center gap-4">
                        <span
                            aria-hidden="true"
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[color:var(--fg)] text-white font-bold text-sm tracking-wide"
                        >
                            {t.initials || t.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                        </span>
                        <div>
                            <p className="text-sm font-semibold">{t.name}</p>
                            <p className="text-xs tracking-[0.18em] uppercase text-[color:var(--muted-3)] mt-0.5">
                                {t.company}
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 flex gap-2">
                        {TESTIMONIALS.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setI(idx)}
                                aria-label={`Testimonial ${idx + 1}`}
                                className={`h-[2px] w-10 ${idx === i ? "bg-black" : "bg-black/20"}`}
                                data-testid={`tt-${idx}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQ() {
    const [open, setOpen] = useState(0);
    return (
        <section id="faq" data-testid="faq" className="py-24 sm:py-32 bg-[color:var(--muted-1)]">
            <div className="container-u grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                    <SectionHeading eyebrow="FAQ — 08" title={<>Common questions.</>}>
                        Still need details? Message us on WhatsApp — we usually
                        reply within the hour.
                    </SectionHeading>
                    <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-wa">
                        Chat on WhatsApp
                    </a>
                </div>
                <div className="lg:col-span-7">
                    {FAQS.map((f, i) => (
                        <div className="acc-item" key={f.q} data-testid={`faq-${i}`}>
                            <button
                                className="acc-trigger"
                                onClick={() => setOpen(open === i ? -1 : i)}
                                aria-expanded={open === i}
                            >
                                {f.q}
                                <span className="text-xl font-light">
                                    {open === i ? "–" : "+"}
                                </span>
                            </button>
                            <motion.div
                                className="acc-content"
                                initial={false}
                                animate={{ height: open === i ? "auto" : 0 }}
                                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                            >
                                <p>{f.a}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalCTA({ openEnquiry }) {
    return (
        <section data-testid="final-cta" className="py-24 sm:py-32 bg-[color:var(--fg)] text-white">
            <div className="container-u text-center">
                <p className="eyebrow text-white/50 mb-5">Ready when you are</p>
                <h2 className="h-display text-[32px] sm:text-6xl lg:text-7xl max-w-5xl mx-auto leading-[1.05]">
                    Have villas to hand over?
                    <br />
                    Let's talk.
                </h2>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    <a
                        href={waLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-wa"
                        data-testid="final-wa"
                    >
                        Chat on WhatsApp
                    </a>
                    <button
                        type="button"
                        onClick={() => openEnquiry()}
                        className="btn btn-inverse"
                        data-testid="final-quote"
                    >
                        Request a Quote
                        <span className="arr">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const openEnquiry = useOpenEnquiry();

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "HomeAndConstructionBusiness",
                name: BRAND.name,
                legalName: BRAND.legal,
                description: BRAND.description,
                url: BRAND.canonical,
                image: `${BRAND.canonical}/og-image.svg`,
                telephone: BRAND.phone,
                email: BRAND.email,
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Dubai",
                    addressCountry: "AE",
                },
                areaServed: {
                    "@type": "Place",
                    name: "United Arab Emirates",
                },
                sameAs: [BRAND.social.instagram, BRAND.social.linkedin, BRAND.social.facebook],
            },
            {
                "@type": "FAQPage",
                mainEntity: FAQS.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
            },
        ],
    };

    return (
        <>
            <Seo
                title="Villa Handover & Rectification Specialists Dubai"
                description={`${BRAND.description} 200+ villas delivered. Developer-grade standards.`}
                path="/"
                jsonLd={jsonLd}
            />
            <Hero openEnquiry={openEnquiry} />
            <TrustBar />
            <CoreServices />
            <AdditionalServices />
            <Process />
            <Projects />
            <Why />
            <Testimonials />
            <FAQ />
            <FinalCTA openEnquiry={openEnquiry} />
        </>
    );
}
