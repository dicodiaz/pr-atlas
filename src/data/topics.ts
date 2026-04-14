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
    id: PullRequestId.SHOPPING_PWA_17433,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: LBG prefetched data bug',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/17433',
  },
  {
    id: PullRequestId.SHOPPING_PWA_17074,
    repoId: RepoId.SHOPPING_PWA,
    title: 'feat: ATH redesign rollout',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/17074',
  },
  {
    id: PullRequestId.SHOPPING_PWA_15411,
    repoId: RepoId.SHOPPING_PWA,
    title: 'refactor: urlQueryString into URLSearchParams',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/15411',
  },
  {
    id: PullRequestId.SHOPPING_PWA_15079,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: Property Listing and USNF queries fire parallely',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/15079',
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
    id: PullRequestId.SHOPPING_PWA_13017,
    repoId: RepoId.SHOPPING_PWA,
    title: 'feat: add AI_SEARCH_QUERY case to buildUrlQueryString',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/13017',
  },
  {
    id: PullRequestId.SHOPPING_PWA_12834,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: filter bar spacing for mWeb packages',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/12834',
  },
  {
    id: PullRequestId.SHOPPING_PWA_12257,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: neighborhood shouldReplaceParam check',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/12257',
  },
  {
    id: PullRequestId.SHOPPING_PWA_11779,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: clear hotel_brand when destination has changed',
    url: 'https://github.com/eg-internal/shopping-pwa/pull/11779',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8704,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: add new price param keys to SSR whitelist',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8704',
  },
  {
    id: PullRequestId.SHOPPING_PWA_8403,
    repoId: RepoId.SHOPPING_PWA,
    title: 'fix: sync pets allowed filter with pets traveler selector',
    url: 'https://github.expedia.biz/Brand-Expedia/shopping-pwa/pull/8403',
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
    title: 'feat: add server-driven impression analytics for SRP LBG',
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
    id: PullRequestId.SHARED_UI_WEB_31599,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: changing the dates exits the contact host dialog bug',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/31599',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_30536,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: Inquiry Submission should default to 2 adults',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/30536',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_21664,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add syntheticEvent and refactor',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/21664',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_19577,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add sort-and-filter folder in the signals workspace',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/19577',
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
    id: PullRequestId.SHARED_UI_WEB_17571,
    repoId: RepoId.SHARED_UI_WEB,
    title: "fix: StickyWrapper's a11y and refactor",
    url: 'https://github.com/eg-internal/shared-ui-web/pull/17571',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_17220,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: prevent FilterSheetFooterQuery re-fires',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/17220',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_16805,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: prevent FilterSheetFooterQuery from triggering',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/16805',
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
    title: 'feat: add submit functionality to the AI search box AND suggestions',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/15745',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14474,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: update type policies for US&F specific types',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/14474',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_14227,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add type policy for EGDSBasicTriggerPill',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/14227',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_12593,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: increase z-index layer of map trigger floating wrapper',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/12593',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_11332,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'feat: add signals interaction between Selected Filters and Multiselection Options',
    url: 'https://github.expedia.biz/Expedia-UI/shared-ui/pull/11332',
  },
  {
    id: PullRequestId.SHARED_UI_WEB_10735,
    repoId: RepoId.SHARED_UI_WEB,
    title: 'fix: add ShoppingRangeTextInputField case',
    url: 'https://github.com/eg-internal/shared-ui-web/pull/10735',
  },

  // egds-components-react
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1898,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'refactor: carousel-inner-spacing-and-overflow',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1898',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_1011,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'feat: create team tier typeahead component',
    url: 'https://github.com/eg-internal/egds-components-react/pull/1011',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_956,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'feat: add extra z-index to opened carousel item',
    url: 'https://github.com/eg-internal/egds-components-react/pull/956',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_797,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'feat: Add Server-Driven analytics to auto-width carousel',
    url: 'https://github.com/eg-internal/egds-components-react/pull/797',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_759,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'feat: Carousel button behavior update',
    url: 'https://github.com/eg-internal/egds-components-react/pull/759',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_735,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix: Carousel Subcomponent Scroll Work',
    url: 'https://github.com/eg-internal/egds-components-react/pull/735',
  },
  {
    id: PullRequestId.EGDS_COMPONENTS_REACT_720,
    repoId: RepoId.EGDS_COMPONENTS_REACT,
    title: 'fix: Create Carousel Subcomponent for Differing Widths',
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
    id: PullRequestId.PRODUCT_DETAILS_API_3590,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'feat: update LBG mark to supply darkModeUrl',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3590',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3572,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'fix: separate TnL evaluation logic of Top Of PDP and Overview & Overlay - LBG',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3572',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3527,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'feat: Implement Server Driven LBG for Top of PDP - Blue Ribbon Pictogram',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3527',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3360,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'feat: Loved by Guests explanatory text',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3360',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3350,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'feat: Suppress Premier Host for non-Vrbo brands',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3350',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3225,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'feat: add logic to pick between overview or overlay ATH metric label',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3225',
  },
  {
    id: PullRequestId.PRODUCT_DETAILS_API_3218,
    repoId: RepoId.PRODUCT_DETAILS_API,
    title: 'feat: add remaining ATH overview metrics loc keys and rename overlay ones',
    url: 'https://github.com/eg-internal/product-details-experience-api/pull/3218',
  },

  // experience-api-lodging-offers
  {
    id: PullRequestId.EXP_API_LODGING_OFFERS_10403,
    repoId: RepoId.EXP_API_LODGING_OFFERS,
    title: 'feat: add Great Find suppression logic to PriceInsightService',
    url: 'https://github.com/eg-internal/experience-api-lodging-offers/pull/10403',
  },
  {
    id: PullRequestId.EXP_API_LODGING_OFFERS_10243,
    repoId: RepoId.EXP_API_LODGING_OFFERS,
    title: 'feat: Great Find Shopping Banner Integration',
    url: 'https://github.com/eg-internal/experience-api-lodging-offers/pull/10243',
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
    PullRequestId.SHOPPING_PWA_12834,
    PullRequestId.SHOPPING_PWA_12257,
    PullRequestId.SHOPPING_PWA_11779,
    PullRequestId.SHOPPING_PWA_8704,
    PullRequestId.SHOPPING_PWA_8403,
    PullRequestId.SHARED_UI_WEB_17220,
    PullRequestId.SHARED_UI_WEB_16805,
    PullRequestId.SHARED_UI_WEB_15935,
    PullRequestId.SHARED_UI_WEB_18503,
    PullRequestId.SHARED_UI_WEB_17571,
    PullRequestId.SHARED_UI_WEB_14474,
    PullRequestId.SHARED_UI_WEB_14227,
    PullRequestId.SHARED_UI_WEB_12593,
    PullRequestId.SHARED_UI_WEB_10735,
  ],
  [ParentFeature.AI_SEARCH]: [
    PullRequestId.SHOPPING_PWA_14925,
    PullRequestId.SHOPPING_PWA_14816,
    PullRequestId.SHOPPING_PWA_13017,
    PullRequestId.SHARED_UI_WEB_15745,
    PullRequestId.SHARED_UI_WEB_18919,
  ],
  [ParentFeature.LOVED_BY_GUESTS]: [
    PullRequestId.SHOPPING_PWA_17433,
    PullRequestId.SHARED_UI_WEB_36900,
    PullRequestId.SHARED_UI_WEB_35481,
    PullRequestId.SHARED_UI_WEB_35318,
    PullRequestId.SHARED_UI_WEB_35144,
    PullRequestId.SHARED_UI_WEB_33436,
    PullRequestId.PRODUCT_DETAILS_API_3590,
    PullRequestId.PRODUCT_DETAILS_API_3572,
    PullRequestId.PRODUCT_DETAILS_API_3527,
    PullRequestId.PRODUCT_DETAILS_API_3360,
    PullRequestId.SHARED_GRAPHQL_8231,
  ],
  [ParentFeature.CAROUSEL]: [
    PullRequestId.EGDS_COMPONENTS_REACT_1898,
    PullRequestId.EGDS_COMPONENTS_REACT_956,
    PullRequestId.EGDS_COMPONENTS_REACT_797,
    PullRequestId.EGDS_COMPONENTS_REACT_759,
    PullRequestId.EGDS_COMPONENTS_REACT_735,
    PullRequestId.EGDS_COMPONENTS_REACT_720,
    PullRequestId.EGDS_COMPONENTS_REACT_712,
  ],
  [ParentFeature.TYPEAHEAD]: [PullRequestId.EGDS_COMPONENTS_REACT_1011],
  [ParentFeature.GREAT_FIND]: [
    PullRequestId.EXP_API_LODGING_OFFERS_10403,
    PullRequestId.EXP_API_LODGING_OFFERS_10243,
  ],
  [ParentFeature.SIGNALS]: [
    PullRequestId.SHARED_UI_WEB_21664,
    PullRequestId.SHARED_UI_WEB_19577,
    PullRequestId.SHARED_UI_WEB_11332,
  ],
  [ParentFeature.ABOUT_THE_HOST]: [
    PullRequestId.SHOPPING_PWA_17074,
    PullRequestId.PRODUCT_DETAILS_API_3350,
    PullRequestId.PRODUCT_DETAILS_API_3225,
    PullRequestId.PRODUCT_DETAILS_API_3218,
  ],
  [ParentFeature.INQUIRY]: [
    PullRequestId.SHARED_UI_WEB_37156,
    PullRequestId.SHARED_UI_WEB_31599,
    PullRequestId.SHARED_UI_WEB_30536,
    PullRequestId.EXP_API_LODGING_PROPERTY_3221,
  ],
} as const satisfies Record<ParentFeature, readonly PullRequestId[]>

// ---------------------------------------------------------------------------
// PR ↔ topic mappings
// ---------------------------------------------------------------------------

const prTopicMappings: PrTopicMappings = {
  [PullRequestId.PR_ATLAS]: [
    // Language – JavaScript
    { topicId: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE, contribution: 'Data modeling' },
    { topicId: TopicId.STORES_REUSES_AND_MANIPULATES_DATA, contribution: 'Data modeling' },
    { topicId: TopicId.STORES_REUSES_AND_OPERATES_ON_BASIC_DATA_TYPES, contribution: 'Data modeling' },
    { topicId: TopicId.USES_AND_MAINTAINS_LANGUAGE_OPERATORS_AND_COMMENTS, contribution: 'Debounced search' },
    { topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES, contribution: 'Debounced search' },
    { topicId: TopicId.HANDLES_EXCEPTIONS_USING_LANGUAGE_CAPABILITIES, contribution: 'Saved searches' },
    { topicId: TopicId.HANDLES_USER_INTERACTION_WITH_EVENTS_HANDLERS, contribution: 'Debounced search' },
    { topicId: TopicId.INTERACTS_WITH_A_USER_INTERFACE_USING_LANGUAGE_BUILT_IN_TECHNICS, contribution: 'Debounced search' },
    { topicId: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR, contribution: 'Architecture' },
    { topicId: TopicId.USES_BUILT_IN_ITERATORS_TO_TRAVERSE_THROUGH_DIFFERENT_TYPES_OF_COLLECTIONS, contribution: 'Data modeling' },
    { topicId: TopicId.DEFINES_MAINTAINS_AND_USES_MODULAR_STRUCTURES_FOR_CODE_NAMESPACING_AND_REUSABILITY, contribution: 'Architecture' },
    { topicId: TopicId.IMPLEMENTS_ASYNCHRONY_AND_NON_BLOCKING_ENVIRONMENT_CONCEPTS, contribution: 'Debounced search' },
    { topicId: TopicId.VALIDATES_FINDS_AND_REPLACES_STRING_DATA_WITH_REGULAR_EXPRESSIONS, contribution: 'Debounced search' },
    { topicId: TopicId.APPLIES_METHODOLOGY_AND_BEST_PRACTICES_FOR_LANGUAGE_PERFORMANCE_OPTIMISATION, contribution: 'Debounced search' },
    { topicId: TopicId.CREATES_AND_MAINTAINS_CUSTOM_USER_INTERFACE_COMPONENTS, contribution: 'Responsive layout' },
    { topicId: TopicId.MANAGES_ADVANCED_COLLECTIONS_OF_DATA_USING_LANGUAGE, contribution: 'Data modeling' },
    { topicId: TopicId.ACCESSES_AND_STORES_DATA_IN_A_CLIENT_SIDE_STORAGE, contribution: 'Saved searches' },
    { topicId: TopicId.OPTIMISES_APPLICATION_PERFORMANCE_TAKING_INTO_ACCOUNT_THE_COMPLEXITY_OF_THE_ALGORITHMS, contribution: 'Debounced search' },

    // Framework – React JS Web
    { topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS, contribution: 'Responsive layout' },
    { topicId: TopicId.STYLING_ELEMENTS_USING_FRAMEWORK_CAPABILITY, contribution: 'Responsive layout' },
    { topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION, contribution: 'Debounced search' },
    { topicId: TopicId.USES_TECHNICS_TO_DYNAMICALLY_GENERATE_ELEMENTS, contribution: 'Debounced search' },
    { topicId: TopicId.APPLIES_TECHNICS_AND_USES_TECHNOLOGY_FOR_STYLING_COMPONENTS, contribution: 'Responsive layout' },
    { topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE, contribution: 'Debounced search' },
    { topicId: TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK, contribution: 'Debounced search' },
    { topicId: TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY, contribution: 'Debounced search' },
    { topicId: TopicId.SETS_UP_BUILDS_TESTS_AND_DEPLOYS_APPLICATION_WITH_CLI, contribution: 'Build and tooling' },
    { topicId: TopicId.USES_FORMS_FOR_USER_INPUTS_AND_INTERACTION, contribution: 'Debounced search' },
    { topicId: TopicId.USES_FRAMEWORK_BUILT_IN_TOOLS_FOR_CODE_REUSABILITY, contribution: 'Architecture' },
    { topicId: TopicId.USES_FRAMEWORK_RELATED_AND_BASIC_TOOLS_FOR_APPLICATION_S_DEBUGGING, contribution: 'Build and tooling' },
    { topicId: TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE, contribution: 'Accessibility' },

    // Libraries – React JS Web
    { topicId: TopicId.DEBUGS_APPLICATION_USING_DEBUGGING_TOOLS_AND_TECHNIQUES, contribution: 'Build and tooling' },
    { topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS, contribution: 'Build and tooling' },
    { topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION, contribution: 'Data modeling' },
    { topicId: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS, contribution: 'Debounced search' },
    { topicId: TopicId.OPTIMIZES_THE_DEVELOPMENT_PROCESS_WITH_UTILS, contribution: 'Build and tooling' },
    { topicId: TopicId.SIMPLIFIES_ACCESS_TO_BROWSERS_STORAGE_USING_TOOLS_OR_LIBRARIES, contribution: 'Saved searches' },
    { topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES, contribution: 'Internationalization' },
    { topicId: TopicId.HANDLES_DIFFERENT_TYPES_OF_LOCALIZATION_AND_TEXT_PROCESSING, contribution: 'Internationalization' },
    { topicId: TopicId.CONFIGURES_BUNDLERS_FOR_APPLICATION, contribution: 'Build and tooling' },

    // Markup and Styling
    { topicId: TopicId.ADDS_STYLING_TO_TEMPLATE_DOCUMENT, contribution: 'Responsive layout' },
    { topicId: TopicId.ADJUSTS_VALUES_AND_UNITS_TO_SET_THE_SIZE_OF_VARIOUS_ELEMENTS_WITH_STYLE_SHEET_LANGUAGE, contribution: 'Responsive layout' },
    { topicId: TopicId.HANDLES_OVERFLOWING_CONTENT_ON_A_PAGE, contribution: 'Responsive layout' },
    { topicId: TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES, contribution: 'Responsive layout' },
    { topicId: TopicId.USES_BASIC_BOX_MODEL_AND_HANDLES_MARGIN_COLLAPSING, contribution: 'Responsive layout' },
    { topicId: TopicId.ALIGNS_VARIOUS_ELEMENT_POSITIONS_WITH_STYLE_SHEET_LANGUAGE, contribution: 'Responsive layout' },
    { topicId: TopicId.CREATES_AND_COMPOSES_PAGES_AND_LAYOUTS_USING_STANDARD_MARKUP_LANGUAGE, contribution: 'Responsive layout' },
    { topicId: TopicId.CREATES_FORMS_USING_A_STANDARD_MARKUP_LANGUAGE, contribution: 'Debounced search' },
    { topicId: TopicId.CREATES_LAYOUTS_WITH_BASIC_LAYOUT_MODES_USING_STYLE_SHEET_LANGUAGE, contribution: 'Responsive layout' },
    { topicId: TopicId.CREATES_TABLES_WITH_A_STANDARD_MARKUP_LANGUAGE, contribution: 'Debounced search' },
    { topicId: TopicId.STYLES_ELEMENTS_WITH_VARIOUS_STYLE_SHEET_LANGUAGE_SELECTORS, contribution: 'Responsive layout' },
    { topicId: TopicId.STYLES_TEXT_USING_BASIC_STYLE_SHEET_LANGUAGE_RULES, contribution: 'Responsive layout' },
    { topicId: TopicId.ANIMATES_USER_INTERFACE_ELEMENTS_USING_STYLE_SHEET_LANGUAGE, contribution: 'Responsive layout' },
    { topicId: TopicId.APPLIES_STANDARDISED_METHODOLOGIES_WHILE_USING_STYLE_SHEET_LANGUAGE, contribution: 'Responsive layout' },
    { topicId: TopicId.CREATES_LAYOUTS_WITH_ADVANCED_LAYOUT_MODES_USING_STYLE_SHEET_LANGUAGE, contribution: 'Responsive layout' },
    { topicId: TopicId.CREATES_RESPONSIVE_LAYOUTS_WITH_ADAPTIVE_TECHNICS, contribution: 'Responsive layout' },
    { topicId: TopicId.STYLES_USER_INTERFACE_USING_PREPROCESSORS_OR_SCRIPTING_SOLUTIONS, contribution: 'Responsive layout' },
    { topicId: TopicId.CREATES_ACCESSIBLE_WEB_PAGES, contribution: 'Accessibility' },
    { topicId: TopicId.CREATES_WEB_PAGES_FOR_VARIOUS_DEVICE_TYPES, contribution: 'Responsive layout' },
    { topicId: TopicId.OPTIMISES_PAGE_PERFORMANCE, contribution: 'Responsive layout' },

    // Code-Based Testing
    { topicId: TopicId.APPLIES_COMMUNITY_RECOMMENDED_PRACTICE_AND_METHODOLOGIES_TO_AUTOMATED_TESTS, contribution: 'Testing suite' },
    { topicId: TopicId.STRUCTURES_TESTS_USING_FRAMEWORK_CAPABILITIES, contribution: 'Testing suite' },
    { topicId: TopicId.USES_DUMMY_DATA_FOR_TESTING, contribution: 'Testing suite' },
    { topicId: TopicId.USES_MATCHERS_FOR_TESTING_EXPECTED_RESULT, contribution: 'Testing suite' },
    { topicId: TopicId.USES_UNIT_TESTS_TECHNIQUES, contribution: 'Testing suite' },
    { topicId: TopicId.TESTS_ASYNC_CODE_USING_FRAMEWORK_CAPABILITIES, contribution: 'Testing suite' },
    { topicId: TopicId.USES_FAKE_OBJECTS_TO_DECOUPLE_FROM_DEPENDENCIES, contribution: 'Testing suite' },
    { topicId: TopicId.USES_INTEGRATION_TEST_APPROACHES_STRATEGIES_AND_METHODOLOGIES, contribution: 'Testing suite' },
    { topicId: TopicId.USES_TECHNIQUES_AND_METHODOLOGY_FOR_ACCESSIBILITY_TESTING, contribution: 'Testing suite' },
    { topicId: TopicId.CONFIGURES_AND_MAINTAINS_CODE_COVERAGE_REPORTS, contribution: 'Testing suite' },
    { topicId: TopicId.CONFIGURES_TEST_FRAMEWORK_FOR_TESTS_EXECUTION, contribution: 'Testing suite' },

    // Design
    { topicId: TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES, contribution: 'Architecture' },
    { topicId: TopicId.CREATES_REUSABLE_STRUCTURES_BY_APPLYING_DESIGN_STRATEGIES_AND_METHODOLOGIES, contribution: 'Architecture' },
    { topicId: TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES, contribution: 'Architecture' },
    { topicId: TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES, contribution: 'Architecture' },
    { topicId: TopicId.USES_DESIGN_PATTERNS_TO_CREATE_NEW_STRUCTURES_BASED_ON_REQUIREMENTS, contribution: 'Architecture' },
    { topicId: TopicId.DISTRIBUTES_RESPONSIBILITY_BETWEEN_STRUCTURES_USING_DESIGN_PATTERNS, contribution: 'Architecture' },
    { topicId: TopicId.ENSURES_EFFICIENT_AND_FLEXIBLE_COMPOSITION_OF_STRUCTURES_WITH_DESIGN_PATTERNS, contribution: 'Architecture' },
    { topicId: TopicId.EVALUATES_AND_MODIFIES_SOFTWARE_DESIGN_TO_ENSURE_SOFTWARE_QUALITY, contribution: 'Architecture' },
    { topicId: TopicId.USES_METHODOLOGIES_AND_TECHNICS_TO_DOCUMENT_DESIGN, contribution: 'Architecture' },

    // Development Environments
    { topicId: TopicId.MANAGES_ENVIRONMENTS_USING_BUILT_IN_OPERATING_SYSTEM_TOOLS, contribution: 'Build and tooling' },
    { topicId: TopicId.USES_VERSION_CONTROL_TOOLS_FOR_DEVELOPMENT, contribution: 'Build and tooling' },
    { topicId: TopicId.CONFIGURES_AND_MAINTAINS_DEVELOPMENT_ENVIRONMENT_AND_ECOSYSTEM, contribution: 'Build and tooling' },
    { topicId: TopicId.DISTRIBUTES_WORK_USING_VERSION_CONTROL_TOOLS, contribution: 'Build and tooling' },
    { topicId: TopicId.MAINTAINS_CODE_QUALITY_OF_THE_APPLICATION, contribution: 'Build and tooling' },
    { topicId: TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES, contribution: 'Build and tooling' },
    { topicId: TopicId.CONFIGURES_THE_BUILD_PROCESS_TO_COMPILE_READY_TO_USE_APPLICATIONS_FROM_SOURCE_CODE, contribution: 'Build and tooling' },
    { topicId: TopicId.CONTROLS_CODE_QUALITY_WITH_MEASUREMENT_TOOLS, contribution: 'Build and tooling' },

    // Coverage dashboard
    { topicId: TopicId.OPTIMIZES_APPLICATION_WITH_CODE_SPLITTING_TECHNIQUES, contribution: 'Coverage dashboard' },
    { topicId: TopicId.PROVIDES_DATA_VISUALIZATIONS_THROUGH_VISUALIZATION_TOOLS, contribution: 'Coverage dashboard' },
    { topicId: TopicId.OPTIMISES_APPLICATIONS_FOR_SEARCH_ENGINES, contribution: 'Coverage dashboard' },

    // Enhanced search
    { topicId: TopicId.MANAGES_AND_IMPLEMENTS_COMPLEX_DATA_STRUCTURES, contribution: 'Enhanced search' },
    { topicId: TopicId.SYNCHRONISES_CONCURRENT_OPERATIONS_BY_USING_LANGUAGE_CAPABILITIES, contribution: 'Enhanced search' },
    { topicId: TopicId.CREATES_AND_ORGANISES_END_TO_END_TESTS, contribution: 'E2E tests' },

    // Logging
    { topicId: TopicId.USES_LIBRARIES_FOR_LOGGING_DATA, contribution: 'Logging' },
  ],

  [PullRequestId.PROCESS_EVIDENCE]: [
    { topicId: TopicId.PASSES_ONBOARDING_INTO_ENGINEERING_AND_TECHNOLOGY_EXPERTISE_INCLUDING_SPECIALISATION_OR_PRACTICE, contribution: 'Onboarding and reviews' },
    { topicId: TopicId.PASSES_PERFORMANCE_REVIEW_ACCORDING_TO_THE_PROCESS_DEFINITION_AND_REQUIREMENTS, contribution: 'Onboarding and reviews' },
    { topicId: TopicId.ESTIMATES_TASKS_BASED_ON_REQUIREMENTS, contribution: 'Onboarding and reviews' },
  ],

  // -------------------------------------------------------------------------
  // Corporate PRs
  // -------------------------------------------------------------------------

  // --- Middle KEY: Sends and retrieves data through a network ---
  [PullRequestId.SHARED_UI_WEB_36900]: [
    { topicId: TopicId.SENDS_AND_RETRIEVES_DATA_THROUGH_A_NETWORK_USING_LANGUAGE_CAPABILITIES, contribution: 'Server-driven impression analytics over HTTP' },
    { topicId: TopicId.USES_HTTP_CLIENTS_FOR_API_COMMUNICATION, contribution: 'HTTP analytics payload submission' },
  ],
  [PullRequestId.SHOPPING_PWA_15079]: [
    { topicId: TopicId.SENDS_AND_RETRIEVES_DATA_THROUGH_A_NETWORK_USING_LANGUAGE_CAPABILITIES, contribution: 'Parallel GraphQL query firing fix' },
    { topicId: TopicId.IMPLEMENTS_CONCURRENCY_CONCEPTS_BY_USING_LANGUAGE_CAPABILITIES, contribution: 'Parallel query execution race condition' },
    { topicId: TopicId.TROUBLESHOOTS_NETWORK_USING_TOOLS_AND_LIBRARIES, contribution: 'Network timing issue diagnosis' },
  ],
  [PullRequestId.SHOPPING_PWA_13017]: [
    { topicId: TopicId.SENDS_AND_RETRIEVES_DATA_THROUGH_A_NETWORK_USING_LANGUAGE_CAPABILITIES, contribution: 'Construct network request parameters' },
  ],

  // --- Middle KEY: Uses HTTP clients for API communication ---
  [PullRequestId.SHARED_UI_WEB_15745]: [
    { topicId: TopicId.USES_HTTP_CLIENTS_FOR_API_COMMUNICATION, contribution: 'Submit user queries to API endpoint' },
  ],
  [PullRequestId.EXP_API_LODGING_OFFERS_10243]: [
    { topicId: TopicId.USES_HTTP_CLIENTS_FOR_API_COMMUNICATION, contribution: 'API client for pricing service' },
  ],

  // --- Middle KEY: Troubleshoots network ---
  [PullRequestId.SHARED_UI_WEB_17220]: [
    { topicId: TopicId.TROUBLESHOOTS_NETWORK_USING_TOOLS_AND_LIBRARIES, contribution: 'Debug redundant GraphQL network calls' },
    { topicId: TopicId.IMPLEMENTS_CONCURRENCY_CONCEPTS_BY_USING_LANGUAGE_CAPABILITIES, contribution: 'Prevent re-firing during concurrent state changes' },
  ],
  [PullRequestId.SHARED_UI_WEB_16805]: [
    { topicId: TopicId.TROUBLESHOOTS_NETWORK_USING_TOOLS_AND_LIBRARIES, contribution: 'Fix GraphQL race condition on searchId update' },
  ],
  [PullRequestId.SHOPPING_PWA_17433]: [
    { topicId: TopicId.TROUBLESHOOTS_NETWORK_USING_TOOLS_AND_LIBRARIES, contribution: 'Troubleshoot data prefetch pipeline' },
  ],

  // --- Middle KEY: Applies security practices ---
  [PullRequestId.SHOPPING_PWA_14816]: [
    { topicId: TopicId.APPLIES_SECURITY_PRACTICES_AND_APPROACHES_TO_PROTECT_APPLICATION, contribution: 'Sanitize URL parameters by removing AI_* keys' },
  ],
  [PullRequestId.SHOPPING_PWA_14925]: [
    { topicId: TopicId.APPLIES_SECURITY_PRACTICES_AND_APPROACHES_TO_PROTECT_APPLICATION, contribution: 'Prevent arbitrary filter keys from leaking' },
  ],
  [PullRequestId.SHOPPING_PWA_8704]: [
    { topicId: TopicId.APPLIES_SECURITY_PRACTICES_AND_APPROACHES_TO_PROTECT_APPLICATION, contribution: 'Whitelist-based parameter validation' },
  ],

  // --- Middle KEY: Manages technical debt ---
  [PullRequestId.SHARED_UI_WEB_35481]: [
    { topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES, contribution: 'Remove decided experiment code' },
  ],
  [PullRequestId.SHARED_UI_WEB_35318]: [
    { topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES, contribution: 'Remove decided experiment code' },
  ],
  [PullRequestId.SHARED_UI_WEB_35144]: [
    { topicId: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES, contribution: 'Simplify over-complex data source logic' },
    { topicId: TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS, contribution: 'Data source abstraction for scalability' },
  ],

  // --- Middle: Implements concurrency concepts ---
  [PullRequestId.SHARED_UI_WEB_15935]: [
    { topicId: TopicId.IMPLEMENTS_CONCURRENCY_CONCEPTS_BY_USING_LANGUAGE_CAPABILITIES, contribution: 'Sequence async operations to avoid race condition' },
  ],

  // --- Middle: Manipulates date and time ---
  [PullRequestId.SHARED_UI_WEB_37156]: [
    { topicId: TopicId.MANIPULATES_DATE_AND_TIME_WITH_LANGUAGE_APIS, contribution: 'Date object/string format conversion' },
  ],
  [PullRequestId.SHARED_UI_WEB_31599]: [
    { topicId: TopicId.MANIPULATES_DATE_AND_TIME_WITH_LANGUAGE_APIS, contribution: 'Date change handling in dialog' },
  ],

  // --- Middle: Uses language APIs for mathematical operations ---
  [PullRequestId.SHARED_UI_WEB_10735]: [
    { topicId: TopicId.USES_LANGUAGE_APIS_FOR_MATHEMATICAL_OPERATIONS, contribution: 'Range/price calculations for filters' },
  ],
  [PullRequestId.SHOPPING_PWA_15012]: [
    { topicId: TopicId.USES_LANGUAGE_APIS_FOR_MATHEMATICAL_OPERATIONS, contribution: 'Price value manipulation' },
  ],
  [PullRequestId.EXP_API_LODGING_OFFERS_10403]: [
    { topicId: TopicId.USES_LANGUAGE_APIS_FOR_MATHEMATICAL_OPERATIONS, contribution: 'Price insight scoring calculations' },
  ],

  // --- Middle: Defines custom event for user interaction ---
  [PullRequestId.SHARED_UI_WEB_21664]: [
    { topicId: TopicId.DEFINES_CUSTOM_EVENT_FOR_HANDLING_USER_INTERACTION, contribution: 'Custom synthetic events for interaction flow' },
  ],
  [PullRequestId.SHARED_UI_WEB_11332]: [
    { topicId: TopicId.DEFINES_CUSTOM_EVENT_FOR_HANDLING_USER_INTERACTION, contribution: 'Event-driven cross-component communication' },
  ],
  [PullRequestId.SHARED_UI_WEB_19577]: [
    { topicId: TopicId.DEFINES_CUSTOM_EVENT_FOR_HANDLING_USER_INTERACTION, contribution: 'Signals-based event system setup' },
  ],

  // --- Middle: Manages data for scalable applications ---
  [PullRequestId.SHARED_UI_WEB_33436]: [
    { topicId: TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS, contribution: 'GraphQL data prefetching through component tree' },
  ],
  [PullRequestId.SHARED_UI_WEB_14474]: [
    { topicId: TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS, contribution: 'Apollo cache type policies for scalable state' },
    { topicId: TopicId.USES_LANGUAGE_METAPROGRAMMING_TECHNIQUES, contribution: 'Runtime type introspection via Apollo type policies' },
  ],

  // --- Middle: Uses advanced router capability ---
  [PullRequestId.SHOPPING_PWA_15411]: [
    { topicId: TopicId.USES_ADVANCED_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION, contribution: 'URL query parameter construction refactor' },
  ],
  [PullRequestId.SHOPPING_PWA_12257]: [
    { topicId: TopicId.USES_ADVANCED_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION, contribution: 'Route parameter replacement logic' },
  ],
  [PullRequestId.SHOPPING_PWA_11779]: [
    { topicId: TopicId.USES_ADVANCED_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION, contribution: 'Route state synchronization on destination change' },
  ],

  // --- Middle: Handles internationalisation ---
  [PullRequestId.PRODUCT_DETAILS_API_3218]: [
    { topicId: TopicId.HANDLES_INTERNATIONALISATION_IN_SCOPE_OF_THE_APPLICATIONS_DEVELOPMENT, contribution: 'Localization key management' },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3225]: [
    { topicId: TopicId.HANDLES_INTERNATIONALISATION_IN_SCOPE_OF_THE_APPLICATIONS_DEVELOPMENT, contribution: 'Locale-aware label selection' },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3360]: [
    { topicId: TopicId.HANDLES_INTERNATIONALISATION_IN_SCOPE_OF_THE_APPLICATIONS_DEVELOPMENT, contribution: 'Localized content for LBG feature' },
  ],

  // --- Middle: Handles scroll detection ---
  [PullRequestId.EGDS_COMPONENTS_REACT_712]: [
    { topicId: TopicId.HANDLES_SCROLL_DETECTION_THROUGH_TOOLS_AND_LIBRARIES, contribution: 'IntersectionObserver setup for visibility detection' },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_735]: [
    { topicId: TopicId.HANDLES_SCROLL_DETECTION_THROUGH_TOOLS_AND_LIBRARIES, contribution: 'Scroll-based carousel behavior' },
  ],
  [PullRequestId.SHARED_UI_WEB_17571]: [
    { topicId: TopicId.HANDLES_SCROLL_DETECTION_THROUGH_TOOLS_AND_LIBRARIES, contribution: 'Sticky positioning via scroll detection' },
  ],

  // --- Middle: Validates data ---
  [PullRequestId.SHARED_UI_WEB_30536]: [
    { topicId: TopicId.VALIDATES_DATA_WITH_TOOLS_AND_LIBRARIES, contribution: 'Input validation with defaults' },
  ],
  [PullRequestId.EXP_API_LODGING_PROPERTY_3221]: [
    { topicId: TopicId.VALIDATES_DATA_WITH_TOOLS_AND_LIBRARIES, contribution: 'Server-side input validation' },
  ],
  [PullRequestId.SHOPPING_PWA_8403]: [
    { topicId: TopicId.VALIDATES_DATA_WITH_TOOLS_AND_LIBRARIES, contribution: 'Cross-field validation consistency' },
  ],

  // --- Middle: Provides support for different browsers ---
  [PullRequestId.SHOPPING_PWA_14732]: [
    { topicId: TopicId.PROVIDES_SUPPORT_FOR_DIFFERENT_BROWSERS, contribution: 'Mobile browser landscape mode layout fix' },
  ],
  [PullRequestId.SHOPPING_PWA_12834]: [
    { topicId: TopicId.PROVIDES_SUPPORT_FOR_DIFFERENT_BROWSERS, contribution: 'Mobile web browser spacing compatibility' },
  ],
  [PullRequestId.SHARED_UI_WEB_18503]: [
    { topicId: TopicId.PROVIDES_SUPPORT_FOR_DIFFERENT_BROWSERS, contribution: 'Split-view browser feature fix' },
  ],

  // --- Middle: Transforms elements using style sheets ---
  [PullRequestId.EGDS_COMPONENTS_REACT_956]: [
    { topicId: TopicId.TRANSFORMS_ELEMENTS_USING_STYLE_SHEETS, contribution: 'CSS z-index layering for carousel items' },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_1898]: [
    { topicId: TopicId.TRANSFORMS_ELEMENTS_USING_STYLE_SHEETS, contribution: 'CSS overflow/transform handling refactor' },
  ],
  [PullRequestId.SHARED_UI_WEB_12593]: [
    { topicId: TopicId.TRANSFORMS_ELEMENTS_USING_STYLE_SHEETS, contribution: 'CSS stacking context for map trigger' },
  ],

  // --- Middle: Embeds content from another source ---
  [PullRequestId.PRODUCT_DETAILS_API_3527]: [
    { topicId: TopicId.EMBEDS_CONTENT_FROM_ANOTHER_SOURCE_INTO_A_WEBPAGE, contribution: 'Server-driven pictogram embedded into page' },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3590]: [
    { topicId: TopicId.EMBEDS_CONTENT_FROM_ANOTHER_SOURCE_INTO_A_WEBPAGE, contribution: 'Externally-sourced image asset embedding' },
  ],
  [PullRequestId.SHARED_GRAPHQL_8231]: [
    { topicId: TopicId.EMBEDS_CONTENT_FROM_ANOTHER_SOURCE_INTO_A_WEBPAGE, contribution: 'GraphQL type for embedded external image content' },
  ],

  // --- Senior: Creates and maintains component library ---
  [PullRequestId.EGDS_COMPONENTS_REACT_1011]: [
    { topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY, contribution: 'Create new typeahead component for design system' },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_759]: [
    { topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY, contribution: 'Carousel button behavior update in design system' },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_720]: [
    { topicId: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY, contribution: 'Carousel subcomponent for design system' },
  ],

  // --- Senior: Uses language metaprogramming techniques ---
  [PullRequestId.SHARED_UI_WEB_14227]: [
    { topicId: TopicId.USES_LANGUAGE_METAPROGRAMMING_TECHNIQUES, contribution: 'Dynamic type resolution via Apollo type policies' },
  ],
  [PullRequestId.EGDS_COMPONENTS_REACT_797]: [
    { topicId: TopicId.USES_LANGUAGE_METAPROGRAMMING_TECHNIQUES, contribution: 'Server-driven component behavior via runtime config' },
  ],

  // --- Middle: Collects data using requirements elicitation ---
  [PullRequestId.SHARED_UI_WEB_18919]: [
    { topicId: TopicId.COLLECTS_DATA_USING_REQUIREMENTS_ELICITATION_TECHNIQUES_AND_METHODOLOGIES, contribution: 'User interaction data collection for AI search' },
  ],

  // --- Middle: Uses different requirement sources ---
  [PullRequestId.PRODUCT_DETAILS_API_3350]: [
    { topicId: TopicId.USES_DIFFERENT_REQUIREMENT_SOURCES_FOR_SOLUTION_IMPLEMENTATION, contribution: 'Multi-brand business rules as requirement source' },
  ],
  [PullRequestId.PRODUCT_DETAILS_API_3572]: [
    { topicId: TopicId.USES_DIFFERENT_REQUIREMENT_SOURCES_FOR_SOLUTION_IMPLEMENTATION, contribution: 'Multiple product surface constraints' },
  ],
  [PullRequestId.SHOPPING_PWA_17074]: [
    { topicId: TopicId.USES_DIFFERENT_REQUIREMENT_SOURCES_FOR_SOLUTION_IMPLEMENTATION, contribution: 'Design spec + experiment data as requirement sources' },
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
    { topicId: TopicId; contribution: string }[],
  ][]) {
    const pr = prIndex.get(prId)
    if (!pr) throw new Error(`Missing pull request for id "${prId}"`)

    const repo = repoIndex.get(pr.repoId)
    if (!repo) throw new Error(`Missing repo for id "${pr.repoId}"`)

    for (const { topicId, contribution } of entries) {
      const existing = topicPrMap.get(topicId) ?? []
      const pf = parentFeatureIndex.get(prId)
      const topicPr: TopicPr = {
        ...pr,
        contribution,
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
        prs: (topicPrMap.get(id) ?? []).sort((a, b) => {
          const aFiller = a.id === PullRequestId.PR_ATLAS ? 1 : 0
          const bFiller = b.id === PullRequestId.PR_ATLAS ? 1 : 0
          return aFiller - bFiller
        }),
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
