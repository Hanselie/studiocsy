import type { Metadata } from "next";
import AIHero from "@/components/sections/AIUGC/Hero";
import AIFeatures from "@/components/sections/AIUGC/Features";
import AIShowcase from "@/components/sections/AIUGC/Showcase";
import AIBottomCTA from "@/components/sections/AIUGC/BottomCTA";
import Calendly from "@/components/sections/Homepage/Calendly";

// AI UGC Page SEO - Targeting AI UGC keywords for wellness brands
export const metadata: Metadata = {
    title: "AI UGC Video Ads for Wellness Brands | Studiocsy",
    description: "AI-generated UGC that outperforms traditional creator content. Scale your health brand with AI UGC video ads at 10x the speed and 1/3 the cost.",
    keywords: [
        "AI UGC video ads for wellness",
        "AI generated UGC ads",
        "UGC vs AI UGC for health products",
        "AI UGC platforms",
    ],
};

export default function AIUGCPage() {
    return (
        <main className="bg-black min-h-screen selection:bg-blue-500/30">
            <div className="pt-0 sm:pt-4">
                <AIHero />
                <AIFeatures />
                <AIShowcase />
                <AIBottomCTA />
            </div>

            {/* Global Footer (Implicitly part of the layout or usually added here) */}
            <footer className="py-12 border-t border-white/5 bg-black text-center">
                <p className="text-zinc-500 font-ui text-xs tracking-widest uppercase">
                    © {new Date().getFullYear()} StudioCSY. All Rights Reserved.
                </p>
            </footer>
        </main>
    );
}
