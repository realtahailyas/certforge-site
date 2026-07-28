import Link from "next/link";
import Logo from "./Logo";
import PlayStoreButton from "./PlayStoreButton";

export default function Nav() {
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
              <Link href="/blog" className="hover:text-[var(--text)]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-[var(--text)]">
                FAQ
              </Link>
            </li>
          </ul>
          <PlayStoreButton variant="badge" />
        </div>
      </nav>
    </header>
  );
}
