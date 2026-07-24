import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import { SITE_THEME_COLOR } from "@/lib/site";

const ASSETS_DIR = join(process.cwd(), "assets");

/** Longest side, in px, that source images are downscaled to before embedding.
 * OG images are only ever displayed well under this size, and capping it keeps
 * the embedded data: URI small enough for Satori/resvg to parse regardless of
 * how large the original /public source file is. */
const MAX_EMBEDDED_IMAGE_DIMENSION = 1000;

/** Inter Regular + Bold, loaded once per image render for use in ImageResponse. */
export async function loadOgFonts() {
  const [regular, bold] = await Promise.all([
    readFile(join(ASSETS_DIR, "Inter-Regular.woff")),
    readFile(join(ASSETS_DIR, "Inter-Bold.woff")),
  ]);
  return [
    { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Inter", data: bold, weight: 700 as const, style: "normal" as const },
  ];
}

/**
 * Reads a /public asset (e.g. "/projects/foo/hero.png"), downscales it so its
 * longest side never exceeds MAX_EMBEDDED_IMAGE_DIMENSION, and returns it as a
 * data: URI for use in <img src>. Without this, large source images (several
 * MB, common for hero screenshots) overflow resvg's XML parser when embedded
 * inline, regardless of the display size Satori later renders them at.
 */
export async function loadPublicImageAsDataUri(publicPath: string) {
  const relativePath = publicPath.replace(/^\//, "");
  const data = await readFile(join(process.cwd(), "public", relativePath));
  const resized = await sharp(data)
    .resize({
      width: MAX_EMBEDDED_IMAGE_DIMENSION,
      height: MAX_EMBEDDED_IMAGE_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: 82 })
    .toBuffer();
  return `data:image/jpeg;base64,${resized.toString("base64")}`;
}

/** Colors matching the site's existing Tailwind palette, for reuse in ImageResponse (which can't read Tailwind classes). */
export const ogColors = {
  background: SITE_THEME_COLOR, // slate-950
  purple300: "#d8b4fe",
  purple800: "#6b21a8",
  purple900: "#581c87",
  /** purple900 darkened ~2 shades (same hue/saturation, lightness -17pp).
   * Used only for the favicon: a near-black favicon background reads as
   * indistinguishable from Safari's own dark tab chrome. */
  faviconBackground: "#290d3f",
  white: "#ffffff",
  slate300: "#cbd5e1",
  slate700: "#334155",
};
