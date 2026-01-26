"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AIBottomCTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-black">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 sm:p-20 rounded-2xl sm:rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl relative overflow-hidden"
                >
                    {/* Subtle Glow */}
                    <div className="absolute top-0 right-0 h-40 w-40 bg-blue-500/10 blur-[60px]" />
                    <div className="absolute bottom-0 left-0 h-40 w-40 bg-indigo-500/10 blur-[60px]" />

                    <div className="relative z-10">
                        <motion.span
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-sm font-bold text-blue-400 mb-8"
                        >
                            <Sparkles size={14} />
                            Future-Proof Your Content
                        </motion.span>

                        <h2 className="font-heading text-[24px] sm:text-[32px] md:text-[48px] lg:text-[60px] font-extrabold text-white mb-8 leading-tight">
                            Ready to create your own <br />
                            <span className="italic pr-[0.1em] -mr-[0.1em] clip-fix">AI UGC Influencers?</span>
                        </h2>

                        <p className="font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join the future of performance creative. Scale faster, save more, and never worry about creator shipping again.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                            <Link
                                href="/contact"
                                className="group font-ui flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 sm:px-12 sm:py-6 text-sm sm:text-xl font-bold text-white shadow-2xl shadow-blue-600/30 transition-all hover:shadow-blue-600/50 hover:scale-105 active:scale-95"
                            >
                                Get Started with AI UGC
                                <ArrowUpRight size={16} className="sm:w-[22px] sm:h-[22px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
