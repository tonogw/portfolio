"use client";

import { AnimatePresence, motion as m } from "motion/react";
import SubmitAnimation from "@/components/animation/SubmitAnimation";

export type AnimationState = "idle" | "loading" | "success" | "error";

interface ContactDialogProps {
  open: boolean;
  state: AnimationState;
}

export default function ContactDialog({ open, state }: ContactDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
          }}
          className="
            fixed
            inset-0
            z-999
            flex
            items-center
            justify-center
            bg-black/45
            backdrop-blur-md
            px-6
            "
        >
          <m.div
            initial={{
              scale: 0.9,
              opacity: 0,
              y: 20,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
              y: 20,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 20,
            }}
            className="
            w-full
            max-w-100
            rounded-[32px]
            border
            border-neutral-200
            bg-white
            p-8
            shadow-[0_30px_80px_rgba(0,0,0,.20)]
            "
          >
            <SubmitAnimation state={state} />

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold">
                {state === "loading" && "Sending Message"}

                {state === "success" && "Message Sent"}

                {state === "error" && "Submission Failed"}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-500">
                {state === "loading" &&
                  "Please wait while I deliver your message."}

                {state === "success" &&
                  "Thank you for reaching out. I'll get back to you as soon as possible."}

                {state === "error" &&
                  "Please check the required fields before submitting again."}
              </p>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
