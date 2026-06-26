"use client";

import { motion as m } from "motion/react";
import type { AnimationState } from "@/components/animation/envelope/types";
import { paperVariants } from "@/components/animation/envelope/variants";

interface PaperProps {
  state: AnimationState;
}

export default function Paper({ state }: PaperProps) {
  return (
    <m.g variants={paperVariants} initial="idle" animate={state}>
      {/* Body Paper */}
      <rect x="36" y="64" width="88" height="72" rx="6" fill="white" />

      {/* Shadow */}
      <rect
        x="36"
        y="64"
        width="88"
        height="72"
        rx="6"
        fill="url(#paperShadow)"
      />

      {/* Header */}
      <rect x="48" y="80" width="42" height="5" rx="2.5" fill="#BAC8FF" />

      {/* line 1 */}
      <rect x="48" y="94" width="60" height="4" rx="2" fill="#D7DFFF" />

      {/* line 2 */}
      <rect x="48" y="104" width="52" height="4" rx="2" fill="#D7DFFF" />

      {/* line 3 */}
      <rect x="48" y="114" width="58" height="4" rx="2" fill="#D7DFFF" />

      {/* line 4 */}
      <rect x="48" y="124" width="40" height="4" rx="2" fill="#D7DFFF" />

      <defs>
        <linearGradient
          id="paperShadow"
          x1="80"
          y1="64"
          x2="80"
          y2="136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0" />

          <stop offset="1" stopColor="#EEF2FF" />
        </linearGradient>
      </defs>
    </m.g>
  );
}
