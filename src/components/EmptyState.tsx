interface EmptyStateProps {
  query: string
}

export function EmptyState({ query }: EmptyStateProps) {
  return (
    <section
      aria-live="polite"
      className="fade-up rounded-3xl border border-dashed border-(--color-border-strong) bg-[rgba(14,23,36,0.76)] px-8 py-14 text-center"
    >
      <p className="text-sm tracking-[0.18em] text-(--color-text-muted) uppercase">
        No matching topics
      </p>
      <h2 className="font-display mt-3 text-2xl text-(--color-text-primary)">
        No PR examples matched “{query}”
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-(--color-text-secondary)">
        Try a broader term like{' '}
        <span className="text-(--color-accent-strong)">testing</span>,
        <span className="text-(--color-accent-strong)"> resilience</span>, or a
        PR phrase such as
        <span className="text-(--color-accent-strong)"> request tracing</span>.
      </p>
    </section>
  )
}
