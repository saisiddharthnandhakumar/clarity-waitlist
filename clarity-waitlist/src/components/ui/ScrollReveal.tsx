"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "scaleIn";
  duration?: number;
  once?: boolean;
};

const variantMap = {
  up: { y: 32, x: 0, scale: 1 },
  down: { y: -32, x: 0, scale: 1 },
  left: { y: 0, x: -40, scale: 1 },
  right: { y: 0, x: 40, scale: 1 },
  scaleIn: { y: 0, x: 0, scale: 0.92 },
  none: { y: 0, x: 0, scale: 1 },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  const offset = variantMap[direction] || variantMap.up;

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: offset.scale,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // If user prefers reduced motion, just show content without animation
  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
