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
                        <img
                            src="https://customer-assets.emergentagent.com/job_desert-gold-design/artifacts/qj4647hy_Untitled%20design%20%287%29.png"
                            alt="UPSCAPE logo"
                            className="h-12 w-auto mb-5"
                        />
                        <p className="max-w-md text-sm leading-relaxed">
                            UPSCAPE — Renovations &amp; Fit-out. A Dubai studio
                            delivering luxury home renovations and bespoke
                            landscape architecture across the Emirates.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4">
                            Studio
                        </p>
                        <p className="text-sm">
                            402-05 Sheikh Suhail Maktoum
                            <br />
                            Juma Bldg · Port Saeed
                            <br />
                            Deira, Dubai · UAE
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4">
                            Contact
                        </p>
                        <a
                            href="mailto:info@upscapeuae.com"
                            className="block text-sm hover:text-[color:var(--maran-gold)] transition-colors break-all"
                            data-testid="footer-email"
                        >
                            info@upscapeuae.com
                        </a>
                        <a
                            href="tel:+971566664205"
                            className="block text-sm mt-1 hover:text-[color:var(--maran-gold)] transition-colors"
                            data-testid="footer-phone"
                        >
                            +971 56 666 4205
                        </a>
                    </div>

                    <div className="md:col-span-2">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4">
                            Follow
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/upscape.renovations"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                data-testid="social-instagram"
                                className="w-10 h-10 rounded-full border border-white/20 inline-flex items-center justify-center hover:border-[color:var(--maran-gold)] hover:text-[color:var(--maran-gold)] transition-colors"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.facebook.com/upscaperenovations/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                data-testid="social-facebook"
                                className="w-10 h-10 rounded-full border border-white/20 inline-flex items-center justify-center hover:border-[color:var(--maran-gold)] hover:text-[color:var(--maran-gold)] transition-colors"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs tracking-[0.16em] uppercase text-white/50">
                        © {year} UPSCAPE. All rights reserved.
                    </p>
                    <p className="text-xs tracking-[0.16em] uppercase text-white/50">
                        Crafted in Dubai · UAE
                    </p>
                </div>
            </div>
        </footer>
    );
}
