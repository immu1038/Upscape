import Seo from "@/components/Seo";
import { BRAND } from "@/data/site";

export default function Cookies() {
    return (
        <>
            <Seo
                title="Cookie Policy"
                description="How UPSCAPE uses cookies and similar technologies, and how to manage your preferences."
                path="/cookies"
            />
            <section className="bg-[color:var(--fg)] text-white py-20 sm:py-24">
                <div className="container-u">
                    <p className="eyebrow text-white/50 mb-4">Legal</p>
                    <h1 className="h-display text-4xl sm:text-5xl">Cookie Policy</h1>
                    <p className="mt-4 text-white/60 text-sm">
                        Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
                    </p>
                </div>
            </section>
            <section className="py-16 sm:py-20 bg-white">
                <div className="container-u max-w-3xl space-y-6 text-[color:var(--muted-3)] leading-relaxed">
                    <p>
                        This Cookie Policy explains how {BRAND.legal} uses cookies and
                        similar technologies on {BRAND.canonical}.
                    </p>

                    <h2 className="h-section text-xl text-black">1. What cookies are</h2>
                    <p>
                        Cookies are small text files stored on your device by your
                        browser. They are commonly used to make websites work and to
                        provide anonymous analytics and marketing data.
                    </p>

                    <h2 className="h-section text-xl text-black">2. Categories we use</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Necessary.</strong> Required for the site to work —
                            cannot be turned off.
                        </li>
                        <li>
                            <strong>Analytics.</strong> Google Analytics 4 — helps us
                            understand how the site is used. Loaded only after consent.
                        </li>
                        <li>
                            <strong>Marketing.</strong> Meta Pixel — measures ad
                            campaigns. Loaded only after consent.
                        </li>
                    </ul>

                    <h2 className="h-section text-xl text-black">3. Managing cookies</h2>
                    <p>
                        You can accept, reject or customise cookies from the banner that
                        appears on your first visit, and change your preferences at any
                        time by clearing your browser storage for this site.
                    </p>

                    <h2 className="h-section text-xl text-black">4. Contact</h2>
                    <p>
                        Questions about cookies? Email {BRAND.email} or call {BRAND.phone}.
                    </p>
                </div>
            </section>
        </>
    );
}
