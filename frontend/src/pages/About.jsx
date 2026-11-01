import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { useOpenEnquiry } from "@/components/Layout";
import { BRAND, STATS, WHY_UPSCAPE, waLink } from "@/data/site";

export default function About() {
    const openEnquiry = useOpenEnquiry();
    return (
        <>
            <Seo
                title="About UPSCAPE — Dubai Villa Handover Specialists"
                description="UPSCAPE is a Dubai villa handover and rectification practice working with developers, main contractors and villa owners across the UAE."
                path="/about"
            />
            <section className="bg-[color:var(--fg)] text-white py-20 sm:py-28">
                <div className="container-u">
                    <p className="eyebrow text-white/50 mb-5">About UPSCAPE</p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="h-display text-4xl sm:text-6xl lg:text-7xl max-w-5xl"
                    >
                        A Dubai site team built for handover.
                    </motion.h1>
                    <p className="mt-6 max-w-2xl text-white/70 text-base sm:text-lg">
                        {BRAND.legal} is a construction practice specialising in
                        taking villas from snag list to handover-ready across Dubai.
                        We work daily inside developer and contractor sites — and we
                        bring the same standards to private villa owners.
                    </p>
                </div>
            </section>

            <section className="py-20 sm:py-28 bg-white">
                <div className="container-u grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <p className="eyebrow mb-4">Our Story</p>
                        <h2 className="h-section text-3xl sm:text-5xl">
                            Built on handover sites.
                        </h2>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-[color:var(--muted-3)] leading-relaxed">
                        <p>
                            UPSCAPE grew up inside Dubai's biggest developer
                            programmes — closing snag lists, rectifying trades and
                            handing over villas on tight deadlines. We've carried
                            that discipline into every job we take, from a 200-unit
                            handover to a single villa renovation on the Palm.
                        </p>
                        <p>
                            Our teams are permanent, trained, insured and
                            site-ready. Our project managers run programmes with
                            daily photo reports, QA/QC sign-off and transparent
                            schedules — the way developer QS teams expect.
                        </p>
                        <p>
                            We work across Palm Jumeirah, Emirates Hills, Dubai
                            Hills, DAMAC Hills, Arabian Ranches, Tilal Al Ghaf, Al
                            Barari, Jumeirah Bay and MBR City.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-28 bg-[color:var(--muted-1)]">
                <div className="container-u">
                    <p className="eyebrow mb-4">By the Numbers</p>
                    <h2 className="h-section text-3xl sm:text-5xl mb-10 max-w-2xl">
                        Volume with precision.
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
                        {STATS.map((s) => (
                            <div
                                key={s.label}
                                className="border-l border-[color:var(--line-strong)] pl-5"
                            >
                                <p className="h-section text-4xl sm:text-5xl">
                                    {s.value}
                                    {s.suffix}
                                </p>
                                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-[color:var(--muted-3)]">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-28 bg-white">
                <div className="container-u">
                    <p className="eyebrow mb-4">Values</p>
                    <h2 className="h-section text-3xl sm:text-5xl mb-10 max-w-3xl">
                        What our clients get.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {WHY_UPSCAPE.map((w) => (
                            <div
                                key={w.title}
                                className="border-t border-[color:var(--line-strong)] pt-5"
                            >
                                <h3 className="h-section text-lg mb-2">{w.title}</h3>
                                <p className="text-sm text-[color:var(--muted-3)] leading-relaxed">
                                    {w.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-28 bg-[color:var(--fg)] text-white">
                <div className="container-u text-center">
                    <h2 className="h-display text-3xl sm:text-5xl max-w-4xl mx-auto">
                        Need a site team you can trust?
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <a
                            href={waLink()}
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
                        </button>
                        <Link to="/contact" className="btn btn-ghost border-white/30 text-white hover:bg-white hover:text-black">
                            Visit Contact
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
