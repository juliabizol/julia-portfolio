import Image from "next/image";
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
  image,
}: {
  slug: string;
  title: string;
  tags: string[];
  desc: string;
  image: string;
}) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition-colors hover:border-purple-800/60"
    >
      <div className="relative h-[200px] md:h-[220px] w-full shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6 min-w-0">
        <div className="flex flex-nowrap gap-1.5 overflow-hidden">
          {tags.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>
        <h3 className="line-clamp-2 min-h-[48px] md:min-h-[52px] text-[17px] md:text-[19px] leading-[24px] md:leading-[26px] font-semibold text-white">
          {title}
        </h3>
        <p className="text-[14px] leading-[22px] text-slate-300">{desc}</p>
        <span className="mt-auto pt-1 text-[13px] font-medium text-purple-300 group-hover:underline">
          View case study →
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
          A selection of projects that demonstrate my approach to solving complex product problems.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {projects.map((p) => (
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
  );
}
