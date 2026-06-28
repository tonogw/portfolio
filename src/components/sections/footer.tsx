"use client";

import { motion as m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { sosmedIcon } from "@/constant/sosmed-data";
import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme, setTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  // Data Navigasi Sederhana untuk Footer Kiri/Kanan
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skillset", href: "#skillset" },
    { label: "Projects", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  const isDarkMode = resolvedTheme === "dark";

  return (
    <footer
      id="footer"
      className="relative w-full max-w-360 mx-auto h-165.5 overflow-hidden bg-[#0A0D12] text-white flex flex-col justify-between"
    >
      {/* ================= STACK BACKGROUND LAYER (FIGMA) ================= */}

      {/* 1. Top Section Curve - Lengkungan Penghubung Slicing (Subtract) */}
      <div className="absolute top-0 inset-x-0 w-full h-[80px] z-10 pointer-events-none select-none">
        <Image
          src="/images/Subtract (1).png"
          alt="Top Section Curve"
          fill
          className="object-stretch object-top"
          priority
        />
      </div>

      {/* 2. Bottom Section Background (Hero Background) */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none select-none">
        <Image
          src="/images/Hero Background.png"
          alt="Footer Vector Gradient"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* 3. Ellipse / Dark Gradient Overlays (Pencahayaan Figma) */}
      <div className="absolute -left-20 bottom-0 w-125 h-125 z-0 opacity-60 pointer-events-none blur-3xl select-none">
        <Image
          src="/images/Ellipse 4.png"
          alt="Glow Left"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute -right-20 top-20 w-150 h-150 z-0 opacity-50 pointer-events-none blur-3xl select-none">
        <Image
          src="/images/Ellipse 5.png"
          alt="Glow Right"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-40 pointer-events-none select-none">
        <Image
          src="/images/Dark Gradient 02.png"
          alt="Dark Blend"
          fill
          className="object-cover"
        />
      </div>

      {/* 4. Matrix Line Animation - Penebalan & Kilatan Berjalan Bergantian */}
      <m.div
        className="absolute inset-x-0 bottom-0 h-112.5 z-10 pointer-events-none select-none"
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
          fill
          className="object-cover object-bottom"
        />
      </m.div>

      {/* ================= CONTENT MAIN LAYER (Z-20) ================= */}
      <div className="relative z-20 custom-container w-full h-full mx-auto px-6 md:px-12 flex flex-col justify-end pb-12 pt-32">
        {/* UPPER FOOTER: Kalimat Branding & Call to Action */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-20">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-white leading-[1.1] mb-6">
              Let&apos;s Craft Something
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9747FF] to-[#1179FC]">
                Extraordinary Together
              </span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg font-normal max-w-md leading-relaxed">
              Tuning bold technical workflows into highly interactive design
              beauty. Feel free to connect for full-time roles or private
              projects.
            </p>
          </m.div>

          {/* RIGHT NAVIGATION & INFO */}
        {/* <m.div
            className="flex flex-col sm:flex-row justify-start lg:justify-end gap-16 lg:gap-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          > */}
        {/* <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
                Navigation
              </span>
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

        {/* <div className="flex flex-col gap-4"> */}
        {/* <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase"> */}
        {/* Contact Information */}
        {/* </span>
              <div className="flex flex-col gap-1 text-sm text-neutral-300 font-medium">
                <a
                  href="mailto:edwin.anderson@example.com"
                  className="hover:text-white transition-colors"
                >
                  edwin.anderson@example.com
                </a>
                <span className="text-neutral-400 font-normal">
                  Jakarta, Indonesia
                </span> */}
        {/* </div>
            </div>
          </m.div> */}
        {/* </div> */}

        {/* HIERARCHY DIVIDER LINE */}
        <div className="w-full h-px  mb-8" />

        <div className="relative z-10 custom-container h-[202px] flex flex-col justify-center items-center text-center">
          {/* BARIS 1: Logo (Otomatis ganti warna mengikuti tema gelap/terang) */}
          <div className="mb-4">
            <Image
              src={
                isDarkMode
                  ? "/icons/icon-logo-black.svg"
                  : "/icons/icon-logo-white.svg"
              }
              alt="Your Logo"
              width={100}
              height={32}
              priority
              className="h-auto w-auto object-contain"
            />
          </div>

          {/* BARIS 2: Deskripsi Teks Figma */}
          <p className="max-w-[620px] text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5 px-4">
            Front-End Developer with a passion for clean code and intuitive
            design. Turning ideas into functional beauty
          </p>

          {/* BOTTOM FOOTER: Hak Cipta & Sinkronisasi Blok Sosmed Kustom */}

          {/* BLOK IKON SOSMED (SINKRONISASI PRESISI DARI HERO.TSX) */}
          <div className="items-center flex  gap-4">
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
              &copy; 2026 PTP Astula Beos Reswara. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
