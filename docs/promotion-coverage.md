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

### Senior threshold coverage (17 / 59 → 32 / 59)

11 of 23 Senior KEY topics remain uncovered. 3 of those cannot be covered
by FE features (client-server network protocols requires backend work;
the two Expertise Contribution topics require interviewer/reviewer
activity). The following 3 features cover the remaining 8 KEY topics plus
7 non-key topics, bringing Senior from 29% to 54% (threshold: 50%).

4. **Coverage analytics dashboard** (user-centric). Add an interactive
   dashboard view with bar charts by category, donut chart by seniority
   level, and threshold progress bars. Lazy-load the dashboard via
   `React.lazy()` + `Suspense`. Add meta tags and OpenGraph data for rich
   link previews on the deployed Netlify site.
   Covers 1 KEY + 2 non-key:
   - [Framework · Senior · KEY] Optimizes application with code-splitting techniques
   - [Libraries · Senior] Provides data visualizations through visualization tools
   - [Markup and Styling · Senior] Optimises applications for search engines

5. **Enhanced search with autocomplete and performance logging**
   (user-centric). Replace the linear search scan with a pre-built
   inverted index, run indexing and queries in a Web Worker, add
   autocomplete suggestions as the user types, and add a structured
   logging library with an opt-in debug mode toggle. Validate the
   experience with a Playwright E2E suite.
   Covers 1 KEY + 3 non-key:
   - [Libraries · Senior · KEY] Uses libraries for logging data
   - [Language · Senior] Manages and implements complex data structures
   - [Language · Senior] Synchronises concurrent operations by using language capabilities
   - [Code-Based Testing · Senior] Creates and organises end-to-end tests

6. **CI/CD pipeline and project process documentation** (dev/process).
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
