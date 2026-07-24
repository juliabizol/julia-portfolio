import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { StickyNav } from "@/components/nav";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Tag } from "@/components/tag";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

const title = "Julia Bizol | About";
const description = SITE_DESCRIPTION;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description,
    url: "/about",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const skills = [
  "Product Thinking",
  "Systems Thinking",
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
    label: "Winner, AI Ideathon (Hackathon)",
    meta: "IXDA Florianópolis · 2026",
    desc: "Won first place in the AI Ideathon, an AI-focused hackathon, by developing a solution to a real-world problem through collaborative product thinking and rapid prototyping.",
    linkLabel: "View announcement",
    linkHref:
      "https://www.instagram.com/p/DZXdOBMFQaz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    label: "Unsung Hero Award",
    meta: "McFadyen Digital · Two-time recipient",
    desc: "Recognized twice for exceptional client focus, ownership, collaboration, and commitment to delivering high-quality work.",
    linkLabel: "View certificate",
    linkHref:
      "https://www.linkedin.com/posts/juliabizol_im-thrilled-to-share-that-ive-been-recognized-share-7168451255999029248-Pd8D/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABEH1KcBKiH2pZxuz6R28l0ZrDgFnNGo_4E",
  },
];

const testimonials = [
  {
    quote:
      "Julia has a great ability to understand user needs and turn insights into practical, effective solutions. She also shared her expertise by leading a UX workshop that was incredibly valuable for our team. Her dedication, knowledge, and collaborative mindset made a lasting impact, and I highly recommend her as a UX professional.",
    name: "Gustavo Felix Gomes",
    title: "Data Engineer",
  },
  {
    quote:
      "Julia consistently demonstrated professionalism, ownership, and a commitment to quality. She communicates effectively, continuously seeks new knowledge, and goes above and beyond to deliver outstanding work. She is the kind of professional I would always want on my teams.",
    name: "Victor Melo",
    title: "Project Manager · Former Manager",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <StickyNav />
      <main>

        {/* 1. Introduction */}
        <section className="w-full">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 pt-16 md:pt-20 pb-16 md:pb-20">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
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

              {/* Text */}
              <div className="max-w-[760px]">
                <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300 mb-5 md:mb-6">
                  ABOUT ME
                </p>
                <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-7 md:mb-9">
                  I turn complexity
                  <br />
                  into clarity
                </h1>
                <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-slate-300 mb-5">
                  Over the past nine years, I&apos;ve worked on products with very
                  different users, constraints, and business models. What has
                  stayed the same is what motivates me: understanding complex
                  problems, asking better questions, and helping teams build
                  products that are useful, scalable, and grounded in thoughtful
                  decisions.
                </p>
                <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-slate-300 mb-5">
                  I enjoy working in close partnership with Product and
                  Engineering, bringing research, product thinking, and evidence
                  together to help teams make better product decisions.
                </p>
                <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-slate-300">
                  Whether I&apos;m improving an existing product, designing a new
                  experience, or building the foundations of a Design System,
                  I&apos;m driven by curiosity, collaboration, and the belief that
                  better decisions lead to better products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Experience */}
        <section className="w-full border-t border-slate-800/60">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 py-16 md:py-20">
            <div className="mb-10 md:mb-12 flex flex-col gap-3">
              <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
                EXPERIENCE
              </p>
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white">
                Career Journey
              </h2>
              <p className="text-[16px] leading-[26px] text-slate-300 max-w-xl">
                The experiences that shaped how I think, collaborate, and design
                products today.
              </p>
            </div>
            <div className="flex flex-col">
              {experience.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 md:py-10 border-t border-slate-800/60"
                >
                  <div>
                    <p className="text-[13px] font-medium text-slate-400 mb-1">
                      {item.period}
                    </p>
                    <p className="text-[15px] font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-slate-400 mt-0.5">{item.org}</p>
                  </div>
                  <p className="text-[16px] leading-[26px] text-slate-300 max-w-[68ch]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Resume CTA continuation */}
            <div className="border-t border-slate-800/60" />
            <div className="pt-14 md:pt-16 max-w-[600px]">
              <p className="text-[16px] leading-[26px] text-slate-300 mb-6">
                Download my résumé for a more detailed overview of my
                experience, projects, and accomplishments.
              </p>
              <a
                href="/Julia_Bizol_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 hover:border-slate-500 active:border-slate-500 active:scale-[0.98] transition-all duration-200 ease-out px-7 py-[14px] text-[15px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download résumé
              </a>
            </div>
          </div>
        </section>

        {/* 3. Skills & Expertise */}
        <section className="w-full border-t border-slate-800/60">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 py-16 md:py-20">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <div className="mb-10 md:mb-12 flex flex-col gap-3">
                <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
                  EXPERTISE
                </p>
                <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white">
                  Core Capabilities
                </h2>
                <p className="text-[16px] leading-[26px] text-slate-300 max-w-xl">
                  A multidisciplinary approach to designing products that
                  balance user needs, business goals, and technical
                  constraints.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Tag key={skill} variant="neutral" size="md">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Recognition & Achievements */}
        <section className="w-full border-t border-slate-800/60">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 py-16 md:py-20">
            <div className="mb-10 md:mb-12 flex flex-col gap-3">
              <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
                RECOGNITION
              </p>
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white">
                Awards &amp; Achievements
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-6">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="flex h-full flex-col gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-6 md:p-7"
                >
                  <h3 className="text-[17px] md:text-[18px] font-semibold text-white">
                    {item.label}
                  </h3>
                  <p className="text-[13px] text-slate-400">{item.meta}</p>
                  <p className="text-[14px] leading-[22px] text-slate-300">
                    {item.desc}
                  </p>
                  <a
                    href={item.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pb-1 -mb-1 text-[14px] font-medium text-purple-300 hover:text-white active:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {item.linkLabel}
                    <ExternalLink size={14} strokeWidth={2} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Testimonials */}
        <section className="w-full border-t border-slate-800/60">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 py-16 md:py-20">
            <div className="mb-10 md:mb-12 flex flex-col gap-3">
              <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
                TESTIMONIALS
              </p>
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-white">
                What People Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-5 rounded-xl border border-slate-700 bg-slate-800/50 p-6 md:p-8"
                >
                  <p className="text-[16px] leading-[26px] text-slate-300 italic">
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
          </div>
        </section>

        {/* 6. My Process */}
        <Process divider />

        <Contact divider />
      </main>
    </div>
  );
}
