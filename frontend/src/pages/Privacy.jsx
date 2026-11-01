import Seo from "@/components/Seo";
import { BRAND } from "@/data/site";

export default function Privacy() {
    return (
        <>
            <Seo
                title="Privacy Policy"
                description="How UPSCAPE collects, uses and protects your personal data in line with UAE PDPL principles."
                path="/privacy"
            />
            <section className="bg-[color:var(--fg)] text-white py-20 sm:py-24">
                <div className="container-u">
                    <p className="eyebrow text-white/50 mb-4">Legal</p>
                    <h1 className="h-display text-4xl sm:text-5xl">Privacy Policy</h1>
                    <p className="mt-4 text-white/60 text-sm">
                        Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
                    </p>
                </div>
            </section>
            <section className="py-16 sm:py-20 bg-white">
                <div className="container-u max-w-3xl space-y-6 text-[color:var(--muted-3)] leading-relaxed">
                    <p>
                        {BRAND.legal} ("UPSCAPE", "we", "us") respects your privacy. This
                        policy explains what personal data we collect, how we use it and
                        the rights you have, consistent with UAE Federal Decree-Law No.
                        45 of 2021 regarding Personal Data Protection (PDPL).
                    </p>

                    <h2 className="h-section text-xl text-black">1. Data we collect</h2>
                    <p>
                        When you contact us, request a quote, or submit an enquiry we
                        may collect your name, company, phone number, email, location,
                        service details and any message content you send. We also
                        collect limited device and analytics data (where you have
                        consented) to improve the website.
                    </p>

                    <h2 className="h-section text-xl text-black">2. How we use data</h2>
                    <p>
                        We use your data to respond to enquiries, prepare quotes,
                        deliver services, maintain legal and tax records, and (with your
                        consent) improve our site and marketing. We do not sell personal
                        data.
                    </p>

                    <h2 className="h-section text-xl text-black">3. Sharing</h2>
                    <p>
                        We share data only with service providers that help us operate
                        (hosting, messaging, email) under confidentiality obligations,
                        and when required by law.
                    </p>

                    <h2 className="h-section text-xl text-black">4. Retention</h2>
                    <p>
                        We retain enquiry data for up to 24 months unless you request
                        earlier deletion, and project data for the period required by
                        UAE commercial and tax law.
                    </p>

                    <h2 className="h-section text-xl text-black">5. Your rights</h2>
                    <p>
                        You may ask us to access, correct, delete, or restrict the
                        processing of your personal data. Contact us at {BRAND.email}.
                    </p>

                    <h2 className="h-section text-xl text-black">6. International transfers</h2>
                    <p>
                        Some of our processors are located outside the UAE. We rely on
                        adequate protections required under PDPL for such transfers.
                    </p>

                    <h2 className="h-section text-xl text-black">7. Changes</h2>
                    <p>
                        We may update this policy from time to time; material changes
                        will be flagged on this page.
                    </p>

                    <h2 className="h-section text-xl text-black">8. Contact</h2>
                    <p>
                        {BRAND.legal}, {BRAND.address}. Email {BRAND.email}. Phone {BRAND.phone}.
                    </p>
                </div>
            </section>
        </>
    );
}
