import { useEffect, useRef, useState } from "react";

export default function BeforeAfterSlider({ beforeSrc, afterSrc, labelBefore = "Before", labelAfter = "After" }) {
    const [pos, setPos] = useState(52);
    const ref = useRef(null);
    const drag = useRef(false);

    const update = (x) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const p = ((x - r.left) / r.width) * 100;
        setPos(Math.max(0, Math.min(100, p)));
    };

    const down = (e) => {
        drag.current = true;
        update(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const move = (e) => {
        if (!drag.current) return;
        update(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const up = () => (drag.current = false);
    const key = (e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
    };

    return (
        <div
            ref={ref}
            className="ba"
            role="slider"
            aria-label="Before and after"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            tabIndex={0}
            onKeyDown={key}
            onMouseDown={down}
            onMouseMove={move}
            onMouseUp={up}
            onMouseLeave={up}
            onTouchStart={down}
            onTouchMove={move}
            onTouchEnd={up}
            data-testid="before-after"
        >
            <img src={beforeSrc} alt={labelBefore} draggable={false} />
            <div className="ba-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
                <img src={afterSrc} alt={labelAfter} draggable={false} />
            </div>
            <span className="ba-label" style={{ left: 14 }}>
                {labelBefore}
            </span>
            <span className="ba-label" style={{ right: 14 }}>
                {labelAfter}
            </span>
            <div className="ba-handle" style={{ left: `${pos}%` }} aria-hidden="true" />
        </div>
    );
}
