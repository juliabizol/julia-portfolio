import { ImageResponse } from "next/og";
import { getPublishedProject, publishedProjects } from "@/lib/projects";
import { loadOgFonts, loadPublicImageAsDataUri, ogColors } from "@/lib/og";

export const alt = "Product Design Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPublishedProject(slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundColor: ogColors.background,
          }}
        />
      ),
      size
    );
  }

  const [fonts, imageSrc] = await Promise.all([
    loadOgFonts(),
    loadPublicImageAsDataUri(project.image),
  ]);

  // Longer titles get a smaller size so they still fit on a single line;
  // short titles (like "My ScholarShop") are unaffected.
  const titleFontSize = project.title.length > 15 ? 46 : 60;

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
            maxWidth: 520,
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
            Product Design Case Study
          </div>
          <div
            style={{
              display: "flex",
              fontSize: titleFontSize,
              fontWeight: 700,
              letterSpacing: -1.5,
              lineHeight: 1.15,
              whiteSpace: "nowrap",
              color: ogColors.white,
            }}
          >
            {project.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 480,
            height: 360,
            borderRadius: 24,
            border: `2px solid ${ogColors.slate700}`,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={imageSrc}
            alt=""
            width={480}
            height={360}
            style={{
              objectFit: project.heroContain ? "contain" : "cover",
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
