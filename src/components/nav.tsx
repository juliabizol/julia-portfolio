"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav({ activeSection }: { activeSection?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex h-[64px] md:h-[72px] items-center justify-between px-5 md:px-10 lg:px-20 w-full shrink-0">
      <span className="text-[17px] md:text-[18px] font-bold text-white tracking-tight">
        Julia Bizol
      </span>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={`text-[15px] font-medium transition-colors hover:text-purple-300 ${
              activeSection === l.label.toLowerCase()
                ? "text-purple-300"
                : "text-slate-300"
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="hidden md:block bg-purple-800 hover:bg-purple-700 transition-colors text-white text-[14px] font-medium px-5 py-[10px] rounded-full"
      >
        Let&apos;s Talk
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className={`block h-[2px] w-6 bg-white transition-all ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`block h-[2px] w-6 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-[2px] w-6 bg-white transition-all ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-slate-900 border-b border-slate-800 flex flex-col py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-5 py-3 text-[16px] font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-5 pt-3 pb-1">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-purple-800 hover:bg-purple-700 text-white text-[14px] font-medium px-5 py-[10px] rounded-full"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function StickyNav() {
  const [active, setActive] = useState("work");

  useEffect(() => {
    const sections = ["work", "about", "process", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
      <Nav activeSection={active} />
    </header>
  );
}
