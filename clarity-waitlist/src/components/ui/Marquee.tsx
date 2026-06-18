"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const prefersReduced = useReducedMotion();

  const animClass =
    direction === "left"
      ? speed === "slow"
        ? "animate-marquee-slow"
        : "animate-marquee"
      : speed === "slow"
        ? "animate-marquee-slow [animation-direction:reverse]"
        : "animate-marquee [animation-direction:reverse]";

  if (prefersReduced) {
    return (
      <div className={cn("flex flex-wrap justify-center gap-4", className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-4",
          animClass,
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
}
