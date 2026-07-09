import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";

const initial = { name: "", email: "", phone: "", project: "", message: "" };

export default function Contact() {
    const [form, setForm] = useState(initial);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Please share your name.";
        if (!/^\S+@\S+\.\S+$/.test(form.email))
            e.email = "A valid email is required.";
        if (!form.message.trim() || form.message.trim().length < 10)
            e.message = "Please share a few words about your project.";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const onChange = (k) => (ev) => {
        setForm((f) => ({ ...f, [k]: ev.target.value }));
        if (errors[k]) setErrors((old) => ({ ...old, [k]: undefined }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            toast.error("Please review the highlighted fields.");
            return;
        }
        setSubmitting(true);
        // Simulated submission
        await new Promise((r) => setTimeout(r, 1100));
        setSubmitting(false);
        setSuccess(true);
        setForm(initial);
        toast.success("Consultation request received. We'll be in touch within 24 hours.");
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 sm:py-32 lg:py-40 bg-[color:var(--maran-off-white)]"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mb-14"
                >
                    <p className="text-eyebrow mb-5">Get in touch — 06</p>
                    <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-[color:var(--maran-charcoal)]">
                        Begin a private{" "}
                        <span className="italic">consultation.</span>
                    </h2>
                    <p className="mt-6 text-[15px] sm:text-base text-[color:var(--maran-charcoal-60)] max-w-2xl">
                        Share a few notes about your villa, penthouse or garden
                        — our studio director will personally reply within one
                        working day.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[4px] border border-[color:var(--maran-line)]"
                        onSubmit={onSubmit}
                        noValidate
                        data-testid="contact-form"
                        aria-label="Consultation request form"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            <div className="field">
                                <input
                                    id="c-name"
                                    type="text"
                                    placeholder=" "
                                    value={form.name}
                                    onChange={onChange("name")}
                                    aria-invalid={!!errors.name}
                                    data-testid="contact-name-input"
                                />
                                <label htmlFor="c-name">Full name</label>
                                {errors.name && (
                                    <p
                                        className="mt-2 text-xs text-red-600"
                                        data-testid="contact-name-error"
                                    >
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="field">
                                <input
                                    id="c-email"
                                    type="email"
                                    placeholder=" "
                                    value={form.email}
                                    onChange={onChange("email")}
                                    aria-invalid={!!errors.email}
                                    data-testid="contact-email-input"
                                />
                                <label htmlFor="c-email">Email address</label>
                                {errors.email && (
                                    <p
                                        className="mt-2 text-xs text-red-600"
                                        data-testid="contact-email-error"
                                    >
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div className="field">
                                <input
                                    id="c-phone"
                                    type="tel"
                                    placeholder=" "
                                    value={form.phone}
                                    onChange={onChange("phone")}
                                    data-testid="contact-phone-input"
                                />
                                <label htmlFor="c-phone">
                                    Phone (optional)
                                </label>
                            </div>

                            <div className="field">
                                <input
                                    id="c-project"
                                    type="text"
                                    placeholder=" "
                                    value={form.project}
                                    onChange={onChange("project")}
                                    data-testid="contact-project-input"
                                />
                                <label htmlFor="c-project">
                                    Project type / location
                                </label>
                            </div>

                            <div className="field sm:col-span-2">
                                <textarea
                                    id="c-msg"
                                    rows={4}
                                    placeholder=" "
                                    value={form.message}
                                    onChange={onChange("message")}
                                    aria-invalid={!!errors.message}
                                    data-testid="contact-message-input"
                                />
                                <label htmlFor="c-msg">
                                    Tell us about your project
                                </label>
                                {errors.message && (
                                    <p
                                        className="mt-2 text-xs text-red-600"
                                        data-testid="contact-message-error"
                                    >
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <p className="text-xs text-[color:var(--maran-charcoal-60)] max-w-md">
                                By sending this form you agree to our discreet
                                handling of your enquiry.
                            </p>
                            <button
                                type="submit"
                                className="btn-pill"
                                disabled={submitting}
                                data-testid="contact-submit-button"
                            >
                                {submitting
                                    ? "Sending…"
                                    : success
                                    ? "Sent — Thank you"
                                    : "Request Consultation"}
                                <ArrowRight
                                    className="w-4 h-4 arrow"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </motion.form>

                    {/* Map + Contact */}
                    <motion.aside
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                        aria-label="Studio contact details"
                    >
                        <div
                            className="relative overflow-hidden rounded-[4px] aspect-[4/3] bg-[color:var(--maran-charcoal)]"
                            data-testid="contact-map"
                        >
                            <iframe
                                title="UPSCAPE studio location · Port Saeed, Deira, Dubai"
                                src="https://www.google.com/maps?q=Sheikh+Suhail+Maktoum+Juma+Building+Port+Saeed+Deira+Dubai&output=embed"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    filter:
                                        "invert(0.92) hue-rotate(180deg) saturate(0.5) brightness(0.85) contrast(0.95)",
                                }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen=""
                            />
                            <div
                                className="absolute inset-0 pointer-events-none"
                                aria-hidden="true"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(26,26,26,0.1) 0%, rgba(26,26,26,0.35) 100%)",
                                }}
                            />
                            <span className="absolute top-4 left-4 text-[10px] tracking-[0.28em] uppercase text-white/90 glass-dark px-3 py-1.5 rounded-full">
                                Studio · Port Saeed, Deira
                            </span>
                        </div>

                        <div className="bg-white rounded-[4px] border border-[color:var(--maran-line)] p-8 space-y-6">
                            <ContactRow
                                icon={<MapPin className="w-4 h-4" />}
                                label="Studio"
                                value="402-05 Sheikh Suhail Maktoum Juma Bldg · Port Saeed, Deira, Dubai · UAE"
                                testid="contact-address"
                            />
                            <ContactRow
                                icon={<Phone className="w-4 h-4" />}
                                label="Phone"
                                value="+971 56 666 4205"
                                href="tel:+971566664205"
                                testid="contact-phone"
                            />
                            <ContactRow
                                icon={<MessageCircle className="w-4 h-4" />}
                                label="WhatsApp"
                                value="+971 56 666 4205"
                                href="https://wa.me/971566664205"
                                testid="contact-whatsapp"
                            />
                            <ContactRow
                                icon={<Mail className="w-4 h-4" />}
                                label="Email"
                                value="info@upscapeuae.com"
                                href="mailto:info@upscapeuae.com"
                                testid="contact-email"
                            />
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}

function ContactRow({ icon, label, value, href, testid }) {
    const Wrapper = href ? "a" : "div";
    const props = href
        ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" }
        : {};
    return (
        <Wrapper
            {...props}
            data-testid={testid}
            className="flex items-start gap-4 group"
        >
            <span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-full border border-[color:var(--maran-line)] text-[color:var(--maran-gold)]">
                {icon}
            </span>
            <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--maran-charcoal-60)]">
                    {label}
                </p>
                <p className="mt-1 text-[15px] text-[color:var(--maran-charcoal)] group-hover:text-[color:var(--maran-gold)] transition-colors duration-300">
                    {value}
                </p>
            </div>
        </Wrapper>
    );
}
