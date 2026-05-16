@AGENTS.md

# CertForge — Marketing Site

Production marketing homepage for **https://getcertforge.app/**. Parent company: Optivio Media. Founder: Taha Ilyas.

## Stack
- Next.js 16.2.3 (App Router, Turbopack) + React 19 + TypeScript strict
- Tailwind CSS v4 (PostCSS) with CSS variables for the brand tokens (see `src/app/globals.css`)
- Supabase for auth (existing `/auth/*` routes)
- Fonts via `next/font/google`: **DM Sans** (body/display) + **JetBrains Mono** (data/labels)

## Routes
- `/` — full SEO-optimized marketing homepage (12 sections)
- `/privacy` — privacy policy (pre-existing)
- `/terms` — terms of service (pre-existing)
- `/auth/callback` — Supabase auth callback (pre-existing)
- `/auth/reset-password` — password reset flow (pre-existing)
- `/api/waitlist` — POST handler for email signups (stub — TODO: wire to Resend/Loops/ConvertKit)

## Design system
Defined in `src/app/globals.css` as CSS variables. **Dark + cyan only.** No purple/pink gradients. The brief is in `CERTFORGE_WEBSITE_BUILD_PROMPT.md` — treat it as the source of truth for copy and layout.

## SEO
- Full metadata + OG + Twitter cards in `src/app/layout.tsx`
- Three JSON-LD schemas: `SoftwareApplication`, `FAQPage`, `Organization`
- `public/robots.txt` and `public/sitemap.xml` published
- `aggregateRating` intentionally omitted until real Play Store reviews exist

## Open TODOs for Taha (humans)
1. Generate 1200×630 `og.png` in Canva and place at `public/og.png`.
2. Replace `PLAY_STORE_URL` placeholder in `src/app/page.tsx` once Play Store goes live.
3. Wire `/api/waitlist` to email service (Resend / Loops / ConvertKit).
4. Once 50+ verified Play Store reviews exist, restore `aggregateRating` in the SoftwareApplication JSON-LD (see comment in `src/app/layout.tsx`).
5. Replace `ACCOUNT_DELETION_URL` in `src/app/page.tsx` with Taha's actual Notion page URL if different.
6. Submit sitemap to Google Search Console + Bing Webmaster Tools after launch.

## Conventions
- Homepage components live in `src/app/_components/` (underscore = private, not routed)
- Shared data in `src/app/_data/`
- No new heavy deps. Animations are CSS keyframes; FAQ accordion is React state.
- All quotes/apostrophes inside JSX text must be HTML-escaped (`&apos;`, `&ldquo;`) — ESLint `react/no-unescaped-entities` is enforced.
- The literal string `//` inside JSX children must be wrapped: `{"// label"}` — ESLint flags raw `//` as a comment otherwise.
