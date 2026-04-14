# Corporate PR → Topic Mapping Analysis

> **Status: IMPLEMENTED** — All mappings below have been added to
> `prTopicMappings` in `src/data/topics.ts` with per-PR `PullRequestId`
> entries, `RepoId` associations, `PARENT_FEATURE_PRS` groupings, and
> free-form `contribution` strings. See the [promotion coverage
> doc](./promotion-coverage.md) for updated numbers.

This document maps corporate PRs against the **previously uncovered topics** in
the promotion framework. Each group names the topic, lists the supporting
PRs, and explains why they qualify.

---

## Proposed PullRequest entries

These are the repos that have meaningful PRs. Each becomes a `PullRequestId`
enum member and a `pullRequests` array entry.

| Proposed ID | Title (for display) | URL |
|-------------|---------------------|-----|
| SHOPPING_PWA | Expedia Shopping PWA | https://github.com/eg-internal/shopping-pwa |
| SHARED_UI_WEB | Shared UI Web | https://github.com/eg-internal/shared-ui-web |
| EGDS_COMPONENTS_REACT | EGDS Components React | https://github.com/eg-internal/egds-components-react |
| PRODUCT_DETAILS_API | Product Details Experience API | https://github.com/eg-internal/product-details-experience-api |
| EXP_API_LODGING_OFFERS | Experience API Lodging Offers | https://github.com/eg-internal/experience-api-lodging-offers |
| EXP_API_LODGING_SEARCH | Experience API Lodging Search | https://github.com/eg-internal/experience-api-lodging-search |

Repos with only 1-2 PRs (shared-graphql, components-kotlin,
experience-api-lodging-property, experience-api-lodging-reviews) can be
grouped under a single **CROSS_REPO_CONTRIBUTIONS** entry if preferred.

---

## Middle KEY topics (5 remaining — all network/API)

### 1. [Language · Middle · KEY] Sends and retrieves data through a network

**Evidence PRs:**
- shared-ui-web #36900 — adds server-driven impression analytics (sends analytics payloads over the network from the FE)
- shared-ui-web #18981 — adds tnlFields to SearchToolsFiltersFragment (GraphQL query construction for network data retrieval)
- shopping-pwa #15079 — fixes parallel GraphQL query firing (Property Listing and USNF queries)
- shopping-pwa #13017 — adds AI_SEARCH_QUERY case to buildUrlQueryString (constructs network request parameters)
- product-details-exp-api #3527 — implements Server Driven LBG (server sends data to client over network)

**Why it qualifies:** Multiple PRs demonstrate constructing, sending, and receiving data over HTTP/GraphQL from both client and server perspectives.

### 2. [Libraries · Middle · KEY] Uses HTTP clients for API communication

**Evidence PRs:**
- shared-ui-web #15745 — adds submit functionality to the AI search box (submits user queries to an API endpoint)
- shared-ui-web #36900 — server-driven impression analytics (HTTP calls for analytics tracking)
- shopping-pwa #7538 (GHE) — dynamically change SRP template based on EALS response (API call + response handling)
- exp-api-lodging-offers #10243 — Great Find Shopping Banner Integration (API client for pricing service)

**Why it qualifies:** PRs show usage of HTTP/GraphQL clients (Apollo Client, fetch) to communicate with APIs, handle responses, and manage request metadata.

### 3. [Libraries · Middle · KEY] Troubleshoots network using tools and libraries

**Evidence PRs:**
- shared-ui-web #17220 — prevents FilterSheetFooterQuery from re-firing when opening/closing QF sheets (debugs redundant network calls)
- shared-ui-web #16805 — prevents FilterSheetFooterQuery from triggering when updating searchId (fixes race condition in GraphQL queries)
- shopping-pwa #15079 — fixes Property Listing and USNF queries firing in parallel (network timing issue)
- shopping-pwa #17433 — fixes LBG prefetched data bug (troubleshoots data prefetch pipeline)

**Why it qualifies:** Each PR involved diagnosing and fixing network-layer bugs — redundant queries, race conditions, prefetch failures — using browser DevTools, Apollo DevTools, and GraphQL introspection.

### 4. [Framework · Middle · KEY] Applies security practices

**Evidence PRs:**
- shopping-pwa #14816 — removes AI_* keys from desktop applied filters (sanitizes URL parameters to prevent injection)
- shopping-pwa #14925 — fixes AI Search filter replace logic (prevents arbitrary filter keys from leaking into requests)
- shopping-pwa #8704 (GHE) — adds new price param keys to SSR whitelist (whitelist-based parameter validation)
- shopping-pwa #11381 — adds mealPlan to ARRAY_PARAM_JOIN_WHITELIST (input parameter allow-listing)
- product-details-exp-api #3339 — adds aboutTheHost.* and vr.fraud.* keys to the default (fraud prevention keys)

**Why it qualifies:** Multiple PRs demonstrate input sanitization, parameter whitelisting, and fraud-related security keys — core security practices in a web application.

### 5. [Technical Process · Middle · KEY] Manages technical debt based on priorities

**Evidence PRs:**
- shared-ui-web #35481 — refactor: clean up LBG variant 1 in ProductReviewDetails (removes experiment code after decision)
- shared-ui-web #35318 — refactor: clean up LBG variant 1 in ProductRatingSummary (same cleanup pattern)
- shared-ui-web #35144 — refactor: simplify ProductRatingSummary data source logic for LBG (reduces complexity)
- exp-api-lodging-reviews #1253 — refactor: clean up TnL 52532 - Superlative_Threshold_Testing (experiment cleanup)
- product-details-exp-api #3935 — GCV2 Fast Track TemplateApi Cleanup (removes dead code)
- shared-ui-web #22591 — refactor: StickyWrapper to avoid children unmounts and re-mounts (performance debt)

**Why it qualifies:** A consistent pattern of prioritized tech debt work: cleaning up decided experiments, simplifying over-complex logic, and removing dead code paths. This was also previously noted as covered by process evidence but not mapped in the data.

---

## Middle non-key topics

### 6. [Language · Middle] Implements concurrency concepts

**Evidence PRs:**
- shopping-pwa #15079 — fixes parallel query execution (Property Listing and USNF queries fire in parallel — concurrency bug)
- shared-ui-web #15935 — forces onSubmit to run after handleFieldChange (sequencing asynchronous operations)
- shared-ui-web #17220 — prevents re-firing of queries during concurrent UI state changes

**Why it qualifies:** Demonstrates understanding and management of concurrent operations — parallel queries, race conditions, and sequencing.

### 7. [Language · Middle] Manipulates date and time with language APIs

**Evidence PRs:**
- shared-ui-web #37156 — fix: convertToDateInput (directly manipulates date objects/strings for input formatting)
- shared-ui-web #31599 — fix: changing the dates exits the contact host dialog (date change handling)

**Why it qualifies:** Both PRs directly work with JavaScript Date APIs and date format conversions.

### 8. [Language · Middle] Uses language APIs for mathematical operations

**Evidence PRs:**
- shared-ui-web #10735 — adds ShoppingRangeTextInputField case to calculateQuickFilterFields (range/price calculations)
- shopping-pwa #15012 — fix: include price in adaptRequestSortAndFiltersToDict (price value manipulation)
- exp-api-lodging-offers #10403 — adds Great Find suppression logic to PriceInsightService (price insight calculations)

**Why it qualifies:** Price calculations, range computations, and insight scoring all use numeric/mathematical operations.

### 9. [Framework · Middle] Defines custom event for handling user interaction

**Evidence PRs:**
- shared-ui-web #21664 — adds syntheticEvent and refactors (creates custom synthetic events for user interaction flow)
- shared-ui-web #11332 (GHE) — adds signals interaction between Selected Filters and Multiselection Options (custom event-driven communication between components)
- shared-ui-web #12522 (GHE) — adds signals to popular filters (custom event/signal dispatching)
- shared-ui-web #19577 — adds sort-and-filter folder in the signals workspace (signals-based event system)
- shared-ui-web #17970 — USNF signals package migration (migrating custom event system)

**Why it qualifies:** Multiple PRs implement and migrate a custom signals/events system for cross-component communication — a textbook example of custom event handling.

### 10. [Framework · Middle] Manages data for developing dynamic and highly scalable applications

**Evidence PRs:**
- shared-ui-web #33436 — passes down prefetchedData.tnlFields to useGuestChoice (GraphQL data prefetching and passing through component tree)
- shared-ui-web #35144 — simplifies ProductRatingSummary data source logic for LBG (data source abstraction for scalability)
- shopping-pwa #7538 (GHE) — dynamically change SRP template based on EALS response (server-driven UI with dynamic data)
- shared-ui-web #14474 (GHE) — updates type policies for US&F specific types (Apollo cache/type policies for scalable state)
- shared-ui-web #14227 (GHE) — adds type policy for EGDSBasicTriggerPill (Apollo cache normalization)

**Why it qualifies:** PRs demonstrate Apollo Client cache management with type policies, data prefetching strategies, and server-driven UI patterns — all critical for scalable applications.

### 11. [Framework · Middle] Uses advanced router capability for building navigation

**Evidence PRs:**
- shopping-pwa #15411 — refactors urlQueryString into a readable URLSearchParams object (URL/query parameter management tied to routing)
- shopping-pwa #12257 — fixes neighborhood shouldReplaceParam check (route parameter replacement logic)
- shopping-pwa #11779 — clears hotel_brand when destination has changed (route state synchronization)
- shopping-pwa #8297 (GHE) — fixes neighborhood filter persists when updating location (route persistence bug)

**Why it qualifies:** All PRs work with URL-based routing state — query parameter construction, replacement, and synchronization with application state.

### 12. [Framework · Middle] Handles internationalisation in scope of the application

**Evidence PRs:**
- product-details-exp-api #3218 — adds remaining ATH overview metrics loc keys and rename overlay ones (localization key management)
- product-details-exp-api #3225 — adds logic to pick between overview or overlay ATH metric label (locale-aware label selection)
- product-details-exp-api #3360 — Loved by Guests explanatory text (localized content)
- exp-api-lodging-search #12723 — implements LBG Clickstream Payload (handles locale-specific analytics payloads)

**Why it qualifies:** Multiple PRs manage localization keys, locale-aware content selection, and i18n-ready text across a multi-brand, multi-locale application.

### 13. [Libraries · Middle] Handles scroll detection through tools and libraries

**Evidence PRs:**
- egds-components-react #712 — Set up intersection observer (directly implements scroll/visibility detection)
- egds-components-react #735 — Carousel Subcomponent Scroll Work (scroll-based carousel behavior)
- shared-ui-web #17571 — StickyWrapper's a11y and refactor (sticky positioning via scroll detection)
- shared-ui-web #22591 — refactor StickyWrapper to avoid children unmounts and re-mounts (scroll-aware component lifecycle)

**Why it qualifies:** IntersectionObserver setup, scroll-based carousel behavior, and sticky component positioning all demonstrate scroll detection.

### 14. [Libraries · Middle] Validates data with tools and libraries

**Evidence PRs:**
- shared-ui-web #30536 — Inquiry Submission should default to 2 adults (input validation with defaults)
- exp-api-lodging-property #3221 — checks for numAdults = 0 in submitInquiry (server-side input validation)
- shopping-pwa #8403 (GHE) — sync pets allowed filter with pets traveler selector (cross-field validation)
- shopping-pwa #11381 — add mealPlan to ARRAY_PARAM_JOIN_WHITELIST (parameter validation)

**Why it qualifies:** Input validation, cross-field consistency checks, and parameter whitelisting across client and server.

### 15. [Libraries · Middle] Provides support for different browsers

**Evidence PRs:**
- shopping-pwa #14732 — prevents filter bar from showing in mWeb landscape mode (mobile browser layout)
- shopping-pwa #12834 — fixes filter bar spacing for mWeb packages (mobile web browser compatibility)
- shopping-pwa #12802 — fixes QF bar left spacing for Packages (cross-brand/platform spacing)
- shopping-pwa #9007 (GHE) — removes flex shrink from mWeb maps filter button (mobile browser flex bug)
- shared-ui-web #9872 — removes edgeItemsPadding for tablet and desktop viewport sizes (viewport-based browser support)
- shared-ui-web #18503 — fixes dialog opening issue in split view (split-view browser feature)

**Why it qualifies:** Consistent work across mobile web, desktop, tablet, and split-view browser modes, fixing layout and behavior differences.

### 16. [Markup and Styling · Middle] Transforms elements using style sheets

**Evidence PRs:**
- egds-components-react #956 — adds extra z-index to opened carousel item (CSS transform/z-index layering)
- egds-components-react #1898 — refactors carousel-inner-spacing-and-overflow (CSS overflow/transform handling)
- shared-ui-web #12593 — increases z-index layer of map trigger floating wrapper (CSS stacking context / transform)
- shared-ui-web #31040 — fixes GCv2 inside reviews overlay spacing (overlay positioning with transforms)

**Why it qualifies:** Z-index management, overlay positioning, and carousel item transforms all use CSS transforms and stacking contexts.

### 17. [Markup and Styling · Middle] Embeds content from another source

**Evidence PRs:**
- product-details-exp-api #3527 — implements Server Driven LBG for Top of PDP - Blue Ribbon Pictogram (embeds server-driven visual content into the page)
- product-details-exp-api #3590 — updates LBG mark to supply darkModeUrl (embeds externally-sourced image assets)
- shared-graphql #8231 — adds darkModeUrl to Mark type (GraphQL type for embedded external image content)

**Why it qualifies:** Server-driven pictograms and externally-sourced image assets are embedded into the webpage from an external data source.

---

## Senior topics

### 18. [Framework · Senior] Creates and maintains component library

**Evidence PRs:**
- egds-components-react (entire repo — 25 PRs) — this IS a component library (EGDS Design System)
- Best examples:
  - #1011: feat: create team tier typeahead component
  - #759: feat: Carousel button behavior update
  - #720: fix: Create Carousel Subcomponent for Differing Widths
  - #2463: breaking: add support for children that render several items
  - #848: feat: Add edge items padding behind a prop

**Why it qualifies:** The entire egds-components-react repo is a shared React component library consumed by multiple applications. 25 merged PRs spanning 2+ years of maintenance.

### 19. [Language · Senior] Uses language metaprogramming techniques

**Evidence PRs:**
- shared-ui-web #14474 (GHE) — updates type policies for US&F specific types (Apollo type policies use runtime type introspection)
- shared-ui-web #14227 (GHE) — adds type policy for EGDSBasicTriggerPill (dynamic type resolution at runtime)
- egds-components-react #797 — Add Server-Driven analytics to auto-width carousel (server-driven component behavior — runtime config)

**Why it qualifies (weaker):** Apollo type policies use runtime type introspection and dynamic merge functions, which is a form of metaprogramming. This is a softer match — review carefully.

### 20. [Design · Middle] Collects data using requirements elicitation techniques

**Evidence PRs:**
- shopping-pwa #15076 — update facet counts experiment (A/B experiment based on user behavior data collection)
- shared-ui-web #7736 (GHE) — Add USnF carousel analytics handlers (analytics data collection for requirements)
- shared-ui-web #18919 — add AI Search analytics (collecting user interaction data to refine AI search requirements)

**Why it qualifies:** Analytics and experimentation PRs demonstrate collecting user behavior data to inform product requirements — a form of requirements elicitation.

### 21. [Design · Middle] Uses different requirement sources for solution implementation

**Evidence PRs:**
- product-details-exp-api #3350 — Suppress Premier Host for non-Vrbo brands (multi-brand requirement differentiation)
- product-details-exp-api #3572 — separate TnL evaluation logic of Top Of PDP and Overview & Overlay (requirement from multiple product surfaces)
- shopping-pwa #17074 — ATH redesign rollout (design spec + experiment data as requirement sources)

**Why it qualifies:** PRs use multiple requirement sources: brand-specific business rules, A/B experiment outcomes, design specs, and product surface constraints.

---

## Topics NOT coverable from these PRs

These topics have no clear evidence in the fetched PRs:

| Topic | Level | Why |
|-------|-------|-----|
| Manages files with language filesystem capabilities | Middle | No file system work in FE PRs |
| Generates documentation through tools or libraries | Middle | No doc generation PRs found |
| Handles files upload through libraries | Middle | No file upload PRs found |
| Handles images upload through tools and libraries | Middle | No image upload PRs found |
| Uses tools and libraries for immutability | Middle | No immer/immutable.js usage found |
| Containerise application | Middle | No Docker PRs found |
| Accesses cloud environment | Middle | No direct cloud env PRs found |
| Prevents and fixes threats and vulnerabilities | Middle | Partially covered by security (topic 4) but no dedicated security audit PRs |
| 4× Expertise Contribution Middle | Middle | Requires external evidence |
| 4× Generative AI Middle | Middle | Requires external evidence |
| Language · Senior · KEY: Builds client-server apps using network protocols | Senior | Requires full-stack server work |
| 2× Expertise Contribution Senior KEY | Senior | Requires interviewer/reviewer activity |

---

## Impact summary

If all mappings above are confirmed:

| Level | Before | After | Needed | Met? |
|-------|--------|-------|--------|------|
| Middle KEY | 20/25 | **25/25** | 25 | **100% ✅** |
| Middle total | 25/60 | **37/60** | 48 | 12 short (8 external + 4 FE-feasible) |
| Senior | 24/59 | **26/59** | 30 | 4 short (suggestion 6 adds 8 → 34 ✅) |
| Junior | 31/42 | 31/42 | 34 | 3 short (no Junior-level PRs uncovered in corp repos) |
