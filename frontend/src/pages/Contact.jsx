import Seo from "@/components/Seo";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useOpenEnquiry } from "@/components/Layout";
import { BRAND, waLink } from "@/data/site";

export default function Contact() {
    const openEnquiry = useOpenEnquiry();
    return (
        <>
            <Seo
                title="Contact UPSCAPE — Dubai Villa Handover & Rectification"
                description="Message UPSCAPE on WhatsApp or request a quote. Villa handover, rectification, fit-out, pools and AC across Dubai."
                path="/contact"
            />
            <section className="bg-[color:var(--fg)] text-white py-20 sm:py-28">
                <div className="container-u">
                    <p className="eyebrow text-white/50 mb-5">Contact</p>
                    <h1 className="h-display text-[32px] sm:text-6xl lg:text-7xl max-w-5xl leading-[1.05]">
                        Let's talk about your villa.
                    </h1>
                    <p className="mt-6 max-w-xl text-white/70 text-base sm:text-lg">
                        WhatsApp is fastest. For multi-villa programmes, use the
                        quote request and we'll come back with a priced scope.
                    </p>
                </div>
            </section>

            <section className="py-20 sm:py-28 bg-white">
                <div className="container-u grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-6">
                        <p className="eyebrow mb-6">Direct Lines</p>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="w-10 h-10 shrink-0 rounded-full border border-[color:var(--line-strong)] inline-flex items-center justify-center">
                                    <Phone className="w-4 h-4" strokeWidth={1.4} />
                                </span>
                                <div>
                                    <p className="text-xs tracking-[0.2em] uppercase text-[color:var(--muted-3)]">
                                        Phone
                                    </p>
                                    <a
                                        href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                                        className="ul-link text-lg font-semibold"
                                        data-testid="c-phone"
                                    >
                                        {BRAND.phone}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-10 h-10 shrink-0 rounded-full border border-[color:var(--line-strong)] inline-flex items-center justify-center">
                                    <MessageCircle className="w-4 h-4" strokeWidth={1.4} />
                                </span>
                                <div>
                                    <p className="text-xs tracking-[0.2em] uppercase text-[color:var(--muted-3)]">
                                        WhatsApp
                                    </p>
                                    <a
                                        href={waLink()}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="ul-link text-lg font-semibold"
                                        data-testid="c-wa"
                                    >
                                        {BRAND.phone}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-10 h-10 shrink-0 rounded-full border border-[color:var(--line-strong)] inline-flex items-center justify-center">
                                    <Mail className="w-4 h-4" strokeWidth={1.4} />
                                </span>
                                <div>
                                    <p className="text-xs tracking-[0.2em] uppercase text-[color:var(--muted-3)]">
                                        Email
                                    </p>
                                    <a
                                        href={`mailto:${BRAND.email}`}
                                        className="ul-link text-lg font-semibold break-all"
                                        data-testid="c-email"
                                    >
                                        {BRAND.email}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-10 h-10 shrink-0 rounded-full border border-[color:var(--line-strong)] inline-flex items-center justify-center">
                                    <MapPin className="w-4 h-4" strokeWidth={1.4} />
                                </span>
                                <div>
                                    <p className="text-xs tracking-[0.2em] uppercase text-[color:var(--muted-3)]">
                                        Address
                                    </p>
                                    <p className="text-lg font-semibold">
                                        {BRAND.address}
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-10 flex flex-wrap gap-3">
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
                                className="btn btn-primary"
                            >
                                Request a Quote
                                <span className="arr">→</span>
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="aspect-[4/3] overflow-hidden rounded-sm bg-black">
                            <iframe
                                title="UPSCAPE location — Dubai"
                                src="https://www.google.com/maps?q=Dubai,%20UAE&output=embed"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    filter: "grayscale(100%) contrast(1.05)",
                                }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
