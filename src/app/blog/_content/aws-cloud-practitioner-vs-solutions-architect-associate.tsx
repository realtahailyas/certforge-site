import Link from "next/link";
import BlogCta from "../_components/BlogCta";

export default function Content() {
  return (
    <>
      <p>
        This question comes up constantly: if the goal is Solutions
        Architect Associate (SAA-C03) eventually, is Cloud Practitioner
        (CLF-C02) worth doing first, or is it a detour? The honest answer is
        &ldquo;it depends on your background&rdquo; — here&apos;s how to
        actually decide instead of guessing.
      </p>

      <h2>What each certification actually is</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Cloud Practitioner (CLF-C02)</th>
            <th>Solutions Architect Associate (SAA-C03)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Level</td>
            <td>Foundational</td>
            <td>Associate</td>
          </tr>
          <tr>
            <td>Questions / time</td>
            <td>65 questions / 90 minutes</td>
            <td>65 questions / 130 minutes</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>$100</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>Depth</td>
            <td>Recognize services and concepts</td>
            <td>Design and choose between architectures</td>
          </tr>
          <tr>
            <td>Hands-on AWS console work required</td>
            <td>Minimal</td>
            <td>Substantial</td>
          </tr>
          <tr>
            <td>Typical prep time (no background)</td>
            <td>2–6 weeks</td>
            <td>6–12 weeks</td>
          </tr>
        </tbody>
      </table>

      <h2>The case for starting with Cloud Practitioner</h2>
      <ul>
        <li>
          <strong>You have no cloud background at all.</strong> SAA-C03
          assumes you already understand cloud fundamentals — the Shared
          Responsibility Model, basic networking, storage classes — and
          builds design questions on top of that foundation. Without it,
          you&apos;re learning two things at once: the fundamentals and how
          to architect with them.
        </li>
        <li>
          <strong>You want a fast, motivating first win.</strong> CLF-C02 can
          realistically be passed in 2–4 weeks of part-time study. That
          momentum — and the confidence of one AWS cert already earned —
          makes the much longer SAA-C03 grind easier to start.
        </li>
        <li>
          <strong>Your job isn&apos;t engineering.</strong> If you&apos;re in
          sales, product, project management, or finance and just need
          AWS literacy for your role, CLF-C02 is the appropriate ceiling —
          SAA-C03&apos;s architecture depth won&apos;t be used day to day.
        </li>
      </ul>

      <h2>The case for skipping straight to Solutions Architect Associate</h2>
      <ul>
        <li>
          <strong>You already have hands-on AWS or general cloud
          experience.</strong> If you&apos;ve deployed applications, worked
          with VPCs, or administered infrastructure on any cloud provider,
          much of CLF-C02&apos;s content will already be familiar, and
          it risks becoming a paid formality.
        </li>
        <li>
          <strong>You&apos;re short on time and budget for exam fees.</strong>{" "}
          Two exams means $250 total and two separate study cycles.
          Going straight for SAA-C03 saves both, if you&apos;re confident in
          the fundamentals already.
        </li>
        <li>
          <strong>Your target role explicitly asks for SAA-C03.</strong> Most
          job postings for cloud/DevOps engineering roles list SAA-C03 (or
          higher) specifically — CLF-C02 rarely appears as a listed
          requirement on its own.
        </li>
      </ul>

      <BlogCta heading="Building your CLF-C02 foundation first? Practice it properly" />

      <h2>What actually carries over</h2>
      <p>
        The overlap is real but partial. Concepts like the Shared
        Responsibility Model, the six advantages of cloud computing, EC2
        pricing models, and S3 storage classes appear on both exams — CLF-C02
        tests whether you can recognize them, SAA-C03 tests whether you can
        design with them under constraints (cost, performance, availability,
        security trade-offs). Studying for CLF-C02 first genuinely reduces
        SAA-C03 prep time; it isn&apos;t wasted repetition, it&apos;s the
        first layer of a taller building.
      </p>

      <h2>Our recommendation</h2>
      <p>
        If you&apos;re not already working hands-on with AWS, do CLF-C02
        first. The time cost is small (2–4 weeks), the momentum is real, and
        the foundational knowledge directly reduces how long SAA-C03 takes
        afterward. If you&apos;re already comfortable navigating the AWS
        console and have deployed real workloads, it&apos;s reasonable to
        skip straight to SAA-C03 — just expect a noticeably steeper first few
        weeks of studying as you backfill the fundamentals CLF-C02 would
        have covered.
      </p>
      <p>
        Either way, start with our{" "}
        <Link href="/blog/aws-cloud-practitioner-clf-c02-study-guide-2026">
          CLF-C02 study guide
        </Link>{" "}
        to see exactly what the foundational layer looks like, or jump into{" "}
        <Link href="/blog/aws-cloud-practitioner-practice-questions">
          20 practice questions
        </Link>{" "}
        to gauge how much you already know.
      </p>
    </>
  );
}
