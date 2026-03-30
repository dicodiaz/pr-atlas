import type { PullRequestExample, Topic } from '../types/topics'

type PullRequestCatalog = Record<string, PullRequestExample>

interface TopicSeed {
  id: string
  name: string
  tags: string[]
  prExampleIds: string[]
}

const pullRequestCatalog: PullRequestCatalog = {
  'pr-architecture-decisions': {
    id: 'pr-architecture-decisions',
    title: 'Document service boundaries before modular checkout extraction',
    url: 'https://github.com/acme-platform/commerce-app/pull/1087',
  },
  'pr-caching-rollout': {
    id: 'pr-caching-rollout',
    title: 'Introduce cache warming for dashboard aggregates',
    url: 'https://github.com/acme-platform/insights-ui/pull/994',
  },
  'pr-circuit-breaker': {
    id: 'pr-circuit-breaker',
    title: 'Add circuit breaker and retry budget around partner sync',
    url: 'https://github.com/acme-platform/integrations-api/pull/1221',
  },
  'pr-contract-tests': {
    id: 'pr-contract-tests',
    title: 'Create contract test suite for public billing endpoints',
    url: 'https://github.com/acme-platform/billing-api/pull/874',
  },
  'pr-db-indexes': {
    id: 'pr-db-indexes',
    title: 'Add composite indexes for invoice search and export queries',
    url: 'https://github.com/acme-platform/billing-api/pull/882',
  },
  'pr-design-tokens': {
    id: 'pr-design-tokens',
    title: 'Migrate legacy colors to semantic design tokens',
    url: 'https://github.com/acme-platform/design-system/pull/433',
  },
  'pr-feature-flags': {
    id: 'pr-feature-flags',
    title: 'Roll out revenue insights with environment-aware feature flags',
    url: 'https://github.com/acme-platform/insights-ui/pull/1008',
  },
  'pr-form-accessibility': {
    id: 'pr-form-accessibility',
    title: 'Improve keyboard flow and screen reader copy for payment forms',
    url: 'https://github.com/acme-platform/checkout-web/pull/1562',
  },
  'pr-incident-retro': {
    id: 'pr-incident-retro',
    title:
      'Standardize rollback notes and follow-up tasks after production incidents',
    url: 'https://github.com/acme-platform/platform-playbooks/pull/126',
  },
  'pr-loading-states': {
    id: 'pr-loading-states',
    title: 'Refine loading skeletons for high-volume account tables',
    url: 'https://github.com/acme-platform/operations-console/pull/714',
  },
  'pr-observability': {
    id: 'pr-observability',
    title: 'Add request tracing and log correlation for job workers',
    url: 'https://github.com/acme-platform/jobs-service/pull/612',
  },
  'pr-performance-budget': {
    id: 'pr-performance-budget',
    title: 'Enforce bundle budget checks for dashboard entry points',
    url: 'https://github.com/acme-platform/insights-ui/pull/1017',
  },
  'pr-queue-backpressure': {
    id: 'pr-queue-backpressure',
    title: 'Throttle queue consumers to reduce downstream backpressure',
    url: 'https://github.com/acme-platform/jobs-service/pull/618',
  },
  'pr-rate-limit': {
    id: 'pr-rate-limit',
    title: 'Add tenant-aware API rate limiting at the edge gateway',
    url: 'https://github.com/acme-platform/edge-gateway/pull/529',
  },
  'pr-react-query-migration': {
    id: 'pr-react-query-migration',
    title: 'Replace bespoke data hooks with shared query primitives',
    url: 'https://github.com/acme-platform/operations-console/pull/702',
  },
  'pr-release-checklist': {
    id: 'pr-release-checklist',
    title: 'Automate release checklist generation for Friday deployments',
    url: 'https://github.com/acme-platform/release-tools/pull/243',
  },
  'pr-schema-evolution': {
    id: 'pr-schema-evolution',
    title: 'Version webhook schema changes without breaking consumers',
    url: 'https://github.com/acme-platform/integrations-api/pull/1203',
  },
  'pr-search-ranking': {
    id: 'pr-search-ranking',
    title: 'Tune fuzzy ranking and synonyms for command palette search',
    url: 'https://github.com/acme-platform/workspace-shell/pull/851',
  },
  'pr-security-audit': {
    id: 'pr-security-audit',
    title: 'Tighten CSP and dependency audit workflow for customer portals',
    url: 'https://github.com/acme-platform/customer-portal/pull/440',
  },
  'pr-storybook-hardening': {
    id: 'pr-storybook-hardening',
    title: 'Add visual regression coverage for shared form components',
    url: 'https://github.com/acme-platform/design-system/pull/439',
  },
  'pr-table-virtualization': {
    id: 'pr-table-virtualization',
    title: 'Virtualize activity tables to handle 50k-row datasets',
    url: 'https://github.com/acme-platform/operations-console/pull/727',
  },
}

const pickPullRequests = (...ids: string[]): PullRequestExample[] =>
  ids.map((id) => {
    const pullRequest = pullRequestCatalog[id]

    if (!pullRequest) {
      throw new Error(`Missing pull request seed for id "${id}"`)
    }

    return pullRequest
  })

const topicSeed: TopicSeed[] = [
  {
    id: 'accessibility',
    name: 'Accessibility',
    tags: ['a11y', 'keyboard navigation', 'screen reader', 'forms'],
    prExampleIds: ['pr-form-accessibility', 'pr-design-tokens'],
  },
  {
    id: 'api-design',
    name: 'API Design',
    tags: ['contracts', 'versioning', 'public endpoints'],
    prExampleIds: ['pr-contract-tests', 'pr-schema-evolution'],
  },
  {
    id: 'architecture',
    name: 'Architecture',
    tags: ['boundaries', 'modularization', 'tradeoffs'],
    prExampleIds: ['pr-architecture-decisions', 'pr-schema-evolution'],
  },
  {
    id: 'caching',
    name: 'Caching',
    tags: ['cache warming', 'performance', 'aggregates'],
    prExampleIds: ['pr-caching-rollout', 'pr-performance-budget'],
  },
  {
    id: 'ci-cd',
    name: 'CI/CD',
    tags: ['release automation', 'deploy confidence', 'pipelines'],
    prExampleIds: ['pr-release-checklist', 'pr-security-audit'],
  },
  {
    id: 'client-performance',
    name: 'Client Performance',
    tags: ['bundle budget', 'rendering', 'speed'],
    prExampleIds: ['pr-performance-budget', 'pr-table-virtualization'],
  },
  {
    id: 'component-design',
    name: 'Component Design',
    tags: ['design system', 'reuse', 'storybook'],
    prExampleIds: ['pr-design-tokens', 'pr-storybook-hardening'],
  },
  {
    id: 'data-fetching',
    name: 'Data Fetching',
    tags: ['queries', 'state sync', 'server state'],
    prExampleIds: ['pr-react-query-migration', 'pr-caching-rollout'],
  },
  {
    id: 'database-performance',
    name: 'Database Performance',
    tags: ['indexes', 'query tuning', 'read efficiency'],
    prExampleIds: ['pr-db-indexes', 'pr-caching-rollout'],
  },
  {
    id: 'debugging',
    name: 'Debugging',
    tags: ['traceability', 'root cause', 'logs'],
    prExampleIds: ['pr-observability', 'pr-incident-retro'],
  },
  {
    id: 'design-systems',
    name: 'Design Systems',
    tags: ['tokens', 'shared UI', 'consistency'],
    prExampleIds: ['pr-design-tokens', 'pr-storybook-hardening'],
  },
  {
    id: 'developer-experience',
    name: 'Developer Experience',
    tags: ['tooling', 'guardrails', 'workflows'],
    prExampleIds: ['pr-release-checklist', 'pr-contract-tests'],
  },
  {
    id: 'feature-flags',
    name: 'Feature Flags',
    tags: ['gradual rollout', 'release safety', 'targeting'],
    prExampleIds: ['pr-feature-flags', 'pr-release-checklist'],
  },
  {
    id: 'frontend-architecture',
    name: 'Frontend Architecture',
    tags: ['composition', 'shared primitives', 'maintainability'],
    prExampleIds: ['pr-react-query-migration', 'pr-architecture-decisions'],
  },
  {
    id: 'incident-response',
    name: 'Incident Response',
    tags: ['rollback', 'retrospectives', 'ops readiness'],
    prExampleIds: ['pr-incident-retro', 'pr-observability'],
  },
  {
    id: 'integration-patterns',
    name: 'Integration Patterns',
    tags: ['partners', 'webhooks', 'resilience'],
    prExampleIds: ['pr-circuit-breaker', 'pr-schema-evolution'],
  },
  {
    id: 'javascript-performance',
    name: 'JavaScript Performance',
    tags: ['faster interactions', 'bundle size', 'render cost'],
    prExampleIds: ['pr-performance-budget', 'pr-search-ranking'],
  },
  {
    id: 'keyboard-ux',
    name: 'Keyboard UX',
    tags: ['shortcuts', 'focus states', 'accessibility'],
    prExampleIds: ['pr-form-accessibility', 'pr-search-ranking'],
  },
  {
    id: 'loading-states',
    name: 'Loading States',
    tags: ['skeletons', 'latency handling', 'perceived performance'],
    prExampleIds: ['pr-loading-states', 'pr-react-query-migration'],
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    tags: ['metrics', 'alerts', 'observability'],
    prExampleIds: ['pr-observability', 'pr-queue-backpressure'],
  },
  {
    id: 'observability',
    name: 'Observability',
    tags: ['tracing', 'logs', 'correlation'],
    prExampleIds: [
      'pr-observability',
      'pr-incident-retro',
      'pr-queue-backpressure',
    ],
  },
  {
    id: 'performance-budgeting',
    name: 'Performance Budgeting',
    tags: ['budgets', 'web vitals', 'governance'],
    prExampleIds: ['pr-performance-budget', 'pr-loading-states'],
  },
  {
    id: 'platform-security',
    name: 'Platform Security',
    tags: ['csp', 'dependency audit', 'hardening'],
    prExampleIds: ['pr-security-audit', 'pr-rate-limit'],
  },
  {
    id: 'queues',
    name: 'Queues',
    tags: ['workers', 'throughput', 'backpressure'],
    prExampleIds: ['pr-queue-backpressure', 'pr-observability'],
  },
  {
    id: 'rate-limiting',
    name: 'Rate Limiting',
    tags: ['tenant protection', 'gateway', 'traffic control'],
    prExampleIds: ['pr-rate-limit', 'pr-circuit-breaker'],
  },
  {
    id: 'react-patterns',
    name: 'React Patterns',
    tags: ['hooks', 'composition', 'UI state'],
    prExampleIds: ['pr-react-query-migration', 'pr-loading-states'],
  },
  {
    id: 'release-management',
    name: 'Release Management',
    tags: ['change control', 'rollouts', 'checklists'],
    prExampleIds: ['pr-release-checklist', 'pr-feature-flags'],
  },
  {
    id: 'resilience',
    name: 'Resilience',
    tags: ['circuit breaker', 'retry budget', 'failover'],
    prExampleIds: ['pr-circuit-breaker', 'pr-rate-limit'],
  },
  {
    id: 'schema-evolution',
    name: 'Schema Evolution',
    tags: ['compatibility', 'api changes', 'migrations'],
    prExampleIds: ['pr-schema-evolution', 'pr-contract-tests'],
  },
  {
    id: 'search',
    name: 'Search',
    tags: ['ranking', 'fuzzy match', 'command palette'],
    prExampleIds: ['pr-search-ranking', 'pr-table-virtualization'],
  },
  {
    id: 'state-management',
    name: 'State Management',
    tags: ['query cache', 'client state', 'consistency'],
    prExampleIds: ['pr-react-query-migration', 'pr-feature-flags'],
  },
  {
    id: 'table-design',
    name: 'Table Design',
    tags: ['dense data', 'scanability', 'large lists'],
    prExampleIds: ['pr-table-virtualization', 'pr-loading-states'],
  },
  {
    id: 'testing',
    name: 'Testing',
    tags: ['contract tests', 'visual regression', 'confidence'],
    prExampleIds: [
      'pr-contract-tests',
      'pr-storybook-hardening',
      'pr-incident-retro',
    ],
  },
  {
    id: 'ux-writing',
    name: 'UX Writing',
    tags: ['microcopy', 'clarity', 'empty states'],
    prExampleIds: ['pr-form-accessibility', 'pr-loading-states'],
  },
]

// Replace these placeholder topics and PR URLs with your real interview examples later.
// Keeping the data grouped by topic makes it easy to refine each topic independently while
// still reusing shared PR catalog entries across multiple topics.
export const topics: Topic[] = topicSeed.map((topic) => ({
  id: topic.id,
  name: topic.name,
  tags: topic.tags,
  prExamples: pickPullRequests(...topic.prExampleIds),
}))
