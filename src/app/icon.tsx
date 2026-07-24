import { ImageResponse } from "next/og";
import { loadOgFonts, ogColors } from "@/lib/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ogColors.background,
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
