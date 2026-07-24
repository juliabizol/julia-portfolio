import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/tag";

const skills = [
  "Product Thinking",
  "Product Discovery",
  "Interaction Design",
  "Design Systems",
  "Accessibility",
  "AI Product Design",
  "Prototyping",
];

export function About() {
  return (
    <section id="about" className="w-full">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 pb-20 md:pb-28 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
          {/* Photo */}
          <div className="relative w-full lg:w-[400px] lg:shrink-0 h-[360px] sm:h-[460px] lg:h-[500px] overflow-hidden rounded-2xl border border-slate-700">
            <Image
              src="/julia.jpeg"
              alt="Julia Bizol"
              fill
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
              sizes="(min-width: 1024px) 400px, 100vw"
              quality={90}
              priority
            />
            <div
              className="absolute bottom-0 right-0 h-[200px] w-[200px] rounded-full opacity-40 pointer-events-none"
              style={{
                background: "radial-gradient(circle, var(--color-purple-800), transparent 70%)",
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
              into clarity
            </h2>

            <div className="flex flex-col gap-4 text-[16px] leading-[26px] text-slate-300">
              <p>
                I&apos;m a Product Designer and Senior UX Designer with 9 years
                of experience helping teams navigate complex product challenges
                by balancing user needs, business goals, and technical
                constraints.
              </p>
              <p>
                I enjoy bringing clarity to ambiguity, collaborating closely
                with Product and Engineering, and using research, product
                thinking, and evidence to build thoughtful, intuitive products.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Tag key={skill} variant="neutral" size="md">
                  {skill}
                </Tag>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-[14px] font-medium text-purple-300 hover:text-white active:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Learn more about me →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
