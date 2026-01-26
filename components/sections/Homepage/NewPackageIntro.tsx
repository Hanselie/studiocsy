"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";

export default function NewPackageIntro() {
  return (
    <section className="relative overflow-hidden bg-[#0b0e14] py-20 lg:py-28 text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
              <Sparkles className="h-4 w-4" />
              New Package
            </span>

            <h2 className="mt-5 font-heading text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-extrabold leading-tight">
              Scaling Package{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent italic pr-[0.5em] -mr-[0.5em] clip-fix inline-block">
                Strategy
              </span>
            </h2>

            <p className="mt-5 font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 leading-relaxed">
              Unlock explosive growth with our proprietary VSL framework. Market research meets high-production to create ads that convert.
            </p>

            {/* BENEFITS */}
            <ul className="mt-6 space-y-3">
              {[
                "12 VSL Ads (3 hooks each)",
                "Free image concept bundle",
                "Access to vetted UGC creators",
                "Creative testing system",
                "Priority queue access",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex items-center gap-3 text-zinc-300 text-sm sm:text-base"
                >
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="
                    font-ui
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-500
                    px-8 py-4
                    text-base
                    font-bold
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-blue-600/40
                    active:scale-95
                    "
              >
                <span className="relative z-10 flex items-center gap-2">
                  I'm ready to scale up
                  <ArrowUpRight size={18} />
                </span>
              </a>

              <span className="text-sm text-zinc-500">
                Limited slots available
              </span>
            </div>

          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            {/* glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl opacity-40" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              {/* header */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-400">Active Campaigns</p>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
                  Live
                </span>
              </div>

              {/* campaigns */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { name: "Campaign 1", src: "/portofolio/images/img-01.png" },
                  { name: "Campaign 2", src: "/portofolio/images/img-02.png" },
                  { name: "Campaign 3", src: "/portofolio/images/img-03.png" },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-black/40 text-center text-sm text-zinc-300 transition-all duration-300 hover:border-blue-500/50"
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      <img
                        src={c.src}
                        alt={c.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                      {c.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* divider */}
              <div className="my-6 h-px bg-white/10" />

              {/* stats */}
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex justify-between">
                  <span>VSL Ads</span>
                  <span className="text-blue-400">12 Videos</span>
                </div>
                <div className="flex justify-between">
                  <span>Hooks per Video</span>
                  <span className="text-blue-400">3 Hooks</span>
                </div>
                <div className="flex justify-between">
                  <span>Image Concepts</span>
                  <span className="text-blue-400">3 Images</span>
                </div>
              </div>

              {/* badge */}
              <div className="mt-6 rounded-xl bg-blue-500/10 py-4 text-center">
                <p className="font-medium text-blue-400">Best Value</p>
                <p className="text-sm text-zinc-400">
                  Perfect for scaling brands
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
