import type { Metadata } from "next";
import { StickyNav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <StickyNav />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}
