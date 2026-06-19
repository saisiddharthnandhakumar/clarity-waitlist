"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#1a1a18",
          color: "#faf9f7",
          border: "1px solid rgba(90, 163, 211, 0.2)",
          borderRadius: "0.75rem",
          fontFamily: "'Satoshi', sans-serif",
          fontSize: "0.875rem",
        },
        duration: 4000,
      }}
      richColors
      closeButton
    />
  );
}
