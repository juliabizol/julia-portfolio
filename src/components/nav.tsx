"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { projects } from "@/lib/projects";

const workProjects = projects.map((p) => ({
  label: p.title,
  href: `/work/${p.slug}`,
}));

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      className={`mt-px transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2 3.5l3.5 3.5 3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Nav({ activeSection }: { activeSection?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const pathname = usePathname();
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openWork = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setWorkOpen(true);
  };
  const scheduleCloseWork = () => {
    closeTimeout.current = setTimeout(() => setWorkOpen(false), 150);
  };

  const isWorkActive =
    pathname.startsWith("/work/") || activeSection === "work";
  const isAboutActive =
    pathname === "/about" || activeSection === "about";

  return (
    <nav className="relative flex h-[64px] md:h-[72px] items-center justify-between px-5 md:px-10 lg:px-20 w-full shrink-0">
      {/* Logo */}
      <a
        href="/"
        className="text-[17px] md:text-[18px] font-bold text-white tracking-tight hover:text-purple-300 transition-colors"
      >
        Julia Bizol
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        {/* Work dropdown */}
        <div
          className="relative"
          onMouseEnter={openWork}
          onMouseLeave={scheduleCloseWork}
        >
          <button
            className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-purple-300 ${
              isWorkActive ? "text-purple-300" : "text-slate-300"
            }`}
          >
            Work
            <Chevron open={workOpen} />
          </button>

          {workOpen && (
            // pt-2 turns the visual gap into transparent padding inside the
            // descendant tree, so mouseleave never fires while crossing it.
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[224px] z-50"
              onMouseEnter={openWork}
              onMouseLeave={scheduleCloseWork}
            >
              <div className="rounded-xl border border-slate-700 bg-slate-900 shadow-xl py-1.5">
                {workProjects.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block px-4 py-2.5 text-[14px] text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* About */}
        <Link
          href="/about"
          className={`text-[15px] font-medium transition-colors hover:text-purple-300 ${
            isAboutActive ? "text-purple-300" : "text-slate-300"
          }`}
        >
          About
        </Link>
      </div>

      {/* Desktop CTA */}
      <a
        href="/#contact"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-slate-900 border-b border-slate-800 flex flex-col py-4 md:hidden">
          {/* Work expand */}
          <button
            onClick={() => setMobileWorkOpen((v) => !v)}
            className="flex items-center justify-between px-5 py-3 text-[16px] font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Work
            <Chevron open={mobileWorkOpen} />
          </button>
          {mobileWorkOpen && (
            <div className="bg-slate-950/60">
              {workProjects.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-8 py-2.5 text-[14px] text-slate-400 hover:text-white transition-colors"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          )}

          {/* About */}
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-3 text-[16px] font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            About
          </Link>

          {/* CTA */}
          <div className="px-5 pt-3 pb-1">
            <a
              href="/#contact"
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
  const pathname = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }
    const sections = ["work", "about"];
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
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
      <Nav activeSection={active} />
    </header>
  );
}
