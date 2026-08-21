import type { LucideIcon } from "lucide-react";

type GlassIconProps = {
  /** Icon to render. Omit and pass `value` instead for a short text/numeric
   * metric (e.g. "98%") rendered in the same container. */
  icon?: LucideIcon;
  value?: string;
  /** "responsive" (56px on mobile, 64px from md up) matches the About page's
   * Awards & Achievements usage. "fixed" keeps a flat 64px at every
   * breakpoint, for contexts where the container must never shrink. */
  size?: "responsive" | "fixed";
  className?: string;
};

/**
 * Shared glass/glow container established in the About page's Awards &
 * Achievements section, reused here so every consumer renders the identical
 * treatment rather than a separate approximation of it.
 *
 * Fully static by design: no hover, focus, or interaction states of any
 * kind. Callers may wrap this in an interactive card, but this component
 * itself never changes appearance in response to interaction.
 */
export function GlassIcon({ icon: Icon, value, size = "responsive", className = "" }: GlassIconProps) {
  const box = size === "fixed" ? "h-16 w-16" : "h-14 w-14 md:h-16 md:w-16";
  const glow = size === "fixed" ? "h-[280px] w-[280px]" : "h-[220px] w-[220px] md:h-[280px] md:w-[280px]";
  const iconSize = size === "fixed" ? "h-7 w-7" : "h-6 w-6 md:h-7 md:w-7";

  return (
    <div className={`relative flex items-center justify-center ${box} ${className}`}>
      <div
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, var(--color-violet-600) 0%, transparent 70%)",
        }}
        className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[46px] ${glow}`}
      />
      <div
        className={`flex items-center justify-center rounded-2xl border-[0.5px] border-violet-300/30 bg-violet-400/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_20px_-8px_rgba(139,92,246,0.35)] backdrop-blur-sm ${box}`}
      >
        {Icon ? (
          <Icon className={`${iconSize} text-violet-400`} strokeWidth={1.75} />
        ) : (
          <span className="text-[20px] font-bold tracking-tight text-violet-400">{value}</span>
        )}
      </div>
    </div>
  );
}
