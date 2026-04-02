import {
  PullRequestId,
  TopicId,
  type Feature,
  type PrTopicMappings,
  type PullRequest,
  type Topic,
  type TopicPr,
} from '@/types/topics'

import { sections, type Section } from '@/data/sections'

// ---------------------------------------------------------------------------
// Pull requests
// ---------------------------------------------------------------------------

const pullRequests: PullRequest[] = [
  {
    id: PullRequestId.PR_ATLAS,
    title: 'PR Atlas',
    url: 'https://github.com/dicodiaz/pr-atlas',
  },
  {
    id: PullRequestId.PROCESS_EVIDENCE,
    title: 'Process evidence (pending confirmation)',
    url: '#',
  },
]

// ---------------------------------------------------------------------------
// PR ↔ topic mappings
// ---------------------------------------------------------------------------

const prTopicMappings: PrTopicMappings = {
  [PullRequestId.PR_ATLAS]: [
    // Language – JavaScript
    {
      topicId: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      feature: 'Data modeling',
    },
    {
      topicId: TopicId.STORES_REUSES_AND_MANIPULATES_DATA,
      feature: 'Data modeling',
    },
    {
      topicId: TopicId.STORES_REUSES_AND_OPERATES_ON_BASIC_DATA_TYPES,
      feature: 'Data modeling',
    },
    {
      topicId: TopicId.USES_AND_MAINTAINS_LANGUAGE_OPERATORS_AND_COMMENTS,
      feature: 'Debounced search',
    },
    {
      topicId: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
      feature: 'Debounced search',
    },
    {
      topicId: TopicId.HANDLES_EXCEPTIONS_USING_LANGUAGE_CAPABILITIES,
      feature: 'Saved searches',
    },
    {
      topicId: TopicId.HANDLES_USER_INTERACTION_WITH_EVENTS_HANDLERS,
      feature: 'Debounced search',
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_A_USER_INTERFACE_USING_LANGUAGE_BUILT_IN_TECHNICS,
      feature: 'Debounced search',
    },
    {
      topicId: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR,
      feature: 'Architecture',
    },
    {
      topicId:
        TopicId.USES_BUILT_IN_ITERATORS_TO_TRAVERSE_THROUGH_DIFFERENT_TYPES_OF_COLLECTIONS,
      feature: 'Data modeling',
    },
    {
      topicId:
        TopicId.DEFINES_MAINTAINS_AND_USES_MODULAR_STRUCTURES_FOR_CODE_NAMESPACING_AND_REUSABILITY,
      feature: 'Architecture',
    },
    {
      topicId:
        TopicId.IMPLEMENTS_ASYNCHRONY_AND_NON_BLOCKING_ENVIRONMENT_CONCEPTS,
      feature: 'Debounced search',
    },
    {
      topicId:
        TopicId.VALIDATES_FINDS_AND_REPLACES_STRING_DATA_WITH_REGULAR_EXPRESSIONS,
      feature: 'Debounced search',
    },
    {
      topicId:
        TopicId.APPLIES_METHODOLOGY_AND_BEST_PRACTICES_FOR_LANGUAGE_PERFORMANCE_OPTIMISATION,
      feature: 'Debounced search',
    },
    {
      topicId: TopicId.CREATES_AND_MAINTAINS_CUSTOM_USER_INTERFACE_COMPONENTS,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.MANAGES_ADVANCED_COLLECTIONS_OF_DATA_USING_LANGUAGE,
      feature: 'Data modeling',
    },
    {
      topicId: TopicId.ACCESSES_AND_STORES_DATA_IN_A_CLIENT_SIDE_STORAGE,
      feature: 'Saved searches',
    },
    {
      topicId:
        TopicId.OPTIMISES_APPLICATION_PERFORMANCE_TAKING_INTO_ACCOUNT_THE_COMPLEXITY_OF_THE_ALGORITHMS,
      feature: 'Debounced search',
    },

    // Framework – React JS Web
    {
      topicId: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.STYLING_ELEMENTS_USING_FRAMEWORK_CAPABILITY,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
      feature: 'Debounced search',
    },
    {
      topicId: TopicId.USES_TECHNICS_TO_DYNAMICALLY_GENERATE_ELEMENTS,
      feature: 'Debounced search',
    },
    {
      topicId:
        TopicId.APPLIES_TECHNICS_AND_USES_TECHNOLOGY_FOR_STYLING_COMPONENTS,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
      feature: 'Debounced search',
    },
    {
      topicId:
        TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
      feature: 'Debounced search',
    },
    {
      topicId:
        TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY,
      feature: 'Debounced search',
    },
    {
      topicId: TopicId.SETS_UP_BUILDS_TESTS_AND_DEPLOYS_APPLICATION_WITH_CLI,
      feature: 'Build and tooling',
    },
    {
      topicId: TopicId.USES_FORMS_FOR_USER_INPUTS_AND_INTERACTION,
      feature: 'Debounced search',
    },
    {
      topicId: TopicId.USES_FRAMEWORK_BUILT_IN_TOOLS_FOR_CODE_REUSABILITY,
      feature: 'Architecture',
    },
    {
      topicId:
        TopicId.USES_FRAMEWORK_RELATED_AND_BASIC_TOOLS_FOR_APPLICATION_S_DEBUGGING,
      feature: 'Build and tooling',
    },
    {
      topicId:
        TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
      feature: 'Accessibility',
    },

    // Libraries – React JS Web
    {
      topicId: TopicId.DEBUGS_APPLICATION_USING_DEBUGGING_TOOLS_AND_TECHNIQUES,
      feature: 'Build and tooling',
    },
    {
      topicId: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
      feature: 'Build and tooling',
    },
    {
      topicId: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
      feature: 'Data modeling',
    },
    {
      topicId: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS,
      feature: 'Debounced search',
    },
    {
      topicId: TopicId.OPTIMIZES_THE_DEVELOPMENT_PROCESS_WITH_UTILS,
      feature: 'Build and tooling',
    },
    {
      topicId:
        TopicId.SIMPLIFIES_ACCESS_TO_BROWSERS_STORAGE_USING_TOOLS_OR_LIBRARIES,
      feature: 'Saved searches',
    },
    {
      topicId: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
      feature: 'Internationalization',
    },
    {
      topicId:
        TopicId.HANDLES_DIFFERENT_TYPES_OF_LOCALIZATION_AND_TEXT_PROCESSING,
      feature: 'Internationalization',
    },
    {
      topicId: TopicId.CONFIGURES_BUNDLERS_FOR_APPLICATION,
      feature: 'Build and tooling',
    },

    // Markup and Styling
    {
      topicId: TopicId.ADDS_STYLING_TO_TEMPLATE_DOCUMENT,
      feature: 'Responsive layout',
    },
    {
      topicId:
        TopicId.ADJUSTS_VALUES_AND_UNITS_TO_SET_THE_SIZE_OF_VARIOUS_ELEMENTS_WITH_STYLE_SHEET_LANGUAGE,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.HANDLES_OVERFLOWING_CONTENT_ON_A_PAGE,
      feature: 'Responsive layout',
    },
    {
      topicId:
        TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.USES_BASIC_BOX_MODEL_AND_HANDLES_MARGIN_COLLAPSING,
      feature: 'Responsive layout',
    },
    {
      topicId:
        TopicId.ALIGNS_VARIOUS_ELEMENT_POSITIONS_WITH_STYLE_SHEET_LANGUAGE,
      feature: 'Responsive layout',
    },
    {
      topicId:
        TopicId.CREATES_AND_COMPOSES_PAGES_AND_LAYOUTS_USING_STANDARD_MARKUP_LANGUAGE,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.CREATES_FORMS_USING_A_STANDARD_MARKUP_LANGUAGE,
      feature: 'Debounced search',
    },
    {
      topicId:
        TopicId.CREATES_LAYOUTS_WITH_BASIC_LAYOUT_MODES_USING_STYLE_SHEET_LANGUAGE,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.CREATES_TABLES_WITH_A_STANDARD_MARKUP_LANGUAGE,
      feature: 'Debounced search',
    },
    {
      topicId:
        TopicId.STYLES_ELEMENTS_WITH_VARIOUS_STYLE_SHEET_LANGUAGE_SELECTORS,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.STYLES_TEXT_USING_BASIC_STYLE_SHEET_LANGUAGE_RULES,
      feature: 'Responsive layout',
    },
    {
      topicId:
        TopicId.ANIMATES_USER_INTERFACE_ELEMENTS_USING_STYLE_SHEET_LANGUAGE,
      feature: 'Responsive layout',
    },
    {
      topicId:
        TopicId.APPLIES_STANDARDISED_METHODOLOGIES_WHILE_USING_STYLE_SHEET_LANGUAGE,
      feature: 'Responsive layout',
    },
    {
      topicId:
        TopicId.CREATES_LAYOUTS_WITH_ADVANCED_LAYOUT_MODES_USING_STYLE_SHEET_LANGUAGE,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.CREATES_RESPONSIVE_LAYOUTS_WITH_ADAPTIVE_TECHNICS,
      feature: 'Responsive layout',
    },
    {
      topicId:
        TopicId.STYLES_USER_INTERFACE_USING_PREPROCESSORS_OR_SCRIPTING_SOLUTIONS,
      feature: 'Responsive layout',
    },
    { topicId: TopicId.CREATES_ACCESSIBLE_WEB_PAGES, feature: 'Accessibility' },
    {
      topicId: TopicId.CREATES_WEB_PAGES_FOR_VARIOUS_DEVICE_TYPES,
      feature: 'Responsive layout',
    },
    {
      topicId: TopicId.OPTIMISES_PAGE_PERFORMANCE,
      feature: 'Responsive layout',
    },

    // Code-Based Testing – React JS Web
    {
      topicId:
        TopicId.APPLIES_COMMUNITY_RECOMMENDED_PRACTICE_AND_METHODOLOGIES_TO_AUTOMATED_TESTS,
      feature: 'Testing suite',
    },
    {
      topicId: TopicId.STRUCTURES_TESTS_USING_FRAMEWORK_CAPABILITIES,
      feature: 'Testing suite',
    },
    { topicId: TopicId.USES_DUMMY_DATA_FOR_TESTING, feature: 'Testing suite' },
    {
      topicId: TopicId.USES_MATCHERS_FOR_TESTING_EXPECTED_RESULT,
      feature: 'Testing suite',
    },
    { topicId: TopicId.USES_UNIT_TESTS_TECHNIQUES, feature: 'Testing suite' },
    {
      topicId: TopicId.TESTS_ASYNC_CODE_USING_FRAMEWORK_CAPABILITIES,
      feature: 'Testing suite',
    },
    {
      topicId: TopicId.USES_FAKE_OBJECTS_TO_DECOUPLE_FROM_DEPENDENCIES,
      feature: 'Testing suite',
    },
    {
      topicId:
        TopicId.USES_INTEGRATION_TEST_APPROACHES_STRATEGIES_AND_METHODOLOGIES,
      feature: 'Testing suite',
    },
    {
      topicId:
        TopicId.USES_TECHNIQUES_AND_METHODOLOGY_FOR_ACCESSIBILITY_TESTING,
      feature: 'Testing suite',
    },
    {
      topicId: TopicId.CONFIGURES_AND_MAINTAINS_CODE_COVERAGE_REPORTS,
      feature: 'Testing suite',
    },
    {
      topicId: TopicId.CONFIGURES_TEST_FRAMEWORK_FOR_TESTS_EXECUTION,
      feature: 'Testing suite',
    },

    // Design
    {
      topicId:
        TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
      feature: 'Architecture',
    },
    {
      topicId:
        TopicId.CREATES_REUSABLE_STRUCTURES_BY_APPLYING_DESIGN_STRATEGIES_AND_METHODOLOGIES,
      feature: 'Architecture',
    },
    {
      topicId:
        TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
      feature: 'Architecture',
    },
    {
      topicId:
        TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
      feature: 'Architecture',
    },
    {
      topicId:
        TopicId.USES_DESIGN_PATTERNS_TO_CREATE_NEW_STRUCTURES_BASED_ON_REQUIREMENTS,
      feature: 'Architecture',
    },
    {
      topicId:
        TopicId.DISTRIBUTES_RESPONSIBILITY_BETWEEN_STRUCTURES_USING_DESIGN_PATTERNS,
      feature: 'Architecture',
    },
    {
      topicId:
        TopicId.ENSURES_EFFICIENT_AND_FLEXIBLE_COMPOSITION_OF_STRUCTURES_WITH_DESIGN_PATTERNS,
      feature: 'Architecture',
    },
    {
      topicId:
        TopicId.EVALUATES_AND_MODIFIES_SOFTWARE_DESIGN_TO_ENSURE_SOFTWARE_QUALITY,
      feature: 'Architecture',
    },
    {
      topicId: TopicId.USES_METHODOLOGIES_AND_TECHNICS_TO_DOCUMENT_DESIGN,
      feature: 'Architecture',
    },

    // Development Environments – React JS Web
    {
      topicId:
        TopicId.MANAGES_ENVIRONMENTS_USING_BUILT_IN_OPERATING_SYSTEM_TOOLS,
      feature: 'Build and tooling',
    },
    {
      topicId: TopicId.USES_VERSION_CONTROL_TOOLS_FOR_DEVELOPMENT,
      feature: 'Build and tooling',
    },
    {
      topicId:
        TopicId.CONFIGURES_AND_MAINTAINS_DEVELOPMENT_ENVIRONMENT_AND_ECOSYSTEM,
      feature: 'Build and tooling',
    },
    {
      topicId: TopicId.DISTRIBUTES_WORK_USING_VERSION_CONTROL_TOOLS,
      feature: 'Build and tooling',
    },
    {
      topicId: TopicId.MAINTAINS_CODE_QUALITY_OF_THE_APPLICATION,
      feature: 'Build and tooling',
    },
    {
      topicId:
        TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
      feature: 'Build and tooling',
    },
    {
      topicId:
        TopicId.CONFIGURES_THE_BUILD_PROCESS_TO_COMPILE_READY_TO_USE_APPLICATIONS_FROM_SOURCE_CODE,
      feature: 'Build and tooling',
    },
    {
      topicId: TopicId.CONTROLS_CODE_QUALITY_WITH_MEASUREMENT_TOOLS,
      feature: 'Build and tooling',
    },

    // Coverage dashboard
    {
      topicId: TopicId.OPTIMIZES_APPLICATION_WITH_CODE_SPLITTING_TECHNIQUES,
      feature: 'Coverage dashboard',
    },
    {
      topicId: TopicId.PROVIDES_DATA_VISUALIZATIONS_THROUGH_VISUALIZATION_TOOLS,
      feature: 'Coverage dashboard',
    },
    {
      topicId: TopicId.OPTIMISES_APPLICATIONS_FOR_SEARCH_ENGINES,
      feature: 'Coverage dashboard',
    },
  ],
  [PullRequestId.PROCESS_EVIDENCE]: [
    {
      topicId:
        TopicId.PASSES_ONBOARDING_INTO_ENGINEERING_AND_TECHNOLOGY_EXPERTISE_INCLUDING_SPECIALISATION_OR_PRACTICE,
      feature: 'Onboarding and reviews',
    },
    {
      topicId:
        TopicId.PASSES_PERFORMANCE_REVIEW_ACCORDING_TO_THE_PROCESS_DEFINITION_AND_REQUIREMENTS,
      feature: 'Onboarding and reviews',
    },
    {
      topicId: TopicId.ESTIMATES_TASKS_BASED_ON_REQUIREMENTS,
      feature: 'Onboarding and reviews',
    },
  ],
}

// ---------------------------------------------------------------------------
// Build topics
// ---------------------------------------------------------------------------

const buildTopics = (
  sectionList: Section[],
  prs: PullRequest[],
  mappings: PrTopicMappings,
): Topic[] => {
  const prIndex = new Map(prs.map((pr) => [pr.id, pr]))

  const topicPrMap = new Map<TopicId, TopicPr[]>()

  for (const [prId, entries] of Object.entries(mappings) as [
    PullRequestId,
    { topicId: TopicId; feature: Feature }[],
  ][]) {
    const pr = prIndex.get(prId)

    if (!pr) {
      throw new Error(`Missing pull request for id "${prId}"`)
    }

    for (const { topicId, feature } of entries) {
      const existing = topicPrMap.get(topicId) ?? []
      existing.push({ ...pr, feature })
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
        prs: topicPrMap.get(id) ?? [],
      })),
    ),
  )
}

export const topics: Topic[] = buildTopics(
  sections,
  pullRequests,
  prTopicMappings,
)
