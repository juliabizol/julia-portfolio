import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProject, projects } from "@/lib/projects";
import { StickyNav } from "@/components/nav";

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

  const nextProject =
    projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];

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
            className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-400 hover:text-white transition-colors"
          >
            ← View all projects
          </Link>
        </div>

        {/* Hero */}
        <section className={`${px} pt-8 md:pt-10 pb-12 md:pb-16`}>
          <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-purple-900/50 px-[10px] py-1 text-[11px] font-medium text-purple-300">
                {tag}
              </span>
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
              priority
            />
          </div>
        </section>

        {/* Overview */}
        <section className={section}>
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-20">
            <div className="flex flex-row flex-wrap lg:flex-col gap-6 lg:gap-6">
              {[
                { label: "Role", value: project.role },
                { label: "Timeline", value: project.timeline },
                { label: "Team", value: project.team },
                { label: "Tools", value: project.tools.join(", ") },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 min-w-[140px]">
                  <span className="text-[11px] md:text-[12px] font-medium tracking-[0.05em] text-slate-500 uppercase">
                    {item.label}
                  </span>
                  <span className="text-[14px] md:text-[15px] text-slate-200">{item.value}</span>
                </div>
              ))}
            </div>
            <div>
              <SectionLabel>OVERVIEW</SectionLabel>
              <p className="text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-slate-300">
                {project.context}
              </p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className={section}>
          <div className="max-w-[760px]">
            <SectionLabel>THE PROBLEM</SectionLabel>
            <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] md:leading-[44px] tracking-[-0.01em] text-white mb-5 md:mb-6">
              {project.problem.heading}
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-slate-300">
              {project.problem.body}
            </p>
          </div>
          <div className="mt-10 md:mt-12">
            <ImagePlaceholder height="h-[220px] md:h-[360px]" gradient={project.accent} />
          </div>
        </section>

        {/* Research */}
        <section className={section}>
          <SectionLabel>RESEARCH &amp; DISCOVERY</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-4 md:mb-5">Methods</h3>
              <div className="flex flex-wrap gap-2">
                {project.research.methods.map((m) => (
                  <span key={m} className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 md:px-4 py-1.5 md:py-2 text-[13px] md:text-[14px] font-medium text-slate-300">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-4 md:mb-5">Key Findings</h3>
              <ul className="flex flex-col gap-3 md:gap-4">
                {project.research.findings.map((f, i) => (
                  <li key={i} className="flex gap-3 text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] text-slate-300">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className={section}>
          <SectionLabel>DESIGN PROCESS</SectionLabel>
          <h2 className="text-[26px] md:text-[36px] font-bold tracking-[-0.01em] text-white mb-8 md:mb-12">
            How we got there.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {project.process.map((step, i) => (
              <div key={step.step} className="flex flex-col gap-3 md:gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-5 md:p-6">
                <span className="w-fit rounded-full bg-purple-900/50 px-3 py-1 text-[12px] font-bold text-purple-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[15px] md:text-[16px] font-semibold text-white">{step.step}</h4>
                <p className="text-[13px] md:text-[14px] leading-[21px] md:leading-[22px] text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <ImagePlaceholder height="h-[200px] md:h-[300px]" gradient={project.accent} />
            <ImagePlaceholder height="h-[200px] md:h-[300px]" gradient="from-slate-700 to-slate-800" />
          </div>
        </section>

        {/* Solution */}
        <section className={section}>
          <div className="max-w-[760px] mb-10 md:mb-12">
            <SectionLabel>THE SOLUTION</SectionLabel>
            <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] md:leading-[44px] tracking-[-0.01em] text-white mb-5 md:mb-6">
              {project.solution.heading}
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-slate-300">
              {project.solution.body}
            </p>
          </div>
          <ImagePlaceholder height="h-[240px] md:h-[400px] lg:h-[560px]" gradient={project.accent} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
            {[0, 1, 2].map((i) => (
              <ImagePlaceholder key={i} height="h-[180px] md:h-[260px]" gradient="from-slate-700 to-slate-800" />
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className={section}>
          <SectionLabel>OUTCOMES</SectionLabel>
          <h2 className="text-[26px] md:text-[36px] font-bold tracking-[-0.01em] text-white mb-8 md:mb-12">
            Results &amp; Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {project.outcomes.map((o) => (
              <div key={o.label} className="flex flex-col gap-2 md:gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-6 md:p-8">
                <span className="text-[40px] md:text-[48px] font-bold leading-none text-purple-300">
                  {o.value}
                </span>
                <span className="text-[15px] md:text-[16px] font-semibold text-white">{o.label}</span>
                <p className="text-[13px] md:text-[14px] leading-[21px] md:leading-[22px] text-slate-400">{o.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next case study */}
        <section className="border-t border-slate-800">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block px-5 md:px-10 lg:px-20 py-8 md:py-12 hover:bg-slate-900/50 transition-colors"
          >
            {/* Extra-narrow layout (<389px): fully stacked to avoid cramped wrapping */}
            <div className="flex flex-col gap-3 min-[389px]:hidden">
              <span className="text-[12px] font-medium tracking-[0.03em] text-slate-500">
                NEXT CASE STUDY
              </span>
              <div className="relative w-full h-[160px] overflow-hidden rounded-lg border border-slate-700">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <span className="text-[20px] font-bold text-white group-hover:text-purple-300 transition-colors">
                {nextProject.title}
              </span>
              <div className="flex flex-wrap gap-2">
                {nextProject.tags.map((t) => (
                  <span key={t} className="rounded-full bg-purple-900/50 px-[10px] py-1 text-[11px] font-medium text-purple-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 389px–sm: thumbnail beside a stacked title+tags column */}
            <div className="hidden min-[389px]:flex min-[389px]:flex-col gap-3 sm:hidden">
              <span className="text-[12px] font-medium tracking-[0.03em] text-slate-500">
                NEXT CASE STUDY
              </span>
              <div className="flex items-start gap-4">
                <div className="relative w-[88px] h-[64px] shrink-0 overflow-hidden rounded-lg border border-slate-700">
                  <Image
                    src={nextProject.image}
                    alt={nextProject.title}
                    fill
                    className="object-cover"
                    sizes="88px"
                  />
                </div>
                <div className="flex flex-col gap-2 min-w-0">
                  <span className="text-[20px] font-bold text-white group-hover:text-purple-300 transition-colors">
                    {nextProject.title}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {nextProject.tags.map((t) => (
                      <span key={t} className="rounded-full bg-purple-900/50 px-[10px] py-1 text-[11px] font-medium text-purple-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* sm and up: thumbnail beside a stacked label/title/tags column */}
            <div className="hidden sm:flex items-center gap-8">
              <div className="relative w-[120px] h-[100px] md:w-[180px] md:h-[120px] shrink-0 overflow-hidden rounded-xl border border-slate-700">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 180px, 120px"
                />
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <span className="text-[13px] font-medium tracking-[0.03em] text-slate-500">
                  NEXT CASE STUDY
                </span>
                <span className="text-[28px] font-bold text-white group-hover:text-purple-300 transition-colors">
                  {nextProject.title}{" "}
                  <span className="inline-block text-slate-600 group-hover:text-purple-300 group-hover:translate-x-2 transition-all">
                    →
                  </span>
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {nextProject.tags.map((t) => (
                    <span key={t} className="rounded-full bg-purple-900/50 px-[10px] py-1 text-[11px] font-medium text-purple-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-1 border-t border-slate-800 px-5 md:px-10 lg:px-20 py-4">
          <p className="text-[12px] md:text-[13px] text-slate-500">
            © 2026 Julia Bizol · All rights reserved
          </p>
          <p className="text-[12px] md:text-[13px] text-slate-500">
            Designed in Figma · Built with Next.js
          </p>
        </footer>
      </main>
    </div>
  );
}
