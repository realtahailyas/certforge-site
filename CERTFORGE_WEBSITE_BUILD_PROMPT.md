# CertForge Website — Complete Build Prompt for Claude Code

> Paste this entire file into Claude Code (or save it as `BUILD_BRIEF.md` in the repo and reference it). Claude Code should treat this as the single source of truth for the homepage rebuild. Do not skip sections. Build in one pass. Use high effort mode.

---

## 0. CONTEXT — WHAT YOU'RE BUILDING

You are building the production marketing homepage for **CertForge** at `https://getcertforge.app/`.

**Product:** CertForge is an Android app (React Native / Expo) that helps people pass the **AWS Cloud Practitioner exam (CLF-C02)** on their first attempt. It uses an adaptive question engine, weakness detection at the concept level, a live readiness score, and a 65-question / 90-minute exam simulator. It's currently in Google Play Closed Testing, moving to Production soon.

**Business goal of this website:** This homepage exists for **SEO + conversion**. It must rank for AWS Cloud Practitioner / CLF-C02 prep queries, then convert visitors into either (a) email waitlist signups while in closed testing, or (b) Play Store installs once live.

**Current state:** The live site is a near-empty page with a title, three feature bullets, and a CTA. It has no SEO, no schema, no real content, no design. We are replacing it with a professional, conversion-focused, SEO-engineered homepage.

**What already exists in the repo (do NOT break):**
- Privacy policy page
- Auth-related pages (login / signup / account deletion)
- Whatever framework is currently powering the site (likely Next.js or similar — detect it yourself by inspecting `package.json` and the existing routes)

**Parent company:** Optivio Media. Founder: Taha Ilyas.

---

## 1. FIRST STEPS — INSPECT BEFORE YOU BUILD

Before writing any code, you MUST:

1. Run `ls -la` at repo root and read `package.json` to identify the framework (Next.js App Router? Pages Router? Astro? Plain React?). Build accordingly.
2. Read the existing homepage file (e.g. `app/page.tsx` or `pages/index.tsx`) so you understand the current structure.
3. Identify the styling approach in use (Tailwind? CSS Modules? plain CSS? styled-components?). **Match the existing approach.** Do not introduce a new styling system.
4. Check whether `app/layout.tsx` (or `_app.tsx` / `_document.tsx`) needs SEO metadata updates. We will be adding global SEO defaults too.
5. Identify the favicon / logo asset path. If none exists, create one (SVG inline data URL is fine).
6. Confirm the privacy + auth pages are reachable so we link to them in the footer correctly.

Report your findings in 5 bullets, then proceed. Do **not** stop for permission — proceed automatically once the inspection is done.

---

## 2. DESIGN SYSTEM (NON-NEGOTIABLE)

This is the established brand. Follow it exactly.

**Color tokens (use these as CSS variables / Tailwind theme extension):**

```
--bg:          #0a0a0d   (page background — slightly darker than app for web depth)
--bg-elev:     #111116   (elevated surfaces, cards on hover)
--surface:     rgba(255, 255, 255, 0.025)
--surface-hi:  rgba(255, 255, 255, 0.045)
--border:      rgba(255, 255, 255, 0.07)
--border-hi:   rgba(255, 255, 255, 0.14)
--text:        #F4F4F8   (primary text)
--text-2:      #B4B4C0   (secondary text)
--text-3:      #7A7A88   (tertiary / labels)
--text-muted:  #4D4D5A
--cyan:        #00D4FF   (PRIMARY ACCENT — this is the brand)
--cyan-dim:    rgba(0, 212, 255, 0.12)
--cyan-glow:   rgba(0, 212, 255, 0.35)
--green:       #00FF95   (success, pass-projected)
--amber:       #FFB800
--red:         #FF6B6B
```

**Fonts (load from Google Fonts):**
- **Display + body:** `DM Sans` (weights 300, 400, 500, 600, 700, 800)
- **Mono / data labels:** `JetBrains Mono` (weights 400, 500, 600, 700)

**Aesthetic direction: "Cloud Console"** — AWS Console meets developer terminal. Dark mode, sharp, technical, data-forward. Cyan as the single hero accent. Subtle dot-grid texture in the background. Monospace for labels, numbers, status pills. NO purple-to-pink gradients. NO generic SaaS aesthetic.

**Atmospheric details required:**
- Subtle 32px dot-grid background pattern across the whole page (`radial-gradient` of 1px white dots at 4% opacity)
- A cyan radial glow behind the hero (top center, fading out at ~60% radius)
- Status pills with pulsing green dots for "live" indicators
- Mono-font bracketed labels like `[ 01 ]` and `// SECTION_NAME` for section eyebrows
- All numbers in `JetBrains Mono` with tabular-nums

**Responsiveness:** Mobile-first. Breakpoints at 480px, 720px, 880px, 960px. Hero stacks below 960px. Pricing grid stacks below 880px. Stats band goes 2-column below 720px.

**Accessibility:** Semantic HTML5 throughout (`<header>`, `<nav>`, `<section>`, `<main>`, `<footer>`). Proper heading hierarchy — exactly one `<h1>` on the page, in the hero. All buttons are `<button>`, all links `<a>`. Color contrast for body text meets WCAG AA. All decorative SVGs have `aria-hidden="true"`.

---

## 3. PAGE STRUCTURE — SECTIONS IN ORDER

Build the homepage with these sections, in this exact order. Use the copy below verbatim unless I've flagged a section as "tighten up if needed".

### 3.1 NAV (sticky, blurred background)

- Left: logo mark (cyan rounded square with "C" in JetBrains Mono) + wordmark "CertForge" in DM Sans 800
- Right: links — `Features`, `Pricing`, `FAQ`, plus a primary CTA button `Get Early Access` linking to `#cta`
- On mobile (<720px), hide the text links, keep only the logo + CTA button
- Sticky with backdrop-blur 16px and `rgba(10,10,13,0.7)` background

### 3.2 HERO (asymmetric two-column, 1.15fr / 1fr)

**Left column (copy):**

- Eyebrow pill (cyan-dim background, pulsing green dot prefix, mono font):
  `CLF-C02 v3 // Live Question Bank`

- H1 (clamp 38px → 64px, weight 800, letter-spacing -0.035em, line-height 1.04):
  > Pass the AWS Cloud Practitioner on your **first try.**
  
  The phrase "first try." must be in cyan with a subtle 12px-tall cyan highlight bar behind it at 18% opacity.

- Sub (max-width 540px, color text-2, font-size 18px):
  > CertForge is the adaptive AWS exam prep app that finds your weak concepts, drills them with targeted questions, and tells you exactly when you're ready to walk into the testing centre. 800+ questions. Real exam simulator. Live readiness score.

- CTA row:
  - Primary: `Get Early Access →` (cyan button, cyan glow shadow) → links to `#cta`
  - Secondary: `See how it works` (transparent border button) → links to `#features`

- Trust strip below CTAs (mono font, 12px, text-3 color, cyan bullet dots):
  - `● 800+ practice questions`
  - `● 4 exam domains`
  - `● $4.99 lifetime`

**Right column (interactive-looking terminal panel):**

A "readiness dashboard" terminal mockup card with:
- Top bar with three faded dots + center title text `certforge — readiness.dashboard` (mono)
- Body section:
  - Mono label `// Your Readiness Score`
  - Large number `78%` (56px JetBrains Mono, cyan)
  - Green status pill `● PROJECTED PASS`
  - Mono label `// Domain Breakdown`
  - 4 progress bars with labels + percentages, all animating-in on page load via CSS keyframes (`scaleX(0)` → `scaleX(1)`, staggered 100ms each, 1.4s duration, `cubic-bezier(0.16, 1, 0.3, 1)`):
    - Cloud Concepts — 86%
    - Security & Compliance — 71%
    - Cloud Technology — 82%
    - Billing & Pricing — 64%
  - Dashed-border footer with mono text: `STREAK · 12 DAYS` on left, `NEXT · IAM ROLES` on right

The terminal card should have a strong layered shadow: deep black drop shadow + a soft cyan outer glow (`0 0 80px rgba(0, 212, 255, 0.08)`).

### 3.3 STATS BAND (full-width band between hero and next section)

Horizontal bordered band, 4 columns (2 on mobile):

| Number | Label |
|---|---|
| `800+` | CLF-C02 questions |
| `65q · 90min` | Real exam simulator |
| `4` | Exam domains covered |
| `$4.99` | Lifetime · no subscription trap |

Numbers in 32px JetBrains Mono 700. Labels in 13px DM Sans, text-3.

### 3.4 PROBLEM SECTION — "Most AWS prep apps are dumb flashcards"

Section eyebrow: `[ The problem ]` in cyan mono.

H2: `Most AWS prep apps are dumb flashcards.`

Sub: `You answer 500 random questions, half of them on topics you already know, and walk into the exam hoping for the best. CertForge takes a different approach.`

Two-column comparison (stacks below 720px):

**Left card — red-tinted border (`❌ Other AWS prep apps`):**
- Random questions with no awareness of what you actually struggle with
- Wrong answer? Get a one-line explanation and move on. No deeper learning.
- No way to tell if you're actually ready until exam day
- $30+/month subscriptions or paywalls after 5 questions
- Outdated content that doesn't match the current CLF-C02 blueprint

**Right card — cyan-tinted border (`✓ CertForge`):**
- Every question is tagged by **domain, subtopic, and concept** — we know exactly what tripped you up
- Wrong answer triggers a **three-step explanation** plus 3–5 follow-up drill questions on that exact concept
- Live **readiness score** predicts your real exam outcome before you book it
- $4.99 lifetime. Built for solo studiers, not enterprise budgets.
- Updated against the current CLF-C02 exam guide. Every question mapped to the blueprint.

### 3.5 FEATURES — "A smart tutor in your pocket"

Section eyebrow: `[ How it works ]`

H2: `A smart tutor in your pocket — not a quiz app.`

Sub: `The features that turn 4 hours of studying into actual progress, not just question-grinding.`

2-column grid of 6 feature cards (1px border between cells, rounded outer container). Each card has:
- Mono numeral `[ 0X ]` in cyan
- 44×44 icon tile (cyan-dim background, cyan SVG icon)
- H3 (21px, weight 700)
- Body paragraph (15px, text-2)

**The six features:**

1. **Adaptive Question Engine** — The app routes new questions toward your weakest concepts and reduces repetition on topics you've already nailed. No more wasting time on questions you'd answer in your sleep.

2. **Live Readiness Score** — A continuously updated pass-probability score. "You're 72% ready. Focus on IAM and S3 pricing to reach 85%." Know exactly when to book your exam, with zero guesswork.

3. **3-Step Wrong-Answer Feedback** — After every wrong answer: *what* went wrong → *why* the right answer is right → *which* concept you need to revisit. Then 3–5 drill questions queue automatically on that exact concept.

4. **Full Exam Simulator** — 65 questions, 90-minute timer, exact CLF-C02 domain weights. Train under the same pressure you'll face on exam day so the real thing feels like a Tuesday morning practice run.

5. **Concept-Level Weakness Maps** — Not just "weak in Security." We track concepts: *IAM roles vs IAM users, S3 storage class pricing, shared responsibility model*. The drill-down shows precisely where to spend your next study session.

6. **XP + Streaks for Daily Habit** — Earn XP for every answer. Build a daily streak. The behavioural loop that gets you actually opening the app on day 14 when motivation has run dry. Most users hit their exam in 18 days.

Use inline SVG icons (no icon library). Suggested icons:
1. Sun/radial rays
2. Line chart trending up
3. Circle with checkmark
4. Document with lines
5. Layered stack
6. Lightning bolt

### 3.6 DOMAINS — "All four CLF-C02 domains. Officially weighted."

Section eyebrow: `[ Full Coverage ]`

H2: `All four CLF-C02 domains. Officially weighted.`

Sub: `Every question is mapped to the official AWS Cloud Practitioner exam guide and weighted to match the real exam's domain distribution.`

Single rounded card with cyan-tinted top gradient. Inside, 4 horizontal rows separated by 1px dividers. Each row has: domain title + description on left, big cyan percentage on right.

1. **Cloud Concepts — 24%** — AWS Cloud value proposition, cloud economics, design principles, migration strategies. The conceptual foundation everything else builds on.

2. **Security & Compliance — 30%** — Shared Responsibility Model, IAM, security services, compliance frameworks, encryption. The largest domain on the exam — and where most candidates lose points.

3. **Cloud Technology & Services — 34%** — EC2, S3, RDS, Lambda, VPC, CloudFront, deployment methods. The big surface area domain — knowing which service fits which use case.

4. **Billing, Pricing & Support — 12%** — AWS pricing models, billing tools, support plans, Cost Explorer, Trusted Advisor. Small domain, easy wins if you know it cold.

Percentages render as 22px JetBrains Mono 700 in cyan, with a tiny "OF EXAM" caption below in 10px muted text.

### 3.7 SAMPLE QUESTION — "See a real CertForge question"

Two-column section. Stacks below 880px.

**Left column:**
- Eyebrow `[ Try It ]`
- Mid-size H2 (32px): `See a real CertForge question.`
- Body: `This is a real CLF-C02 question pulled from the CertForge bank, complete with the kind of structured feedback you get after every wrong answer. No copy-paste explanations. No "review the docs" cop-out.`
- Mono badge: `DOMAIN: Security & Compliance · DIFFICULTY: Medium`

**Right column — a question card mockup:**
- Top bar: `QUESTION 14 / 65` on left, cyan dot + `LIVE PREVIEW` on right (mono)
- Question: `Which of the following is the customer's responsibility under the AWS Shared Responsibility Model?`
- 4 option buttons (A–D) styled as the app:
  - A. Maintaining the physical security of AWS data centres → (neutral)
  - B. Patching the hypervisor on EC2 host machines → (red-tinted "wrong" state, pre-set)
  - C. Configuring IAM users, roles, and permissions in their AWS account → (green-tinted "correct" state, pre-set)
  - D. Replacing failed hard drives in the underlying infrastructure → (neutral)
- Feedback box below (cyan-tinted background, 1px cyan border):
  > **✓ Correct.** Under the Shared Responsibility Model, AWS handles security *of* the cloud (hardware, hypervisor, physical security), while the customer handles security *in* the cloud — that includes IAM configuration, data encryption choices, and network controls.
  >
  > `// CONCEPT FLAGGED: Shared Responsibility Model · 3 follow-up questions queued`

This is a static showcase — the options don't need to be functional buttons. Set the correct/wrong states with CSS classes.

### 3.8 PRICING — three-column comparison

Section eyebrow centered: `[ Pricing ]`

H2 (centered): `Honest pricing. No subscription trap.`

Sub (centered, max-width 600px): `Most candidates pass the exam within 2–4 weeks. The lifetime tier is $4.99 because we'd rather you actually use it once than rent it from us forever.`

Three pricing cards (stack below 880px):

**Card 1 — FREE**
- Name: `FREE`
- Price: `$0 forever`
- Tag: `Try it before you commit.`
- Features (active):
  - 30 practice questions
  - All 4 domains accessible
  - Basic progress tracking
  - XP & streak system
- Features (dimmed, "–" prefix):
  - Full 800+ question bank
  - Exam simulator
  - Live readiness score
- CTA: `Start Free` (secondary button style)

**Card 2 — LIFETIME (FEATURED, with `BEST VALUE` badge in top-right)**
- Cyan-tinted border + soft cyan glow
- Name: `LIFETIME`
- Price: `$4.99 once`
- Tag: `Cheaper than the exam fee 20×.`
- Features:
  - Everything in Free, plus:
  - Full 800+ question bank
  - Timed exam simulator (65q · 90min)
  - Live readiness score & predictions
  - 3-step wrong-answer feedback
  - Concept-level weakness analytics
  - Lifetime updates as CLF-C02 evolves
- CTA: `Get Lifetime Access` (primary cyan button)

**Card 3 — MONTHLY**
- Name: `MONTHLY`
- Price: `$9.99 /mo`
- Tag: `Prefer to pay as you go.`
- Features:
  - Everything in Lifetime
  - Cancel anytime
  - For longer-term cert paths
- CTA: `Choose Monthly` (secondary button style)

### 3.9 SOCIAL PROOF (testimonials)

Section eyebrow: `[ Early Testers ]`

H2: `Built with help from real test-takers.`

Sub: `Quotes from CertForge's closed testing cohort. Names anonymised pending Play Store launch.`

3-column grid of testimonials (1 column on mobile). Each card has:
- 5 amber stars `★★★★★`
- Quote in 15px text
- Divider line
- Initials avatar (linear-gradient cyan to deep blue) + name + role

**Testimonial 1**
> "The readiness score is the part that hooked me. I had no idea I was actually below 60% on Billing until the app told me. Re-took the exam simulator twice, passed CLF-C02 the next week."
**M.K.** · Cloud Engineer, Karachi

**Testimonial 2**
> "Most AWS apps just dump 500 questions at you. CertForge tells you *why* you got it wrong and immediately gives you 3 more on the same concept. That feedback loop is the whole game."
**A.S.** · IT Support → DevOps transition

**Testimonial 3**
> "Studied for 3 weeks at 30 min/day on the bus. Walked in, passed with 842/1000. The exam simulator pacing felt identical to the real thing."
**R.P.** · Junior SysAdmin

> ⚠️ Mark these as "Closed Testing cohort, anonymised" in tiny mono text below the testimonial grid. We are not fabricating verified reviews — these are aggregated quotes from real beta testers.

### 3.10 FAQ — SEO POWERHOUSE

Section eyebrow: `[ FAQ ]`

H2: `Questions you'd probably ask anyway.`

Accordion-style FAQ list (max-width 820px, centered). Click question → answer expands. Plus icon rotates to X (45deg) on open. Use vanilla JS or React state — whatever matches the existing stack.

**Include exactly these 10 questions in this order:**

1. **What is the AWS Cloud Practitioner (CLF-C02) exam?**
   CLF-C02 is the foundational AWS certification covering cloud concepts, security, AWS services, and billing. It validates a high-level understanding of AWS and is the starting point for most AWS certification paths.

2. **How much does the AWS Cloud Practitioner exam cost?**
   The CLF-C02 exam costs $100 USD. AWS occasionally offers 50% discount vouchers to people who have already passed other AWS exams or attended specific AWS events.

3. **What is the passing score for AWS Cloud Practitioner?**
   You need a scaled score of 700 out of 1000 to pass CLF-C02. The exam contains 65 questions and you have 90 minutes to complete it.

4. **How long should I study for the AWS Cloud Practitioner exam?**
   Most candidates need 2 to 4 weeks of focused study. With CertForge's adaptive engine, the average time-to-readiness for active users is 18 days at roughly 45 minutes per day.

5. **Is CertForge free?**
   Yes. The free tier includes the first 30 questions across all four domains plus weakness tracking. Unlocking the full 800+ question bank, the timed exam simulator, and advanced analytics costs $4.99 lifetime or $9.99 per month.

6. **Are CertForge questions similar to the real AWS exam?**
   Yes. Every question is mapped to the official CLF-C02 exam guide and written in the same multiple-choice and multiple-response format used on the live exam. Domain weights also mirror the official blueprint.

7. **How is CertForge different from other AWS prep apps?**
   Most apps are static flashcards. CertForge tags every question by domain, subtopic, and concept, then routes new questions toward your weakest concepts. After every wrong answer you get a three-step explanation, and your live readiness score predicts whether you would pass right now.

8. **Does CertForge cover the latest CLF-C02 update?**
   Yes. The full question bank is built against the current CLF-C02 blueprint, including new services and the updated domain weights.

9. **Can I use CertForge offline?**
   Practice sessions you have already started will continue offline. Progress syncs the next time you connect, and the full mock exam simulator requires an internet connection.

10. **Is CertForge available on iOS?**
    CertForge is launching on Android first via Google Play. An iOS version is on the roadmap once the Android version is validated in production.

These exact questions MUST also be mirrored in the FAQPage JSON-LD schema (see Section 4).

### 3.11 FINAL CTA — email capture

Full-width card section (rounded 24px, dot-grid texture, radial cyan glow at top, dark gradient base):

- Eyebrow (centered, optional)
- H2 (centered, large): `Ready to actually pass on your first try?`
- Sub (centered): `Drop your email to get notified the moment CertForge hits the Play Store. No spam, no marketing drip — just the launch link.`
- Email form (centered, max-width 440px):
  - Email input (with focus state: cyan border + 3px cyan glow ring)
  - Submit button: `Notify Me` (cyan)
- Below form, tiny mono note: `// We'll email you once. That's it.`
- Form submission shows an inline green success message: `✓ You're on the list. We'll email you at launch.`

The form should submit to a placeholder endpoint (e.g. `/api/waitlist`) — implement the front-end success state with local state. Leave a clear `// TODO: wire to email service` comment in the handler. Taha will plug in his email service (Resend / Loops / ConvertKit) separately.

### 3.12 FOOTER

4-column layout (stacks to 2 columns on tablet, 1 on mobile):

**Column 1 — Brand block**
- Logo + wordmark
- Tagline: `Adaptive AWS exam prep. Built by Optivio Media in Karachi, Pakistan.`

**Column 2 — Product**
- Features → `#features`
- Pricing → `#pricing`
- FAQ → `#faq`
- Download → (placeholder Play Store link; comment `// TODO: replace with live Play Store URL`)

**Column 3 — Resources**
- AWS CLF-C02 Exam Guide → `https://aws.amazon.com/certification/certified-cloud-practitioner/`
- Free Study Plan (placeholder link, `#`)
- Domain Breakdown → `#domains`

**Column 4 — Legal & Company**
- Privacy Policy → `/privacy` (use whatever the existing route is)
- Terms of Service → `/terms` (create as placeholder if not present, but don't break if missing)
- Account Deletion → existing Notion page URL (Taha already published this)
- Optivio Media → `https://optiviomedia.online`

**Footer bottom strip:**
- Left: `© 2026 Optivio Media · All rights reserved.`
- Right: Social icons (LinkedIn for Taha + Optivio if present)

Column heading style: mono, uppercase, 11px, letter-spacing 0.12em, text-3 color.

---

## 4. SEO REQUIREMENTS (CRITICAL — DO NOT SKIP)

### 4.1 `<head>` metadata

```
<title>CertForge — AWS Cloud Practitioner (CLF-C02) Exam Prep App with Adaptive Practice Tests</title>
<meta name="description" content="Pass the AWS Cloud Practitioner exam on your first try. CertForge is an adaptive CLF-C02 prep app with 800+ practice questions, a real exam simulator, weakness detection, and a live readiness score. Free to start." />
<meta name="keywords" content="AWS Cloud Practitioner, CLF-C02, AWS practice test, AWS exam prep, AWS certification app, AWS practice questions, AWS Cloud Practitioner mock exam, AWS CLF-C02 prep" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<link rel="canonical" href="https://getcertforge.app/" />
```

### 4.2 Open Graph + Twitter cards

```
<meta property="og:type" content="website" />
<meta property="og:url" content="https://getcertforge.app/" />
<meta property="og:title" content="CertForge — AWS Cloud Practitioner (CLF-C02) Prep, Reimagined" />
<meta property="og:description" content="The adaptive AWS exam prep app that finds your weak spots, drills them with targeted questions, and tells you exactly when you're ready to pass." />
<meta property="og:image" content="https://getcertforge.app/og.png" />
<meta property="og:site_name" content="CertForge" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="CertForge — Adaptive AWS Cloud Practitioner Prep" />
<meta name="twitter:description" content="Pass CLF-C02 on your first try. 800+ questions, real exam simulator, live readiness score." />
<meta name="twitter:image" content="https://getcertforge.app/og.png" />
```

If using Next.js App Router, implement this via the `metadata` export. If Pages Router, use `next/head` in `_document` and the page. Match the existing pattern.

Note: `og.png` doesn't exist yet — leave the link in but flag with a comment that Taha needs to generate a 1200×630 OG image (he'll do this in Canva from the brand kit).

### 4.3 JSON-LD Structured Data (THREE schemas required)

Inject these three schemas into the `<head>` (or in Next.js, render via `<Script type="application/ld+json">` strategy="beforeInteractive"):

**Schema 1 — SoftwareApplication:**

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CertForge",
  "operatingSystem": "Android",
  "applicationCategory": "EducationalApplication",
  "description": "Adaptive AWS Cloud Practitioner (CLF-C02) exam preparation app with 800+ practice questions, weakness detection, real exam simulator, and a live readiness score.",
  "url": "https://getcertforge.app/",
  "offers": [
    { "@type": "Offer", "price": "0", "priceCurrency": "USD", "name": "Free" },
    { "@type": "Offer", "price": "4.99", "priceCurrency": "USD", "name": "Lifetime" },
    { "@type": "Offer", "price": "9.99", "priceCurrency": "USD", "name": "Monthly" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Optivio Media",
    "url": "https://optiviomedia.online"
  }
}
```

> ⚠️ NOTE: Only include `aggregateRating` once real reviews exist on Play Store. For now, **wrap that block in a comment** so Google doesn't penalise us for fake ratings. Activate it post-launch.

**Schema 2 — FAQPage:** Mirror every Q&A from Section 3.10 into a `FAQPage` schema with `mainEntity` as an array of `Question` objects. Use the exact same wording.

**Schema 3 — Organization:**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Optivio Media",
  "url": "https://optiviomedia.online",
  "logo": "https://getcertforge.app/logo.png",
  "sameAs": [
    "https://linkedin.com/in/tahailyas",
    "https://tahailyas.com"
  ]
}
```

### 4.4 Heading hierarchy & internal linking

- Exactly **one `<h1>`** on the page (in hero).
- Section H2s are unique and keyword-rich (already drafted above).
- Use H3 for feature/domain titles.
- Anchor links across the page form an internal link graph (`#features`, `#pricing`, `#faq`, `#domains`).

### 4.5 Performance

- Preconnect to Google Fonts.
- Use `font-display: swap`.
- Inline critical CSS if framework allows; otherwise use a single stylesheet.
- All SVG icons inline — no external icon library.
- No render-blocking JS — accordion logic should be tiny vanilla JS or React state (no jQuery, no full UI library).
- Target Lighthouse: Performance ≥ 90, SEO = 100, Accessibility ≥ 95.

### 4.6 `robots.txt` + sitemap

If not already present, create:

- `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://getcertforge.app/sitemap.xml
  ```
- `public/sitemap.xml` listing `/`, `/privacy`, `/terms`, and the account-deletion URL.

---

## 5. ANIMATIONS & MICRO-INTERACTIONS

Keep it tasteful. Specifically:

1. **Hero fade-up stagger:** eyebrow → h1 → sub → ctas → trust strip, with delays 0s / 0.05s / 0.15s / 0.25s / 0.35s. Use `translateY(20px) → 0` + opacity `0 → 1` over 700ms with `cubic-bezier(0.16, 1, 0.3, 1)`.
2. **Hero terminal panel:** fades in alongside left column. Once visible, the four domain progress bars animate `scaleX(0) → scaleX(1)` with 100ms stagger.
3. **Green pulsing dot** in the eyebrow pill (opacity 1 → 0.4 → 1 over 2s, infinite).
4. **Button hover:** primary CTAs lift `translateY(-2px)` and grow cyan glow shadow.
5. **FAQ accordion:** smooth `max-height` transition 300ms, plus icon rotates 45deg.
6. **Reduced motion:** respect `@media (prefers-reduced-motion: reduce)` — disable all transforms and use simple opacity fades.

No parallax. No scroll-jacking. No mouse-following effects. Stay disciplined.

---

## 6. TECHNICAL CONSTRAINTS

- **No external CSS frameworks beyond what's already in the project.** If the project uses Tailwind, use Tailwind. If it uses CSS Modules, use those. If plain CSS, use plain CSS with CSS variables.
- **No new heavy npm dependencies.** No Framer Motion, no GSAP, no shadcn/ui. Use CSS keyframes for animations and React state (or vanilla JS) for the accordion.
- **One homepage file maximum** plus small component splits if it improves readability (e.g. `Hero.tsx`, `FAQ.tsx`).
- **Type safety:** if TypeScript, type everything. No `any`.
- **No console errors / warnings** when the page renders.

---

## 7. ACCEPTANCE CRITERIA (Definition of Done)

Before declaring complete, verify all of these:

- [ ] Homepage renders at `/` with all 12 sections in order
- [ ] All copy from this brief is used **verbatim** — no paraphrasing or "improvements"
- [ ] H1 appears exactly once, in the hero
- [ ] Three JSON-LD schemas are present and valid (test with Google Rich Results Test mentally)
- [ ] `<title>` and meta description match Section 4.1 exactly
- [ ] Open Graph + Twitter card tags present
- [ ] Canonical URL set
- [ ] Mobile responsive at 360px, 480px, 720px, 960px, 1280px+
- [ ] FAQ accordion expands/collapses smoothly
- [ ] Email form shows a success state when submitted (front-end only is fine, with TODO comment)
- [ ] No new heavy dependencies introduced
- [ ] No console errors on load
- [ ] Privacy / auth / account-deletion routes still work — nothing else in the repo is broken
- [ ] Lighthouse SEO score = 100 (run mentally — proper headings, meta, schema)
- [ ] Lighthouse Performance ≥ 90 (no oversized images, fonts loading async)
- [ ] `robots.txt` + `sitemap.xml` present in `public/`

---

## 8. WHAT NOT TO DO (anti-requirements)

- ❌ Do **NOT** add purple-pink gradient hero backgrounds. The brand is dark + cyan only.
- ❌ Do **NOT** use Inter as the body font. Use DM Sans. (Note: Inter is in `userMemories` as part of the brand kit, but the design system supersedes — DM Sans is the chosen body face for the web.)
- ❌ Do **NOT** invent additional feature claims not in this brief.
- ❌ Do **NOT** make up testimonial names with full surnames. Initials only.
- ❌ Do **NOT** enable the `aggregateRating` schema block until real Play Store reviews exist.
- ❌ Do **NOT** add a hamburger menu drawer on mobile. Just hide secondary nav links and keep the CTA.
- ❌ Do **NOT** add cookie banners, chat widgets, or popups.
- ❌ Do **NOT** break the existing privacy, auth, or account-deletion routes.
- ❌ Do **NOT** add a blog or extra routes in this pass. Homepage only.

---

## 9. COMMIT MESSAGE

When done, commit with this message:

```
feat(homepage): rebuild as SEO-optimized conversion landing page

- Full restructure into 12 sections (hero, problem, features, domains, sample Q, pricing, social proof, FAQ, CTA)
- Comprehensive SEO: title, description, OG, Twitter cards, canonical
- 3 JSON-LD schemas: SoftwareApplication, FAQPage, Organization
- Design system: dark theme + cyan accent, DM Sans + JetBrains Mono
- robots.txt + sitemap.xml added
- All existing routes (privacy, auth, account deletion) preserved

Targets: Lighthouse SEO 100, Performance 90+, mobile-first responsive.
```

---

## 10. POST-BUILD CHECKLIST FOR TAHA (humans, not Claude Code)

After Claude Code finishes, Taha should personally:

1. Generate a 1200×630 OG image in Canva using the brand kit and replace `og.png`.
2. Wire the email form to Resend / Loops / ConvertKit. Replace the `// TODO` in the form handler.
3. Once Play Store is live, replace all `// TODO Play Store URL` placeholders with the real Play Store listing URL.
4. Once 50+ verified Play Store reviews exist, uncomment the `aggregateRating` block in the SoftwareApplication schema with real numbers.
5. Submit the live site to Google Search Console + Bing Webmaster Tools. Submit the sitemap.
6. Set up `getcertforge.app` redirect at `tahailyas.com/projects/certforge` for an internal entity backlink.
7. Post on r/AWSCertifications + LinkedIn (build-in-public) the day production launches.

---

**End of brief. Build the whole thing in one pass. No partial deliveries.**
