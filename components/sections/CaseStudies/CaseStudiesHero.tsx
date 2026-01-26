"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm border border-blue-500/20 mb-8"
                    >
                        <Sparkles size={14} />
                        Proven Results & Creative Excellence
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-heading text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-extrabold text-white leading-[1.1] tracking-tight mb-8"
                    >
                        Our <br />
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.1em] -mr-[0.1em] clip-fix inline-block">
                            Portfolio
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 leading-relaxed mb-12"
                    >
                        Explore our collection of high-converting ads, from VSLs and UGC to AI-driven creatives that have helped brands scale to new heights.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:scale-[1.05] hover:shadow-blue-600/40 active:scale-95"
                        >
                            Get Similar Creatives
                            <ArrowRight size={16} className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
