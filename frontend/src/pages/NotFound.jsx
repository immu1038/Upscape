import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function NotFound() {
    return (
        <>
            <Seo title="Page Not Found" description="The page you are looking for doesn't exist." path="/404" />
            <section className="min-h-[70vh] bg-[color:var(--fg)] text-white flex items-center">
                <div className="container-u text-center">
                    <p className="eyebrow text-white/50 mb-5">Error 404</p>
                    <h1 className="h-display text-[40px] sm:text-7xl mb-6 leading-[1.05]">
                        This villa doesn't exist.
                    </h1>
                    <p className="text-white/70 max-w-lg mx-auto">
                        The page you tried to open can't be found. Head back to the
                        home page or get in touch — we'll help from there.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Link to="/" className="btn btn-inverse">
                            Go Home
                        </Link>
                        <Link to="/contact" className="btn btn-ghost border-white/30 text-white hover:bg-white hover:text-black">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
