// Single source of truth for the Play Store URL.
// Use the Play Console package name (`com.getcertforge.app`) — this is the permanent one.
// Project files may also reference `com.optiviomedia.certforge`; do NOT use that here.
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.getcertforge.app";

// Android package id mirrored separately so meta tags and the JSON-LD schema can stay in sync.
export const ANDROID_PACKAGE_ID = "com.getcertforge.app";

// Set to `true` once the app is publicly downloadable on Play Store.
// While `false`, primary CTAs still link to PLAY_STORE_URL but a small
// "Notify me at launch" fallback link is shown beneath the primary CTA, and
// the email waitlist remains visible as a secondary block in the final CTA.
export const IS_PUBLICLY_LIVE = false;

export const SITE_URL = "https://getcertforge.app";

// Single source of truth for every dollar amount surfaced on the site.
// Update prices here only — JSX must read from this constant, never inline.
export const PRICING = {
  FREE_QUESTIONS_INITIAL: 100,
  FREE_QUESTIONS_DAILY: 20,
  MONTHLY_PRICE: 4.99,
  LIFETIME_PRICE: 14.99,
  EXAM_FEE_USD: 100,
} as const;
