# Corporate PR Inventory

Fetched on 2026-04-14 via `gh pr list` (merged + open non-draft).
GHE repos (github.expedia.biz) are mirrors of the github.com ones — only
the earliest (pre-migration) PRs that exist exclusively on GHE are listed
separately.

---

## Summary

| Repo                                        | Platform           | Non-chore PRs | Chore PRs | Total   |
| ------------------------------------------- | ------------------ | ------------- | --------- | ------- |
| eg-internal/shopping-pwa                    | github.com         | 18            | 1         | 19      |
| shopping-pwa (GHE-only)                     | github.expedia.biz | 7             | 0         | 7       |
| eg-internal/shared-ui-web                   | github.com         | 64            | 4         | 68      |
| shared-ui-web (GHE-only)                    | github.expedia.biz | 20            | 2         | 22      |
| eg-internal/egds-components-react           | github.com         | 23            | 1         | 24      |
| eg-internal/experience-api-lodging-property | github.com         | 1             | 0         | 1       |
| eg-internal/experience-api-lodging-search   | github.com         | 1             | 0         | 1       |
| eg-internal/experience-api-lodging-offers   | github.com         | 2             | 0         | 2       |
| eg-internal/experience-api-lodging-reviews  | github.com         | 1             | 0         | 1       |
| eg-internal/product-details-experience-api  | github.com         | 13            | 2         | 15      |
| eg-internal/shared-graphql                  | github.com         | 2             | 0         | 2       |
| eg-internal/components-kotlin               | github.com         | 1             | 0         | 1       |
| **Total**                                   |                    | **153**       | **10**    | **163** |

---

## shopping-pwa (eg-internal + Brand-Expedia GHE-only)

### Features & fixes (non-chore)

| #        | Title                                                             | Date    |
| -------- | ----------------------------------------------------------------- | ------- |
| 17074    | feat: ATH redesign rollout                                        | 2025-10 |
| 15411    | refactor: urlQueryString into a readable URLSearchParams object   | 2025-05 |
| 15298    | fix: deselecting a filter does not refresh the modal              | 2025-04 |
| 15079    | fix: Property Listing and USNF queries fire parallely - USNF-2548 | 2025-03 |
| 15012    | fix: include price in adaptRequestSortAndFiltersToDict            | 2025-03 |
| 14925    | fix: AI Search filter replace logic                               | 2025-02 |
| 14816    | fix: desktop applied filters to remove AI\_\* keys                | 2025-02 |
| 14732    | fix: prevent filter bar from showing in mWeb landscape mode       | 2025-02 |
| 14559    | fix: removable pills not always getting removed                   | 2025-01 |
| 14419    | fix: remove carouselEdgeItemsPadding                              | 2025-01 |
| 13883    | fix: feature tests for filter bar                                 | 2024-10 |
| 13017    | feat: add AI_SEARCH_QUERY case to buildUrlQueryString             | 2024-08 |
| 12834    | fix: filter bar spacing for mWeb packages                         | 2024-07 |
| 12802    | fix: QF bar left spacing for Packages                             | 2024-06 |
| 12257    | fix: neighborhood shouldReplaceParam check                        | 2024-05 |
| 11779    | fix: clear hotel_brand when destination has changed               | 2024-03 |
| 11420    | fix: add filterBarSpacing as a prop for filterBarSpacing          | 2024-02 |
| 11381    | fix: add mealPlan to ARRAY_PARAM_JOIN_WHITELIST                   | 2024-01 |
| GHE 9007 | fix: remove flex shrink from mWeb maps filter button              | 2023-04 |
| GHE 8913 | feat: add lightweight query inputs                                | 2023-04 |
| GHE 8704 | fix: add new price param keys to SSR whitelist                    | 2023-03 |
| GHE 8403 | fix: sync pets allowed filter with pets traveler selector         | 2023-01 |
| GHE 8297 | fix: neighborhood filter persists when updating location bug      | 2022-12 |
| GHE 8122 | fix: disable pill while query is loading                          | 2022-11 |
| GHE 7538 | feat: Dynamically change SRP template based on EALS response      | 2022-07 |

### Other chores

| #     | Title                                 | Date    |
| ----- | ------------------------------------- | ------- |
| 15076 | chore: update facet counts experiment | 2025-03 |

---

## shared-ui-web (eg-internal + Expedia-UI GHE-only)

### Features & fixes (non-chore)

| #         | Title                                                                            | Date    |
| --------- | -------------------------------------------------------------------------------- | ------- |
| 37156     | fix: convertToDateInput                                                          | 2026-03 |
| 36900     | feat: add server-driven impression analytics for SRP LBG and clean up client-dri | 2026-03 |
| 35481     | refactor: clean up LBG variant 1 in ProductReviewDetails                         | 2026-02 |
| 35318     | refactor: clean up LBG variant 1 in ProductRatingSummary                         | 2026-02 |
| 35144     | refactor: simplify ProductRatingSummary data source logic for LBG                | 2026-02 |
| 33436     | fix: pass down prefetchedData.tnlFields to useGuestChoice                        | 2025-11 |
| 33051     | fix: reorder product rating summary rendering logic                              | 2025-11 |
| 31946     | feat: add new GCv3 pictogram                                                     | 2025-10 |
| 31860     | feat: add a11y to ShoppingProductHeader                                          | 2025-10 |
| 31599     | fix: changing the dates exits the contact host dialog bug                        | 2025-09 |
| 31486     | feat: add a11y label to highlightScoreCard's item title                          | 2025-09 |
| 31180     | fix: close inquiry success message - Done button                                 | 2025-09 |
| 31040     | fix: GCv2 inside reviews overlay spacing                                         | 2025-09 |
| 30536     | fix: Inquiry Submission should default to 2 adults                               | 2025-09 |
| 30427     | fix: add null action handling in AboutTheHostSummary                             | 2025-08 |
| 24809     | refactor: modal opening and closing logic                                        | 2025-04 |
| 23673     | fix: update textInputValue when tnlFields changes                                | 2025-03 |
| 22700     | fix: submit button margin                                                        | 2025-02 |
| 22591     | refactor: StickyWrapper to avoid children unmounts and re-mounts                 | 2025-02 |
| 22585     | refactor: revert #22097                                                          | 2025-02 |
| 22541     | fix: remove extra margin from quick filters                                      | 2025-02 |
| 22345     | fix: playback AI Search query in text input                                      | 2025-02 |
| 22097     | refactor: StickyWrapper to avoid children unmounts and re-mounts                 | 2025-02 |
| 21664     | fix: add syntheticEvent and refactor                                             | 2025-01 |
| 21244     | fix: remove scrim from AllFilterSheetFooter and update spacing                   | 2025-01 |
| 21200     | fix: suggestion item a11y                                                        | 2024-12 |
| 21117     | feat: convert quickAccessPillsandSheets into a component and implement the new c | 2025-01 |
| 20319     | fix: add AI search beta badge                                                    | 2024-11 |
| 20064     | fix: BASIC_FILTER case bug                                                       | 2024-11 |
| 19577     | feat: add sort-and-filter folder in the signals workspace                        | 2024-11 |
| 18981     | fix: add tnlFields to SearchToolsFiltersFragment                                 | 2024-10 |
| 18919     | fix: add AI Search analytics                                                     | 2024-10 |
| 18503     | fix: dialog opening issue in split view                                          | 2024-10 |
| 17970     | feat: USNF signals package migration                                             | 2024-11 |
| 17882     | fix: overflowing dialog bug                                                      | 2024-09 |
| 17623     | fix: add primaryPillRef                                                          | 2024-09 |
| 17571     | fix: StickyWrapper's a11y and refactor                                           | 2024-09 |
| 17220     | fix: prevent FilterSheetFooterQuery re-fires when opening and closing QF sheets  | 2024-08 |
| 17133     | fix: prevent FilterSheetFooterQuery re-fires when opening and closing QF sheets  | 2024-08 |
| 16853     | fix: remove whitespace from selection and multiselection                         | 2024-08 |
| 16805     | fix: prevent FilterSheetFooterQuery from triggering when updating searchId       | 2024-08 |
| 16482     | fix: add accessibilityLabel to TextInputFieldTypeahead                           | 2024-08 |
| 16154     | fix: Revert 'fix: retail/sort-and-filter EGDS migration (#15653)'                | 2024-08 |
| 16152     | fix: EGDSRadioButtonGroup's legend                                               | 2024-08 |
| 15935     | fix: force onSubmit to run after handleFieldChange                               | 2024-08 |
| 15745     | feat: add submit functionality to the AI search box AND suggestions              | 2024-07 |
| 15623     | fix: spacing around AI search input                                              | 2024-07 |
| GHE 15326 | feat: add new lightweight query                                                  | 2023-04 |
| 15271     | fix: AI search dialog toolbar                                                    | 2024-07 |
| 15085     | fix: popover sheet max height                                                    | 2024-07 |
| 14828     | fix: lift up carouselEdgeItemsPadding for LodgingSortAndFilters                  | 2024-06 |
| 14600     | feat: create sheet component to sync with button                                 | 2024-06 |
| GHE 14568 | fix: add logic to revert resetFilters back to false after being set to true      | 2023-03 |
| 14493     | feat: Create wrapper for list and input components                               | 2024-06 |
| GHE 14474 | fix: update type policies for US&F specific types                                | 2023-03 |
| GHE 14409 | fix: add screenreader-only heading to dropdown field                             | 2023-03 |
| GHE 14370 | fix: shift focus to next focusable element when the user removes the last filter | 2023-03 |
| GHE 14227 | fix: add type policy for EGDSBasicTriggerPill                                    | 2023-02 |
| GHE 13546 | fix: quick filter popover sheets not closing correctly                           | 2023-02 |
| GHE 13267 | fix: sync pets allowed filter with pets traveler selector                        | 2023-01 |
| 12593     | fix: increase z-index layer of the map trigger floating wrapper                  | 2024-05 |
| GHE 12522 | feat: add signals to popular filters                                             | 2022-12 |
| 12406     | fix: enable keepSectionExpanded for LodgingSortAndFilters                        | 2024-04 |
| 12110     | fix(sort-and-filter): remove autoPosition from QF popover sheets                 | 2024-04 |
| GHE 11773 | fix: disable pill while query is loading                                         | 2022-11 |
| GHE 11654 | fix: Filters not persisting when removed from the selected filters field more th | 2022-11 |
| GHE 11332 | feat: add signals interaction between Selected Filters and Multiselection Option | 2022-11 |
| GHE 11173 | feat: add selected filters field                                                 | 2022-10 |
| 10735     | fix(sort-and-filter): add ShoppingRangeTextInputField case to calculateQuickFilt | 2024-03 |
| 10645     | fix: implement new carousel prop - isPopoverOpenList                             | 2024-03 |
| 10418     | fix: Add onClearFilters to FlightsSortAndFilters                                 | 2024-03 |
| 9872      | fix: remove edgeItemsPadding for tablet and desktop viewport sizes               | 2024-02 |
| GHE 9518  | fix: usf criteria inputs to consider comma separated query params                | 2022-08 |
| 9372      | fix: refactor filterBarSpacing as a LodgingSortAndFilters prop                   | 2024-01 |
| GHE 9215  | feat: persist filter selection from last search when clicking outside the dialog | 2022-08 |
| 9109      | fix(sort-and-filter): spacing between edge of screen and the filter bar          | 2024-01 |
| GHE 9015  | fix: USF FILTER_BAR view pill state and undesired border                         | 2022-08 |
| GHE 8484  | feat: add SearchToolsFilterBar component                                         | 2022-07 |
| 8341      | fix: price filter header missing on Vrbo web                                     | 2023-12 |
| 7736      | feat: Add USnF carousel analytics handlers                                       | 2023-11 |
| 7315      | feat: Integrate EGDSTeamCarousel into SearchToolsFilterBar                       | 2023-11 |
| GHE 7191  | fix: change updateSearchAndFilters argument                                      | 2022-05 |
| GHE 6631  | feat: add persistent pills component                                             | 2022-04 |
| GHE 5329  | feat: add FE work for impressionAnalytics                                        | 2022-02 |

### Other chores

| #         | Title                                                                            | Date    |
| --------- | -------------------------------------------------------------------------------- | ------- |
| 23551     | chore: update facet counts experiment                                            | 2025-03 |
| 16673     | chore: update AI Search suggestion list                                          | 2024-08 |
| GHE 14918 | chore: integrate FilterSheetFooter with SearchToolsFilterBar                     | 2023-03 |
| GHE 14694 | chore: add FilterSheetFooter component                                           | 2023-03 |
| 7517      | chore: Migrate unit tests to component tests for @shared-ui/sort-and-filter-inte | 2023-11 |
| 5726      | chore: Add exposure logging to Default Pricing Filter experiment                 | 2023-09 |

---

## egds-components-react

| #    | Title                                                                            | Date    |
| ---- | -------------------------------------------------------------------------------- | ------- |
| 2463 | breaking(universal-shopping): add support for children that render several items | 2025-01 |
| 2326 | fix(universal-shopping): replace aria-hidden with data-hidden                    | 2024-11 |
| 1945 | fix(universal-shopping): downgrade throttle-debounce                             | 2024-09 |
| 1898 | refactor(universal-shopping): carousel-inner-spacing-and-overflow                | 2024-09 |
| 1845 | refactor(universal-shopping): carousel-inner-spacing-and-overflow                | 2024-09 |
| 1807 | fix(universal-shopping): carousel wrapper tab index and item aria label          | 2024-09 |
| 1584 | fix(core): EGDSTypeahead clear button label                                      | 2024-08 |
| 1385 | fix(universal-shopping): filter out null children for the carousel               | 2024-06 |
| 1378 | chore(universal-shopping): remove team typeahead                                 | 2024-06 |
| 1024 | fix(universal-shopping): rename handleClear to onTextInputClear, add onSelection | 2024-04 |
| 1023 | fix(universal-shopping): convert onDismiss to onSubmit, add new onDismiss        | 2024-04 |
| 1011 | feat(universal-shopping): create team tier typeahead component                   | 2024-04 |
| 956  | feat(universal-shopping): add extra z-index to opened carousel item              | 2024-03 |
| 871  | fix(lodging): copy over uitk-react-slider@5.4.12                                 | 2024-01 |
| 869  | fix(universal-shopping): Refactor edgeItemsPadding to accept multiple values     | 2024-01 |
| 862  | fix(universal-shopping): Modify base CSS class name                              | 2024-01 |
| 848  | feat(universal-shopping): Add edge items padding behind a prop                   | 2024-01 |
| 797  | feat(universal-shopping): Add Server-Driven analytics to auto-width carousel     | 2023-11 |
| 771  | fix(universal-shopping): Typings exports                                         | 2023-11 |
| 761  | fix(universal-shopping): Exports                                                 | 2023-11 |
| 759  | feat(universal-shopping): Carousel button behavior update                        | 2023-11 |
| 735  | fix(universal-shopping): Carousel Subcomponent Scroll Work                       | 2023-10 |
| 720  | fix(universal-shopping): Create Carousel Subcomponent for Differing Widths       | 2023-10 |
| 712  | Set up intersection observer                                                     | 2023-10 |

---

## Backend / API repos

### product-details-experience-api (15 PRs)

| #    | Title                                                                            | Date    |
| ---- | -------------------------------------------------------------------------------- | ------- |
| 4037 | chore: cleanup ATH minAppVersion (open)                                          | 2026-04 |
| 3935 | chore: GCV2 Fast Track TemplateApi Cleanup                                       | 2026-03 |
| 3779 | fix: remove tnlFields feature gate null condition                                | 2026-02 |
| 3603 | fix: add MinAppVersion check to LBG tnlFields                                    | 2026-01 |
| 3595 | fix: update light mode LBG mark                                                  | 2026-01 |
| 3590 | feat: update LBG mark to supply darkModeUrl                                      | 2026-01 |
| 3572 | fix: separate the TnL evaluation logic of Top Of PDP and Overview & Overlay - Lo | 2025-12 |
| 3571 | fix: unknown-system-event-errors                                                 | 2025-12 |
| 3527 | feat: Implement Server Driven LBG for Top of PDP - Blue Ribbon Pictogram         | 2025-12 |
| 3360 | Feature: Loved by Guests explanatory text                                        | 2025-10 |
| 3350 | Feature: Suppress Premier Host for non-Vrbo brands                               | 2025-10 |
| 3339 | Feature: add aboutTheHost._ and vr.fraud._ keys to the default                   | 2025-10 |
| 3285 | Feature: add a11y label to shoppingProductTitle as ShoppingProductHeader         | 2025-10 |
| 3225 | Feature: add logic to pick between overview or overlay ATH metric label          | 2025-09 |
| 3218 | Feature: add remaining ATH overview metrics loc keys and rename overlay ones     | 2025-09 |

### experience-api-lodging-offers (2 PRs)

| #     | Title                                                                      | Date    |
| ----- | -------------------------------------------------------------------------- | ------- |
| 10403 | VRDIFF-5362: feat: add Great Find suppression logic to PriceInsightService | 2026-03 |
| 10243 | VRDIFF-3814: feat: Great Find Shopping Banner Integration                  | 2026-03 |

### experience-api-lodging-search (1 PR)

| #     | Title                                   | Date    |
| ----- | --------------------------------------- | ------- |
| 12723 | feat: Implement LBG Clickstream Payload | 2026-02 |

### experience-api-lodging-property (1 PR)

| #    | Title                                          | Date    |
| ---- | ---------------------------------------------- | ------- |
| 3221 | feat: check for numAdults = 0 in submitInquiry | 2025-09 |

### experience-api-lodging-reviews (1 PR)

| #    | Title                                                        | Date    |
| ---- | ------------------------------------------------------------ | ------- |
| 1253 | refactor: clean up TnL 52532 - Superlative_Threshold_Testing | 2025-08 |

### shared-graphql (2 PRs)

| #    | Title                                                          | Date    |
| ---- | -------------------------------------------------------------- | ------- |
| 8231 | feat: add darkModeUrl to Mark type for Loved By Guests feature | 2025-12 |
| 7664 | feat: add accessibility to ShoppingProductHeader               | 2025-09 |

### components-kotlin (1 PR)

| #   | Title                                                          | Date    |
| --- | -------------------------------------------------------------- | ------- |
| 853 | feat: add darkModeUrl to Mark type for Loved By Guests feature | 2025-12 |
