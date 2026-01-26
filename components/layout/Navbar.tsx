"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ScrollProgressBar from "./ScrollProgressBar";

export default function Navbar() {
  const [showBanner, setShowBanner] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Scroll Progress Bar - appears on all pages */}
      <ScrollProgressBar />
      {/* PROMO BANNER
      {showBanner && (
        <div className="fixed top-0 z-50 w-full bg-blue-600 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
            <p>🚀 Limited offer: Free strategy call for qualified brands</p>
            <button
              onClick={() => setShowBanner(false)}
              className="text-white/80 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )} */}

      {/* NAVBAR */}
      <header
        className={`fixed z-40 w-full  ${showBanner ? "top-10" : "top-0"
          }`}
      >
        <div
          className="
            relative
            border-b border-white/10
            bg-gradient-to-r from-black/60 via-blue-950/40 to-black/60
            backdrop-blur-2xl
          "
        >
          {/* subtle highlight */}
          <div className="pointer-events-none absolute inset-0 bg-white/5" />

          <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

            {/* LOGO */}
            <span className="font-heading text-lg font-bold tracking-tight text-white uppercase italic">
              Studio CSY
            </span>


            {/* MENU */}
            <nav className="hidden items-center gap-8 text-sm md:flex">
              {[
                { label: "Home", href: "/" },
                { label: "Packages", href: "/packages" },
                { label: "AI UGC Platforms", href: "/ai-ugc" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Contact", href: "/contact" },
              ].map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`
                      font-ui
                      group
                      relative
                      text-sm
                      font-medium
                      transition-colors duration-300
                      hover:text-white
                      ${isActive ? "text-white" : "text-zinc-300"}
                    `}
                  >
                    {item.label}

                    {/* UNDERLINE */}
                    <span
                      className={`
                        pointer-events-none
                        absolute left-0 -bottom-[30px]
                        h-[2px] w-full
                        origin-center
                        rounded-full
                        bg-gradient-to-r from-blue-600 to-indigo-500
                        shadow-[0_0_12px_rgba(59,130,246,0.8)]
                        transition-transform duration-300 ease-out
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                      `}
                    />

                  </a>
                );
              })}
            </nav>


            {/* CTA - Hidden on Mobile */}
            <a
              href="#calendly"
              className="
                group
                hidden
                md:inline-flex
                items-center
                gap-2
                rounded-full
                px-7 py-3
                text-sm
                font-medium
                text-white
                bg-gradient-to-r
                from-blue-600
                to-indigo-500
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-blue-600/40
                active:scale-95
              "
            >
              <span className="relative z-10 font-ui text-sm font-semibold transition-colors duration-300">
                Book a Call
              </span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 flex items-center justify-center p-3 text-zinc-300 hover:text-white md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`
            fixed inset-0 z-30 flex flex-col items-center justify-center bg-black/95 transition-all duration-500 md:hidden
            ${isMenuOpen ? "opacity-100 backdrop-blur-3xl" : "pointer-events-none opacity-0"}
          `}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-6 text-center"
          >
            {[
              { label: "Home", href: "/" },
              { label: "Packages", href: "/packages" },
              { label: "AI UGC Platforms", href: "/ai-ugc" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Contact", href: "/contact" },
            ].map((item, idx) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    font-ui text-2xl font-semibold transition-all duration-300 p-4 block
                    ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                    ${isActive ? "text-white" : "text-zinc-300"}
                  `}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {item.label}
                  {isActive && (
                    <span className="block mx-auto mt-1 h-[2px] w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                  )}
                </a>
              );
            })}

            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`
                mt-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 font-ui
                hover:scale-105 hover:shadow-blue-600/40 active:scale-95
                ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
              `}
              style={{ transitionDelay: "500ms" }}
            >
              Book a Call
            </a>
          </nav>







        </div>
      </header>
    </>
  );
}
