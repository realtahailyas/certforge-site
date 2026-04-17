"use client";

import { useEffect, useRef, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const supabaseRef = useRef<ReturnType<typeof createSupabaseBrowserClient> | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    const initializeSession = async () => {
      try {
        const url = window.location.href;
        if (!url) {
          setError("Invalid or expired link");
          return;
        }

        const query = new URLSearchParams(window.location.search);
        const fragment = new URLSearchParams(window.location.hash.slice(1));

        const access_token =
          query.get("access_token") || fragment.get("access_token");
        const refresh_token =
          query.get("refresh_token") || fragment.get("refresh_token");

        if (!access_token || !refresh_token) {
          setError("Invalid or expired link");
          return;
        }

        const supabase = createSupabaseBrowserClient();
        supabaseRef.current = supabase;

        const { error: sessionError } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (sessionError) {
          setError(sessionError.message || "Invalid or expired link");
          return;
        }

        setSessionReady(true);
      } catch {
        setError("Invalid or expired link");
      } finally {
        setInitializing(false);
      }
    };

    initializeSession();
  }, []);

  const handleReset = async () => {
    if (loading || initializing || !sessionReady || success) {
      return;
    }

    setError("");

    if (!password || !confirmPassword) {
      setError("Please fill in both password fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    const supabase = supabaseRef.current;
    if (!supabase) {
      setError("Invalid or expired link");
      return;
    }

    setLoading(true);

    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setError(updateError.message);
    } else {
      setSuccess(true);
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0F14] px-6">
      <div className="w-full max-w-md rounded-lg border border-white/10 bg-white/5 p-6 text-slate-100">
        {success ? (
          <div className="space-y-4 text-center">
            <h1 className="text-xl font-semibold">Password updated successfully</h1>
            <button
              type="button"
              onClick={() => {
                window.location.href = "certforge://login";
              }}
              className="w-full rounded-md bg-cyan-400 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              Open App
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Reset Password</h1>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm text-slate-300">
                New password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-md border border-white/15 bg-black/30 px-3 py-2 outline-none ring-cyan-300 placeholder:text-slate-500 focus:ring-2"
                placeholder="Enter new password"
                disabled={loading || initializing}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm text-slate-300">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="w-full rounded-md border border-white/15 bg-black/30 px-3 py-2 outline-none ring-cyan-300 placeholder:text-slate-500 focus:ring-2"
                placeholder="Confirm new password"
                disabled={loading || initializing}
              />
            </div>

            {error ? <p className="text-sm text-red-300">{error}</p> : null}

            <button
              type="button"
              onClick={handleReset}
              disabled={loading || initializing || !sessionReady}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-cyan-400 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {(loading || initializing) && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
              )}
              {loading ? "Resetting..." : initializing ? "Verifying link..." : "Reset Password"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}