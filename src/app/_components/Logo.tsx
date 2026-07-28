export default function Logo({ height = 28 }: { height?: number }) {
  // SVG aspect ratio is 771.71 / 146.25 ≈ 5.276
  const width = Math.round(height * 5.276);
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/brand/wordmark.svg"
      alt="CertForge"
      width={width}
      height={height}
      style={{ height, width: "auto", display: "block" }}
      draggable={false}
    />
  );
}
