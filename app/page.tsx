import type { Metadata } from "next";
import Hero from "@/components/sections/Homepage/Hero";
import AboutUs from "@/components/sections/Homepage/AboutUs";
import BrandsCarousel from "@/components/sections/Homepage/BrandsCarousel";
import WorkPortfolio from "@/components/sections/Homepage/WorkPortofolio";
import PackagesSection from "@/components/sections/Homepage/PackagesSection";
import ProofSection from "@/components/sections/Homepage/ProofSection";
import ResultsSection from "@/components/sections/Homepage/ResultsSection";
import NewPackageIntro from "@/components/sections/Homepage/NewPackageIntro";
import { generatePageMetadata } from "@/lib/seo-config";

// Homepage SEO - Bottom-of-funnel keywords for Health & Wellness UGC agency
export const metadata: Metadata = generatePageMetadata({
  title: "UGC & AI Creative Agency for Health Brands | Studiocsy",
  description: "Scale your wellness brand to 3x ROAS with performance-driven UGC, AI video ads & VSL production. Trusted by 500+ health & supplement brands in US, UK & Germany.",
  path: "/",
});

export default function Home() {
  return (
    <main>
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
