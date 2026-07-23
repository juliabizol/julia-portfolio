import { Tag } from "@/components/tag";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center px-5 sm:px-12 lg:px-40 py-14 md:py-20 lg:py-24 max-w-[1440px] mx-auto overflow-hidden text-center">
      {/* Purple glow orb */}
      <div
        className="pointer-events-none absolute right-[-50px] top-[-100px] h-[400px] w-[400px] md:h-[700px] md:w-[700px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, var(--color-purple-800) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Available badge */}
      <Tag
        variant="accent"
        size="md"
        dot
        dotClassName="bg-green-500"
        className="mb-6 md:mb-8"
      >
        Available
      </Tag>

      {/* Headline */}
      <h1 className="max-w-[900px] text-[40px] sm:text-[56px] lg:text-[72px] font-bold leading-[1.1] lg:leading-[80px] tracking-[-0.02em] text-white">
        Designing products
        <br />
        that make sense
      </h1>

      {/* Subtitle */}
      <p className="mt-6 md:mt-8 max-w-[540px] lg:max-w-[680px] text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-slate-300">
        I&apos;m a Product Designer and Senior UX Designer with 9 years of
        experience turning complex problems into thoughtful, intuitive
        design.
      </p>

      {/* CTAs */}
      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
        <a
          href="#work"
          className="w-full sm:w-auto text-center rounded-full bg-purple-800 hover:bg-purple-700 active:bg-purple-700 active:scale-[0.98] transition-all duration-200 ease-out px-7 py-[14px] text-[15px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto text-center rounded-full border border-slate-700 hover:border-slate-500 active:border-slate-500 active:scale-[0.98] transition-all duration-200 ease-out px-7 py-[14px] text-[15px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
