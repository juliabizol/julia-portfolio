export type Project = {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  metrics: { value: string; label: string }[];
  role: string;
  timeline: string;
  team: string;
  tools: string[];
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
    title: "Pet Compliance Platform",
    tags: ["UX Research", "Product"],
    summary:
      "A 6-week sprint that reduced cart abandonment by 34% through contextual research and iterative prototyping.",
    metrics: [
      { value: "34%", label: "Cart abandonment reduction" },
      { value: "6 weeks", label: "Project timeline" },
      { value: "3", label: "Platforms (web, iOS, Android)" },
    ],
    role: "Lead UX Designer",
    timeline: "Jan – Feb 2024",
    team: "1 UX Designer, 2 Engineers, 1 PM",
    tools: ["Figma", "Maze", "Hotjar", "Notion"],
    context: LOREM,
    problem: {
      heading: "Users were abandoning at the payment step.",
      body: LOREM + " " + LOREM_SHORT,
    },
    research: {
      methods: [
        "User interviews (n=12)",
        "Session recordings",
        "Funnel analysis",
        "Competitive audit",
        "Usability testing",
      ],
      findings: [
        "68% of users felt anxious about entering payment details on mobile",
        "The 7-step flow had 3 unnecessary confirmation screens",
        "Error messages were vague and unhelpful, causing re-entry loops",
        "Guest checkout was buried 2 levels deep in the UI",
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
      heading: "A streamlined 3-step checkout with progressive disclosure.",
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
    role: "Design Systems Lead",
    timeline: "Mar – Aug 2024",
    team: "2 UX Designers, 3 Frontend Engineers, 1 PM",
    tools: ["Figma", "Storybook", "Tokens Studio", "Jira"],
    context: LOREM,
    problem: {
      heading: "Six teams, six different design languages.",
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
      heading: "One source of truth. Every team, every platform.",
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
    role: "Senior UX Designer",
    timeline: "Sep – Oct 2024",
    team: "1 UX Designer, 2 Mobile Engineers, 1 PM, 1 Data Analyst",
    tools: ["Figma", "Maze", "Amplitude", "Lottie"],
    context: LOREM,
    problem: {
      heading: "60% of new users never saw the core product.",
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
      heading: "Value first. Ask questions second.",
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
