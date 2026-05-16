import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julia Bizol — Senior UX Designer",
  description:
    "Senior UX Designer with 8+ years crafting digital experiences for B2B and consumer products. Based in São Paulo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}
