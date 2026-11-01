import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const KEY = "upscape_cookies_v1";

export default function CookieBanner() {
    const [choice, setChoice] = useState(null);
    const [prefsOpen, setPrefsOpen] = useState(false);
    const [prefs, setPrefs] = useState({ necessary: true, analytics: false, marketing: false });

    useEffect(() => {
        try {
            const raw = localStorage.getItem(KEY);
            if (raw) setChoice(JSON.parse(raw));
        } catch {
            // ignore
        }
    }, []);

    const save = (c) => {
        try {
            localStorage.setItem(KEY, JSON.stringify(c));
        } catch {
            // ignore
        }
        setChoice(c);
        // Signal GA/Pixel loaders
        window.dispatchEvent(new CustomEvent("upscape:consent", { detail: c }));
    };

    if (choice) return null;

    return (
        <>
            <AnimatePresence>
                {!prefsOpen && (
                    <motion.div
                        key="cookie"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="cookie-wrap"
                        role="dialog"
                        aria-label="Cookie consent"
                        data-testid="cookie-banner"
                    >
                        <div className="p-5 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                            <p className="text-sm text-white/80 flex-1 leading-relaxed">
                                We use cookies to improve your experience, analyse
                                traffic and personalise content. See our{" "}
                                <Link to="/cookies" className="underline">
                                    Cookie Policy
                                </Link>{" "}
                                and{" "}
                                <Link to="/privacy" className="underline">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => setPrefsOpen(true)}
                                    className="btn btn-ghost border-white/30 text-white hover:bg-white hover:text-black"
                                    data-testid="cookie-prefs"
                                >
                                    Preferences
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        save({ necessary: true, analytics: false, marketing: false })
                                    }
                                    className="btn btn-ghost border-white/30 text-white hover:bg-white hover:text-black"
                                    data-testid="cookie-reject"
                                >
                                    Reject
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        save({ necessary: true, analytics: true, marketing: true })
                                    }
                                    className="btn btn-inverse"
                                    data-testid="cookie-accept"
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {prefsOpen && (
                    <motion.div
                        key="prefs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[95] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setPrefsOpen(false)}
                        data-testid="cookie-prefs-modal"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="bg-white text-black rounded-sm max-w-lg w-full p-7"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="h-section text-2xl mb-2">Cookie preferences</h3>
                            <p className="text-sm text-[color:var(--muted-3)] mb-6">
                                Choose which categories of cookies you allow.
                                Necessary cookies cannot be turned off.
                            </p>
                            {[
                                { k: "necessary", t: "Necessary", d: "Required for the site to function.", locked: true },
                                { k: "analytics", t: "Analytics", d: "Help us understand how the site is used (GA4)." },
                                { k: "marketing", t: "Marketing", d: "Measure campaigns and personalise ads (Meta Pixel)." },
                            ].map((row) => (
                                <label
                                    key={row.k}
                                    className="flex items-start justify-between py-4 border-t border-[color:var(--line)] cursor-pointer"
                                >
                                    <div className="pr-4">
                                        <p className="font-semibold text-sm">{row.t}</p>
                                        <p className="text-xs text-[color:var(--muted-3)] mt-0.5">
                                            {row.d}
                                        </p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={prefs[row.k]}
                                        disabled={row.locked}
                                        onChange={(e) =>
                                            setPrefs((p) => ({ ...p, [row.k]: e.target.checked }))
                                        }
                                        className="w-5 h-5 mt-1 accent-black"
                                    />
                                </label>
                            ))}
                            <div className="mt-6 flex gap-2 justify-end">
                                <button
                                    className="btn btn-ghost"
                                    onClick={() => setPrefsOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        save(prefs);
                                        setPrefsOpen(false);
                                    }}
                                    data-testid="cookie-save-prefs"
                                >
                                    Save preferences
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// Consent-gated loader for GA4 and Meta Pixel. Reads env vars; silent if missing.
export function AnalyticsLoader() {
    useEffect(() => {
        const loadAll = (c) => {
            if (!c) return;
            const gaId = process.env.REACT_APP_GA_ID;
            const pixelId = process.env.REACT_APP_META_PIXEL_ID;
            if (c.analytics && gaId && !window.__gaLoaded) {
                const s = document.createElement("script");
                s.async = true;
                s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
                document.head.appendChild(s);
                window.dataLayer = window.dataLayer || [];
                window.gtag = function gtag() {
                    window.dataLayer.push(arguments);
                };
                window.gtag("js", new Date());
                window.gtag("config", gaId, { anonymize_ip: true });
                window.__gaLoaded = true;
            }
            if (c.marketing && pixelId && !window.__pxLoaded) {
                /* eslint-disable */
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                /* eslint-enable */
                window.fbq("init", pixelId);
                window.fbq("track", "PageView");
                window.__pxLoaded = true;
            }
        };
        try {
            const raw = localStorage.getItem(KEY);
            if (raw) loadAll(JSON.parse(raw));
        } catch {
            // ignore
        }
        const h = (e) => loadAll(e.detail);
        window.addEventListener("upscape:consent", h);
        return () => window.removeEventListener("upscape:consent", h);
    }, []);
    return null;
}
