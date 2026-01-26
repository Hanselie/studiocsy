import type { Metadata } from "next";
import PackagesContent from "@/components/sections/Packages/PackagesContent";

// Packages SEO - Bottom-of-funnel pricing/packages page
export const metadata: Metadata = {
    title: "UGC & VSL Production Packages for Health Brands",
    description: "Performance-driven creative packages engineered for ROAS. Get UGC video ads, AI UGC, and VSL production pricing for supplement and wellness brands.",
    keywords: [
        "performance creative packages",
        "VSL production pricing",
        "UGC ad packages health brands",
        "UGC agency pricing",
    ],
};

export default function PackagesPage() {
    return <PackagesContent />;
}
