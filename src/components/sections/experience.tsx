"use client";

import Image from "next/image";
import { experienceData } from "@/constant/experience-data";
import { motion as m, Variants } from "motion/react";

// interface ExperienceItemType {
//   id: number;
//   period: string;
//   icon: any;
//   coName: string;
//   role: string;
//   achievement: string;
// }

export default function Experience() {
  const listContainerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="relative max-w-360 mx-auto bg-white dark:bg-neutral-900 py-20 text-black dark:text-white overflow-hidden"
    >
      {/* HEADER JUDUL */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="custom-container  text-center flex flex-col items-center gap-3 mb-16"
      >
        <span className="border border-[#D5D7DA] px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 dark:text-white shadow-sm bg-white dark:bg-neutral-900">
          WORK EXPERIENCE
        </span>
        <h2 className="text-4xl lg:text-[48px] font-black text-gray-900 dark:text-white tracking-tight mt-4">
          Professional Career
        </h2>
      </m.div>

      {/* DAFTAR PENGALAMAN KERJA */}
      <div className="custom-container">
        <m.ul
          variants={listContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 w-full"
        >
          {experienceData.map((data) => (
            <m.li
              key={data.id}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              /* Kontainer utama kartu mengikuti Screenshot Figma (361px di mobile, lebar penuh di desktop) */
              className="relative flex flex-col md:flex-row items-start md:items-stretch border-2 border-purple-200/60 md:border-gray-100 bg-white dark:bg-neutral-500 rounded-sl p-6 md:p-0 shadow-xs transition-all duration-300 hover:shadow-md w-full max-w-[361px] md:max-w-none mx-auto md:mx-0 pt-16 md:pt-0"
            >
              {/* === BLOK PERIODE TAHUN DENGAN LENGKUNGAN SVG ASLI FIGMA === */}
              <div className="absolute md:relative top-0 left-0 md:top-auto md:left-auto w-[109px] h-[53px] md:w-[140px] md:h-auto flex items-center justify-start pl-4 md:justify-center md:pl-0 text-white text-xs md:text-base font-bold shrink-0">
                {/* Teks Tahun */}
                <span className="relative z-10 tracking-wide drop-shadow-sm">
                  {data.period}
                </span>

                {/* A. SVG Lengkung untuk Layar Mobile (Di bawah md) */}
                <div className="absolute inset-0 block md:hidden w-full h-full z-0">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 109 53"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 -2H81.5C96.6878 -2 109 10.3122 109 25.5C109 40.6878 96.6878 53 81.5 53H0V-2Z"
                      fill="url(#paint_mobile_gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="paint_mobile_gradient"
                        x1="26.2623"
                        y1="25.5"
                        x2="179.044"
                        y2="108.342"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9747FF" />
                        <stop offset="1" stopColor="#1179FC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* B. SVG Lengkung untuk Layar Desktop (md ke atas) */}
                <div className="absolute inset-0 hidden md:block w-full h-full z-0">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 140 122"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="32.5"
                      cy="66.5"
                      r="107.5"
                      fill="url(#paint_desktop_gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="paint_desktop_gradient"
                        x1="-116.88"
                        y1="-52.9666"
                        x2="305.88"
                        y2="105.967"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.321139" stopColor="#9747FF" />
                        <stop offset="1" stopColor="#1179FC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* === KONTEN TENGAH: ROLE & LOGO (Disesuaikan Pas dengan Gambar Figma) === */}
              <div className="flex flex-col justify-center p-0 md:p-6  w-full md:w-65 shrink-0 text-left gap-3 mt-4 md:mt-0">
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight leading-tight">
                  {data.role}
                </h3>

                {/* Baris Logo - FIX: Kunci Ukuran 32x32px se-aplikasi */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <Image
                      src={data.icon}
                      alt={`${data.coName} logo`}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-base font-bold text-gray-900 dark:text-white tracking-wide">
                    {data.coName}
                  </span>
                </div>
              </div>

              {/* === KONTEN KANAN: DESKRIPSI ACHIEVEMENT === */}
              <div className="flex items-center p-0 md:p-8 text-left text-gray-600 dark:text-white text-sm md:text-base leading-relaxed font-normal w-full mt-4 md:mt-0 bg-white dark:bg-neutral-500">
                {data.achievement}
              </div>
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  );
}
