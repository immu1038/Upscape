// UPSCAPE logo — inline SVG, Montserrat Bold.
// The final "E" is drawn as three stacked horizontal bars (no vertical stem).
// textLength forces predictable width so the bars sit flush against "UPSCAP".

export default function Logo({ className = "h-7 w-auto", color = "#ffffff" }) {
    return (
        <svg
            viewBox="0 0 304 72"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="UPSCAPE"
            className={className}
            fill={color}
            style={{ display: "block" }}
        >
            <text
                x="0"
                y="56"
                fontFamily='"Montserrat", system-ui, -apple-system, sans-serif'
                fontWeight="800"
                fontSize="60"
                letterSpacing="0.5"
                textLength="240"
                lengthAdjust="spacingAndGlyphs"
                fill={color}
            >
                UPSCAP
            </text>
            {/* "E" as three horizontal bars */}
            <g transform="translate(246, 12)" fill={color}>
                <rect x="0" y="0" width="52" height="10" />
                <rect x="0" y="18" width="52" height="10" />
                <rect x="0" y="36" width="52" height="10" />
            </g>
        </svg>
    );
}
