"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Preview", href: "#preview" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-surface-100 shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center shadow-md shadow-brand-200/30 group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-lg font-semibold text-ink hidden sm:block">
                Clarity
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm font-medium text-ink-400 hover:text-ink rounded-xl hover:bg-surface-50 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <MagneticButton
                as="a"
                href="#waitlist"
                onClick={() => handleNavClick({ preventDefault: () => {} } as any, "#waitlist")}
                strength={4}
                className="px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm shadow-brand-200/30 cursor-pointer"
              >
                Join Waitlist
              </MagneticButton>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-surface-50 flex items-center justify-center text-ink cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu — slide-in from right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[85vw] max-w-sm bg-white shadow-2xl md:hidden flex flex-col"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between p-6 border-b border-surface-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-brand-gradient flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-display text-lg font-semibold text-ink">
                    Clarity
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-surface-50 flex items-center justify-center text-ink cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Panel links */}
              <div className="flex-1 flex flex-col justify-center px-6 gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: i * 0.06 }}
                    className="text-xl font-display font-semibold text-ink px-4 py-3 rounded-2xl hover:bg-surface-50 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#waitlist"
                  onClick={(e) => handleNavClick(e, "#waitlist")}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-4 px-6 py-4 bg-brand-600 text-white font-semibold text-lg rounded-2xl hover:bg-brand-700 transition-colors text-center cursor-pointer"
                >
                  Join Waitlist
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
