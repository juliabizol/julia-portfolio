import { ImageResponse } from "next/og";
import { loadOgFonts, ogColors } from "@/lib/og";

export const alt = "Julia Bizol — Senior UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ogColors.background,
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 720,
            height: 720,
            borderRadius: "50%",
            display: "flex",
            background: `radial-gradient(circle, ${ogColors.purple800} 0%, rgba(2,6,23,0) 70%)`,
            opacity: 0.35,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: ogColors.purple300,
            marginBottom: 28,
          }}
        >
          Senior UX Designer &amp; Product Designer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
            color: ogColors.white,
          }}
        >
          Julia Bizol
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 400,
            color: ogColors.slate300,
            marginTop: 28,
          }}
        >
          Designing products that make sense.
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
