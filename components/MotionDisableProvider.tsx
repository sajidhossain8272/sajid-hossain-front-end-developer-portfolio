// components/MotionDisableProvider.tsx
"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { MotionConfig } from "framer-motion";
import React from "react";

export default function MotionDisableProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      {children}
    </MotionConfig>
  );
}
