"use client";

import { AnimatePresence, motion as m } from "motion/react";

import Envelope from "@/components/animation/envelope/Envelope";
import SuccessBadge from "@/components/animation/envelope/SuccessBadge";
import ErrorBadge from "@/components/animation/envelope/ErrorBadge";

import type { AnimationState } from "@/components/animation/envelope/types";

interface SubmitAnimationProps {
  state: AnimationState;
}

export default function SubmitAnimation({ state }: SubmitAnimationProps) {
  return (
    <div className="relative flex items-center justify-center w-44 h-44 mx-auto">
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}

        <circle cx="80" cy="80" r="74" fill="#F6F1FF" />

        <circle cx="80" cy="80" r="68" fill="#D9E4FF" />

        {/* Envelope */}

        <Envelope state={state} />

        {/* Badge */}

        <AnimatePresence mode="wait">
          {state === "success" && <SuccessBadge key="success" state={state} />}

          {state === "error" && <ErrorBadge key="error" state={state} />}
        </AnimatePresence>
      </svg>

      {/* Loading */}

      <AnimatePresence>
        {state === "loading" && (
          <m.div
            key="loading"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
                absolute
                -bottom-10
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-white
                px-4
                py-2
                shadow-lg
                border
                border-violet-100
            "
          >
            <div className="flex items-center gap-2">
              <span
                className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-violet-600
                    animate-pulse
                "
              />

              <span className="text-sm font-semibold text-slate-700">
                Sending message...
              </span>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
