import type { PullRequestExample, Topic } from '@/types/topics'

type PullRequestCatalog = Record<string, PullRequestExample>

export interface TopicSeed {
  id: string
  name: string
  tags: string[]
  prExampleIds: string[]
}

const pullRequestCatalog: PullRequestCatalog = {}

export const resolvePullRequests = (
  catalog: PullRequestCatalog,
  ...ids: string[]
): PullRequestExample[] =>
  ids.map((id) => {
    const pullRequest = catalog[id]

    if (!pullRequest) {
      throw new Error(`Missing pull request seed for id "${id}"`)
    }

    return pullRequest
  })

export const buildTopics = (
  seeds: TopicSeed[],
  catalog: PullRequestCatalog,
): Topic[] =>
  seeds.map((topic) => ({
    id: topic.id,
    name: topic.name,
    tags: topic.tags,
    prExamples: resolvePullRequests(catalog, ...topic.prExampleIds),
  }))

// ---------------------------------------------------------------------------
// Compact seed format – sections expand into full TopicSeed entries
// ---------------------------------------------------------------------------

interface TopicEntry {
  name: string
  key?: true
}

interface LevelGroup {
  level: string
  topics: TopicEntry[]
}

interface Section {
  category: string
  technology?: string
  levels: LevelGroup[]
}

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const expandSections = (sections: Section[]): TopicSeed[] =>
  sections.flatMap(({ category, technology, levels }) =>
    levels.flatMap(({ level, topics: entries }) =>
      entries.map(({ name, key }) => ({
        id: slugify(name),
        name,
        tags: [
          category,
          ...(technology ? [technology] : []),
          level,
          ...(key ? ['Key'] : []),
        ],
        prExampleIds: [],
      })),
    ),
  )

const sections: Section[] = [
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
          { name: 'Manages collections of data using language', key: true },
          { name: 'Stores, reuses, and manipulates data', key: true },
          {
            name: 'Stores, reuses, and operates on basic data types',
            key: true,
          },
          {
            name: 'Uses and maintains language operators and comments',
            key: true,
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            name: 'Applies and maintains control flow structures',
            key: true,
          },
          { name: 'Handles exceptions using language capabilities', key: true },
          {
            name: 'Handles user interaction with events handlers',
            key: true,
          },
          {
            name: 'Interacts with a user interface using language built-in technics',
          },
          {
            name: 'Reuses and encapsulates related data and behaviour',
            key: true,
          },
          {
            name: 'Uses built-in iterators to traverse through different types of collections',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            name: 'Accesses and stores data in a client-side storage',
            key: true,
          },
          {
            name: 'Defines, maintains, and uses modular structures for code namespacing and reusability',
            key: true,
          },
          {
            name: 'Implements asynchrony and non-blocking environment concepts',
            key: true,
          },
          {
            name: 'Implements concurrency concepts by using language capabilities',
          },
          { name: 'Manages files with language filesystem capabilities' },
          { name: 'Manipulates date and time with language APIs' },
          {
            name: 'Sends and retrieves data through a network using language capabilities',
            key: true,
          },
          { name: 'Uses language APIs for mathematical operations' },
          {
            name: 'Validates, finds, and replaces string data with regular expressions',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            name: 'Applies methodology and best practices for language performance optimisation',
            key: true,
          },
          {
            name: 'Builds client-server applications using network protocols',
            key: true,
          },
          {
            name: 'Creates and maintains custom user interface components',
          },
          {
            name: 'Manages advanced collections of data using language',
            key: true,
          },
          { name: 'Manages and implements complex data structures' },
          {
            name: 'Optimises application performance taking into account the complexity of the algorithms',
            key: true,
          },
          {
            name: 'Secures network interaction using a programming language',
          },
          {
            name: 'Synchronises concurrent operations by using language capabilities',
          },
          { name: 'Uses language metaprogramming techniques' },
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
            name: 'Creates, supports, and composes user interface components',
            key: true,
          },
          { name: 'Styling elements using framework capability', key: true },
          {
            name: 'Uses built-in mechanism to manage component interaction',
            key: true,
          },
          {
            name: 'Uses technics to dynamically generate elements',
            key: true,
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            name: 'Applies technics and uses technology for styling components',
            key: true,
          },
          { name: 'Displays data on the user interface', key: true },
          {
            name: 'Handles user interaction with event handlers in framework',
            key: true,
          },
          { name: 'Interacts with API and handles request metadata' },
          {
            name: 'Interacts with lifecycles in components using framework capability',
            key: true,
          },
          {
            name: 'Sets up, builds, tests, and deploys application with CLI',
          },
          { name: 'Uses basic router capability for building navigation' },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            name: 'Applies security practices and approaches to protect application',
            key: true,
          },
          { name: 'Defines custom event for handling user interaction' },
          {
            name: 'Handles internationalisation in scope of the applications development',
          },
          {
            name: 'Manages data for developing dynamic and highly scalable applications',
          },
          {
            name: 'Uses advanced router capability for building navigation',
          },
          { name: 'Uses forms for user inputs and interaction', key: true },
          {
            name: 'Uses framework built-in tools for code reusability',
            key: true,
          },
          {
            name: "Uses framework-related and basic tools for application's debugging",
            key: true,
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            name: 'Applies accessibility rules and guidelines for building user interface',
          },
          { name: 'Creates and maintains component library' },
          {
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
            name: 'Debugs application using debugging tools and techniques',
            key: true,
          },
          {
            name: 'Manages project dependencies with package managers',
            key: true,
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            name: 'Converters and formates date and time using date-time libraries',
          },
          { name: 'Creates and updates files with tools and libraries' },
          { name: 'Ensures type integrity in the application', key: true },
          { name: 'Handles user input through form widgets', key: true },
          { name: 'Sanitizes data using extra libraries' },
          {
            name: 'Simplifies access to browsers storage using tools or libraries',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          { name: 'Generates documentation through tools or libraries' },
          {
            name: 'Handles and resolves new versions of the packages',
            key: true,
          },
          {
            name: 'Handles different types of localization and text processing',
            key: true,
          },
          { name: 'Handles files upload through libraries' },
          { name: 'Handles images upload through tools and libraries' },
          { name: 'Handles scroll detection through tools and libraries' },
          { name: 'Optimizes the development process with utils' },
          { name: 'Provides support for different browsers' },
          {
            name: 'Troubleshoots network using tools and libraries',
            key: true,
          },
          { name: 'Uses HTTP clients for API communication', key: true },
          { name: 'Uses tools and libraries for immutability' },
          { name: 'Validates data with tools and libraries' },
        ],
      },
      {
        level: 'Senior',
        topics: [
          { name: 'Configures bundlers for application', key: true },
          { name: 'Creates custom plugins for bundlers' },
          {
            name: 'Provides data visualizations through visualization tools',
          },
          { name: 'Uses libraries for logging data', key: true },
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
          { name: 'Adds styling to template document', key: true },
          {
            name: 'Adjusts values and units to set the size of various elements with style sheet language',
            key: true,
          },
          { name: 'Handles overflowing content on a page' },
          {
            name: 'Styles elements using basic style sheet language properties',
            key: true,
          },
          {
            name: 'Uses basic box model and handles margin collapsing',
            key: true,
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            name: 'Aligns various element positions with style sheet language',
            key: true,
          },
          {
            name: 'Creates and composes pages and layouts using standard markup language',
            key: true,
          },
          {
            name: 'Creates forms using a standard markup language',
            key: true,
          },
          {
            name: 'Creates layouts with basic layout modes using style sheet language',
            key: true,
          },
          { name: 'Creates tables with a standard markup language' },
          { name: 'Debugs markups and styles' },
          {
            name: 'Styles elements with various style sheet language selectors',
            key: true,
          },
          {
            name: 'Styles text using basic style sheet language rules',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            name: 'Animates user interface elements using style sheet language',
          },
          {
            name: 'Applies standardised methodologies while using style sheet language',
            key: true,
          },
          {
            name: 'Creates layouts with advanced layout modes using style sheet language',
            key: true,
          },
          {
            name: 'Creates responsive layouts with adaptive technics',
            key: true,
          },
          { name: 'Embeds content from another source into a webpage' },
          {
            name: 'Styles user interface using preprocessors or scripting solutions',
            key: true,
          },
          { name: 'Transforms elements using style sheets' },
        ],
      },
      {
        level: 'Senior',
        topics: [
          { name: 'Creates accessible web pages' },
          { name: 'Creates web pages for various device types', key: true },
          { name: 'Optimises applications for search engines' },
          { name: 'Optimises page performance', key: true },
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
            name: 'Applies community recommended practice and methodologies to automated tests',
            key: true,
          },
          {
            name: 'Structures tests using framework capabilities',
            key: true,
          },
          { name: 'Uses dummy data for testing' },
          { name: 'Uses matchers for testing expected result', key: true },
          { name: 'Uses unit tests techniques', key: true },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            name: 'Tests async code using framework capabilities',
            key: true,
          },
          {
            name: 'Uses fake objects to decouple from dependencies',
            key: true,
          },
          {
            name: 'Uses integration test approaches, strategies and methodologies',
          },
          {
            name: 'Uses techniques and methodology for accessibility testing',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            name: 'Configures and maintains code coverage reports',
            key: true,
          },
          {
            name: 'Configures test framework for tests execution',
            key: true,
          },
          { name: 'Creates and organises end-to-end tests' },
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
            name: 'Creates components and modules using basic design techniques',
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            name: 'Creates reusable structures by applying design strategies and methodologies',
          },
          {
            name: 'Implements solutions based on different requirement types',
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            name: 'Collects data using requirements elicitation techniques and methodologies',
          },
          {
            name: 'Refactors and restructures software components and modules using community-recommended practices and methodologies',
            key: true,
          },
          {
            name: 'Uses design patterns to create new structures based on requirements',
            key: true,
          },
          {
            name: 'Uses different requirement sources for solution implementation',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            name: 'Distributes responsibility between structures using design patterns',
            key: true,
          },
          {
            name: 'Ensures efficient and flexible composition of structures with design patterns',
            key: true,
          },
          {
            name: 'Evaluates and modifies software design to ensure software quality',
          },
          {
            name: 'Uses methodologies and technics to document design',
            key: true,
          },
          {
            name: 'Uses modelling techniques for requirements analysis',
            key: true,
          },
          {
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
            name: 'Manages environments using built-in operating system tools',
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          { name: 'Uses version control tools for development', key: true },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            name: 'Configures and maintains development environment and ecosystem',
            key: true,
          },
          {
            name: 'Containerise application for the purpose of simplified distribution',
          },
          { name: 'Distributes work using version control tools', key: true },
          { name: 'Maintains code quality of the application', key: true },
          {
            name: "Manages and maintains the condition of the application's dependencies",
            key: true,
          },
          {
            name: 'Prevents and fixes threats and vulnerabilities by maintaining code security',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            name: 'Configures contribution workflow using version control tools',
          },
          { name: 'Configures integration process using CI tools' },
          {
            name: 'Configures the build process to compile ready to use applications from source code',
            key: true,
          },
          { name: 'Controls code quality with measurement tools' },
          { name: 'Creates ecosystem for application state monitoring' },
          { name: 'Handles environment variables and secrets' },
          {
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
          { name: 'Accesses cloud environment for development and debugging' },
        ],
      },
      {
        level: 'Senior',
        topics: [
          { name: 'Manages message queuing in a cloud' },
          { name: 'Stores and syncs app data in a cloud' },
          { name: 'Stores data in a cloud database' },
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
            name: 'Applies software process to improve product quality and ensure efficient workflow',
          },
          {
            name: 'Uses project management tools within selected software development methodologies',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            name: 'Adjusts an estimation process using the data gathered from the requirements elicitation',
          },
          {
            name: 'Contributes to a risk management process to detect and mitigate potential issues',
          },
          { name: 'Contributes to a standards selection process' },
          {
            name: 'Creates and maintains documentation for software requirements specification',
            key: true,
          },
          {
            name: 'Establishes or refines a technical debt policy',
            key: true,
          },
          {
            name: 'Establishes or refines requirements elicitation process',
            key: true,
          },
          {
            name: 'Improves a quality management process by contributing to a quality documentation',
          },
          {
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
        topics: [{ name: 'Estimates tasks based on requirements', key: true }],
      },
      {
        level: 'Middle',
        topics: [
          { name: 'Manages technical debt based on priorities', key: true },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            name: 'Improves code review process to enhance efficiency and quality',
          },
          { name: 'Manages workload based on requirements', key: true },
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
            name: 'Passes onboarding into Engineering and Technology Expertise including specialisation or practice',
            key: true,
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            name: 'Passes Performance Review according to the process definition and requirements',
            key: true,
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            name: 'Contributes to development of Engineering and Technology jobs and skills standards',
          },
          { name: 'Contributes to Open Source project development' },
          { name: 'Contributes to Open Tech project development' },
          {
            name: 'Develops associates or candidates within Engineering and Technology specialisation profile',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            name: 'Conducts evaluations in Job Interview events within the current competency profile on the project and company scale',
            key: true,
          },
          {
            name: 'Conducts evaluations in Performance Review events within the current competency profile on the project and company scale',
            key: true,
          },
          {
            name: 'Contributes to development of Engineering and Technology learning solutions for people professional growth',
          },
          {
            name: 'Contributes to development of Engineering and Technology standards for processes and solutions implementation',
          },
          {
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
            name: 'Pass onboarding and educational courses of Generative AI application and usage within the role on the project and company',
          },
          {
            name: 'Pass training of secure and ethical Generative AI application within the project and company',
          },
        ],
      },
      {
        level: 'Junior',
        topics: [
          {
            name: 'Use default functionality, commands, and prompts suggested by Generative AI tools to create outcomes',
          },
          {
            name: 'Configure adopted Generative AI tools to work on daily activities and tasks',
          },
          {
            name: 'Uses Generative AI chat functionality to gain project and specialization knowledge and skills',
          },
        ],
      },
      {
        level: 'Middle',
        topics: [
          {
            name: 'Use Generative AI tools on daily basis, integrate AI functionalities in daily processes and tasks to create outcomes',
          },
          {
            name: 'Apply advanced prompting techniques to increase Generative AI efficiency for tasks with complex context to create outcomes',
          },
          {
            name: 'Apply Generative AI prompting templates defined within the project to create outcomes',
          },
          {
            name: 'Actively engage with the Gen AI community by participating in events and courses',
          },
        ],
      },
      {
        level: 'Senior',
        topics: [
          {
            name: 'Refine and tune prompts for specific tasks to improve accuracy and relevance, create prompting flows having right decomposition techniques to receive right answers from model',
          },
          {
            name: 'Apply advanced Generative AI prompting strategies to complex tasks to create outcomes',
          },
          {
            name: 'Design new prompting templates for tasks within the project to create outcomes',
          },
          {
            name: 'Discover and document new Generative AI use cases within the specialization',
          },
          {
            name: 'Contribute to Generative AI expertise development within the company to extend corporate knowledge base',
          },
        ],
      },
    ],
  },
]

const topicSeed: TopicSeed[] = expandSections(sections)

const ids = topicSeed.map((t) => t.id)
const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i)
if (duplicates.length > 0) {
  throw new Error(`Duplicate topic IDs detected: ${duplicates.join(', ')}`)
}

export const topics: Topic[] = buildTopics(topicSeed, pullRequestCatalog)
