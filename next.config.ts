import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 restricts optimized image quality to this allowlist;
    // without it, any `quality` prop above 75 is silently clamped to 75.
    qualities: [90],
    // AVIF first: measured ~37% smaller than WebP at the same quality for
    // this site's UI-screenshot case-study images, with automatic fallback
    // to WebP (Next's default) for browsers that don't support it.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
