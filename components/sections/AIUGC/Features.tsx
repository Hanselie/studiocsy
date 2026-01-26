"use client";

import { motion } from "framer-motion";
import { Zap, Target, BarChart3, Layers } from "lucide-react";

const features = [
    {
        title: "Specialized, Not Generic",
        desc: "We don't do 'general' AI. Our platform is trained on high-converting ad frameworks to ensure believability.",
        icon: <Target className="w-6 h-6" />,
        color: "bg-blue-400/10 text-blue-400"
    },
    {
        title: "Health & Wellness Niche",
        desc: "Built specifically for brands that need to explain benefits and build deep trust with their audience.",
        icon: <Layers className="w-6 h-6" />,
        color: "bg-indigo-400/10 text-indigo-400"
    },
    {
        title: "Fast Turnaround Time",
        desc: "Scale your creative production from weeks to minutes. No creators to ship to, no logistics to manage.",
        icon: <Zap className="w-6 h-6" />,
        color: "bg-blue-400/10 text-blue-400"
    },
    {
        title: "Results-Driven Quality",
        desc: "Every AI influencer is optimized for lighting, sound, and delivery to match top 1% UGC performers.",
        icon: <BarChart3 className="w-6 h-6" />,
        color: "bg-indigo-400/10 text-indigo-400"
    }
];

export default function AIFeatures() {
    return (
        <section className="py-24 bg-[#050608] relative">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-extrabold text-white leading-tight tracking-tight"
                    >
                        Everything You Need <br />
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.2em] -mr-[0.2em] clip-fix inline-block">
                            To Scale
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 max-w-2xl mx-auto"
                    >
                        Our platform gives you full control over your UGC production workflow, designed specifically for performance marketing.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:border-blue-500/30 group"
                        >
                            <div className={`mb-6 h-12 w-12 rounded-2xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="font-heading text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="font-body text-zinc-500 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
