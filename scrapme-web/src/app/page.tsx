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
              웹에서 발견한 장면들을 한 장의 캔버스에 붙이고, 회전하고,
              겹치고, 감정까지 메모해 나만의 디지털 스크랩북을 만드세요.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="cta-fill" href="#preview">
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

        <section id="features" className="fade-in-up fade-delay-3 grid gap-4 sm:grid-cols-3">
          <article className="feature-card">
            <p className="feature-title">Freeform Canvas</p>
            <p className="feature-copy">
              이미지를 격자 없이 자유롭게 배치하고 레이어 순서를 직관적으로 정리.
            </p>
          </article>
          <article className="feature-card">
            <p className="feature-title">Style Playground</p>
            <p className="feature-copy">
              배경, 스티커, 타이포를 조합해 페이지마다 완전히 다른 분위기 제작.
            </p>
          </article>
          <article className="feature-card">
            <p className="feature-title">Private Archive</p>
            <p className="feature-copy">
              개인 보드 단위 저장으로 기억을 조용히 쌓아두는 나만의 아카이브.
            </p>
          </article>
        </section>

        <section id="preview" className="fade-in-up fade-delay-4 preview-band">
          <p>From random web images to a story-driven board in minutes.</p>
        </section>

        <section id="waitlist" className="fade-in-up fade-delay-4 rounded-3xl border border-white/20 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-coral)]">
            Early Access
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Scrapme를 가장 먼저 써보세요</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-paper-soft)]">
            지금은 랜딩부터 시작하고, 다음 단계에서 실제 편집 기능을 연결할
            예정입니다.
          </p>
        </section>
      </main>
    </div>
  );
}
