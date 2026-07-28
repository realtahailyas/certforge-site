export type BlogPostMeta = {
  slug: string;
  /** <title> tag + OG/Twitter title — can run longer than the on-page H1. */
  title: string;
  /** On-page H1 — slightly shorter/punchier than the SEO title. */
  h1: string;
  /** Meta description, ~150-160 chars. */
  description: string;
  /** Short excerpt shown on blog index cards. */
  excerpt: string;
  keywords: string[];
  /** ISO date (YYYY-MM-DD) — used for display and sitemap lastModified. */
  date: string;
  readMinutes: number;
  category: string;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "aws-cloud-practitioner-clf-c02-study-guide-2026",
    title:
      "AWS Cloud Practitioner (CLF-C02) Study Guide 2026: How to Pass on Your First Try",
    h1: "The AWS Cloud Practitioner (CLF-C02) Study Guide for 2026",
    description:
      "A complete CLF-C02 study plan for 2026 — exam domains, weekly schedule, what to memorize, and how to know when you're actually ready to sit the exam.",
    excerpt:
      "A complete, no-fluff study plan for CLF-C02 — what to learn, in what order, and how to know when you're ready to book the exam.",
    keywords: [
      "AWS Cloud Practitioner study guide",
      "CLF-C02 study guide 2026",
      "how to pass AWS Cloud Practitioner",
      "AWS Cloud Practitioner exam prep",
    ],
    date: "2026-06-10",
    readMinutes: 11,
    category: "Study Guide",
  },
  {
    slug: "aws-cloud-practitioner-exam-cost-format-requirements",
    title: "AWS Cloud Practitioner Exam Cost, Format & Requirements (CLF-C02)",
    h1: "AWS Cloud Practitioner Exam Cost, Format & Requirements",
    description:
      "Everything about the CLF-C02 exam: the $100 fee, 65 questions in 90 minutes, passing score, eligibility, retake policy, and how to book your seat.",
    excerpt:
      "The $100 fee, 65 questions, 90-minute timer, passing score, retake rules, and every logistical detail before you book CLF-C02.",
    keywords: [
      "AWS Cloud Practitioner exam cost",
      "CLF-C02 exam format",
      "AWS Cloud Practitioner requirements",
      "how much is the AWS Cloud Practitioner exam",
    ],
    date: "2026-06-24",
    readMinutes: 8,
    category: "Exam Basics",
  },
  {
    slug: "aws-cloud-practitioner-practice-questions",
    title: "20 AWS Cloud Practitioner Practice Questions (With Full Explanations)",
    h1: "20 AWS Cloud Practitioner Practice Questions, Explained",
    description:
      "20 CLF-C02-style practice questions across all four exam domains, each with a full explanation of why the right answer is right — and the others aren't.",
    excerpt:
      "20 CLF-C02-style questions across all four domains, each with a full explanation — not just an answer key.",
    keywords: [
      "AWS Cloud Practitioner practice questions",
      "CLF-C02 practice test",
      "AWS Cloud Practitioner sample questions",
      "AWS Cloud Practitioner exam questions and answers",
    ],
    date: "2026-07-08",
    readMinutes: 14,
    category: "Practice Questions",
  },
  {
    slug: "aws-cloud-practitioner-vs-solutions-architect-associate",
    title:
      "AWS Cloud Practitioner vs Solutions Architect Associate: Which Should You Get First?",
    h1: "Cloud Practitioner vs Solutions Architect Associate: Which First?",
    description:
      "CLF-C02 or SAA-C03 first? A breakdown of difficulty, overlap, cost, and career value to help you pick the right starting certification.",
    excerpt:
      "CLF-C02 or SAA-C03 first? Here's how the difficulty, overlap, and career value actually compare.",
    keywords: [
      "AWS Cloud Practitioner vs Solutions Architect",
      "should I skip Cloud Practitioner",
      "AWS certification path 2026",
      "CLF-C02 vs SAA-C03",
    ],
    date: "2026-07-18",
    readMinutes: 9,
    category: "Certification Paths",
  },
  {
    slug: "aws-cloud-practitioner-exam-tips",
    title: "9 AWS Cloud Practitioner Exam Tips That Actually Move Your Score",
    h1: "9 AWS Cloud Practitioner Exam Tips That Actually Move Your Score",
    description:
      "Practical CLF-C02 exam tips beyond \"read the whitepapers\" — how to handle keyword traps, pace 65 questions in 90 minutes, and what to review the night before.",
    excerpt:
      "Practical tips beyond \"read the whitepapers\" — keyword traps, pacing, flagging strategy, and what to review the night before.",
    keywords: [
      "AWS Cloud Practitioner exam tips",
      "CLF-C02 tips",
      "how to pass CLF-C02",
      "AWS Cloud Practitioner exam day tips",
    ],
    date: "2026-07-27",
    readMinutes: 7,
    category: "Exam Tips",
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
