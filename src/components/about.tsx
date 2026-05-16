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
    <section id="about" className="px-20 py-24">
      <div className="flex items-center gap-20">
        {/* Photo */}
        <div className="relative h-[500px] w-[400px] shrink-0 overflow-hidden rounded-2xl border border-slate-700">
          <Image
            src="/julia.jpeg"
            alt="Julia Bizol"
            fill
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute bottom-0 right-0 h-[200px] w-[200px] rounded-full opacity-40"
            style={{
              background: "radial-gradient(circle, #7c3aed, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-7">
          <p className="text-[13px] font-medium tracking-[0.03em] text-purple-400">
            ABOUT ME
          </p>

          <h2 className="text-[40px] font-bold leading-[48px] tracking-[-0.01em] text-white">
            I turn complexity
            <br />
            into clarity.
          </h2>

          <p className="text-[16px] leading-[26px] text-slate-300">
            Senior UX Designer based in São Paulo with 8+ years designing
            digital products for startups and enterprise teams. My work sits at
            the intersection of research, systems thinking, and visual craft.
            <br />
            <br />
            I believe great design is invisible — it just works.
          </p>

          {/* Stats */}
          <div className="flex gap-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-[32px] font-bold text-purple-500">
                  {s.value}
                </span>
                <span className="text-[13px] text-slate-400">{s.label}</span>
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
                    className="rounded-full border border-slate-700 bg-slate-700/50 px-[14px] py-2 text-[13px] font-medium text-slate-300"
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
