import Image from "next/image";

const stats = [
  { value: "8+", label: "Years Exp." },
  { value: "40+", label: "Shipped" },
  { value: "12", label: "Awards" },
];

const skills = [
  ["UX Research", "Product Strategy", "Design Systems", "Figma"],
  ["Prototyping", "Usability Testing", "Information Architecture"],
];

export function About() {
  return (
    <section id="about" className="px-5 md:px-10 lg:px-20 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
        {/* Photo */}
        <div className="relative w-full lg:w-[400px] lg:shrink-0 h-[360px] sm:h-[460px] lg:h-[500px] overflow-hidden rounded-2xl border border-slate-700">
          <Image
            src="/julia.jpeg"
            alt="Julia Bizol"
            fill
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
            priority
          />
          <div
            className="absolute bottom-0 right-0 h-[200px] w-[200px] rounded-full opacity-40 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #6b21a8, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-6 md:gap-7">
          <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
            ABOUT ME
          </p>

          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2] md:leading-[48px] tracking-[-0.01em] text-white">
            I turn complexity
            <br />
            into clarity.
          </h2>

          <p className="text-[15px] md:text-[16px] leading-[26px] text-slate-300">
            Senior UX Designer based in São Paulo with 8+ years designing
            digital products for startups and enterprise teams. My work sits at
            the intersection of research, systems thinking, and visual craft.
            <br />
            <br />
            I believe great design is invisible — it just works.
          </p>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-[28px] md:text-[32px] font-bold text-purple-800">
                  {s.value}
                </span>
                <span className="text-[12px] md:text-[13px] text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-2">
            {skills.map((row, i) => (
              <div key={i} className="flex flex-wrap gap-2">
                {row.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-700/50 px-3 md:px-[14px] py-1.5 md:py-2 text-[12px] md:text-[13px] font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
