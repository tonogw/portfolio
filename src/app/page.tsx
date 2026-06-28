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
import Footer from "@/components/sections/footer";

export default function Home() {
  const [showGhostButton, setShowGhostButton] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    // Gunakan fungsi internal yang stabil terisolasi di dalam efek
    const handleScroll = () => {
      const skillsetSection = document.getElementById("skillset");

      if (skillsetSection) {
        const rect = skillsetSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setShowGhostButton(true);
        } else {
          setShowGhostButton(false);
        }
      } else {
        setShowGhostButton(window.scrollY > 400);
      }

      const totalPageHeight = document.documentElement.scrollHeight;
      const currentScrollPosition = window.scrollY + window.innerHeight;

      if (totalPageHeight - currentScrollPosition < 50) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    // Jalankan sekali di awal
    handleScroll();

    // Pasang pendengar tunggal
    window.addEventListener("scroll", handleScroll, { passive: true });

    // PERBAIKAN MUTLAK: Pastikan mencabut fungsi handleScroll yang tepat saat unmount/re-render
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  // FIX SINKRONISASI: Fungsi pemicu animasi interaktif sebelum menjalankan scroll asli
  const handleAnimatedScroll = () => {
    if (isRotating) return; // Cegah double-click saat roda animasi berputar

    setIsRotating(true);

    // Beri jeda 350ms agar putaran 360 derajatnya selesai dinikmati mata user
    setTimeout(() => {
      handlePureScroll();
      setIsRotating(false);
    }, 350);
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
      <Footer />
      {/* <SubmitAnimation /> */}

      {/* GHOST TRIGGER AREA (FIXED POSITION - FIXED Z-INDEX & KONTRAS THEME) */}
      <AnimatePresence>
        {showGhostButton && (
          <m.div
            // PERBAIKAN: z-50 diubah menjadi z-[99] agar melayang di paling depan global
            className="fixed bottom-10 right-10 z-99 group flex items-center justify-center w-44 h-24"
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
                onClick={handleAnimatedScroll} // Menggunakan fungsi pemicu animasi baru
                className="gap-2 py-2 px-4 h-12 w-full rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 border border-neutral-800 dark:border-neutral-200 hover:bg-neutral-900 dark:hover:bg-neutral-100 shadow-2xl cursor-pointer font-bold"
              >
                <span className="text-xs font-semibold tracking-wider uppercase">
                  {isAtBottom ? "Back To Top" : "Scroll Down"}
                </span>

                {/* Kontainer Ikon Terintegrasi dengan Framer Motion */}
                <m.div
                  style={{ width: "16px", height: "16px" }}
                  className="relative flex items-center justify-center"
                  // Jika sedang diklik (isRotating), putar penuh ke 360.
                  // Jika diam, posisi mengikuti status posisi: bawah (180 derajat) atau atas (0 derajat)
                  animate={{
                    rotate: isRotating ? 360 : isAtBottom ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                >
                  {/* Ikon untuk Light Mode (Tombol Hitam -> Panah White) */}
                  <Image
                    src="/icons/icon-scrolldown-white.svg"
                    alt="arrow white"
                    width={16}
                    height={16}
                    style={{ width: "auto", height: "auto" }}
                    // Efek bounce otomatis mati saat tombol sedang berputar (isRotating)
                    className={`block dark:hidden ${!isAtBottom && !isRotating ? "animate-bounce" : ""}`}
                  />

                  {/* Ikon untuk Dark Mode (Tombol Putih -> Panah Black) */}
                  <Image
                    src="/icons/icon-scrolldown-black.svg"
                    alt="arrow black"
                    width={16}
                    height={16}
                    style={{ width: "auto", height: "auto" }}
                    className={`hidden dark:block ${!isAtBottom && !isRotating ? "animate-bounce" : ""}`}
                  />
                </m.div>
              </Button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
