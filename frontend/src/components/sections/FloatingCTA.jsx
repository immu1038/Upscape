import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 640);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.a
                    key="floating-cta"
                    initial={{ opacity: 0, y: 24, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                    href="https://wa.me/971566095076"
                    target="_blank"
                    rel="noreferrer"
                    data-testid="floating-consultation-cta"
                    className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 pl-4 pr-5 py-3 rounded-full shadow-[0_18px_40px_rgba(197,168,128,0.4)]"
                    style={{
                        background: "var(--maran-charcoal)",
                        color: "#fff",
                    }}
                    aria-label="Book a consultation via WhatsApp"
                >
                    <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full"
                        style={{ background: "var(--maran-gold)" }}
                    >
                        <MessageCircle
                            className="w-4 h-4 text-[color:var(--maran-charcoal)]"
                            strokeWidth={1.8}
                        />
                    </span>
                    <span className="text-[11px] tracking-[0.28em] uppercase">
                        Book Consultation
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
