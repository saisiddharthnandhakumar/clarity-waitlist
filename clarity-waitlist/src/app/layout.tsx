import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { Analytics } from "@/components/ui/Analytics";
import { Toaster } from "@/components/ui/Toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clarity — AI Skin Coach for Indian Skin | Personalized Acne & Pigmentation Insights",
  description:
    "Stop guessing what's wrong with your skin. Clarity's AI analyzes your selfie and tells you exactly what's happening — built specifically for Indian skin concerns like pigmentation, acne scars, and uneven tone.",
  keywords: [
    "AI skincare",
    "skin analysis",
    "skincare routine",
    "acne help",
    "skin coach",
    "personalized skincare",
    "skin progress tracker",
    "skincare recommendations",
    "AI skin coach",
    "Clarity skincare",
    "Indian skin",
    "acne scars",
    "pigmentation",
    "melanin-rich skin",
  ],
  authors: [{ name: "Clarity" }],
  creator: "Clarity",
  publisher: "Clarity",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://getclarity.app"),
  openGraph: {
    title: "Clarity — AI Skin Coach for Indian Skin | Stop Guessing, Start Knowing",
    description:
      "Stop guessing what's wrong with your skin. Clarity's AI analyzes your selfie and tells you exactly what's happening — built for Indian skin. Join the waitlist.",
    url: "/",
    siteName: "Clarity",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clarity — AI Skin Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarity — AI Skin Coach for Indian Skin | Stop Guessing, Start Knowing",
    description:
      "Stop guessing what's wrong with your skin. Built for Indian skin concerns like pigmentation, acne scars, and uneven tone.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <Toaster />
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
