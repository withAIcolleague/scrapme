import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10 sm:px-10 lg:px-16">
        <header className="fade-in-up flex items-center justify-between">
          <p className="font-mono text-xs tracking-[0.28em] text-[var(--color-coral)]">
            SCRAPME
          </p>
          <a className="cta-outline" href="#waitlist">
            Join Waitlist
          </a>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="fade-in-up fade-delay-1 space-y-8">
            <h1 className="text-5xl leading-[1.02] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Click, Collect, Compose.
            </h1>
            <p className="max-w-xl text-base leading-7 text-[color:var(--color-paper-soft)] sm:text-lg">
              Collect images from the web, place them on one board, rotate,
              resize, layer, and make your personal scrapbook in minutes.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="cta-fill" href="/editor">
                Preview Board
              </a>
              <a className="cta-text" href="#features">
                Explore Features
              </a>
            </div>
          </div>

          <div className="fade-in-up fade-delay-2">
            <div className="board-shell">
              <div className="scrap scrap-a">
                <p>Travel</p>
                <span>Lisbon · 2026</span>
              </div>
              <div className="scrap scrap-b">
                <p>Color Cut</p>
                <span>#f4a261 #264653</span>
              </div>
              <div className="scrap scrap-c">
                <p>Memory Log</p>
                <span>tap, drag, resize</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="fade-in-up fade-delay-3 grid gap-4 sm:grid-cols-3"
        >
          <article className="feature-card">
            <p className="feature-title">Freeform Canvas</p>
            <p className="feature-copy">
              Place images without a fixed grid and control layer order quickly.
            </p>
          </article>
          <article className="feature-card">
            <p className="feature-title">Style Playground</p>
            <p className="feature-copy">
              Mix backgrounds, stickers, and typography to shape each page mood.
            </p>
          </article>
          <article className="feature-card">
            <p className="feature-title">Private Archive</p>
            <p className="feature-copy">
              Save personal boards as your own quiet archive of memories.
            </p>
          </article>
        </section>

        <section id="preview" className="fade-in-up fade-delay-4 preview-band">
          <p>From random web images to a story-driven board in minutes.</p>
        </section>

        <section
          id="waitlist"
          className="fade-in-up fade-delay-4 rounded-3xl border border-white/20 bg-white/5 p-8 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-coral)]">
            Early Access
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Be first to try Scrapme</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-paper-soft)]">
            Enter your email to join early access. Supabase save will be wired
            in the next step.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <WaitlistForm />
          </div>
        </section>
      </main>
    </div>
  );
}
