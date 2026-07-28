import Link from "next/link";
import BlogCta from "../_components/BlogCta";

export default function Content() {
  return (
    <>
      <p>
        Before you touch a single practice question, it helps to know
        exactly what you&apos;re booking: what it costs, how it&apos;s
        structured, what happens if you fail, and what to actually bring on
        the day. None of this is complicated, but AWS spreads it across
        several pages — here it is in one place.
      </p>

      <h2>Cost</h2>
      <p>
        The AWS Certified Cloud Practitioner (CLF-C02) exam costs{" "}
        <strong>$100 USD</strong>, paid when you schedule through your AWS
        Certification account. AWS occasionally issues 50%-off vouchers —
        typically to people who&apos;ve already passed another AWS exam, or
        who attended select AWS events (re:Invent, AWS Summits) — so it&apos;s
        worth checking your benefits page before paying full price.
      </p>

      <h2>Format</h2>
      <table>
        <thead>
          <tr>
            <th>Detail</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Question count</td>
            <td>65</td>
          </tr>
          <tr>
            <td>Time limit</td>
            <td>90 minutes</td>
          </tr>
          <tr>
            <td>Question types</td>
            <td>Multiple choice, multiple response</td>
          </tr>
          <tr>
            <td>Passing score</td>
            <td>700 out of 1000 (scaled)</td>
          </tr>
          <tr>
            <td>Unscored questions</td>
            <td>Up to 15, mixed in and not identified</td>
          </tr>
          <tr>
            <td>Delivery</td>
            <td>Pearson VUE — testing center or online proctored</td>
          </tr>
        </tbody>
      </table>
      <p>
        The scaled score (100–1000) isn&apos;t a raw percentage — AWS applies
        a psychometric conversion, so &ldquo;700&rdquo; doesn&apos;t map
        cleanly to &ldquo;70% of questions right.&rdquo; Some of the 65
        questions are unscored items AWS is trialing for future versions of
        the exam; you won&apos;t know which ones, so treat every question as
        if it counts.
      </p>

      <h2>Eligibility and requirements</h2>
      <p>
        There are no formal prerequisites. AWS recommends at least six months
        of exposure to the AWS Cloud in any role — technical, managerial,
        sales, procurement, or finance — but this isn&apos;t enforced. You
        can sit CLF-C02 with zero prior AWS experience if you&apos;ve studied
        the material; plenty of candidates do exactly that.
      </p>

      <h2>Booking and what to bring</h2>
      <ul>
        <li>
          Schedule through your{" "}
          <a
            href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
            target="_blank"
            rel="noreferrer"
          >
            AWS Certification account
          </a>{" "}
          via Pearson VUE.
        </li>
        <li>
          One government-issued photo ID is required at check-in — name must
          match your registration exactly.
        </li>
        <li>
          For online proctored exams: a private room, a clear desk, a
          working webcam and microphone, and a system check completed before
          your slot.
        </li>
        <li>
          Arrive (or log in) at least 15 minutes early — late arrivals beyond
          the grace period can forfeit the exam fee.
        </li>
      </ul>

      <BlogCta heading="Know the format. Now train under it." />

      <h2>If you don&apos;t pass</h2>
      <p>
        You can retake CLF-C02 14 days after a failed attempt, with no cap on
        total retakes — you just pay the $100 fee again each time. AWS gives
        you a section-level score breakdown after a fail, showing which of
        the four domains you scored weakest on, which is the fastest way to
        target your next study block instead of re-reading everything.
      </p>

      <h2>Certification validity</h2>
      <p>
        Once passed, CLF-C02 is valid for <strong>3 years</strong>. Renewal
        means retaking the current version of the exam (or a higher-level
        AWS certification counts toward recertifying it) — there&apos;s no
        continuing-education credit system like some other vendors use.
      </p>

      <p>
        Once you&apos;ve got the logistics down, the real work is building
        recall under time pressure. Our{" "}
        <Link href="/blog/aws-cloud-practitioner-clf-c02-study-guide-2026">
          CLF-C02 study guide
        </Link>{" "}
        lays out a week-by-week plan, and our{" "}
        <Link href="/blog/aws-cloud-practitioner-exam-tips">
          exam-day tips
        </Link>{" "}
        cover pacing strategy for the 90-minute clock specifically.
      </p>
    </>
  );
}
