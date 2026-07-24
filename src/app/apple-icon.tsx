import { ImageResponse } from "next/og";
import { loadOgFonts, ogColors } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      // iOS applies its own corner mask to apple-touch-icons, so this stays
      // an unrounded square rather than reusing the site's borderRadius: 24.
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ogColors.background,
          fontFamily: "Inter",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: -3,
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
