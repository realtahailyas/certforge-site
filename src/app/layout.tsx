import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { faqEntries } from "./_data/faq";
import { ANDROID_PACKAGE_ID, PLAY_STORE_URL } from "./_config/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://getcertforge.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "CertForge — AWS Cloud Practitioner (CLF-C02) Exam Prep App with Adaptive Practice Tests",
  description:
    "Pass the AWS Cloud Practitioner exam on your first try. CertForge is an adaptive CLF-C02 prep app with 800+ practice questions, a real exam simulator, weakness detection, and a live readiness score. Free to start.",
  keywords: [
    "AWS Cloud Practitioner",
    "CLF-C02",
    "AWS practice test",
    "AWS exam prep",
    "AWS certification app",
    "AWS practice questions",
    "AWS Cloud Practitioner mock exam",
    "AWS CLF-C02 prep",
  ],
  alternates: {
    canonical: SITE_URL + "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL + "/",
    siteName: "CertForge",
    title: "CertForge — AWS Cloud Practitioner (CLF-C02) Prep, Reimagined",
    description:
      "Free Android app to pass the AWS Cloud Practitioner (CLF-C02) on your first try. 100 starter questions + 20 free daily — full unlock for $14.99. Download free on Google Play.",
    // TODO: Taha to generate a 1200x630 OG image in Canva and place at /public/og.png
    images: [
      {
        url: SITE_URL + "/og.png",
        width: 1200,
        height: 630,
        alt: "CertForge — Adaptive AWS Cloud Practitioner prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CertForge — Adaptive AWS Cloud Practitioner Prep",
    description:
      "Pass CLF-C02 on your first try. 100 Qs free + 20 daily. Full unlock $14.99 lifetime. Free on Google Play.",
    images: [SITE_URL + "/og.png"],
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CertForge",
  operatingSystem: "Android 8.0+",
  applicationCategory: "EducationalApplication",
  downloadUrl: PLAY_STORE_URL,
  installUrl: PLAY_STORE_URL,
  description:
    "Adaptive AWS Cloud Practitioner (CLF-C02) exam preparation app with 800+ practice questions, weakness detection, real exam simulator, and a live readiness score. Free to install — 100 starter questions plus 20 fresh questions daily. Full unlock $4.99/month or $14.99 lifetime.",
  url: SITE_URL + "/",
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      name: "Free download — 100 questions + 20 daily",
    },
    {
      "@type": "Offer",
      price: "4.99",
      priceCurrency: "USD",
      name: "Monthly subscription",
    },
    {
      "@type": "Offer",
      price: "14.99",
      priceCurrency: "USD",
      name: "Lifetime in-app purchase",
    },
  ],
  /*
   * aggregateRating intentionally omitted until verified Play Store reviews exist.
   * Once 50+ verified reviews exist, restore real numbers here:
   * "aggregateRating": { "@type": "AggregateRating", "ratingValue": "X.X", "ratingCount": "N" }
   */
  publisher: {
    "@type": "Organization",
    name: "Optivio Media",
    url: "https://optiviomedia.online",
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Optivio Media",
  url: "https://optiviomedia.online",
  logo: SITE_URL + "/logo.png",
  sameAs: ["https://linkedin.com/in/tahailyas", "https://tahailyas.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#0a0a0d" />
        <meta
          name="google-play-app"
          content={`app-id=${ANDROID_PACKAGE_ID}`}
        />
        <link
          rel="alternate"
          href={`android-app://${ANDROID_PACKAGE_ID}/https/getcertforge.app/`}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          id="ld-software-application"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <Script
          id="ld-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
