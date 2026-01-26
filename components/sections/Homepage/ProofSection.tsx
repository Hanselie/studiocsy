"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "react-feather";

const stats = [
  { value: "10,000+", label: "Creatives shipped" },
  { value: "500+", label: "Brands scaled" },
  { value: "3.2x", label: "Average ROAS lift" },
  { value: "24h", label: "Fastest delivery" },
];

export default function ProofSection() {
  return (
    <section id="proof-section" className="relative overflow-hidden bg-black py-36">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <h2 className="font-heading text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-extrabold leading-tight tracking-tight text-white">
            Performance isn’t claimed.
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.5em] -mr-[0.5em] clip-fix inline-block">
              It’s proven.
            </span>
          </h2>

          <p className="mt-6 font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 leading-relaxed">
            We’ve helped hundreds of e-commerce brands scale with creatives built
            on data — not opinions.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                rounded-3xl
                border border-white/10
                bg-white/5
                px-8 py-10
                backdrop-blur
                transition
                duration-300
              "
            >
              {/* glow on hover */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-blue-500/0 blur-xl transition group-hover:bg-blue-500/10" />

              <div className="font-heading text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-extrabold text-white">
                {stat.value}
              </div>
              <div className="mt-2 font-ui text-xs font-bold uppercase tracking-widest text-zinc-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-20 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
          {/* PRIMARY CTA */}
          <a
            href="/contact"
            className="
              font-ui
              group
              relative
              inline-flex
              items-center
              gap-2
              overflow-hidden
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-indigo-500
              px-10 py-5
              text-lg
              font-bold
              text-white
              shadow-xl
              shadow-blue-600/20
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-blue-600/40
              active:scale-95
            "
          >
            Book a free strategy call
            <ArrowUpRight size={18} />
          </a>


          {/* SECONDARY CTA */}
          <a
            href="#results-section"
            className="font-ui text-base font-semibold text-zinc-400 transition hover:text-white"
          >
            Or explore real results →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
