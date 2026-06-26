"use client";

import Image from "next/image";
import { projectItem } from "@/constant/project-data";
import { motion as m, Variants } from "motion/react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Menghitung jumlah kolom total berdasarkan aturan figma:
  // Desktop: 1 baris, butuh n/2 langkah geser (jika tampil 2 sekaligus)
  // Mobile: 2 baris otomatis berpasangan di dalam 1 kolom penuh. Jadi total kolom = total item / 2
  const totalSlides = projectItem.length / 2;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const overlayContentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <section
      id="project"
      className="relative max-w-360 mx-auto bg-white py-20 text-black overflow-hidden"
    >
      {/* Header Judul Section */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="custom-container text-center flex flex-col items-center gap-3 mb-12"
      >
        <span className="border border-[#D5D7DA] px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 shadow-sm bg-white">
          PORTFOLIO
        </span>
        <h2 className="text-4xl lg:text-[48px] font-black text-gray-900 tracking-tight mt-1">
          Latest Project
        </h2>
      </m.div>

      {/* WINDOW SLIDER CAROUSEL */}
      <div className="custom-container relative overflow-hidden px-4 lg:px-0">
        {/* === TRACK TRACK CAROUSEL MULTI-ROW === */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          /* FIX 1: Kalkulasi geser dinamis. 
             Mobile: geser 100% per kolom (berisi 2 baris). Desktop: geser 50% per langkah. */
          animate={{
            x:
              typeof window !== "undefined" && window.innerWidth < 768
                ? `calc(-${currentIndex * 100}% - ${currentIndex * 24}px)`
                : `calc(-${currentIndex * 50}% - ${currentIndex * 24}px)`,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          /* FIX 2: Mobile menggunakan grid 2 baris mengalir ke kanan (grid-flow-col). 
             Desktop (md) kembali normal menjadi susunan flexbox 1 baris horizontal. */
          className="grid grid-rows-2 grid-flow-col md:flex md:flex-row gap-6 w-full cursor-grab active:cursor-grabbing"
        >
          {projectItem.map((item) => (
            <m.div
              key={item.id}
              variants={cardVariants}
              whileHover="hover"
              /* FIX 3: Ukuran presisi figma:
                 Mobile: Lebar terkunci 361px, aspek rasio 361/274.
                 Desktop: Lebar 50% minus gap, aspek rasio 580/441. */
              className="relative w-[361px] aspect-[361/274] md:w-[calc(50%-12px)] md:aspect-[580/441] rounded-3xl overflow-hidden shadow-md group border border-gray-100 bg-gray-50 shrink-0"
            >
              {/* Gambar Mockup Proyek */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="(max-w-768px) 361px, 580px"
                className="object-cover transition-transform duration-500 group-hover:scale-106"
              />

              {/* Overlay Gradasi Hitam SVG Figma */}
              <m.div
                initial={{ opacity: 0 }}
                variants={{
                  hover: { opacity: 1, transition: { duration: 0.3 } },
                }}
                className="absolute bottom-0 left-0 w-full h-[242px] z-10 pointer-events-none"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 580 242"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H580V226C580 234.837 572.837 242 564 242H16C7.16345 242 0 234.837 0 226V0Z"
                    fill="url(#paint0_linear_16451_458)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_16451_458"
                      x1="273.5"
                      y1="289.5"
                      x2="256.641"
                      y2="26.079"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="black" stopOpacity="0.8" />
                      <stop
                        offset="0.619619"
                        stopColor="black"
                        stopOpacity="0.257307"
                      />
                      <stop offset="1" stopColor="black" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </m.div>

              {/* Detail Teks Project & Tech Stack */}
              <m.div
                variants={overlayContentVariants}
                className="absolute bottom-0 left-0 w-full p-5 lg:p-8 z-20 flex flex-col gap-3 lg:gap-4 items-start text-left"
              >
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white tracking-tight drop-shadow-sm">
                  {item.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {item.tech.map((techName, idx) => (
                    <li
                      key={idx}
                      className="bg-white/95 text-gray-900 font-semibold text-[10px] md:text-sm px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-sm backdrop-blur-sm"
                    >
                      {techName}
                    </li>
                  ))}
                </ul>
              </m.div>

              {/* Tombol Panah ↗ */}
              <m.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  hover: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.2 },
                  },
                }}
                className="absolute bottom-5 right-5 lg:bottom-8 lg:right-8 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center shadow-md text-lg font-bold text-gray-900"
              >
                ↗
              </m.div>
            </m.div>
          ))}
        </m.div>
      </div>

      {/* BUTTON NAVIGASI PANAH */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <Button
          onClick={handlePrev}
          variant="ghost"
          size="icon"
          className="w-14 h-14 rounded-full p-0 border border-gray-100 hover:bg-gray-50 shadow-sm bg-white active:scale-95 transition-transform"
        >
          <Image
            src="/icons/button-prev-left.svg"
            alt="button prev"
            width={56}
            height={56}
            className="w-full h-full"
          />
        </Button>
        <Button
          onClick={handleNext}
          variant="ghost"
          size="icon"
          className="w-14 h-14 rounded-full p-0 border border-gray-100 hover:bg-gray-50 shadow-sm bg-white active:scale-95 transition-transform"
        >
          <Image
            src="/icons/button-next-right.svg"
            alt="button next"
            width={56}
            height={56}
            className="w-full h-full"
          />
        </Button>
      </div>
    </section>
  );
}
