"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videoGrid = [
    {
        url: "/portofolio/ugc/ugc-01.mp4",
        poster: "",
        type: "ugc"
    },
    {
        url: "/portofolio/ai-ugc/ai-01.mp4",
        poster: "",
        type: "ai"
    },
    {
        url: "/portofolio/ai-ugc/ai-02.mp4",
        poster: "",
        type: "ai"
    },
    {
        url: "/portofolio/ai-ugc/ai-03.mp4",
        poster: "",
        type: "ai"
    }
];

export default function AIShowcase() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center mb-20 px-4">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="font-heading text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-extrabold text-white leading-tight tracking-tight mb-6"
                    >
                        See Our{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.1em] -mr-[0.1em] clip-fix inline-block">
                            AI UGC
                        </span>{" "}
                        In Action
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Watch how our AI-generated UGC creators showcase products with authentic, scroll-stopping content that converts.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:gap-12">
                    {videoGrid.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[9/16] max-h-[300px] sm:max-h-[450px] lg:max-h-[600px] mx-auto overflow-hidden rounded-xl sm:rounded-[2.5rem] border border-white/10 bg-zinc-900 shadow-2xl">

                                {/* PLAY ICON OVERLAY (HOVER) */}
                                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <Play size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
                                    </div>
                                </div>

                                <video
                                    src={video.url}
                                    loop
                                    playsInline
                                    controls
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
