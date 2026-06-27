"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import SubmitAnimation from "@/components/animation/SubmitAnimation";
import type { AnimationState } from "@/components/animation/envelope/types";
import { Button } from "@/components/ui/button";

interface ContactDialogProps {
  open: boolean;
  state: AnimationState;
  onClose?: () => void;
}

// Kita buat komponen pembungkus internal agar state otomatis ter-reset total saat dialog ditutup/unmount
function DialogContent({
  state,
  onClose,
}: {
  state: AnimationState;
  onClose?: () => void;
}) {
  const [showFinalResponse, setShowFinalResponse] = useState(false);

  useEffect(() => {
    // Jalankan timer hanya jika state sudah berubah menjadi success atau error
    if (state === "success" || state === "error") {
      const timer = setTimeout(() => {
        setShowFinalResponse(true);
      }, 1200); // Jeda 1.2 detik menunggu animasi amplop selesai menutup
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.88, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: 30 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-145 rounded-[32px] bg-white p-10 shadow-2xl relative flex flex-col items-center"
    >
      {/* Box Animasi Amplop (160x160) */}
      <div className="w-40 h-40 flex items-center justify-center">
        <SubmitAnimation state={state} />
      </div>

      <div className="mt-6 text-center w-full min-h-11xl flex flex-col items-center justify-center">
        {/* SKENARIO A: SEDANG DIKIRIM (LOADING) ATAU AMPLOP SEDANG BERPROSES */}
        {(state === "loading" ||
          ((state === "success" || state === "error") &&
            !showFinalResponse)) && (
          <div className="flex flex-col items-center animate-pulse">
            <h3 className="text-3xl font-black text-black tracking-tight">
              Sending Message...
            </h3>
            <p className="mt-4 text-neutral-500 text-md leading-relaxed">
              Please wait while your message is being delivered.
            </p>
          </div>
        )}

        {/* SKENARIO B: SUKSES (Amplop Selesai Menutup & Tersegel) */}
        {state === "success" && showFinalResponse && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col items-center"
          >
            <h3 className="text-3xl font-black text-black tracking-tight">
              Message Sent Successfully!
            </h3>
            <p className="mt-4 text-neutral-500 text-md leading-relaxed">
              Thank you for reaching out. I&apos;ll get back to you as soon as
              possible.
            </p>

            <m.div
              className="mt-8 w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onClose}
                className="h-14 w-full rounded-full bg-[#7C5CFF] hover:bg-[#6944FF] text-base font-semibold text-white transition-all shadow-[0_4px_16px_rgba(124,92,255,0.3)]"
              >
                Back to Home
              </Button>
            </m.div>
          </m.div>
        )}

        {/* SKENARIO C: GAGAL */}
        {state === "error" && showFinalResponse && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col items-center"
          >
            <h3 className="text-3xl font-black text-rose-600 tracking-tight">
              Submission Failed
            </h3>
            <p className="mt-4 text-neutral-500 text-md leading-relaxed">
              Please check your network information and try again.
            </p>

            <m.div className="mt-8 w-full">
              <Button
                onClick={onClose}
                className="h-14 w-full rounded-full bg-neutral-900 hover:bg-black text-base font-semibold text-white transition-all shadow-md"
              >
                Try Again
              </Button>
            </m.div>
          </m.div>
        )}
      </div>
    </m.div>
  );
}

export default function ContactDialog({
  open,
  state,
  onClose,
}: ContactDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <m.div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/55 backdrop-blur-sm px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Komponen dipisah ke DialogContent agar siklus hidup state diatur bersih oleh unmount */}
          <DialogContent state={state} onClose={onClose} />
        </m.div>
      )}
    </AnimatePresence>
  );
}
