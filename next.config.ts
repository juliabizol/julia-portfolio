import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 restricts optimized image quality to this allowlist;
    // without it, any `quality` prop above 75 is silently clamped to 75.
    qualities: [90],
  },
};

export default nextConfig;
