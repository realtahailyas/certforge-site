import { PLAY_STORE_URL } from "../_config/site";

type Variant = "primary" | "badge";
type Size = "default" | "large";

type Props = {
  variant?: Variant;
  size?: Size;
  /** Optional override for the small top label (e.g. "GET IT ON"). */
  topLabel?: string;
  /** Optional override for the main label (default "Google Play"). */
  mainLabel?: string;
  /** Optional small subtext rendered as a tiny mono caption below the main label. */
  subtext?: string;
  className?: string;
  /** Hides the small "DOWNLOAD ON" line — used in tight nav slots. */
  compact?: boolean;
};

function PlayIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 27"
      width={size}
      height={(size * 27) / 24}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M.5.7l13.3 12.5L.5 25.7c-.3-.2-.5-.6-.5-1V1.7c0-.4.2-.8.5-1z"
        fill="#00D4FF"
      />
      <path
        d="M17.3 9.5L3.7 0 .9.4l13.3 12.5 3.1-3.4z"
        fill="#00FF95"
      />
      <path
        d="M17.3 17L14.2 13.7l-13.3 12.5 2.8.4L17.3 17z"
        fill="#FF6B6B"
      />
      <path
        d="M22.4 11.6L17.3 9.5l-3.1 3.7 3.1 3.3 5.1-2.1c1.2-.5 1.2-2.4 0-2.8z"
        fill="#FFB800"
      />
    </svg>
  );
}

export default function PlayStoreButton({
  variant = "primary",
  size = "default",
  topLabel = "DOWNLOAD ON",
  mainLabel = "Google Play",
  subtext,
  className = "",
  compact = false,
}: Props) {
  const isPrimary = variant === "primary";
  const isLarge = size === "large";

  const baseClasses =
    "group inline-flex items-center gap-3 rounded-[10px] font-semibold transition-[transform,box-shadow,background,filter,border-color] duration-200 will-change-transform";
  const sizeClasses = isLarge
    ? "px-6 py-3.5 text-[15px]"
    : "px-4 py-2.5 text-[13.5px]";

  const variantStyle: React.CSSProperties = isPrimary
    ? {
        background: "var(--cyan)",
        color: "var(--bg)",
        boxShadow:
          "0 4px 24px var(--cyan-glow), 0 0 0 1px rgba(0,212,255,0.45) inset",
      }
    : {
        background: "#0a0a0d",
        color: "var(--text)",
        border: "1px solid var(--border-hi)",
      };

  const topLabelColor = isPrimary
    ? "rgba(0, 21, 32, 0.75)"
    : "var(--text-3)";

  const subtextColor = isPrimary
    ? "rgba(0, 21, 32, 0.65)"
    : "var(--text-3)";

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${topLabel} ${mainLabel}${subtext ? " — " + subtext : ""}`}
      className={`${baseClasses} ${sizeClasses} cf-playstore ${isPrimary ? "cf-playstore-primary" : "cf-playstore-badge"} ${className}`}
      style={variantStyle}
    >
      <PlayIcon size={isLarge ? 24 : 20} />
      <span className="flex flex-col items-start leading-tight text-left">
        {!compact ? (
          <span
            className="font-mono uppercase tracking-[0.14em]"
            style={{ fontSize: 9.5, color: topLabelColor }}
          >
            {topLabel}
          </span>
        ) : null}
        <span
          className="font-bold tracking-tight"
          style={{
            fontSize: isLarge ? 17 : 15,
            letterSpacing: "-0.01em",
            lineHeight: 1.05,
          }}
        >
          {mainLabel}
        </span>
        {subtext ? (
          <span
            className="mt-0.5 font-mono"
            style={{
              fontSize: 10.5,
              color: subtextColor,
              letterSpacing: "0.02em",
            }}
          >
            {subtext}
          </span>
        ) : null}
      </span>
    </a>
  );
}
