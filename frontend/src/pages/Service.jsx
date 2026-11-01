import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { useOpenEnquiry } from "@/components/Layout";
import {
    ALL_SERVICES,
    PROCESS,
    FAQS,
    PROJECTS,
    BRAND,
    waLink,
} from "@/data/site";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.05 },
    }),
};

export default function Service() {
    const { slug } = useParams();
    const svc = ALL_SERVICES.find((s) => s.slug === slug);
    const openEnquiry = useOpenEnquiry();

    if (!svc) return <Navigate to="/404" replace />;

    const related = PROJECTS.slice(0, 4);
    const title = `${svc.title} Dubai`;
    const path = `/services/${svc.slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${svc.title} Services Dubai`,
        description: svc.description,
        provider: {
            "@type": "HomeAndConstructionBusiness",
            name: BRAND.name,
            url: BRAND.canonical,
            telephone: BRAND.phone,
            email: BRAND.email,
        },
        areaServed: "Dubai, United Arab Emirates",
        url: `${BRAND.canonical}${path}`,
    };

    return (
        <>
            <Seo
                title={title}
                description={`${svc.title} services in Dubai — ${svc.short} ${BRAND.name} delivers developer-grade standards for villas across Dubai.`}
                path={path}
                jsonLd={jsonLd}
            />

            {/* Hero */}
            <section
                className="relative bg-[color:var(--fg)] text-white overflow-hidden"
                data-testid="svc-hero"
            >
                <div className="absolute inset-0">
                    <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover opacity-60"
                        loading="eager"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.9) 100%)",
                        }}
                    />
                </div>
                <div className="container-u relative z-10 pt-16 pb-20 sm:pt-20 sm:pb-28">
                    <nav aria-label="Breadcrumb" className="eyebrow text-white/50 mb-6">
                        <Link to="/" className="hover:text-white">
                            Home
                        </Link>{" "}
                        /{" "}
                        <Link to="/#services" className="hover:text-white">
                            Services
                        </Link>{" "}
                        / <span className="text-white/80">{svc.title}</span>
                    </nav>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="h-display text-[32px] sm:text-6xl lg:text-7xl max-w-5xl leading-[1.05]"
                    >
                        {svc.title}
                        <span className="block text-white/50 mt-2 text-lg sm:text-3xl font-normal leading-tight">
                            Dubai villas, developer-grade finish.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="mt-6 max-w-2xl text-base sm:text-lg text-white/75"
                    >
                        {svc.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        <button
                            type="button"
                            onClick={() => openEnquiry(svc.title)}
                            className="btn btn-inverse"
                            data-testid="svc-quote"
                        >
                            Request a Quote
                            <span className="arr">→</span>
                        </button>
                        <a
                            href={waLink(
                                `Hi UPSCAPE, I'd like to enquire about ${svc.title} services.`,
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-wa"
                            data-testid="svc-wa"
                        >
                            Chat on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Included */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="container-u grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-5">
                        <p className="eyebrow mb-4">What's Included</p>
                        <h2 className="h-section text-3xl sm:text-5xl">
                            Scope you can price <span className="text-[color:var(--muted-3)]">confidently.</span>
                        </h2>
                    </div>
                    <div className="lg:col-span-7">
                        <ul className="divide-y divide-[color:var(--line)]">
                            {svc.included.map((item, i) => (
                                <motion.li
                                    key={item}
                                    variants={fadeUp}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 py-5"
                                >
                                    <span className="w-8 h-8 shrink-0 inline-flex items-center justify-center rounded-full border border-[color:var(--line-strong)]">
                                        <Check className="w-4 h-4" strokeWidth={1.4} />
                                    </span>
                                    <span className="text-base sm:text-lg">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 sm:py-28 bg-[color:var(--muted-1)]">
                <div className="container-u">
                    <p className="eyebrow mb-4">Our Process</p>
                    <h2 className="h-section text-3xl sm:text-5xl mb-10 max-w-3xl">
                        How we deliver.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                        {PROCESS.map((p, i) => (
                            <motion.div
                                key={p.step}
                                variants={fadeUp}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="bg-white p-6 border border-[color:var(--line)]"
                            >
                                <p className="eyebrow mb-2">{p.step}</p>
                                <h3 className="h-section text-lg mb-2">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-[color:var(--muted-3)]">
                                    {p.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related projects */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="container-u">
                    <p className="eyebrow mb-4">Related Projects</p>
                    <h2 className="h-section text-3xl sm:text-5xl mb-10">
                        Recent work.
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {related.map((p) => (
                            <div className="proj aspect-[4/5]" key={p.id}>
                                <img src={p.image} alt={p.title} loading="lazy" />
                                <div className="proj-ov" />
                                <div className="absolute left-4 bottom-4 right-4 text-white">
                                    <p className="text-[10px] tracking-[0.28em] uppercase opacity-80">
                                        {p.category}
                                    </p>
                                    <h4 className="text-sm font-semibold mt-1">
                                        {p.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ snippet */}
            <section className="py-20 sm:py-28 bg-[color:var(--muted-1)]">
                <div className="container-u grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-5">
                        <p className="eyebrow mb-4">FAQ</p>
                        <h2 className="h-section text-3xl sm:text-5xl">
                            Questions, answered.
                        </h2>
                    </div>
                    <div className="lg:col-span-7">
                        {FAQS.slice(0, 4).map((f) => (
                            <details
                                key={f.q}
                                className="acc-item group py-4 border-b border-[color:var(--line)]"
                            >
                                <summary className="cursor-pointer font-semibold text-base flex justify-between items-center list-none">
                                    {f.q}
                                    <span className="text-xl font-light group-open:rotate-45 transition-transform">
                                        +
                                    </span>
                                </summary>
                                <p className="pt-3 text-sm text-[color:var(--muted-3)] leading-relaxed">
                                    {f.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 sm:py-28 bg-[color:var(--fg)] text-white">
                <div className="container-u text-center">
                    <h2 className="h-display text-3xl sm:text-5xl max-w-4xl mx-auto">
                        Ready to brief us on your {svc.title.toLowerCase()} job?
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <a
                            href={waLink(
                                `Hi UPSCAPE, I'd like a quote for ${svc.title} in Dubai.`,
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-wa"
                        >
                            Chat on WhatsApp
                        </a>
                        <button
                            type="button"
                            onClick={() => openEnquiry(svc.title)}
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
