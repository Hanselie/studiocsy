import type { Metadata } from "next";
import Hero from "@/components/sections/Homepage/Hero";
import AboutUs from "@/components/sections/Homepage/AboutUs";
import BrandsCarousel from "@/components/sections/Homepage/BrandsCarousel";
import WorkPortfolio from "@/components/sections/Homepage/WorkPortofolio";
import PackagesSection from "@/components/sections/Homepage/PackagesSection";
import ProofSection from "@/components/sections/Homepage/ProofSection";
import ResultsSection from "@/components/sections/Homepage/ResultsSection";
import NewPackageIntro from "@/components/sections/Homepage/NewPackageIntro";

// German Homepage SEO
export const metadata: Metadata = {
    title: "UGC & AI Creative Agentur für Gesundheitsmarken",
    description: "Skalieren Sie Ihre Wellness-Marke auf 3x ROAS mit performance-gesteuerten UGC, AI Video Ads & VSL Produktion. Vertraut von 500+ Gesundheits- und Supplement-Marken.",
};

export default function GermanHome() {
    return (
        <main>
            {/* Note: Components can be translated or reused from EN version */}
            <Hero />
            <BrandsCarousel />
            <AboutUs />
            <ProofSection />
            <WorkPortfolio />
            <PackagesSection />
            <NewPackageIntro />
            <ResultsSection />
        </main>
    );
}
