const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/juliabizol" },
  { label: "Behance", href: "https://www.behance.net/juliabizol" },
];

export function Contact() {
  return (
    <section id="contact" className="relative flex flex-col overflow-hidden">
      {/* Purple glow */}
      <div
        className="pointer-events-none absolute left-[-100px] bottom-0 h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full opacity-12"
        style={{
          background: "radial-gradient(circle, #6b21a8 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center gap-7 md:gap-10 px-5 md:px-10 lg:px-20 py-20 md:py-32 text-center">
        <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
          GET IN TOUCH
        </p>

        <h2 className="max-w-[900px] text-[36px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.1] lg:leading-[72px] tracking-[-0.02em] text-white">
          Let&apos;s build something
          <br />
          people love.
        </h2>

        <p className="max-w-[520px] text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-slate-300">
          I&apos;m always open to interesting projects, collaborations, and
          conversations. Drop me a line.
        </p>

        <a
          href="mailto:juliabizol@gmail.com"
          className="rounded-full bg-purple-800 hover:bg-purple-700 transition-colors px-7 md:px-10 py-4 md:py-[18px] text-[15px] md:text-[16px] font-semibold text-white break-all sm:break-normal"
        >
          juliabizol@gmail.com
        </a>

        <div className="flex gap-6 md:gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-slate-500 hover:text-slate-300 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1 border-t border-slate-800 px-5 md:px-10 lg:px-20 py-4">
        <p className="text-[12px] md:text-[13px] text-slate-500">
          © 2026 Julia Bizol · All rights reserved
        </p>
        <p className="text-[12px] md:text-[13px] text-slate-500">
          Designed in Figma · Built with Next.js
        </p>
      </div>
    </section>
  );
}
