"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";

export default function AboutStudioCSY() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // subtle color reveal
  const accentColor = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    ["#71717a", "#a78bfa", "#ffffff"]
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about-us"
      ref={ref}
      className="relative overflow-hidden bg-black py-40"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-zinc-900/60 to-black" />

      {/* soft glow */}
      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-28 lg:grid-cols-2">

          {/* LEFT — STORY */}
          <div className="space-y-10">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-widest text-blue-400"
            >
              About StudioCSY
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-heading text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-extrabold text-white leading-tight tracking-tight"
            >
              We saw the future of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent italic pr-[0.5em] -mr-[0.5em] clip-fix inline-block">
                ad creatives
              </span>{" "}
              before everyone else.
            </motion.h2>

            <motion.p
              style={{ color: accentColor }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-body max-w-xl text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed font-medium"
            >
              While agencies were still pushing basic UGC edits, we built a
              system combining AI-driven storytelling, audience psychology,
              and data from millions in ad spend to engineer winners, not
              guess them.
            </motion.p>
          </div>

          {/* RIGHT — PROOF & VALUE */}
          <div className="flex flex-col justify-center gap-8 sm:gap-12">

            {/* PAIN */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-body text-[13px] sm:text-[14px] leading-relaxed text-zinc-300 italic"
            >
              Your ads are dying. Costs keep rising. Your best VSL is slowing
              down. Meanwhile, competitors scale mediocre products simply
              because they test with better systems.
            </motion.p>

            {/* ACHIEVEMENT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur"
            >
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-400">
                One breakthrough moment
              </p>

              <p className="mt-4 text-[16px] sm:text-[18px] md:text-[20px] font-medium text-white">
                A single customer comment unlocked a new angle
                scaling a brand from{" "}
                <span className="text-indigo-400">$150K/month</span> to{" "}
                <span className="text-indigo-400">$1.5M in 6 months</span>,
                with <span className="text-indigo-400">$300K profit</span> in
                one month.
              </p>
            </motion.div>

            {/* POSITIONING */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-zinc-300"
            >
              Full-service. Data-driven. Zero guesswork. We handle scripts,
              AI UGC, voice cloning, B-roll, and testing strategy, so you get
              lower CPAs, higher ROAS, and creatives built to scale.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#proof-section"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                font-ui
                group
                relative
                inline-flex
                w-fit
                items-center
                gap-2
                sm:gap-3
                overflow-hidden
                rounded-full
                border
                border-blue-600
                px-6
                sm:px-8
                py-3
                sm:py-4
                text-sm
                sm:text-base
                font-bold
                text-blue-400
                transition-shadow
                duration-300
                group-hover:shadow-lg
                group-hover:shadow-blue-600/50
              "
            >
              {/* SLIDE FILL */}
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-500
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:translate-x-0
                "
              />

              {/* TEXT */}
              <span
                className="
                  relative
                  z-10
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                Ready to scale?
              </span>

              {/* ARROW */}
              <ArrowUpRight
                size={18}
                className="
                  relative
                  z-10
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-white
                "
              />
            </motion.a>


          </div>
        </div>
      </div>
    </section>
  );
}
