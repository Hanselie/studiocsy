"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, CheckCircle2, TrendingUp, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AIHero() {
    return (
        <section className="relative min-h-screen pt-20 pb-32 overflow-hidden bg-black">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT: CONTENT */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-sm font-bold text-blue-400 backdrop-blur-md mb-8 border border-blue-500/20"
                        >
                            <CheckCircle2 size={14} />
                            AI UGC Platform
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-heading text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-extrabold text-white leading-[1.1] tracking-tight"
                        >
                            Custom Your{" "}
                            <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.2em] -mr-[0.2em] clip-fix inline-block">
                                AI UGC
                            </span>{" "}
                            Influencer Holding Your Product
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-8 font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            We help you scale your UGC ads production with infinite speed. No shipping, no wait times, just high-converting content on demand.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
                        >
                            <Link
                                href="/contact"
                                className="group font-ui relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 sm:px-10 sm:py-5 text-sm sm:text-lg font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:shadow-blue-600/50 hover:scale-105 active:scale-95 outline-none ring-offset-black focus:ring-2 focus:ring-blue-500"
                            >
                                Get Started to Schedule a Demo
                                <ArrowUpRight size={16} className="sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT: DASHBOARD VISUAL */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex-1 relative w-full max-w-[400px] sm:max-w-[600px] lg:max-w-none mx-auto lg:mx-0"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-3 sm:p-8 overflow-hidden shadow-2xl">
                            {/* Dashboard Content Mockup */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="h-4 w-32 bg-white/10 rounded-full" />
                                    <div className="flex gap-2">
                                        <div className="h-8 w-8 rounded-full bg-blue-500/20 border border-blue-400/30" />
                                        <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: "Active", val: "24", icon: <Users size={12} />, color: "text-blue-400" },
                                        { label: "Delivered", val: "156", icon: <CheckCircle2 size={12} />, color: "text-green-400" },
                                        { label: "Savings", val: "$4.2K", icon: <TrendingUp size={12} />, color: "text-indigo-400" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                            <div className={`flex justify-center mb-1 ${stat.color}`}>{stat.icon}</div>
                                            <div className="text-lg font-bold text-white">{stat.val}</div>
                                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Visual List */}
                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10 group hover:border-blue-500/30 transition-colors">
                                            <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                <Play size={16} fill="currentColor" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-3 w-1/2 bg-white/20 rounded-full mb-2" />
                                                <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                                            </div>
                                            <div className="text-[10px] text-blue-400 font-bold px-2 py-1 rounded bg-blue-400/10">READY</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -right-4 sm:bottom-12 sm:right-12 p-6 rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl border border-white/20"
                            >
                                <ShieldCheck size={32} className="text-white mb-2" />
                                <div className="text-white text-xl font-bold">100% Scalable</div>
                                <div className="text-white/70 text-sm">No Creator Shipping</div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
