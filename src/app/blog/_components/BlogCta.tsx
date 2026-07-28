import PlayStoreButton from "../../_components/PlayStoreButton";
import { IS_PUBLICLY_LIVE, PRICING } from "../../_config/site";

export default function BlogCta({
  heading = "Study with adaptive practice questions, not static flashcards",
}: {
  heading?: string;
}) {
  return (
    <div
      className="not-prose my-10 rounded-2xl border border-[var(--border-hi)] px-6 py-8 sm:px-9 sm:py-9"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,212,255,0.07), var(--bg-elev))",
      }}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cyan)]">
        [ CertForge ]
      </p>
      <h3 className="mt-3 text-[21px] font-extrabold leading-tight text-[var(--text)] sm:text-[24px]">
        {heading}
      </h3>
      <p className="mt-3 max-w-[560px] text-[15px] leading-[1.65] text-[var(--text-2)]">
        {PRICING.FREE_QUESTIONS_INITIAL} starter questions free, plus{" "}
        {PRICING.FREE_QUESTIONS_DAILY} more every day you log in. Unlock the
        full 800+ question bank, timed exam simulator, and weakness detection
        for ${PRICING.MONTHLY_PRICE}/mo or ${PRICING.LIFETIME_PRICE} lifetime.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <PlayStoreButton />
        {!IS_PUBLICLY_LIVE ? (
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-3)]">
            Launching soon on Google Play
          </span>
        ) : null}
      </div>
    </div>
  );
}
