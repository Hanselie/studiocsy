"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CustomQuoteSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-b from-white/5 to-transparent rounded-2xl sm:rounded-[3rem] p-6 sm:p-16 border border-white/10 mt-12 sm:mt-24"
        >
            <h2 className="font-heading text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-extrabold text-white mb-6">Need a Custom Solution?</h2>
            <p className="font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 max-w-2xl mx-auto mb-10">
                For high-volume brands or unique creative requirements, we offer tailored packages designed to meet your specific growth goals.
            </p>
            <div className="flex justify-center">
                <Link
                    href="/contact"
                    className="font-ui group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 sm:px-10 sm:py-5 text-sm sm:text-lg font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20"
                >
                    Get Custom Quote
                    <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
                </Link>
            </div>
        </motion.div>
    );
}
