import { TopicId } from '@/types/topics'

// ---------------------------------------------------------------------------
// Section seed format
// ---------------------------------------------------------------------------

interface TopicEntry {
  id: TopicId
  name: string
  key?: true
}

interface LevelGroup {
  level: string
  topics: TopicEntry[]
}

export interface Section {
  category: string
  technology?: string
  levels: LevelGroup[]
}

export const sections: Section[] = [
  // -----------------------------------------------------------------------
  // Language – JavaScript
  // -----------------------------------------------------------------------
  {
    category: 'Language',
    technology: 'JavaScript',
    levels: [
      {
        level: 'Trainee',
        topics: [
          {
            id: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
            name: 'Manages collections of data using language',
            key: true,
          },
          {
            id: TopicId.STORES_REUSES_AND_MANIPULATES_DATA,
            name: 'Stores, reuses, and manipulates data',
            key: true,
          },
          {
            id: TopicId.STORES_REUSES_AND_OPERATES_ON_BASIC_DATA_TYPES,
            name: 'Stores, reuses, and operates on basic data types',
            key: true,
          },
          {
            id: TopicId.USES_AND_MAINTAINS_LANGUAGE_OPERATORS_AND_COMMENTS,
            name: 'Uses and maintains language operators and comments',
            key: true,
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.APPLIES_AND_MAINTAINS_CONTROL_FLOW_STRUCTURES,
            name: 'Applies and maintains control flow structures',
            key: true,
          },
          {
            id: TopicId.HANDLES_EXCEPTIONS_USING_LANGUAGE_CAPABILITIES,
            name: 'Handles exceptions using language capabilities',
            key: true,
          },
          {
            id: TopicId.HANDLES_USER_INTERACTION_WITH_EVENTS_HANDLERS,
            name: 'Handles user interaction with events handlers',
            key: true,
          },
          {
            id: TopicId.INTERACTS_WITH_A_USER_INTERFACE_USING_LANGUAGE_BUILT_IN_TECHNICS,
            name: 'Interacts with a user interface using language built-in technics',
          },
          {
            id: TopicId.REUSES_AND_ENCAPSULATES_RELATED_DATA_AND_BEHAVIOUR,
            name: 'Reuses and encapsulates related data and behaviour',
            key: true,
          },
          {
            id: TopicId.USES_BUILT_IN_ITERATORS_TO_TRAVERSE_THROUGH_DIFFERENT_TYPES_OF_COLLECTIONS,
            name: 'Uses built-in iterators to traverse through different types of collections',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.ACCESSES_AND_STORES_DATA_IN_A_CLIENT_SIDE_STORAGE,
            name: 'Accesses and stores data in a client-side storage',
            key: true,
          },
          {
            id: TopicId.DEFINES_MAINTAINS_AND_USES_MODULAR_STRUCTURES_FOR_CODE_NAMESPACING_AND_REUSABILITY,
            name: 'Defines, maintains, and uses modular structures for code namespacing and reusability',
            key: true,
          },
          {
            id: TopicId.IMPLEMENTS_ASYNCHRONY_AND_NON_BLOCKING_ENVIRONMENT_CONCEPTS,
            name: 'Implements asynchrony and non-blocking environment concepts',
            key: true,
          },
          {
            id: TopicId.IMPLEMENTS_CONCURRENCY_CONCEPTS_BY_USING_LANGUAGE_CAPABILITIES,
            name: 'Implements concurrency concepts by using language capabilities',
          },
          {
            id: TopicId.MANAGES_FILES_WITH_LANGUAGE_FILESYSTEM_CAPABILITIES,
            name: 'Manages files with language filesystem capabilities',
          },
          {
            id: TopicId.MANIPULATES_DATE_AND_TIME_WITH_LANGUAGE_APIS,
            name: 'Manipulates date and time with language APIs',
          },
          {
            id: TopicId.SENDS_AND_RETRIEVES_DATA_THROUGH_A_NETWORK_USING_LANGUAGE_CAPABILITIES,
            name: 'Sends and retrieves data through a network using language capabilities',
            key: true,
          },
          {
            id: TopicId.USES_LANGUAGE_APIS_FOR_MATHEMATICAL_OPERATIONS,
            name: 'Uses language APIs for mathematical operations',
          },
          {
            id: TopicId.VALIDATES_FINDS_AND_REPLACES_STRING_DATA_WITH_REGULAR_EXPRESSIONS,
            name: 'Validates, finds, and replaces string data with regular expressions',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.APPLIES_METHODOLOGY_AND_BEST_PRACTICES_FOR_LANGUAGE_PERFORMANCE_OPTIMISATION,
            name: 'Applies methodology and best practices for language performance optimisation',
            key: true,
          },
          {
            id: TopicId.BUILDS_CLIENT_SERVER_APPLICATIONS_USING_NETWORK_PROTOCOLS,
            name: 'Builds client-server applications using network protocols',
            key: true,
          },
          {
            id: TopicId.CREATES_AND_MAINTAINS_CUSTOM_USER_INTERFACE_COMPONENTS,
            name: 'Creates and maintains custom user interface components',
          },
          {
            id: TopicId.MANAGES_ADVANCED_COLLECTIONS_OF_DATA_USING_LANGUAGE,
            name: 'Manages advanced collections of data using language',
            key: true,
          },
          {
            id: TopicId.MANAGES_AND_IMPLEMENTS_COMPLEX_DATA_STRUCTURES,
            name: 'Manages and implements complex data structures',
          },
          {
            id: TopicId.OPTIMISES_APPLICATION_PERFORMANCE_TAKING_INTO_ACCOUNT_THE_COMPLEXITY_OF_THE_ALGORITHMS,
            name: 'Optimises application performance taking into account the complexity of the algorithms',
            key: true,
          },
          {
            id: TopicId.SECURES_NETWORK_INTERACTION_USING_A_PROGRAMMING_LANGUAGE,
            name: 'Secures network interaction using a programming language',
          },
          {
            id: TopicId.SYNCHRONISES_CONCURRENT_OPERATIONS_BY_USING_LANGUAGE_CAPABILITIES,
            name: 'Synchronises concurrent operations by using language capabilities',
          },
          {
            id: TopicId.USES_LANGUAGE_METAPROGRAMMING_TECHNIQUES,
            name: 'Uses language metaprogramming techniques',
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Framework – React JS Web
  // -----------------------------------------------------------------------
  {
    category: 'Framework',
    technology: 'React JS Web',
    levels: [
      {
        level: 'Trainee',
        topics: [
          {
            id: TopicId.CREATES_SUPPORTS_AND_COMPOSES_USER_INTERFACE_COMPONENTS,
            name: 'Creates, supports, and composes user interface components',
            key: true,
          },
          {
            id: TopicId.STYLING_ELEMENTS_USING_FRAMEWORK_CAPABILITY,
            name: 'Styling elements using framework capability',
            key: true,
          },
          {
            id: TopicId.USES_BUILT_IN_MECHANISM_TO_MANAGE_COMPONENT_INTERACTION,
            name: 'Uses built-in mechanism to manage component interaction',
            key: true,
          },
          {
            id: TopicId.USES_TECHNICS_TO_DYNAMICALLY_GENERATE_ELEMENTS,
            name: 'Uses technics to dynamically generate elements',
            key: true,
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.APPLIES_TECHNICS_AND_USES_TECHNOLOGY_FOR_STYLING_COMPONENTS,
            name: 'Applies technics and uses technology for styling components',
            key: true,
          },
          {
            id: TopicId.DISPLAYS_DATA_ON_THE_USER_INTERFACE,
            name: 'Displays data on the user interface',
            key: true,
          },
          {
            id: TopicId.HANDLES_USER_INTERACTION_WITH_EVENT_HANDLERS_IN_FRAMEWORK,
            name: 'Handles user interaction with event handlers in framework',
            key: true,
          },
          {
            id: TopicId.INTERACTS_WITH_API_AND_HANDLES_REQUEST_METADATA,
            name: 'Interacts with API and handles request metadata',
          },
          {
            id: TopicId.INTERACTS_WITH_LIFECYCLES_IN_COMPONENTS_USING_FRAMEWORK_CAPABILITY,
            name: 'Interacts with lifecycles in components using framework capability',
            key: true,
          },
          {
            id: TopicId.SETS_UP_BUILDS_TESTS_AND_DEPLOYS_APPLICATION_WITH_CLI,
            name: 'Sets up, builds, tests, and deploys application with CLI',
          },
          {
            id: TopicId.USES_BASIC_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION,
            name: 'Uses basic router capability for building navigation',
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.APPLIES_SECURITY_PRACTICES_AND_APPROACHES_TO_PROTECT_APPLICATION,
            name: 'Applies security practices and approaches to protect application',
            key: true,
          },
          {
            id: TopicId.DEFINES_CUSTOM_EVENT_FOR_HANDLING_USER_INTERACTION,
            name: 'Defines custom event for handling user interaction',
          },
          {
            id: TopicId.HANDLES_INTERNATIONALISATION_IN_SCOPE_OF_THE_APPLICATIONS_DEVELOPMENT,
            name: 'Handles internationalisation in scope of the applications development',
          },
          {
            id: TopicId.MANAGES_DATA_FOR_DEVELOPING_DYNAMIC_AND_HIGHLY_SCALABLE_APPLICATIONS,
            name: 'Manages data for developing dynamic and highly scalable applications',
          },
          {
            id: TopicId.USES_ADVANCED_ROUTER_CAPABILITY_FOR_BUILDING_NAVIGATION,
            name: 'Uses advanced router capability for building navigation',
          },
          {
            id: TopicId.USES_FORMS_FOR_USER_INPUTS_AND_INTERACTION,
            name: 'Uses forms for user inputs and interaction',
            key: true,
          },
          {
            id: TopicId.USES_FRAMEWORK_BUILT_IN_TOOLS_FOR_CODE_REUSABILITY,
            name: 'Uses framework built-in tools for code reusability',
            key: true,
          },
          {
            id: TopicId.USES_FRAMEWORK_RELATED_AND_BASIC_TOOLS_FOR_APPLICATION_S_DEBUGGING,
            name: "Uses framework-related and basic tools for application's debugging",
            key: true,
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.APPLIES_ACCESSIBILITY_RULES_AND_GUIDELINES_FOR_BUILDING_USER_INTERFACE,
            name: 'Applies accessibility rules and guidelines for building user interface',
          },
          {
            id: TopicId.CREATES_AND_MAINTAINS_COMPONENT_LIBRARY,
            name: 'Creates and maintains component library',
          },
          {
            id: TopicId.OPTIMIZES_APPLICATION_WITH_CODE_SPLITTING_TECHNIQUES,
            name: 'Optimizes application with code-splitting techniques',
            key: true,
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Libraries – React JS Web
  // -----------------------------------------------------------------------
  {
    category: 'Libraries',
    technology: 'React JS Web',
    levels: [
      {
        level: 'Trainee',
        topics: [
          {
            id: TopicId.DEBUGS_APPLICATION_USING_DEBUGGING_TOOLS_AND_TECHNIQUES,
            name: 'Debugs application using debugging tools and techniques',
            key: true,
          },
          {
            id: TopicId.MANAGES_PROJECT_DEPENDENCIES_WITH_PACKAGE_MANAGERS,
            name: 'Manages project dependencies with package managers',
            key: true,
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.CONVERTERS_AND_FORMATES_DATE_AND_TIME_USING_DATE_TIME_LIBRARIES,
            name: 'Converters and formates date and time using date-time libraries',
          },
          {
            id: TopicId.CREATES_AND_UPDATES_FILES_WITH_TOOLS_AND_LIBRARIES,
            name: 'Creates and updates files with tools and libraries',
          },
          {
            id: TopicId.ENSURES_TYPE_INTEGRITY_IN_THE_APPLICATION,
            name: 'Ensures type integrity in the application',
            key: true,
          },
          {
            id: TopicId.HANDLES_USER_INPUT_THROUGH_FORM_WIDGETS,
            name: 'Handles user input through form widgets',
            key: true,
          },
          {
            id: TopicId.SANITIZES_DATA_USING_EXTRA_LIBRARIES,
            name: 'Sanitizes data using extra libraries',
          },
          {
            id: TopicId.SIMPLIFIES_ACCESS_TO_BROWSERS_STORAGE_USING_TOOLS_OR_LIBRARIES,
            name: 'Simplifies access to browsers storage using tools or libraries',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.GENERATES_DOCUMENTATION_THROUGH_TOOLS_OR_LIBRARIES,
            name: 'Generates documentation through tools or libraries',
          },
          {
            id: TopicId.HANDLES_AND_RESOLVES_NEW_VERSIONS_OF_THE_PACKAGES,
            name: 'Handles and resolves new versions of the packages',
            key: true,
          },
          {
            id: TopicId.HANDLES_DIFFERENT_TYPES_OF_LOCALIZATION_AND_TEXT_PROCESSING,
            name: 'Handles different types of localization and text processing',
            key: true,
          },
          {
            id: TopicId.HANDLES_FILES_UPLOAD_THROUGH_LIBRARIES,
            name: 'Handles files upload through libraries',
          },
          {
            id: TopicId.HANDLES_IMAGES_UPLOAD_THROUGH_TOOLS_AND_LIBRARIES,
            name: 'Handles images upload through tools and libraries',
          },
          {
            id: TopicId.HANDLES_SCROLL_DETECTION_THROUGH_TOOLS_AND_LIBRARIES,
            name: 'Handles scroll detection through tools and libraries',
          },
          {
            id: TopicId.OPTIMIZES_THE_DEVELOPMENT_PROCESS_WITH_UTILS,
            name: 'Optimizes the development process with utils',
          },
          {
            id: TopicId.PROVIDES_SUPPORT_FOR_DIFFERENT_BROWSERS,
            name: 'Provides support for different browsers',
          },
          {
            id: TopicId.TROUBLESHOOTS_NETWORK_USING_TOOLS_AND_LIBRARIES,
            name: 'Troubleshoots network using tools and libraries',
            key: true,
          },
          {
            id: TopicId.USES_HTTP_CLIENTS_FOR_API_COMMUNICATION,
            name: 'Uses HTTP clients for API communication',
            key: true,
          },
          {
            id: TopicId.USES_TOOLS_AND_LIBRARIES_FOR_IMMUTABILITY,
            name: 'Uses tools and libraries for immutability',
          },
          {
            id: TopicId.VALIDATES_DATA_WITH_TOOLS_AND_LIBRARIES,
            name: 'Validates data with tools and libraries',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.CONFIGURES_BUNDLERS_FOR_APPLICATION,
            name: 'Configures bundlers for application',
            key: true,
          },
          {
            id: TopicId.CREATES_CUSTOM_PLUGINS_FOR_BUNDLERS,
            name: 'Creates custom plugins for bundlers',
          },
          {
            id: TopicId.PROVIDES_DATA_VISUALIZATIONS_THROUGH_VISUALIZATION_TOOLS,
            name: 'Provides data visualizations through visualization tools',
          },
          {
            id: TopicId.USES_LIBRARIES_FOR_LOGGING_DATA,
            name: 'Uses libraries for logging data',
            key: true,
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Markup and Styling
  // -----------------------------------------------------------------------
  {
    category: 'Markup and Styling',
    levels: [
      {
        level: 'Trainee',
        topics: [
          {
            id: TopicId.ADDS_STYLING_TO_TEMPLATE_DOCUMENT,
            name: 'Adds styling to template document',
            key: true,
          },
          {
            id: TopicId.ADJUSTS_VALUES_AND_UNITS_TO_SET_THE_SIZE_OF_VARIOUS_ELEMENTS_WITH_STYLE_SHEET_LANGUAGE,
            name: 'Adjusts values and units to set the size of various elements with style sheet language',
            key: true,
          },
          {
            id: TopicId.HANDLES_OVERFLOWING_CONTENT_ON_A_PAGE,
            name: 'Handles overflowing content on a page',
          },
          {
            id: TopicId.STYLES_ELEMENTS_USING_BASIC_STYLE_SHEET_LANGUAGE_PROPERTIES,
            name: 'Styles elements using basic style sheet language properties',
            key: true,
          },
          {
            id: TopicId.USES_BASIC_BOX_MODEL_AND_HANDLES_MARGIN_COLLAPSING,
            name: 'Uses basic box model and handles margin collapsing',
            key: true,
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.ALIGNS_VARIOUS_ELEMENT_POSITIONS_WITH_STYLE_SHEET_LANGUAGE,
            name: 'Aligns various element positions with style sheet language',
            key: true,
          },
          {
            id: TopicId.CREATES_AND_COMPOSES_PAGES_AND_LAYOUTS_USING_STANDARD_MARKUP_LANGUAGE,
            name: 'Creates and composes pages and layouts using standard markup language',
            key: true,
          },
          {
            id: TopicId.CREATES_FORMS_USING_A_STANDARD_MARKUP_LANGUAGE,
            name: 'Creates forms using a standard markup language',
            key: true,
          },
          {
            id: TopicId.CREATES_LAYOUTS_WITH_BASIC_LAYOUT_MODES_USING_STYLE_SHEET_LANGUAGE,
            name: 'Creates layouts with basic layout modes using style sheet language',
            key: true,
          },
          {
            id: TopicId.CREATES_TABLES_WITH_A_STANDARD_MARKUP_LANGUAGE,
            name: 'Creates tables with a standard markup language',
          },
          {
            id: TopicId.DEBUGS_MARKUPS_AND_STYLES,
            name: 'Debugs markups and styles',
          },
          {
            id: TopicId.STYLES_ELEMENTS_WITH_VARIOUS_STYLE_SHEET_LANGUAGE_SELECTORS,
            name: 'Styles elements with various style sheet language selectors',
            key: true,
          },
          {
            id: TopicId.STYLES_TEXT_USING_BASIC_STYLE_SHEET_LANGUAGE_RULES,
            name: 'Styles text using basic style sheet language rules',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.ANIMATES_USER_INTERFACE_ELEMENTS_USING_STYLE_SHEET_LANGUAGE,
            name: 'Animates user interface elements using style sheet language',
          },
          {
            id: TopicId.APPLIES_STANDARDISED_METHODOLOGIES_WHILE_USING_STYLE_SHEET_LANGUAGE,
            name: 'Applies standardised methodologies while using style sheet language',
            key: true,
          },
          {
            id: TopicId.CREATES_LAYOUTS_WITH_ADVANCED_LAYOUT_MODES_USING_STYLE_SHEET_LANGUAGE,
            name: 'Creates layouts with advanced layout modes using style sheet language',
            key: true,
          },
          {
            id: TopicId.CREATES_RESPONSIVE_LAYOUTS_WITH_ADAPTIVE_TECHNICS,
            name: 'Creates responsive layouts with adaptive technics',
            key: true,
          },
          {
            id: TopicId.EMBEDS_CONTENT_FROM_ANOTHER_SOURCE_INTO_A_WEBPAGE,
            name: 'Embeds content from another source into a webpage',
          },
          {
            id: TopicId.STYLES_USER_INTERFACE_USING_PREPROCESSORS_OR_SCRIPTING_SOLUTIONS,
            name: 'Styles user interface using preprocessors or scripting solutions',
            key: true,
          },
          {
            id: TopicId.TRANSFORMS_ELEMENTS_USING_STYLE_SHEETS,
            name: 'Transforms elements using style sheets',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.CREATES_ACCESSIBLE_WEB_PAGES,
            name: 'Creates accessible web pages',
          },
          {
            id: TopicId.CREATES_WEB_PAGES_FOR_VARIOUS_DEVICE_TYPES,
            name: 'Creates web pages for various device types',
            key: true,
          },
          {
            id: TopicId.OPTIMISES_APPLICATIONS_FOR_SEARCH_ENGINES,
            name: 'Optimises applications for search engines',
          },
          {
            id: TopicId.OPTIMISES_PAGE_PERFORMANCE,
            name: 'Optimises page performance',
            key: true,
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Code-Based Testing – React JS Web
  // -----------------------------------------------------------------------
  {
    category: 'Code-Based Testing',
    technology: 'React JS Web',
    levels: [
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.APPLIES_COMMUNITY_RECOMMENDED_PRACTICE_AND_METHODOLOGIES_TO_AUTOMATED_TESTS,
            name: 'Applies community recommended practice and methodologies to automated tests',
            key: true,
          },
          {
            id: TopicId.STRUCTURES_TESTS_USING_FRAMEWORK_CAPABILITIES,
            name: 'Structures tests using framework capabilities',
            key: true,
          },
          {
            id: TopicId.USES_DUMMY_DATA_FOR_TESTING,
            name: 'Uses dummy data for testing',
          },
          {
            id: TopicId.USES_MATCHERS_FOR_TESTING_EXPECTED_RESULT,
            name: 'Uses matchers for testing expected result',
            key: true,
          },
          {
            id: TopicId.USES_UNIT_TESTS_TECHNIQUES,
            name: 'Uses unit tests techniques',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.TESTS_ASYNC_CODE_USING_FRAMEWORK_CAPABILITIES,
            name: 'Tests async code using framework capabilities',
            key: true,
          },
          {
            id: TopicId.USES_FAKE_OBJECTS_TO_DECOUPLE_FROM_DEPENDENCIES,
            name: 'Uses fake objects to decouple from dependencies',
            key: true,
          },
          {
            id: TopicId.USES_INTEGRATION_TEST_APPROACHES_STRATEGIES_AND_METHODOLOGIES,
            name: 'Uses integration test approaches, strategies and methodologies',
          },
          {
            id: TopicId.USES_TECHNIQUES_AND_METHODOLOGY_FOR_ACCESSIBILITY_TESTING,
            name: 'Uses techniques and methodology for accessibility testing',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.CONFIGURES_AND_MAINTAINS_CODE_COVERAGE_REPORTS,
            name: 'Configures and maintains code coverage reports',
            key: true,
          },
          {
            id: TopicId.CONFIGURES_TEST_FRAMEWORK_FOR_TESTS_EXECUTION,
            name: 'Configures test framework for tests execution',
            key: true,
          },
          {
            id: TopicId.CREATES_AND_ORGANISES_END_TO_END_TESTS,
            name: 'Creates and organises end-to-end tests',
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Design
  // -----------------------------------------------------------------------
  {
    category: 'Design',
    levels: [
      {
        level: 'Trainee',
        topics: [
          {
            id: TopicId.CREATES_COMPONENTS_AND_MODULES_USING_BASIC_DESIGN_TECHNIQUES,
            name: 'Creates components and modules using basic design techniques',
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.CREATES_REUSABLE_STRUCTURES_BY_APPLYING_DESIGN_STRATEGIES_AND_METHODOLOGIES,
            name: 'Creates reusable structures by applying design strategies and methodologies',
          },
          {
            id: TopicId.IMPLEMENTS_SOLUTIONS_BASED_ON_DIFFERENT_REQUIREMENT_TYPES,
            name: 'Implements solutions based on different requirement types',
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.COLLECTS_DATA_USING_REQUIREMENTS_ELICITATION_TECHNIQUES_AND_METHODOLOGIES,
            name: 'Collects data using requirements elicitation techniques and methodologies',
          },
          {
            id: TopicId.REFACTORS_AND_RESTRUCTURES_SOFTWARE_COMPONENTS_AND_MODULES_USING_COMMUNITY_RECOMMENDED_PRACTICES_AND_METHODOLOGIES,
            name: 'Refactors and restructures software components and modules using community-recommended practices and methodologies',
            key: true,
          },
          {
            id: TopicId.USES_DESIGN_PATTERNS_TO_CREATE_NEW_STRUCTURES_BASED_ON_REQUIREMENTS,
            name: 'Uses design patterns to create new structures based on requirements',
            key: true,
          },
          {
            id: TopicId.USES_DIFFERENT_REQUIREMENT_SOURCES_FOR_SOLUTION_IMPLEMENTATION,
            name: 'Uses different requirement sources for solution implementation',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.DISTRIBUTES_RESPONSIBILITY_BETWEEN_STRUCTURES_USING_DESIGN_PATTERNS,
            name: 'Distributes responsibility between structures using design patterns',
            key: true,
          },
          {
            id: TopicId.ENSURES_EFFICIENT_AND_FLEXIBLE_COMPOSITION_OF_STRUCTURES_WITH_DESIGN_PATTERNS,
            name: 'Ensures efficient and flexible composition of structures with design patterns',
            key: true,
          },
          {
            id: TopicId.EVALUATES_AND_MODIFIES_SOFTWARE_DESIGN_TO_ENSURE_SOFTWARE_QUALITY,
            name: 'Evaluates and modifies software design to ensure software quality',
          },
          {
            id: TopicId.USES_METHODOLOGIES_AND_TECHNICS_TO_DOCUMENT_DESIGN,
            name: 'Uses methodologies and technics to document design',
            key: true,
          },
          {
            id: TopicId.USES_MODELLING_TECHNIQUES_FOR_REQUIREMENTS_ANALYSIS,
            name: 'Uses modelling techniques for requirements analysis',
            key: true,
          },
          {
            id: TopicId.VALIDATES_REQUIREMENTS_USING_VARIOUS_METHODOLOGIES_AND_TECHNICS,
            name: 'Validates requirements using various methodologies and technics',
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Development Environments – React JS Web
  // -----------------------------------------------------------------------
  {
    category: 'Development Environments',
    technology: 'React JS Web',
    levels: [
      {
        level: 'Trainee',
        topics: [
          {
            id: TopicId.MANAGES_ENVIRONMENTS_USING_BUILT_IN_OPERATING_SYSTEM_TOOLS,
            name: 'Manages environments using built-in operating system tools',
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.USES_VERSION_CONTROL_TOOLS_FOR_DEVELOPMENT,
            name: 'Uses version control tools for development',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.CONFIGURES_AND_MAINTAINS_DEVELOPMENT_ENVIRONMENT_AND_ECOSYSTEM,
            name: 'Configures and maintains development environment and ecosystem',
            key: true,
          },
          {
            id: TopicId.CONTAINERISE_APPLICATION_FOR_THE_PURPOSE_OF_SIMPLIFIED_DISTRIBUTION,
            name: 'Containerise application for the purpose of simplified distribution',
          },
          {
            id: TopicId.DISTRIBUTES_WORK_USING_VERSION_CONTROL_TOOLS,
            name: 'Distributes work using version control tools',
            key: true,
          },
          {
            id: TopicId.MAINTAINS_CODE_QUALITY_OF_THE_APPLICATION,
            name: 'Maintains code quality of the application',
            key: true,
          },
          {
            id: TopicId.MANAGES_AND_MAINTAINS_THE_CONDITION_OF_THE_APPLICATION_S_DEPENDENCIES,
            name: "Manages and maintains the condition of the application's dependencies",
            key: true,
          },
          {
            id: TopicId.PREVENTS_AND_FIXES_THREATS_AND_VULNERABILITIES_BY_MAINTAINING_CODE_SECURITY,
            name: 'Prevents and fixes threats and vulnerabilities by maintaining code security',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.CONFIGURES_CONTRIBUTION_WORKFLOW_USING_VERSION_CONTROL_TOOLS,
            name: 'Configures contribution workflow using version control tools',
          },
          {
            id: TopicId.CONFIGURES_INTEGRATION_PROCESS_USING_CI_TOOLS,
            name: 'Configures integration process using CI tools',
          },
          {
            id: TopicId.CONFIGURES_THE_BUILD_PROCESS_TO_COMPILE_READY_TO_USE_APPLICATIONS_FROM_SOURCE_CODE,
            name: 'Configures the build process to compile ready to use applications from source code',
            key: true,
          },
          {
            id: TopicId.CONTROLS_CODE_QUALITY_WITH_MEASUREMENT_TOOLS,
            name: 'Controls code quality with measurement tools',
          },
          {
            id: TopicId.CREATES_ECOSYSTEM_FOR_APPLICATION_STATE_MONITORING,
            name: 'Creates ecosystem for application state monitoring',
          },
          {
            id: TopicId.HANDLES_ENVIRONMENT_VARIABLES_AND_SECRETS,
            name: 'Handles environment variables and secrets',
          },
          {
            id: TopicId.SET_UPS_CODE_REVIEW_PROCESS_TO_ACHIEVE_THE_QUALITY_OF_THE_APPLICATION,
            name: 'Set-ups code review process to achieve the quality of the application',
            key: true,
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Cloud Environments
  // -----------------------------------------------------------------------
  {
    category: 'Cloud Environments',
    levels: [
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.ACCESSES_CLOUD_ENVIRONMENT_FOR_DEVELOPMENT_AND_DEBUGGING,
            name: 'Accesses cloud environment for development and debugging',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.MANAGES_MESSAGE_QUEUING_IN_A_CLOUD,
            name: 'Manages message queuing in a cloud',
          },
          {
            id: TopicId.STORES_AND_SYNCS_APP_DATA_IN_A_CLOUD,
            name: 'Stores and syncs app data in a cloud',
          },
          {
            id: TopicId.STORES_DATA_IN_A_CLOUD_DATABASE,
            name: 'Stores data in a cloud database',
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Project Process
  // -----------------------------------------------------------------------
  {
    category: 'Project Process',
    levels: [
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.APPLIES_SOFTWARE_PROCESS_TO_IMPROVE_PRODUCT_QUALITY_AND_ENSURE_EFFICIENT_WORKFLOW,
            name: 'Applies software process to improve product quality and ensure efficient workflow',
          },
          {
            id: TopicId.USES_PROJECT_MANAGEMENT_TOOLS_WITHIN_SELECTED_SOFTWARE_DEVELOPMENT_METHODOLOGIES,
            name: 'Uses project management tools within selected software development methodologies',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.ADJUSTS_AN_ESTIMATION_PROCESS_USING_THE_DATA_GATHERED_FROM_THE_REQUIREMENTS_ELICITATION,
            name: 'Adjusts an estimation process using the data gathered from the requirements elicitation',
          },
          {
            id: TopicId.CONTRIBUTES_TO_A_RISK_MANAGEMENT_PROCESS_TO_DETECT_AND_MITIGATE_POTENTIAL_ISSUES,
            name: 'Contributes to a risk management process to detect and mitigate potential issues',
          },
          {
            id: TopicId.CONTRIBUTES_TO_A_STANDARDS_SELECTION_PROCESS,
            name: 'Contributes to a standards selection process',
          },
          {
            id: TopicId.CREATES_AND_MAINTAINS_DOCUMENTATION_FOR_SOFTWARE_REQUIREMENTS_SPECIFICATION,
            name: 'Creates and maintains documentation for software requirements specification',
            key: true,
          },
          {
            id: TopicId.ESTABLISHES_OR_REFINES_A_TECHNICAL_DEBT_POLICY,
            name: 'Establishes or refines a technical debt policy',
            key: true,
          },
          {
            id: TopicId.ESTABLISHES_OR_REFINES_REQUIREMENTS_ELICITATION_PROCESS,
            name: 'Establishes or refines requirements elicitation process',
            key: true,
          },
          {
            id: TopicId.IMPROVES_A_QUALITY_MANAGEMENT_PROCESS_BY_CONTRIBUTING_TO_A_QUALITY_DOCUMENTATION,
            name: 'Improves a quality management process by contributing to a quality documentation',
          },
          {
            id: TopicId.IMPROVES_APPLICATION_DELIVERY_BY_CONTRIBUTING_TO_A_RELEASE_PROCESS,
            name: 'Improves application delivery by contributing to a release process',
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Technical Process
  // -----------------------------------------------------------------------
  {
    category: 'Technical Process',
    levels: [
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.ESTIMATES_TASKS_BASED_ON_REQUIREMENTS,
            name: 'Estimates tasks based on requirements',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.MANAGES_TECHNICAL_DEBT_BASED_ON_PRIORITIES,
            name: 'Manages technical debt based on priorities',
            key: true,
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.IMPROVES_CODE_REVIEW_PROCESS_TO_ENHANCE_EFFICIENCY_AND_QUALITY,
            name: 'Improves code review process to enhance efficiency and quality',
          },
          {
            id: TopicId.MANAGES_WORKLOAD_BASED_ON_REQUIREMENTS,
            name: 'Manages workload based on requirements',
            key: true,
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Expertise Contribution
  // -----------------------------------------------------------------------
  {
    category: 'Expertise Contribution',
    levels: [
      {
        level: 'Trainee',
        topics: [
          {
            id: TopicId.PASSES_ONBOARDING_INTO_ENGINEERING_AND_TECHNOLOGY_EXPERTISE_INCLUDING_SPECIALISATION_OR_PRACTICE,
            name: 'Passes onboarding into Engineering and Technology Expertise including specialisation or practice',
            key: true,
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.PASSES_PERFORMANCE_REVIEW_ACCORDING_TO_THE_PROCESS_DEFINITION_AND_REQUIREMENTS,
            name: 'Passes Performance Review according to the process definition and requirements',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.CONTRIBUTES_TO_DEVELOPMENT_OF_ENGINEERING_AND_TECHNOLOGY_JOBS_AND_SKILLS_STANDARDS,
            name: 'Contributes to development of Engineering and Technology jobs and skills standards',
          },
          {
            id: TopicId.CONTRIBUTES_TO_OPEN_SOURCE_PROJECT_DEVELOPMENT,
            name: 'Contributes to Open Source project development',
          },
          {
            id: TopicId.CONTRIBUTES_TO_OPEN_TECH_PROJECT_DEVELOPMENT,
            name: 'Contributes to Open Tech project development',
          },
          {
            id: TopicId.DEVELOPS_ASSOCIATES_OR_CANDIDATES_WITHIN_ENGINEERING_AND_TECHNOLOGY_SPECIALISATION_PROFILE,
            name: 'Develops associates or candidates within Engineering and Technology specialisation profile',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.CONDUCTS_EVALUATIONS_IN_JOB_INTERVIEW_EVENTS_WITHIN_THE_CURRENT_COMPETENCY_PROFILE_ON_THE_PROJECT_AND_COMPANY_SCALE,
            name: 'Conducts evaluations in Job Interview events within the current competency profile on the project and company scale',
            key: true,
          },
          {
            id: TopicId.CONDUCTS_EVALUATIONS_IN_PERFORMANCE_REVIEW_EVENTS_WITHIN_THE_CURRENT_COMPETENCY_PROFILE_ON_THE_PROJECT_AND_COMPANY_SCALE,
            name: 'Conducts evaluations in Performance Review events within the current competency profile on the project and company scale',
            key: true,
          },
          {
            id: TopicId.CONTRIBUTES_TO_DEVELOPMENT_OF_ENGINEERING_AND_TECHNOLOGY_LEARNING_SOLUTIONS_FOR_PEOPLE_PROFESSIONAL_GROWTH,
            name: 'Contributes to development of Engineering and Technology learning solutions for people professional growth',
          },
          {
            id: TopicId.CONTRIBUTES_TO_DEVELOPMENT_OF_ENGINEERING_AND_TECHNOLOGY_STANDARDS_FOR_PROCESSES_AND_SOLUTIONS_IMPLEMENTATION,
            name: 'Contributes to development of Engineering and Technology standards for processes and solutions implementation',
          },
          {
            id: TopicId.SHARES_PROFESSIONAL_EXPERIENCE_IN_CONTEXT_OF_THE_CURRENT_COMPETENCY_PROFILE_AT_ANY_ASSOCIATES_GATHERING_EVENT_ON_A_PROJECT_OR_COMPANY_SCALE,
            name: 'Shares professional experience in context of the current competency profile at any associates gathering event on a Project or Company scale',
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Generative AI
  // -----------------------------------------------------------------------
  {
    category: 'Generative AI',
    levels: [
      {
        level: 'Trainee',
        topics: [
          {
            id: TopicId.PASS_ONBOARDING_AND_EDUCATIONAL_COURSES_OF_GENERATIVE_AI_APPLICATION_AND_USAGE_WITHIN_THE_ROLE_ON_THE_PROJECT_AND_COMPANY,
            name: 'Pass onboarding and educational courses of Generative AI application and usage within the role on the project and company',
          },
          {
            id: TopicId.PASS_TRAINING_OF_SECURE_AND_ETHICAL_GENERATIVE_AI_APPLICATION_WITHIN_THE_PROJECT_AND_COMPANY,
            name: 'Pass training of secure and ethical Generative AI application within the project and company',
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            id: TopicId.USE_DEFAULT_FUNCTIONALITY_COMMANDS_AND_PROMPTS_SUGGESTED_BY_GENERATIVE_AI_TOOLS_TO_CREATE_OUTCOMES,
            name: 'Use default functionality, commands, and prompts suggested by Generative AI tools to create outcomes',
          },
          {
            id: TopicId.CONFIGURE_ADOPTED_GENERATIVE_AI_TOOLS_TO_WORK_ON_DAILY_ACTIVITIES_AND_TASKS,
            name: 'Configure adopted Generative AI tools to work on daily activities and tasks',
          },
          {
            id: TopicId.USES_GENERATIVE_AI_CHAT_FUNCTIONALITY_TO_GAIN_PROJECT_AND_SPECIALIZATION_KNOWLEDGE_AND_SKILLS,
            name: 'Uses Generative AI chat functionality to gain project and specialization knowledge and skills',
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            id: TopicId.USE_GENERATIVE_AI_TOOLS_ON_DAILY_BASIS_INTEGRATE_AI_FUNCTIONALITIES_IN_DAILY_PROCESSES_AND_TASKS_TO_CREATE_OUTCOMES,
            name: 'Use Generative AI tools on daily basis, integrate AI functionalities in daily processes and tasks to create outcomes',
          },
          {
            id: TopicId.APPLY_ADVANCED_PROMPTING_TECHNIQUES_TO_INCREASE_GENERATIVE_AI_EFFICIENCY_FOR_TASKS_WITH_COMPLEX_CONTEXT_TO_CREATE_OUTCOMES,
            name: 'Apply advanced prompting techniques to increase Generative AI efficiency for tasks with complex context to create outcomes',
          },
          {
            id: TopicId.APPLY_GENERATIVE_AI_PROMPTING_TEMPLATES_DEFINED_WITHIN_THE_PROJECT_TO_CREATE_OUTCOMES,
            name: 'Apply Generative AI prompting templates defined within the project to create outcomes',
          },
          {
            id: TopicId.ACTIVELY_ENGAGE_WITH_THE_GEN_AI_COMMUNITY_BY_PARTICIPATING_IN_EVENTS_AND_COURSES,
            name: 'Actively engage with the Gen AI community by participating in events and courses',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            id: TopicId.REFINE_AND_TUNE_PROMPTS_FOR_SPECIFIC_TASKS_TO_IMPROVE_ACCURACY_AND_RELEVANCE_CREATE_PROMPTING_FLOWS_HAVING_RIGHT_DECOMPOSITION_TECHNIQUES_TO_RECEIVE_RIGHT_ANSWERS_FROM_MODEL,
            name: 'Refine and tune prompts for specific tasks to improve accuracy and relevance, create prompting flows having right decomposition techniques to receive right answers from model',
          },
          {
            id: TopicId.APPLY_ADVANCED_GENERATIVE_AI_PROMPTING_STRATEGIES_TO_COMPLEX_TASKS_TO_CREATE_OUTCOMES,
            name: 'Apply advanced Generative AI prompting strategies to complex tasks to create outcomes',
          },
          {
            id: TopicId.DESIGN_NEW_PROMPTING_TEMPLATES_FOR_TASKS_WITHIN_THE_PROJECT_TO_CREATE_OUTCOMES,
            name: 'Design new prompting templates for tasks within the project to create outcomes',
          },
          {
            id: TopicId.DISCOVER_AND_DOCUMENT_NEW_GENERATIVE_AI_USE_CASES_WITHIN_THE_SPECIALIZATION,
            name: 'Discover and document new Generative AI use cases within the specialization',
          },
          {
            id: TopicId.CONTRIBUTE_TO_GENERATIVE_AI_EXPERTISE_DEVELOPMENT_WITHIN_THE_COMPANY_TO_EXTEND_CORPORATE_KNOWLEDGE_BASE,
            name: 'Contribute to Generative AI expertise development within the company to extend corporate knowledge base',
          },
        ],
      },
    ],
  },
]
