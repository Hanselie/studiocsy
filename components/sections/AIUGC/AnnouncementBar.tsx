"use client";

import { motion } from "framer-motion";

export default function AnnouncementBar() {
    return (
        <div className="relative z-50 bg-blue-600 py-2.5 text-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 px-6"
            >
                <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    🚀
                </motion.span>
                <p className="text-sm font-bold tracking-wide text-white font-ui uppercase">
                    New AI UGC ads now available — <span className="underline decoration-white/30 underline-offset-4">Try today!</span>
                </p>
            </motion.div>
        </div>
    );
}
