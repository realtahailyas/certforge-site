import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../_components/Nav";
import Footer from "../../_components/Footer";
import BlogCta from "../_components/BlogCta";
import { blogPosts, getBlogPost } from "../../_data/blog";
import { contentMap } from "../_content";
import { SITE_URL } from "../../_config/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | CertForge`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "CertForge",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [
        {
          url: SITE_URL + "/og.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [SITE_URL + "/og.png"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const Content = contentMap[slug];
  if (!post || !Content) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "CertForge",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Optivio Media",
      url: "https://optiviomedia.online",
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-[760px] px-6 py-14 lg:px-10 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/blog"
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--text-3)] hover:text-[var(--cyan)]"
            >
              &larr; All articles
            </Link>
          </nav>

          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--cyan)]">
            [ {post.category} ]
          </p>
          <h1
            className="mt-3 font-extrabold text-[var(--text)]"
            style={{
              fontSize: "clamp(28px, 4.6vw, 42px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.12,
            }}
          >
            {post.h1}
          </h1>
          <div className="mt-5 flex items-center gap-3 font-mono text-[12.5px] text-[var(--text-3)]">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readMinutes} min read</span>
          </div>

          <div className="cf-prose mt-10">
            <Content />
          </div>

          <BlogCta />
        </article>

        {related.length > 0 ? (
          <section className="mx-auto w-full max-w-[900px] px-6 pb-20 lg:px-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-3)]">
              Keep reading
            </p>
            <ul className="mt-5 grid gap-5 sm:grid-cols-3" role="list">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="block h-full rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-5 transition-colors hover:border-[var(--cyan)]"
                  >
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--cyan)]">
                      {r.category}
                    </p>
                    <p className="mt-2 text-[15px] font-bold leading-snug text-[var(--text)]">
                      {r.h1}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
