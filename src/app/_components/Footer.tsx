import Link from "next/link";
import Logo from "./Logo";
import { PLAY_STORE_URL } from "../_config/site";

const ACCOUNT_DELETION_URL =
  "https://optiviomedia.notion.site/CertForge-Account-Deletion"; // placeholder; Taha's published Notion page

export default function Footer() {
  const colHead =
    "font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-3)]";
  return (
    <footer className="mt-12 border-t border-[var(--border)] bg-[var(--bg-elev)]">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="CertForge home"
            >
              <Logo height={32} />
            </Link>
            <p className="mt-4 max-w-[280px] text-[14px] leading-[1.6] text-[var(--text-2)]">
              Adaptive AWS exam prep. Built by Optivio Media.
            </p>
          </div>
          <div>
            <p className={colHead}>Product</p>
            <ul className="mt-4 space-y-3 text-[14px] text-[var(--text-2)]" role="list">
              <li>
                <Link href="/#features" className="hover:text-[var(--text)]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[var(--text)]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[var(--text)]">
                  FAQ
                </Link>
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
                <Link href="/blog" className="hover:text-[var(--text)]">
                  Blog
                </Link>
              </li>
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
                <Link href="/#domains" className="hover:text-[var(--text)]">
                  Domain Breakdown
                </Link>
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
