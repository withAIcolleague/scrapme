import { AccessCodeForm } from "@/components/access-code-form";

type EnterPageProps = {
  searchParams: Promise<{ next?: string }>;
};

export default async function EnterPage({ searchParams }: EnterPageProps) {
  const params = await searchParams;
  const redirectTo = params.next?.startsWith("/") ? params.next : "/editor";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-6 py-12 sm:px-10">
        <section className="w-full rounded-3xl border border-white/20 bg-white/5 p-8">
          <p className="font-mono text-xs tracking-[0.28em] text-[var(--color-coral)]">
            SCRAPME ACCESS
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Enter with access code
          </h1>
          <p className="mt-3 max-w-xl text-[var(--color-paper-soft)]">
            Please enter your invite code to access the Scrapme editor.
          </p>

          <div className="mt-6">
            <AccessCodeForm redirectTo={redirectTo} />
          </div>
        </section>
      </main>
    </div>
  );
}
