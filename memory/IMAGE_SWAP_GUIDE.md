# How to swap in real UPSCAPE project photos

All visual assets are centralised in `src/data/site.js`. No component edits needed.

## Where to upload

Drop your photos into `frontend/public/images/` (create the folder) with clear filenames, e.g.:

```
frontend/public/images/
├── hero-villa.jpg
├── core/
│   ├── painting.jpg
│   ├── joinery.jpg
│   ├── tiling.jpg
│   ├── rectification.jpg
│   ├── cleaning.jpg
│   └── handover.jpg
├── projects/
│   ├── damac-hills-1.jpg
│   ├── damac-hills-2.jpg
│   ├── palm-jumeirah-1.jpg
│   └── …
└── case-studies/
    ├── damac-cover.jpg
    ├── palm-cover.jpg
    └── emirates-cover.jpg
```

Use JPG/WebP, 1600–2400px wide, under 400 KB each (compress with squoosh.app or similar).

## Where to reference them

Open `src/data/site.js` and replace each `https://images.unsplash.com/...` URL with your local path, which starts with `/` (served from the `public/` folder):

```js
// Before:
image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?...",

// After:
image: "/images/core/painting.jpg",
```

Fields to update:
- `CORE_SERVICES[].image`
- `ADDITIONAL_SERVICES[].image`
- `PROJECTS[].image`
- `BEFORE_AFTER[].before` / `.after`
- `CASE_STUDIES[].cover` and `CASE_STUDIES[].gallery[]`
- Hero image URL in `src/pages/Home.jsx` (search for `object-cover opacity-70` — just one line)

That's it. Save the file and the site hot-reloads.
