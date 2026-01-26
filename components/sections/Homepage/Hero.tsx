"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  TrendingUp,
  ArrowUpCircle,
  Star,
  Zap,
} from "react-feather";

export default function Hero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const trustBadgeVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const gifVariants = {
    hidden: { opacity: 0, y: 50, rotate: -8 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: -4,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 0.3
      }
    }
  };

  const rightGifVariants = {
    hidden: { opacity: 0, y: 50, rotate: 8 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 4,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 0.3
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
        delay: 0.5
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >

      {/* BACKGROUND GRADIENT GLOW */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[140px]" />

      {/* LEFT GIF */}
      <motion.div
        className="pointer-events-none absolute left-16 top-[70%] hidden -translate-y-[50%] lg:block"
        variants={gifVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div
          className="
              relative
              rotate-[-4deg]
              rounded-3xl
              border border-white/10
              bg-white/5
              p-2
              shadow-[0_30px_80px_rgba(59,130,246,0.25)]
              backdrop-blur
            "
        >
          <img
            src="/gifs/scroll-gif1.gif"
            alt=""
            className="
                w-[260px]
                rounded-2xl
              "
          />
          {/* glow layer */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-500/20 blur-2xl" />
        </div>
      </motion.div>

      {/* RIGHT GIF */}
      <motion.div
        className="pointer-events-none absolute right-16 top-[70%] hidden -translate-y-[40%] lg:block"
        variants={rightGifVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div
          className="
              relative
              rotate-[4deg]
              rounded-3xl
              border border-white/10
              bg-white/5
              p-2
              shadow-[0_30px_80px_rgba(99,102,241,0.25)]
              backdrop-blur
            "
        >
          <img
            src="/gifs/scroll-gif2.gif"
            alt=""
            className="
                w-[260px]
                rounded-2xl
              "
          />
          {/* glow layer */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-indigo-500/20 blur-2xl" />
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >

          {/* TRUST BADGE */}
          <motion.div
            className="mb-6 mt-15 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-blue-400 backdrop-blur"
            variants={trustBadgeVariants}
          >
            {/* <TrendingUp size={14} />
            Trusted by 500+ brands */}
          </motion.div>

          {/* HEADLINE - SEO Optimized for Health & Wellness bottom-of-funnel keywords */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Scale Your Health & Wellness Brand to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.5em] -mr-[0.5em] clip-fix inline-block">
              3x ROAS
            </span>{" "}
            <br className="hidden sm:block" />
            with Performance-Driven UGC
          </motion.h1>

          {/* SUBHEADLINE - Supporting keywords: VSL, AI creatives, supplement brands */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 font-body leading-relaxed"
          >
            Data-backed UGC, AI video ads & VSL production that drive revenue for supplement and wellness brands.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={ctaVariants}
            className="mt-10 flex w-full flex-col items-center gap-6"
          >
            <div className="flex w-full flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">

              <a
                href="/packages"
                className="font-ui group flex w-full items-center justify-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 sm:px-12 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/40 active:scale-95 sm:w-auto"
              >
                <ArrowUpCircle
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] transition-all duration-300 group-hover:rotate-90"
                />
                <span>Explore Ad Packages</span>
              </a>

              <a
                href="/ai-ugc"
                className="font-ui group flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 sm:px-12 sm:py-4 text-sm sm:text-base font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95 sm:w-auto"
              >
                <Zap
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] transition-all duration-300 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
                />
                <span>Get AI UGC Creatives</span>
              </a>
            </div>

            {/* SOCIAL PROOF */}
            <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur sm:py-3">
              <div className="flex -space-x-2">
                <img src="/avatars/avatar1.jpg" className="h-8 w-8 rounded-full border border-black" />
                <img src="/avatars/avatar2.jpg" className="h-8 w-8 rounded-full border border-black" />
                <img src="/avatars/avatar3.jpg" className="h-8 w-8 rounded-full border border-black" />
                <img src="/avatars/avatar4.jpg" className="h-8 w-8 rounded-full border border-black" />
              </div>

              <div className="text-sm text-zinc-300">
                <span className="font-medium text-white">500+</span> Happy Clients
              </div>

              <div className="hidden h-4 w-px bg-white/20 sm:block" />

              <div className="flex items-center gap-1 text-sm text-zinc-300">
                <span className="font-medium text-white">4.9</span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}