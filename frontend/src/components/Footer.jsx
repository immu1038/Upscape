import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { BRAND, ALL_SERVICES, waLink } from "@/data/site";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            data-testid="site-footer"
            className="bg-[color:var(--fg)] text-white"
        >
            <div className="h-px bg-white/10" />
            <div className="container-u py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-4">
                        <Logo className="h-8 w-auto mb-6" />
                        <p className="text-sm text-white/70 max-w-md leading-relaxed">
                            {BRAND.name} — {BRAND.tagline}. Developer-grade villa
                            handover, snagging, rectification, fit-out and
                            maintenance across Dubai.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href={BRAND.social.instagram}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                data-testid="f-ig"
                                className="w-10 h-10 rounded-full border border-white/20 inline-flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-colors"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href={BRAND.social.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                data-testid="f-li"
                                className="w-10 h-10 rounded-full border border-white/20 inline-flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-colors"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href={BRAND.social.facebook}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                data-testid="f-fb"
                                className="w-10 h-10 rounded-full border border-white/20 inline-flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-colors"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-4">
                            Explore
                        </p>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>
                                <Link to="/" className="hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-white">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookies" className="hover:text-white">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-4">
                            Services
                        </p>
                        <ul className="space-y-2 text-sm text-white/80">
                            {ALL_SERVICES.slice(0, 8).map((s) => (
                                <li key={s.slug}>
                                    <Link
                                        to={`/services/${s.slug}`}
                                        className="hover:text-white"
                                    >
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-4">
                            Contact
                        </p>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                <span>{BRAND.address}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                                <a
                                    href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                                    className="hover:text-white"
                                    data-testid="f-phone"
                                >
                                    {BRAND.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                                <a
                                    href={`mailto:${BRAND.email}`}
                                    className="hover:text-white break-all"
                                    data-testid="f-email"
                                >
                                    {BRAND.email}
                                </a>
                            </li>
                        </ul>
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-wa mt-5"
                            data-testid="f-whatsapp"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-xs tracking-[0.14em] uppercase text-white/50">
                        © {year} {BRAND.legal}. All rights reserved.
                    </p>
                    <p className="text-xs tracking-[0.14em] uppercase text-white/50">
                        Dubai · United Arab Emirates
                    </p>
                </div>
            </div>
        </footer>
    );
}
