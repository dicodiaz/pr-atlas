# Senior Front-End Engineer — Promotion Coverage

This document tracks progress toward qualifying as a Senior Front-End Engineer
based on the competency framework defined in [`src/data/topics.ts`](../src/data/topics.ts).

## Promotion requirements

All of the following must be satisfied simultaneously:

| Condition | Threshold |
|-----------|-----------|
| Trainee KEY topics | 100% |
| Junior KEY topics | 100% |
| Middle KEY topics | 100% |
| All Trainee topics | 80% |
| All Junior topics | 80% |
| All Middle topics | 80% |
| All Senior topics | 50% |

## Topic counts by level

| Level | Total | KEY | Non-key | Need KEY | Need total (%) |
|-------|-------|-----|---------|----------|----------------|
| Trainee | 20 | 15 | 5 | 15 (100%) | 16 (80%) |
| Junior | 42 | 25 | 17 | 25 (100%) | 34 (80%) |
| Middle | 60 | 25 | 35 | 25 (100%) | 48 (80%) |
| Senior | 59 | 23 | 36 | — | 30 (50%) |

Beyond the mandatory KEY topics the additional non-key topics needed to reach
each threshold are:

- **Trainee**: 1 non-key (out of 5 available)
- **Junior**: 9 non-key (out of 17 available)
- **Middle**: 23 non-key (out of 35 available)
- **Senior**: 30 total (any mix)

## PR Atlas coverage

PR Atlas (this project) is a React SPA that demonstrates accessible search with
debounced filtering, responsive layout, semantic HTML, comprehensive test
coverage, and documented architecture. It covers **84 of 181 topics** across
eight categories.

### Coverage by level

| Level | Covered | KEY covered | KEY gap | Threshold met? |
|-------|---------|-------------|---------|----------------|
| Trainee | 17 / 20 | 14 / 15 | 1 | 80% threshold met (17 ≥ 16) |
| Junior | 28 / 42 | 22 / 25 | 3 | Not yet (28 < 34) |
| Middle | 22 / 60 | 17 / 25 | 8 | Not yet (22 < 48) |
| Senior | 17 / 59 | — | — | Not yet (17 < 30) |

### Coverage by category

| Category | Covered | Total | % |
|----------|---------|-------|---|
| Language – JavaScript | 17 | 28 | 61% |
| Framework – React JS Web | 13 | 22 | 59% |
| Libraries – React JS Web | 6 | 24 | 25% |
| Markup and Styling | 20 | 24 | 83% |
| Code-Based Testing – React JS Web | 11 | 12 | 92% |
| Design | 9 | 13 | 69% |
| Development Environments – React JS Web | 8 | 15 | 53% |
| Cloud Environments | 0 | 4 | 0% |
| Project Process | 0 | 10 | 0% |
| Technical Process | 0 | 4 | 0% |
| Expertise Contribution | 0 | 11 | 0% |
| Generative AI | 0 | 14 | 0% |

## Mandatory KEY topics not yet covered

These 12 KEY topics require other projects or process documentation.

### Network / API — one full-stack app covers all three

- **[Language · Middle]** Sends and retrieves data through a network using language capabilities
- **[Libraries · Middle]** Troubleshoots network using tools and libraries
- **[Libraries · Middle]** Uses HTTP clients for API communication

### Browser storage — any app using localStorage or sessionStorage

- **[Libraries · Junior]** Simplifies access to browsers storage using tools or libraries
- **[Language · Middle]** Accesses and stores data in a client-side storage

### Security

- **[Framework · Middle]** Applies security practices and approaches to protect application

### Internationalization

- **[Libraries · Middle]** Handles different types of localization and text processing

### Dependency management

- **[Libraries · Middle]** Handles and resolves new versions of the packages

### Process / organizational — documented through workflow, not code

- **[Expertise Contribution · Trainee]** Passes onboarding into Engineering and Technology Expertise including specialisation or practice
- **[Technical Process · Junior]** Estimates tasks based on requirements
- **[Expertise Contribution · Junior]** Passes Performance Review according to the process definition and requirements
- **[Technical Process · Middle]** Manages technical debt based on priorities

## Recommended next steps

1. **One full-stack React app** with API calls, auth, localStorage, i18n, and
   routing would cover nearly all 12 remaining KEY gaps plus dozens of threshold
   topics across Libraries, Framework, and Language.

2. **Process topics** (estimation, tech debt, performance review, onboarding)
   are proven through documentation and workflow — no code PR is needed.

3. **Cloud Environments, Project Process, Generative AI, and Expertise
   Contribution** categories (39 total topics) are all at 0% — picking up a
   few easy ones from each is the fastest way to close the Senior 50%
   threshold.
