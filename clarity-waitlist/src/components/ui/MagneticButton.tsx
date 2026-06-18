"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  strength?: number; // max px shift toward cursor (default 6)
};

export function MagneticButton({
  children,
  className,
  as = "button",
  href,
  onClick,
  type = "button",
  disabled = false,
  strength = 6,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isTouch, setIsTouch] = useState(false);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const motionProps = isTouch
    ? {}
    : {
        style: { x: springX, y: springY },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
      };

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <div ref={ref} className="inline-block">
      <Component
        {...motionProps}
        href={as === "a" ? href : undefined}
        onClick={onClick}
        type={as === "button" ? type : undefined}
        disabled={disabled}
        className={cn(className, disabled && "opacity-60 pointer-events-none")}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </Component>
    </div>
  );
}
