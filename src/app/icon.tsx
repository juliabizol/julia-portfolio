import { ImageResponse } from "next/og";
import { loadOgFonts, ogColors } from "@/lib/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      // Full opaque square, no self-applied border-radius or transparency:
      // Safari and iOS both apply their own rounded mask to every favicon
      // automatically. A transparent corner in the source image doesn't get
      // filled by browser chrome — it lets the tab bar's own light background
      // show straight through, which combined with Safari's own rounding
      // produced a mismatched "double-rounded" light halo around the icon.
      // Letting the browser do 100% of the masking (as it does for any plain
      // square favicon) avoids that. Background uses faviconBackground
      // (purple900 darkened ~2 shades) rather than the site's near-black
      // background, since near-black reads as indistinguishable from
      // Safari's own dark tab chrome.
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ogColors.faviconBackground,
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
