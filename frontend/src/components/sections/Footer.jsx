import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            data-testid="site-footer"
            className="relative bg-[color:var(--maran-charcoal)] text-white/70 py-16"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-5">
                        <p className="font-serif-display text-3xl text-white">
                            MARÁN
                            <span className="text-[color:var(--maran-gold)]">
                                {" "}
                                Atelier
                            </span>
                        </p>
                        <p className="mt-4 max-w-md text-sm leading-relaxed">
                            Luxury home renovation & bespoke landscape
                            architecture, quietly practiced in Dubai since 2011.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4">
                            Studio
                        </p>
                        <p className="text-sm">
                            Boulevard Plaza · Downtown Dubai
                            <br />
                            United Arab Emirates
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4">
                            Contact
                        </p>
                        <a
                            href="mailto:atelier@maran.ae"
                            className="block text-sm hover:text-[color:var(--maran-gold)] transition-colors"
                            data-testid="footer-email"
                        >
                            atelier@maran.ae
                        </a>
                        <a
                            href="tel:+97145550198"
                            className="block text-sm mt-1 hover:text-[color:var(--maran-gold)] transition-colors"
                            data-testid="footer-phone"
                        >
                            +971 4 555 0198
                        </a>
                    </div>

                    <div className="md:col-span-2">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4">
                            Follow
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                data-testid="social-instagram"
                                className="w-10 h-10 rounded-full border border-white/20 inline-flex items-center justify-center hover:border-[color:var(--maran-gold)] hover:text-[color:var(--maran-gold)] transition-colors"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                data-testid="social-linkedin"
                                className="w-10 h-10 rounded-full border border-white/20 inline-flex items-center justify-center hover:border-[color:var(--maran-gold)] hover:text-[color:var(--maran-gold)] transition-colors"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs tracking-[0.16em] uppercase text-white/50">
                        © {year} MARÁN Atelier. All rights reserved.
                    </p>
                    <p className="text-xs tracking-[0.16em] uppercase text-white/50">
                        Crafted in Dubai · UAE
                    </p>
                </div>
            </div>
        </footer>
    );
}
