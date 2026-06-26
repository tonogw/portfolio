"use client";

import { motion as m } from "motion/react";

import type { AnimationState } from "@/components/animation/envelope/types";
import { badgeVariants } from "@/components/animation/envelope/variants";

interface ErrorBadgeProps {
  state: AnimationState;
}

export default function ErrorBadge({ state }: ErrorBadgeProps) {
  if (state !== "error") return null;

  return (
    <m.g variants={badgeVariants} initial="idle" animate={state}>
      {/* Glow */}

      <m.circle
        cx="124"
        cy="74"
        r="24"
        fill="#EF4444"
        opacity=".18"
        animate={{
          scale: [1, 1.22, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
        }}
      />

      {/* Badge */}

      <m.circle
        cx="124"
        cy="74"
        r="20"
        fill="#EF4444"
        animate={{
          x: [0, -2, 2, -2, 2, 0],
        }}
        transition={{
          delay: 0.25,
          duration: 0.35,
        }}
      />

      <circle cx="124" cy="74" r="17" fill="#DC2626" />

      {/* Cross Line 1 */}

      <m.path
        d="M118 68L130 80"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          delay: 0.18,
          duration: 0.25,
        }}
      />

      {/* Cross Line 2 */}

      <m.path
        d="M130 68L118 80"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          delay: 0.42,
          duration: 0.25,
        }}
      />
    </m.g>
  );
}
