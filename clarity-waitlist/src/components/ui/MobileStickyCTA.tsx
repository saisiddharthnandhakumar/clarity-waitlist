"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const [hiddenByForm, setHiddenByForm] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // Scroll listener: show after scrolling past 300px (past hero fold)
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // IntersectionObserver: hide when waitlist form is >50% visible
    const waitlistEl = document.querySelector("#waitlist");
    if (!waitlistEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setHiddenByForm(entry.isIntersecting && entry.intersectionRatio > 0.5);
      },
      { threshold: [0, 0.5, 1] }
    );

    observer.observe(waitlistEl);

    return () => observer.disconnect();
  }, []);

  const shouldShow = visible && !hiddenByForm;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 block md:hidden"
          style={{
            paddingBottom: "env(safe-area-inset-bottom, 16px)",
            paddingRight: "env(safe-area-inset-right, 0px)",
          }}
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.8, y: 16 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 16 }}
          transition={
            prefersReduced
              ? { duration: 0.01 }
              : { type: "spring", stiffness: 300, damping: 25 }
          }
        >
          <MagneticButton
            as="a"
            href="#waitlist"
            strength={2}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-brand-600 text-white font-semibold text-sm shadow-xl shadow-brand-300/25 hover:bg-brand-700 transition-colors duration-200 btn-glow cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Get Early Access
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
