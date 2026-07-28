import Link from "next/link";
import BlogCta from "../_components/BlogCta";

export default function Content() {
  return (
    <>
      <p>
        The AWS Certified Cloud Practitioner (CLF-C02) is the widest-reaching
        AWS certification and, for most people, the first one they attempt.
        It doesn&apos;t require you to write a single line of code, but it
        does require you to know AWS the way a well-informed generalist
        would: what the cloud is good for, which services solve which
        problems, how security is shared between AWS and you, and how
        billing actually works. This guide is the study plan we&apos;d give a
        friend — what to learn, in what order, and how to tell you&apos;re
        actually ready to book the exam instead of guessing.
      </p>

      <h2>What CLF-C02 actually tests</h2>
      <p>
        The exam has 65 questions, a 90-minute timer, and a passing score of
        700 out of 1000. Every question maps to one of four official domains,
        and AWS weights them unevenly — which matters a lot for how you
        should spend your study time:
      </p>
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Weight</th>
            <th>What it covers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cloud Concepts</td>
            <td>24%</td>
            <td>Value proposition, economics, design principles, migration</td>
          </tr>
          <tr>
            <td>Security &amp; Compliance</td>
            <td>30%</td>
            <td>Shared Responsibility Model, IAM, encryption, compliance</td>
          </tr>
          <tr>
            <td>Cloud Technology &amp; Services</td>
            <td>34%</td>
            <td>EC2, S3, RDS, Lambda, VPC, CloudFront, deployment</td>
          </tr>
          <tr>
            <td>Billing, Pricing &amp; Support</td>
            <td>12%</td>
            <td>Pricing models, Cost Explorer, Trusted Advisor, support plans</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice that Security &amp; Compliance and Cloud Technology &amp;
        Services together make up 64% of the exam. If you&apos;re short on
        time, that&apos;s where the marginal hour of studying pays off most —
        Billing is the smallest domain and also the fastest to master, so
        it&apos;s a good place to pick up easy, cheap points once the big two
        are solid.
      </p>

      <h2>How long you actually need</h2>
      <p>
        If you have zero cloud background, budget 4 to 6 weeks of studying
        for 30 to 45 minutes a day. If you&apos;ve touched AWS before —
        deployed something on EC2, poked around S3, read a billing
        dashboard — 2 to 3 weeks is realistic. Cramming CLF-C02 into a
        weekend is possible but risky: the exam leans on recognizing service
        names and matching them to scenarios, and that kind of pattern
        recognition needs repetition spread across days, not one long
        session.
      </p>

      <h2>A week-by-week plan</h2>
      <ol>
        <li>
          <strong>Week 1 — Concepts and the Shared Responsibility Model.</strong>{" "}
          Learn what makes cloud computing different from on-prem, the six
          advantages of cloud computing AWS talks about, and exactly what AWS
          secures versus what you secure. This model shows up constantly,
          both directly and disguised inside scenario questions.
        </li>
        <li>
          <strong>Week 2 — Core services.</strong> EC2 (instance types,
          pricing models — On-Demand, Reserved, Spot, Savings Plans), S3
          (storage classes and when to use each), VPC basics, and RDS versus
          DynamoDB. You don&apos;t need to configure any of this — you need
          to recognize which service fits which use case in a one-paragraph
          scenario.
        </li>
        <li>
          <strong>Week 3 — Security services and IAM.</strong> IAM users,
          groups, roles, and policies; MFA; AWS Organizations; Key Management
          Service; GuardDuty, Inspector, and Macie at a surface level. You
          need to know what each service does, not how to configure it.
        </li>
        <li>
          <strong>Week 4 — Billing, support, and the Well-Architected
          Framework.</strong> Cost Explorer, AWS Budgets, Trusted Advisor,
          the four support plan tiers, and the six pillars of the
          Well-Architected Framework. This is the smallest domain and the
          fastest to lock in.
        </li>
        <li>
          <strong>Final week — timed practice, daily.</strong> Stop reading
          and start answering questions under a 90-minute clock. This is the
          single highest-leverage thing you can do in the last week, because
          it surfaces exactly which concepts you thought you knew but
          didn&apos;t.
        </li>
      </ol>

      <BlogCta heading="Skip the flashcards — practice like it's exam day" />

      <h2>What to actually memorize</h2>
      <p>
        A short list of facts comes up disproportionately often. If nothing
        else, know these cold before exam day:
      </p>
      <ul>
        <li>
          The Shared Responsibility Model split — security{" "}
          <strong>of</strong> the cloud (AWS) versus security{" "}
          <strong>in</strong> the cloud (you).
        </li>
        <li>
          S3 storage classes in order of cost and retrieval speed: Standard,
          Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant
          Retrieval, Glacier Flexible Retrieval, Glacier Deep Archive.
        </li>
        <li>
          EC2 pricing models: On-Demand (flexible, most expensive), Reserved
          (commitment, cheaper), Spot (cheapest, interruptible), Savings
          Plans (commitment-based discount without a specific instance type).
        </li>
        <li>
          The four AWS Support plan tiers — Basic, Developer, Business,
          Enterprise — and what each unlocks (mainly response time and
          access to a Technical Account Manager on Enterprise).
        </li>
        <li>
          Which pillar of the Well-Architected Framework a scenario is
          describing: Operational Excellence, Security, Reliability,
          Performance Efficiency, Cost Optimization, Sustainability.
        </li>
      </ul>

      <h2>Common mistakes that fail people</h2>
      <ul>
        <li>
          <strong>Studying services instead of scenarios.</strong> CLF-C02
          rarely asks &ldquo;what is Lambda&rdquo; — it asks &ldquo;a company
          needs X, which service fits?&rdquo; Practice questions train
          scenario recognition; a service glossary doesn&apos;t.
        </li>
        <li>
          <strong>Ignoring the smallest domain.</strong> Billing is only 12%
          of the exam, but it&apos;s also the domain most candidates skip
          entirely — and skipping an easy 12% is how a 705 becomes a 690.
        </li>
        <li>
          <strong>Never studying under time pressure.</strong> 90 minutes for
          65 questions is roughly 83 seconds a question. If your first timed
          run is the real exam, pacing anxiety alone can cost you points you
          actually knew.
        </li>
        <li>
          <strong>Passive review with no error feedback.</strong> Reading a
          study guide feels productive but doesn&apos;t reveal your actual
          weak spots. Answering questions and reviewing{" "}
          <em>why</em> a wrong choice is wrong does.
        </li>
      </ul>

      <h2>How to know you&apos;re actually ready</h2>
      <p>
        Don&apos;t rely on a gut feeling. A reliable readiness signal is
        scoring 80%+ consistently on full, timed 65-question mock exams
        across at least two attempts on different question sets — not the
        same quiz retaken until you memorize the answers. If you&apos;re
        also seeing your weakest domain climb toward that same 80% line, book
        the exam. If Security &amp; Compliance or Cloud Technology &amp;
        Services is still lagging under 70%, give it another week — those
        two domains carry 64% of your score.
      </p>
      <p>
        For the logistics of booking — cost, retake policy, and what to
        bring on exam day — see our{" "}
        <Link href="/blog/aws-cloud-practitioner-exam-cost-format-requirements">
          exam cost and format guide
        </Link>
        . And once you&apos;re in the practice phase, work through our{" "}
        <Link href="/blog/aws-cloud-practitioner-practice-questions">
          20 explained practice questions
        </Link>{" "}
        to see exactly how CLF-C02 phrases its scenarios.
      </p>
    </>
  );
}
