"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const results = [
  {
    name: "Angelo Vilardo",
    duration: "20 weeks",
    image: "/results/angelo.webp",
    quote:
      "We'd been stuck around a 1.5 ROAS on Meta for months. Two weeks in, their creative tests started landing and by week 8 we were at 4.0 ROAS with CPA down 38% on the same spend. The weekly ideas + relatable edits were the difference.",
  },
  {
    name: "Alex Philip",
    duration: "1 month",
    image: "/results/alex.webp",
    quote:
      "Our UGC looked homemade and wasn't scaling. After that, CSYMedia rebuilt our hooks and angles with AI Influencer, click-through doubled and we finally got more profitable campaign running.",
  },
  {
    name: "Joe Hume",
    duration: "3 months",
    image: "/results/joe.webp",
    quote:
      "We were nervous to increase budget. They set a creative testing cadence and helped us push from $20k to $100k/mo while holding CPA under $30.",
  },
  {
    name: "Brent Swanson",
    duration: "2 months",
    image: "/results/brent.webp",
    quote:
      "Thanks so much for all your work we're super happy with the results. Booked time to plan next steps.",
  },
  {
    name: "Robin Rich",
    duration: "30 days",
    image: "/results/robin.webp",
    quote:
      "30 days in, your creatives hit 3.54 ROAS and brought CPA down to $57.88 (we're usually around $130). Nicely done team.",
  },
  {
    name: "Satwant Singgih",
    duration: "6 weeks",
    image: "/results/satwant.webp",
    quote:
      "One clip drove 76 bookings and cut our cost by 50%. Excited to see how the rest scales.",
  },
];

export default function ResultsSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);
  const x = useMotionValue(0);
  // Optional: add spring for smoother trackpad feeling
  const springX = useSpring(x, { stiffness: 400, damping: 40 });

  useEffect(() => {
    if (!outerRef.current || !innerRef.current) return;

    const updateWidth = () => {
      const outer = outerRef.current!;
      const inner = innerRef.current!;
      setDragWidth(inner.scrollWidth - outer.clientWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    const el = outerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        const currentX = x.get();
        const newX = currentX - e.deltaX;
        // Clamp between -dragWidth and 0
        x.set(Math.max(-dragWidth, Math.min(0, newX)));
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("resize", updateWidth);
      el.removeEventListener("wheel", handleWheel);
    };
  }, [dragWidth, x]);


  return (
    <section id="results-section" className="relative overflow-hidden bg-black py-36">
      {/* background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="font-heading text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-extrabold text-white leading-tight tracking-tight">
            Results that{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.1em] -mr-[0.1em] clip-fix inline-block">
              speak for themselves
            </span>
          </h2>
          <p className="mt-6 font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 leading-relaxed">
            Proof from brands that scaled with engineered creatives.
          </p>
        </div>

        {/* FADE EDGES */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-black/40 to-transparent" />

        {/* CAROUSEL WRAPPER */}
        <div
          ref={outerRef}
          className="relative overflow-hidden pt-16 -mt-16"
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -dragWidth, right: 0 }}
            dragElastic={0.08}
            style={{ x: springX }}
            onDrag={(e, info) => {
              // Update motion value when dragging manually
              x.set(info.point.x);
            }}
            className="
            cursor-grab
            active:cursor-grabbing
            will-change-transform
            "
          >
            {/* CONTENT TRACK */}
            <div
              ref={innerRef}
              className="
                flex
                gap-8
                pr-32
                pl-4
            "
            >
              {results.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
                  className="
                    relative
                    min-w-[280px]
                    sm:min-w-[360px]
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
                    backdrop-blur
                    shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                "
                >
                  {/* HEADER */}
                  <div className="mb-4">
                    <p className="font-heading text-lg font-bold text-white">
                      {item.name}
                    </p>
                    <p className="font-ui text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Scaled in {item.duration}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="
                    relative
                    mb-5
                    rounded-2xl
                    border border-white/10
                    bg-black/40
                    p-3
                  ">
                    <div className="relative w-full aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          h-full
                          w-full
                          object-contain
                          rounded-xl
                        "
                      />
                    </div>
                  </div>


                  {/* QUOTE */}
                  <p className="font-body text-sm leading-relaxed text-zinc-300 italic">
                    “{item.quote}”
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* HINT */}
        <p className="mt-6 text-center text-sm text-zinc-500">
          Swipe or drag to explore →
        </p>
      </div>
    </section>
  );
}
