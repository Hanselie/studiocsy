"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight, Instagram } from "lucide-react";

// Custom WhatsApp Icon
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navigation = {
  services: [
    { name: "Video Ad Packages", href: "/packages" },
    { name: "Static Ad Packages", href: "/packages" },
    { name: "AI UGC Ads", href: "/packages" },
    { name: "UGC Platforms", href: "/ai-ugc" },
  ],
  company: [
    { name: "About Us", href: "/#about-us" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com/csymediaa", icon: Instagram },
    { name: "WhatsApp", href: "https://wa.me/6281290091191", icon: WhatsAppIcon },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-heading text-xl sm:text-2xl font-bold text-white uppercase italic tracking-tight">
                Studio CSY
              </span>
            </Link>
            <p className="mt-4 max-w-md font-body text-sm sm:text-base text-zinc-400 leading-relaxed">
              Engineering high-converting ad creatives that scale brands. From VSLs to AI UGC, we deliver performance-driven content.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <a
                href="mailto:csymediaofficial@gmail.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="font-body text-sm sm:text-base">csymediaofficial@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-zinc-400">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <MapPin size={18} />
                </div>
                <span className="font-body text-sm sm:text-base">Remote-first, Worldwide</span>
              </div>

              <a
                href="https://wa.me/6281290091191"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-body text-sm sm:text-base">WhatsApp Available</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-blue-600/10 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                Ready to scale your brand?
              </h3>
              <p className="mt-1 font-body text-sm text-zinc-400">
                Get a free consultation and custom proposal within 24 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="font-ui flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Book a Call
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="font-body text-xs sm:text-sm text-zinc-500 text-center sm:text-left">
            © {new Date().getFullYear()} Studio CSY. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-blue-500/30 transition-all"
                aria-label={item.name}
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}