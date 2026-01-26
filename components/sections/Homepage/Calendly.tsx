"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Calendly() {
  const [open, setOpen] = useState(false);

  return (
    <section id="calendly" className="relative overflow-hidden bg-black py-36">
      {/* background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur">
            Free Strategy Call
          </span>

          <h2 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Book a Free Consultation{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          <p className="mx-auto mt-6 font-body max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Ready to take your creatives to the next level? Schedule a discovery
            call with our creative strategists and unlock your brand&apos;s full
            potential.
          </p>
        </div>

        {/* GLASS CARD */}
        <div
          className="
            relative
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            shadow-[0_30px_80px_rgba(0,0,0,0.6)]
          "
        >
          {/* TOP ROW */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-medium text-white">
                Launch the scheduler when you’re ready
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                Calendly only loads after you click to keep the page fast.
              </p>
            </div>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="
                font-ui
                group
                relative
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/5
                px-6
                sm:px-8
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
              <span className="relative z-10">
                {open ? "Close Scheduler" : "Open Calendly"}
              </span>
            </button>
          </div>

          {/* EXPAND */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-10"
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    backdrop-blur-xl
                  "
                >
                  {/* inner glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />

                  <div className="relative h-[680px] w-full">
                    <iframe
                      src="https://calendly.com/YOUR_CALENDLY_USERNAME/30min"
                      className="h-full w-full"
                      frameBorder="0"
                      title="Calendly"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
