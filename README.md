# Tech Wave

Marketing site for **Tech Wave Limited** — sourcing intelligence and trade coordination for global commodity buyers across West Africa.

Live at: **https://techwave.ng**

---

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (CSS-config, no `tailwind.config.ts`)
- **React 19**
- **Framer Motion** (subtle, scroll-reveal only)
- **React Hook Form + Zod** (contact form validation)
- **Sonner** (toast notifications)
- **Lucide React** (icons)
- Fonts: **Fraunces** (serif headings) + **Inter** (sans body), via `next/font`

---

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
PORT=3100 npm run dev   # custom port
```

Other commands:

```bash
npm run build        # production build
npm run start        # serve the build
npm run lint         # ESLint
```

---

## Deploy to Vercel

The site is production-ready for Vercel — zero config.

### Option A: Vercel website (easiest)

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com), click **Add New → Project**, import the repo.
3. Click **Deploy**. ~2 minutes later you have a live URL.
4. Add the custom domain `techwave.ng` under **Settings → Domains**.

### Option B: Vercel CLI

```bash
npx vercel           # first deploy (preview)
npx vercel --prod    # production deploy
```

### Connect `techwave.ng`

1. In Vercel project → **Settings → Domains** → add `techwave.ng` and `www.techwave.ng`.
2. Vercel shows the DNS records you need (A, AAAA, CNAME).
3. Add those records at your domain registrar (where you bought `techwave.ng`).
4. SSL provisions automatically.

---

## Project structure

```
app/
├── layout.tsx              # Root layout, fonts, metadata, ThemeProvider
├── page.tsx                # Homepage (composes all sections)
├── sitemap.ts              # /sitemap.xml
├── robots.ts               # /robots.txt
├── globals.css             # Tailwind v4 + theme tokens + prose-legal
│
├── sourcing/page.tsx
├── coordination/page.tsx
├── commodities/page.tsx
├── insights/
│   ├── page.tsx            # Article list
│   └── [slug]/page.tsx     # Individual article
├── about/page.tsx
├── contact/page.tsx
│
└── (legal)
    ├── terms/page.tsx
    ├── privacy/page.tsx
    ├── cookies/page.tsx
    └── disclaimer/page.tsx

components/
├── ui/                     # Primitives (Button, Card, Input, Container, Section, Badge)
├── sections/               # Homepage sections (hero, problem, two-pillar, etc.)
├── legal/legal-layout.tsx  # Shared layout for legal pages (TOC, print, back)
├── theme-provider.tsx      # Light/dark mode
├── theme-toggle.tsx
├── cookie-banner.tsx       # NOT mounted by default
├── logo.tsx
└── icons.tsx               # Inline SVGs (LinkedIn, X)

lib/
├── utils.ts                # cn() helper
├── commodities.ts          # Commodity catalog data
├── insights.ts             # Article metadata
└── article-content.ts      # Long-form article body content
```

---

## What to swap before going fully live

The site uses placeholders in a few places:

1. **Lagos address** — `[Address Placeholder]` in `app/terms/page.tsx`, `app/privacy/page.tsx`, and `components/sections/contact.tsx`.
2. **Email addresses** — currently `contact@`, `legal@`, `privacy@`, `careers@techwave.ng`. Make sure these mailboxes exist (or set up forwarding) before launch.
3. **Social links** — `<LinkedIn>` and `<X>` in the footer point to root `linkedin.com` / `x.com`. Update to actual Tech Wave handles when the accounts are created.
4. **Stat numbers** — "200+ verified producers", "120+ shipments coordinated" in the homepage About section and `app/about/page.tsx`. Update to real figures.
5. **Partner logo strip** — `components/sections/trust.tsx` currently shows partner names as text. Replace with actual partner logos in `public/partners/` once permission is secured.
6. **Insights articles** — three placeholder articles in `lib/insights.ts` and `lib/article-content.ts`. Replace with real content or write new ones in the same format.
7. **Hero imagery** — currently a designed gradient + topographic overlay. If/when real documentary photography is licensed (cocoa farm at golden hour, sesame fields, port ops), replace the background block in `components/sections/hero.tsx`.

---

## Content guardrails — do not break

The brief is explicit on positioning. **These rules must hold across all copy:**

- **Tech Wave does not provide loans, take deposits, or hold client funds.**
- **Where financing or escrow is needed, we introduce clients to independent third-party providers, with whom they engage directly.**
- We earn revenue through **service fees, commissions, and advisory fees** — never spreads on funds we handle.

This language appears verbatim in: homepage Coordination Model section, `/coordination` page, Terms §2 and §7, About page. If you edit any of these, make sure the same constraint holds.

---

## Cookies banner

The auto-popup cookie banner has been **disabled by default** (the component still exists at `components/cookie-banner.tsx` — just not mounted). To re-enable:

```tsx
// app/page.tsx
import { CookieBanner } from "@/components/cookie-banner";
// ...
<CookieBanner />  // add inside the root fragment
```

The `/cookies` page describes our cookie usage either way.

---

## Theming

- Light mode is default. Dark mode toggle in the navbar (right side, moon/sun icon).
- All colors are defined as CSS variables in `app/globals.css` — change once, applies everywhere.
- Color palette:
  - Primary: deep forest green `#0D2818`
  - Secondary: terracotta `#C8553D`
  - Accent: gold `#D4A24C`
  - Ochre: `#DCA34B`
  - Light bg: cream `#FAF7F2`
  - Dark bg: charcoal `#0F1410`

---

## License

© 2026 Tech Wave Limited. All rights reserved.
