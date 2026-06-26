"use client";

import { motion as m } from "motion/react";

import type { AnimationState } from "@/components/animation/envelope/types";
import { badgeVariants } from "@/components/animation/envelope/variants";

interface SuccessBadgeProps {
  state: AnimationState;
}

export default function SuccessBadge({ state }: SuccessBadgeProps) {
  if (state !== "success") return null;

  return (
    <m.g variants={badgeVariants} initial="idle" animate={state}>
      {/* Glow */}

      <m.circle
        cx="124"
        cy="74"
        r="24"
        fill="#4ADE80"
        opacity=".18"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />

      {/* Badge */}

      <circle cx="124" cy="74" r="20" fill="#22C55E" />

      {/* Inner */}

      <circle cx="124" cy="74" r="17" fill="#16A34A" />

      {/* Check */}

      <m.path
        d="M116 74L122 80L133 68"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          delay: 0.25,
          duration: 0.45,
        }}
      />
    </m.g>
  );
}
