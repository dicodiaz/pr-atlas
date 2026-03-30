interface EmptyStateProps {
  query: string
}

export function EmptyState({ query }: EmptyStateProps) {
  return (
    <section
      aria-live="polite"
      className="fade-up rounded-3xl border border-dashed border-[var(--color-border-strong)] bg-[rgba(14,23,36,0.76)] px-8 py-14 text-center"
    >
      <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
        No matching topics
      </p>
      <h2 className="mt-3 font-display text-2xl text-[var(--color-text-primary)]">
        No PR examples matched “{query}”
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)]">
        Try a broader term like{' '}
        <span className="text-[var(--color-accent-strong)]">testing</span>,
        <span className="text-[var(--color-accent-strong)]"> resilience</span>,
        or a PR phrase such as
        <span className="text-[var(--color-accent-strong)]">
          {' '}
          request tracing
        </span>
        .
      </p>
    </section>
  )
}
