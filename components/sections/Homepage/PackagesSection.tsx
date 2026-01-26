"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star, X } from "react-feather";
import { useRef, useState } from "react";

const packages = [
  {
    id: "vsl",
    title: "VSL Ad Package",
    desc: "High-converting VSL creatives engineered to scale cold traffic. Delivery time: 5-7 days.",
    price: "Starting at $100",
    features: [
      "3 Scroll-stopping hook",
      "Script & Full Indepth Research Angle",
      "Multiple aspect ratios included",
      "3 revision rounds",
    ],
    popular: false,
  },
  {
    id: "website",
    title: "Shopify Website/Advertorial Design",
    desc: "High-converting landing pages and advertorials that drive sales.  Delivery time: 5-7 days.",
    price: "$200 / Product Page",
    features: [
      "Custom product page design",
      "Mobile-responsive layout",
      "Conversion-optimized structure",
      "Fast loading optimization",
      "2 revision rounds",
    ],
    popular: true,
  },
  {
    id: "ugc",
    title: "AI UGC Package",
    desc: "AI-powered UGC that feels native, authentic, and converts.  Delivery time: 5-7 days.",
    price: "Starting at $100",
    features: [
      "3 Scroll-stopping hook",
      "Script & Full Indepth Research Angle",
      "Professional editing & effects",
      "Multiple aspect ratios included",
      "3 revision rounds",
    ],
    popular: false,
  },
  {
    id: "static",
    title: "Static Ad Package",
    desc: "Clean, high-impact statics designed for paid social.  Delivery time: 3-5 days.",
    price: "Starting at $40",
    features: [
      "3 Scroll-stopping variations",
      "Custom graphics & layouts",
      "Concept & Full Indepth Research Angle",
      "A/B testing variations",
      "All ad platform sizes",
      "3 revision rounds",
    ],
    popular: false,
  },
];

export default function PackagesSection({ showViewAll = true, ctaHref = "/packages" }: { showViewAll?: boolean; ctaHref?: string }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState<typeof packages[0] | null>(null);

  return (
    <section ref={sectionRef} className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* background glow */}
      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-24 text-center"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-bold text-white leading-tight tracking-tight">
            Ad Packages That{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.1em] -mr-[0.1em] clip-fix inline-block">
              Convert
            </span>
          </h2>
          <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400">
            Designed for brands ready to scale, not gamble.
          </p>
        </motion.div>

        {/* PACKAGES LIST */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex justify-center"
            >
              <motion.div
                layoutId={`card-${pkg.id}`}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => setActiveCard(pkg)}
                className={`relative w-full h-full cursor-pointer rounded-2xl border p-5 sm:p-8 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col
                  ${pkg.popular
                    ? "border-blue-500/30 bg-gradient-to-b from-blue-500/5 to-white/5"
                    : "border-white/10 bg-white/5"
                  }
                `}
              >

                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    {pkg.popular && (
                      <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-blue-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        <Star size={10} fill="currentColor" />
                        Most Popular
                      </div>
                    )}
                    <h3 className="font-heading text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white">
                      {pkg.title}
                    </h3>
                    <p className="mt-2 sm:mt-4 font-body text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-zinc-400 leading-relaxed">
                      {pkg.desc}
                    </p>

                    <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <span className="font-heading text-base font-bold text-white">
                      {pkg.price}
                    </span>
                    <span className="font-ui text-xs font-semibold text-blue-400">
                      View details →
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
          {/* VIEW ALL PACKAGES CTA */}
          {showViewAll && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-20 text-center"
            >
              <a
                href="/packages"
                className="
                font-ui
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/5
                px-6
                sm:px-10
                py-3
                sm:py-4
                text-sm
                sm:text-base
                font-bold
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:bg-white/10
                hover:scale-105
                active:scale-95
                shadow-lg
              "
              >
                View All Packages
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          )}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              layoutId={`card-${activeCard.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90%] sm:w-full max-w-2xl rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-10 mx-4"
            >
              <button
                onClick={() => setActiveCard(null)}
                className="absolute right-6 top-6 text-zinc-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl sm:text-3xl font-semibold text-white">
                {activeCard.title}
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400">{activeCard.desc}</p>

              <ul className="mt-6 space-y-3 text-zinc-300">
                {activeCard.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
                <span className="text-base sm:text-lg font-medium text-white">
                  {activeCard.price}
                </span>
                <a
                  href={ctaHref}
                  className="
                    font-ui
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-500
                    px-6 py-3
                    sm:px-8 sm:py-4
                    text-sm
                    sm:text-base
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
                    Ready to Scale
                    <ArrowUpRight size={18} />
                  </span>
                </a>


              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
