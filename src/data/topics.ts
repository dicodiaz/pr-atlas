import {
  ParentFeature,
  PullRequestId,
  RepoId,
  TopicId,
  type PrTopicMappings,
  type PullRequest,
  type Repo,
  type Topic,
  type TopicPr,
} from '@/types/topics'

import { sections, type Section } from '@/data/sections'

// ---------------------------------------------------------------------------
// Repos
// ---------------------------------------------------------------------------

const repos: Repo[] = [
  {
    id: RepoId.PR_ATLAS,
    name: 'PR Atlas',
    url: 'https://github.com/dicodiaz/pr-atlas',
  },
  {
    id: RepoId.EXTERNAL_EVIDENCE,
    name: 'External evidence',
    url: '#',
  },
  {
    id: RepoId.SHOPPING_PWA,
    name: 'Shopping PWA',
    url: 'https://github.com/eg-internal/shopping-pwa',
  },
  {
    id: RepoId.SHARED_UI_WEB,
    name: 'Shared UI Web',
    url: 'https://github.com/eg-internal/shared-ui-web',
  },
  {
    id: RepoId.EGDS_COMPONENTS_REACT,
    name: 'EGDS Components React',
    url: 'https://github.com/eg-internal/egds-components-react',
  },
  {
    id: RepoId.PRODUCT_DETAILS_API,
    name: 'Product Details API',
    url: 'https://github.com/eg-internal/product-details-experience-api',
  },
  {
    id: RepoId.EXP_API_LODGING_OFFERS,
    name: 'Lodging Offers API',
    url: 'https://github.com/eg-internal/experience-api-lodging-offers',
  },
  {
    id: RepoId.EXP_API_LODGING_SEARCH,
    name: 'Lodging Search API',
    url: 'https://github.com/eg-internal/experience-api-lodging-search',
  },
  {
    id: RepoId.EXP_API_LODGING_REVIEWS,
    name: 'Lodging Reviews API',
    url: 'https://github.com/eg-internal/experience-api-lodging-reviews',
  },
  {
    id: RepoId.EXP_API_LODGING_PROPERTY,
    name: 'Lodging Property API',
    url: 'https://github.com/eg-internal/experience-api-lodging-property',
  },
  {
    id: RepoId.SHARED_GRAPHQL,
    name: 'Shared GraphQL',
    url: 'https://github.com/eg-internal/shared-graphql',
  },
  {
    id: RepoId.COMPONENTS_KOTLIN,
    name: 'Components Kotlin',
    url: 'https://github.com/eg-internal/components-kotlin',
  },
  {
    id: RepoId.EXP_API_LODGING_AVAILABILITY,
    name: 'Lodging Availability API',
    url: 'https://github.com/eg-internal/experience-api-lodging-availability',
  },
  {
    id: RepoId.BEX_API_SHARED_TYPES,
    name: 'BEX API Shared Types',
    url: 'https://github.com/eg-internal/bex-api-shared-types',
  },
]

// ---------------------------------------------------------------------------
// Pull requests
// ---------------------------------------------------------------------------

const pullRequests: PullRequest[] = [
  {
    id: PullRequestId.PR_ATLAS,
    repoId: RepoId.PR_ATLAS,
    title: 'PR Atlas',
    url: 'https://github.com/dicodiaz/pr-atlas',
  },
  {
    id: PullRequestId.PROCESS_EVIDENCE,
    repoId: RepoId.EXTERNAL_EVIDENCE,
    title: 'Process evidence (pending confirmation)',
    url: '#',
  },

  // shopping-pwa
  {
    id: PullRequestId.SHOPPING_PWA_18517,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump retail-lodging-offers-shopping-banners@1.1.4',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/18517',
  },
  {
    id: PullRequestId.SHOPPING_PWA_18045,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-product-review-details@4.26.3',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/18045',
  },
  {
    id: PullRequestId.SHOPPING_PWA_18031,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-product-rating-summary@6.24.3',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/18031',
  },
  {
    id: PullRequestId.SHOPPING_PWA_17976,
    repoId: RepoId.SHOPPING_PWA,
    title:
      'chore: version bump @shared-ui/retail-product-rating-summary@6.23.6',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/17976',
  },
  {
    id: PullRequestId.SHOPPING_PWA_17433,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: LBG prefetched data bug',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/17433',
  },
  {
    id: PullRequestId.SHOPPING_PWA_17414,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-product-rating-summary@6.19.1',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/17414',
  },
  {
    id: PullRequestId.SHOPPING_PWA_17090,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: add TnL and bump retail-product-rating-summary@6.18.0',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/17090',
  },
  {
    id: PullRequestId.SHOPPING_PWA_17074,
    repoId: RepoId.SHOPPING_PWA,
    title: 'feat: ATH redesign rollout',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/17074',
  },
  {
    id: PullRequestId.SHOPPING_PWA_17056,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-product-about-the-host@3.18.0',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/17056',
  },
  {
    id: PullRequestId.SHOPPING_PWA_16959,
    repoId: RepoId.SHOPPING_PWA,
    title:
      'chore: version bump @shared-ui/retail-product-about-the-host@3.16.0',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/16959',
  },
  {
    id: PullRequestId.SHOPPING_PWA_16740,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-lodging-contact-host@9.26.2',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/16740',
  },
  {
    id: PullRequestId.SHOPPING_PWA_16696,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-product-about-the-host',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/16696',
  },
  {
    id: PullRequestId.SHOPPING_PWA_15437,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-sort-and-filter-lodging@8.1.2',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/15437',
  },
  {
    id: PullRequestId.SHOPPING_PWA_15411,
    repoId: RepoId.SHOPPING_PWA,
    title: 'refactor: urlQueryString into a readable URLSearchParams object',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/15411',
  },
  {
    id: PullRequestId.SHOPPING_PWA_15298,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: deselecting a filter does not refresh the modal',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/15298',
  },
  {
    id: PullRequestId.SHOPPING_PWA_15079,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: Property Listing and USNF queries fire parallely - USNF-2548',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/15079',
  },
  {
    id: PullRequestId.SHOPPING_PWA_15076,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: update facet counts experiment',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/15076',
  },
  {
    id: PullRequestId.SHOPPING_PWA_15057,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-sort-and-filter-lodging@7.6.3',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/15057',
  },
  {
    id: PullRequestId.SHOPPING_PWA_15012,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: include price in adaptRequestSortAndFiltersToDict',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/15012',
  },
  {
    id: PullRequestId.SHOPPING_PWA_14925,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: AI Search filter replace logic',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/14925',
  },
  {
    id: PullRequestId.SHOPPING_PWA_14877,
    repoId: RepoId.SHOPPING_PWA,
    title:
      'chore: version bump @shared-ui/retail-sort-and-filter-lodging@7.5.9',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/14877',
  },
  {
    id: PullRequestId.SHOPPING_PWA_14841,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-sort-and-filter-lodging@7.5.4',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/14841',
  },
  {
    id: PullRequestId.SHOPPING_PWA_14816,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: desktop applied filters to remove AI_* keys',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/14816',
  },
  {
    id: PullRequestId.SHOPPING_PWA_14732,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: prevent filter bar from showing in mWeb landscape mode',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/14732',
  },
  {
    id: PullRequestId.SHOPPING_PWA_14559,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: removable pills not always getting removed',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/14559',
  },
  {
    id: PullRequestId.SHOPPING_PWA_14419,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: remove carouselEdgeItemsPadding',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/14419',
  },
  {
    id: PullRequestId.SHOPPING_PWA_14260,
    repoId: RepoId.SHOPPING_PWA,
    title:
      'chore: bump retail-sort-and-filter-lodging and react-universal-shopping',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/14260',
  },
  {
    id: PullRequestId.SHOPPING_PWA_14162,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-sort-and-filter-lodging',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/14162',
  },
  {
    id: PullRequestId.SHOPPING_PWA_13883,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: feature tests for filter bar',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/13883',
  },
  {
    id: PullRequestId.SHOPPING_PWA_13761,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-sort-and-filter-lodging@3.20.6',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/13761',
  },
  {
    id: PullRequestId.SHOPPING_PWA_13631,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump retail-sort-and-filter-lodging',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/13631',
  },
  {
    id: PullRequestId.SHOPPING_PWA_13377,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-sort-and-filter-lodging@3.18.15',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/13377',
  },
  {
    id: PullRequestId.SHOPPING_PWA_13142,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-sort-and-filter-lodging@3.18.6',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/13142',
  },
  {
    id: PullRequestId.SHOPPING_PWA_13135,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/retail-sort-and-filter-lodging@3.18.5',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/13135',
  },
  {
    id: PullRequestId.SHOPPING_PWA_13017,
    repoId: RepoId.SHOPPING_PWA,
    title: 'feat: add AI_SEARCH_QUERY case to buildUrlQueryString',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/13017',
  },
  {
    id: PullRequestId.SHOPPING_PWA_12865,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: prevent filter sheet from overflowing',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/12865',
  },
  {
    id: PullRequestId.SHOPPING_PWA_12834,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: filter bar spacing for mWeb packages',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/12834',
  },
  {
    id: PullRequestId.SHOPPING_PWA_12802,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: QF bar left spacing for Packages',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/12802',
  },
  {
    id: PullRequestId.SHOPPING_PWA_12294,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/lodging-property-search@21.4.1',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/12294',
  },
  {
    id: PullRequestId.SHOPPING_PWA_12257,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: neighborhood shouldReplaceParam check',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/12257',
  },
  {
    id: PullRequestId.SHOPPING_PWA_12226,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump uitk-react-sheet@9.1.22',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/12226',
  },
  {
    id: PullRequestId.SHOPPING_PWA_12111,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump retail-sort-and-filter-lodging@3.8.4',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/12111',
  },
  {
    id: PullRequestId.SHOPPING_PWA_11779,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: clear hotel_brand when destination has changed',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/11779',
  },
  {
    id: PullRequestId.SHOPPING_PWA_11764,
    repoId: RepoId.SHOPPING_PWA,
    title:
      'chore: version bump @shared-ui/retail-sort-and-filter-lodging@3.5.6',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/11764',
  },
  {
    id: PullRequestId.SHOPPING_PWA_11420,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: add filterBarSpacing as a prop for filterBarSpacing',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/11420',
  },
  {
    id: PullRequestId.SHOPPING_PWA_11418,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump sort-and-filter-lodging and its peer deps',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/11418',
  },
  {
    id: PullRequestId.SHOPPING_PWA_11381,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: add mealPlan to ARRAY_PARAM_JOIN_WHITELIST',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/11381',
  },
  {
    id: PullRequestId.SHOPPING_PWA_11315,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump USNF, maps and team carousel',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/11315',
  },
  {
    id: PullRequestId.SHOPPING_PWA_11133,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: bump @shared-ui/apollo-type-policies to 1.21.3',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/11133',
  },
  {
    id: PullRequestId.SHOPPING_PWA_10401,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: Bump @shared-ui/retail-sort-and-filter-lodging to 2.6.3',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/10401',
  },
  {
    id: PullRequestId.SHOPPING_PWA_9007,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: remove flex shrink from mWeb maps filter button',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/9007',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8913,
    repoId: RepoId.SHOPPING_PWA,
    title: 'feat: add lightweight query inputs',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8913',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8704,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: add new price param keys to SSR whitelist',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8704',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8694,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: version bump search-tools-lodging',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8694',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8650,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: version bump apollo-type-policies',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8650',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8403,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: sync pets allowed filter with pets traveler selector',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8403',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8316,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: version bump search-tools-lodging',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8316',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8297,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: neighborhood filter persists when updating location bug',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8297',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8122,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: disable pill while query is loading',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8122',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8099,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: version bump search tools lodging',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8099',
  },
  {
    id: PullRequestId.SHOPPING_PWA_7538,
    repoId: RepoId.SHOPPING_PWA,
    title: 'feat: Dynamically change SRP template based on EALS response',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/7538',
  },
  {
    id: PullRequestId.SHOPPING_PWA_6651,
    repoId: RepoId.SHOPPING_PWA,
    title: 'chore: lodging-offers@20.6.3',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/6651',
  },

  // shared-ui-web
  {
    id: PullRequestId.SHARED_UI_WEB_37156,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: convertToDateInput',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/37156',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_36900,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'feat: add server-driven impression analytics for SRP LBG and clean up client-driven ones',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/36900',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_35481,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'refactor: clean up LBG variant 1 in ProductReviewDetails',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/35481',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_35318,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'refactor: clean up LBG variant 1 in ProductRatingSummary',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/35318',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_35144,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'refactor: simplify ProductRatingSummary data source logic for LBG',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/35144',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_33436,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: pass down prefetchedData.tnlFields to useGuestChoice',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/33436',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_33051,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: reorder product rating summary rendering logic',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/33051',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_31946,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add new GCv3 pictogram',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/31946',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_31860,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add a11y to ShoppingProductHeader',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/31860',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_31599,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: changing the dates exits the contact host dialog bug',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/31599',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_31486,
    repoId: RepoId.SHARED_UI_WEB,
    title: "feat: add a11y label to highlightScoreCard's item title",
    url: 'https://github.com/eg-internal/shared-ui-web/pull/31486',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_31180,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: close inquiry success message - Done button',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/31180',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_31040,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: GCv2 inside reviews overlay spacing',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/31040',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_30536,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: Inquiry Submission should default to 2 adults',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/30536',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_30427,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add null action handling in AboutTheHostSummary',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/30427',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_24809,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'refactor: modal opening and closing logic',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/24809',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_23673,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: update textInputValue when tnlFields changes',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/23673',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_23551,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'chore: update facet counts experiment',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/23551',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_22700,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: submit button margin',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/22700',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_22591,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'refactor: StickyWrapper to avoid children unmounts and re-mounts',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/22591',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_22585,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'refactor: revert #22097',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/22585',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_22541,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: remove extra margin from quick filters',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/22541',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_22345,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: playback AI Search query in text input',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/22345',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_22097,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'refactor: StickyWrapper to avoid children unmounts and re-mounts',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/22097',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_21664,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add syntheticEvent and refactor',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/21664',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_21244,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: remove scrim from AllFilterSheetFooter and update spacing',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/21244',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_21200,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: suggestion item a11y',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/21200',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_21117,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'feat: convert quickAccessPillsandSheets into a component and implement the new carousel',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/21117',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_20319,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add AI search beta badge',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/20319',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_20064,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: BASIC_FILTER case bug',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/20064',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_19577,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add sort-and-filter folder in the signals workspace',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/19577',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_18981,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add tnlFields to SearchToolsFiltersFragment',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/18981',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_18919,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add AI Search analytics',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/18919',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_18503,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: dialog opening issue in split view',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/18503',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_17970,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: USNF signals package migration',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/17970',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_17882,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: overflowing dialog bug',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/17882',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_17623,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add primaryPillRef',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/17623',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_17571,
    repoId: RepoId.SHARED_UI_WEB,
    title: "fix: StickyWrapper's a11y and refactor",
    url: 'https://github.com/eg-internal/shared-ui-web/pull/17571',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_17220,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'fix: prevent FilterSheetFooterQuery re-fires when opening and closing QF sheets',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/17220',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_17133,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'fix: prevent FilterSheetFooterQuery re-fires when opening and closing QF sheets',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/17133',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_16853,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: remove whitespace from selection and multiselection',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/16853',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_16805,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'fix: prevent FilterSheetFooterQuery from triggering when updating searchId',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/16805',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_16673,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'chore: update AI Search suggestion list',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/16673',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_16482,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add accessibilityLabel to TextInputFieldTypeahead',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/16482',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_16154,
    repoId: RepoId.SHARED_UI_WEB,
    title: "fix: Revert 'fix: retail/sort-and-filter EGDS migration (#15653)'",
    url: 'https://github.com/eg-internal/shared-ui-web/pull/16154',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_16152,
    repoId: RepoId.SHARED_UI_WEB,
    title: "fix: EGDSRadioButtonGroup's legend",
    url: 'https://github.com/eg-internal/shared-ui-web/pull/16152',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_15935,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: force onSubmit to run after handleFieldChange',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/15935',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_15745,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'feat: add submit functionality to the AI search box AND suggestions',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/15745',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_15623,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: spacing around AI search input',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/15623',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_15326,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add new lightweight query',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/15326',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_15271,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: AI search dialog toolbar',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/15271',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_15085,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: popover sheet max height',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/15085',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14918,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'chore: integrate FilterSheetFooter with SearchToolsFilterBar',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/14918',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14828,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: lift up carouselEdgeItemsPadding for LodgingSortAndFilters',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/14828',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14694,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'chore: add FilterSheetFooter component',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/14694',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14600,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: create sheet component to sync with button',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/14600',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14568,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'fix: add logic to revert resetFilters back to false after being set to true',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/14568',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14493,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: Create wrapper for list and input components',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/14493',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14474,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: update type policies for US&F specific types',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/14474',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14409,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add screenreader-only heading to dropdown field',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/14409',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14370,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'fix: shift focus to next focusable element when the user removes the last filter pill',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/14370',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14227,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add type policy for EGDSBasicTriggerPill',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/14227',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_13937,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'chore(deps): uitk-react-sheet version bump',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/13937',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_13546,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: quick filter popover sheets not closing correctly',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/13546',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_13267,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: sync pets allowed filter with pets traveler selector',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/13267',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_12593,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: increase z-index layer of the map trigger floating wrapper',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/12593',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_12522,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add signals to popular filters',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/12522',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_12406,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: enable keepSectionExpanded for LodgingSortAndFilters',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/12406',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_12110,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix(sort-and-filter): remove autoPosition from QF popover sheets',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/12110',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_11773,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: disable pill while query is loading',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/11773',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_11654,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'fix: Filters not persisting when removed from the selected filters field more than once',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/11654',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_11616,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'chore: bump search tools packages',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/11616',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_11332,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'feat: add signals interaction between Selected Filters and Multiselection Options',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/11332',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_11173,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add selected filters field',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/11173',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_10758,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'chore: version bump sort-and-filter packages',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/10758',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_10735,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'fix(sort-and-filter): add ShoppingRangeTextInputField case to calculateQuickFilterFields',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/10735',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_10645,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: implement new carousel prop - isPopoverOpenList',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/10645',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_10418,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: Add onClearFilters to FlightsSortAndFilters',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/10418',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_9872,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: remove edgeItemsPadding for tablet and desktop viewport sizes',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/9872',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_9518,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: usf criteria inputs to consider comma separated query params',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/9518',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_9372,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: refactor filterBarSpacing as a LodgingSortAndFilters prop',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/9372',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_9279,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'chore: version bump @egds/react-lodging and uitk-react-slider',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/9279',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_9215,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'feat: persist filter selection from last search when clicking outside the dialog',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/9215',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_9109,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'fix(sort-and-filter): spacing between edge of screen and the filter bar',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/9109',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_9015,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: USF FILTER_BAR view pill state and undesired border',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/9015',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_8484,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add SearchToolsFilterBar component',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/8484',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_8341,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: price filter header missing on Vrbo web',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/8341',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_7736,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: Add USnF carousel analytics handlers',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/7736',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_7517,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'chore: Migrate unit tests to component tests for @shared-ui/sort-and-filter-internal',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/7517',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_7315,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: Integrate EGDSTeamCarousel into SearchToolsFilterBar',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/7315',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_7191,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: change updateSearchAndFilters argument',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/7191',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_7004,
    repoId: RepoId.SHARED_UI_WEB,
    title:
      'chore: add uitk-react-pill@8.4.0 to lodging packages and version bump',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/7004',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_6631,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add persistent pills component',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/6631',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_5767,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'chore: Bump sort-and-filter',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/5767',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_5726,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'chore: Add exposure logging to Default Pricing Filter experiment',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/5726',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_5381,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: version boom + add contributor',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/5381',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_5329,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add FE work for impressionAnalytics',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/5329',
  },

  // egds-components-react
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_2463,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title:
      'breaking(universal-shopping): add support for children that render several items',
    url: 'https://github.com/eg-internal/egds-components-react/pull/2463',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_2326,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix(universal-shopping): replace aria-hidden with data-hidden',
    url: 'https://github.com/eg-internal/egds-components-react/pull/2326',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1945,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix(universal-shopping): downgrade throttle-debounce',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1945',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1898,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'refactor(universal-shopping): carousel-inner-spacing-and-overflow',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1898',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1845,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'refactor(universal-shopping): carousel-inner-spacing-and-overflow',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1845',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1807,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title:
      'fix(universal-shopping): carousel wrapper tab index and item aria label',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1807',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1584,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix(core): EGDSTypeahead clear button label',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1584',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1385,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix(universal-shopping): filter out null children for the carousel',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1385',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1378,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'chore(universal-shopping): remove team typeahead',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1378',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1024,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title:
      'fix(universal-shopping): rename handleClear to onTextInputClear, add onSelectionsClear',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1024',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1023,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title:
      'fix(universal-shopping): convert onDismiss to onSubmit, add new onDismiss',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1023',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1011,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'feat(universal-shopping): create team tier typeahead component',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1011',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_956,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title:
      'feat(universal-shopping): add extra z-index to opened carousel item',
    url: 'https://github.com/eg-internal/egds-components-react/pull/956',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_871,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix(lodging): copy over uitk-react-slider@5.4.12',
    url: 'https://github.com/eg-internal/egds-components-react/pull/871',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_869,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title:
      'fix(universal-shopping): Refactor edgeItemsPadding to accept multiple values',
    url: 'https://github.com/eg-internal/egds-components-react/pull/869',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_862,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix(universal-shopping): Modify base CSS class name',
    url: 'https://github.com/eg-internal/egds-components-react/pull/862',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_848,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'feat(universal-shopping): Add edge items padding behind a prop',
    url: 'https://github.com/eg-internal/egds-components-react/pull/848',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_797,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title:
      'feat(universal-shopping): Add Server-Driven analytics to auto-width carousel',
    url: 'https://github.com/eg-internal/egds-components-react/pull/797',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_771,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix(universal-shopping): Typings exports',
    url: 'https://github.com/eg-internal/egds-components-react/pull/771',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_762,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'chore(universal-shopping): Version bump',
    url: 'https://github.com/eg-internal/egds-components-react/pull/762',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_761,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix(universal-shopping): Exports',
    url: 'https://github.com/eg-internal/egds-components-react/pull/761',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_759,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'feat(universal-shopping): Carousel button behavior update',
    url: 'https://github.com/eg-internal/egds-components-react/pull/759',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_735,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix(universal-shopping): Carousel Subcomponent Scroll Work',
    url: 'https://github.com/eg-internal/egds-components-react/pull/735',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_720,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title:
      'fix(universal-shopping): Create Carousel Subcomponent for Differing Widths',
    url: 'https://github.com/eg-internal/egds-components-react/pull/720',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_712,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'Set up intersection observer',
    url: 'https://github.com/eg-internal/egds-components-react/pull/712',
  },

  // product-details-experience-api
  {
    id: PullRequestId.PRODUCT_DETAILS_API_4037,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'chore: cleanup ATH minAppVersion',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/4037',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3935,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'chore: GCV2 Fast Track TemplateApi Cleanup',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3935',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3779,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'fix: remove tnlFields feature gate null condition',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3779',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3603,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'fix: add MinAppVersion check to LBG tnlFields',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3603',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3595,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'fix: update light mode LBG mark',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3595',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3590,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'feat: update LBG mark to supply darkModeUrl',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3590',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3572,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title:
      'fix: separate the TnL evaluation logic of Top Of PDP and Overview & Overlay - Loved By Guests',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3572',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3571,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'fix: unknown-system-event-errors',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3571',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3527,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title:
      'feat: Implement Server Driven LBG for Top of PDP - Blue Ribbon Pictogram',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3527',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3360,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'Feature: Loved by Guests explanatory text',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3360',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3350,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'Feature: Suppress Premier Host for non-Vrbo brands',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3350',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3339,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'Feature: add aboutTheHost.* and vr.fraud.* keys to the default',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3339',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3285,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title:
      'Feature: add a11y label to shoppingProductTitle as ShoppingProductHeader',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3285',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3225,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title:
      'Feature: add logic to pick between overview or overlay ATH metric label',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3225',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3218,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title:
      'Feature: add remaining ATH overview metrics loc keys and rename overlay ones',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3218',
  },

  // experience-api-lodging-offers
  {
    id: PullRequestId.EXP_API_LODGING_OFFERS_10403,
    repoId: RepoId.EXP_API_LODGING_OFFERS,
    title:
      'VRDIFF-5362: feat: add Great Find suppression logic to PriceInsightService',
    url: 'https://github.com/eg-internal/experience-api-lodging-offers/pull/10403',
  },
  {
    id: PullRequestId.EXP_API_LODGING_OFFERS_10243,
    repoId: RepoId.EXP_API_LODGING_OFFERS,
    title: 'VRDIFF-3814: feat: Great Find Shopping Banner Integration',
    url: 'https://github.com/eg-internal/experience-api-lodging-offers/pull/10243',
  },

  // experience-api-lodging-search
  {
    id: PullRequestId.EXP_API_LODGING_SEARCH_12723,
    repoId: RepoId.EXP_API_LODGING_SEARCH,
    title: 'feat: Implement LBG Clickstream Payload',
    url: 'https://github.com/eg-internal/experience-api-lodging-search/pull/12723',
  },
  {
    id: PullRequestId.EXP_API_LODGING_SEARCH_12436,
    repoId: RepoId.EXP_API_LODGING_SEARCH,
    title: 'chore: bump shared_graphql_library_version to 0.152.0',
    url: 'https://github.com/eg-internal/experience-api-lodging-search/pull/12436',
  },

  // experience-api-lodging-reviews
  {
    id: PullRequestId.EXP_API_LODGING_REVIEWS_1253,
    repoId: RepoId.EXP_API_LODGING_REVIEWS,
    title: 'refactor: clean up TnL 52532 - Superlative_Threshold_Testing',
    url: 'https://github.com/eg-internal/experience-api-lodging-reviews/pull/1253',
  },

  // experience-api-lodging-property
  {
    id: PullRequestId.EXP_API_LODGING_PROPERTY_3221,
    repoId: RepoId.EXP_API_LODGING_PROPERTY,
    title: 'feat: check for numAdults = 0 in submitInquiry',
    url: 'https://github.com/eg-internal/experience-api-lodging-property/pull/3221',
  },

  // shared-graphql
  {
    id: PullRequestId.SHARED_GRAPHQL_8231,
    repoId: RepoId.SHARED_GRAPHQL,
    title: 'feat: add darkModeUrl to Mark type for Loved By Guests feature',
    url: 'https://github.com/eg-internal/shared-graphql/pull/8231',
  },
  {
    id: PullRequestId.SHARED_GRAPHQL_7664,
    repoId: RepoId.SHARED_GRAPHQL,
    title: 'feat: add accessibility to ShoppingProductHeader',
    url: 'https://github.com/eg-internal/shared-graphql/pull/7664',
  },

  // components-kotlin
  {
    id: PullRequestId.COMPONENTS_KOTLIN_853,
    repoId: RepoId.COMPONENTS_KOTLIN,
    title: 'feat: add darkModeUrl to Mark type for Loved By Guests feature',
    url: 'https://github.com/eg-internal/components-kotlin/pull/853',
  },
]

// ---------------------------------------------------------------------------
// Parent feature ↔ PR mapping
// ---------------------------------------------------------------------------

const PARENT_FEATURE_PRS = {
  [ParentFeature.SORT_AND_FILTER]: [
    PullRequestId.SHOPPING_PWA_15079,
    PullRequestId.SHOPPING_PWA_15411,
    PullRequestId.SHOPPING_PWA_15012,
    PullRequestId.SHOPPING_PWA_14732,
    PullRequestId.SHOPPING_PWA_12865,
    PullRequestId.SHOPPING_PWA_12834,
    PullRequestId.SHOPPING_PWA_12802,
    PullRequestId.SHOPPING_PWA_12257,
    PullRequestId.SHOPPING_PWA_11779,
    PullRequestId.SHOPPING_PWA_15298,
    PullRequestId.SHOPPING_PWA_15076,
    PullRequestId.SHOPPING_PWA_14559,
    PullRequestId.SHOPPING_PWA_11420,
    PullRequestId.SHOPPING_PWA_11381,
    PullRequestId.SHOPPING_PWA_9007,
    PullRequestId.SHOPPING_PWA_8913,
    PullRequestId.SHOPPING_PWA_8122,
    PullRequestId.SHOPPING_PWA_8704,
    PullRequestId.SHOPPING_PWA_8403,
    PullRequestId.SHOPPING_PWA_8297,
    PullRequestId.SHOPPING_PWA_7538,
    PullRequestId.SHARED_UI_WEB_24809,
    PullRequestId.SHARED_UI_WEB_22700,
    PullRequestId.SHARED_UI_WEB_22591,
    PullRequestId.SHARED_UI_WEB_17220,
    PullRequestId.SHARED_UI_WEB_16805,
    PullRequestId.SHARED_UI_WEB_15935,
    PullRequestId.SHARED_UI_WEB_18503,
    PullRequestId.SHARED_UI_WEB_17571,
    PullRequestId.SHARED_UI_WEB_14474,
    PullRequestId.SHARED_UI_WEB_14409,
    PullRequestId.SHARED_UI_WEB_14370,
    PullRequestId.SHARED_UI_WEB_14227,
    PullRequestId.SHARED_UI_WEB_12593,
    PullRequestId.SHARED_UI_WEB_10735,
    PullRequestId.SHARED_UI_WEB_9518,
    PullRequestId.SHARED_UI_WEB_5329,
    PullRequestId.SHARED_UI_WEB_23551,
    PullRequestId.SHARED_UI_WEB_22585,
    PullRequestId.SHARED_UI_WEB_22541,
    PullRequestId.SHARED_UI_WEB_22097,
    PullRequestId.SHARED_UI_WEB_21244,
    PullRequestId.SHARED_UI_WEB_21117,
    PullRequestId.SHARED_UI_WEB_20064,
    PullRequestId.SHARED_UI_WEB_17882,
    PullRequestId.SHARED_UI_WEB_17623,
    PullRequestId.SHARED_UI_WEB_17133,
    PullRequestId.SHARED_UI_WEB_16154,
    PullRequestId.SHARED_UI_WEB_16152,
    PullRequestId.SHARED_UI_WEB_15326,
    PullRequestId.SHARED_UI_WEB_15085,
    PullRequestId.SHARED_UI_WEB_14918,
    PullRequestId.SHARED_UI_WEB_14828,
    PullRequestId.SHARED_UI_WEB_14694,
    PullRequestId.SHARED_UI_WEB_14600,
    PullRequestId.SHARED_UI_WEB_14568,
    PullRequestId.SHARED_UI_WEB_13937,
    PullRequestId.SHARED_UI_WEB_13546,
    PullRequestId.SHARED_UI_WEB_13267,
    PullRequestId.SHARED_UI_WEB_12522,
    PullRequestId.SHARED_UI_WEB_12406,
    PullRequestId.SHARED_UI_WEB_12110,
    PullRequestId.SHARED_UI_WEB_11773,
    PullRequestId.SHARED_UI_WEB_11654,
    PullRequestId.SHARED_UI_WEB_11616,
    PullRequestId.SHARED_UI_WEB_11173,
    PullRequestId.SHARED_UI_WEB_10758,
    PullRequestId.SHARED_UI_WEB_10418,
    PullRequestId.SHARED_UI_WEB_9872,
    PullRequestId.SHARED_UI_WEB_9372,
    PullRequestId.SHARED_UI_WEB_9279,
    PullRequestId.SHARED_UI_WEB_9215,
    PullRequestId.SHARED_UI_WEB_9109,
    PullRequestId.SHARED_UI_WEB_9015,
    PullRequestId.SHARED_UI_WEB_8484,
    PullRequestId.SHARED_UI_WEB_8341,
    PullRequestId.SHARED_UI_WEB_7736,
    PullRequestId.SHARED_UI_WEB_7517,
    PullRequestId.SHARED_UI_WEB_7315,
    PullRequestId.SHARED_UI_WEB_7191,
    PullRequestId.SHARED_UI_WEB_7004,
    PullRequestId.SHARED_UI_WEB_6631,
    PullRequestId.SHARED_UI_WEB_5767,
    PullRequestId.SHARED_UI_WEB_5726,
    PullRequestId.SHARED_UI_WEB_5381,
  ],
  [ParentFeature.AI_SEARCH]: [
    PullRequestId.SHOPPING_PWA_14925,
    PullRequestId.SHOPPING_PWA_14816,
    PullRequestId.SHOPPING_PWA_13017,
    PullRequestId.SHARED_UI_WEB_15745,
    PullRequestId.SHARED_UI_WEB_18919,
    PullRequestId.SHARED_UI_WEB_22345,
    PullRequestId.SHARED_UI_WEB_21200,
    PullRequestId.SHARED_UI_WEB_20319,
    PullRequestId.SHARED_UI_WEB_16673,
    PullRequestId.SHARED_UI_WEB_16482,
    PullRequestId.SHARED_UI_WEB_15623,
    PullRequestId.SHARED_UI_WEB_15271,
    PullRequestId.SHARED_UI_WEB_14493,
  ],
  [ParentFeature.LOVED_BY_GUESTS]: [
    PullRequestId.SHOPPING_PWA_18045,
    PullRequestId.SHOPPING_PWA_18031,
    PullRequestId.SHOPPING_PWA_17976,
    PullRequestId.SHOPPING_PWA_17414,
    PullRequestId.SHOPPING_PWA_17090,
    PullRequestId.SHOPPING_PWA_17433,
    PullRequestId.SHARED_UI_WEB_36900,
    PullRequestId.SHARED_UI_WEB_35481,
    PullRequestId.SHARED_UI_WEB_35318,
    PullRequestId.SHARED_UI_WEB_35144,
    PullRequestId.SHARED_UI_WEB_33436,
    PullRequestId.SHARED_UI_WEB_31860,
    PullRequestId.SHARED_UI_WEB_31486,
    PullRequestId.SHARED_UI_WEB_18981,
    PullRequestId.PRODUCT_DETAILS_API_3590,
    PullRequestId.PRODUCT_DETAILS_API_3572,
    PullRequestId.PRODUCT_DETAILS_API_3527,
    PullRequestId.PRODUCT_DETAILS_API_3360,
    PullRequestId.PRODUCT_DETAILS_API_3285,
    PullRequestId.SHARED_GRAPHQL_8231,
    PullRequestId.COMPONENTS_KOTLIN_853,
    PullRequestId.EXP_API_LODGING_SEARCH_12723,
    PullRequestId.EXP_API_LODGING_REVIEWS_1253,
    PullRequestId.PRODUCT_DETAILS_API_3935,
    PullRequestId.PRODUCT_DETAILS_API_3779,
    PullRequestId.PRODUCT_DETAILS_API_3603,
    PullRequestId.PRODUCT_DETAILS_API_3595,
    PullRequestId.SHARED_UI_WEB_33051,
    PullRequestId.SHARED_UI_WEB_31946,
    PullRequestId.SHARED_UI_WEB_31040,
    PullRequestId.SHARED_UI_WEB_23673,
  ],
  [ParentFeature.CAROUSEL]: [
    PullRequestId.SHOPPING_PWA_14419,
    PullRequestId.EGDS_COMPONENTS_REACT_2463,
    PullRequestId.EGDS_COMPONENTS_REACT_2326,
    PullRequestId.EGDS_COMPONENTS_REACT_1898,
    PullRequestId.EGDS_COMPONENTS_REACT_956,
    PullRequestId.EGDS_COMPONENTS_REACT_797,
    PullRequestId.EGDS_COMPONENTS_REACT_759,
    PullRequestId.EGDS_COMPONENTS_REACT_735,
    PullRequestId.EGDS_COMPONENTS_REACT_720,
    PullRequestId.EGDS_COMPONENTS_REACT_712,
    PullRequestId.EGDS_COMPONENTS_REACT_1945,
    PullRequestId.EGDS_COMPONENTS_REACT_1845,
    PullRequestId.EGDS_COMPONENTS_REACT_1807,
    PullRequestId.EGDS_COMPONENTS_REACT_1385,
    PullRequestId.EGDS_COMPONENTS_REACT_869,
    PullRequestId.EGDS_COMPONENTS_REACT_862,
    PullRequestId.EGDS_COMPONENTS_REACT_848,
    PullRequestId.EGDS_COMPONENTS_REACT_771,
    PullRequestId.EGDS_COMPONENTS_REACT_762,
    PullRequestId.EGDS_COMPONENTS_REACT_761,
    PullRequestId.SHARED_UI_WEB_14828,
    PullRequestId.SHARED_UI_WEB_10645,
    PullRequestId.SHARED_UI_WEB_9872,
    PullRequestId.SHARED_UI_WEB_7736,
    PullRequestId.SHARED_UI_WEB_7315,
  ],
  [ParentFeature.TYPEAHEAD]: [
    PullRequestId.EGDS_COMPONENTS_REACT_1011,
    PullRequestId.EGDS_COMPONENTS_REACT_1584,
    PullRequestId.EGDS_COMPONENTS_REACT_1378,
    PullRequestId.EGDS_COMPONENTS_REACT_1024,
    PullRequestId.EGDS_COMPONENTS_REACT_1023,
  ],
  [ParentFeature.GREAT_FIND]: [
    PullRequestId.SHOPPING_PWA_18517,
    PullRequestId.EXP_API_LODGING_OFFERS_10403,
    PullRequestId.EXP_API_LODGING_OFFERS_10243,
  ],
  [ParentFeature.SIGNALS]: [
    PullRequestId.SHARED_UI_WEB_21664,
    PullRequestId.SHARED_UI_WEB_19577,
    PullRequestId.SHARED_UI_WEB_11332,
    PullRequestId.SHARED_UI_WEB_17970,
    PullRequestId.SHARED_UI_WEB_12522,
    PullRequestId.SHARED_UI_WEB_7736,
  ],
  [ParentFeature.ABOUT_THE_HOST]: [
    PullRequestId.SHOPPING_PWA_17056,
    PullRequestId.SHOPPING_PWA_16959,
    PullRequestId.SHOPPING_PWA_16696,
    PullRequestId.SHOPPING_PWA_17074,
    PullRequestId.PRODUCT_DETAILS_API_3350,
    PullRequestId.PRODUCT_DETAILS_API_3339,
    PullRequestId.PRODUCT_DETAILS_API_3285,
    PullRequestId.PRODUCT_DETAILS_API_3225,
    PullRequestId.PRODUCT_DETAILS_API_3218,
    PullRequestId.PRODUCT_DETAILS_API_4037,
    PullRequestId.SHARED_GRAPHQL_7664,
    PullRequestId.SHARED_UI_WEB_30427,
  ],
  [ParentFeature.INQUIRY]: [
    PullRequestId.SHOPPING_PWA_16740,
    PullRequestId.SHARED_UI_WEB_37156,
    PullRequestId.SHARED_UI_WEB_31599,
    PullRequestId.SHARED_UI_WEB_30536,
    PullRequestId.SHARED_UI_WEB_31180,
    PullRequestId.EXP_API_LODGING_PROPERTY_3221,
  ],
} as const satisfies Record<ParentFeature, readonly PullRequestId[]>

// ---------------------------------------------------------------------------
// PR ↔ topic mappings
// ---------------------------------------------------------------------------

const prTopicMappings: PrTopicMappings = {
  [PullRequestId.PR_ATLAS]: [
    // Language – JavaScript
    {
      topicId: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Data modeling',
      score: 20,
    },
    {
      topicId: TopicId.STORES_REUSES_AND_MANIPULATES_DATA,
      contribution: 'Data modeling',
      score: 20,
    },
    {
      topicId: TopicId.STORES_REUSES_AND_OPERATES_ON_BASIC_DATA_TYPES,
      contribution: 'Data modeling',
      score: 20,
    },
    {
      topicId: TopicId.USES_AND_MAINTAINS_LANGUAGE_OPERATORS_AND_COMMENTS,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId: TopicId.HANDLES_EXCEPTIONS_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Saved searches',
      score: 20,
    },
    {
      topicId: TopicId.HANDLES_USER_INTERACTION_WITH_EVENTS_HANDLERS,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_A_USER_INTERFACE_USING_LANGUAGE_BUILT_IN_TECHNICS,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId:
        TopicId.USES_BUILT_IN_ITERATORS_TO_TRAVERSE_THROUGH_DIFFERENT_TYPES_OF_COLLECTIONS,
      contribution: 'Data modeling',
      score: 20,
    },
    {
      topicId:
        TopicId.DEFINES_MAINTAINS_AND_USES_MODULAR_STRUCTURES_FOR_CODE_NAMESPACING_AND_REUSABILITY,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_ASYNCHRONY_AND_NON_BLOCKING_ENVIRONMENT_CONCEPTS,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId:
        TopicId.VALIDATES_FINDS_AND_REPLACES_STRING_DATA_WITH_REGULAR_EXPRESSIONS,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId:
        TopicId.APPLIES_METHODOLOGY_AND_BEST_PRACTICES_FOR_LANGUAGE_PERFORMANCE_OPTIMISATION,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_CUSTOM_USER_INTERFACE_COMPONENTS,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.MANAGES_ADVANCED_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Data modeling',
      score: 20,
    },
    {
      topicId: TopicId.ACCESSES_AND_STORES_DATA_IN_A_CLIENT_SIDE_STORAGE,
      contribution: 'Saved searches',
      score: 20,
    },
    {
      topicId:
        TopicId.OPTIMISES_APPLICATION_PERFORMANCE_TAKING_INTO_ACCOUNT_THE_COMPLEXITY_OF_THE_ALGORITHMS,
      contribution: 'Debounced search',
      score: 20,
    },

    // Framework – React JS Web
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.STYLING_ELEMENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId: TopicId.USES_TECHNICS_TO_DYNAMICALLY_GENERATE_ELEMENTS,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId:
        TopicId.APPLIES_TECHNICS_AND_USES_TECHNOLOGY_FOR_STYLING_COMPONENTS,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId: TopicId.SETS_UP_BUILDS_TESTS_AND_DEPLOYS_APPLICATION_WITH_CLI,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId: TopicId.USES_FORMS_FOR_USER_INPUTS_AND_INTERACTION,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId: TopicId.USES_FRAMEWORK_BUILT_IN_TOOLS_FOR_CODE_REUSABILITY,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId:
        TopicId.USES_FRAMEWORK_RELATED_AND_BASIC_TOOLS_FOR_APPLICATION_S_DEBUGGING,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'Accessibility',
      score: 20,
    },

    // Libraries – React JS Web
    {
      topicId: TopicId.DEBUGS_APPLICATION_USING_DEBUGGING_TOOLS_AND_TECHNIQUES,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      contribution: 'Data modeling',
      score: 20,
    },
    {
      topicId: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId: TopicId.OPTIMIZES_THE_DEVELOPMENT_PROCESS_WITH_UTILS,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId:
        TopicId.SIMPLIFIES_ACCESS_TO_BROWSERS_STORAGE_USING_TOOLS_OR_LIBRARIES,
      contribution: 'Saved searches',
      score: 20,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Internationalization',
      score: 20,
    },
    {
      topicId:
        TopicId.HANDLES_DIFFERENT_TYPES_OF_LOCALIZATION_AND_TEXT_PROCESSING,
      contribution: 'Internationalization',
      score: 20,
    },
    {
      topicId: TopicId.CONFIGURES_BUNDLERS_FOR_APPLICATION,
      contribution: 'Build and tooling',
      score: 20,
    },

    // Markup and Styling
    {
      topicId: TopicId.ADDS_STYLING_TO_TEMPLATE_DOCUMENT,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId:
        TopicId.ADJUSTS_VALUES_AND_UNITS_TO_SET_THE_SIZE_OF_VARIOUS_ELEMENTS_WITH_STYLE_SHEET_LANGUAGE,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.HANDLES_OVERFLOWING_CONTENT_ON_A_PAGE,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.USES_BASIC_BOX_MODEL_AND_HANDLES_MARGIN_COLLAPSING,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId:
        TopicId.ALIGNS_VARIOUS_ELEMENT_POSITIONS_WITH_STYLE_SHEET_LANGUAGE,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId:
        TopicId.CREATES_AND_COMPOSES_PAGES_AND_LAYOUTS_USING_STANDARD_MARKUP_LANGUAGE,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.CREATES_FORMS_USING_A_STANDARD_MARKUP_LANGUAGE,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId:
        TopicId.CREATES_LAYOUTS_WITH_BASIC_LAYOUT_MODES_USING_STYLE_SHEET_LANGUAGE,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.CREATES_TABLES_WITH_A_STANDARD_MARKUP_LANGUAGE,
      contribution: 'Debounced search',
      score: 20,
    },
    {
      topicId:
        TopicId.STYLES_ELEMENTS_WITH_VARIOUS_STYLE_SHEET_LANGUAGE_SELECTORS,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.STYLES_TEXT_USING_BASIC_STYLE_SHEET_LANGUAGE_RULES,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId:
        TopicId.ANIMATES_USER_INTERFACE_ELEMENTS_USING_STYLE_SHEET_LANGUAGE,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId:
        TopicId.APPLIES_STANDARDISED_METHODOLOGIES_WHILE_USING_STYLE_SHEET_LANGUAGE,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId:
        TopicId.CREATES_LAYOUTS_WITH_ADVANCED_LAYOUT_MODES_USING_STYLE_SHEET_LANGUAGE,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.CREATES_RESPONSIVE_LAYOUTS_WITH_ADAPTIVE_TECHNICS,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId:
        TopicId.STYLES_USER_INTERFACE_USING_PREPROCESSORS_OR_SCRIPTING_SOLUTIONS,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.CREATES_ACCESSIBLE_WEB_PAGES,
      contribution: 'Accessibility',
      score: 20,
    },
    {
      topicId: TopicId.CREATES_WEB_PAGES_FOR_VARIOUS_DEVICE_TYPES,
      contribution: 'Responsive layout',
      score: 20,
    },
    {
      topicId: TopicId.OPTIMISES_PAGE_PERFORMANCE,
      contribution: 'Responsive layout',
      score: 20,
    },

    // Code-Based Testing
    {
      topicId:
        TopicId.APPLIES_COMMUNITY_RECOMMENDED_PRACTICE_AND_METHODOLOGIES_TO_AUTOMATED_TESTS,
      contribution: 'Testing suite',
      score: 20,
    },
    {
      topicId: TopicId.STRUCTURES_TESTS_USING_FRAMEWORK_CAPABILITIES,
      contribution: 'Testing suite',
      score: 20,
    },
    {
      topicId: TopicId.USES_DUMMY_DATA_FOR_TESTING,
      contribution: 'Testing suite',
      score: 20,
    },
    {
      topicId: TopicId.USES_MATCHERS_FOR_TESTING_EXPECTED_RESULT,
      contribution: 'Testing suite',
      score: 20,
    },
    {
      topicId: TopicId.USES_UNIT_TESTS_TECHNIQUES,
      contribution: 'Testing suite',
      score: 20,
    },
    {
      topicId: TopicId.TESTS_ASYNC_CODE_USING_FRAMEWORK_CAPABILITIES,
      contribution: 'Testing suite',
      score: 20,
    },
    {
      topicId: TopicId.USES_FAKE_OBJECTS_TO_DECOUPLE_FROM_DEPENDENCIES,
      contribution: 'Testing suite',
      score: 20,
    },
    {
      topicId:
        TopicId.USES_INTEGRATION_TEST_APPROACHES_STRATEGIES_AND_METHODOLOGIES,
      contribution: 'Testing suite',
      score: 20,
    },
    {
      topicId:
        TopicId.USES_TECHNIQUES_AND_METHODOLOGY_FOR_ACCESSIBILITY_TESTING,
      contribution: 'Testing suite',
      score: 20,
    },
    {
      topicId: TopicId.CONFIGURES_AND_MAINTAINS_CODE_COVERAGE_REPORTS,
      contribution: 'Testing suite',
      score: 20,
    },
    {
      topicId: TopicId.CONFIGURES_TEST_FRAMEWORK_FOR_TESTS_EXECUTION,
      contribution: 'Testing suite',
      score: 20,
    },

    // Design
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId:
        TopicId.CREATES_REUSABLE_STRUCTURES_BY_APPLYING_DESIGN_STRATEGIES_AND_METHODOLOGIES,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId:
        TopicId.USES_DESIGN_PATTERNS_TO_CREATE_NEW_STRUCTURES_BASED_ON_REQUIREMENTS,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId:
        TopicId.DISTRIBUTES_RESPONSIBILITY_BETWEEN_STRUCTURES_USING_DESIGN_PATTERNS,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId:
        TopicId.ENSURES_EFFICIENT_AND_FLEXIBLE_COMPOSITION_OF_STRUCTURES_WITH_DESIGN_PATTERNS,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId:
        TopicId.EVALUATES_AND_MODIFIES_SOFTWARE_DESIGN_TO_ENSURE_SOFTWARE_QUALITY,
      contribution: 'Architecture',
      score: 20,
    },
    {
      topicId: TopicId.USES_METHODOLOGIES_AND_TECHNICS_TO_DOCUMENT_DESIGN,
      contribution: 'Architecture',
      score: 20,
    },

    // Development Environments
    {
      topicId:
        TopicId.MANAGES_ENVIRONMENTS_USING_BUILT_IN_OPERATING_SYSTEM_TOOLS,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId: TopicId.USES_VERSION_CONTROL_TOOLS_FOR_DEVELOPMENT,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId:
        TopicId.CONFIGURES_AND_MAINTAINS_DEVELOPMENT_ENVIRONMENT_AND_ECOSYSTEM,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId: TopicId.DISTRIBUTES_WORK_USING_VERSION_CONTROL_TOOLS,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId: TopicId.MAINTAINS_CODE_QUALITY_OF_THE_APPLICATION,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId:
        TopicId.CONFIGURES_THE_BUILD_PROCESS_TO_COMPILE_READY_TO_USE_APPLICATIONS_FROM_SOURCE_CODE,
      contribution: 'Build and tooling',
      score: 20,
    },
    {
      topicId: TopicId.CONTROLS_CODE_QUALITY_WITH_MEASUREMENT_TOOLS,
      contribution: 'Build and tooling',
      score: 20,
    },

    // Coverage dashboard
    {
      topicId: TopicId.OPTIMIZES_APPLICATION_WITH_CODE_SPLITTING_TECHNIQUES,
      contribution: 'Coverage dashboard',
      score: 20,
    },
    {
      topicId: TopicId.PROVIDES_DATA_VISUALIZATIONS_THROUGH_VISUALIZATION_TOOLS,
      contribution: 'Coverage dashboard',
      score: 20,
    },
    {
      topicId: TopicId.OPTIMISES_APPLICATIONS_FOR_SEARCH_ENGINES,
      contribution: 'Coverage dashboard',
      score: 20,
    },

    // Enhanced search
    {
      topicId: TopicId.MANAGES_AND_IMPLEMENTS_COMPLEX_DATA_STRUCTURES,
      contribution: 'Enhanced search',
      score: 20,
    },
    {
      topicId:
        TopicId.SYNCHRONISES_CONCURRENT_OPERATIONS_BY_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Enhanced search',
      score: 20,
    },
    {
      topicId: TopicId.CREATES_AND_ORGANISES_END_TO_END_TESTS,
      contribution: 'E2E tests',
      score: 20,
    },

    // Logging
    {
      topicId: TopicId.USES_LIBRARIES_FOR_LOGGING_DATA,
      contribution: 'Logging',
      score: 20,
    },

    // Avatar Builder – filesystem
    {
      topicId: TopicId.MANAGES_FILES_WITH_LANGUAGE_FILESYSTEM_CAPABILITIES,
      contribution: 'Blob creation, FileReader, object URL lifecycle, programmatic download',
      score: 20,
    },
    {
      topicId: TopicId.HANDLES_FILES_UPLOAD_THROUGH_LIBRARIES,
      contribution: 'Drag-and-drop with DataTransfer API and file input validation',
      score: 20,
    },
    {
      topicId: TopicId.HANDLES_IMAGES_UPLOAD_THROUGH_TOOLS_AND_LIBRARIES,
      contribution: 'Image upload with canvas crop, filter pipeline, and base64 encoding',
      score: 20,
    },
    {
      topicId: TopicId.USES_TOOLS_AND_LIBRARIES_FOR_IMMUTABILITY,
      contribution: 'Immer-based reducer for immutable editor state management',
      score: 20,
    },
  ],

  [PullRequestId.PROCESS_EVIDENCE]: [
    {
      topicId:
        TopicId.PASSES_ONBOARDING_INTO_ENGINEERING_AND_TECHNOLOGY_EXPERTISE_INCLUDING_SPECIALISATION_OR_PRACTICE,
      contribution: 'Onboarding and reviews',
      score: 90,
    },
    {
      topicId:
        TopicId.PASSES_PERFORMANCE_REVIEW_ACCORDING_TO_THE_PROCESS_DEFINITION_AND_REQUIREMENTS,
      contribution: 'Onboarding and reviews',
      score: 90,
    },
    {
      topicId: TopicId.ESTIMATES_TASKS_BASED_ON_REQUIREMENTS,
      contribution: 'Onboarding and reviews',
      score: 90,
    },
  ],

  // -------------------------------------------------------------------------
  // Corporate PRs
  // -------------------------------------------------------------------------

  // --- Middle KEY: Sends and retrieves data through a network ---
  [PullRequestId.SHARED_UI_WEB_36900]: [
    {
      topicId:
        TopicId.SENDS_AND_RETRIEVES_DATA_THROUGH_A_NETWORK_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Server-driven impression analytics over HTTP',
      score: 90,
    },
    {
      topicId: TopicId.USES_HTTP_CLIENTS_FOR_API_COMMUNICATION,
      contribution: 'HTTP analytics payload submission',
      score: 80,
    },
    {
      topicId: TopicId.USES_TECHNICS_TO_DYNAMICALLY_GENERATE_ELEMENTS,
      contribution: 'Server-driven analytics element rendering',
      score: 55,
    },
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Impression analytics data display',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_15079]: [
    {
      topicId:
        TopicId.SENDS_AND_RETRIEVES_DATA_THROUGH_A_NETWORK_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Parallel GraphQL query firing fix',
      score: 90,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_CONCURRENCY_CONCEPTS_BY_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Parallel query execution race condition',
      score: 80,
    },
    {
      topicId: TopicId.TROUBLESHOOTS_NETWORK_USING_TOOLS_AND_LIBRARIES,
      contribution: 'Network timing issue diagnosis',
      score: 75,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_ASYNCHRONY_AND_NON_BLOCKING_ENVIRONMENT_CONCEPTS,
      contribution: 'Parallel async query execution',
      score: 75,
    },
    {
      topicId:
        TopicId.OPTIMISES_APPLICATION_PERFORMANCE_TAKING_INTO_ACCOUNT_THE_COMPLEXITY_OF_THE_ALGORITHMS,
      contribution: 'Parallel query performance optimization',
      score: 75,
    },
    {
      topicId:
        TopicId.SYNCHRONISES_CONCURRENT_OPERATIONS_BY_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Concurrent query synchronization',
      score: 75,
    },
  ],
  [PullRequestId.SHOPPING_PWA_13017]: [
    {
      topicId:
        TopicId.SENDS_AND_RETRIEVES_DATA_THROUGH_A_NETWORK_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Construct network request parameters',
      score: 90,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Switch case for query parameter routing',
      score: 80,
    },
  ],

  // --- Middle KEY: Uses HTTP clients for API communication ---
  [PullRequestId.SHARED_UI_WEB_15745]: [
    {
      topicId: TopicId.USES_HTTP_CLIENTS_FOR_API_COMMUNICATION,
      contribution: 'Submit user queries to API endpoint',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_USER_INTERACTION_WITH_EVENTS_HANDLERS,
      contribution: 'Submit and suggestion event handlers',
      score: 80,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'AI search box component composition',
      score: 75,
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'React form submission handlers',
      score: 75,
    },
    {
      topicId: TopicId.USES_FORMS_FOR_USER_INPUTS_AND_INTERACTION,
      contribution: 'Search input form with suggestions',
      score: 75,
    },
    {
      topicId: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS,
      contribution: 'AI search text input widget',
      score: 75,
    },
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      contribution: 'Search box component design',
      score: 75,
    },
  ],
  [PullRequestId.EXP_API_LODGING_OFFERS_10243]: [
    {
      topicId: TopicId.USES_HTTP_CLIENTS_FOR_API_COMMUNICATION,
      contribution: 'API client for pricing service',
      score: 90,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'Server-side API integrating pricing service over HTTP',
      score: 90,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Business integration requirement implementation',
      score: 80,
    },
  ],

  // --- Middle KEY: Troubleshoots network ---
  [PullRequestId.SHARED_UI_WEB_17220]: [
    {
      topicId: TopicId.TROUBLESHOOTS_NETWORK_USING_TOOLS_AND_LIBRARIES,
      contribution: 'Debug redundant GraphQL network calls',
      score: 90,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_CONCURRENCY_CONCEPTS_BY_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Prevent re-firing during concurrent state changes',
      score: 80,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_ASYNCHRONY_AND_NON_BLOCKING_ENVIRONMENT_CONCEPTS,
      contribution: 'Prevent async query re-fires',
      score: 75,
    },
    {
      topicId:
        TopicId.APPLIES_METHODOLOGY_AND_BEST_PRACTICES_FOR_LANGUAGE_PERFORMANCE_OPTIMISATION,
      contribution: 'Eliminate redundant network calls',
      score: 75,
    },
    {
      topicId:
        TopicId.USES_FRAMEWORK_RELATED_AND_BASIC_TOOLS_FOR_APPLICATION_S_DEBUGGING,
      contribution: 'Debug redundant GraphQL re-fires',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_16805]: [
    {
      topicId: TopicId.TROUBLESHOOTS_NETWORK_USING_TOOLS_AND_LIBRARIES,
      contribution: 'Fix GraphQL race condition on searchId update',
      score: 90,
    },
  ],
  [PullRequestId.SHOPPING_PWA_17433]: [
    {
      topicId: TopicId.TROUBLESHOOTS_NETWORK_USING_TOOLS_AND_LIBRARIES,
      contribution: 'Troubleshoot data prefetch pipeline',
      score: 90,
    },
    {
      topicId: TopicId.STORES_REUSES_AND_MANIPULATES_DATA,
      contribution: 'Prefetched data manipulation',
      score: 80,
    },
    {
      topicId:
        TopicId.USES_FRAMEWORK_RELATED_AND_BASIC_TOOLS_FOR_APPLICATION_S_DEBUGGING,
      contribution: 'Debug prefetch data pipeline',
      score: 75,
    },
  ],

  // --- Junior: Interacts with API and handles request metadata ---
  [PullRequestId.SHARED_UI_WEB_18981]: [
    {
      topicId: TopicId.INTERACTS_WITH_API_AND_HANDLES_REQUEST_METADATA,
      contribution: 'GraphQL fragment modification for API request structure',
      score: 90,
    },
  ],
  [PullRequestId.SHOPPING_PWA_7538]: [
    {
      topicId: TopicId.INTERACTS_WITH_API_AND_HANDLES_REQUEST_METADATA,
      contribution: 'Dynamic template based on API response metadata',
      score: 90,
    },
    {
      topicId: TopicId.USES_TECHNICS_TO_DYNAMICALLY_GENERATE_ELEMENTS,
      contribution: 'Dynamic template based on API response',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_5329]: [
    {
      topicId: TopicId.INTERACTS_WITH_API_AND_HANDLES_REQUEST_METADATA,
      contribution: 'Impression analytics API integration',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_ECOSYSTEM_FOR_APPLICATION_STATE_MONITORING,
      contribution: 'Impression tracking ecosystem setup',
      score: 75,
    },
  ],

  // --- Junior: Uses basic router capability for building navigation ---
  [PullRequestId.SHOPPING_PWA_8297]: [
    {
      topicId: TopicId.USES_BASIC_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION,
      contribution: 'URL parameter persistence on location change',
      score: 90,
    },
  ],

  // --- Junior: Debugs markups and styles ---
  [PullRequestId.SHOPPING_PWA_12802]: [
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Debug CSS spacing issue in filter bar',
      score: 90,
    },
  ],
  [PullRequestId.SHOPPING_PWA_12865]: [
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Debug filter sheet overflow styling',
      score: 90,
    },
    {
      topicId: TopicId.STYLING_ELEMENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Filter sheet overflow styling fix',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_22700]: [
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Debug submit button margin issue',
      score: 90,
    },
  ],

  // --- Middle KEY: Applies security practices ---
  [PullRequestId.SHOPPING_PWA_14816]: [
    {
      topicId:
        TopicId.APPLIES_SECURITY_PRACTICES_AND_APPROACHES_TO_PROTECT_APPLICATION,
      contribution: 'Sanitize URL parameters by removing AI_* keys',
      score: 90,
    },
    {
      topicId: TopicId.SECURES_NETWORK_INTERACTION_USING_A_PROGRAMMING_LANGUAGE,
      contribution: 'Prevent data leakage in URL parameters',
      score: 80,
    },
    {
      topicId:
        TopicId.USES_BUILT_IN_ITERATORS_TO_TRAVERSE_THROUGH_DIFFERENT_TYPES_OF_COLLECTIONS,
      contribution: 'Filter array to remove AI_* keys',
      score: 45,
    },
    {
      topicId: TopicId.USES_AND_MAINTAINS_LANGUAGE_OPERATORS_AND_COMMENTS,
      contribution: 'Spread and filter operators for key removal',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_14925]: [
    {
      topicId:
        TopicId.APPLIES_SECURITY_PRACTICES_AND_APPROACHES_TO_PROTECT_APPLICATION,
      contribution: 'Prevent arbitrary filter keys from leaking',
      score: 90,
    },
    {
      topicId:
        TopicId.VALIDATES_FINDS_AND_REPLACES_STRING_DATA_WITH_REGULAR_EXPRESSIONS,
      contribution: 'Filter key pattern matching and replacement',
      score: 80,
    },
  ],
  [PullRequestId.SHOPPING_PWA_8704]: [
    {
      topicId:
        TopicId.APPLIES_SECURITY_PRACTICES_AND_APPROACHES_TO_PROTECT_APPLICATION,
      contribution: 'Whitelist-based parameter validation',
      score: 90,
    },
    {
      topicId: TopicId.SECURES_NETWORK_INTERACTION_USING_A_PROGRAMMING_LANGUAGE,
      contribution: 'Server-side parameter whitelist security',
      score: 80,
    },
    {
      topicId: TopicId.HANDLES_ENVIRONMENT_VARIABLES_AND_SECRETS,
      contribution: 'SSR whitelist parameter configuration',
      score: 75,
    },
  ],

  // --- Middle KEY: Manages technical debt ---
  [PullRequestId.SHARED_UI_WEB_35481]: [
    {
      topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
      contribution: 'Remove decided experiment code',
      score: 90,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_35318]: [
    {
      topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
      contribution: 'Remove decided experiment code',
      score: 90,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_35144]: [
    {
      topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
      contribution: 'Simplify over-complex data source logic',
      score: 90,
    },
    {
      topicId:
        TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
      contribution: 'Data source abstraction for scalability',
      score: 80,
    },
    {
      topicId:
        TopicId.USES_BUILT_IN_ITERATORS_TO_TRAVERSE_THROUGH_DIFFERENT_TYPES_OF_COLLECTIONS,
      contribution: 'Iterate over data sources for simplification',
      score: 45,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Simplify component state interaction',
      score: 45,
    },
    {
      topicId: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Collection-based data source simplification',
      score: 75,
    },
    {
      topicId:
        TopicId.ENSURES_EFFICIENT_AND_FLEXIBLE_COMPOSITION_OF_STRUCTURES_WITH_DESIGN_PATTERNS,
      contribution: 'Efficient data source composition',
      score: 45,
    },
    {
      topicId:
        TopicId.EVALUATES_AND_MODIFIES_SOFTWARE_DESIGN_TO_ENSURE_SOFTWARE_QUALITY,
      contribution: 'Evaluate and simplify data source design',
      score: 45,
    },
  ],

  // --- Middle: Implements concurrency concepts ---
  [PullRequestId.SHARED_UI_WEB_15935]: [
    {
      topicId:
        TopicId.IMPLEMENTS_CONCURRENCY_CONCEPTS_BY_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Sequence async operations to avoid race condition',
      score: 90,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_ASYNCHRONY_AND_NON_BLOCKING_ENVIRONMENT_CONCEPTS,
      contribution: 'Sequence async field change and submit',
      score: 80,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Form field change and submit interaction',
      score: 75,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Component lifecycle sequencing',
      score: 45,
    },
    {
      topicId:
        TopicId.SYNCHRONISES_CONCURRENT_OPERATIONS_BY_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Synchronize field change with form submit',
      score: 75,
    },
  ],

  // --- Middle: Manipulates date and time ---
  [PullRequestId.SHARED_UI_WEB_37156]: [
    {
      topicId: TopicId.MANIPULATES_DATE_AND_TIME_WITH_LANGUAGE_APIS,
      contribution: 'Date object/string format conversion',
      score: 90,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_31599]: [
    {
      topicId: TopicId.MANIPULATES_DATE_AND_TIME_WITH_LANGUAGE_APIS,
      contribution: 'Date change handling in dialog',
      score: 90,
    },
  ],

  // --- Middle: Uses language APIs for mathematical operations ---
  [PullRequestId.SHARED_UI_WEB_10735]: [
    {
      topicId: TopicId.USES_LANGUAGE_APIS_FOR_MATHEMATICAL_OPERATIONS,
      contribution: 'Range/price calculations for filters',
      score: 90,
    },
    {
      topicId: TopicId.USES_FORMS_FOR_USER_INPUTS_AND_INTERACTION,
      contribution: 'Range text input field for filters',
      score: 80,
    },
    {
      topicId: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS,
      contribution: 'Numeric range input widget',
      score: 75,
    },
    {
      topicId: TopicId.STORES_REUSES_AND_OPERATES_ON_BASIC_DATA_TYPES,
      contribution: 'Numeric range data type operations',
      score: 75,
    },
  ],
  [PullRequestId.SHOPPING_PWA_15012]: [
    {
      topicId: TopicId.USES_LANGUAGE_APIS_FOR_MATHEMATICAL_OPERATIONS,
      contribution: 'Price value manipulation',
      score: 90,
    },
    {
      topicId:
        TopicId.USES_BUILT_IN_ITERATORS_TO_TRAVERSE_THROUGH_DIFFERENT_TYPES_OF_COLLECTIONS,
      contribution: 'Iterate and transform filter dictionaries',
      score: 75,
    },
    {
      topicId: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Dictionary data management for filters',
      score: 75,
    },
  ],
  [PullRequestId.EXP_API_LODGING_OFFERS_10403]: [
    {
      topicId: TopicId.USES_LANGUAGE_APIS_FOR_MATHEMATICAL_OPERATIONS,
      contribution: 'Price insight scoring calculations',
      score: 90,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Conditional suppression rules in PriceInsightService',
      score: 85,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Great Find suppression business rules',
      score: 80,
    },
  ],

  // --- Middle: Defines custom event for user interaction ---
  [PullRequestId.SHARED_UI_WEB_21664]: [
    {
      topicId: TopicId.DEFINES_CUSTOM_EVENT_FOR_HANDLING_USER_INTERACTION,
      contribution: 'Custom synthetic events for interaction flow',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_USER_INTERACTION_WITH_EVENTS_HANDLERS,
      contribution: 'Synthetic event dispatching',
      score: 80,
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'React synthetic event handling',
      score: 75,
    },
    {
      topicId: TopicId.USES_FRAMEWORK_BUILT_IN_TOOLS_FOR_CODE_REUSABILITY,
      contribution: 'Reusable synthetic event pattern',
      score: 75,
    },
    {
      topicId:
        TopicId.USES_DESIGN_PATTERNS_TO_CREATE_NEW_STRUCTURES_BASED_ON_REQUIREMENTS,
      contribution: 'Observer pattern for event communication',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_11332]: [
    {
      topicId: TopicId.DEFINES_CUSTOM_EVENT_FOR_HANDLING_USER_INTERACTION,
      contribution: 'Event-driven cross-component communication',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_USER_INTERACTION_WITH_EVENTS_HANDLERS,
      contribution: 'Cross-component event interaction',
      score: 80,
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'React signals-based event handling',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_19577]: [
    {
      topicId: TopicId.DEFINES_CUSTOM_EVENT_FOR_HANDLING_USER_INTERACTION,
      contribution: 'Signals-based event system setup',
      score: 90,
    },
    {
      topicId:
        TopicId.DEFINES_MAINTAINS_AND_USES_MODULAR_STRUCTURES_FOR_CODE_NAMESPACING_AND_REUSABILITY,
      contribution: 'Signals workspace module structure',
      score: 80,
    },
  ],

  // --- Middle: Manages data for scalable applications ---
  [PullRequestId.SHARED_UI_WEB_33436]: [
    {
      topicId:
        TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
      contribution: 'GraphQL data prefetching through component tree',
      score: 90,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Prefetched data flow through components',
      score: 80,
    },
    {
      topicId: TopicId.STORES_REUSES_AND_MANIPULATES_DATA,
      contribution: 'Nested prefetched data manipulation',
      score: 75,
    },
    {
      topicId: TopicId.MANAGES_ADVANCED_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Complex GraphQL data structure management',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_14474]: [
    {
      topicId:
        TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
      contribution: 'Apollo cache type policies for scalable state',
      score: 90,
    },
    {
      topicId: TopicId.USES_LANGUAGE_METAPROGRAMMING_TECHNIQUES,
      contribution: 'Runtime type introspection via Apollo type policies',
      score: 80,
    },
    {
      topicId: TopicId.STORES_REUSES_AND_MANIPULATES_DATA,
      contribution: 'Apollo cache data reuse via type policies',
      score: 75,
    },
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      contribution: 'Type policy definitions for cache integrity',
      score: 75,
    },
    {
      topicId: TopicId.MANAGES_ADVANCED_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Advanced cache collection management',
      score: 75,
    },
  ],

  // --- Middle: Uses advanced router capability + basic router ---
  [PullRequestId.SHOPPING_PWA_15411]: [
    {
      topicId: TopicId.USES_ADVANCED_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION,
      contribution: 'URL query parameter construction refactor',
      score: 90,
    },
    {
      topicId: TopicId.USES_BASIC_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION,
      contribution: 'URL query parameter management',
      score: 80,
    },
  ],
  [PullRequestId.SHOPPING_PWA_12257]: [
    {
      topicId: TopicId.USES_ADVANCED_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION,
      contribution: 'Route parameter replacement logic',
      score: 90,
    },
    {
      topicId: TopicId.USES_BASIC_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION,
      contribution: 'Route parameter replacement',
      score: 80,
    },
    {
      topicId: TopicId.STORES_REUSES_AND_OPERATES_ON_BASIC_DATA_TYPES,
      contribution: 'String comparison for parameter replacement',
      score: 75,
    },
  ],
  [PullRequestId.SHOPPING_PWA_11779]: [
    {
      topicId: TopicId.USES_ADVANCED_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION,
      contribution: 'Route state synchronization on destination change',
      score: 90,
    },
    {
      topicId: TopicId.USES_BASIC_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION,
      contribution: 'Route state synchronization',
      score: 80,
    },
  ],

  // --- Middle: Handles internationalisation ---
  [PullRequestId.PRODUCT_DETAILS_API_3218]: [
    {
      topicId:
        TopicId.HANDLES_INTERNATIONALISATION_IN_SCOPE_OF_THE_APPLICATIONS_DEVELOPMENT,
      contribution: 'Localization key management',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Curate and rename localization key sets',
      score: 75,
    },
    {
      topicId: TopicId.STORES_REUSES_AND_MANIPULATES_DATA,
      contribution: 'Manage default localization key structures',
      score: 65,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3225]: [
    {
      topicId:
        TopicId.HANDLES_INTERNATIONALISATION_IN_SCOPE_OF_THE_APPLICATIONS_DEVELOPMENT,
      contribution: 'Locale-aware label selection',
      score: 90,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution:
        'Branching logic to select overview vs overlay metric label',
      score: 85,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3360]: [
    {
      topicId:
        TopicId.HANDLES_INTERNATIONALISATION_IN_SCOPE_OF_THE_APPLICATIONS_DEVELOPMENT,
      contribution: 'Localized content for LBG feature',
      score: 90,
    },
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Loved by Guests explanatory text display',
      score: 45,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Explanatory copy feature implementation',
      score: 85,
    },
    {
      topicId: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Localized strings and content keys',
      score: 70,
    },
  ],

  // --- Middle: Handles scroll detection ---
  [PullRequestId.EGDS_COMPONENTS_REACT_712]: [
    {
      topicId: TopicId.HANDLES_SCROLL_DETECTION_THROUGH_TOOLS_AND_LIBRARIES,
      contribution: 'IntersectionObserver setup for visibility detection',
      score: 90,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_A_USER_INTERFACE_USING_LANGUAGE_BUILT_IN_TECHNICS,
      contribution: 'IntersectionObserver DOM API usage',
      score: 45,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Observer setup in component lifecycle',
      score: 45,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_735]: [
    {
      topicId: TopicId.HANDLES_SCROLL_DETECTION_THROUGH_TOOLS_AND_LIBRARIES,
      contribution: 'Scroll-based carousel behavior',
      score: 90,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_17571]: [
    {
      topicId: TopicId.HANDLES_SCROLL_DETECTION_THROUGH_TOOLS_AND_LIBRARIES,
      contribution: 'Sticky positioning via scroll detection',
      score: 90,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'StickyWrapper mount/unmount lifecycle',
      score: 75,
    },
  ],

  // --- Middle: Validates data ---
  [PullRequestId.SHARED_UI_WEB_30536]: [
    {
      topicId: TopicId.VALIDATES_DATA_WITH_TOOLS_AND_LIBRARIES,
      contribution: 'Input validation with defaults',
      score: 90,
    },
    {
      topicId: TopicId.USES_FORMS_FOR_USER_INPUTS_AND_INTERACTION,
      contribution: 'Inquiry form with default values',
      score: 80,
    },
    {
      topicId: TopicId.HANDLES_EXCEPTIONS_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Defensive default handling for form input',
      score: 75,
    },
  ],
  [PullRequestId.EXP_API_LODGING_PROPERTY_3221]: [
    {
      topicId: TopicId.VALIDATES_DATA_WITH_TOOLS_AND_LIBRARIES,
      contribution: 'Server-side input validation',
      score: 90,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'REST API endpoint handling client requests over HTTP',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_EXCEPTIONS_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Guard clause for zero adults validation',
      score: 80,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Inquiry submission guard for guest count',
      score: 80,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Explicit check for numAdults edge case',
      score: 75,
    },
  ],
  [PullRequestId.SHOPPING_PWA_8403]: [
    {
      topicId: TopicId.VALIDATES_DATA_WITH_TOOLS_AND_LIBRARIES,
      contribution: 'Cross-field validation consistency',
      score: 90,
    },
  ],

  // --- Middle: Provides support for different browsers ---
  [PullRequestId.SHOPPING_PWA_14732]: [
    {
      topicId: TopicId.PROVIDES_SUPPORT_FOR_DIFFERENT_BROWSERS,
      contribution: 'Mobile browser landscape mode layout fix',
      score: 90,
    },
    {
      topicId: TopicId.STYLING_ELEMENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Mobile landscape filter bar styling',
      score: 80,
    },
  ],
  [PullRequestId.SHOPPING_PWA_12834]: [
    {
      topicId: TopicId.PROVIDES_SUPPORT_FOR_DIFFERENT_BROWSERS,
      contribution: 'Mobile web browser spacing compatibility',
      score: 90,
    },
    {
      topicId:
        TopicId.APPLIES_TECHNICS_AND_USES_TECHNOLOGY_FOR_STYLING_COMPONENTS,
      contribution: 'Mobile web filter bar spacing',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_18503]: [
    {
      topicId: TopicId.PROVIDES_SUPPORT_FOR_DIFFERENT_BROWSERS,
      contribution: 'Split-view browser feature fix',
      score: 90,
    },
  ],

  // --- Middle: Transforms elements using style sheets ---
  [PullRequestId.EGDS_COMPONENTS_REACT_956]: [
    {
      topicId: TopicId.TRANSFORMS_ELEMENTS_USING_STYLE_SHEETS,
      contribution: 'CSS z-index layering for carousel items',
      score: 90,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_1898]: [
    {
      topicId: TopicId.TRANSFORMS_ELEMENTS_USING_STYLE_SHEETS,
      contribution: 'CSS overflow/transform handling refactor',
      score: 90,
    },
    {
      topicId:
        TopicId.APPLIES_TECHNICS_AND_USES_TECHNOLOGY_FOR_STYLING_COMPONENTS,
      contribution: 'Carousel inner spacing and overflow styling',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_12593]: [
    {
      topicId: TopicId.TRANSFORMS_ELEMENTS_USING_STYLE_SHEETS,
      contribution: 'CSS stacking context for map trigger',
      score: 90,
    },
    {
      topicId:
        TopicId.APPLIES_TECHNICS_AND_USES_TECHNOLOGY_FOR_STYLING_COMPONENTS,
      contribution: 'CSS z-index stacking for floating wrapper',
      score: 45,
    },
  ],

  // --- Middle: Embeds content from another source ---
  [PullRequestId.PRODUCT_DETAILS_API_3527]: [
    {
      topicId: TopicId.EMBEDS_CONTENT_FROM_ANOTHER_SOURCE_INTO_A_WEBPAGE,
      contribution: 'Server-driven pictogram embedded into page',
      score: 90,
    },
    {
      topicId: TopicId.USES_TECHNICS_TO_DYNAMICALLY_GENERATE_ELEMENTS,
      contribution: 'Server-driven dynamic pictogram rendering',
      score: 55,
    },
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Blue Ribbon Pictogram display',
      score: 45,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'Server-driven UI payload for Top of PDP',
      score: 85,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Blue Ribbon pictogram feature requirement',
      score: 75,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3590]: [
    {
      topicId: TopicId.EMBEDS_CONTENT_FROM_ANOTHER_SOURCE_INTO_A_WEBPAGE,
      contribution: 'Externally-sourced image asset embedding',
      score: 90,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'API response shaping for LBG mark image URLs',
      score: 85,
    },
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      contribution: 'Typed mark payload including darkModeUrl',
      score: 80,
    },
    {
      topicId: TopicId.STORES_REUSES_AND_MANIPULATES_DATA,
      contribution: 'Mark image URL field manipulation',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_GRAPHQL_8231]: [
    {
      topicId: TopicId.EMBEDS_CONTENT_FROM_ANOTHER_SOURCE_INTO_A_WEBPAGE,
      contribution: 'GraphQL type for embedded external image content',
      score: 90,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'GraphQL schema defining client-server data contract',
      score: 85,
    },
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      contribution: 'GraphQL Mark type extended for dual theme URLs',
      score: 90,
    },
    {
      topicId: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR,
      contribution: 'Cohesive Mark type fields for image assets',
      score: 75,
    },
  ],

  // --- Senior: Creates and maintains component library ---
  [PullRequestId.EGDS_COMPONENTS_REACT_1011]: [
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Create new typeahead component for design system',
      score: 90,
    },
    {
      topicId:
        TopicId.DEFINES_MAINTAINS_AND_USES_MODULAR_STRUCTURES_FOR_CODE_NAMESPACING_AND_REUSABILITY,
      contribution: 'Create reusable typeahead module',
      score: 80,
    },
    {
      topicId: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS,
      contribution: 'Typeahead input widget with selections',
      score: 75,
    },
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      contribution: 'Typeahead component design',
      score: 75,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_759]: [
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Carousel button behavior update in design system',
      score: 90,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_720]: [
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Carousel subcomponent for design system',
      score: 90,
    },
    {
      topicId: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR,
      contribution: 'Carousel subcomponent encapsulation',
      score: 80,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Carousel subcomponent composition',
      score: 75,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_CUSTOM_USER_INTERFACE_COMPONENTS,
      contribution: 'Custom carousel width subcomponent',
      score: 75,
    },
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      contribution: 'Carousel subcomponent design',
      score: 75,
    },
    {
      topicId:
        TopicId.ENSURES_EFFICIENT_AND_FLEXIBLE_COMPOSITION_OF_STRUCTURES_WITH_DESIGN_PATTERNS,
      contribution: 'Flexible width subcomponent design',
      score: 75,
    },
  ],

  // --- Senior: Uses language metaprogramming techniques ---
  [PullRequestId.SHARED_UI_WEB_14227]: [
    {
      topicId: TopicId.USES_LANGUAGE_METAPROGRAMMING_TECHNIQUES,
      contribution: 'Dynamic type resolution via Apollo type policies',
      score: 90,
    },
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      contribution: 'Type policy for trigger pill integrity',
      score: 80,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_797]: [
    {
      topicId: TopicId.USES_LANGUAGE_METAPROGRAMMING_TECHNIQUES,
      contribution: 'Server-driven component behavior via runtime config',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_ECOSYSTEM_FOR_APPLICATION_STATE_MONITORING,
      contribution: 'Server-driven analytics in component library',
      score: 75,
    },
    {
      topicId:
        TopicId.USES_DESIGN_PATTERNS_TO_CREATE_NEW_STRUCTURES_BASED_ON_REQUIREMENTS,
      contribution: 'Strategy pattern for server-driven analytics',
      score: 45,
    },
  ],

  // --- Middle: Collects data using requirements elicitation ---
  [PullRequestId.SHARED_UI_WEB_18919]: [
    {
      topicId:
        TopicId.COLLECTS_DATA_USING_REQUIREMENTS_ELICITATION_TECHNIQUES_AND_METHODOLOGIES,
      contribution: 'User interaction data collection for AI search',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_ECOSYSTEM_FOR_APPLICATION_STATE_MONITORING,
      contribution: 'AI Search user behavior tracking',
      score: 75,
    },
  ],

  // --- Middle: Uses different requirement sources ---
  [PullRequestId.PRODUCT_DETAILS_API_3350]: [
    {
      topicId:
        TopicId.USES_DIFFERENT_REQUIREMENT_SOURCES_FOR_SOLUTION_IMPLEMENTATION,
      contribution: 'Multi-brand business rules as requirement source',
      score: 90,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Conditional brand suppression logic',
      score: 45,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Multi-brand business rule implementation',
      score: 80,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'API logic for host signals by brand',
      score: 75,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3572]: [
    {
      topicId:
        TopicId.USES_DIFFERENT_REQUIREMENT_SOURCES_FOR_SOLUTION_IMPLEMENTATION,
      contribution: 'Multiple product surface constraints',
      score: 90,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Branching TnL evaluation logic',
      score: 80,
    },
    {
      topicId: TopicId.USES_AND_MAINTAINS_LANGUAGE_OPERATORS_AND_COMMENTS,
      contribution: 'Logical operators for evaluation separation',
      score: 45,
    },
    {
      topicId:
        TopicId.DISTRIBUTES_RESPONSIBILITY_BETWEEN_STRUCTURES_USING_DESIGN_PATTERNS,
      contribution: 'Separate evaluation responsibilities',
      score: 45,
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Refactor TnL evaluation across PDP surfaces',
      score: 75,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'Server-side feature evaluation in product API',
      score: 70,
    },
  ],
  [PullRequestId.SHOPPING_PWA_17074]: [
    {
      topicId:
        TopicId.USES_DIFFERENT_REQUIREMENT_SOURCES_FOR_SOLUTION_IMPLEMENTATION,
      contribution: 'Design spec + experiment data as requirement sources',
      score: 90,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Design spec and experiment-driven implementation',
      score: 80,
    },
  ],

  // --- Senior: Secures network interaction ---
  [PullRequestId.PRODUCT_DETAILS_API_3339]: [
    {
      topicId: TopicId.SECURES_NETWORK_INTERACTION_USING_A_PROGRAMMING_LANGUAGE,
      contribution: 'Fraud prevention key configuration',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_ENVIRONMENT_VARIABLES_AND_SECRETS,
      contribution: 'Manage fraud and feature configuration keys',
      score: 80,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Default key map for feature toggles and fraud signals',
      score: 85,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Conditional configuration assembly',
      score: 55,
    },
  ],

  // --- Middle: Validates/finds/replaces string data with regex ---
  [PullRequestId.SHARED_UI_WEB_9518]: [
    {
      topicId:
        TopicId.VALIDATES_FINDS_AND_REPLACES_STRING_DATA_WITH_REGULAR_EXPRESSIONS,
      contribution: 'Comma-separated query param parsing',
      score: 90,
    },
  ],

  // --- Senior: Accessibility rules and guidelines ---
  [PullRequestId.SHARED_UI_WEB_31860]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'Add a11y attributes to product header',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_ACCESSIBLE_WEB_PAGES,
      contribution: 'Accessible product header markup',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_31486]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'Add a11y label to score card',
      score: 90,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_14409]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'Add screenreader-only heading to dropdown',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_ACCESSIBLE_WEB_PAGES,
      contribution: 'Accessible dropdown field markup',
      score: 80,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_A_USER_INTERFACE_USING_LANGUAGE_BUILT_IN_TECHNICS,
      contribution: 'DOM manipulation for screenreader heading',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_14370]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'Focus management for filter pill removal',
      score: 90,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_A_USER_INTERFACE_USING_LANGUAGE_BUILT_IN_TECHNICS,
      contribution: 'DOM focus management for pill removal',
      score: 45,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_2326]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'Replace aria-hidden with data-hidden for a11y',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_ACCESSIBLE_WEB_PAGES,
      contribution: 'Accessible component library updates',
      score: 80,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3285]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'Add a11y label to product title',
      score: 90,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'GraphQL-backed product header field wiring',
      score: 75,
    },
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      contribution: 'Typed a11y field on product header model',
      score: 65,
    },
  ],

  // --- Design: Refactoring and reusable structures ---
  [PullRequestId.SHARED_UI_WEB_22591]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Component lifecycle optimization refactor',
      score: 90,
    },
    {
      topicId: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR,
      contribution: 'StickyWrapper behavior encapsulation',
      score: 80,
    },
    {
      topicId: TopicId.USES_FRAMEWORK_BUILT_IN_TOOLS_FOR_CODE_REUSABILITY,
      contribution: 'Reusable wrapper lifecycle hooks',
      score: 75,
    },
    {
      topicId:
        TopicId.DISTRIBUTES_RESPONSIBILITY_BETWEEN_STRUCTURES_USING_DESIGN_PATTERNS,
      contribution: 'Separate sticky and children concerns',
      score: 45,
    },
    {
      topicId:
        TopicId.EVALUATES_AND_MODIFIES_SOFTWARE_DESIGN_TO_ENSURE_SOFTWARE_QUALITY,
      contribution: 'Refactor to eliminate unmount/remount issues',
      score: 45,
    },
    {
      topicId:
        TopicId.APPLIES_METHODOLOGY_AND_BEST_PRACTICES_FOR_LANGUAGE_PERFORMANCE_OPTIMISATION,
      contribution: 'Avoid unnecessary component remounts',
      score: 45,
    },
    {
      topicId:
        TopicId.OPTIMISES_APPLICATION_PERFORMANCE_TAKING_INTO_ACCOUNT_THE_COMPLEXITY_OF_THE_ALGORITHMS,
      contribution: 'Eliminate unnecessary component lifecycle overhead',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_24809]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Modal state management refactor',
      score: 90,
    },
    {
      topicId:
        TopicId.CREATES_REUSABLE_STRUCTURES_BY_APPLYING_DESIGN_STRATEGIES_AND_METHODOLOGIES,
      contribution: 'Reusable modal component design',
      score: 80,
    },
    {
      topicId:
        TopicId.USES_DESIGN_PATTERNS_TO_CREATE_NEW_STRUCTURES_BASED_ON_REQUIREMENTS,
      contribution: 'State pattern for modal management',
      score: 75,
    },
    {
      topicId:
        TopicId.EVALUATES_AND_MODIFIES_SOFTWARE_DESIGN_TO_ENSURE_SOFTWARE_QUALITY,
      contribution: 'Modal design evaluation and improvement',
      score: 75,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_2463]: [
    {
      topicId:
        TopicId.CREATES_REUSABLE_STRUCTURES_BY_APPLYING_DESIGN_STRATEGIES_AND_METHODOLOGIES,
      contribution: 'Flexible carousel child rendering API',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Carousel API extension for multi-item children',
      score: 80,
    },
    {
      topicId: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR,
      contribution: 'Multi-item children encapsulation',
      score: 75,
    },
    {
      topicId:
        TopicId.DEFINES_MAINTAINS_AND_USES_MODULAR_STRUCTURES_FOR_CODE_NAMESPACING_AND_REUSABILITY,
      contribution: 'Modular carousel API for multi-item rendering',
      score: 75,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Compose carousel with multi-item children',
      score: 75,
    },
    {
      topicId: TopicId.USES_FRAMEWORK_BUILT_IN_TOOLS_FOR_CODE_REUSABILITY,
      contribution: 'Reusable carousel rendering API',
      score: 75,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_CUSTOM_USER_INTERFACE_COMPONENTS,
      contribution: 'Extended carousel child rendering component',
      score: 75,
    },
    {
      topicId:
        TopicId.DISTRIBUTES_RESPONSIBILITY_BETWEEN_STRUCTURES_USING_DESIGN_PATTERNS,
      contribution: 'Composable children responsibility distribution',
      score: 45,
    },
    {
      topicId:
        TopicId.ENSURES_EFFICIENT_AND_FLEXIBLE_COMPOSITION_OF_STRUCTURES_WITH_DESIGN_PATTERNS,
      contribution: 'Flexible carousel composition pattern',
      score: 45,
    },
  ],

  // --- New PRs (to be evaluated) ---
  [PullRequestId.COMPONENTS_KOTLIN_853]: [
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      contribution: 'Extend Mark model with darkModeUrl field',
      score: 95,
    },
    {
      topicId: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR,
      contribution: 'Cohesive Mark type for LBG image assets',
      score: 85,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Loved By Guests dark-mode image requirement',
      score: 80,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_1945]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Downgrade throttle-debounce to a compatible release',
      score: 95,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Resolve transitive dependency compatibility for carousel',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Package manifest / lockfile alignment',
      score: 45,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_1845]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Refactor carousel inner spacing and overflow styling',
      score: 90,
    },
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'CSS spacing and overflow rules for carousel track',
      score: 85,
    },
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Tighten layout issues in carousel inner region',
      score: 70,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Design-system carousel presentation update',
      score: 75,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_1807]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'Carousel wrapper tabindex and item aria labeling',
      score: 95,
    },
    {
      topicId: TopicId.CREATES_ACCESSIBLE_WEB_PAGES,
      contribution: 'Keyboard and screen-reader semantics for carousel items',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Accessible carousel behavior in shared React library',
      score: 75,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_1584]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'Clear control labeling on EGDSTypeahead',
      score: 95,
    },
    {
      topicId: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS,
      contribution: 'Typeahead clear button discoverable to assistive tech',
      score: 80,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Typeahead a11y fix in design system',
      score: 75,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_1385]: [
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Filter null children before rendering carousel items',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Harden carousel composition against invalid children',
      score: 80,
    },
    {
      topicId: TopicId.HANDLES_EXCEPTIONS_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Defensive handling of null slots in children list',
      score: 65,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_1378]: [
    {
      topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
      contribution: 'Remove deprecated team typeahead surface',
      score: 90,
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Delete obsolete typeahead code paths',
      score: 80,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Prune unused typeahead from component library',
      score: 70,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_1024]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution:
        'Rename handleClear to onTextInputClear and add onSelection',
      score: 90,
    },
    {
      topicId: TopicId.DEFINES_CUSTOM_EVENT_FOR_HANDLING_USER_INTERACTION,
      contribution: 'Clarify typeahead callback API for clear vs selection',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Typeahead public API alignment',
      score: 75,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_1023]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Split onDismiss vs onSubmit semantics for typeahead',
      score: 90,
    },
    {
      topicId: TopicId.DEFINES_CUSTOM_EVENT_FOR_HANDLING_USER_INTERACTION,
      contribution: 'New dismissal callback separate from submit flow',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Typeahead interaction contract update',
      score: 75,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_871]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Vendor uitk-react-slider@5.4.12 into package',
      score: 95,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Pin slider dependency to known-good build',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Dependency copy / workspace wiring',
      score: 45,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_869]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'edgeItemsPadding accepts multiple responsive values',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Carousel padding API extension',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_RESPONSIVE_LAYOUTS_WITH_ADAPTIVE_TECHNICS,
      contribution: 'Responsive edge padding configuration',
      score: 75,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_862]: [
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'Rename base CSS class for carousel layout',
      score: 85,
    },
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Align markup with updated class naming',
      score: 75,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Carousel stylesheet contract update',
      score: 70,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_848]: [
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Optional edge-items padding prop on carousel',
      score: 95,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Expose padding behavior without breaking defaults',
      score: 85,
    },
    {
      topicId: TopicId.STYLING_ELEMENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Wire new prop through carousel presentation',
      score: 70,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_771]: [
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      contribution: 'Fix TypeScript typings exports for carousel module',
      score: 95,
    },
    {
      topicId:
        TopicId.DEFINES_MAINTAINS_AND_USES_MODULAR_STRUCTURES_FOR_CODE_NAMESPACING_AND_REUSABILITY,
      contribution: 'Correct public type surface for consumers',
      score: 80,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_762]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Library version bump for egds-components-react',
      score: 95,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Release alignment for carousel package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Publish / consume version coordination',
      score: 45,
    },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_761]: [
    {
      topicId:
        TopicId.DEFINES_MAINTAINS_AND_USES_MODULAR_STRUCTURES_FOR_CODE_NAMESPACING_AND_REUSABILITY,
      contribution: 'Fix module export map for carousel entry points',
      score: 90,
    },
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      contribution: 'Restore correct type entry exports',
      score: 80,
    },
  ],
  [PullRequestId.EXP_API_LODGING_REVIEWS_1253]: [
    {
      topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
      contribution: 'Retire completed superlative threshold A/B test',
      score: 90,
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Simplify reviews API after TnL cleanup',
      score: 85,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Remove obsolete TnL branching paths',
      score: 55,
    },
  ],
  [PullRequestId.EXP_API_LODGING_SEARCH_12723]: [
    {
      topicId: TopicId.CREATES_ECOSYSTEM_FOR_APPLICATION_STATE_MONITORING,
      contribution: 'LBG clickstream analytics payload',
      score: 95,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'Server-side clickstream field assembly in search API',
      score: 90,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Analytics requirement for Loved By Guests',
      score: 80,
    },
    {
      topicId: TopicId.STORES_REUSES_AND_MANIPULATES_DATA,
      contribution: 'Shape and attach clickstream data structures',
      score: 70,
    },
  ],
  [PullRequestId.EXP_API_LODGING_SEARCH_12436]: [
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Upgrade shared GraphQL library to 0.152.0',
      score: 95,
    },
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Dependency version alignment for search service',
      score: 90,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_4037]: [
    {
      topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
      contribution: 'Remove stale About The Host minAppVersion config',
      score: 85,
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Simplify ATH version gating configuration',
      score: 75,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3935]: [
    {
      topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
      contribution: 'Retire Guest Choice v2 fast-track template API paths',
      score: 90,
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'TemplateApi cleanup for GCV2',
      score: 85,
    },
    {
      topicId: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Prune obsolete template response structures',
      score: 55,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3779]: [
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Correct tnlFields feature gate null handling',
      score: 88,
    },
    {
      topicId: TopicId.HANDLES_EXCEPTIONS_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Eliminate erroneous null branch in gate evaluation',
      score: 75,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'Server-side feature gate evaluation in PDP API',
      score: 65,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3603]: [
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Rollout-safe LBG field gating with client build guard',
      score: 88,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'API-side feature exposure gated by client build',
      score: 82,
    },
    {
      topicId:
        TopicId.USES_DIFFERENT_REQUIREMENT_SOURCES_FOR_SOLUTION_IMPLEMENTATION,
      contribution: 'Combine TnL fields with client capability signals',
      score: 72,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3595]: [
    {
      topicId: TopicId.STORES_REUSES_AND_MANIPULATES_DATA,
      contribution: 'Update LBG mark asset URL for light mode',
      score: 85,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Visual asset correction for theme-specific mark',
      score: 75,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'PDP API payload adjustment for mark imagery',
      score: 60,
    },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3571]: [
    {
      topicId: TopicId.HANDLES_EXCEPTIONS_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Harden handling of unknown system events',
      score: 92,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Defensive branching for unexpected event types',
      score: 65,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'Event pipeline robustness in product API',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_GRAPHQL_7664]: [
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'GraphQL schema fields for ShoppingProductHeader a11y',
      score: 90,
    },
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      contribution: 'Typed accessibility fields on shared header type',
      score: 88,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Accessibility requirement reflected in schema',
      score: 80,
    },
    {
      topicId: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR,
      contribution: 'Header type encapsulates a11y metadata',
      score: 65,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_33051]: [
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Reorder Loved By Guests product rating summary rendering',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Compose rating summary subviews in correct visual order',
      score: 80,
    },
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Fix incorrect render ordering in summary stack',
      score: 65,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_31946]: [
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Add Guest Choice v3 pictogram to Loved By Guests UI',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Integrate new pictogram asset into rating summary',
      score: 75,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Visual spec update for GCv3 mark',
      score: 55,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_31180]: [
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'Inquiry success dialog Done button closes sheet reliably',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Wire dismissal through inquiry confirmation UI',
      score: 75,
    },
    {
      topicId: TopicId.HANDLES_OVERFLOWING_CONTENT_ON_A_PAGE,
      contribution: 'Dialog footer and scroll region close interaction',
      score: 55,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_31040]: [
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'GCv2 reviews overlay spacing adjustment',
      score: 88,
    },
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Tighten overlay layout gaps in Loved By Guests',
      score: 70,
    },
    {
      topicId: TopicId.USES_BASIC_BOX_MODEL_AND_HANDLES_MARGIN_COLLAPSING,
      contribution: 'Margin and padding tuning in overlay',
      score: 55,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_30427]: [
    {
      topicId: TopicId.HANDLES_EXCEPTIONS_USING_LANGUAGE_CAPABILITIES,
      contribution: 'Guard null actions in AboutTheHostSummary',
      score: 90,
    },
    {
      topicId:
        TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
      contribution: 'Safe handling of optional host summary actions',
      score: 75,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Harden host summary click targets',
      score: 65,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_23673]: [
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Sync textInputValue when tnlFields props change',
      score: 92,
    },
    {
      topicId:
        TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
      contribution: 'Keep form state aligned with server-driven fields',
      score: 75,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Effect / sync on Loved By Guests text input',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_23551]: [
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Update facet-counts experiment configuration',
      score: 85,
    },
    {
      topicId:
        TopicId.COLLECTS_DATA_USING_REQUIREMENTS_ELICITATION_TECHNIQUES_AND_METHODOLOGIES,
      contribution: 'Experiment variant wiring for sort and filter',
      score: 70,
    },
    {
      topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
      contribution: 'Retire or adjust stale experiment flags',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_22585]: [
    {
      topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
      contribution: 'Revert prior refactor (#22097) after regression',
      score: 88,
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Restore previous StickyWrapper behavior',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_22541]: [
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'Remove stray margin from quick filter row',
      score: 88,
    },
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Layout polish on quick filters strip',
      score: 70,
    },
    {
      topicId: TopicId.USES_BASIC_BOX_MODEL_AND_HANDLES_MARGIN_COLLAPSING,
      contribution: 'Margin cleanup for pill alignment',
      score: 60,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_22345]: [
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution:
        'Playback AI Search query string into controlled text input',
      score: 92,
    },
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Reflect replayed query in AI search field',
      score: 80,
    },
    {
      topicId: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS,
      contribution: 'Controlled input sync for AI search bar',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_22097]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'StickyWrapper avoids unnecessary child unmount/remount',
      score: 92,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Preserve subtree identity under sticky shell',
      score: 85,
    },
    {
      topicId: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR,
      contribution: 'Encapsulate sticky vs scrollable concerns',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_21244]: [
    {
      topicId: TopicId.HANDLES_OVERFLOWING_CONTENT_ON_A_PAGE,
      contribution: 'Remove scrim from AllFilterSheetFooter; adjust spacing',
      score: 88,
    },
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'Footer sheet padding and stacking tweaks',
      score: 75,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'All-filter sheet footer presentation update',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_21200]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'AI Search suggestion list item accessibility',
      score: 95,
    },
    {
      topicId: TopicId.CREATES_ACCESSIBLE_WEB_PAGES,
      contribution: 'Roles/labels for conversational suggestions',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_21117]: [
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      contribution: 'Extract quickAccessPillsandSheets into reusable component',
      score: 92,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Encapsulate quick-access pills and sheet wiring',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Shared sort-and-filter building block',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_20319]: [
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Add AI Search beta badge to input chrome',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Badge composition on search affordance',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_20064]: [
    {
      topicId: TopicId.DEBUGS_APPLICATION_USING_DEBUGGING_TOOLS_AND_TECHNIQUES,
      contribution: 'Resolve incorrect BASIC_FILTER switch branch',
      score: 90,
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      contribution: 'Fix BASIC_FILTER switch branch handling',
      score: 50,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_17970]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Migrate to USNF signals package layout',
      score: 88,
    },
    {
      topicId:
        TopicId.DEFINES_MAINTAINS_AND_USES_MODULAR_STRUCTURES_FOR_CODE_NAMESPACING_AND_REUSABILITY,
      contribution: 'Re-home signals imports and module boundaries',
      score: 80,
    },
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Package graph update for signals stack',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_17882]: [
    {
      topicId: TopicId.HANDLES_OVERFLOWING_CONTENT_ON_A_PAGE,
      contribution: 'Fix overflowing sort-and-filter dialog layout',
      score: 92,
    },
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'Constrain modal / sheet max dimensions',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_17623]: [
    {
      topicId:
        TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Add primaryPillRef for focus and measurement hooks',
      score: 88,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Expose ref on primary quick-filter pill',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_17133]: [
    {
      topicId: TopicId.TROUBLESHOOTS_NETWORK_USING_TOOLS_AND_LIBRARIES,
      contribution:
        'Prevent FilterSheetFooterQuery re-fires when toggling QF sheets',
      score: 92,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_ASYNCHRONY_AND_NON_BLOCKING_ENVIRONMENT_CONCEPTS,
      contribution: 'Throttle redundant async query triggers',
      score: 80,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Sheet open/close state guards around footer query',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_16853]: [
    {
      topicId:
        TopicId.VALIDATES_FINDS_AND_REPLACES_STRING_DATA_WITH_REGULAR_EXPRESSIONS,
      contribution: 'Trim whitespace from filter and multiselection values',
      score: 88,
    },
    {
      topicId: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Sanitize selected value arrays before submit',
      score: 75,
    },
    {
      topicId:
        TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
      contribution: 'Normalize filter payload edge cases',
      score: 65,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_16673]: [
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Refresh AI Search canned suggestion list content',
      score: 80,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Product copy / data update for suggestions',
      score: 65,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_16482]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'accessibilityLabel on TextInputFieldTypeahead',
      score: 95,
    },
    {
      topicId: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS,
      contribution: 'Assistive name for AI search typeahead field',
      score: 80,
    },
    {
      topicId: TopicId.CREATES_ACCESSIBLE_WEB_PAGES,
      contribution: 'Screen reader label for composite typeahead control',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_16154]: [
    {
      topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
      contribution: 'Revert EGDS migration after integration issues',
      score: 90,
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Restore prior EGDS usage in sort and filter',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_16152]: [
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      contribution: 'Fix EGDSRadioButtonGroup legend semantics',
      score: 92,
    },
    {
      topicId: TopicId.USES_FORMS_FOR_USER_INPUTS_AND_INTERACTION,
      contribution: 'Accessible grouping for radio filter controls',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_15623]: [
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'Spacing around AI search input field',
      score: 88,
    },
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Layout polish for AI search bar container',
      score: 65,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_15326]: [
    {
      topicId: TopicId.INTERACTS_WITH_API_AND_HANDLES_REQUEST_METADATA,
      contribution: 'Add lightweight GraphQL query for filter tooling',
      score: 90,
    },
    {
      topicId:
        TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
      contribution: 'Client query for sort-and-filter data slice',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_15271]: [
    {
      topicId: TopicId.HANDLES_OVERFLOWING_CONTENT_ON_A_PAGE,
      contribution: 'AI search dialog toolbar layout fix',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Toolbar composition inside modal sheet',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_15085]: [
    {
      topicId: TopicId.HANDLES_OVERFLOWING_CONTENT_ON_A_PAGE,
      contribution: 'Popover sheet max-height constraint',
      score: 90,
    },
    {
      topicId:
        TopicId.CREATES_LAYOUTS_WITH_ADVANCED_LAYOUT_MODES_USING_STYLE_SHEET_LANGUAGE,
      contribution: 'Scrollable sheet region for long filter lists',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_14918]: [
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Integrate FilterSheetFooter with SearchToolsFilterBar',
      score: 90,
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Unify footer query wiring across filter bar',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_14828]: [
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Lift carouselEdgeItemsPadding to parent filter bar',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Plumb carousel padding prop from lodging S&F shell',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_14694]: [
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Introduce FilterSheetFooter component',
      score: 95,
    },
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      contribution: 'Footer layout for filter sheets',
      score: 85,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_14600]: [
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      contribution: 'Sheet synced to trigger button state',
      score: 90,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Open/close coupling between button and sheet',
      score: 85,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_14568]: [
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Revert resetFilters default back to false',
      score: 88,
    },
    {
      topicId:
        TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
      contribution: 'Correct filter reset flag in search tools state',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_14493]: [
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Wrapper composing AI search list and input',
      score: 90,
    },
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      contribution: 'Layout shell for conversational search UI',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_13937]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump uitk-react-sheet dependency',
      score: 95,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sheet package fixes in filter flows',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Lockfile / manifest update',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_13546]: [
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'Quick filter popover sheets dismiss correctly',
      score: 90,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Sheet visibility state fixes on pill toggle',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_13267]: [
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Sync pets-allowed filter with pets traveler selector',
      score: 92,
    },
    {
      topicId:
        TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
      contribution: 'Cross-control consistency for pets constraints',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_12522]: [
    {
      topicId: TopicId.CREATES_ECOSYSTEM_FOR_APPLICATION_STATE_MONITORING,
      contribution: 'Emit signals when popular filters render / interact',
      score: 92,
    },
    {
      topicId:
        TopicId.COLLECTS_DATA_USING_REQUIREMENTS_ELICITATION_TECHNIQUES_AND_METHODOLOGIES,
      contribution: 'Analytics hooks for popular filter usage',
      score: 80,
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'Instrument pill taps for telemetry',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_12406]: [
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'keepSectionExpanded for LodgingSortAndFilters',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Persist expanded filter section UX',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_12110]: [
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'Remove autoPosition from quick-filter popover sheets',
      score: 85,
    },
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Popover positioning regression fix',
      score: 65,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_11773]: [
    {
      topicId:
        TopicId.IMPLEMENTS_ASYNCHRONY_AND_NON_BLOCKING_ENVIRONMENT_CONCEPTS,
      contribution: 'Disable pill while filter query is loading',
      score: 90,
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'Loading guard on quick filter interaction',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_11654]: [
    {
      topicId:
        TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
      contribution: 'Persist filter removals correctly in client state',
      score: 92,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Fix selection model when filters cleared',
      score: 85,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_11616]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump search-tools related packages',
      score: 95,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Align sort-and-filter dependencies',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Workspace dependency refresh',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_11173]: [
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Selected filters field in filter bar summary',
      score: 88,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Surface active filter chips / text',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_10758]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Version bump sort-and-filter packages',
      score: 95,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt upstream S&F fixes',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Dependency alignment across lodging packages',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_10645]: [
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Adopt new carousel prop from EGDS in filter carousel',
      score: 88,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Wire carousel behavior inside search tools',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_10418]: [
    {
      topicId: TopicId.DEFINES_CUSTOM_EVENT_FOR_HANDLING_USER_INTERACTION,
      contribution: 'Add onClearFilters callback to FlightsSortAndFilters',
      score: 88,
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'Expose clear-all hook for flights filter bar',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_9872]: [
    {
      topicId: TopicId.CREATES_RESPONSIVE_LAYOUTS_WITH_ADAPTIVE_TECHNICS,
      contribution: 'Remove edgeItemsPadding on tablet/desktop carousels',
      score: 90,
    },
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'Responsive padding rules for carousel rail',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_9372]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'filterBarSpacing as explicit LodgingSortAndFilters prop',
      score: 88,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Parent-controlled spacing for lodging filter bar',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_9279]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump @egds/react-lodging and uitk-react-slider',
      score: 95,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt lodging + slider package releases',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Dependency graph update',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_9215]: [
    {
      topicId: TopicId.ACCESSES_AND_STORES_DATA_IN_A_CLIENT_SIDE_STORAGE,
      contribution: 'Persist last-search filter selection client-side',
      score: 90,
    },
    {
      topicId:
        TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
      contribution: 'Hydrate filters from stored search context',
      score: 80,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Reapply selections on new search sessions',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_9109]: [
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      contribution: 'Spacing between screen edge and filter bar',
      score: 88,
    },
    {
      topicId: TopicId.USES_BASIC_BOX_MODEL_AND_HANDLES_MARGIN_COLLAPSING,
      contribution: 'Inset / margin tuning for horizontal rail',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_9015]: [
    {
      topicId: TopicId.STYLING_ELEMENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'FILTER_BAR pill border and selected-state styling',
      score: 85,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Correct pill visual state for USF view',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_8484]: [
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Introduce SearchToolsFilterBar component',
      score: 95,
    },
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      contribution: 'Composable lodging search tools shell',
      score: 88,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Orchestrate pills, sheets, and filter regions',
      score: 85,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_8341]: [
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      contribution: 'Restore price filter header on Vrbo web',
      score: 88,
    },
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Cross-brand conditional rendering fix',
      score: 65,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_7736]: [
    {
      topicId: TopicId.CREATES_ECOSYSTEM_FOR_APPLICATION_STATE_MONITORING,
      contribution: 'USnF carousel analytics handlers',
      score: 92,
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'Track carousel interactions in unified signals pipeline',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_7517]: [
    {
      topicId:
        TopicId.USES_INTEGRATION_TEST_APPROACHES_STRATEGIES_AND_METHODOLOGIES,
      contribution: 'Migrate unit tests to React component tests',
      score: 92,
    },
    {
      topicId: TopicId.STRUCTURES_TESTS_USING_FRAMEWORK_CAPABILITIES,
      contribution: 'RTL-based component test layout for S&F',
      score: 85,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_7315]: [
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Embed EGDSTeamCarousel inside SearchToolsFilterBar',
      score: 92,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
      contribution: 'Carousel integration in shared filter bar',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_7191]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Change updateSearchAndFilters call signature',
      score: 88,
    },
    {
      topicId: TopicId.INTERACTS_WITH_API_AND_HANDLES_REQUEST_METADATA,
      contribution: 'Align client args with updated search tools API',
      score: 70,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_7004]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Add uitk-react-pill to lodging packages',
      score: 92,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Wire pill dependency into sort-and-filter stack',
      score: 85,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Package manifest updates for lodging',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_6631]: [
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      contribution: 'Persistent pills UI for active filters',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Sticky / inline pill row behavior',
      score: 80,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_5767]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump sort-and-filter dependency bundle',
      score: 95,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Consume upstream S&F release',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Lockfile alignment',
      score: 45,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_5726]: [
    {
      topicId:
        TopicId.COLLECTS_DATA_USING_REQUIREMENTS_ELICITATION_TECHNIQUES_AND_METHODOLOGIES,
      contribution: 'Exposure logging for Default Pricing Filter experiment',
      score: 88,
    },
    {
      topicId: TopicId.CREATES_ECOSYSTEM_FOR_APPLICATION_STATE_MONITORING,
      contribution: 'Experiment telemetry in filter UI',
      score: 75,
    },
  ],
  [PullRequestId.SHARED_UI_WEB_5381]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Version bump and contributor metadata for packages',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Release housekeeping for sort-and-filter stack',
      score: 80,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'Changelog / manifest contributor updates',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_18517]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-lodging-offers-shopping-banners dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt new shopping banners package release',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_18045]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-product-review-details dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt Loved By Guests review details package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_18031]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-product-rating-summary dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt Loved By Guests rating summary package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_17976]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Version bump retail-product-rating-summary',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt Loved By Guests rating summary release',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_17414]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-product-rating-summary dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt Loved By Guests rating summary package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_17090]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-product-rating-summary and add TnL config',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt new rating summary package with localization wiring',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
    {
      topicId:
        TopicId.HANDLES_INTERNATIONALISATION_IN_SCOPE_OF_THE_APPLICATIONS_DEVELOPMENT,
      contribution: 'Travel and localization config for rating summary',
      score: 75,
    },
    {
      topicId:
        TopicId.HANDLES_DIFFERENT_TYPES_OF_LOCALIZATION_AND_TEXT_PROCESSING,
      contribution: 'TnL keys for Loved By Guests strings',
      score: 60,
    },
  ],
  [PullRequestId.SHOPPING_PWA_17056]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-product-about-the-host dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt About The Host shared-ui package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_16959]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Version bump retail-product-about-the-host',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt About The Host package release',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_16740]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-lodging-contact-host dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt contact host / inquiry package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_16696]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-product-about-the-host dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt About The Host shared-ui package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_15437]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_15298]: [
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Filter modal refresh when deselecting filters',
      score: 90,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Modal state sync with filter selection',
      score: 85,
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Re-render filter sheet on selection change',
      score: 75,
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'React handlers for filter deselect flow',
      score: 75,
    },
  ],
  [PullRequestId.SHOPPING_PWA_15076]: [
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      contribution: 'Facet counts experiment configuration update',
      score: 85,
    },
    {
      topicId:
        TopicId.USES_DIFFERENT_REQUIREMENT_SOURCES_FOR_SOLUTION_IMPLEMENTATION,
      contribution: 'Experiment-driven facet display tuning',
      score: 75,
    },
    {
      topicId: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      contribution: 'Facet count data structure update',
      score: 55,
    },
  ],
  [PullRequestId.SHOPPING_PWA_15057]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_14877]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Version bump retail-sort-and-filter-lodging',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging release',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_14841]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_14559]: [
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'Removable filter pill removal behavior',
      score: 90,
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Pill list state when removing selections',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Filter chips UI correctness fix',
      score: 75,
    },
    {
      topicId:
        TopicId.USES_FRAMEWORK_RELATED_AND_BASIC_TOOLS_FOR_APPLICATION_S_DEBUGGING,
      contribution: 'Trace pill removal edge case',
      score: 55,
    },
  ],
  [PullRequestId.SHOPPING_PWA_14419]: [
    {
      topicId: TopicId.STYLING_ELEMENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'Remove carousel edge padding prop from integration',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Carousel layout prop cleanup in PWA shell',
      score: 80,
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      contribution: 'Simplify carousel spacing configuration',
      score: 75,
    },
  ],
  [PullRequestId.SHOPPING_PWA_14260]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump sort-and-filter-lodging and react-universal-shopping',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Align carousel and filter package versions',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_14162]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_13883]: [
    {
      topicId:
        TopicId.USES_INTEGRATION_TEST_APPROACHES_STRATEGIES_AND_METHODOLOGIES,
      contribution: 'Feature tests for lodging filter bar',
      score: 90,
    },
    {
      topicId: TopicId.STRUCTURES_TESTS_USING_FRAMEWORK_CAPABILITIES,
      contribution: 'Organize filter bar scenario coverage',
      score: 85,
    },
    {
      topicId:
        TopicId.APPLIES_COMMUNITY_RECOMMENDED_PRACTICE_AND_METHODOLOGIES_TO_AUTOMATED_TESTS,
      contribution: 'Align tests with filter UI behavior',
      score: 80,
    },
    {
      topicId: TopicId.USES_MATCHERS_FOR_TESTING_EXPECTED_RESULT,
      contribution: 'Assertion fixes for filter bar flows',
      score: 70,
    },
  ],
  [PullRequestId.SHOPPING_PWA_13761]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_13631]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_13377]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_13142]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_13135]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_12294]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump lodging-property-search dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt property search package release',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_12226]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump uitk-react-sheet dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sheet UI kit package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_12111]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_11764]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Version bump retail-sort-and-filter-lodging',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging release',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_11420]: [
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Expose filterBarSpacing prop to filter bar',
      score: 90,
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_CUSTOM_USER_INTERFACE_COMPONENTS,
      contribution: 'Plumb spacing option into filter UI',
      score: 80,
    },
    {
      topicId: TopicId.USES_FRAMEWORK_BUILT_IN_TOOLS_FOR_CODE_REUSABILITY,
      contribution: 'Reuse filter bar with configurable spacing',
      score: 70,
    },
  ],
  [PullRequestId.SHOPPING_PWA_11418]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump sort-and-filter-lodging and peer dependencies',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Align peer dependency graph for filter stack',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_11381]: [
    {
      topicId:
        TopicId.APPLIES_SECURITY_PRACTICES_AND_APPROACHES_TO_PROTECT_APPLICATION,
      contribution: 'Whitelist mealPlan array query param',
      score: 90,
    },
    {
      topicId: TopicId.SECURES_NETWORK_INTERACTION_USING_A_PROGRAMMING_LANGUAGE,
      contribution: 'Controlled SSR param allowlist for filters',
      score: 80,
    },
    {
      topicId:
        TopicId.USES_BUILT_IN_ITERATORS_TO_TRAVERSE_THROUGH_DIFFERENT_TYPES_OF_COLLECTIONS,
      contribution: 'ARRAY_PARAM_JOIN_WHITELIST maintenance',
      score: 50,
    },
  ],
  [PullRequestId.SHOPPING_PWA_11315]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump USNF, maps, and team carousel packages',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt map and carousel related releases',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_11133]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump apollo-type-policies dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt Apollo cache type policies package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_10401]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump retail-sort-and-filter-lodging dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt sort and filter lodging package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_9007]: [
    {
      topicId: TopicId.DEBUGS_MARKUPS_AND_STYLES,
      contribution: 'Remove flex shrink on mWeb maps filter button',
      score: 90,
    },
    {
      topicId: TopicId.STYLING_ELEMENTS_USING_FRAMEWORK_CAPABILITY,
      contribution: 'CSS/layout fix for filter trigger on mobile maps',
      score: 80,
    },
    {
      topicId: TopicId.PROVIDES_SUPPORT_FOR_DIFFERENT_BROWSERS,
      contribution: 'Mobile web maps filter control layout',
      score: 75,
    },
  ],
  [PullRequestId.SHOPPING_PWA_8913]: [
    {
      topicId: TopicId.USES_FORMS_FOR_USER_INPUTS_AND_INTERACTION,
      contribution: 'Lightweight query input controls for search',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS,
      contribution: 'New minimal query input widgets',
      score: 85,
    },
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      contribution: 'Compose filter/search input surface',
      score: 80,
    },
    {
      topicId: TopicId.INTERACTS_WITH_API_AND_HANDLES_REQUEST_METADATA,
      contribution: 'Wire inputs to search query parameters',
      score: 70,
    },
  ],
  [PullRequestId.SHOPPING_PWA_8694]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Version bump search-tools-lodging',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt lodging search tools package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_8650]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Version bump apollo-type-policies',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt Apollo cache type policies package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_8316]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Version bump search-tools-lodging',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt lodging search tools package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_8122]: [
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      contribution: 'Disable filter pill while query loading',
      score: 90,
    },
    {
      topicId:
        TopicId.IMPLEMENTS_ASYNCHRONY_AND_NON_BLOCKING_ENVIRONMENT_CONCEPTS,
      contribution: 'Loading-gated pill interaction',
      score: 80,
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      contribution: 'React disabled state for async search',
      score: 75,
    },
  ],
  [PullRequestId.SHOPPING_PWA_8099]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Version bump search-tools-lodging',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt lodging search tools package',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
  [PullRequestId.SHOPPING_PWA_6651]: [
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      contribution: 'Bump lodging-offers dependency',
      score: 90,
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      contribution: 'Adopt lodging offers package release',
      score: 90,
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      contribution: 'pnpm dependency version update',
      score: 45,
    },
  ],
}

// ---------------------------------------------------------------------------
// Build topics
// ---------------------------------------------------------------------------

const buildTopics = (
  sectionList: Section[],
  prs: PullRequest[],
  repoList: Repo[],
  parentFeaturePrs: Record<ParentFeature, readonly PullRequestId[]>,
  mappings: PrTopicMappings,
): Topic[] => {
  const prIndex = new Map(prs.map((pr) => [pr.id, pr]))
  const repoIndex = new Map(repoList.map((r) => [r.id, r]))

  const parentFeatureIndex = new Map<PullRequestId, ParentFeature>()
  for (const [feature, prIds] of Object.entries(parentFeaturePrs) as [
    ParentFeature,
    readonly PullRequestId[],
  ][]) {
    for (const prId of prIds) {
      parentFeatureIndex.set(prId, feature)
    }
  }

  const topicPrMap = new Map<TopicId, TopicPr[]>()

  for (const [prId, entries] of Object.entries(mappings) as [
    PullRequestId,
    { topicId: TopicId; contribution: string; score: number }[],
  ][]) {
    const pr = prIndex.get(prId)
    if (!pr) throw new Error(`Missing pull request for id "${prId}"`)

    const repo = repoIndex.get(pr.repoId)
    if (!repo) throw new Error(`Missing repo for id "${pr.repoId}"`)

    for (const { topicId, contribution, score } of entries) {
      const existing = topicPrMap.get(topicId) ?? []
      const pf = parentFeatureIndex.get(prId)
      const topicPr: TopicPr = {
        ...pr,
        contribution,
        score,
        repoName: repo.name,
        ...(pf !== undefined && { parentFeature: pf }),
      }
      existing.push(topicPr)
      topicPrMap.set(topicId, existing)
    }
  }

  return sectionList.flatMap(({ category, technology, levels }) =>
    levels.flatMap(({ level, topics: entries }) =>
      entries.map(({ id, name, key }) => ({
        id,
        name,
        tags: [
          category,
          ...(technology ? [technology] : []),
          level,
          ...(key ? ['Key'] : []),
        ],
        prs: (topicPrMap.get(id) ?? [])
          .sort((a, b) => {
            const aFiller = a.id === PullRequestId.PR_ATLAS ? 1 : 0
            const bFiller = b.id === PullRequestId.PR_ATLAS ? 1 : 0
            if (aFiller !== bFiller) return aFiller - bFiller
            return b.score - a.score
          })
          .slice(0, 3),
      })),
    ),
  )
}

export const topics: Topic[] = buildTopics(
  sections,
  pullRequests,
  repos,
  PARENT_FEATURE_PRS,
  prTopicMappings,
)
