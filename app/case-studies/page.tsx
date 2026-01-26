import type { Metadata } from "next";
import CaseStudiesHero from "@/components/sections/CaseStudies/CaseStudiesHero";
import CaseStudiesPortfolio from "@/components/sections/CaseStudies/CaseStudiesPortfolio";
import CaseStudiesResults from "@/components/sections/CaseStudies/CaseStudiesResults";
import Calendly from "@/components/sections/Homepage/Calendly";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo-config";

// Case Studies SEO - Social proof for wellness brand success stories
export const metadata: Metadata = {
    title: "Case Studies: Health & Wellness Brand Success Stories",
    description: "See how supplement and wellness brands achieved 3x ROAS with our UGC & VSL production. Real results from real health brands in the US, UK & Germany.",
    keywords: [
        "best UGC agency for wellness brands",
        "health brand case studies",
        "supplement brand success stories",
        "UGC results for wellness brands",
    ],
};

export default function CaseStudiesPage() {
    // JSON-LD schema for case studies collection
    const caseStudiesSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Case Studies - Health & Wellness Brands",
        description: "Success stories from supplement and wellness brands using UGC & VSL production",
        url: `${siteConfig.url}/case-studies`,
    };

    return (
        <>
            {/* Schema markup for case studies */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(caseStudiesSchema),
                }}
            />
            <main className="bg-black min-h-screen">
                <CaseStudiesHero />
                <CaseStudiesPortfolio />
                <CaseStudiesResults />
                <Calendly />
            </main>
        </>
    );
}
