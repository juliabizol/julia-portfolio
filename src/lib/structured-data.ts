import type { Project } from "@/lib/projects";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SITE_LINKEDIN_URL } from "@/lib/site";

/** Site-wide Person + WebSite entities, rendered once in the root layout. */
export function getSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/julia.jpeg`,
        jobTitle: "Product Designer, Senior UX Designer",
        description: SITE_DESCRIPTION,
        sameAs: [SITE_LINKEDIN_URL],
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    ],
  };
}

type BreadcrumbItem = { name: string; path: string };

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** CreativeWork rather than Article: case studies have no genuine publish date,
 * which Article schema expects for valid rich-result eligibility. */
export function getCreativeWorkJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${SITE_URL}/work/${project.slug}`,
    image: `${SITE_URL}${project.image}`,
    keywords: project.tags.join(", "),
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
