"use client";

import { AnimatePresence, motion as m } from "motion/react";

import SubmitAnimation from "@/components/animation/SubmitAnimation";
import type { AnimationState } from "@/components/animation/envelope/types";

interface ContactDialogProps {
  open: boolean;
  state: AnimationState;
}

export default function ContactDialog({ open, state }: ContactDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <m.div
          className="
              fixed
              inset-0
              z-999
              flex
              items-center
              justify-center
              bg-black/55
              backdrop-blur-sm
              px-6
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <m.div
            initial={{
              opacity: 0,
              scale: 0.88,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.88,
              y: 30,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
                w-full
                max-w-md
                rounded-3xl
                bg-white
                p-8
                shadow-2xl
            "
          >
            <SubmitAnimation state={state} />

            <div className="mt-8 text-center">
              {state === "loading" && (
                <>
                  <h3
                    className="
                        text-2xl
                        font-bold
                        text-slate-900
                    "
                  >
                    Sending Message
                  </h3>

                  <p
                    className="
                        mt-3
                        text-slate-500
                    "
                  >
                    Please wait while your message is being delivered.
                  </p>
                </>
              )}

              {state === "success" && (
                <>
                  <h3
                    className="
                        text-2xl
                        font-bold
                        text-emerald-600
                    "
                  >
                    Message Sent
                  </h3>

                  <p
                    className="
                        mt-3
                        text-slate-500
                    "
                  >
                    Thank you for reaching out.
                    <br />
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </>
              )}

              {state === "error" && (
                <>
                  <h3
                    className="
                        text-2xl
                        font-bold
                        text-rose-600
                    "
                  >
                    Submission Failed
                  </h3>

                  <p
                    className="
                        mt-3
                        text-slate-500
                    "
                  >
                    Please check your information and try again.
                  </p>
                </>
              )}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
