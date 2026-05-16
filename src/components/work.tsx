import Link from "next/link";
import { projects } from "@/lib/projects";

function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-purple-900/50 px-[10px] py-1 text-[11px] font-medium text-purple-300">
      {label}
    </span>
  );
}

function ProjectCard({
  slug,
  title,
  tags,
  desc,
  accent,
}: {
  slug: string;
  title: string;
  tags: string[];
  desc: string;
  accent: string;
}) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition-colors hover:border-purple-800/60"
    >
      <div className={`h-[200px] md:h-[220px] w-full bg-gradient-to-br ${accent}`} />
      <div className="flex flex-col gap-3 p-5 md:p-6">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>
        <h3 className="text-[17px] md:text-[19px] font-semibold text-white">{title}</h3>
        <p className="text-[14px] leading-[22px] text-slate-300">{desc}</p>
        <span className="text-[13px] font-medium text-purple-300 group-hover:underline">
          View Case Study →
        </span>
      </div>
    </Link>
  );
}

export function Work() {
  return (
    <section id="work" className="px-5 md:px-10 lg:px-20 pt-16 md:pt-20 pb-16 md:pb-20">
      <div className="mb-10 md:mb-12 flex flex-col gap-3 md:gap-4">
        <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
          SELECTED WORK
        </p>
        <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white">
          Case Studies
        </h2>
        <p className="text-[16px] md:text-[17px] text-slate-300">
          A selection of projects across product, research, and systems design.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            tags={p.tags}
            desc={p.summary}
            accent={p.accent}
          />
        ))}
      </div>
    </section>
  );
}
