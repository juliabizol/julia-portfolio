import { ImageResponse } from "next/og";
import { loadOgFonts, loadPublicImageAsDataUri, ogColors } from "@/lib/og";

const OG_SUMMARY =
  "Senior UX Designer with 9+ years helping teams turn complex product problems into scalable solutions.";

export const alt = "About Julia Bizol — Senior UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [fonts, portraitSrc] = await Promise.all([
    loadOgFonts(),
    loadPublicImageAsDataUri("/julia.jpeg"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: ogColors.background,
          padding: 80,
          fontFamily: "Inter",
        }}
      >
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
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: ogColors.purple300,
              marginBottom: 24,
            }}
          >
            About Me
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: -1.5,
              lineHeight: 1.1,
              color: ogColors.white,
            }}
          >
            Julia Bizol
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 400,
              color: ogColors.slate300,
              marginTop: 24,
            }}
          >
            {OG_SUMMARY}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 360,
            height: 450,
            borderRadius: 24,
            border: `2px solid ${ogColors.slate700}`,
            overflow: "hidden",
          }}
        >
          <img
            src={portraitSrc}
            alt=""
            width={360}
            height={450}
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
              borderRadius: 24,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
