"use client";

import { useState } from "react";

const EMAIL = "juliabizol@gmail.com";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 8.5h.01"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M7 11v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 17v-6M11 13c0-2.5 4-2.5 4 0v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  );
}

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/juliabizol", icon: LinkedInIcon, download: false },
  { label: "Download résumé", href: "/Julia_Bizol_Resume.pdf", icon: DownloadIcon, download: true },
];

export function Contact({ divider = false }: { divider?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable
    }
  };

  return (
    <section
      id="contact"
      className={`relative flex flex-col overflow-hidden ${divider ? "border-t border-slate-800/60" : ""}`}
    >
      {/* Purple glow */}
      <div
        className="pointer-events-none absolute left-[-100px] bottom-0 h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full opacity-12"
        style={{
          background: "radial-gradient(circle, var(--color-purple-800) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Main content */}
      <div
        className={`flex flex-1 flex-col items-center justify-center gap-7 md:gap-10 px-5 md:px-10 lg:px-20 w-full max-w-[1440px] mx-auto text-center ${
          divider ? "py-20 md:py-32" : "pb-20 md:pb-28 lg:pb-32"
        }`}
      >
        <p className="text-[13px] font-medium tracking-[0.03em] text-purple-300">
          GET IN TOUCH
        </p>

        <h2 className="max-w-[900px] text-[36px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.1] lg:leading-[72px] tracking-[-0.02em] text-white">
          Let&apos;s build something
          <br />
          meaningful together
        </h2>

        <p className="max-w-[520px] text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-slate-300">
          Building a new product, improving an existing one, or just want to
          connect? I&apos;d love to hear from you.
        </p>

        {/* Email copy widget */}
        <div className="inline-flex max-w-full items-center gap-3 rounded-xl border border-purple-300/20 bg-[#0B1220] p-3">
          <div className="flex items-center justify-center rounded-lg bg-[#172135] p-2.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.334 5.83373L10.8409 10.6058C10.5866 10.7534 10.2978 10.8312 10.0038 10.8312C9.70971 10.8312 9.42089 10.7534 9.16662 10.6058L1.66602 5.83373M3.33282 3.33398H16.6672C17.5878 3.33398 18.334 4.0801 18.334 5.00048V14.9995C18.334 15.9199 17.5878 16.666 16.6672 16.666H3.33282C2.41227 16.666 1.66602 15.9199 1.66602 14.9995V5.00048C1.66602 4.0801 2.41227 3.33398 3.33282 3.33398Z"
                className="stroke-slate-300"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className="text-[16px] font-semibold text-white select-all">
            {EMAIL}
          </span>

          <button
            onClick={handleCopy}
            aria-label="Copy email address"
            className="flex items-center gap-2 rounded-lg bg-purple-300 px-3 py-2 text-[13px] font-bold text-slate-950 hover:bg-purple-200 active:opacity-90 active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {copied ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.334 4L6.00065 11.3333L2.66732 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66626 10.6669C1.93287 10.6669 1.33282 10.0669 1.33282 9.33347V2.66626C1.33282 1.93287 1.93287 1.33282 2.66626 1.33282H9.33347C10.0669 1.33282 10.6669 1.93287 10.6669 2.66626M6.66658 5.33314H13.3338C14.0702 5.33314 14.6672 5.93015 14.6672 6.66658V13.3338C14.6672 14.0702 14.0702 14.6672 13.3338 14.6672H6.66658C5.93015 14.6672 5.33314 14.0702 5.33314 13.3338V6.66658C5.33314 5.93015 5.93015 5.33314 6.66658 5.33314Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
            <span className="hidden min-[375px]:inline">{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              {...(s.download
                ? { download: true }
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-400 hover:text-white active:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <s.icon />
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-t border-slate-800/60">
        <div className="mx-auto max-w-[1440px] flex flex-col sm:flex-row items-center justify-between gap-1 px-5 md:px-10 lg:px-20 py-4">
          <p className="text-[12px] md:text-[13px] text-slate-400">
            © 2026 Julia Bizol · All rights reserved
          </p>
          <p className="text-[12px] md:text-[13px] text-slate-400">
            Designed and built by Julia Bizol
          </p>
        </div>
      </div>
    </section>
  );
}
