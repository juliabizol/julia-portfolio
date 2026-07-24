import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_THEME_COLOR } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: SITE_THEME_COLOR,
    theme_color: SITE_THEME_COLOR,
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
