"use client";

import { motion as m } from "motion/react";

import Paper from "@/components/animation/envelope/Paper";
import type { AnimationState } from "@/components/animation/envelope/types";

import {
  envelopeVariants,
  flapVariants,
} from "@/components/animation/envelope/variants";

interface EnvelopeProps {
  state: AnimationState;
}

export default function Envelope({ state }: EnvelopeProps) {
  return (
    <m.g variants={envelopeVariants} initial="idle" animate={state}>
      {/* ========================= */}
      {/* PAPER */}
      {/* ========================= */}

      <Paper state={state} />

      {/* ========================= */}
      {/* BACK ENVELOPE */}
      {/* ========================= */}

      <path
        d="
          M28 82
          L80 44
          L132 82
          V136
          H28
          Z
        "
        fill="#4D64DE"
      />

      {/* ========================= */}
      {/* LEFT */}
      {/* ========================= */}

      <path
        d="
          M28 82
          L80 118
          L28 136
          Z
        "
        fill="#6C7BFF"
      />

      {/* ========================= */}
      {/* RIGHT */}
      {/* ========================= */}

      <path
        d="
          M132 82
          L80 118
          L132 136
          Z
        "
        fill="#5970F4"
      />

      {/* ========================= */}
      {/* FRONT */}
      {/* ========================= */}

      <path
        d="
          M28 136
          L80 104
          L132 136
          Z
        "
        fill="#8A63FF"
      />

      {/* ========================= */}
      {/* FLAP */}
      {/* ========================= */}

      <m.path
        variants={flapVariants}
        d="
          M28 82
          L80 44
          L132 82
          Z
        "
        fill="#6D4DFF"
        style={{
          transformBox: "fill-box",
          transformOrigin: "50% 0%",
        }}
      />

      {/* ========================= */}
      {/* SHADOW */}
      {/* ========================= */}

      <ellipse cx="80" cy="142" rx="42" ry="6" fill="black" opacity=".08" />
    </m.g>
  );
}
