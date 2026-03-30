interface EmptyStateProps {
  query: string
}

export function EmptyState({ query }: EmptyStateProps) {
  return (
    <section
      aria-live="polite"
      className="border-strong fade-up rounded-3xl border border-dashed bg-[rgba(14,23,36,0.76)] px-8 py-14 text-center"
    >
      <p className="text-muted text-sm tracking-[0.18em] uppercase">
        No matching topics
      </p>
      <h2 className="text-primary font-display mt-3 text-2xl">
        No PR examples matched "{query}"
      </h2>
      <p className="text-secondary mx-auto mt-4 max-w-2xl text-sm leading-7">
        Try a broader term like <span className="text-accent">testing</span>,
        <span className="text-accent"> resilience</span>, or a PR phrase such as
        <span className="text-accent"> request tracing</span>.
      </p>
    </section>
  )
}
