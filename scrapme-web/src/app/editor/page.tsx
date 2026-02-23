"use client";

import Link from "next/link";
import EditorCanvas from "@/components/EditorCanvas";

export default function EditorPage() {
  return (
    <div className="relative min-h-screen bg-[var(--color-ink)] p-6 text-[var(--color-paper)] sm:p-10">
      <div className="ambient ambient-one opacity-30" />
      <div className="ambient ambient-two opacity-30" />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-mono text-xs tracking-[0.28em] text-[var(--color-coral)] transition-opacity hover:opacity-80"
            >
              SCRAPME
            </Link>
            <span className="text-white/20">/</span>
            <h1 className="text-lg font-semibold tracking-tight">Personal Board</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="cta-outline py-2 scale-90">Save Board</button>
            <Link
              href="/"
              className="text-sm text-[var(--color-paper-soft)] transition-colors hover:text-white"
            >
              Exit
            </Link>
          </div>
        </header>

        <section className="flex flex-1 flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <p className="font-mono text-sm text-[var(--color-paper-soft)]">
              [DRAG & DROP TO ARRANGE YOUR MEMORIES]
            </p>
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="min-h-[600px] flex-1">
            <EditorCanvas />
          </div>
        </section>
      </main>
    </div>
  );
}
