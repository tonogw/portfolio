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

  useEffect(() => {
    const handleScroll = () => {
      // PERBAIKAN UTAMA: Cari elemen fisik section skillset
      const skillsetSection = document.getElementById("skillset");

      if (skillsetSection) {
        const rect = skillsetSection.getBoundingClientRect();

        // Jika bagian atas section skillset sudah naik mendekati atau melewati viewport atas layar
        if (rect.top <= window.innerHeight) {
          setShowGhostButton(true);
        } else {
          setShowGhostButton(false);
        }
      } else {
        // Fallback cadangan jika ID tidak ditemukan, gunakan piksel aman
        setShowGhostButton(window.scrollY > 400);
      }

      // Deteksi apakah user sudah mentok sampai di paling bawah halaman portofolio
      const totalPageHeight = document.documentElement.scrollHeight;
      const currentScrollPosition = window.scrollY + window.innerHeight;

      // Jika sisa jarak kurang dari 50px, ubah status menjadi di dasar halaman
      if (totalPageHeight - currentScrollPosition < 50) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    // Jalankan sekali di awal untuk ancang-ancang
    handleScroll();

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
      <Footer />
      {/* <SubmitAnimation /> */}

      {/* GHOST TRIGGER AREA (FIXED POSITION) */}
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
                onClick={handlePureScroll}
                // PERBAIKAN: Memastikan text-white dan background solid agar tidak tembus pandang di background gelap/terang
                className="gap-2 py-2 px-4 h-12 w-full rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 border border-neutral-800 dark:border-neutral-200 hover:bg-neutral-900 dark:hover:bg-neutral-100 shadow-2xl cursor-pointer font-bold"
              >
                <span className="text-xs font-semibold tracking-wider uppercase">
                  {isAtBottom ? "Back To Top" : "Scroll Down"}
                </span>
                <Image
                  src={
                    isAtBottom
                      ? "/icons/icon-scrolldown-white.svg"
                      : "/icons/icon-scrolldown-black.svg"
                  }
                  alt="arrow navigation"
                  width={16}
                  height={16}
                  className={`w-4 h-4 transition-transform duration-500 inversion dark:invert ${
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
