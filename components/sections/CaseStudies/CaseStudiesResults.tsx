"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, Zap, Clock, ShieldCheck, ChevronRight } from "lucide-react";

const STATS = [
    { label: "Creatives Delivered", value: "10,000+", icon: Zap, color: "text-blue-400" },
    { label: "Happy Brands", value: "500+", icon: Users, color: "text-indigo-400" },
    { label: "Average ROAS Lift", value: "3.2x", icon: TrendingUp, color: "text-emerald-400" },
    { label: "Fastest Delivery", value: "24hrs", icon: Clock, color: "text-amber-400" },
];

const RESULTS = [
    {
        name: "Angelo Vilardo",
        duration: "20 weeks",
        image: "/results/angelo.webp",
        quote: "We'd been stuck around a 1.5 ROAS on Meta for months. Two weeks in, their creative tests started landing and by week 8 we were at 4.0 ROAS with CPA down 38% on the same spend.",
    },
    {
        name: "Alex Philip",
        duration: "1 month",
        image: "/results/alex.webp",
        quote: "Our UGC looked homemade and wasn't scaling. After that, CSYMedia rebuilt our hooks and angles with AI Influencer, click-through doubled and we finally got more profitable campaign running.",
    },
    {
        name: "Joe Hume",
        duration: "3 months",
        image: "/results/joe.webp",
        quote: "We were nervous to increase budget. They set a creative testing cadence and helped us push from $20k to $100k/mo while holding CPA under $30.",
    },
    {
        name: "Brent Swanson",
        duration: "2 months",
        image: "/results/brent.webp",
        quote: "Thanks so much for all your work we're super happy with the results. Booked time to plan next steps.",
    },
    {
        name: "Robin Rich",
        duration: "30 days",
        image: "/results/robin.webp",
        quote: "30 days in, your creatives hit 3.54 ROAS and brought CPA down to $57.88 (we're usually around $130). Nicely done team.",
    },
    {
        name: "Satwant Singgih",
        duration: "6 weeks",
        image: "/results/satwant.webp",
        quote: "One clip drove 76 bookings and cut our cost by 50%. Excited to see how the rest scales.",
    },
];

export default function CaseStudiesResults() {
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [dragWidth, setDragWidth] = useState(0);
    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 400, damping: 40 });

    useEffect(() => {
        if (!outerRef.current || !innerRef.current) return;
        const updateWidth = () => {
            setDragWidth(innerRef.current!.scrollWidth - outerRef.current!.clientWidth);
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const handleWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            const newX = x.get() - e.deltaX;
            x.set(Math.max(-dragWidth, Math.min(0, newX)));
        }
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-extrabold text-white mb-6 leading-tight tracking-tight"
                    >
                        Results that{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.5em] -mr-[0.5em] clip-fix inline-block">
                            speak for themselves
                        </span>
                    </motion.h2>
                    <p className="font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Data-driven success stories from brands that transformed their performance with our engineered creatives.
                    </p>
                </div>

                {/* STATS GRID */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {STATS.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                        >
                            <stat.icon className={`w-8 h-8 mb-4 ${stat.color}`} />
                            <div className="text-3xl font-extrabold text-white mb-2">{stat.value}</div>
                            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* CAROUSEL */}
                <div className="relative">
                    <div
                        ref={outerRef}
                        className="overflow-hidden cursor-grab active:cursor-grabbing"
                        onWheel={(e) => handleWheel(e as any)}
                    >
                        <motion.div
                            ref={innerRef}
                            drag="x"
                            dragConstraints={{ left: -dragWidth, right: 0 }}
                            style={{ x: springX }}
                            className="flex gap-8 pb-12"
                        >
                            {RESULTS.map((result) => (
                                <motion.div
                                    key={result.name}
                                    whileHover={{ y: -10 }}
                                    className="min-w-[300px] sm:min-w-[420px] rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-lg flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{result.name}</h3>
                                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Scaled in {result.duration}</p>
                                        </div>
                                        <div className="bg-blue-500/10 p-2 rounded-xl">
                                            <ShieldCheck size={20} className="text-blue-400" />
                                        </div>
                                    </div>

                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mb-6 bg-zinc-900">
                                        <img src={result.image} alt={result.name} className="w-full h-full object-contain p-4" />
                                    </div>

                                    <p className="font-body text-zinc-300 italic mb-6 leading-relaxed flex-grow">
                                        &quot;{result.quote}&quot;
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-zinc-500 text-sm font-medium animate-pulse">Swipe or drag to explore success stories</p>
                </div>
            </div>
        </section>
    );
}
