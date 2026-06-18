import type { Metadata } from "next";
import { Analytics } from "@/components/ui/Analytics";
import { Toaster } from "@/components/ui/Toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clarity — AI Skin Coach for Personalized Skincare Insights",
  description:
    "Upload a photo. Understand your skin. Get personalized guidance. AI-powered skincare analysis, progress tracking, and product recommendations tailored to your unique skin concerns.",
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
  ],
  authors: [{ name: "Clarity" }],
  creator: "Clarity",
  publisher: "Clarity",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://getclarity.app"),
  openGraph: {
    title: "Clarity — AI Skin Coach for Personalized Skincare",
    description:
      "Upload a photo. Understand your skin. Get personalized guidance. Join the waitlist for early access.",
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
    title: "Clarity — AI Skin Coach for Personalized Skincare",
    description:
      "Upload a photo. Understand your skin. Get personalized guidance.",
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
      </body>
    </html>
  );
}
