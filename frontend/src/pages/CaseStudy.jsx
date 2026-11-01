import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Users, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import { useOpenEnquiry } from "@/components/Layout";
import { CASE_STUDIES, BRAND, waLink } from "@/data/site";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.05 },
    }),
};

export default function CaseStudy() {
    const { slug } = useParams();
    const cs = CASE_STUDIES.find((c) => c.slug === slug);
    const openEnquiry = useOpenEnquiry();

    if (!cs) return <Navigate to="/404" replace />;

    const path = `/case-studies/${cs.slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: cs.title,
        description: cs.summary,
        image: cs.cover,
        datePublished: `${cs.year}-01-01`,
        author: { "@type": "Organization", name: BRAND.name, url: BRAND.canonical },
        publisher: { "@type": "Organization", name: BRAND.name, url: BRAND.canonical },
        mainEntityOfPage: `${BRAND.canonical}${path}`,
    };

    return (
        <>
            <Seo
                title={`${cs.title} — Case Study`}
                description={cs.summary}
                path={path}
                image={cs.cover}
                type="article"
                jsonLd={jsonLd}
            />

            {/* Hero */}
            <section
                className="relative bg-[color:var(--fg)] text-white overflow-hidden"
                data-testid="cs-hero"
            >
                <div className="absolute inset-0">
                    <img
                        src={cs.cover}
                        alt={cs.title}
                        className="w-full h-full object-cover opacity-55 grayscale contrast-110"
                        loading="eager"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.92) 100%)",
                        }}
                    />
                </div>
                <div className="container-u relative z-10 pt-16 pb-24 sm:pt-20 sm:pb-32">
                    <nav aria-label="Breadcrumb" className="eyebrow text-white/50 mb-6">
                        <Link to="/" className="hover:text-white">Home</Link>{" "}
                        / <Link to="/#projects" className="hover:text-white">Projects</Link>{" "}
                        / <span className="text-white/80">Case Study</span>
                    </nav>
                    <p className="eyebrow text-white/60 mb-5">
                        {cs.category} · {cs.year}
                    </p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="h-display text-[32px] sm:text-6xl lg:text-7xl max-w-5xl leading-[1.05]"
                    >
                        {cs.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="mt-6 max-w-2xl text-base sm:text-lg text-white/75"
                    >
                        {cs.summary}
                    </motion.p>

                    {/* Meta row */}
                    <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/15 pt-8">
                        {[
                            { Icon: MapPin, k: "Location", v: cs.location },
                            { Icon: Calendar, k: "Year", v: cs.year },
                            { Icon: Clock, k: "Duration", v: cs.duration },
                            { Icon: Users, k: "Site Team", v: cs.teamSize },
                        ].map((m, i) => (
                            <div key={m.k} className="flex items-start gap-3">
                                <m.Icon
                                    className="w-4 h-4 mt-1 text-white/60"
                                    strokeWidth={1.4}
                                />
                                <div>
                                    <p className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                                        {m.k}
                                    </p>
                                    <p className="text-base font-semibold mt-1">
                                        {m.v}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge + Scope */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="container-u grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <p className="eyebrow mb-4">The Challenge</p>
                        <h2 className="h-section text-3xl sm:text-5xl mb-5">
                            What we had to solve.
                        </h2>
                        <p className="text-[color:var(--muted-3)] leading-relaxed">
                            {cs.challenge}
                        </p>
                    </div>
                    <div className="lg:col-span-7">
                        <p className="eyebrow mb-4">The Scope</p>
                        <ul className="divide-y divide-[color:var(--line)]">
                            {cs.scope.map((s, i) => (
                                <motion.li
                                    key={s}
                                    variants={fadeUp}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 py-4"
                                >
                                    <span className="eyebrow pt-1">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-base sm:text-lg">{s}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Metrics */}
            <section className="py-20 sm:py-28 bg-[color:var(--fg)] text-white">
                <div className="container-u">
                    <p className="eyebrow text-white/60 mb-4">By the Numbers</p>
                    <h2 className="h-section text-3xl sm:text-5xl mb-10 max-w-3xl">
                        The outcome.
                    </h2>
                    <p className="text-white/70 max-w-2xl mb-10 leading-relaxed">
                        {cs.outcome}
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
                        {cs.metrics.map((m) => (
                            <div
                                key={m.v}
                                className="border-l border-white/15 pl-5"
                            >
                                <p className="h-section text-4xl sm:text-5xl lg:text-6xl">
                                    {m.k}
                                </p>
                                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-white/60">
                                    {m.v}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="container-u">
                    <p className="eyebrow mb-4">On Site</p>
                    <h2 className="h-section text-3xl sm:text-5xl mb-10">
                        Site gallery.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cs.gallery.map((src, i) => (
                            <motion.div
                                key={src + i}
                                variants={fadeUp}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className={`proj ${
                                    i === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                                }`}
                            >
                                <img src={src} alt={`${cs.title} — site photo ${i + 1}`} loading="lazy" />
                                <div className="proj-ov" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other case studies */}
            <section className="py-20 sm:py-28 bg-[color:var(--muted-1)]">
                <div className="container-u">
                    <p className="eyebrow mb-4">More Work</p>
                    <h2 className="h-section text-3xl sm:text-5xl mb-10">
                        Other case studies.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {CASE_STUDIES.filter((c) => c.slug !== cs.slug).map((c) => (
                            <Link
                                key={c.slug}
                                to={`/case-studies/${c.slug}`}
                                className="card-lift block bg-white border border-[color:var(--line)] overflow-hidden"
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
                                    <p className="eyebrow mb-2">{c.category} · {c.year}</p>
                                    <h3 className="h-section text-lg mb-1">
                                        {c.title}
                                    </h3>
                                    <p className="text-sm text-[color:var(--muted-3)]">
                                        {c.summary}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 sm:py-28 bg-[color:var(--fg)] text-white">
                <div className="container-u text-center">
                    <h2 className="h-display text-3xl sm:text-5xl max-w-4xl mx-auto">
                        Have a similar programme to run?
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <a
                            href={waLink(
                                `Hi UPSCAPE, I'd like to talk about a programme similar to "${cs.title}".`,
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-wa"
                        >
                            Chat on WhatsApp
                        </a>
                        <button
                            type="button"
                            onClick={() => openEnquiry()}
                            className="btn btn-inverse"
                        >
                            Request a Quote
                            <ArrowRight className="w-4 h-4 arr" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
