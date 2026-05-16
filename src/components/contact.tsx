const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Read.cv", href: "https://read.cv" },
];

export function Contact() {
  return (
    <section id="contact" className="relative flex flex-col overflow-hidden">
      {/* Purple glow bottom-left */}
      <div
        className="pointer-events-none absolute left-[-100px] bottom-0 h-[600px] w-[600px] rounded-full opacity-12"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-20 py-32 text-center">
        <p className="text-[13px] font-medium tracking-[0.03em] text-purple-400">
          GET IN TOUCH
        </p>

        <h2 className="max-w-[900px] text-[64px] font-bold leading-[72px] tracking-[-0.02em] text-white">
          Let&apos;s build something
          <br />
          people love.
        </h2>

        <p className="max-w-[600px] text-[18px] leading-[28px] text-slate-300">
          I&apos;m always open to interesting projects, collaborations,
          <br />
          and conversations. Drop me a line.
        </p>

        <a
          href="mailto:juliabizol@gmail.com"
          className="rounded-full bg-purple-500 hover:bg-purple-400 transition-colors px-10 py-[18px] text-[16px] font-semibold text-white"
        >
          juliabizol@gmail.com
        </a>

        <div className="flex gap-8">
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
      <div className="flex items-center justify-between border-t border-slate-800 px-20 py-4">
        <p className="text-[13px] text-slate-500">
          © 2026 Julia Bizol · All rights reserved
        </p>
        <p className="text-[13px] text-slate-500">
          Designed in Figma · Built with Next.js
        </p>
      </div>
    </section>
  );
}
