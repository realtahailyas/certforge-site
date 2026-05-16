@AGENTS.md

# CertForge — Marketing Site

Production marketing homepage for **https://getcertforge.app/**. Parent company: Optivio Media. Founder: Taha Ilyas.

## Stack
- Next.js 16.2.3 (App Router, Turbopack) + React 19 + TypeScript strict
- Tailwind CSS v4 (PostCSS) with CSS variables for the brand tokens (see `src/app/globals.css`)
- Supabase for auth (existing `/auth/*` routes)
- Fonts via `next/font/google`: **DM Sans** (body/display) + **JetBrains Mono** (data/labels)

## Routes
- `/` — full SEO-optimized marketing homepage (13 sections incl. app screenshots)
- `/privacy` — privacy policy (pre-existing)
- `/terms` — terms of service (pre-existing)
- `/auth/callback` — Supabase auth callback (pre-existing)
- `/auth/reset-password` — password reset flow (pre-existing)
- `/api/waitlist` — POST handler for email signups (stub — TODO: wire to Resend/Loops/ConvertKit)

## Primary funnel = Play Store install
Every CTA on the homepage drives a **Google Play install**. The email waitlist is a fallback shown only while pre-launch.

Single source of truth: `src/app/_config/site.ts`
- `PLAY_STORE_URL` — always use the Play Console package name `com.getcertforge.app` (not the project package `com.optiviomedia.certforge`).
- `ANDROID_PACKAGE_ID` — mirrors the package id for meta + schema.
- `IS_PUBLICLY_LIVE` — flip to `true` once the listing is publicly downloadable. Doing so:
  - Changes the hero eyebrow pill from "Launching soon" → "Now on Google Play"
  - Hides the small "Not on Play Store yet? Get launch notice →" link under the hero CTA
  - Hides the entire email waitlist fallback block in the final CTA section
  - No other code changes required.

Reusable component: `src/app/_components/PlayStoreButton.tsx` — variants `primary` (cyan filled) and `badge` (dark pill). Renders the inline brand-tinted Play triangle SVG; opens `PLAY_STORE_URL` in a new tab.

## Design system
Defined in `src/app/globals.css` as CSS variables. **Dark + cyan only.** No purple/pink gradients. The brief is in `CERTFORGE_WEBSITE_BUILD_PROMPT.md` — original source of truth for copy and layout.

## SEO
- Full metadata + OG + Twitter cards in `src/app/layout.tsx`
- OG and Twitter descriptions explicitly mention "Download free on Google Play"
- `<meta name="google-play-app" content="app-id=com.getcertforge.app" />` in `<head>`
- `<link rel="alternate" href="android-app://com.getcertforge.app/https/getcertforge.app/" />` in `<head>`
- Three JSON-LD schemas: `SoftwareApplication`, `FAQPage`, `Organization`
  - SoftwareApplication includes `downloadUrl` and `installUrl` pointing at `PLAY_STORE_URL`
  - `operatingSystem` is `Android 8.0+`
- `public/robots.txt` and `public/sitemap.xml` published
- `aggregateRating` intentionally omitted until 50+ real Play Store reviews exist

## Geographic references
Karachi / Pakistan references have been removed from the site. Optivio Media is referenced without a city or country anywhere user-visible.

## Open TODOs for Taha (humans)
1. Generate 1200×630 `og.png` in Canva and place at `public/og.png`.
2. Once the Play Store listing is publicly live, set `IS_PUBLICLY_LIVE = true` in `src/app/_config/site.ts`. The waitlist fallback will auto-disappear sitewide.
3. Replace the 3 SVG phone mockups in the "Inside the App" section with real 1080×1920 screenshots dropped into `public/screens/` as `home.png`, `question.png`, `weakness.png`.
4. Wire `/api/waitlist` to email service (Resend / Loops / ConvertKit).
5. Once 50+ verified Play Store reviews exist, restore `aggregateRating` in the SoftwareApplication JSON-LD (see comment in `src/app/layout.tsx`).
6. Replace `ACCOUNT_DELETION_URL` in `src/app/page.tsx` with Taha's actual Notion page URL if different.
7. Submit sitemap to Google Search Console + Bing Webmaster Tools after launch.

## Conventions
- Homepage components live in `src/app/_components/` (underscore = private, not routed)
- Shared data in `src/app/_data/`, config in `src/app/_config/`
- No new heavy deps. Animations are CSS keyframes; FAQ accordion is React state.
- All quotes/apostrophes inside JSX text must be HTML-escaped (`&apos;`, `&ldquo;`) — ESLint `react/no-unescaped-entities` is enforced.
- The literal string `//` inside JSX children must be wrapped: `{"// label"}` — ESLint flags raw `//` as a comment otherwise.
- All Play Store links must come through `PLAY_STORE_URL` from `_config/site.ts`. Never hardcode the URL inline.
