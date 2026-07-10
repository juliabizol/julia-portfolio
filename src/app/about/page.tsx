import Image from "next/image";
import { StickyNav } from "@/components/nav";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";

export const metadata = {
  title: "About — Julia Bizol",
  description:
    "Senior UX Designer based in São Paulo. 8+ years designing digital products at the intersection of research, systems thinking, and visual craft.",
};

const skills = [
  "Product Thinking",
  "Product Discovery",
  "User Research",
  "Product Analytics",
  "Usability Testing",
  "Interaction Design",
  "Design Systems",
  "Accessibility",
  "AI Product Design",
];

const experience = [
  {
    period: "2024 – 2026",
    title: "Product Designer",
    org: "PetScreening · Pet & Hospitality Technology",
    desc: "Led product design across consumer products and platforms supporting complex operational workflows, balancing user needs, business goals, and technical constraints. Combined product analytics, user research, and usability testing to identify opportunities, validate ideas, and guide product decisions. Collaborated closely with Product and Engineering, contributed to a scalable Design System, and explored AI-powered product experiences.",
  },
  {
    period: "2021 – 2024",
    title: "Senior UX Designer",
    org: "McFadyen Digital · E-commerce & Marketplaces",
    desc: "Designed end-to-end experiences for enterprise e-commerce and marketplace products, translating complex business requirements into intuitive user experiences. Facilitated workshops, presented UX strategies to stakeholders, and partnered with cross-functional teams across multiple B2B and B2C engagements, including Fortune 500 clients. Promoted to Senior UX Designer and twice recognized with the Unsung Hero Award.",
  },
  {
    period: "2020 – 2021",
    title: "UX/UI Designer",
    org: "Henry Schein · Healthcare Technology",
    desc: "Improved the customer experience of a B2B e-commerce platform through UX improvements, responsive design, and close collaboration with Marketing and Engineering, strengthening usability and information architecture across key customer journeys.",
  },
  {
    period: "2015 – 2020",
    title: "Product Designer / UX/UI Designer",
    org: "AutoImpact · Automotive Technology",
    desc: "Built the company's digital products from research through implementation, conducting field research, designing mobile applications, websites, and customer-facing experiences while working directly with business stakeholders to translate user needs into practical product solutions.",
  },
  {
    period: "2014 – 2015",
    title: "UI Designer",
    org: "Shaw and Partners · Digital Product Agency",
    desc: "Began my design career creating responsive websites and digital experiences for U.S. clients, building the visual design foundation that later evolved into product design.",
  },
];

const achievements = [
  {
    label: "12 Awards",
    desc: "Industry recognition for product and UX work across multiple categories.",
  },
  {
    label: "Internal Recognition",
    desc: "Nominated for Design Excellence award within the organization, two years running.",
  },
  {
    label: "Notable Achievement",
    desc: "Led the design systems initiative that reduced handoff time by 50% across 6 product teams.",
  },
];

const testimonials = [
  {
    quote:
      "Julia has a rare ability to translate ambiguous problems into clear, elegant solutions. She doesn't just design screens — she shapes how the team thinks about the product.",
    name: "Placeholder Name",
    title: "Product Manager · Confidential",
  },
  {
    quote:
      "Working with Julia made our handoff process feel effortless. She speaks the language of developers, and her documentation is some of the clearest I've ever seen.",
    name: "Placeholder Name",
    title: "Senior Engineer · Confidential",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <StickyNav />
      <main>

        {/* 1. Introduction */}
        <section className="px-5 md:px-10 lg:px-20 pt-16 md:pt-24 pb-16 md:pb-20">
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

            {/* Text */}
            <div className="max-w-[760px]">
              <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300 mb-5 md:mb-6">
                ABOUT ME
              </p>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-7 md:mb-9">
                I turn complexity
                <br />
                into clarity.
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-slate-300 mb-5">
                Over the past nine years, I&apos;ve worked on products with very
                different users, constraints, and business models. What has
                stayed the same is what motivates me: understanding complex
                problems, asking better questions, and helping teams build
                products that are useful, scalable, and grounded in thoughtful
                decisions.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-slate-300 mb-5">
                I enjoy working in close partnership with Product and
                Engineering, bringing research, product thinking, and evidence
                together to help teams make better product decisions.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-slate-300">
                Whether I&apos;m improving an existing product, designing a new
                experience, or building the foundations of a Design System,
                I&apos;m driven by curiosity, collaboration, and the belief that
                better decisions lead to better products.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Experience */}
        <section className="px-5 md:px-10 lg:px-20 py-16 md:py-20 border-t border-slate-800">
          <div className="mb-10 md:mb-14 flex flex-col gap-3">
            <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
              EXPERIENCE
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white">
              Career Journey
            </h2>
            <p className="text-[16px] md:text-[17px] text-slate-300 max-w-xl">
              The experiences that shaped how I think, collaborate, and design
              products today.
            </p>
          </div>
          <div className="flex flex-col">
            {experience.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 md:py-10 border-t border-slate-800"
              >
                <div>
                  <p className="text-[13px] font-medium text-slate-500 mb-1">
                    {item.period}
                  </p>
                  <p className="text-[15px] font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-slate-400 mt-0.5">{item.org}</p>
                </div>
                <p className="text-[15px] md:text-[16px] leading-[26px] text-slate-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Skills & Expertise */}
        <section className="px-5 md:px-10 lg:px-20 py-16 md:py-20 border-t border-slate-800">
          <div className="mb-10 md:mb-12 flex flex-col gap-3">
            <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
              EXPERTISE
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white">
              Core Capabilities
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-800/50 px-4 md:px-5 py-2 md:py-2.5 text-[14px] md:text-[15px] font-medium text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 4. Recognition & Achievements */}
        <section className="px-5 md:px-10 lg:px-20 py-16 md:py-20 border-t border-slate-800">
          <div className="mb-10 md:mb-12 flex flex-col gap-3">
            <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
              RECOGNITION
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white">
              Awards &amp; Achievements
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {achievements.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-6 md:p-7"
              >
                <h3 className="text-[17px] md:text-[18px] font-semibold text-white">
                  {item.label}
                </h3>
                <p className="text-[14px] leading-[22px] text-slate-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Testimonials */}
        <section className="px-5 md:px-10 lg:px-20 py-16 md:py-20 border-t border-slate-800">
          <div className="mb-10 md:mb-12 flex flex-col gap-3">
            <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
              TESTIMONIALS
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white">
              What People Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col gap-5 rounded-xl border border-slate-700 bg-slate-800/50 p-6 md:p-8"
              >
                <p className="text-[15px] md:text-[16px] leading-[26px] text-slate-300 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex flex-col gap-0.5 pt-3 border-t border-slate-700">
                  <span className="text-[14px] font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="text-[12px] md:text-[13px] text-slate-400">
                    {t.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. My Process */}
        <Process />

        {/* 7. Resume Download */}
        <section className="px-5 md:px-10 lg:px-20 py-16 md:py-20 border-t border-slate-800">
          <div className="max-w-[600px]">
            <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300 mb-5">
              RESUME
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white mb-4">
              Want the full picture?
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[26px] text-slate-300 mb-8">
              Download my résumé for a complete overview of my experience,
              skills, and education.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block rounded-full bg-purple-800 hover:bg-purple-700 transition-colors text-white text-[15px] font-semibold px-7 py-4"
            >
              Download résumé
            </a>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}
