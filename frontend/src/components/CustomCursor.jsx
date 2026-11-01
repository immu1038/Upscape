import { useEffect, useRef, useState } from "react";

// Desktop-only custom cursor: dot + ring, mix-blend-mode difference.
export default function CustomCursor() {
    const dot = useRef(null);
    const ring = useRef(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const supportsHover =
            typeof window !== "undefined" &&
            window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (!supportsHover) return;
        setEnabled(true);

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let rx = x;
        let ry = y;
        let raf;

        const onMove = (e) => {
            x = e.clientX;
            y = e.clientY;
            if (dot.current) {
                dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            }
        };
        const loop = () => {
            rx += (x - rx) * 0.18;
            ry += (y - ry) * 0.18;
            if (ring.current) {
                ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
            }
            raf = requestAnimationFrame(loop);
        };
        const onEnter = () => ring.current && (ring.current.style.transform += " scale(1.6)");
        const onLeave = () => ring.current && (ring.current.style.transform = ring.current.style.transform.replace(" scale(1.6)", ""));
        window.addEventListener("mousemove", onMove);
        document.querySelectorAll("a, button, [role='slider']").forEach((el) => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });
        loop();
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    if (!enabled) return null;
    return (
        <>
            <div ref={dot} className="cc-dot" aria-hidden="true" />
            <div ref={ring} className="cc-ring" aria-hidden="true" />
        </>
    );
}
