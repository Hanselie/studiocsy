"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import PackagesSection from "@/components/sections/Homepage/PackagesSection";
import NewPackageIntro from "@/components/sections/Homepage/NewPackageIntro";
import AddonsSection from "@/components/sections/Packages/AddonsSection";

export default function PackagesContent() {
    return (
        <main className="bg-black pt-32 min-h-screen">
            {/* BACKGROUND GRADIENT GLOW */}
            <div className="fixed -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* HEADER */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400 backdrop-blur mb-6">
                            <TrendingUp size={14} />
                            Engineered for ROAS
                        </span>
                        <h1 className="font-heading text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-extrabold text-white leading-tight tracking-tight">
                            Premium Ad <br />
                            <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.1em] -mr-[0.1em] pb-[0.2em] -mb-[0.2em] clip-fix inline-block">
                                Packages
                            </span>
                        </h1>
                        <p className="mt-8 max-w-2xl font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 leading-relaxed">
                            We don&apos;t just make videos. We engineer creative assets designed to crush your CPA and scale your brand to the moon.
                        </p>
                    </motion.div>
                </div>

                {/* REUSE SECTIONS BUT ADAPTED */}
                <div className="space-y-32 pb-32">
                    <PackagesSection showViewAll={false} ctaHref="/contact" />

                    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl overflow-hidden">
                        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 bg-blue-500/20 blur-[100px]" />
                        <NewPackageIntro />

                        <AddonsSection />

                    </div>

                </div>
            </div>
        </main>
    );
}
