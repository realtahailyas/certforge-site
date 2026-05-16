import Link from "next/link";
import Faq from "./_components/Faq";
import PlayStoreButton from "./_components/PlayStoreButton";
import WaitlistForm from "./_components/WaitlistForm";
import { IS_PUBLICLY_LIVE, PLAY_STORE_URL, PRICING } from "./_config/site";

const fmtPrice = (n: number) =>
  Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
import { faqEntries } from "./_data/faq";

const ACCOUNT_DELETION_URL =
  "https://optiviomedia.notion.site/CertForge-Account-Deletion"; // placeholder; Taha's published Notion page

// -- Logo -----------------------------------------------------------------

function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center rounded-lg font-mono font-bold"
        style={{
          width: size,
          height: size,
          background: "var(--cyan)",
          color: "#001520",
          boxShadow: "0 0 24px -4px var(--cyan-glow)",
          fontSize: size * 0.5,
          letterSpacing: "-0.05em",
        }}
      >
        C
      </span>
      <span className="text-[18px] font-extrabold tracking-tight text-[var(--text)]">
        CertForge
      </span>
    </span>
  );
}

// -- Eyebrows --------------------------------------------------------------

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--cyan)]">
      {children}
    </p>
  );
}

// -- Icons -----------------------------------------------------------------

function IconSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 19h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5 15l4-5 4 3 6-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5h4v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 12.5l2.6 2.6L16 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDoc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 3h8l4 4v14H6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v4h4M9 12h6M9 16h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3l9 5-9 5-9-5 9-5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M3 13l9 5 9-5M3 17l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBolt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// -- Hero ------------------------------------------------------------------

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(0,212,255,0.18), transparent 70%)",
        }}
      />
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 pt-20 pb-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10 lg:pt-28 lg:pb-32">
        {/* Left */}
        <div className="flex flex-col">
          <div
            className="cf-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(0,212,255,0.25)] bg-[var(--cyan-dim)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cyan)]"
            style={{ animationDelay: "0s" }}
          >
            <span
              aria-hidden="true"
              className="cf-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--green)] shadow-[0_0_8px_var(--green)]"
            />
            {IS_PUBLICLY_LIVE
              ? "Now on Google Play · 100% free to start"
              : "Launching soon on Google Play · CLF-C02"}
          </div>

          <h1
            className="cf-fade-up mt-6 font-extrabold text-[var(--text)]"
            style={{
              animationDelay: "0.05s",
              fontSize: "clamp(38px, 6vw, 64px)",
              letterSpacing: "-0.035em",
              lineHeight: 1.04,
            }}
          >
            Pass the AWS Cloud Practitioner on your{" "}
            <span className="relative inline-block whitespace-nowrap text-[var(--cyan)]">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[0.12em] -z-10 h-[0.18em]"
                style={{ background: "rgba(0,212,255,0.18)" }}
              />
              first try.
            </span>
          </h1>

          <p
            className="cf-fade-up mt-6 max-w-[540px] text-[18px] leading-[1.6] text-[var(--text-2)]"
            style={{ animationDelay: "0.15s" }}
          >
            CertForge is the adaptive AWS exam prep app that finds your weak
            concepts, drills them with targeted questions, and tells you exactly
            when you&apos;re ready to walk into the testing centre. 800+
            questions. Real exam simulator. Live readiness score.
          </p>

          <div
            className="cf-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.25s" }}
          >
            <PlayStoreButton variant="primary" size="large" />
            <a
              href="#features"
              className="cf-btn-secondary inline-flex items-center rounded-xl px-5 py-3 text-[14px] font-semibold"
            >
              See how it works
            </a>
          </div>

          <p
            className="cf-fade-up mt-4 font-mono text-[12px] text-[var(--text-3)]"
            style={{ animationDelay: "0.3s" }}
          >
            Free download · No signup required to start · Android 8.0+
          </p>

          {!IS_PUBLICLY_LIVE ? (
            <p
              className="cf-fade-up mt-2 font-mono text-[12px] text-[var(--text-3)]"
              style={{ animationDelay: "0.32s" }}
            >
              Not on Play Store yet?{" "}
              <a
                href="#waitlist"
                className="text-[var(--cyan)] underline underline-offset-2 hover:text-[var(--text)]"
              >
                Get launch notice →
              </a>
            </p>
          ) : null}

          <ul
            className="cf-fade-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] text-[var(--text-3)]"
            style={{ animationDelay: "0.35s" }}
          >
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="text-[var(--cyan)]">
                ●
              </span>
              800+ CLF-C02 questions
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="text-[var(--cyan)]">
                ●
              </span>
              Free to download · Daily {PRICING.FREE_QUESTIONS_DAILY} Q claim
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="text-[var(--cyan)]">
                ●
              </span>
              {fmtPrice(PRICING.LIFETIME_PRICE)} lifetime unlock
            </li>
          </ul>
        </div>

        {/* Right — Readiness Dashboard */}
        <div
          className="cf-fade-in lg:mt-2"
          style={{ animationDelay: "0.2s" }}
          aria-label="CertForge readiness dashboard preview"
        >
          <div className="cf-terminal-shadow overflow-hidden rounded-2xl bg-[var(--bg-elev)]">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a44]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a44]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a44]" />
              </div>
              <span className="font-mono text-[11px] text-[var(--text-3)]">
                certforge — readiness.dashboard
              </span>
              <span className="w-12" aria-hidden="true" />
            </div>
            <div className="space-y-6 px-6 py-7">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-3)]">
                  {"// Your Readiness Score"}
                </p>
                <div className="mt-2 flex items-end gap-4">
                  <span
                    className="font-mono font-bold text-[var(--cyan)]"
                    style={{
                      fontSize: 56,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    78%
                  </span>
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[rgba(0,255,149,0.25)] bg-[rgba(0,255,149,0.08)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--green)]">
                    <span
                      aria-hidden="true"
                      className="cf-pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--green)] shadow-[0_0_6px_var(--green)]"
                    />
                    Projected pass
                  </span>
                </div>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-3)]">
                  {"// Domain Breakdown"}
                </p>
                <ul className="mt-3 space-y-3" role="list">
                  {[
                    { label: "Cloud Concepts", pct: 86 },
                    { label: "Security & Compliance", pct: 71 },
                    { label: "Cloud Technology", pct: 82 },
                    { label: "Billing & Pricing", pct: 64 },
                  ].map((d, i) => (
                    <li key={d.label}>
                      <div className="flex items-center justify-between font-mono text-[12px]">
                        <span className="text-[var(--text-2)]">{d.label}</span>
                        <span className="text-[var(--cyan)]">{d.pct}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-hi)]">
                        <div
                          className="cf-bar h-full rounded-full"
                          style={{
                            width: `${d.pct}%`,
                            background:
                              "linear-gradient(90deg, var(--cyan) 0%, rgba(0,212,255,0.6) 100%)",
                            animationDelay: `${0.5 + i * 0.1}s`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between border-t border-dashed border-[var(--border-hi)] pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-3)]">
                <span>
                  Streak <span className="text-[var(--text-2)]">·</span>{" "}
                  <span className="text-[var(--text)]">12 days</span>
                </span>
                <span>
                  Next <span className="text-[var(--text-2)]">·</span>{" "}
                  <span className="text-[var(--text)]">IAM roles</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -- Stats Band ------------------------------------------------------------

function StatsBand() {
  const stats: Array<{ n: string; label: string }> = [
    { n: "800+", label: "CLF-C02 questions" },
    { n: "65q · 90min", label: "Real exam simulator" },
    { n: "4", label: "Exam domains covered" },
    {
      n: fmtPrice(PRICING.LIFETIME_PRICE),
      label: `Lifetime unlock · or ${fmtPrice(PRICING.MONTHLY_PRICE)}/mo`,
    },
  ];
  return (
    <section
      aria-label="Key stats"
      className="border-y border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-px overflow-hidden bg-[var(--border)] sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-[var(--bg)] px-6 py-7 sm:px-8 sm:py-8"
          >
            <p
              className="font-mono font-bold text-[var(--text)]"
              style={{ fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1 }}
            >
              {s.n}
            </p>
            <p className="mt-2 text-[13px] text-[var(--text-3)]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// -- Problem ---------------------------------------------------------------

function ProblemSection() {
  const bad = [
    "Random questions with no awareness of what you actually struggle with",
    "Wrong answer? Get a one-line explanation and move on. No deeper learning.",
    "No way to tell if you're actually ready until exam day",
    "$30+/month subscriptions or paywalls after 5 questions",
    "Outdated content that doesn't match the current CLF-C02 blueprint",
  ];
  const good = [
    <>
      Every question is tagged by{" "}
      <strong className="text-[var(--text)]">
        domain, subtopic, and concept
      </strong>{" "}
      — we know exactly what tripped you up
    </>,
    <>
      Wrong answer triggers a{" "}
      <strong className="text-[var(--text)]">three-step explanation</strong>{" "}
      plus 3–5 follow-up drill questions on that exact concept
    </>,
    <>
      Live <strong className="text-[var(--text)]">readiness score</strong>{" "}
      predicts your real exam outcome before you book it
    </>,
    <>
      {fmtPrice(PRICING.LIFETIME_PRICE)} lifetime (or{" "}
      {fmtPrice(PRICING.MONTHLY_PRICE)}/mo). Built for solo studiers, not
      enterprise budgets.
    </>,
    <>
      Updated against the current CLF-C02 exam guide. Every question mapped to
      the blueprint.
    </>,
  ];
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
      <div className="max-w-[760px]">
        <SectionEyebrow>[ The problem ]</SectionEyebrow>
        <h2
          className="mt-3 font-extrabold text-[var(--text)]"
          style={{
            fontSize: "clamp(28px, 4.2vw, 44px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          Most AWS prep apps are dumb flashcards.
        </h2>
        <p className="mt-5 text-[17px] leading-[1.65] text-[var(--text-2)]">
          You answer 500 random questions, half of them on topics you already
          know, and walk into the exam hoping for the best. CertForge takes a
          different approach.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-[rgba(255,107,107,0.25)] bg-[rgba(255,107,107,0.04)] p-6 sm:p-8">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--red)]">
            ❌ Other AWS prep apps
          </p>
          <ul className="mt-5 space-y-3.5 text-[15px] leading-[1.6] text-[var(--text-2)]">
            {bad.map((line, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-[var(--red)]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[rgba(0,212,255,0.28)] bg-[rgba(0,212,255,0.04)] p-6 sm:p-8">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--cyan)]">
            ✓ CertForge
          </p>
          <ul className="mt-5 space-y-3.5 text-[15px] leading-[1.6] text-[var(--text-2)]">
            {good.map((line, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-[var(--cyan)]"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// -- Features --------------------------------------------------------------

function FeatureCard({
  index,
  Icon,
  title,
  body,
}: {
  index: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}) {
  return (
    <article className="group flex h-full flex-col gap-4 p-7 transition-colors hover:bg-[var(--surface-hi)] sm:p-8">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cyan)]">
          [ {index} ]
        </span>
        <span
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[var(--cyan)]"
          style={{
            background: "var(--cyan-dim)",
            border: "1px solid rgba(0,212,255,0.25)",
          }}
        >
          <Icon width="22" height="22" />
        </span>
      </div>
      <h3
        className="text-[21px] font-bold leading-[1.25] text-[var(--text)]"
        style={{ letterSpacing: "-0.015em" }}
      >
        {title}
      </h3>
      <p className="text-[15px] leading-[1.65] text-[var(--text-2)]">{body}</p>
    </article>
  );
}

function FeaturesSection() {
  const features: Array<{
    index: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    body: string;
  }> = [
    {
      index: "01",
      Icon: IconSun,
      title: "Adaptive Question Engine",
      body: "The app routes new questions toward your weakest concepts and reduces repetition on topics you've already nailed. No more wasting time on questions you'd answer in your sleep.",
    },
    {
      index: "02",
      Icon: IconChart,
      title: "Live Readiness Score",
      body: "A continuously updated pass-probability score. “You're 72% ready. Focus on IAM and S3 pricing to reach 85%.” Know exactly when to book your exam, with zero guesswork.",
    },
    {
      index: "03",
      Icon: IconCheck,
      title: "3-Step Wrong-Answer Feedback",
      body: "After every wrong answer: what went wrong → why the right answer is right → which concept you need to revisit. Then 3–5 drill questions queue automatically on that exact concept.",
    },
    {
      index: "04",
      Icon: IconDoc,
      title: "Full Exam Simulator",
      body: "65 questions, 90-minute timer, exact CLF-C02 domain weights. Train under the same pressure you'll face on exam day so the real thing feels like a Tuesday morning practice run.",
    },
    {
      index: "05",
      Icon: IconLayers,
      title: "Concept-Level Weakness Maps",
      body: "Not just “weak in Security.” We track concepts: IAM roles vs IAM users, S3 storage class pricing, shared responsibility model. The drill-down shows precisely where to spend your next study session.",
    },
    {
      index: "06",
      Icon: IconBolt,
      title: "XP + Streaks for Daily Habit",
      body: "Earn XP for every answer. Build a daily streak. The behavioural loop that gets you actually opening the app on day 14 when motivation has run dry. Most users hit their exam in 18 days.",
    },
  ];
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="max-w-[760px]">
        <SectionEyebrow>[ How it works ]</SectionEyebrow>
        <h2
          className="mt-3 font-extrabold text-[var(--text)]"
          style={{
            fontSize: "clamp(28px, 4.2vw, 44px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          A smart tutor in your pocket — not a quiz app.
        </h2>
        <p className="mt-5 text-[17px] leading-[1.65] text-[var(--text-2)]">
          The features that turn 4 hours of studying into actual progress, not
          just question-grinding.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border-hi)] bg-[var(--surface)]">
        <div className="grid gap-px bg-[var(--border)] md:grid-cols-2">
          {features.map((f) => (
            <FeatureCard key={f.index} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

// -- Domains ---------------------------------------------------------------

function DomainsSection() {
  const rows = [
    {
      title: "Cloud Concepts",
      pct: "24%",
      body:
        "AWS Cloud value proposition, cloud economics, design principles, migration strategies. The conceptual foundation everything else builds on.",
    },
    {
      title: "Security & Compliance",
      pct: "30%",
      body:
        "Shared Responsibility Model, IAM, security services, compliance frameworks, encryption. The largest domain on the exam — and where most candidates lose points.",
    },
    {
      title: "Cloud Technology & Services",
      pct: "34%",
      body:
        "EC2, S3, RDS, Lambda, VPC, CloudFront, deployment methods. The big surface area domain — knowing which service fits which use case.",
    },
    {
      title: "Billing, Pricing & Support",
      pct: "12%",
      body:
        "AWS pricing models, billing tools, support plans, Cost Explorer, Trusted Advisor. Small domain, easy wins if you know it cold.",
    },
  ];
  return (
    <section
      id="domains"
      className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="max-w-[760px]">
        <SectionEyebrow>[ Full Coverage ]</SectionEyebrow>
        <h2
          className="mt-3 font-extrabold text-[var(--text)]"
          style={{
            fontSize: "clamp(28px, 4.2vw, 44px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          All four CLF-C02 domains. Officially weighted.
        </h2>
        <p className="mt-5 text-[17px] leading-[1.65] text-[var(--text-2)]">
          Every question is mapped to the official AWS Cloud Practitioner exam
          guide and weighted to match the real exam&apos;s domain distribution.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border-hi)] bg-[var(--bg-elev)]">
        <div
          aria-hidden="true"
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,212,255,0.7), transparent)",
          }}
        />
        <div
          aria-hidden="true"
          className="h-12 w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,212,255,0.12), transparent)",
          }}
        />
        <ul className="-mt-12 divide-y divide-[var(--border)]" role="list">
          {rows.map((r) => (
            <li
              key={r.title}
              className="flex flex-col gap-4 px-6 py-7 sm:flex-row sm:items-center sm:gap-10 sm:px-10 sm:py-8"
            >
              <div className="flex-1">
                <h3 className="text-[19px] font-bold text-[var(--text)]">
                  {r.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[var(--text-2)]">
                  {r.body}
                </p>
              </div>
              <div className="flex sm:flex-col sm:items-end">
                <span
                  className="font-mono font-bold text-[var(--cyan)]"
                  style={{ fontSize: 22, letterSpacing: "-0.02em" }}
                >
                  {r.pct}
                </span>
                <span
                  className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)] sm:ml-0 sm:mt-1"
                >
                  Of exam
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// -- Sample Question -------------------------------------------------------

function SampleQuestionSection() {
  type OptState = "neutral" | "wrong" | "correct";
  const options: Array<{ letter: string; text: string; state: OptState }> = [
    {
      letter: "A",
      text: "Maintaining the physical security of AWS data centres",
      state: "neutral",
    },
    {
      letter: "B",
      text: "Patching the hypervisor on EC2 host machines",
      state: "wrong",
    },
    {
      letter: "C",
      text: "Configuring IAM users, roles, and permissions in their AWS account",
      state: "correct",
    },
    {
      letter: "D",
      text: "Replacing failed hard drives in the underlying infrastructure",
      state: "neutral",
    },
  ];

  const styleFor = (s: OptState) => {
    if (s === "wrong") {
      return {
        border: "1px solid rgba(255,107,107,0.45)",
        background: "rgba(255,107,107,0.06)",
      };
    }
    if (s === "correct") {
      return {
        border: "1px solid rgba(0,255,149,0.45)",
        background: "rgba(0,255,149,0.06)",
      };
    }
    return {
      border: "1px solid var(--border-hi)",
      background: "var(--bg-elev)",
    };
  };
  const letterColor = (s: OptState) =>
    s === "wrong"
      ? "var(--red)"
      : s === "correct"
        ? "var(--green)"
        : "var(--text-3)";

  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <SectionEyebrow>[ Try It ]</SectionEyebrow>
          <h2
            className="mt-3 font-extrabold text-[var(--text)]"
            style={{
              fontSize: "clamp(26px, 3.4vw, 32px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            See a real CertForge question.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.65] text-[var(--text-2)]">
            This is a real CLF-C02 question pulled from the CertForge bank,
            complete with the kind of structured feedback you get after every
            wrong answer. No copy-paste explanations. No &ldquo;review the
            docs&rdquo; cop-out.
          </p>
          <p className="mt-6 inline-flex items-center rounded-md border border-[var(--border-hi)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-3)]">
            Domain: Security &amp; Compliance · Difficulty: Medium
          </p>
        </div>

        <div className="cf-terminal-shadow overflow-hidden rounded-2xl bg-[var(--bg-elev)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-3)]">
            <span>Question 14 / 65</span>
            <span className="flex items-center gap-2 text-[var(--cyan)]">
              <span
                aria-hidden="true"
                className="cf-pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)]"
              />
              Live preview
            </span>
          </div>
          <div className="space-y-5 px-6 py-7 sm:px-8">
            <p className="text-[17px] font-medium leading-[1.5] text-[var(--text)]">
              Which of the following is the customer&apos;s responsibility under
              the AWS Shared Responsibility Model?
            </p>
            <ul className="space-y-3" role="list">
              {options.map((opt) => (
                <li
                  key={opt.letter}
                  className="flex items-start gap-3 rounded-xl px-4 py-3"
                  style={styleFor(opt.state)}
                >
                  <span
                    className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-md font-mono text-[12px] font-bold"
                    style={{
                      color: letterColor(opt.state),
                      border: `1px solid ${letterColor(opt.state)}`,
                      background: "transparent",
                    }}
                  >
                    {opt.letter}
                  </span>
                  <span className="text-[14.5px] leading-[1.55] text-[var(--text-2)]">
                    {opt.text}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(0,212,255,0.05)",
                border: "1px solid rgba(0,212,255,0.35)",
              }}
            >
              <p className="text-[14.5px] leading-[1.65] text-[var(--text-2)]">
                <strong className="text-[var(--green)]">✓ Correct.</strong>{" "}
                Under the Shared Responsibility Model, AWS handles security{" "}
                <em>of</em> the cloud (hardware, hypervisor, physical security),
                while the customer handles security <em>in</em> the cloud — that
                includes IAM configuration, data encryption choices, and network
                controls.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cyan)]">
                {"// Concept flagged: Shared Responsibility Model · 3 follow-up questions queued"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -- Screenshots -----------------------------------------------------------

type ScreenKind = "home" | "question" | "weakness";

function PhoneFrame({
  kind,
  caption,
}: {
  kind: ScreenKind;
  caption: string;
}) {
  return (
    <figure className="flex flex-col items-center">
      <div
        className="relative"
        style={{
          width: "100%",
          maxWidth: 280,
          aspectRatio: "9 / 16",
          borderRadius: 32,
          border: "12px solid var(--border-hi)",
          background: "var(--bg-elev)",
          boxShadow:
            "0 30px 80px -20px rgba(0,0,0,0.7), 0 0 80px rgba(0,212,255,0.10)",
          overflow: "hidden",
        }}
      >
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 -translate-x-1/2 rounded-full"
          style={{
            width: 70,
            height: 18,
            background: "#000",
            border: "1px solid var(--border-hi)",
            zIndex: 2,
          }}
        />
        <div className="relative h-full w-full">
          {kind === "home" ? <ScreenHome /> : null}
          {kind === "question" ? <ScreenQuestion /> : null}
          {kind === "weakness" ? <ScreenWeakness /> : null}
        </div>
      </div>
      <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-3)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function ScreenHome() {
  return (
    <div
      className="flex h-full w-full flex-col gap-3 px-3.5 pt-7"
      style={{ background: "var(--bg)" }}
    >
      <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--text-3)]">
        <span>9:41</span>
        <span>● ● ●</span>
      </div>
      <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--text-3)]">
        {"// Readiness"}
      </div>
      <div className="flex items-end gap-2">
        <span
          className="font-mono font-bold text-[var(--cyan)]"
          style={{ fontSize: 36, lineHeight: 1, letterSpacing: "-0.04em" }}
        >
          78%
        </span>
        <span className="mb-1 rounded-full bg-[rgba(0,255,149,0.12)] px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.14em] text-[var(--green)]">
          Pass
        </span>
      </div>
      <div className="space-y-2">
        {[
          { l: "Cloud Concepts", p: 86 },
          { l: "Security", p: 71 },
          { l: "Tech & Services", p: 82 },
          { l: "Billing", p: 64 },
        ].map((d) => (
          <div key={d.l}>
            <div className="flex items-center justify-between font-mono text-[8px] text-[var(--text-2)]">
              <span>{d.l}</span>
              <span className="text-[var(--cyan)]">{d.p}%</span>
            </div>
            <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-[var(--surface-hi)]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${d.p}%`,
                  background:
                    "linear-gradient(90deg, var(--cyan), rgba(0,212,255,0.5))",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2">
        <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--text-3)]">
          Streak · 12 days
        </p>
        <p className="mt-0.5 text-[9.5px] font-semibold text-[var(--text)]">
          Continue → IAM Roles
        </p>
      </div>
    </div>
  );
}

function ScreenQuestion() {
  const opts: Array<{
    letter: string;
    text: string;
    state: "neutral" | "correct";
  }> = [
    { letter: "A", text: "Physical data centre security", state: "neutral" },
    { letter: "B", text: "Hypervisor patching", state: "neutral" },
    { letter: "C", text: "IAM users & permissions", state: "correct" },
    { letter: "D", text: "Failed-drive replacement", state: "neutral" },
  ];
  return (
    <div
      className="flex h-full w-full flex-col gap-2.5 px-3.5 pt-7"
      style={{ background: "var(--bg)" }}
    >
      <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--text-3)]">
        <span>Q 14 / 65</span>
        <span className="text-[var(--cyan)]">● Live</span>
      </div>
      <p className="text-[10px] font-semibold leading-[1.3] text-[var(--text)]">
        Which is the customer&apos;s responsibility under the AWS Shared
        Responsibility Model?
      </p>
      <ul className="space-y-1.5">
        {opts.map((o) => {
          const correct = o.state === "correct";
          return (
            <li
              key={o.letter}
              className="flex items-center gap-1.5 rounded-md px-2 py-1.5"
              style={{
                border: correct
                  ? "1px solid rgba(0,255,149,0.5)"
                  : "1px solid var(--border-hi)",
                background: correct
                  ? "rgba(0,255,149,0.08)"
                  : "var(--bg-elev)",
              }}
            >
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded font-mono text-[7px] font-bold"
                style={{
                  color: correct ? "var(--green)" : "var(--text-3)",
                  border: `1px solid ${correct ? "var(--green)" : "var(--text-3)"}`,
                }}
              >
                {o.letter}
              </span>
              <span className="text-[8.5px] text-[var(--text-2)]">
                {o.text}
              </span>
            </li>
          );
        })}
      </ul>
      <div
        className="mt-auto rounded-md px-2 py-1.5"
        style={{
          border: "1px solid rgba(0,212,255,0.35)",
          background: "rgba(0,212,255,0.05)",
        }}
      >
        <p className="font-mono text-[7.5px] uppercase tracking-[0.14em] text-[var(--green)]">
          ✓ Correct
        </p>
        <p className="mt-0.5 text-[8px] leading-[1.4] text-[var(--text-2)]">
          You handle security <em>in</em> the cloud — IAM, encryption, network.
        </p>
      </div>
    </div>
  );
}

function ScreenWeakness() {
  const rows: Array<{
    label: string;
    pct: number;
    tone: "red" | "amber" | "green";
  }> = [
    { label: "IAM Policies", pct: 42, tone: "red" },
    { label: "S3 Storage Classes", pct: 58, tone: "red" },
    { label: "Pricing Models", pct: 67, tone: "amber" },
    { label: "VPC Routing", pct: 74, tone: "amber" },
    { label: "Shared Responsibility", pct: 88, tone: "green" },
    { label: "Cloud Economics", pct: 91, tone: "green" },
  ];
  const tones: Record<typeof rows[number]["tone"], string> = {
    red: "var(--red)",
    amber: "var(--amber)",
    green: "var(--green)",
  };
  return (
    <div
      className="flex h-full w-full flex-col gap-2 px-3.5 pt-7"
      style={{ background: "var(--bg)" }}
    >
      <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--text-3)]">
        <span>Weakness map</span>
        <span>6 concepts</span>
      </div>
      <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--text-3)]">
        {"// Drill these next"}
      </p>
      <ul className="space-y-1.5">
        {rows.map((r) => (
          <li
            key={r.label}
            className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1.5"
          >
            <div className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{
                  background: tones[r.tone],
                  boxShadow: `0 0 6px ${tones[r.tone]}`,
                }}
              />
              <span className="text-[9px] text-[var(--text-2)]">{r.label}</span>
            </div>
            <span
              className="font-mono text-[8.5px]"
              style={{ color: tones[r.tone] }}
            >
              {r.pct}%
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto rounded-md border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.06)] px-2 py-1.5">
        <p className="font-mono text-[7.5px] uppercase tracking-[0.14em] text-[var(--cyan)]">
          Drill IAM policies
        </p>
        <p className="mt-0.5 text-[8px] text-[var(--text-2)]">
          12 targeted questions queued
        </p>
      </div>
    </div>
  );
}

function ScreenshotsSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
      {/* TODO: Replace SVG mockups with real app screenshots once available.
          Recommended: 3 PNG files at 1080×1920, placed in public/screens/ */}
      <div className="max-w-[760px]">
        <SectionEyebrow>[ Inside the App ]</SectionEyebrow>
        <h2
          className="mt-3 font-extrabold text-[var(--text)]"
          style={{
            fontSize: "clamp(28px, 4.2vw, 44px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          Built for one-handed studying. Designed to be used daily.
        </h2>
        <p className="mt-5 text-[17px] leading-[1.65] text-[var(--text-2)]">
          Dark mode, smooth animations, and a UI that gets out of your way.
          Here&apos;s what 30 minutes inside CertForge actually looks like.
        </p>
      </div>

      <div className="mt-14 grid items-start justify-items-center gap-10 sm:grid-cols-3 sm:gap-6">
        <PhoneFrame kind="home" caption="// HOME · READINESS DASHBOARD" />
        <PhoneFrame
          kind="question"
          caption="// QUESTION · INSTANT FEEDBACK"
        />
        <PhoneFrame
          kind="weakness"
          caption="// WEAKNESS · CONCEPT-LEVEL DRILL-DOWN"
        />
      </div>
    </section>
  );
}

// -- Pricing ---------------------------------------------------------------

function PricingCard({
  name,
  price,
  tag,
  active,
  inactive = [],
  cta,
  featured = false,
}: {
  name: string;
  price: string;
  tag: string;
  active: React.ReactNode[];
  inactive?: string[];
  cta: { label: string; subtext?: string; primary?: boolean };
  featured?: boolean;
}) {
  return (
    <article
      className="relative flex h-full flex-col rounded-2xl border p-7 sm:p-8"
      style={
        featured
          ? {
              borderColor: "rgba(0,212,255,0.45)",
              background:
                "linear-gradient(180deg, rgba(0,212,255,0.06), rgba(0,212,255,0.015))",
              boxShadow:
                "0 0 0 1px rgba(0,212,255,0.2), 0 0 60px -10px rgba(0,212,255,0.25)",
            }
          : {
              borderColor: "var(--border-hi)",
              background: "var(--surface)",
            }
      }
    >
      {featured ? (
        <span className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-[var(--cyan)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#001520]">
          Best value
        </span>
      ) : null}

      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--text-3)]">
        {name}
      </p>
      <p
        className="mt-3 font-mono font-bold text-[var(--text)]"
        style={{ fontSize: 36, letterSpacing: "-0.025em", lineHeight: 1 }}
      >
        {price}
      </p>
      <p className="mt-2 text-[14px] text-[var(--text-2)]">{tag}</p>

      <ul className="mt-7 flex-1 space-y-3 text-[14.5px] leading-[1.55] text-[var(--text-2)]">
        {active.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full text-[var(--cyan)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7.5L5.5 10.5L11.5 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>{item}</span>
          </li>
        ))}
        {inactive.map((item, i) => (
          <li
            key={`x-${i}`}
            className="flex gap-3 text-[var(--text-muted)]"
          >
            <span aria-hidden="true" className="mt-1 inline-block w-4 flex-none font-mono">
              –
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${cta.label}${cta.subtext ? " — " + cta.subtext : ""}`}
        className={
          (cta.primary ? "cf-btn-primary" : "cf-btn-secondary") +
          " mt-8 inline-flex flex-col items-center justify-center rounded-xl px-5 py-3 text-[14px] font-semibold"
        }
      >
        <span className="block leading-tight">{cta.label}</span>
        {cta.subtext ? (
          <span
            className="mt-0.5 block font-mono text-[11px] font-normal opacity-70"
            style={{ letterSpacing: "0.02em" }}
          >
            {cta.subtext}
          </span>
        ) : null}
      </a>
    </article>
  );
}

function PricingSection() {
  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <SectionEyebrow>[ Pricing ]</SectionEyebrow>
        <h2
          className="mt-3 font-extrabold text-[var(--text)]"
          style={{
            fontSize: "clamp(28px, 4.2vw, 44px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          Honest pricing. No subscription trap.
        </h2>
        <p className="mx-auto mt-5 max-w-[600px] text-[17px] leading-[1.65] text-[var(--text-2)]">
          Most candidates pass the exam within 2–4 weeks. The lifetime tier is{" "}
          {fmtPrice(PRICING.LIFETIME_PRICE)} — pays for itself the moment you
          pass, then stays useful for every AWS cert that comes next.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <PricingCard
          name="Free"
          price="$0 forever"
          tag="Drill daily. Claim more every day."
          active={[
            `${PRICING.FREE_QUESTIONS_INITIAL} starter practice questions`,
            `+${PRICING.FREE_QUESTIONS_DAILY} fresh questions every day (1 daily claim)`,
            "All 4 domains accessible",
            "XP & streak system",
            "Basic progress tracking",
          ]}
          inactive={[
            "Full 800+ question bank",
            "Timed exam simulator",
            "Live readiness score",
            "Concept-level analytics",
          ]}
          cta={{ label: "Install Free" }}
        />
        <PricingCard
          name="Lifetime"
          price={`${fmtPrice(PRICING.LIFETIME_PRICE)} once`}
          tag="Pays for itself the moment you pass."
          featured
          active={[
            "Everything in Free, plus:",
            "Full 800+ question bank",
            "Timed exam simulator (65q · 90min)",
            "Live readiness score & predictions",
            "3-step wrong-answer feedback",
            "Concept-level weakness analytics",
            "Lifetime updates as CLF-C02 evolves",
            "Useful for future AWS certs too",
          ]}
          cta={{
            label: "Get the App",
            subtext: "→ Choose Lifetime in-app",
            primary: true,
          }}
        />
        <PricingCard
          name="Monthly"
          price={`${fmtPrice(PRICING.MONTHLY_PRICE)} /mo`}
          tag="Most people pass in 2–4 weeks. Subscribe just for that window."
          active={[
            "Everything in Lifetime",
            "Cancel anytime",
            "Ideal for a single cert-prep sprint",
          ]}
          cta={{ label: "Get the App", subtext: "→ Choose Monthly in-app" }}
        />
      </div>

      <p className="mt-10 text-center font-mono text-[12px] text-[var(--text-3)]">
        {"// All plans accessed through the same Android app. Choose your tier in-app after install."}
      </p>
    </section>
  );
}

// -- Testimonials ----------------------------------------------------------

function Testimonials() {
  const items = [
    {
      quote:
        "The readiness score is the part that hooked me. I had no idea I was actually below 60% on Billing until the app told me. Re-took the exam simulator twice, passed CLF-C02 the next week.",
      name: "M.K.",
      role: "Cloud Engineer",
      initials: "MK",
    },
    {
      quote:
        "Most AWS apps just dump 500 questions at you. CertForge tells you why you got it wrong and immediately gives you 3 more on the same concept. That feedback loop is the whole game.",
      name: "A.S.",
      role: "IT Support → DevOps transition",
      initials: "AS",
    },
    {
      quote:
        "Studied for 3 weeks at 30 min/day on the bus. Walked in, passed with 842/1000. The exam simulator pacing felt identical to the real thing.",
      name: "R.P.",
      role: "Junior SysAdmin",
      initials: "RP",
    },
  ];
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
      <div className="max-w-[760px]">
        <SectionEyebrow>[ Early Testers ]</SectionEyebrow>
        <h2
          className="mt-3 font-extrabold text-[var(--text)]"
          style={{
            fontSize: "clamp(28px, 4.2vw, 44px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          Built with help from real test-takers.
        </h2>
        <p className="mt-5 text-[17px] leading-[1.65] text-[var(--text-2)]">
          Quotes from CertForge&apos;s closed testing cohort. Names anonymised
          pending Play Store launch.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <figure
            key={t.name}
            className="flex h-full flex-col rounded-2xl border border-[var(--border-hi)] bg-[var(--surface)] p-7"
          >
            <div
              aria-label="5 out of 5 stars"
              className="text-[var(--amber)]"
              style={{ letterSpacing: 2 }}
            >
              ★★★★★
            </div>
            <blockquote className="mt-4 flex-1 text-[15px] leading-[1.65] text-[var(--text-2)]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <hr className="my-5 border-[var(--border)]" />
            <figcaption className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full font-mono text-[12px] font-bold text-[#001520]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--cyan) 0%, #0066aa 100%)",
                }}
              >
                {t.initials}
              </span>
              <div className="text-[13.5px]">
                <p className="font-semibold text-[var(--text)]">{t.name}</p>
                <p className="text-[var(--text-3)]">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
        {"// Closed Testing cohort, anonymised"}
      </p>
    </section>
  );
}

// -- FAQ -------------------------------------------------------------------

function FaqSection() {
  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[820px] text-center">
        <SectionEyebrow>[ FAQ ]</SectionEyebrow>
        <h2
          className="mt-3 font-extrabold text-[var(--text)]"
          style={{
            fontSize: "clamp(28px, 4.2vw, 44px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          Questions you&apos;d probably ask anyway.
        </h2>
      </div>
      <div className="mt-12">
        <Faq items={faqEntries} />
      </div>
    </section>
  );
}

// -- Final CTA -------------------------------------------------------------

function FinalCta() {
  return (
    <section
      id="cta"
      className="mx-auto w-full max-w-[1200px] px-6 pb-20 lg:px-10 lg:pb-28"
    >
      <div
        className="cf-dot-grid relative overflow-hidden rounded-[24px] border border-[var(--border-hi)] px-6 py-16 text-center sm:px-12 sm:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,212,255,0.08), transparent 55%), linear-gradient(180deg, var(--bg-elev), var(--bg))",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-20 h-60"
          style={{
            background:
              "radial-gradient(50% 100% at 50% 0%, rgba(0,212,255,0.35), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[720px]">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--cyan)]">
            [ Get the App ]
          </p>
          <h2
            className="mt-3 font-extrabold text-[var(--text)]"
            style={{
              fontSize: "clamp(30px, 4.6vw, 46px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
            }}
          >
            Stop reading. Start drilling.
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[17px] leading-[1.6] text-[var(--text-2)]">
            CertForge is free to install on Android. Drill{" "}
            {PRICING.FREE_QUESTIONS_INITIAL} starter questions plus{" "}
            {PRICING.FREE_QUESTIONS_DAILY} fresh ones every day, see your
            readiness score, and unlock the full bank for{" "}
            {fmtPrice(PRICING.LIFETIME_PRICE)} lifetime (or{" "}
            {fmtPrice(PRICING.MONTHLY_PRICE)}/mo) — all inside the app.
          </p>
          <div className="mt-8 flex justify-center">
            <PlayStoreButton variant="primary" size="large" />
          </div>
          <p className="mt-5 font-mono text-[12px] text-[var(--text-3)]">
            Free to install · {PRICING.FREE_QUESTIONS_INITIAL} Qs +{" "}
            {PRICING.FREE_QUESTIONS_DAILY} daily free ·{" "}
            {fmtPrice(PRICING.LIFETIME_PRICE)} unlocks everything
          </p>

          {!IS_PUBLICLY_LIVE ? (
            <div
              id="waitlist"
              className="mx-auto mt-14 max-w-[480px] rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.015)] px-6 py-7"
            >
              <div
                aria-hidden="true"
                className="flex items-center gap-3 text-[var(--text-muted)]"
              >
                <span className="h-px flex-1 bg-[var(--border)]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  Or
                </span>
                <span className="h-px flex-1 bg-[var(--border)]" />
              </div>
              <p className="mt-4 text-[13.5px] leading-[1.6] text-[var(--text-2)]">
                Not on Play Store in your country yet? Drop your email and
                we&apos;ll send the install link the moment it lands.
              </p>
              <div className="mt-4 [&_form]:gap-2 [&_input]:py-2.5 [&_input]:text-[14px] [&_button]:px-4 [&_button]:py-2.5 [&_button]:text-[13px]">
                <WaitlistForm />
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {"// We'll email you once. That's it."}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

// -- Nav -------------------------------------------------------------------

function Nav() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-[16px]"
      style={{
        background: "rgba(10, 10, 13, 0.7)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-3.5 lg:px-10"
      >
        <Link href="/" className="inline-flex items-center" aria-label="CertForge home">
          <Logo />
        </Link>
        <div className="flex items-center gap-2 sm:gap-7">
          <ul className="hidden items-center gap-7 text-[14px] text-[var(--text-2)] md:flex" role="list">
            <li>
              <a href="#features" className="hover:text-[var(--text)]">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-[var(--text)]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[var(--text)]">
                FAQ
              </a>
            </li>
          </ul>
          <PlayStoreButton variant="badge" />
        </div>
      </nav>
    </header>
  );
}

// -- Footer ----------------------------------------------------------------

function Footer() {
  const colHead =
    "font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-3)]";
  return (
    <footer className="mt-12 border-t border-[var(--border)] bg-[var(--bg-elev)]">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-[280px] text-[14px] leading-[1.6] text-[var(--text-2)]">
              Adaptive AWS exam prep. Built by Optivio Media.
            </p>
          </div>
          <div>
            <p className={colHead}>Product</p>
            <ul className="mt-4 space-y-3 text-[14px] text-[var(--text-2)]" role="list">
              <li>
                <a href="#features" className="hover:text-[var(--text)]">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[var(--text)]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[var(--text)]">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text)]"
                >
                  Download on Google Play
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={colHead}>Resources</p>
            <ul className="mt-4 space-y-3 text-[14px] text-[var(--text-2)]" role="list">
              <li>
                <a
                  href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text)]"
                >
                  AWS CLF-C02 Exam Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--text)]">
                  Free Study Plan
                </a>
              </li>
              <li>
                <a href="#domains" className="hover:text-[var(--text)]">
                  Domain Breakdown
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={colHead}>Legal &amp; Company</p>
            <ul className="mt-4 space-y-3 text-[14px] text-[var(--text-2)]" role="list">
              <li>
                <Link href="/privacy" className="hover:text-[var(--text)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--text)]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href={ACCOUNT_DELETION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text)]"
                >
                  Account Deletion
                </a>
              </li>
              <li>
                <a
                  href="https://optiviomedia.online"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text)]"
                >
                  Optivio Media
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-[var(--text-3)]">
            © 2026 Optivio Media · All rights reserved.
          </p>
          <ul className="flex items-center gap-3" role="list">
            <li>
              <a
                aria-label="Taha Ilyas on LinkedIn"
                href="https://linkedin.com/in/tahailyas"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-hi)] text-[var(--text-2)] hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.02h4.55V24H.22V8.02zM8.34 8.02h4.36v2.18h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v9.16h-4.55v-8.12c0-1.94-.03-4.44-2.7-4.44-2.71 0-3.12 2.12-3.12 4.31V24H8.34V8.02z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label="Optivio Media website"
                href="https://optiviomedia.online"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-hi)] text-[var(--text-2)] hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// -- Page ------------------------------------------------------------------

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatsBand />
        <ProblemSection />
        <FeaturesSection />
        <DomainsSection />
        <SampleQuestionSection />
        <ScreenshotsSection />
        <PricingSection />
        <Testimonials />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
