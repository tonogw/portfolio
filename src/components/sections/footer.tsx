"use client";

import { motion as m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { sosmedIcon } from "@/constant/sosmed-data";
// import { useTheme } from "next-themes";

export default function Footer() {
  //   const { resolvedTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      // PERBAIKAN 1: Gunakan overflow-visible agar elemen -top-80px tidak terpotong (clip) keluar wadah.
      // Singkirkan -top-60 global agar posisi klik form di atasnya aman.
      className="relative max-w-360 mx-auto pb-12 pt-24 overflow-visible bg-[#0A0D12] text-white flex flex-col justify-between z-10"
    >
      {/* ================= STACK BACKGROUND LAYER (FIGMA) ================= */}
      <div className="absolute -top-[140px] inset-x-0 bottom-0 z-0 pointer-events-none select-none overflow-visible">
        {/* 1. PERBAIKAN 2: Set posisi tepat -top-[80px] sesuai overlap form Figma Anda */}
        {/* z-[30] memastikan lengkungan berada di atas backdrop contact maupun backdrop footer */}
        <div className="absolute -top-[20px] inset-x-0 max-w-360 h-[80px] z-10">
          <Image
            src="/images/Subtract.png"
            alt="Top Section Curve"
            width={1440}
            height={210}
            className="object-cover object-bottom"
            priority
          />
        </div>

        {/* 2. Bottom Section Background (Hero Background) */}
        <div className="absolute top-20 h-100 bottom-0 inset-x-0 z-10 opacity-100 mix-blend-screen">
          <Image
            src="/images/Hero Background.png"
            alt="Footer Vector Gradient"
            width={1440}
            height={662}
            // fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        {/* 3. Ellipse / Dark Gradient Overlays (Pencahayaan Figma) */}
        <div className="absolute -left-20  w-125 h-125 z-0 opacity-60 pointer-events-none blur-3xl select-none">
          <Image
            src="/images/Ellipse 4.png"
            alt="Glow Left"
            width={807}
            height={650}
            className="object-contain"
          />
        </div>
        <div className="absolute -right-20 top-20 w-150 h-150 z-0 opacity-50 pointer-events-none blur-3xl select-none overflow-visible">
          <Image
            src="/images/Ellipse 5.png"
            alt="Glow Right"
            width={1432}
            height={604}
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-40 pointer-events-none select-none">
          <Image
            src="/images/Dark Gradient 02.png"
            alt="Dark Blend"
            width={1440}
            height={662}
            // fill
            className="object-cover"
          />
        </div>

        {/* 4. Matrix Line Animation */}
        <m.div
          className="absolute inset-x-0 bottom-0 h-full z-10 pointer-events-none select-none"
          animate={{
            opacity: [0.35, 0.75, 0.35],
            filter: [
              "brightness(100%) contrast(100%)",
              "brightness(160%) contrast(120%)",
              "brightness(100%) contrast(100%)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/Line.png"
            alt="Matrix Overlay Lines"
            width={1440}
            height={662}
            // fill
            className="object-cover object-bottom"
          />
        </m.div>

        {/* ================= CONTENT MAIN LAYER (Z-20) ================= */}
        {/* pointer-events-none mengizinkan klik tembus ke elemen form di belakang layer kosong ini */}
        <div className="relative z-20 custom-container w-full h-full mx-auto px-6 md:px-12 flex flex-col justify-end pb-12 pt-32 pointer-events-none">
          <div className="w-full h-px mb-8" />

          <div className="relative z-20 custom-container h-50.5 flex flex-col justify-center items-center text-center">
            {/* BARIS 1: Logo */}
            <div className="mb-4 mt-80 pointer-events-auto">
              <Image
                src="/icons/icon-logo-white.svg"
                alt="Your Logo"
                width={206}
                height={48}
                style={{ width: "206px", height: "48px" }}
                className="object-contain"
                priority={false}
              />
            </div>

            {/* BARIS 2: Deskripsi Teks Figma */}
            <p className="max-w-155 text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5 px-4">
              Front-End Developer with a passion for clean code and intuitive
              design. Turning ideas into functional beauty
            </p>

            {/* BLOK IKON SOSMED */}
            <div className="items-center flex gap-4 p-4 pointer-events-auto">
              {sosmedIcon.map((icon) => (
                <Link
                  href={icon.href}
                  key={icon.alt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    ${icon.hoverBg} 
                    group relative
                    w-12 h-12 flex items-center justify-center
                    rounded-full backdrop-blur-2xl bg-[#0A0D1280] shadow-xl border border-neutral-800/40
                    transition-all duration-500 
                    `}
                >
                  <m.div
                    animate={icon.motion.animate}
                    transition={icon.motion.transition}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={icon.width}
                      height={icon.height}
                      priority
                      className="absolute inset-0 m-auto transition-opacity duration-300 opacity-100 group-hover:opacity-0 w-5 h-5 lg:w-6 lg:h-6"
                    />
                    <Image
                      src={icon.hoverSrc}
                      alt={icon.alt}
                      width={icon.width}
                      height={icon.height}
                      priority
                      className="transition-all duration-300 opacity-0 group-hover:opacity-100 w-5 h-5 lg:w-6 lg:h-6"
                    />
                  </m.div>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <p className="text-xs md:text-sm font-medium text-neutral-500 tracking-wide text-center sm:text-left">
                &copy; {currentYear} Gunarto Wibisono. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
