# Senior Front-End Engineer — Promotion Coverage

This document tracks progress toward qualifying as a Senior Front-End Engineer
based on the competency framework defined in [`src/data/topics.ts`](../src/data/topics.ts).

## Promotion requirements

All of the following must be satisfied simultaneously:

| Condition          | Threshold |
| ------------------ | --------- |
| Trainee KEY topics | 100%      |
| Junior KEY topics  | 100%      |
| Middle KEY topics  | 100%      |
| All Trainee topics | 80%       |
| All Junior topics  | 80%       |
| All Middle topics  | 80%       |
| All Senior topics  | 50%       |

## Topic counts by level

| Level   | Total | KEY | Non-key | Need KEY  | Need total (%) |
| ------- | ----- | --- | ------- | --------- | -------------- |
| Trainee | 20    | 15  | 5       | 15 (100%) | 16 (80%)       |
| Junior  | 42    | 25  | 17      | 25 (100%) | 34 (80%)       |
| Middle  | 60    | 25  | 35      | 25 (100%) | 48 (80%)       |
| Senior  | 59    | 23  | 36      | —         | 30 (50%)       |

Beyond the mandatory KEY topics the additional non-key topics needed to reach
each threshold are:

- **Trainee**: 1 non-key (out of 5 available)
- **Junior**: 9 non-key (out of 17 available)
- **Middle**: 23 non-key (out of 35 available)
- **Senior**: 30 total (any mix)

## Current coverage

PR Atlas, process evidence, and corporate PRs cover **119 of 181 topics**.

### Coverage by level

| Level   | Covered | KEY covered | KEY gap | Threshold met?                        |
| ------- | ------- | ----------- | ------- | ------------------------------------- |
| Trainee | 18 / 20 | 15 / 15     | 0       | KEY ✅ — 80% threshold met (18 ≥ 16)  |
| Junior  | 31 / 42 | 25 / 25     | 0       | KEY ✅ — Not yet total (31 < 34)      |
| Middle  | 44 / 60 | 25 / 25     | 0       | KEY ✅ — Not yet total (44 < 48)      |
| Senior  | 26 / 59 | —           | —       | Not yet (26 < 30)                     |

### Coverage by category

| Category                                | Covered | Total | %    |
| --------------------------------------- | ------- | ----- | ---- |
| Language – JavaScript                   | 24      | 28    | 86%  |
| Framework – React JS Web                | 18      | 22    | 82%  |
| Libraries – React JS Web                | 16      | 24    | 67%  |
| Markup and Styling                      | 22      | 24    | 92%  |
| Code-Based Testing – React JS Web       | 12      | 12    | 100% |
| Design                                  | 11      | 13    | 85%  |
| Development Environments – React JS Web | 8       | 15    | 53%  |
| Cloud Environments                      | 0       | 4     | 0%   |
| Project Process                         | 0       | 10    | 0%   |
| Technical Process                       | 2       | 4     | 50%  |
| Expertise Contribution                  | 2       | 11    | 18%  |
| Generative AI                           | 0       | 14    | 0%   |

## KEY topics — all covered

All KEY topics at Trainee, Junior, and Middle levels are now fully covered.

### Previously uncovered KEY topics — now covered by corporate PRs

- ~~**[Language · Middle]** Sends and retrieves data through a network~~ ✅ — 3 corporate PRs (parallel GraphQL, analytics HTTP, URL construction)
- ~~**[Libraries · Middle]** Troubleshoots network using tools and libraries~~ ✅ — 3 corporate PRs (GraphQL race conditions, prefetch debugging)
- ~~**[Libraries · Middle]** Uses HTTP clients for API communication~~ ✅ — 3 corporate PRs (API submissions, analytics payloads)
- ~~**[Framework · Middle]** Applies security practices~~ ✅ — 3 corporate PRs (parameter sanitization, SSR whitelisting)
- ~~**[Technical Process · Middle]** Manages technical debt based on priorities~~ ✅ — 3 corporate PRs (experiment cleanup, data source simplification)

### Previously covered KEY topics

- ~~**[Libraries · Junior]** Simplifies access to browsers storage using tools or libraries~~ ✅ — saved searches feature
- ~~**[Language · Middle]** Accesses and stores data in a client-side storage~~ ✅ — saved searches feature
- ~~**[Libraries · Middle]** Handles different types of localization and text processing~~ ✅ — i18n feature
- ~~**[Libraries · Middle]** Handles and resolves new versions of the packages~~ ✅ — i18n feature
- ~~**[Expertise Contribution · Trainee]** Passes onboarding~~ ✅ — process evidence
- ~~**[Technical Process · Junior]** Estimates tasks based on requirements~~ ✅ — process evidence
- ~~**[Expertise Contribution · Junior]** Passes Performance Review~~ ✅ — process evidence

## Corporate PR coverage — newly added topics

21 topics are now covered by 55 corporate PRs across 11 repositories,
grouped under 9 parent features (Sort and Filter, AI Search, Loved By Guests,
Carousel, Typeahead, Great Find, Signals, About The Host, Inquiry).

### Middle non-key topics (14 newly covered)

| # | Topic | Parent features / repos |
|---|-------|------------------------|
| 1 | Implements concurrency concepts | Sort and Filter (Shopping PWA, Shared UI Web) |
| 2 | Manipulates date and time with language APIs | Inquiry (Shared UI Web) |
| 3 | Uses language APIs for mathematical operations | Sort and Filter, Great Find (Shared UI Web, Shopping PWA, Lodging Offers API) |
| 4 | Defines custom event for handling user interaction | Signals (Shared UI Web) |
| 5 | Manages data for scalable applications | Loved By Guests, Sort and Filter (Shared UI Web) |
| 6 | Uses advanced router capability | Sort and Filter (Shopping PWA) |
| 7 | Handles internationalisation in scope of application | About The Host, Loved By Guests (Product Details API) |
| 8 | Handles scroll detection | Carousel, Sort and Filter (EGDS Components React, Shared UI Web) |
| 9 | Validates data with tools and libraries | Inquiry, Sort and Filter (Shared UI Web, Lodging Property API, Shopping PWA) |
| 10 | Provides support for different browsers | Sort and Filter (Shopping PWA, Shared UI Web) |
| 11 | Transforms elements using style sheets | Carousel, Sort and Filter (EGDS Components React, Shared UI Web) |
| 12 | Embeds content from another source | Loved By Guests (Product Details API, Shared GraphQL) |
| 13 | Collects data using requirements elicitation | AI Search (Shared UI Web) |
| 14 | Uses different requirement sources | About The Host, Loved By Guests (Product Details API, Shopping PWA) |

### Senior topics (2 newly covered)

| # | Topic | Parent features / repos |
|---|-------|------------------------|
| 1 | Creates and maintains component library | Carousel, Typeahead (EGDS Components React) |
| 2 | Uses language metaprogramming techniques | Sort and Filter, Carousel (Shared UI Web, EGDS Components React) |

## Data model changes

The data model was redesigned to support granular corporate PR tracking:

- **`RepoId` enum** — 11 repositories (including PR Atlas and External Evidence)
- **`ParentFeature` enum** — 9 business initiatives
- **`PullRequestId` enum** — 57 entries (55 corporate + PR Atlas + Process Evidence)
- **`PARENT_FEATURE_PRS` mapping** — groups PRs by parent feature, inverted by `buildTopics`
- **`contribution` field** — free-form string replacing the old `feature` field
- **`TopicPr` interface** — denormalized with `repoName` and optional `parentFeature`
- **UI** — `TopicTable` displays repo and parent feature tag chips per PR row
- **Search index** — includes `repoName` and `parentFeature` for filtering

## Recommended next steps

### Completed features

1. ~~**Persist user preferences to localStorage** — saved searches~~ ✅
2. ~~**Fetch data from a remote API** — covered by corporate PRs instead~~ ✅
3. ~~**Add i18n support** — react-i18next EN/ES~~ ✅
4. ~~**Coverage analytics dashboard** — react-router, Recharts, code splitting~~ ✅
5. ~~**Enhanced search with autocomplete and logging** — trigram index, Web Worker, ghost text, consola~~ ✅

### Remaining gaps

| Gap | Count | Notes |
|-----|-------|-------|
| Junior total | 3 short (31/34) | 3 more non-key Junior topics needed |
| Middle total | 4 short (44/48) | 4 more non-key Middle topics needed |
| Senior total | 4 short (26/30) | 4 more Senior topics needed |

### Suggestion 6: CI/CD pipeline and project process documentation

Add GitHub Actions CI, contribution workflow (CONTRIBUTING.md,
CODEOWNERS, PR template), a formal SRS with Mermaid diagrams, a
technical debt policy, and a requirements elicitation process document.
Covers 6 KEY + 2 non-key:

- [Dev Environments · Senior · KEY] Set-ups code review process to achieve the quality of the application
- [Design · Senior · KEY] Uses modelling techniques for requirements analysis
- [Project Process · Senior · KEY] Creates and maintains documentation for software requirements specification
- [Project Process · Senior · KEY] Establishes or refines a technical debt policy
- [Project Process · Senior · KEY] Establishes or refines requirements elicitation process
- [Technical Process · Senior · KEY] Manages workload based on requirements
- [Dev Environments · Senior] Configures contribution workflow using version control tools
- [Dev Environments · Senior] Configures integration process using CI tools

### 3 Senior KEY topics requiring external evidence

These cannot be covered by FE features in this project:

- **[Language · Senior · KEY]** Builds client-server applications using network protocols — requires backend/network work
- **[Expertise Contribution · Senior · KEY]** Conducts evaluations in Job Interview events — requires interviewer activity
- **[Expertise Contribution · Senior · KEY]** Conducts evaluations in Performance Review events — requires reviewer activity
