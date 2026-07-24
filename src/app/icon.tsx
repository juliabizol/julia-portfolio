import { ImageResponse } from "next/og";
import { loadOgFonts, ogColors } from "@/lib/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      // Rounded square, not a full-bleed square: the four corners outside the
      // radius stay transparent (no backgroundColor on the canvas itself), so
      // browsers do their own tab-chrome masking instead of clipping a hard
      // square. Background uses purple900 (an existing brand token) rather
      // than the site's near-black background — a near-black favicon reads
      // as too close to Safari's dark chrome color, which makes Safari add
      // its own white contrast backing plate behind the icon.
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ogColors.purple900,
          borderRadius: 8,
          fontFamily: "Inter",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: -1,
          color: ogColors.purple300,
        }}
      >
        JB
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
