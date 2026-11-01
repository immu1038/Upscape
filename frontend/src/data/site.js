// Single editable content file for UPSCAPE
// Update text, images, services, FAQs, projects here — do not touch components.

export const BRAND = {
    name: "UPSCAPE",
    legal: "Upscape Building Maintenance LLC",
    tagline: "Villa Handover & Rectification Specialists",
    description:
        "Dubai villa handover, snagging, rectification, fit-out and post-handover support for developers, contractors and villa owners.",
    phone: "+971 54 219 7974",
    phoneDigits: "971542197974",
    email: "info@upscapeuae.com",
    address: "Dubai, UAE",
    canonical: "https://upscapeuae.com",
    social: {
        instagram: "https://instagram.com/upscapeuae",
        linkedin: "https://linkedin.com/company/upscapeuae",
        facebook: "https://facebook.com/upscapeuae",
    },
};

export const WHATSAPP_BASE = `https://wa.me/${BRAND.phoneDigits}`;

export function waLink(message = "Hi UPSCAPE, I'd like to enquire about your services.") {
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#projects" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const STATS = [
    { value: 200, suffix: "+", label: "Villas Delivered" },
    { value: 12, suffix: "", label: "Years in Dubai" },
    { value: 340, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "%", label: "Handover Focus" },
];

export const CLIENTS = [
    "DAMAC",
    "EMAAR",
    "NAKHEEL",
    "MERAAS",
    "SOBHA",
    "AZIZI",
    "DUBAI PROPERTIES",
    "ARADA",
];

export const CORE_SERVICES = [
    {
        slug: "painting",
        title: "Painting",
        short: "Developer-grade villa painting and finishing.",
        description:
            "Full interior and exterior villa painting executed to developer handover standards. Surface prep, primer systems, premium emulsions and factory-level finishing.",
        image:
            "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Surface preparation & crack filling",
            "Primer + two-coat premium emulsion",
            "Weather-resistant exterior systems",
            "Precision cutting-in & protection",
            "Snag re-work & touch-up before handover",
        ],
        icon: "paint",
    },
    {
        slug: "joinery-carpentry",
        title: "Joinery & Carpentry",
        short: "Bespoke joinery, doors and millwork rectification.",
        description:
            "Site joinery, carpentry rectification, door adjustment, wardrobes and bespoke millwork aligned to developer specifications.",
        image:
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Door alignment, hinges & ironmongery",
            "Wardrobe & cabinet rectification",
            "Bespoke millwork & site joinery",
            "Veneer & laminate repairs",
            "Skirting, architraves & trims",
        ],
        icon: "joinery",
    },
    {
        slug: "tiling-grouting-silicone",
        title: "Tiles, Grouting & Silicone",
        short: "Tile re-fixing, grouting and wet-area silicone.",
        description:
            "Full tiling rectification: hollow-tile replacement, deep grout cleaning or re-grouting, and factory-finish silicone to wet areas.",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Hollow tile detection & replacement",
            "Grout removal, cleaning & re-grouting",
            "Wet-area silicone (bathrooms, kitchen)",
            "Edge trims & movement joints",
            "Expansion-joint sealant works",
        ],
        icon: "tiles",
    },
    {
        slug: "general-rectification",
        title: "General Rectification",
        short: "End-to-end snag list closure for villas.",
        description:
            "Multi-trade snag list rectification coordinated by a single site team — from plastering touch-ups to MEP minor works, closed and signed off.",
        image:
            "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Snag list review & scoping",
            "Multi-trade coordinated rectification",
            "Plaster, paint, tile, door & MEP touch-ups",
            "Site photo progress reports",
            "Final walk-through with developer / FM",
        ],
        icon: "wrench",
    },
    {
        slug: "deep-cleaning",
        title: "Deep Cleaning",
        short: "Post-construction and handover deep cleaning.",
        description:
            "Post-construction deep clean to developer handover specification — removal of paint, grout and plaster residue, polishing and sanitisation.",
        image:
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Post-construction debris removal",
            "Paint, grout & silicone residue cleaning",
            "Glass, mirror & stainless polishing",
            "Floor polishing & waxing where required",
            "Full bathroom & kitchen sanitisation",
        ],
        icon: "sparkle",
    },
    {
        slug: "handover-support",
        title: "Handover Support",
        short: "Make-good works, snag closure, handover walk-through.",
        description:
            "A dedicated team to carry a villa from snag list to handover and support the first weeks of occupation — ideal for developers running multi-unit handovers.",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Pre-handover inspection",
            "Snag list closure & re-inspection",
            "Keys, meters & utility coordination",
            "Post-handover defect response",
            "Monthly reporting to developer / FM",
        ],
        icon: "key",
    },
];

export const ADDITIONAL_SERVICES = [
    {
        slug: "renovation",
        title: "Renovation",
        short: "Full villa renovations in Dubai.",
        description:
            "Full-scope villa renovation across structural, finishes, MEP and interiors — delivered by a single team with developer-grade standards.",
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Design review & scope definition",
            "Structural, MEP & finishing works",
            "Project management & permits",
            "Dedicated site supervisor",
            "Handover with warranty",
        ],
        icon: "home",
    },
    {
        slug: "interior-fit-out",
        title: "Interior Fit-Out",
        short: "Turnkey fit-out for villas and penthouses.",
        description:
            "Turnkey interior fit-out: joinery, flooring, ceilings, lighting and finishes delivered to specification and schedule.",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Shop drawings & material submittals",
            "Bespoke joinery & wardrobes",
            "Flooring, ceilings & lighting",
            "Final finishes & snagging",
            "QA/QC & handover file",
        ],
        icon: "layout",
    },
    {
        slug: "swimming-pool-construction",
        title: "Swimming Pool Construction",
        short: "Private pool construction and refurbishment.",
        description:
            "New private pool construction and refurbishment — structural shell, waterproofing, finishing and MEP integration.",
        image:
            "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Shell construction & waterproofing",
            "Tiling, coping & finishing",
            "Filtration, heating & lighting",
            "Equipment room & commissioning",
            "Scheduled servicing after handover",
        ],
        icon: "pool",
    },
    {
        slug: "garden-landscaping",
        title: "Garden & Landscaping",
        short: "Bespoke villa gardens for the Dubai climate.",
        description:
            "Landscape design, hard and soft landscaping, irrigation and lighting — climate-resilient gardens built to last.",
        image:
            "https://images.unsplash.com/photo-1661333587575-25c87c14f398?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Landscape design & 3D visuals",
            "Hardscape: paving, decking, pergolas",
            "Softscape: planting & lawns",
            "Automated irrigation & drainage",
            "Garden lighting",
        ],
        icon: "leaf",
    },
    {
        slug: "ac-maintenance",
        title: "AC Maintenance & Servicing",
        short: "AMC and preventive AC servicing.",
        description:
            "Annual maintenance contracts (AMC) and preventive servicing for villa HVAC systems — chiller, FCU, split and ducted systems.",
        image:
            "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80",
        included: [
            "Preventive maintenance schedule",
            "Coil cleaning & gas top-up",
            "Duct cleaning",
            "Thermostat & controls check",
            "Emergency breakdown response",
        ],
        icon: "snow",
    },
];

export const ALL_SERVICES = [...CORE_SERVICES, ...ADDITIONAL_SERVICES];

export const PROCESS = [
    {
        step: "01",
        title: "Site Inspection",
        text: "A site team visits the villa, reviews drawings, and documents conditions with photos.",
    },
    {
        step: "02",
        title: "Snag List",
        text: "We agree a priced, trade-by-trade snag list with the developer, contractor or owner.",
    },
    {
        step: "03",
        title: "Rectification",
        text: "A dedicated multi-trade team closes the snag list to developer handover standards.",
    },
    {
        step: "04",
        title: "Quality Check",
        text: "QA/QC walk-through with photo evidence and a sign-off sheet for every unit.",
    },
    {
        step: "05",
        title: "Handover",
        text: "We hand the villa over handover-ready — and stay on call for post-handover defects.",
    },
];

export const WHY_UPSCAPE = [
    {
        title: "Developer-grade standards",
        text: "Our teams work daily inside developer sites — the finish you expect from DAMAC, EMAAR and the rest.",
    },
    {
        title: "Dedicated site teams",
        text: "A single site supervisor and a stable crew for your project — no rotating sub-contractors.",
    },
    {
        title: "On-time handover",
        text: "Programmed, resourced and photo-reported. We close snag lists on the dates we commit to.",
    },
    {
        title: "Post-handover support",
        text: "A direct line for defects after handover, with response times agreed up front.",
    },
];

export const PROJECTS = [
    {
        id: "p1",
        title: "DAMAC Hills Villa Handover",
        category: "Fit-Out",
        image:
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "p2",
        title: "Palm Jumeirah Painting Programme",
        category: "Painting",
        image:
            "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "p3",
        title: "Emirates Hills Joinery Rectification",
        category: "Joinery",
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "p4",
        title: "Al Barari Tiling & Grouting",
        category: "Tiling",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "p5",
        title: "Jumeirah Bay Pool Build",
        category: "Pools",
        image:
            "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "p6",
        title: "Dubai Hills Villa Fit-Out",
        category: "Fit-Out",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "p7",
        title: "Arabian Ranches Landscape",
        category: "Fit-Out",
        image:
            "https://images.unsplash.com/photo-1661333587575-25c87c14f398?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: "p8",
        title: "Tilal Al Ghaf Painting",
        category: "Painting",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    },
];

export const PROJECT_CATEGORIES = [
    "All",
    "Painting",
    "Joinery",
    "Tiling",
    "Fit-Out",
    "Pools",
];

export const BEFORE_AFTER = [
    {
        label: "Al Barari villa — paint & joinery rectification",
        before:
            "https://images.unsplash.com/photo-1707725669525-d925dc9e9010?auto=format&fit=crop&w=1600&q=80",
        after:
            "https://images.unsplash.com/photo-1705326701287-346fc37a2c86?auto=format&fit=crop&w=1600&q=80",
    },
];

export const TESTIMONIALS = [
    {
        name: "Ahmed Hassan",
        company: "Project Director, Developer",
        initials: "AH",
        quote:
            "UPSCAPE closed a 48-villa snag list on schedule. Their site team is calm, organised, and the finish is developer-grade.",
    },
    {
        name: "Lara Benali",
        company: "Facility Manager",
        initials: "LB",
        quote:
            "Reliable, communicative, and strong on QA. We hand them a punch list and get photo evidence back on every unit.",
    },
    {
        name: "Richard Pierce",
        company: "Villa Owner, Palm Jumeirah",
        initials: "RP",
        quote:
            "They painted, re-grouted and fixed every joinery issue on our villa — handed back cleaner than new.",
    },
];

// Featured case studies — each has its own page at /case-studies/<slug>.
// Add real photos to `gallery` and swap `cover` once UPSCAPE project photos are uploaded.
export const CASE_STUDIES = [
    {
        slug: "damac-hills-handover-programme",
        title: "DAMAC Hills — 48-Villa Handover Programme",
        category: "Handover · Multi-Villa",
        year: "2024",
        location: "DAMAC Hills, Dubai",
        duration: "9 weeks",
        teamSize: "32",
        cover:
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
        summary:
            "Developer handover closure across 48 villas: paint, joinery, tile, silicone, deep clean and handover walk-through.",
        challenge:
            "A tight programme to close a 48-villa snag list before scheduled customer handover dates — with weekly QS inspections, multi-trade coordination and a single photo-evidence audit trail.",
        scope: [
            "Full interior & exterior paint rectification",
            "Joinery alignment and ironmongery closure",
            "Hollow-tile detection & replacement",
            "Wet-area re-silicone and expansion joints",
            "Post-construction deep clean to handover spec",
            "QA/QC sign-off with developer walk-through",
        ],
        outcome:
            "All 48 villas delivered inside the agreed 9-week window with a zero-reject rate on the final developer handover inspections.",
        metrics: [
            { k: "48", v: "Villas Delivered" },
            { k: "9 wks", v: "Programme Duration" },
            { k: "0", v: "Reject Rate" },
            { k: "100%", v: "On-time Handover" },
        ],
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
        ],
    },
    {
        slug: "palm-jumeirah-painting",
        title: "Palm Jumeirah — Private Villa Repaint",
        category: "Painting",
        year: "2024",
        location: "Palm Jumeirah, Dubai",
        duration: "3 weeks",
        teamSize: "6",
        cover:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
        summary:
            "Full interior and exterior repaint of a 14,000 sq ft Palm Jumeirah villa with weather-resistant exterior systems.",
        challenge:
            "Repaint the full envelope of a lived-in villa with minimal disruption to the owner, matching exact developer handover colour and finish standards.",
        scope: [
            "Site protection and furniture coverage",
            "Surface preparation, crack filling, re-plaster patches",
            "Primer + two-coat premium emulsion",
            "Weather-resistant exterior finish on fascia and walls",
            "Snag closure and final touch-up before owner move-back",
        ],
        outcome:
            "A clean, developer-grade finish delivered in three weeks — owner moved back the day after sign-off.",
        metrics: [
            { k: "14k", v: "Sq Ft Painted" },
            { k: "3 wks", v: "Programme" },
            { k: "6", v: "Painters On Site" },
            { k: "2-coat", v: "Premium Finish" },
        ],
        gallery: [
            "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
        ],
    },
    {
        slug: "emirates-hills-joinery",
        title: "Emirates Hills — Joinery Rectification",
        category: "Joinery",
        year: "2023",
        location: "Emirates Hills, Dubai",
        duration: "4 weeks",
        teamSize: "8",
        cover:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80",
        summary:
            "Complete joinery, door and millwork rectification across all floors of a signature Emirates Hills villa.",
        challenge:
            "Over 120 joinery defects across wardrobes, internal doors and bespoke millwork — to be closed without replacing any installed veneers.",
        scope: [
            "Door alignment, hinges and ironmongery closure",
            "Wardrobe shelf, hinge and drawer rectification",
            "Veneer and laminate blend-in repairs",
            "Skirting, architrave and trim refit",
            "Final sanding, lacquering and finishing",
        ],
        outcome:
            "All 120+ defects closed with no replacement of veneers — client sign-off at first inspection.",
        metrics: [
            { k: "120+", v: "Defects Closed" },
            { k: "4 wks", v: "Programme" },
            { k: "8", v: "Carpenters" },
            { k: "0", v: "Replacements" },
        ],
        gallery: [
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
        ],
    },
];

export const FAQS = [
    {
        q: "What exactly is villa handover rectification?",
        a: "Closing the snag list on a villa so it meets the developer or contractor's handover standard. UPSCAPE does the trades (paint, tile, joinery, silicone, MEP touch-ups), coordinates them, and signs the villa off.",
    },
    {
        q: "Do you work with developers and main contractors directly?",
        a: "Yes — most of our work is B2B. We've worked within projects for major Dubai developers, including DAMAC, and run multi-villa handover programmes.",
    },
    {
        q: "Do you take on single villa owners as well?",
        a: "Yes. We take on individual villa renovations, fit-out, pools, landscaping and AC servicing for owners across Dubai.",
    },
    {
        q: "How are quotes prepared?",
        a: "Free site visit, measured scope by trade, and an itemised quote within 48–72 hours for most jobs. For multi-villa programmes we propose a per-unit rate.",
    },
    {
        q: "Which Dubai communities do you cover?",
        a: "Across Dubai — including Palm Jumeirah, Emirates Hills, Dubai Hills, DAMAC Hills, Arabian Ranches, Tilal Al Ghaf, Al Barari, Jumeirah Bay and MBR City.",
    },
    {
        q: "What is your typical handover timeline?",
        a: "A standard single-villa snag list is closed in 1–3 weeks depending on scope. Multi-villa programmes are planned per unit with a resourced schedule.",
    },
    {
        q: "Do you offer a warranty on rectification work?",
        a: "Yes — written warranty on each trade executed, with specific durations agreed before works start.",
    },
    {
        q: "How is quality controlled on site?",
        a: "Each unit has a QA/QC checklist signed off trade by trade, backed by photo evidence shared with the developer / FM.",
    },
];

export const CLIENT_TYPES = [
    "Developer",
    "Main Contractor",
    "Facility Management",
    "Villa Owner",
    "Other",
];
