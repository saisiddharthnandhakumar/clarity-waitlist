"use client";

import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
};

export function GradientText({
  children,
  className,
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "gradient-text-animated inline",
        className
      )}
    >
      {children}
    </Tag>
  );
}
