"use client";

import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import Image from "next/image";

import Hero from "@/components/sections/hero";
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about";
import Skillset from "@/components/sections/skillset";
import StandOut from "@/components/sections/standout";
import Project from "@/components/sections/project";
import Experience from "@/components/sections/experience";
import Testimonial from "@/components/sections/testimonial";
import QnA from "@/components/sections/qna";
import Contact from "@/components/sections/contact";
// import SubmitAnimation from "@/components/animation/SubmitAnimation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showGhostButton, setShowGhostButton] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // PERBAIKAN: Diperbesar batasnya dari 100px menjadi 900px
      // Dengan begini, Ghost Button baru akan lahir setelah melewati Hero & About (mulai di Skillset)
      if (window.scrollY > 900) {
        setShowGhostButton(true);
      } else {
        setShowGhostButton(false);
      }

      // Deteksi apakah user sudah mentok sampai di paling bawah halaman
      const totalPageHeight = document.documentElement.scrollHeight;
      const currentScrollPosition = window.scrollY + window.innerHeight;

      if (totalPageHeight - currentScrollPosition < 50) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePureScroll = () => {
    if (isAtBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Layar akan bergeser konstan ke bawah dengan mulus
      window.scrollBy({
        top: 800,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <Hero />
      <Navbar />
      <About />
      <Skillset />
      <StandOut />
      <Project />
      <Experience />
      <Testimonial />
      <QnA />
      <Contact />
      {/* <SubmitAnimation /> */}

      {/* GHOST TRIGGER AREA (FIXED POSITION) */}
      <AnimatePresence>
        {showGhostButton && (
          <m.div
            className="fixed bottom-10 right-10 z-50 group flex items-center justify-center w-44 h-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <m.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handlePureScroll} // <--- Menggunakan fungsi scroll piksel murni
                className="gap-2 py-2 px-4 h-12 w-full rounded-full bg-black/80 backdrop-blur-md border border-neutral-800 hover:bg-neutral-900 text-white shadow-2xl cursor-pointer"
              >
                <span className="text-xs font-semibold tracking-wider uppercase">
                  {isAtBottom ? "Back To Top" : "Scroll Down"}
                </span>
                <Image
                  src="/icons/icon-scrolldown-white.svg"
                  alt="arrow navigation"
                  width={16}
                  height={16}
                  className={`w-4 h-4 transition-transform duration-500 ${
                    isAtBottom ? "rotate-180" : "animate-bounce"
                  }`}
                />
              </Button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
