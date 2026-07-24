import { ImageResponse } from "next/og";
import { loadOgFonts, ogColors } from "@/lib/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      // Rounded square (~24% corner radius): only the four corner triangles
      // are transparent, the rest of the canvas is fully opaque — measured
      // and confirmed this is not a "shrunk icon with a big margin," just a
      // normal rounded-rect clip. Background uses faviconBackground
      // (purple900 darkened ~2 shades).
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ogColors.faviconBackground,
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
