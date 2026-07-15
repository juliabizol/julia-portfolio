import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, TrendingUp, Star } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { StickyNav } from "@/components/nav";
import { ProjectCard } from "@/components/work";
import { Tag } from "@/components/tag";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Julia Bizol`,
    description: project.summary,
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300 mb-4">
      {children}
    </p>
  );
}

function ImagePlaceholder({ height = "h-[300px]", gradient }: { height?: string; gradient: string }) {
  return (
    <div className={`w-full ${height} rounded-xl md:rounded-2xl bg-gradient-to-br ${gradient} border border-slate-700`} />
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug);

  const px = "px-5 md:px-10 lg:px-20";
  const section = `${px} py-12 md:py-16 border-t border-slate-800`;

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <StickyNav />

      <main className="flex flex-col">

        {/* Back link */}
        <div className={`${px} pt-8 md:pt-10`}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            ← View all projects
          </Link>
        </div>

        {/* Hero */}
        <section className={`${px} pt-8 md:pt-10 pb-12 md:pb-16`}>
          <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
            {project.tags.map((tag) => (
              <Tag key={tag} variant="accent" size="md">
                {tag}
              </Tag>
            ))}
          </div>

          <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-white max-w-[860px] mb-5 md:mb-6">
            {project.title}
          </h1>

          <p className="text-[16px] md:text-[20px] leading-[26px] md:leading-[32px] text-slate-300 max-w-[680px] mb-10 md:mb-12">
            {project.summary}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-8 md:gap-12 pb-10 md:pb-12 border-b border-slate-800">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="text-[28px] md:text-[36px] font-bold text-purple-300 leading-none">
                  {m.value}
                </span>
                <span className="text-[12px] md:text-[13px] text-slate-400">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="relative mt-10 md:mt-12 w-full h-[240px] md:h-[400px] lg:h-[540px] overflow-hidden rounded-xl md:rounded-2xl border border-slate-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
        </section>

        {/* Overview */}
        <section className={section}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-10 md:gap-16 lg:gap-20">
            <div>
              <SectionLabel>OVERVIEW</SectionLabel>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] md:leading-[44px] tracking-[-0.01em] text-white mb-5 md:mb-6">
                Understanding the product
              </h2>
              <div className="flex flex-col gap-4">
                {project.context.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-slate-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row flex-wrap md:flex-col gap-6 md:gap-6">
              {[
                { label: "Industry", value: project.industry },
                { label: "Role", value: project.role },
                { label: "Timeline", value: project.timeline },
                { label: "Team", value: project.team },
                { label: "Core disciplines", value: project.tools.join(", ") },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 min-w-[140px]">
                  <span className="text-[11px] md:text-[12px] font-medium tracking-wider text-slate-400 uppercase">
                    {item.label}
                  </span>
                  <span className="text-[14px] md:text-[15px] text-slate-200">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem & Context */}
        <section className={section}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <SectionLabel>PROBLEM &amp; CONTEXT</SectionLabel>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] md:leading-[44px] tracking-[-0.01em] text-white mb-5 md:mb-6">
                {project.problem.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {project.problem.body.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-slate-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              {project.problem.image ? (
                <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border border-slate-700">
                  <Image
                    src={project.problem.image}
                    alt={`${project.title} problem and context diagram`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    quality={90}
                  />
                </div>
              ) : (
                <ImagePlaceholder height="h-[240px] md:h-[320px] lg:h-[380px]" gradient={project.accent} />
              )}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className={section}>
          <SectionLabel>RESEARCH &amp; INSIGHTS</SectionLabel>
          <h2 className="text-[26px] md:text-[36px] font-bold tracking-[-0.01em] text-white mb-5 md:mb-6">
            {project.research.title}
          </h2>
          <p className="text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-slate-300 max-w-[760px] mb-8 md:mb-12">
            {project.research.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-4 md:mb-5">Research methods &amp; tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.research.methods.map((m) => (
                  <Tag key={m} variant="neutral" size="md">
                    {m}
                  </Tag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-4 md:mb-5">Key findings</h3>
              <ul className="flex flex-col gap-3 md:gap-4">
                {project.research.findings.map((f, i) => (
                  <li key={i} className="flex gap-3 text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] text-slate-300">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-purple-300" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className={section}>
          <SectionLabel>APPROACH</SectionLabel>
          <h2 className="text-[26px] md:text-[36px] font-bold tracking-[-0.01em] text-white mb-8 md:mb-12">
            Turning insights into product decisions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {project.approach.map((step, i) => (
              <div key={step.step} className="flex flex-col gap-3 md:gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-5 md:p-6">
                <span className="w-fit rounded-full bg-purple-900/50 px-3 py-1 text-[14px] font-bold text-purple-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[15px] md:text-[16px] font-semibold text-white">{step.step}</h4>
                <p className="text-[13px] md:text-[14px] leading-[21px] md:leading-[22px] text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.approachImage ? (
              <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border border-slate-700">
                <Image
                  src={project.approachImage}
                  alt={`${project.title} approach dashboard`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={90}
                />
              </div>
            ) : (
              <ImagePlaceholder height="h-[200px] md:h-[300px]" gradient={project.accent} />
            )}
            {project.approachImage2 ? (
              <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border border-slate-700">
                <Image
                  src={project.approachImage2}
                  alt={`${project.title} approach diagram`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={90}
                />
              </div>
            ) : (
              <ImagePlaceholder height="h-[200px] md:h-[300px]" gradient="from-slate-700 to-slate-800" />
            )}
          </div>
        </section>

        {/* Solution */}
        <section className={section}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <SectionLabel>SOLUTION</SectionLabel>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] md:leading-[44px] tracking-[-0.01em] text-white mb-5 md:mb-6">
                {project.solution.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {project.solution.body.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-slate-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              {project.solution.image ? (
                <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border border-slate-700">
                  <Image
                    src={project.solution.image}
                    alt={`${project.title} solution diagram`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    quality={90}
                  />
                </div>
              ) : (
                <ImagePlaceholder height="h-[240px] md:h-[320px] lg:h-[380px]" gradient={project.accent} />
              )}
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section className={`${px} pt-12 md:pt-16 border-t border-slate-800`}>
          <SectionLabel>DESIGN DECISIONS</SectionLabel>
          <h2 className="text-[26px] md:text-[36px] font-bold tracking-[-0.01em] text-white mb-5 md:mb-6">
            Design decisions that improved the experience
          </h2>
          <p className="text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-slate-300 max-w-[760px] mb-8 md:mb-12">
            {project.decisionsIntro}
          </p>
          <div className="flex flex-col">
            {project.decisions.map((d, i) => (
              <div
                key={i}
                className={`flex flex-col lg:items-start gap-8 lg:gap-16 py-10 md:py-14 lg:flex-row ${
                  i === 0 ? "" : "border-t border-slate-800"
                }`}
              >
                <div className="flex flex-1 flex-col gap-4 md:gap-5">
                  <span className="w-fit rounded-full bg-purple-900/50 px-3 py-1 text-[14px] font-bold text-purple-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-white">
                    {d.title}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {d.description.split("\n\n").map((paragraph, pi) => (
                      <p
                        key={pi}
                        className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-slate-300"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="w-full flex-1">
                  <ImagePlaceholder height="aspect-[4/3]" gradient="from-slate-700 to-slate-800" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className={section}>
          <SectionLabel>RESULTS &amp; IMPACT</SectionLabel>
          <h2 className="text-[26px] md:text-[36px] font-bold tracking-[-0.01em] text-white mb-8 md:mb-12">
            Results &amp; Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {project.outcomes.map((o) => (
              <div key={o.label} className="flex flex-col gap-2 md:gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-6 md:p-8">
                {o.icon ? (
                  <span className="text-purple-300">
                    {o.icon === "check" ? (
                      <Check className="h-10 w-10 md:h-12 md:w-12" strokeWidth={2} />
                    ) : o.icon === "star" ? (
                      <span className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <Star key={si} className="h-10 w-10 md:h-12 md:w-12" strokeWidth={2} fill="currentColor" />
                        ))}
                      </span>
                    ) : (
                      <TrendingUp className="h-10 w-10 md:h-12 md:w-12" strokeWidth={2} />
                    )}
                  </span>
                ) : (
                  <span className="text-[40px] md:text-[48px] font-bold leading-none text-purple-300">
                    {o.value}
                  </span>
                )}
                <span className="text-[15px] md:text-[16px] font-semibold text-white">{o.label}</span>
                <p className="text-[13px] md:text-[14px] leading-[21px] md:leading-[22px] text-slate-400">{o.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Thoughts */}
        <section className={section}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <SectionLabel>FINAL THOUGHTS</SectionLabel>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] md:leading-[44px] tracking-[-0.01em] text-white mb-5 md:mb-6">
                Designing products as systems
              </h2>
              <div className="flex flex-col gap-4">
                {project.learningsIntro.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-slate-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="md:flex md:items-center">
              <ImagePlaceholder height="h-[240px] md:h-[320px] lg:h-[380px]" gradient={project.accent} />
            </div>
          </div>
        </section>

        {/* More Work */}
        <section className={section}>
          <SectionLabel>MORE WORK</SectionLabel>
          <h2 className="text-[26px] md:text-[36px] font-bold tracking-[-0.01em] text-white mb-8 md:mb-12">
            Explore more case studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {otherProjects.map((p) => (
              <ProjectCard
                key={p.slug}
                slug={p.slug}
                title={p.title}
                tags={p.tags}
                desc={p.summary}
                image={p.image}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-1 border-t border-slate-800 px-5 md:px-10 lg:px-20 py-4">
          <p className="text-[12px] md:text-[13px] text-slate-400">
            © 2026 Julia Bizol · All rights reserved
          </p>
          <p className="text-[12px] md:text-[13px] text-slate-400">
            Designed and built by Julia Bizol
          </p>
        </footer>
      </main>
    </div>
  );
}
