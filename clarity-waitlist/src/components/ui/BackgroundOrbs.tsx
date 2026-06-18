"use client";

import { motion, useReducedMotion } from "framer-motion";

type BackgroundOrbsProps = {
  variant?: "brand" | "warm";
  count?: number;
  className?: string;
};

const orbConfigs = {
  brand: [
    { color: "rgba(58,144,112,0.10)", size: "w-[500px] h-[500px]" },
    { color: "rgba(133,200,174,0.06)", size: "w-[400px] h-[400px]" },
    { color: "rgba(58,144,112,0.04)", size: "w-[350px] h-[350px]" },
  ],
  warm: [
    { color: "rgba(244,140,92,0.06)", size: "w-[500px] h-[500px]" },
    { color: "rgba(251,201,168,0.05)", size: "w-[400px] h-[400px]" },
    { color: "rgba(244,140,92,0.03)", size: "w-[350px] h-[350px]" },
  ],
};

const floatPaths = [
  {
    x: [0, 50, -30, 0],
    y: [0, -30, 20, 0],
    duration: 20,
  },
  {
    x: [0, -40, 20, 0],
    y: [0, 20, -40, 0],
    duration: 25,
  },
  {
    x: [0, 30, -20, 0],
    y: [0, -20, 30, 0],
    duration: 22,
  },
];

export function BackgroundOrbs({
  variant = "brand",
  count = 2,
  className,
}: BackgroundOrbsProps) {
  const prefersReduced = useReducedMotion();
  const configs = orbConfigs[variant].slice(0, count);

  if (prefersReduced) return null;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}
      aria-hidden="true"
    >
      {configs.map((config, i) => {
        const path = floatPaths[i % floatPaths.length]!;
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-[120px] ${config.size}`}
            style={{
              background: config.color,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={path}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
