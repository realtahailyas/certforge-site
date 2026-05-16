"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      setError("Please enter a valid email.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setError(null);
    try {
      // TODO: wire to email service (Resend / Loops / ConvertKit)
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
    } catch {
      setStatus("error");
      setError("Something went wrong. Try again in a moment.");
    }
  }

  if (status === "ok") {
    return (
      <div
        role="status"
        className="mx-auto flex max-w-[440px] items-center justify-center gap-3 rounded-xl border border-[rgba(0,255,149,0.25)] bg-[rgba(0,255,149,0.06)] px-5 py-4 text-[15px] text-[var(--green)]"
      >
        <span aria-hidden="true">✓</span>
        <span>You&apos;re on the list. We&apos;ll email you at launch.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto flex w-full max-w-[440px] flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="cf-email" className="sr-only">
        Email address
      </label>
      <input
        id="cf-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="cf-input flex-1 rounded-xl border border-[var(--border-hi)] bg-[var(--bg-elev)] px-4 py-3 text-[15px] text-[var(--text)] placeholder:text-[var(--text-muted)]"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="cf-btn-primary inline-flex items-center justify-center rounded-xl px-5 py-3 text-[14px] font-semibold disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Notify Me"}
      </button>
      {error ? (
        <p
          role="alert"
          className="basis-full text-center text-[13px] text-[var(--red)]"
        >
          {error}
        </p>
      ) : null}
    </form>
  );
}
