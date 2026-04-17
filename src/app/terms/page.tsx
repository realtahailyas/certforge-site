export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] px-4 py-10 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-3xl space-y-8 text-slate-300">
        <header className="space-y-2 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Terms & Conditions</h1>
          <p className="text-sm text-slate-400">Last updated: April 2026</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Introduction</h2>
          <p>Welcome to CertForge. By using this app or website, you agree to these Terms & Conditions.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Use of Service</h2>
          <ul className="space-y-2 pl-6 list-disc">
            <li>CertForge provides practice questions and learning tools for AWS exams.</li>
            <li>This service is for educational purposes only.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">User Accounts</h2>
          <ul className="space-y-2 pl-6 list-disc">
            <li>You are responsible for your account</li>
            <li>Keep your login credentials secure</li>
            <li>Do not share accounts</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Acceptable Use</h2>
          <p>You agree NOT to:</p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>Abuse the system</li>
            <li>Attempt to hack or exploit the platform</li>
            <li>Use bots or automation</li>
            <li>Copy or redistribute content</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Intellectual Property</h2>
          <p>All content (questions, UI, branding) belongs to CertForge. Unauthorized use is prohibited.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Progress & Accuracy Disclaimer</h2>
          <ul className="space-y-2 pl-6 list-disc">
            <li>Your progress, scores, and analytics are estimates</li>
            <li>CertForge does NOT guarantee exam success</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Ads & Monetization</h2>
          <ul className="space-y-2 pl-6 list-disc">
            <li>The app may show ads (via Google AdMob)</li>
            <li>Ads help keep the app free</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Termination</h2>
          <p>We may suspend or terminate accounts that violate these terms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Limitation of Liability</h2>
          <p>We are not responsible for:</p>
          <ul className="space-y-2 pl-6 list-disc">
            <li>Exam results</li>
            <li>Data loss (though we try to prevent it)</li>
            <li>Any indirect damages</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Changes to Terms</h2>
          <p>We may update these terms anytime. Continued use = acceptance.</p>
        </section>

        <section className="space-y-4 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
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
