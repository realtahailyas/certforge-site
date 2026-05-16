"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="mx-auto w-full max-w-[820px] space-y-3" role="list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--border-hi)]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-[16px] font-medium text-[var(--text)] sm:text-[17px]">
                {item.q}
              </span>
              <span
                className="cf-faq-icon flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-hi)] text-[var(--cyan)]"
                data-open={isOpen}
                aria-hidden="true"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1.5V10.5M1.5 6H10.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              className="cf-faq-body px-6"
              data-open={isOpen}
              role="region"
            >
              <p className="pb-5 text-[15px] leading-[1.65] text-[var(--text-2)]">
                {item.a}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
