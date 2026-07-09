# MARÁN Atelier — Product Requirements

## Original Problem Statement
Premium single-page site for a Luxury Home Renovation & Landscape Architecture company based in Dubai.
Tone: luxury, sophisticated, precise, modern. Palette: gold #C5A880, charcoal #1A1A1A, off-white #F9F9F9, white.
Serif headers (Cormorant Garamond), geometric sans-serif body (Montserrat). Glassmorphism, bento-grids, generous whitespace.

## Stack
- React 19 + Tailwind CSS + Framer Motion 11 + lucide-react + sonner (toasts)
- Frontend-only (contact form simulated; no backend endpoints used)

## User Persona
- HNW villa / penthouse owners across Downtown Dubai, Palm Jumeirah, Emirates Hills, Marina, Al Barari
- Decision-makers looking for a single atelier that owns renovation + landscape end-to-end

## Core Requirements (static)
- Sticky glassmorphic header with anchor nav + floating Book Consultation CTA
- Full-viewport hero with animated image slider + bold split typography
- Two-card services grid with 3D mouse-tilt hover + iconography
- Filterable portfolio (All / Renovation / Landscape) with a featured Before/After slider (drag + keyboard accessible)
- Animated statistics counters + district marquee
- About/atelier dark section with 3-phase process
- Contact section: floating-label form with validation + simulated success toast + stylised dark Google Map + Dubai contact rows (Phone / WhatsApp / Email / Address)
- Footer + floating WhatsApp CTA (after scroll)
- Mobile hamburger drawer with animated open/close
- Reduced-motion & ARIA support

## What's been implemented — 2025-12-XX
- All sections above shipped and validated by testing agent (13/13 checks passing)
- File layout: `/app/frontend/src/components/sections/*` + `BeforeAfterSlider.jsx`
- Contact form is MOCKED (setTimeout success + sonner toast)

## Prioritised backlog
- P1: Wire contact form to backend (MongoDB store + Resend email notification)
- P1: Individual project detail pages with case-study copy + gallery
- P2: Multilingual (EN / AR) toggle
- P2: CMS-driven portfolio (currently hard-coded array in `Portfolio.jsx`)
- P2: Instagram feed integration (`social-instagram` link is placeholder)
- P3: Video hero variant + parallax
- P3: Lead-magnet PDF ("The Dubai Villa Renovation Guide") gated by email

## Next tasks
1. Confirm brand name — currently uses placeholder "MARÁN Atelier"
2. Replace stock images with real project photography
3. If real contact flow is desired, add Resend/SendGrid integration and MongoDB `enquiries` collection
