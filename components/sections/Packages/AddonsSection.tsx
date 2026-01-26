"use client";

import { motion } from "framer-motion";
import { Clock, RefreshCw, Layout, Mic } from "lucide-react";
import CustomQuoteSection from "./CustomQuoteSection";

const addons = [
    {
        title: "Rush Delivery (24hr)",
        price: "+$100",
        icon: <Clock className="w-6 h-6" />,
        description: "Get your creatives in record time."
    },
    {
        title: "Additional Revision",
        price: "+$50",
        icon: <RefreshCw className="w-6 h-6" />,
        description: "Extra round of refinements."
    },
    {
        title: "Vertical + Horizontal",
        price: "+$75",
        icon: <Layout className="w-6 h-6" />,
        description: "Optimized for all platforms."
    },
    {
        title: "Voiceover (Professional)",
        price: "+$100",
        icon: <Mic className="w-6 h-6" />,
        description: "Professional grade narration."
    }
];

export default function AddonsSection() {
    return (
        <section className="py-20 bg-black overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-bold text-white leading-tight tracking-tight"
                    >
                        Available{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.1em] -mr-[0.1em] clip-fix inline-block">
                            Add-ons
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 max-w-2xl mx-auto"
                    >
                        Customize your package with these optional extras.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {addons.map((addon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative group p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.08]"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                                {addon.icon}
                            </div>
                            <h3 className="font-heading text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white mb-2">
                                {addon.title}
                            </h3>
                            <p className="font-body text-zinc-500 text-sm mb-6 leading-relaxed">
                                {addon.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="font-heading font-extrabold text-blue-400 text-xl">
                                    {addon.price}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <CustomQuoteSection />
            </div>
        </section>
    );
}
