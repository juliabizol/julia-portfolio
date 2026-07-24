import { ImageResponse } from "next/og";
import { loadOgFonts, ogColors } from "@/lib/og";
import { SITE_TITLE } from "@/lib/site";

export const alt = SITE_TITLE;
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
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: ogColors.background,
          padding: 80,
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
            opacity: 0.22,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 560,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 19,
              fontWeight: 400,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: ogColors.purple300,
              opacity: 0.75,
              marginBottom: 28,
            }}
          >
            Product Designer • Senior UX Designer
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
              marginTop: 16,
            }}
          >
            Designing products that make sense.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 360,
            height: 450,
            borderRadius: 24,
            border: `2px solid ${ogColors.slate700}`,
            backgroundColor: "#0B1220",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 130,
              fontWeight: 700,
              letterSpacing: -4,
              color: ogColors.purple300,
            }}
          >
            JB
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
