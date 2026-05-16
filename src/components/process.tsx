const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep-dive into user needs through interviews, contextual inquiry, and existing data. No assumptions — just listening.",
  },
  {
    num: "02",
    title: "Define",
    desc: "Synthesize research into clear problem statements, personas, and opportunity areas. Align the team around what matters.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Rapid sketches to high-fidelity prototypes. Iterate quickly, test early, and refine based on real feedback.",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Handoff pixel-perfect specs with documented rationale. I stay involved through development to ensure quality.",
  },
];

const tools = ["Figma", "Maze", "Hotjar", "Miro", "Notion", "Jira", "Lottie", "Framer"];

export function Process() {
  return (
    <section id="process" className="px-20 pt-20 pb-20">
      {/* Header */}
      <div className="mb-14 flex flex-col gap-4">
        <p className="text-[13px] font-medium tracking-[0.03em] text-purple-400">
          HOW I WORK
        </p>
        <h2 className="text-[40px] font-bold tracking-[-0.01em] text-white">
          My Process
        </h2>
        <p className="text-[17px] text-slate-300">
          I follow a structured approach while staying flexible enough to adapt
          to each project&apos;s unique needs.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-slate-800 p-7"
          >
            <span className="w-fit rounded-full bg-purple-700/40 px-3 py-1.5 text-[12px] font-bold tracking-[0.02em] text-purple-400">
              {step.num}
            </span>
            <h3 className="text-[20px] font-semibold text-white">
              {step.title}
            </h3>
            <p className="text-[14px] leading-[22px] text-slate-300">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Tools */}
      <div className="mt-16 flex flex-col gap-5">
        <h3 className="text-[18px] font-semibold text-white">
          Tools &amp; Methods
        </h3>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-lg border border-slate-700 bg-slate-700/50 px-4 py-2.5 text-[14px] font-medium text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
