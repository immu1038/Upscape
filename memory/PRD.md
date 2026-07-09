# UPSCAPE — Product Requirements

## Original Problem Statement
Premium single-page site for a Luxury Home Renovation & Landscape Architecture company based in Dubai.
Tone: luxury, sophisticated, precise, modern. Palette: gold #C5A880, charcoal #1A1A1A, off-white #F9F9F9, white.
Serif headers (Cormorant Garamond), geometric sans-serif body (Montserrat). Glassmorphism, bento-grids, generous whitespace.

## Brand
- **UPSCAPE** — Renovations | Fit-out
- Logo: https://customer-assets.emergentagent.com/job_desert-gold-design/artifacts/qj4647hy_Untitled%20design%20%287%29.png
- Studio: 402-05 Sheikh Suhail Maktoum Juma Building, Port Saeed, Deira, Dubai, UAE
- Phone / WhatsApp: +971 56 666 4205
- Email: info@upscapeuae.com

## Stack
- React 19 + Tailwind CSS + Framer Motion 11 + lucide-react + sonner
- Frontend-only (contact form simulated; no backend endpoints used)

## What's been implemented (2025-12-XX, rebranded from MARÁN → UPSCAPE)
- All sections: Sticky glassmorphic header (UPSCAPE logo image), Hero slider, 3D-tilt services grid, filterable portfolio with keyboard-accessible Before/After slider, animated stats counters + district marquee, dark About section, floating-label contact form (MOCKED simulated success + toast), stylised Google Map of Port Saeed/Deira, contact rows (real UPSCAPE address / phone / whatsapp / email), footer with UPSCAPE branding, floating WhatsApp CTA (+971 56 666 4205)
- Removed all "Est. 2011" references; replaced with location-based ("Deira / Dubai · Port Saeed · UAE") and a delivered-projects stat ("240+ Fit-out Projects Delivered")
- 13/13 frontend tests passing before rebrand; visual verification after rebrand confirms logo, addresses, phone, email all reflect UPSCAPE

## Prioritised backlog
- P1: Wire contact form to backend (MongoDB `enquiries` + Resend/SendGrid notification to info@upscapeuae.com)
- P1: Individual project detail pages with case-study copy + gallery
- P2: Multilingual (EN / AR) toggle
- P2: CMS-driven portfolio (currently hard-coded in `Portfolio.jsx`)
- P2: Real Instagram / LinkedIn URLs (currently placeholder)
- P3: Video hero variant
- P3: Lead-magnet PDF ("The Dubai Villa Renovation Guide") gated by email

## Next tasks
1. Wire the contact form to a real backend (MongoDB `enquiries` + email to info@upscapeuae.com)
2. Swap curated stock imagery for real UPSCAPE project photography
3. Add Instagram / LinkedIn real profile URLs
