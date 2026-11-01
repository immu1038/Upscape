# UPSCAPE — Product Requirements

## Brand
- UPSCAPE (legal: Upscape Building Maintenance LLC)
- Positioning: Villa Handover & Rectification Specialists · Dubai
- Theme: strict B&W (#0A0A0A / #FFFFFF / neutral greys); single accent = WhatsApp green
- Font: Montserrat only (300–800)
- Logo: inline SVG, white letters on black, final "E" as three stacked bars
- Domain: upscapeuae.com
- Phone/WhatsApp: +971 54 219 7974
- Email: info@upscapeuae.com

## Stack
- React 19 + CRA + craco + Tailwind
- react-router-dom v7, react-helmet-async, framer-motion, @emailjs/browser, lucide-react, sonner
- Frontend-only (contact submits to WhatsApp; EmailJS backup if env keys supplied)

## Architecture
- All content in `/src/data/site.js` (brand, services, process, projects, FAQs, testimonials, stats, nav)
- Shared layout at `/src/components/Layout.jsx` with Header, Footer, WhatsAppButton, ScrollProgress, CookieBanner, EnquiryModal, CustomCursor
- Routes:
  - `/` → Home (hero, trust bar, 6 core services, 5 additional services, 5-step process, projects grid + filter + before/after, why, testimonials, FAQ, final CTA)
  - `/services/:slug` → unique page per service with SEO + JSON-LD
  - `/about`, `/contact`, `/privacy`, `/cookies`, `*` → 404
- Enquiry modal — validates, builds a labelled WhatsApp message, opens wa.me, EmailJS backup silent-skips if env keys missing
- Cookie banner stores choice in localStorage, loads GA4 + Meta Pixel only after consent
- Custom cursor only on `(hover: hover) and (pointer: fine)` devices

## SEO
- Per-route meta via react-helmet-async + Seo component
- Static head in `/public/index.html` with title, description, canonical, OG + Twitter, HomeAndConstructionBusiness JSON-LD, `<noscript>` body fallback
- Home page JSON-LD includes FAQPage
- Service pages JSON-LD = `Service` schema
- `/public/robots.txt` with explicit AI-crawler group + `Disallow: /api/`
- `/public/sitemap.xml` with 16 URLs
- `/public/llms.txt` summary
- `/public/og-image.svg` (1200×630) + favicon (inline data URI) + apple-touch-icon.svg

## Env variables (optional)
- `REACT_APP_GA_ID` — Google Analytics 4, loaded after consent
- `REACT_APP_META_PIXEL_ID` — Meta Pixel, loaded after consent
- `REACT_APP_EMAILJS_SERVICE_ID`, `REACT_APP_EMAILJS_TEMPLATE_ID`, `REACT_APP_EMAILJS_PUBLIC_KEY` — enquiry backup email

## Pending (not yet done — call out next)
- Replace stock Unsplash images with real UPSCAPE project photos (easy swap in `site.js`)
- Add real social URLs if different from placeholders
- Prerendering for AI/social crawlers runs at deploy-time (platform toggle); preview env uses static head + helmet
- Blog / Insights section if needed later
