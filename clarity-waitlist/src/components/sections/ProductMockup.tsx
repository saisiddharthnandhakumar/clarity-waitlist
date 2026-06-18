"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Scan,
  TrendingUp,
  Sparkles,
  BarChart3,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";

type MetricCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: "up" | "down" | "stable";
  color?: "green" | "amber" | "blue";
  delay?: number;
};

function MetricCard({
  icon,
  label,
  value,
  trend,
  color = "green",
  delay = 0,
}: MetricCardProps) {
  const colorMap = {
    green: {
      bg: "bg-brand-50",
      text: "text-brand-700",
      icon: "text-brand-500",
      border: "border-brand-100",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      icon: "text-amber-500",
      border: "border-amber-100",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      icon: "text-blue-500",
      border: "border-blue-100",
    },
  };

  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-start gap-3`}
    >
      <div className={`${c.icon} mt-0.5`}>{icon}</div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className={`${c.text} text-2xl font-display font-semibold`}>
            {value}
          </span>
          {trend && (
            <span
              className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${
                trend === "up"
                  ? "bg-brand-100 text-brand-700"
                  : trend === "down"
                  ? "bg-red-100 text-red-600"
                  : "bg-surface-100 text-ink-400"
              }`}
            >
              {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"}
            </span>
          )}
        </div>
        <p className="text-xs text-ink-300 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

type ConcernBadgeProps = {
  label: string;
  level: number;
  color: string;
  delay: number;
};

function ConcernBadge({ label, level, color, delay }: ConcernBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="flex items-center gap-3"
    >
      <span className="text-xs text-ink-500 w-24 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-surface-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </motion.div>
  );
}

type ProductCardProps = {
  name: string;
  match: number;
  price: string;
  reason: string;
  delay: number;
};

function ProductCard({ name, match, price, reason, delay }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="flex items-start gap-3 p-3 rounded-xl bg-surface-50 border border-surface-100 hover:border-brand-100 transition-colors cursor-pointer"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center shrink-0">
        <Sparkles className="w-5 h-5 text-brand-600" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-ink truncate">{name}</p>
          <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full shrink-0">
            {match}% match
          </span>
        </div>
        <p className="text-xs text-ink-300 mt-0.5">{reason}</p>
        <p className="text-xs font-medium text-ink-400 mt-1">{price}</p>
      </div>
    </motion.div>
  );
}

export function ProductMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full max-w-[380px]">
      {/* Glow behind the mockup */}
      <div className="absolute inset-0 bg-radial-glow blur-3xl scale-150" />

      {/* Main phone frame */}
      <motion.div
        className="relative glass-card rounded-[2.5rem] p-3 shadow-premium-lg overflow-hidden"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glass reflection shine sweep */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.1) 100%)",
            animation: "shimmer 3s infinite",
          }}
        />

        {/* Inner screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden border border-surface-100 relative z-10">
          {/* Status bar */}
          <div className="bg-surface-50 px-5 py-3 border-b border-surface-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-ink-400">
                9:41
              </span>
              <span className="text-xs font-semibold text-brand-600 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Clarity
              </span>
              <span className="text-xs text-ink-200">●●●</span>
            </div>
          </div>

          {/* App content */}
          <div className="p-4 space-y-4">
            {/* Clarity Score */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-ink">
                  Your Skin Clarity Score
                </h3>
                <span className="text-[10px] text-ink-300 bg-surface-50 px-2 py-1 rounded-full">
                  Updated today
                </span>
              </div>

              <div className="flex items-end gap-4 mb-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    className="transform -rotate-90"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="#e8e4dc"
                      strokeWidth="6"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="url(#scoreGradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 34}`}
                      strokeDashoffset={`${2 * Math.PI * 34 * 0.28}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                      animate={{
                        strokeDashoffset: 2 * Math.PI * 34 * 0.28,
                      }}
                      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient
                        id="scoreGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3a9070" />
                        <stop offset="100%" stopColor="#85c8ae" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-display font-semibold text-brand-700">
                      72
                    </span>
                  </div>
                </motion.div>

                <div className="flex-1 grid grid-cols-2 gap-2">
                  <MetricCard
                    icon={<TrendingUp className="w-4 h-4" />}
                    label="From last scan"
                    value="+8"
                    trend="up"
                    color="green"
                    delay={0.6}
                  />
                  <MetricCard
                    icon={<BarChart3 className="w-4 h-4" />}
                    label="Scans this month"
                    value="4"
                    color="blue"
                    delay={0.7}
                  />
                </div>
              </div>
            </div>

            {/* Concern Breakdown */}
            <div className="bg-surface-50 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold text-ink-400 uppercase tracking-wider">
                  Concern Breakdown
                </h4>
                <Scan className="w-3.5 h-3.5 text-ink-300" />
              </div>
              <ConcernBadge
                label="Texture"
                level={65}
                color="bg-brand-500"
                delay={0.8}
              />
              <ConcernBadge
                label="Pigmentation"
                level={45}
                color="bg-amber-500"
                delay={1.0}
              />
              <ConcernBadge
                label="Oiliness"
                level={30}
                color="bg-blue-500"
                delay={1.2}
              />
              <ConcernBadge
                label="Redness"
                level={20}
                color="bg-red-400"
                delay={1.4}
              />
            </div>

            {/* Recommendations */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold text-ink-400 uppercase tracking-wider">
                  For You
                </h4>
                <span className="text-[10px] text-brand-500 font-medium">
                  Based on your scan
                </span>
              </div>
              <div className="space-y-2">
                <ProductCard
                  name="Niacinamide Serum"
                  match={94}
                  price="₹499"
                  reason="For texture & tone"
                  delay={1.5}
                />
                <ProductCard
                  name="Oil-Free Moisturizer"
                  match={89}
                  price="₹349"
                  reason="Lightweight hydration"
                  delay={1.7}
                />
              </div>
            </div>

            {/* Bottom nav */}
            <div className="flex items-center justify-between pt-2 border-t border-surface-100">
              <div className="flex flex-col items-center gap-0.5 text-brand-600 cursor-pointer">
                <Scan className="w-5 h-5" />
                <span className="text-[10px] font-medium">Scan</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-ink-300 cursor-pointer">
                <TrendingUp className="w-5 h-5" />
                <span className="text-[10px] font-medium">Progress</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-ink-300 cursor-pointer">
                <ClipboardCheck className="w-5 h-5" />
                <span className="text-[10px] font-medium">Routine</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-ink-300 cursor-pointer">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[10px] font-medium">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating stats card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute -right-6 top-1/4 glass-card rounded-2xl p-3 shadow-premium hidden lg:block"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-xs font-medium text-ink">Progress</span>
          <span className="text-xs font-semibold text-brand-600">+12%</span>
        </div>
      </motion.div>
    </div>
  );
}
