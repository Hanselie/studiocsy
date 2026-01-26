"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const CATEGORIES = [
    {
        id: "vsl",
        title: "VSL Creatives",
        description: "High-converting video sales letters designed for maximum engagement.",
        items: [
            "/portofolio/vsl/vsl-01.mp4",
            "/portofolio/vsl/vsl-02.mp4",
            "/portofolio/vsl/vsl-03.mp4",
        ],
        type: "video"
    },
    {
        id: "ai-ugc",
        title: "AI UGC",
        description: "Authentic and scalable AI-generated user content that converts.",
        items: [
            "/portofolio/ai-ugc/ai-01.mp4",
            "/portofolio/ai-ugc/ai-02.mp4",
            "/portofolio/ai-ugc/ai-03.mp4",
        ],
        type: "video"
    },
    {
        id: "ugc",
        title: "UGC",
        description: "Real creator content that builds trust and drives action.",
        items: [
            "/portofolio/ugc/ugc-01.mp4",
            "/portofolio/ugc/ugc-02.mp4",
            "/portofolio/ugc/ugc-03.mp4",
        ],
        type: "video"
    },
    {
        id: "static",
        title: "Static Creatives",
        description: "Eye-catching image-based ads for social and search platforms.",
        items: [
            "/portofolio/images/img-01.png",
            "/portofolio/images/img-02.png",
            "/portofolio/images/img-03.png",
            "/portofolio/images/img-04.png",
            "/portofolio/images/img-05.png",
            "/portofolio/images/img-06.png",
            "/portofolio/images/img-07.png",
            "/portofolio/images/img-08.png",
            "/portofolio/images/img-09.png",
            "/portofolio/images/img-10.png",
            "/portofolio/images/img-11.png",
            "/portofolio/images/img-12.png",
            "/portofolio/images/img-13.png",
            "/portofolio/images/img-14.png",
        ],
        type: "image"
    }
];

export default function CaseStudiesPortfolio() {
    return (
        <section className="py-20 bg-black">
            <div className="mx-auto max-w-7xl px-6">
                {CATEGORIES.map((category, catIdx) => (
                    <div key={category.id} className="mb-32 last:mb-0">
                        <div className="mb-12">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="font-heading text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-white mb-4"
                            >
                                {category.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 max-w-2xl"
                            >
                                {category.description}
                            </motion.p>
                        </div>

                        <div className={`grid gap-6 ${category.type === 'video'
                            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7'
                            }`}>
                            {category.items.map((src, idx) => (
                                <motion.div
                                    key={src}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group relative"
                                >
                                    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-xl transition-all duration-300 hover:border-blue-500/30 ${category.type === 'video' ? 'aspect-[9/16]' : 'aspect-square'
                                        }`}>
                                        {category.type === 'video' ? (
                                            <>
                                                <video
                                                    src={src}
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="h-full w-full object-cover"
                                                    onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                                                    onMouseOut={(e) => {
                                                        const video = e.target as HTMLVideoElement;
                                                        video.pause();
                                                        video.currentTime = 0;
                                                    }}
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity bg-black/20 pointer-events-none">
                                                    <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                                        <Play size={24} className="text-white fill-white ml-1" />
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <img
                                                src={src}
                                                alt={`${category.title} ${idx + 1}`}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        )}

                                        {/* Premium overlay/glow on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
