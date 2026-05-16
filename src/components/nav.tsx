"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav({ activeSection }: { activeSection?: string }) {
  return (
    <nav className="flex h-[72px] items-center justify-between px-20 w-full shrink-0">
      <span className="text-[18px] font-bold text-white tracking-tight">
        Julia Bizol
      </span>

      <div className="flex items-center gap-10">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={`text-[15px] font-medium transition-colors hover:text-purple-400 ${
              activeSection === l.label.toLowerCase()
                ? "text-purple-400"
                : "text-slate-300"
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="bg-purple-500 hover:bg-purple-400 transition-colors text-white text-[14px] font-medium px-5 py-[10px] rounded-full"
      >
        Let&apos;s Talk
      </a>
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
