import type { ReactNode } from "react";

export type TagVariant = "neutral" | "accent";
export type TagSize = "sm" | "md";

const variantClasses: Record<TagVariant, string> = {
  neutral: "border border-slate-700 bg-slate-800/50 text-slate-300",
  accent: "bg-purple-900/50 text-purple-300",
};

const sizeClasses: Record<TagSize, string> = {
  sm: "px-3 py-1 text-[11px]",
  md: "px-4 py-2 text-[13px]",
};

export function Tag({
  children,
  variant = "neutral",
  size = "md",
  dot = false,
  dotClassName = "bg-current",
  className = "",
}: {
  children: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  dot?: boolean;
  dotClassName?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full font-medium ${
        dot ? "gap-1.5" : ""
      } ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${dotClassName}`} />}
      {children}
    </span>
  );
}
