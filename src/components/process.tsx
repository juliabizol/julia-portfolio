const steps = [
  {
    num: "01",
    title: "Understand the Problem",
    desc: "I begin by understanding users, business goals, technical constraints, and existing data before proposing solutions.",
  },
  {
    num: "02",
    title: "Explore & Validate",
    desc: "I use research, product analytics, usability testing, and rapid prototyping to explore opportunities, validate ideas, and reduce uncertainty.",
  },
  {
    num: "03",
    title: "Design with Systems",
    desc: "I design scalable experiences that balance usability, accessibility, consistency, and long-term maintainability.",
  },
  {
    num: "04",
    title: "Collaborate & Iterate",
    desc: "I partner closely with Product and Engineering, refining solutions through feedback, implementation, and continuous improvement.",
  },
];

export function Process({ divider = false }: { divider?: boolean }) {
  return (
    <section
      id="process"
      className={`px-5 md:px-10 lg:px-20 pt-16 md:pt-20 pb-16 md:pb-20 ${divider ? "border-t border-slate-800" : ""}`}
    >
      <div className="mb-10 md:mb-14 flex flex-col gap-3 md:gap-4">
        <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
          HOW I WORK
        </p>
        <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white">
          How I Approach Product Design
        </h2>
        <p className="text-[16px] md:text-[17px] text-slate-300 max-w-xl">
          Every product is different, but my approach remains consistent:
          understand the problem, collaborate closely, validate decisions
          with evidence, and iterate continuously.
        </p>
      </div>

      {/* Steps: 1 col mobile → 2 col tablet → 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-5 md:p-7"
          >
            <span className="w-fit rounded-full bg-purple-900/50 px-3 py-1.5 text-[12px] font-bold tracking-[0.02em] text-purple-300">
              {step.num}
            </span>
            <h3 className="text-[18px] md:text-[20px] font-semibold text-white">
              {step.title}
            </h3>
            <p className="text-[14px] leading-[22px] text-slate-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
