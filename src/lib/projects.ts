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
  overviewTitle?: string;
  context: string;
  problem: {
    heading: string;
    body: string;
    image?: string;
  };
  research: {
    title: string;
    intro: string;
    methods: string[];
    findings: string[];
  };
  approach: {
    step: string;
    description: string;
  }[];
  approachImage?: string;
  approachImage2?: string;
  solution: {
    heading: string;
    body: string;
    image?: string;
  };
  decisionsTitle?: string;
  decisionsIntro: string;
  decisions: { title: string; description: string; image?: string }[];
  outcomesTitle?: string;
  outcomes: {
    value: string;
    label: string;
    description: string;
    icon?: "check" | "trending-up" | "star" | "clock-arrow-down" | "git-fork";
  }[];
  learningsTitle?: string;
  learningsIntro: string;
  learningsImage?: string;
  learnings: { title: string; description: string }[];
  accent: string;
  image: string;
  heroContain?: boolean;
};

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const projects: Project[] = [
  {
    slug: "betterpet-passport",
    title: "BetterPet Passport",
    tags: ["Product Design", "Consumer Product"],
    summary:
      "Continuously evolving a complex guest experience that helps travelers meet property requirements before short-term rental stays.",
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
      "BetterPet Passport is the consumer-facing experience within PetScreening’s short-term rental ecosystem. Property managers configure pet policies and requirements, while guests use BetterPet Passport to complete the information and documentation required before their stay.\n\nOver nearly two years, I collaborated with Product and Engineering to continuously evolve this experience through research, product analytics, usability testing, and iterative design. Rather than redesigning the onboarding from scratch, this work focused on continuously improving a complex product by simplifying interactions, reducing uncertainty, and adapting the experience as product requirements evolved.",
    problem: {
      heading: "Balancing complex product requirements with an intuitive guest experience",
      body:
        "BetterPet Passport wasn’t a standalone product. Every guest experience was shaped by property-specific policies configured by hosts in PetScreening’s management platform.\n\nDepending on the property, guests could be asked to provide different information, documentation, or complete entirely different flows, including guests traveling with pets, without pets, or with assistance animals. The challenge was creating an experience that remained clear and intuitive as the product evolved to support new policies, guest scenarios, and business requirements.\n\nThroughout the product’s evolution, my focus was reducing friction, improving completion rates, and helping guests confidently submit the information required before their stay.",
      image: "/projects/betterpet-passport/problem-context-diagram.png",
    },
    research: {
      title: "Understanding user behavior",
      intro:
        "As the product matured, we combined quantitative and qualitative research to better understand where guests experienced friction, why it happened, and how the experience could continuously evolve.",
      methods: [
        "Product Analytics",
        "Usability Testing",
        "Surveys",
        "Heuristic Evaluation",
        "Amplitude",
        "UserTesting",
        "Chameleon",
      ],
      findings: [
        "Guests needed clearer guidance to understand why information was required.",
        "Reducing uncertainty was just as important as reducing the number of steps.",
        "Better system feedback helped users understand what had happened and what to do next.",
        "Trust signals helped guests feel more confident when submitting information.",
      ],
    },
    approach: [
      {
        step: "Understand",
        description:
          "Synthesized quantitative and qualitative insights to identify friction, understand its causes, and uncover opportunities for improvement.",
      },
      {
        step: "Prioritize",
        description:
          "Balanced user needs, business goals, and technical constraints to prioritize the highest-impact improvements.",
      },
      {
        step: "Design & iterate",
        description:
          "Designed and refined solutions that reduced uncertainty, improved usability, and simplified complex experiences.",
      },
      {
        step: "Measure & evolve",
        description:
          "Measured outcomes after release and continued improving the experience as new research, product insights, and business requirements emerged.",
      },
    ],
    approachImage: "/projects/betterpet-passport/approach-dashboard.png",
    approachImage2: "/projects/betterpet-passport/approach-diagram.png",
    solution: {
      heading: "Establishing a design strategy for a complex product",
      body:
        "As recurring patterns emerged from research and product insights, four core design principles guided the product’s evolution: reducing cognitive load, providing contextual guidance, building user confidence, and improving system feedback.\n\nProgressive disclosure reduced cognitive load by presenting information only when it became relevant. Contextual guidance helped guests understand complex policies, legal requirements, and why specific information was being requested. Trust-building patterns, including booking context and platform indicators, increased confidence when submitting personal information and supporting documentation.\n\nTogether, these principles created a consistent foundation for evolving the product as new guest scenarios, business requirements, and regulations emerged. The following design decisions show how these principles guided improvements across the guest experience, while also highlighting additional opportunities uncovered as the product continued to evolve.",
      image: "/projects/betterpet-passport/solution.png",
    },
    decisionsIntro:
      "The following decisions demonstrate how these principles were translated into the product. Each one addressed a different source of friction identified through research, product insights, and continuous iteration.",
    decisions: [
      {
        title: "Reducing cognitive load through progressive disclosure",
        description:
          "Research revealed that guests often felt overwhelmed when multiple questions and decisions appeared at once. Rather than presenting every input upfront, the experience was reorganized into smaller, contextual steps that only appeared when relevant.\n\nOne example was the pet selection flow. Instead of immediately displaying a numeric selector, guests were first asked a simple yes-or-no question about whether they were traveling with pets. Only after selecting Yes would the pet count appear, eliminating ambiguity observed during usability testing and creating a more intuitive flow for both pet and no-pet guests.",
        image: "/projects/betterpet-passport/decision-1.png",
      },
      {
        title: "Reducing uncertainty through contextual guidance",
        description:
          "Research showed that guests often questioned why specific information and documents were required, particularly when legal requirements or host policies weren’t immediately clear. Rather than expecting users to infer this information, contextual guidance was introduced throughout the experience to explain what was being requested, why it mattered, and what would happen next.\n\nClear explanations, legal context, and supporting content helped guests make informed decisions throughout the journey, reducing uncertainty without adding unnecessary steps or interrupting the flow.",
        image: "/projects/betterpet-passport/decision-2.png",
      },
      {
        title: "Building trust through transparent communication",
        description:
          "Usability testing showed that guests felt more confident when they understood they were completing a legitimate verification process connected to their reservation. Rather than relying solely on instructional content, the experience incorporated trust-building cues such as reservation details, partner platform indicators, and transparent messaging throughout the journey.\n\nThese signals reassured guests that the requested information was relevant to their stay, reduced hesitation when sharing personal information and supporting documentation, and strengthened confidence throughout the verification process.",
        image: "/projects/betterpet-passport/decision-3.png",
      },
      {
        title: "Improving system feedback through in-app notifications",
        description:
          "As the product evolved, usability findings and product observations revealed that guests often lacked visibility into what was happening after submitting their information. Important reviewer messages, visa statuses, and required actions were difficult to find, creating uncertainty and delaying the verification process.\n\nRather than treating this as a simple notification update, I expanded the solution by redesigning the post-submission experience. Status indicators, contextual alerts, reviewer messages, and next-step guidance were integrated into the interface, making the verification process more transparent and helping guests understand what had happened, what required their attention, and what to do next.",
        image: "/projects/betterpet-passport/decision-4.png",
      },
    ],
    outcomesTitle: "Making complexity feel simple",
    outcomes: [
      {
        value: "98%",
        label: "Submission rate",
        description: "Maintained a 98% submission rate while continuously evolving the product to support increasingly complex guest scenarios and business requirements.",
      },
      {
        value: "",
        icon: "star",
        label: "Positive user feedback",
        description: "Survey responses consistently showed high satisfaction, with most guests rating the experience 5 out of 5 and describing the onboarding process as easy to complete.",
      },
      {
        value: "",
        icon: "clock-arrow-down",
        label: "Reduced completion time",
        description: "Progressive disclosure, contextual guidance, trust cues, and clearer system feedback helped guests complete onboarding more efficiently.",
      },
    ],
    learningsIntro:
      "Working on BetterPet Passport reinforced that evolving a product requires more than designing new features. It requires understanding the problems behind user behavior, business requirements, and operational constraints before deciding what to build.\n\nThroughout this project, research, product analytics, usability testing, and cross-functional collaboration informed design decisions that balanced user needs, business requirements, and technical constraints. This approach made it possible to continuously evolve a complex product while preserving a clear, intuitive, and consistent experience for guests.",
    learningsImage: "/projects/betterpet-passport/final-thoughts.png",
    learnings: [
      { title: "Learning One", description: LOREM_SHORT },
      { title: "Learning Two", description: LOREM_SHORT },
      { title: "Learning Three", description: LOREM_SHORT },
      { title: "Learning Four", description: LOREM_SHORT },
    ],
    accent: "from-purple-900/70 to-slate-800",
    image: "/projects/betterpet-passport/hero.png",
    heroContain: true,
  },
  {
    slug: "my-scholarshop",
    title: "My ScholarShop",
    tags: ["Product Design", "Marketplace"],
    summary:
      "Redesigning a scholarship-powered marketplace to simplify educational purchases for families managing multiple students, funding programs, and complex purchasing rules.",
    metrics: [
      { value: "1 Journey", label: "Multiple students" },
      { value: "4 months", label: "Product redesign" },
    ],
    industry: "EdTech",
    role: "Product Designer",
    timeline: "4 months",
    team: "Product Manager · Product Designer · Design Director · Software Engineers · Client Stakeholders",
    tools: [
      "Product Discovery",
      "Information Architecture",
      "Interaction Design",
      "UX Strategy",
      "Heuristic Evaluation",
      "Accessibility Evaluation",
      "Workshop Facilitation",
    ],
    overviewTitle:
      "Designing a marketplace that balances user needs with complex funding rules.",
    context:
      "My ScholarShop is the online marketplace within Step Up For Students, a Florida-based nonprofit organization that administers educational scholarship programs for K–12 students.\n\nFamilies use scholarship funds to purchase approved educational products, curriculum, and learning materials directly through the platform. While the experience resembles a traditional e-commerce marketplace, every purchase must comply with scholarship eligibility rules, available funding, and program-specific requirements.\n\nAs the Product Designer on the project, I led the end-to-end redesign of the marketplace, collaborating closely with product, engineering, client stakeholders, and the design team to simplify a highly complex purchasing experience while balancing user needs, business goals, and technical constraints.",
    problem: {
      heading:
        "Managing purchases across multiple students created unnecessary complexity",
      body:
        "Families often manage scholarships for multiple students, each with different funding programs, eligibility rules, and available balances.\n\nThe purchasing experience was structured around scholarship rules rather than how families naturally shop. Parents were required to complete a separate purchasing flow for every student, repeating the entire process from browsing products to checkout.\n\nAs a result, educational purchases became repetitive and fragmented, increasing effort and making an otherwise familiar e-commerce experience unnecessarily complex.",
    },
    research: {
      title: "Understanding how families navigate educational purchases",
      intro:
        "User interviews provided valuable insights into how families navigated the scholarship purchasing process, revealing recurring pain points and unmet needs.\n\nBuilding on these insights, I synthesized research findings to identify the underlying causes of friction and uncover opportunities for improvement.",
      methods: [
        "User Interviews",
        "Heuristic Evaluation",
        "Accessibility Evaluation",
        "Workshops",
        "Journey Mapping",
        "User Flows",
        "Ideation",
      ],
      findings: [
        "Families shop for the household, not one student at a time.",
        "Scholarship rules and funding availability shape purchasing decisions.",
        "Families need visibility into available funds throughout the journey.",
        "Product eligibility should be clear before checkout.",
      ],
    },
    approach: [
      {
        step: "Synthesized insights",
        description:
          "Transforming qualitative insights and existing evidence into clear product opportunities and priorities.",
      },
      {
        step: "Balanced priorities",
        description:
          "Balancing user needs alongside scholarship rules, business goals, and technical constraints to guide product decisions.",
      },
      {
        step: "Validated concepts",
        description:
          "Collaborating with stakeholders through workshops and iterative exploration to refine concepts before detailed design.",
      },
      {
        step: "Designed to scale",
        description:
          "Designing flexible solutions that could support multiple scholarship programs, evolving business rules, and future product growth.",
      },
    ],
    solution: {
      heading: "Unified purchasing experience",
      body:
        "I redesigned the purchasing experience around how families naturally shop, allowing parents to manage multiple students within a single journey while keeping scholarship context visible throughout the experience. The result was a simpler, more intuitive flow that reduced repetition without compromising business rules or program requirements.",
    },
    decisionsTitle: "Design decisions behind the redesign",
    decisionsIntro:
      "Every design decision was guided by research insights, user needs, and business constraints to create a more intuitive purchasing experience.",
    decisions: [
      {
        title: "Consolidating multiple purchases into a single journey",
        description:
          "Research revealed that families often managed scholarships for multiple students, yet the purchasing experience required them to complete an entirely separate shopping journey for each student. Every switch meant restarting the process from browsing products through checkout, creating unnecessary repetition and effort.\n\nRather than treating each student as an isolated shopping session, the redesigned experience consolidated multiple purchases into a single journey. Parents could shop for all of their students in one flow while the system continued to manage each scholarship independently behind the scenes.",
      },
      {
        title:
          "Maintaining student and funding context throughout the shopping journey",
        description:
          "Families made purchasing decisions on behalf of specific students, each with different scholarship programs and available funding. In the previous experience, this context was only established before entering the marketplace, disappearing once families began shopping.\n\nThe redesigned experience kept student, program, and funding information persistently visible throughout the shopping journey, giving families the confidence to make purchasing decisions without losing sight of the scholarship context.",
      },
      {
        title: "Balancing scholarship rules with shopping flexibility",
        description:
          "Scholarship programs imposed strict eligibility rules, but restricting the catalog to approved products would make exploration difficult and prevent families from discovering items they could still purchase using their own funds.\n\nInstead of limiting what users could browse, the experience surfaced product eligibility through contextual indicators while allowing families to filter eligible products whenever needed. This balanced compliance with scholarship requirements while preserving the flexibility of a familiar shopping experience.",
      },
      {
        title: "Simplifying order management through a unified checkout",
        description:
          "Although order fulfillment still depended on separate vendors, parents didn't need to think in terms of vendor-specific purchase orders. Instead, the checkout presented a single, consolidated order that grouped items by vendor only when necessary.\n\nThis simplified both purchasing and order tracking. Rather than opening multiple purchase orders to monitor items from different vendors, families could manage everything from a single, unified view while the system preserved the operational structure required to fulfill each order behind the scenes.",
      },
    ],
    outcomesTitle: "Simplifying Scholarship-Funded Purchases",
    outcomes: [
      {
        value: "",
        icon: "star",
        label: "Validated by user feedback",
        description:
          "Post-launch user feedback indicated that the redesigned experience felt easier to navigate. Parents particularly appreciated being able to switch between students seamlessly and having funding information readily available throughout the purchasing journey.",
      },
      {
        value: "",
        icon: "git-fork",
        label: "One seamless purchasing journey",
        description:
          "Parents could manage purchases for multiple students within a single shopping journey, eliminating repetitive navigation and creating a purchasing experience that better reflected how families naturally shop.",
      },
      {
        value: "",
        icon: "trending-up",
        label: "Enabled marketplace expansion",
        description:
          "The new purchasing model supported the expansion of the marketplace by introducing clear scholarship eligibility guidance directly into the interface, enabling broader product offerings without adding complexity for families.",
      },
    ],
    learningsTitle: "Balancing competing priorities",
    learningsIntro:
      "One of the biggest takeaways from this project was that product design often means navigating competing priorities rather than optimizing for a single outcome. Simplifying the purchasing experience required understanding how user behavior, scholarship policies, and business goals influenced one another, leading to a solution that balanced the needs of families with long-term product goals.",
    learnings: [
      { title: "Learning One", description: LOREM_SHORT },
      { title: "Learning Two", description: LOREM_SHORT },
      { title: "Learning Three", description: LOREM_SHORT },
      { title: "Learning Four", description: LOREM_SHORT },
    ],
    accent: "from-indigo-900/70 to-slate-800",
    image: "/projects/my-scholarshop.jpg",
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
      title: "Research title",
      intro: "Research introduction placeholder.",
      methods: [
        "Component audit (existing 4 repos)",
        "Designer surveys (n=18)",
        "Dev interviews (n=8)",
        "Handoff process observation",
        "Industry benchmarking",
      ],
      findings: [
        "Placeholder finding one.",
        "Placeholder finding two.",
        "Placeholder finding three.",
        "Placeholder finding four.",
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
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
