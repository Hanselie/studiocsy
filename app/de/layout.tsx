import type { Metadata } from "next";
import "../globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig, generateOrganizationSchema, generateProfessionalServiceSchema } from "@/lib/seo-config";

// German Market SEO Metadata
export const metadata: Metadata = {
    title: {
        default: "UGC & AI Creative Agentur für Gesundheitsmarken | Studiocsy",
        template: "%s | Studiocsy",
    },

    description: "Skalieren Sie Ihre Wellness-Marke auf 3x ROAS mit performance-gesteuerten UGC, AI Video Ads & VSL Produktion. Vertraut von 500+ Gesundheits- und Supplement-Marken.",

    keywords: [
        "UGC Agentur für Gesundheitsmarken",
        "AI UGC Video Ads für Wellness",
        "VSL Produktion für Supplements",
        "Performance Creative Agentur Deutschland",
    ],

    authors: [{ name: "Studiocsy", url: siteConfig.url }],
    creator: "Studiocsy",
    publisher: "Studiocsy",

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

    openGraph: {
        type: "website",
        locale: "de_DE",
        url: `${siteConfig.url}/de`,
        siteName: siteConfig.name,
        title: "UGC & AI Creative Agentur für Gesundheitsmarken | Studiocsy",
        description: "Skalieren Sie Ihre Wellness-Marke auf 3x ROAS mit performance-gesteuerten UGC & AI Video Ads.",
        images: [
            {
                url: `${siteConfig.url}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Studiocsy - Performance Creative Agentur für Gesundheit & Wellness",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "UGC & AI Creative Agentur für Gesundheitsmarken | Studiocsy",
        description: "Skalieren Sie Ihre Wellness-Marke auf 3x ROAS mit UGC & AI Video Ads.",
        images: [`${siteConfig.url}/og-image.jpg`],
        creator: "@studiocsy",
    },

    alternates: {
        canonical: `${siteConfig.url}/de`,
        languages: {
            "en-US": siteConfig.url,
            "en-GB": siteConfig.url,
            "de-DE": `${siteConfig.url}/de`,
        },
    },

    category: "Marketing Agentur",
};

export default function GermanLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const organizationSchema = generateOrganizationSchema();
    const serviceSchema = generateProfessionalServiceSchema();

    return (
        <html lang="de">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />
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
