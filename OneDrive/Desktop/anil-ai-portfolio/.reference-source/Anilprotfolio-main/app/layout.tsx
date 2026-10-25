import "./globals.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import type { Metadata } from "next";
import { SEO } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: SEO.metadataBase,
  title: "Anil Mali | Senior AI & ML Engineer Portfolio",
  description:
    "Premium portfolio for Anil Mali showcasing machine learning, generative AI, MLOps, and computer vision work.",
  openGraph: SEO.openGraph,
  twitter: SEO.twitter
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-bgDeep text-white antialiased relative selection:bg-primaryCyan/30">
        <BackgroundCanvas />
        <main className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
