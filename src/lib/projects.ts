export type Project = {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  metrics: { value: string; label: string }[];
  industry: string;
  role: string;
  timeline: string;
  team: string;
  tools: string[];
  toolsLabel?: string;
  context: string;
  problem: {
    heading: string;
    body: string;
  };
  research: {
    methods: string[];
    findings: string[];
  };
  approach: {
    step: string;
    description: string;
  }[];
  solution: {
    heading: string;
    body: string;
  };
  decisionsIntro: string;
  decisions: { title: string; description: string }[];
  outcomes: { value: string; label: string; description: string }[];
  learningsIntro: string;
  learnings: { title: string; description: string }[];
  accent: string;
  image: string;
};

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const projects: Project[] = [
  {
    slug: "pet-compliance-platform",
    title: "BetterPet Passport",
    tags: ["Product Design", "Consumer Product"],
    summary:
      "Continuously improving a complex pet compliance experience that helps guests meet property requirements before short-term rental stays, contributing to a 98% submission rate.",
    metrics: [
      { value: "98%", label: "Submission rate" },
      { value: "2 years", label: "Continuous product evolution" },
    ],
    industry: "Pet & Hospitality Technology",
    role: "Product Designer",
    timeline: "Sep 2024 – Jul 2026",
    team: "2 Product Designers · 3 Engineers · Product Manager · QA",
    tools: ["Product Analytics", "Usability Testing", "Interaction Design"],
    toolsLabel: "Methods",
    context:
      "BetterPet Passport is the consumer-facing experience within PetScreening's short-term rental ecosystem. Property managers define the pet policies and requirements for their properties, while guests use BetterPet Passport to complete the information and documentation required before their stay.\n\nOver nearly two years, I partnered closely with Product and Engineering to continuously evolve this experience through research, usability testing, product analytics, and iterative design. This case study highlights some of the initiatives that simplified complex workflows and contributed to increasing submission completion to 98%.",
    problem: {
      heading: "Making complex property requirements easier to complete",
      body:
        "BetterPet Passport wasn't a standalone product. Every guest experience was shaped by property-specific policies configured by hosts in PetScreening's management platform.\n\nDepending on the property, guests could be asked to provide different information, documentation, or complete entirely different flows—including pet, no-pet, and service animal scenarios. The challenge was creating an experience that remained clear and intuitive despite constantly changing requirements.\n\nThroughout the product's evolution, my focus was reducing friction, improving completion rates, and helping guests confidently submit the information hosts needed before their stay.",
    },
    research: {
      methods: [
        "Product Analytics",
        "Usability Testing",
        "Surveys",
        "Heuristic Evaluation",
      ],
      findings: [
        "Property-specific rules created highly variable onboarding flows.",
        "Guests needed clearer guidance to understand what information was required.",
        "Reducing uncertainty was just as important as reducing the number of steps.",
        "Reusable pet profiles could significantly reduce friction for future stays.",
      ],
    },
    approach: [
      {
        step: "Phase One",
        description: LOREM_SHORT,
      },
      {
        step: "Phase Two",
        description: LOREM_SHORT,
      },
      {
        step: "Phase Three",
        description: LOREM_SHORT,
      },
      {
        step: "Phase Four",
        description: LOREM_SHORT,
      },
    ],
    solution: {
      heading: "A streamlined 3-step checkout with progressive disclosure",
      body: LOREM + " " + LOREM_SHORT,
    },
    decisionsIntro: LOREM_SHORT,
    decisions: [
      { title: "Decision One", description: LOREM_SHORT },
      { title: "Decision Two", description: LOREM_SHORT },
      { title: "Decision Three", description: LOREM_SHORT },
    ],
    outcomes: [
      {
        value: "34%",
        label: "Cart abandonment",
        description: "Reduction in cart abandonment rate post-launch",
      },
      {
        value: "2.1×",
        label: "Mobile conversion",
        description: "Increase in mobile checkout completion",
      },
      {
        value: "4.7★",
        label: "App store rating",
        description: "Average rating after checkout redesign shipped",
      },
    ],
    learningsIntro: LOREM_SHORT,
    learnings: [
      { title: "Learning One", description: LOREM_SHORT },
      { title: "Learning Two", description: LOREM_SHORT },
      { title: "Learning Three", description: LOREM_SHORT },
      { title: "Learning Four", description: LOREM_SHORT },
    ],
    accent: "from-purple-900/70 to-slate-800",
    image: "/projects/pet-compliance-platform.jpg",
  },
  {
    slug: "design-system-evolution",
    title: "Design System Evolution",
    tags: ["Systems", "Tokens"],
    summary:
      "Built a component library used across 6 product teams, cutting design-to-dev handoff time in half.",
    metrics: [
      { value: "50%", label: "Faster handoff" },
      { value: "6 teams", label: "Across the org" },
      { value: "200+", label: "Components shipped" },
    ],
    industry: "Enterprise SaaS",
    role: "Design Systems Lead",
    timeline: "Mar – Aug 2024",
    team: "2 UX Designers, 3 Frontend Engineers, 1 PM",
    tools: ["Figma", "Storybook", "Tokens Studio", "Jira"],
    context: LOREM,
    problem: {
      heading: "Six teams, six different design languages",
      body: LOREM + " " + LOREM_SHORT,
    },
    research: {
      methods: [
        "Component audit (existing 4 repos)",
        "Designer surveys (n=18)",
        "Dev interviews (n=8)",
        "Handoff process observation",
        "Industry benchmarking",
      ],
      findings: [
        "Teams were maintaining 4 separate button components with inconsistent APIs",
        "Design token naming had no convention — 23 shades of grey in production",
        "Engineers spent avg. 3 hrs/week re-implementing existing patterns",
        "Designers had no single source of truth for spacing and typography",
      ],
    },
    approach: [
      { step: "Phase One", description: LOREM_SHORT },
      { step: "Phase Two", description: LOREM_SHORT },
      { step: "Phase Three", description: LOREM_SHORT },
      { step: "Phase Four", description: LOREM_SHORT },
    ],
    solution: {
      heading: "One source of truth. Every team, every platform",
      body: LOREM + " " + LOREM_SHORT,
    },
    decisionsIntro: LOREM_SHORT,
    decisions: [
      { title: "Decision One", description: LOREM_SHORT },
      { title: "Decision Two", description: LOREM_SHORT },
      { title: "Decision Three", description: LOREM_SHORT },
    ],
    outcomes: [
      {
        value: "50%",
        label: "Handoff time",
        description: "Reduction in time spent on design-to-dev handoff",
      },
      {
        value: "6",
        label: "Teams onboarded",
        description: "Product teams using the system within 3 months",
      },
      {
        value: "200+",
        label: "Components",
        description: "Components shipped across web and mobile",
      },
    ],
    learningsIntro: LOREM_SHORT,
    learnings: [
      { title: "Learning One", description: LOREM_SHORT },
      { title: "Learning Two", description: LOREM_SHORT },
      { title: "Learning Three", description: LOREM_SHORT },
      { title: "Learning Four", description: LOREM_SHORT },
    ],
    accent: "from-violet-900/70 to-slate-800",
    image: "/projects/design-system-evolution.jpg",
  },
  {
    slug: "surfs",
    title: "Surfs",
    tags: ["Mobile", "Research"],
    summary:
      "Redesigned the first-run experience, lifting 7-day retention by 22% across iOS and Android.",
    metrics: [
      { value: "22%", label: "7-day retention lift" },
      { value: "iOS + Android", label: "Platforms" },
      { value: "4 weeks", label: "Research to launch" },
    ],
    industry: "Consumer Mobile",
    role: "Senior UX Designer",
    timeline: "Sep – Oct 2024",
    team: "1 UX Designer, 2 Mobile Engineers, 1 PM, 1 Data Analyst",
    tools: ["Figma", "Maze", "Amplitude", "Lottie"],
    context: LOREM,
    problem: {
      heading: "60% of new users never saw the core product",
      body: LOREM + " " + LOREM_SHORT,
    },
    research: {
      methods: [
        "Retention cohort analysis",
        "First-session recordings (n=200)",
        "Exit surveys",
        "Usability testing (n=10)",
        "Benchmark study",
      ],
      findings: [
        "Users were asked for 11 pieces of information before reaching the main feature",
        "The value proposition was never shown during onboarding",
        "Permission prompts appeared too early, leading to high denial rates",
        "Progress indicators were absent — users didn't know how long onboarding would take",
      ],
    },
    approach: [
      { step: "Phase One", description: LOREM_SHORT },
      { step: "Phase Two", description: LOREM_SHORT },
      { step: "Phase Three", description: LOREM_SHORT },
      { step: "Phase Four", description: LOREM_SHORT },
    ],
    solution: {
      heading: "Value first. Ask questions second",
      body: LOREM + " " + LOREM_SHORT,
    },
    decisionsIntro: LOREM_SHORT,
    decisions: [
      { title: "Decision One", description: LOREM_SHORT },
      { title: "Decision Two", description: LOREM_SHORT },
      { title: "Decision Three", description: LOREM_SHORT },
    ],
    outcomes: [
      {
        value: "22%",
        label: "7-day retention",
        description: "Lift in 7-day retention across both platforms",
      },
      {
        value: "40%",
        label: "Permission grant rate",
        description: "Increase in push notification opt-in rate",
      },
      {
        value: "3 min",
        label: "Time to value",
        description: "Reduction in time from install to first key action",
      },
    ],
    learningsIntro: LOREM_SHORT,
    learnings: [
      { title: "Learning One", description: LOREM_SHORT },
      { title: "Learning Two", description: LOREM_SHORT },
      { title: "Learning Three", description: LOREM_SHORT },
      { title: "Learning Four", description: LOREM_SHORT },
    ],
    accent: "from-purple-800/60 to-slate-800",
    image: "/projects/surfs.jpg",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
