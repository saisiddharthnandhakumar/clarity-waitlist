"use client";

import { Sparkles, Mail, Heart } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Get Early Access", href: "#waitlist" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-ink text-white relative">
      {/* Gradient top border */}
      <div className="h-[2px] bg-brand-gradient" />

      <div className="section-container py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-semibold text-white">
                Clarity
              </span>
            </div>
            <p className="text-ink-300/40 text-sm leading-relaxed mb-6 max-w-xs">
              Clarity — Because your face card deserves science, not sponsorships.
            </p>
            <a
              href="mailto:hello@getclarity.app"
              className="inline-flex items-center gap-2 text-sm text-ink-300/40 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@getclarity.app
            </a>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([key, group]) => (
            <div key={key}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-300/30 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-300/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-300/30">
            &copy; {new Date().getFullYear()} Clarity. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <MagneticButton
              as="a"
              href="#waitlist"
              strength={4}
              className="text-xs text-brand-400 hover:text-brand-300 transition-colors font-medium cursor-pointer"
            >
              Get Early Access
            </MagneticButton>
            <p className="text-xs text-ink-300/30 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-400" /> in India. Zero filter. Zero BS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
