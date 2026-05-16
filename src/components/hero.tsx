export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-72px)] px-40 py-24 overflow-hidden text-center">
      {/* Purple glow orb */}
      <div
        className="pointer-events-none absolute right-[-50px] top-[-100px] h-[700px] w-[700px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #6b21a8 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Available badge */}
      <div className="mb-8 flex items-center gap-1.5 rounded-full bg-purple-900/50 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-purple-800" />
        <span className="text-[13px] font-medium text-purple-300">
          Available for Freelance
        </span>
      </div>

      {/* Headline */}
      <h1 className="max-w-[900px] text-[72px] font-bold leading-[80px] tracking-[-0.02em] text-white">
        Designing Products
        <br />
        People Love to Use
      </h1>

      {/* Subtitle */}
      <p className="mt-8 max-w-[680px] text-[18px] leading-[28px] text-slate-300">
        Senior UX Designer with 8+ years crafting digital experiences
        <br />
        for B2B and consumer products. Based in São Paulo.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-purple-800 hover:bg-purple-700 transition-colors px-7 py-[14px] text-[15px] font-semibold text-white"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-slate-700 hover:border-slate-500 transition-colors px-7 py-[14px] text-[15px] font-semibold text-white"
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll hint */}
      <p className="mt-16 text-[12px] text-slate-500">↓ scroll to explore</p>
    </section>
  );
}
