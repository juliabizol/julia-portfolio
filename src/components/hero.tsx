export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-72px)] px-5 sm:px-12 lg:px-40 py-16 md:py-24 overflow-hidden text-center">
      {/* Purple glow orb */}
      <div
        className="pointer-events-none absolute right-[-50px] top-[-100px] h-[400px] w-[400px] md:h-[700px] md:w-[700px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #6b21a8 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Available badge */}
      <div className="mb-6 md:mb-8 flex items-center gap-1.5 rounded-full bg-purple-900/50 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-purple-800" />
        <span className="text-[13px] font-medium text-purple-300">
          Available
        </span>
      </div>

      {/* Headline */}
      <h1 className="max-w-[900px] text-[40px] sm:text-[56px] lg:text-[72px] font-bold leading-[1.1] lg:leading-[80px] tracking-[-0.02em] text-white">
        Designing Products
        <br />
        That Make Sense
      </h1>

      {/* Subtitle */}
      <p className="mt-6 md:mt-8 max-w-[540px] lg:max-w-[680px] text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-slate-300">
        Senior UX Designer with 8+ years of experience turning complex problems
        into intuitive, accessible experiences.
      </p>

      {/* CTAs */}
      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
        <a
          href="#work"
          className="w-full sm:w-auto text-center rounded-full bg-purple-800 hover:bg-purple-700 transition-colors px-7 py-[14px] text-[15px] font-semibold text-white"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto text-center rounded-full border border-slate-700 hover:border-slate-500 transition-colors px-7 py-[14px] text-[15px] font-semibold text-white"
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll hint */}
      <p className="mt-12 md:mt-16 text-[12px] text-slate-400">↓ scroll to explore</p>
    </section>
  );
}
