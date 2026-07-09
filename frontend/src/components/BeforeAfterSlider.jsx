import { useCallback, useRef, useState } from "react";

export default function BeforeAfterSlider({
    beforeSrc,
    afterSrc,
    beforeAlt = "Before",
    afterAlt = "After",
    testid = "before-after-slider",
}) {
    const [pos, setPos] = useState(52);
    const containerRef = useRef(null);
    const draggingRef = useRef(false);

    const updateFromClientX = useCallback((clientX) => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const p = ((clientX - rect.left) / rect.width) * 100;
        setPos(Math.max(0, Math.min(100, p)));
    }, []);

    const onDown = (e) => {
        draggingRef.current = true;
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        updateFromClientX(x);
    };
    const onMove = (e) => {
        if (!draggingRef.current) return;
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        updateFromClientX(x);
    };
    const onUp = () => {
        draggingRef.current = false;
    };

    const onKey = (e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
    };

    return (
        <div
            ref={containerRef}
            className="ba-container"
            data-testid={testid}
            onMouseDown={onDown}
            onMouseMove={onMove}
            onMouseUp={onUp}
            onMouseLeave={onUp}
            onTouchStart={onDown}
            onTouchMove={onMove}
            onTouchEnd={onUp}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            tabIndex={0}
            onKeyDown={onKey}
        >
            <img
                src={beforeSrc}
                alt={beforeAlt}
                className="ba-img"
                loading="lazy"
                draggable={false}
            />
            <div
                className="ba-after-wrap"
                style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            >
                <img
                    src={afterSrc}
                    alt={afterAlt}
                    className="ba-img"
                    loading="lazy"
                    draggable={false}
                />
            </div>

            <span className="ba-label" style={{ left: 14 }}>
                Before
            </span>
            <span className="ba-label" style={{ right: 14 }}>
                After
            </span>

            <div className="ba-handle" style={{ left: `${pos}%` }}>
                <span className="arrows" aria-hidden="true">
                    ‹ ›
                </span>
            </div>
        </div>
    );
}
