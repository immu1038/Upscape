import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ALL_SERVICES, CLIENT_TYPES, BRAND, waLink } from "@/data/site";

const initial = {
    name: "",
    company: "",
    phone: "",
    email: "",
    clientType: "",
    service: "",
    location: "",
    units: "",
    message: "",
};

function buildWhatsAppText(f) {
    return (
        `Hi UPSCAPE, I'd like to request a quote.\n\n` +
        `Name: ${f.name}\n` +
        (f.company ? `Company: ${f.company}\n` : "") +
        `Phone: ${f.phone}\n` +
        (f.email ? `Email: ${f.email}\n` : "") +
        (f.clientType ? `Client type: ${f.clientType}\n` : "") +
        (f.service ? `Service: ${f.service}\n` : "") +
        (f.location ? `Location: ${f.location}\n` : "") +
        (f.units ? `Villas / units: ${f.units}\n` : "") +
        (f.message ? `\nMessage:\n${f.message}` : "")
    );
}

async function sendEmailJsBackup(f) {
    const svcId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const tplId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const pub = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (!svcId || !tplId || !pub) return; // silently skip
    try {
        const emailjs = (await import("@emailjs/browser")).default;
        await emailjs.send(
            svcId,
            tplId,
            {
                to_email: BRAND.email,
                name: f.name,
                company: f.company,
                phone: f.phone,
                email: f.email,
                client_type: f.clientType,
                service: f.service,
                location: f.location,
                units: f.units,
                message: f.message,
            },
            { publicKey: pub },
        );
    } catch (e) {
        console.warn("EmailJS backup failed", e);
    }
}

export default function EnquiryModal({ open, onClose, prefillService }) {
    const [f, setF] = useState(initial);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | sent

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
            setF((p) => ({ ...initial, service: prefillService || p.service }));
            setErrors({});
            setStatus("idle");
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open, prefillService]);

    const onChange = (k) => (e) => {
        setF((p) => ({ ...p, [k]: e.target.value }));
        if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
    };

    const validate = () => {
        const e = {};
        if (!f.name.trim()) e.name = "Please enter your name.";
        if (!f.phone.trim() || f.phone.replace(/\D/g, "").length < 7)
            e.phone = "Enter a valid phone number.";
        if (f.email && !/^\S+@\S+\.\S+$/.test(f.email))
            e.email = "Enter a valid email.";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const submit = async (ev) => {
        ev.preventDefault();
        if (!validate()) return;
        setStatus("sending");
        await sendEmailJsBackup(f);
        const url = waLink(buildWhatsAppText(f));
        window.open(url, "_blank", "noopener");
        setStatus("sent");
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="enq"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={onClose}
                    data-testid="enquiry-modal"
                >
                    <motion.div
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white text-black rounded-sm max-w-xl w-full max-h-[92vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-white flex items-center justify-between px-6 pt-6 pb-3 border-b border-[color:var(--line)]">
                            <div>
                                <p className="eyebrow">Enquiry</p>
                                <h3 className="h-section text-2xl mt-1">Request a Quote</h3>
                            </div>
                            <button
                                type="button"
                                aria-label="Close"
                                onClick={onClose}
                                className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-[color:var(--line-strong)] hover:bg-[color:var(--muted-1)]"
                                data-testid="enq-close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {status === "sent" ? (
                            <div className="p-7">
                                <p className="eyebrow mb-3">Sent</p>
                                <h4 className="h-section text-2xl mb-3">
                                    Opening WhatsApp…
                                </h4>
                                <p className="text-sm text-[color:var(--muted-3)]">
                                    Your enquiry is on its way. If WhatsApp didn't
                                    open, use the button below.
                                </p>
                                <div className="mt-6 flex gap-2">
                                    <a
                                        href={waLink(buildWhatsAppText(f))}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-wa"
                                    >
                                        Open WhatsApp
                                    </a>
                                    <button
                                        type="button"
                                        className="btn btn-ghost"
                                        onClick={onClose}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form
                                onSubmit={submit}
                                className="p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
                                noValidate
                                data-testid="enq-form"
                            >
                                <div className={`field ${errors.name ? "err" : ""}`}>
                                    <input
                                        id="e-name"
                                        placeholder=" "
                                        value={f.name}
                                        onChange={onChange("name")}
                                        data-testid="enq-name"
                                        autoComplete="name"
                                    />
                                    <label htmlFor="e-name">Full name*</label>
                                    {errors.name && (
                                        <p className="err-msg">{errors.name}</p>
                                    )}
                                </div>
                                <div className="field">
                                    <input
                                        id="e-company"
                                        placeholder=" "
                                        value={f.company}
                                        onChange={onChange("company")}
                                        autoComplete="organization"
                                        data-testid="enq-company"
                                    />
                                    <label htmlFor="e-company">Company</label>
                                </div>
                                <div className={`field ${errors.phone ? "err" : ""}`}>
                                    <input
                                        id="e-phone"
                                        type="tel"
                                        inputMode="tel"
                                        placeholder=" "
                                        value={f.phone}
                                        onChange={onChange("phone")}
                                        data-testid="enq-phone"
                                        autoComplete="tel"
                                    />
                                    <label htmlFor="e-phone">Phone*</label>
                                    {errors.phone && (
                                        <p className="err-msg">{errors.phone}</p>
                                    )}
                                </div>
                                <div className={`field ${errors.email ? "err" : ""}`}>
                                    <input
                                        id="e-email"
                                        type="email"
                                        placeholder=" "
                                        value={f.email}
                                        onChange={onChange("email")}
                                        data-testid="enq-email"
                                        autoComplete="email"
                                    />
                                    <label htmlFor="e-email">Email</label>
                                    {errors.email && (
                                        <p className="err-msg">{errors.email}</p>
                                    )}
                                </div>
                                <div className={`field ${f.clientType ? "select-has-value" : ""}`}>
                                    <select
                                        id="e-ct"
                                        value={f.clientType}
                                        onChange={onChange("clientType")}
                                        data-testid="enq-client-type"
                                    >
                                        <option value=""></option>
                                        {CLIENT_TYPES.map((c) => (
                                            <option key={c} value={c}>
                                                {c}
                                            </option>
                                        ))}
                                    </select>
                                    <label htmlFor="e-ct">Client type</label>
                                </div>
                                <div className={`field ${f.service ? "select-has-value" : ""}`}>
                                    <select
                                        id="e-sv"
                                        value={f.service}
                                        onChange={onChange("service")}
                                        data-testid="enq-service"
                                    >
                                        <option value=""></option>
                                        {ALL_SERVICES.map((s) => (
                                            <option key={s.slug} value={s.title}>
                                                {s.title}
                                            </option>
                                        ))}
                                    </select>
                                    <label htmlFor="e-sv">Service</label>
                                </div>
                                <div className="field">
                                    <input
                                        id="e-loc"
                                        placeholder=" "
                                        value={f.location}
                                        onChange={onChange("location")}
                                        data-testid="enq-location"
                                    />
                                    <label htmlFor="e-loc">Location / Community</label>
                                </div>
                                <div className="field">
                                    <input
                                        id="e-units"
                                        placeholder=" "
                                        value={f.units}
                                        onChange={onChange("units")}
                                        inputMode="numeric"
                                        data-testid="enq-units"
                                    />
                                    <label htmlFor="e-units">Villas / Units</label>
                                </div>
                                <div className="field sm:col-span-2">
                                    <textarea
                                        id="e-msg"
                                        rows={3}
                                        placeholder=" "
                                        value={f.message}
                                        onChange={onChange("message")}
                                        data-testid="enq-message"
                                    />
                                    <label htmlFor="e-msg">Message</label>
                                </div>

                                <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-end pt-2">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="btn btn-ghost"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-wa"
                                        disabled={status === "sending"}
                                        data-testid="enq-submit"
                                    >
                                        {status === "sending" ? "Sending…" : "Send on WhatsApp"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
