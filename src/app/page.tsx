export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-16 sm:px-10 sm:py-20">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            CertForge
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            Practice AWS exam questions. Track progress. Pass faster.
          </p>
          <button className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
            Start Practicing
          </button>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Features</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• 800+ AWS questions</li>
            <li>• Real exam-style mocks</li>
            <li>• Smart progress tracking</li>
          </ul>
        </section>

        <section>
          <button className="rounded-md border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-slate-950">
            Get Started Free
          </button>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400 sm:px-10">
        © CertForge
      </footer>
    </div>
  );
}
