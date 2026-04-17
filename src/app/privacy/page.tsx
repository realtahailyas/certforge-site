export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] px-4 py-10 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-3xl space-y-8 text-slate-300">
        <header className="space-y-2 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Privacy Policy</h1>
          <p className="text-sm text-slate-400">Last updated: April 2026</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Introduction</h2>
          <p>
            CertForge ("we", "our", "us") provides AWS exam preparation tools including practice questions, progress tracking, and performance insights. This Privacy Policy explains how we collect and use your information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
          <p>We collect:</p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>Email address (for account creation and login)</li>
            <li>User progress (questions attempted, accuracy, performance)</li>
            <li>Basic usage data (app interactions)</li>
          </ul>
          <p className="italic">We do NOT collect sensitive personal data.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">How We Use Information</h2>
          <p>We use your data to:</p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>Provide and improve the app</li>
            <li>Track your learning progress</li>
            <li>Personalize your experience</li>
            <li>Ensure app functionality</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Authentication & Accounts</h2>
          <p>We use secure authentication (via Supabase). Your login credentials are handled securely and are not stored directly by us.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Data Storage & Security</h2>
          <ul className="space-y-2 pl-6 list-disc">
            <li>Data is stored securely using Supabase infrastructure</li>
            <li>We apply standard security practices to protect user data</li>
            <li>No system is 100% secure, but we minimize risk</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Third-Party Services</h2>
          <p>We use:</p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>Supabase → authentication & database</li>
            <li>Google AdMob → ads (may collect device-level data)</li>
          </ul>
          <p className="text-slate-400 text-sm">These services have their own privacy policies.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Cookies / Tracking</h2>
          <ul className="space-y-2 pl-6 list-disc">
            <li>We may use minimal tracking for analytics and performance improvements.</li>
            <li>We do NOT use invasive tracking.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">User Rights</h2>
          <p>You can:</p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>Request account deletion</li>
            <li>Stop using the app anytime</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Data Retention</h2>
          <p>We retain data only as long as your account is active or needed for service functionality.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Children's Privacy</h2>
          <p>This app is not intended for children under 13.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Changes to Policy</h2>
          <p>We may update this policy. Changes will be reflected on this page.</p>
        </section>

        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p>For questions, contact:</p>
          <a
            href="mailto:support@certforge.app"
            className="inline-block text-cyan-400 transition hover:text-cyan-300 underline"
          >
            support@certforge.app
          </a>
        </section>
      </article>
    </main>
  );
}
