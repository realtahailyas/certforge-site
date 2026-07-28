import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import { blogPosts } from "../_data/blog";
import { SITE_URL } from "../_config/site";

const title = "AWS Cloud Practitioner Blog — Study Guides, Tips & Practice Questions";
const description =
  "Free CLF-C02 study guides, practice questions, exam-day tips, and certification path advice — everything you need to pass AWS Cloud Practitioner.";

export const metadata: Metadata = {
  title: `${title} | CertForge`,
  description,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "CertForge",
    title,
    description,
    images: [
      {
        url: SITE_URL + "/og.png",
        width: 1200,
        height: 630,
        alt: "CertForge Blog — AWS Cloud Practitioner study guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [SITE_URL + "/og.png"],
  },
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-[1000px] px-6 py-16 lg:px-10 lg:py-24">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--cyan)]">
            [ CertForge Blog ]
          </p>
          <h1
            className="mt-3 font-extrabold text-[var(--text)]"
            style={{
              fontSize: "clamp(30px, 4.6vw, 46px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            AWS Cloud Practitioner study guides &amp; practice
          </h1>
          <p className="mt-5 max-w-[620px] text-[17px] leading-[1.65] text-[var(--text-2)]">
            Everything we know about passing CLF-C02 on your first try — free
            study plans, explained practice questions, and exam-day strategy.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-[var(--border-hi)] bg-[var(--bg-elev)] p-6 transition-colors hover:border-[var(--cyan)] sm:p-7"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cyan)]">
                  {post.category}
                </p>
                <h2 className="mt-3 text-[20px] font-bold leading-snug text-[var(--text)] group-hover:text-[var(--cyan)]">
                  {post.h1}
                </h2>
                <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-[var(--text-2)]">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-3 font-mono text-[11.5px] text-[var(--text-3)]">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readMinutes} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
