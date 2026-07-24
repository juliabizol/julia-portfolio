import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_THEME_COLOR } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { getSiteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: SITE_THEME_COLOR,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-slate-950 text-white">
        <JsonLd data={getSiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
