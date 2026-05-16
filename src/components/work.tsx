const projects = [
  {
    title: "Checkout Flow Redesign",
    tags: ["UX Research", "Product"],
    desc: "Reduced cart abandonment by 34% through contextual research and iterative prototyping.",
    accent: "from-purple-900/70 to-slate-800",
  },
  {
    title: "Design System @ Scale",
    tags: ["Systems", "Tokens"],
    desc: "Built a component library used across 6 product teams, cutting design-to-dev handoff time in half.",
    accent: "from-violet-900/70 to-slate-800",
  },
  {
    title: "Mobile Onboarding Flow",
    tags: ["Mobile", "Research"],
    desc: "Redesigned the first-run experience, lifting 7-day retention by 22% across iOS and Android.",
    accent: "from-purple-800/60 to-slate-800",
  },
];

function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-purple-700/40 px-[10px] py-1 text-[11px] font-medium text-purple-400">
      {label}
    </span>
  );
}

function ProjectCard({
  title,
  tags,
  desc,
  accent,
}: (typeof projects)[0]) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800 transition-colors hover:border-purple-700/50">
      {/* Image placeholder */}
      <div className={`h-[220px] w-full bg-gradient-to-br ${accent}`} />

      {/* Content */}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex gap-1.5">
          {tags.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>
        <h3 className="text-[19px] font-semibold text-white">{title}</h3>
        <p className="text-[14px] leading-[22px] text-slate-300">{desc}</p>
        <span className="text-[13px] font-medium text-purple-400">
          View Case Study →
        </span>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="px-20 pt-20 pb-20">
      {/* Section header */}
      <div className="mb-12 flex flex-col gap-4">
        <p className="text-[13px] font-medium tracking-[0.03em] text-purple-400">
          SELECTED WORK
        </p>
        <h2 className="text-[40px] font-bold tracking-[-0.01em] text-white">
          Case Studies
        </h2>
        <p className="text-[17px] text-slate-300">
          A selection of projects across product, research, and systems design.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
