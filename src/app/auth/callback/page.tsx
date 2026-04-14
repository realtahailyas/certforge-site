"use client";

import { useEffect } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase";

export default function AuthCallbackPage() {
  useEffect(() => {
    const run = async () => {
      try {
        const currentUrl = new URL(window.location.href);
        const code = currentUrl.searchParams.get("code");
        const state = currentUrl.searchParams.get("state");

        if (!code || !state) {
          window.location.href = "certforge://auth/error";
          return;
        }

        const supabase = createSupabaseBrowserClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          window.location.href = "certforge://auth/error";
          return;
        }

        window.location.href = "certforge://auth/success";
      } catch {
        window.location.href = "certforge://auth/error";
      }
    };

    run();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0F14] px-6 text-center text-slate-200">
      <p>Signing you in...</p>
    </main>
  );
}