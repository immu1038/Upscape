import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import CookieBanner, { AnalyticsLoader } from "@/components/CookieBanner";
import EnquiryModal from "@/components/EnquiryModal";
import CustomCursor from "@/components/CustomCursor";

export default function Layout() {
    const [enqOpen, setEnqOpen] = useState(false);
    const [prefill, setPrefill] = useState("");
    const loc = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [loc.pathname]);

    useEffect(() => {
        const open = (e) => {
            setPrefill(e.detail?.service || "");
            setEnqOpen(true);
        };
        window.addEventListener("upscape:open-enquiry", open);
        return () => window.removeEventListener("upscape:open-enquiry", open);
    }, []);

    return (
        <>
            <AnalyticsLoader />
            <ScrollProgress />
            <Header onOpenEnquiry={() => setEnqOpen(true)} />
            <main className="pt-[64px]">
                <Outlet context={{ openEnquiry: (s) => { setPrefill(s || ""); setEnqOpen(true); } }} />
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieBanner />
            <EnquiryModal
                open={enqOpen}
                onClose={() => setEnqOpen(false)}
                prefillService={prefill}
            />
            <CustomCursor />
        </>
    );
}

export function useOpenEnquiry() {
    return (service) =>
        window.dispatchEvent(
            new CustomEvent("upscape:open-enquiry", { detail: { service } }),
        );
}
