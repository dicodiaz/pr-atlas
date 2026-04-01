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

## PR Atlas coverage

PR Atlas (this project) is a React SPA that demonstrates accessible search with
debounced filtering, responsive layout, semantic HTML, comprehensive test
coverage, documented architecture, and localStorage-backed saved searches. It
covers **88 of 181 topics** across eight categories.

### Coverage by level

| Level   | Covered | KEY covered | KEY gap | Threshold met?              |
| ------- | ------- | ----------- | ------- | --------------------------- |
| Trainee | 17 / 20 | 14 / 15     | 1       | 80% threshold met (17 ≥ 16) |
| Junior  | 29 / 42 | 23 / 25     | 2       | Not yet (29 < 34)           |
| Middle  | 25 / 60 | 20 / 25     | 5       | Not yet (25 < 48)           |
| Senior  | 17 / 59 | —           | —       | Not yet (17 < 30)           |

### Coverage by category

| Category                                | Covered | Total | %   |
| --------------------------------------- | ------- | ----- | --- |
| Language – JavaScript                   | 18      | 28    | 64% |
| Framework – React JS Web                | 13      | 22    | 59% |
| Libraries – React JS Web                | 9       | 24    | 38% |
| Markup and Styling                      | 20      | 24    | 83% |
| Code-Based Testing – React JS Web       | 11      | 12    | 92% |
| Design                                  | 9       | 13    | 69% |
| Development Environments – React JS Web | 8       | 15    | 53% |
| Cloud Environments                      | 0       | 4     | 0%  |
| Project Process                         | 0       | 10    | 0%  |
| Technical Process                       | 0       | 4     | 0%  |
| Expertise Contribution                  | 0       | 11    | 0%  |
| Generative AI                           | 0       | 14    | 0%  |

## Mandatory KEY topics not yet covered

These 4 KEY topics still require coverage through code PRs.

### Network / API — one full-stack app covers all three

- **[Language · Middle]** Sends and retrieves data through a network using language capabilities
- **[Libraries · Middle]** Troubleshoots network using tools and libraries
- **[Libraries · Middle]** Uses HTTP clients for API communication

### Browser storage — covered by saved searches feature

- ~~**[Libraries · Junior]** Simplifies access to browsers storage using tools or libraries~~ ✅
- ~~**[Language · Middle]** Accesses and stores data in a client-side storage~~ ✅

### Security

- **[Framework · Middle]** Applies security practices and approaches to protect application

### Internationalization — covered by i18n feature (react-i18next EN/ES)

- ~~**[Libraries · Middle]** Handles different types of localization and text processing~~ ✅

### Dependency management — covered by i18n feature (react-i18next + i18next install + pnpm audit)

- ~~**[Libraries · Middle]** Handles and resolves new versions of the packages~~ ✅

### Process / organizational — passed

- ~~**[Expertise Contribution · Trainee]** Passes onboarding into Engineering and Technology Expertise including specialisation or practice~~ ✅
- ~~**[Technical Process · Junior]** Estimates tasks based on requirements~~ ✅
- ~~**[Expertise Contribution · Junior]** Passes Performance Review according to the process definition and requirements~~ ✅
- ~~**[Technical Process · Middle]** Manages technical debt based on priorities~~ ✅

## Recommended next steps

### Features to close the remaining KEY gaps

1. ~~**Persist user preferences to localStorage** — implemented as saved searches feature~~ ✅

2. **Fetch data from a remote API with security hardening** (e.g. load topics
   from a JSON endpoint via `fetch`/Axios, add CSP headers, sanitize inputs).
   Covers 4 KEY topics:
   - [Language · Middle] Sends and retrieves data through a network using language capabilities
   - [Libraries · Middle] Troubleshoots network using tools and libraries
   - [Libraries · Middle] Uses HTTP clients for API communication
   - [Framework · Middle] Applies security practices and approaches to protect application

3. ~~**Add i18n support with a dependency upgrade workflow** — implemented with react-i18next EN/ES, pnpm audit~~ ✅

Feature 2 closes every remaining KEY gap at Trainee, Junior, and Middle levels.

### Broader threshold coverage

**Cloud Environments, Project Process, Generative AI, and Expertise
Contribution** categories (39 total topics) are all at 0% — picking up a
few easy ones from each is the fastest way to close the Senior 50%
threshold.
