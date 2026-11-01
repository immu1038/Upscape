import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";

export default function WhatsAppButton() {
    const [tip, setTip] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setTip(true), 1200);
        const t2 = setTimeout(() => setTip(false), 4800);
        return () => {
            clearTimeout(t);
            clearTimeout(t2);
        };
    }, []);

    return (
        <div className="fixed right-5 bottom-5 z-40 flex items-end gap-2">
            {tip && (
                <div
                    role="tooltip"
                    className="hidden sm:block bg-[color:var(--fg)] text-white text-[11px] tracking-[0.18em] uppercase px-3 py-2 rounded-full shadow-lg mb-1"
                >
                    Chat with us
                </div>
            )}
            <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                data-testid="wa-float"
                className="wa-float inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[color:var(--wa-green)] text-white hover:bg-[color:var(--wa-green-dark)] transition-colors"
                style={{ boxShadow: "0 14px 30px rgba(18,140,126,0.35)" }}
            >
                <MessageCircle className="w-7 h-7" />
            </a>
        </div>
    );
}
