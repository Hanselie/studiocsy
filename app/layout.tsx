import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig, generateOrganizationSchema, generateProfessionalServiceSchema } from "@/lib/seo-config";

// Comprehensive SEO metadata for Health & Wellness UGC Agency
export const metadata: Metadata = {
  // Title with template for child pages
  title: {
    default: "UGC & AI Creative Agency for Health Brands | Studiocsy",
    template: "%s | Studiocsy",
  },

  // SEO-optimized description targeting bottom-of-funnel keywords
  description: "Scale your wellness brand to 3x ROAS with performance-driven UGC, AI video ads & VSL production. Trusted by 500+ health & supplement brands in US, UK & Germany.",

  // Target keywords for search engines
  keywords: [
    "UGC agency for health brands",
    "AI UGC video ads for wellness",
    "VSL production for supplements",
    "performance creative agency US UK",
    "increase ROAS supplement brands",
    "best UGC agency for wellness brands",
  ],

  // Author & publisher info
  authors: [{ name: "Studiocsy", url: siteConfig.url }],
  creator: "Studiocsy",
  publisher: "Studiocsy",

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph for social sharing (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "UGC & AI Creative Agency for Health Brands | Studiocsy",
    description: "Scale your wellness brand to 3x ROAS with performance-driven UGC, AI video ads & VSL production.",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Studiocsy - Performance Creative Agency for Health & Wellness",
      },
    ],
  },

  // Twitter Card for X/Twitter sharing
  twitter: {
    card: "summary_large_image",
    title: "UGC & AI Creative Agency for Health Brands | Studiocsy",
    description: "Scale your wellness brand to 3x ROAS with performance-driven UGC & AI video ads.",
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: "@studiocsy",
  },

  // Hreflang alternates for international SEO (US, UK, Germany)
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      "en-GB": siteConfig.url,
      "de-DE": `${siteConfig.url}/de`,
    },
  },

  // Additional meta
  category: "Marketing Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD structured data for search engines
  const organizationSchema = generateOrganizationSchema();
  const serviceSchema = generateProfessionalServiceSchema();

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Organization Schema - helps Google understand your business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* JSON-LD Professional Service Schema - enables rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
