"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { testimoniData, TestimoniItemType } from "@/constant/testimoni-data";
import { motion as m, useAnimationControls } from "motion/react";
import { Button } from "@/components/ui/button";

// 💡 Komponen Logo: Menampilkan warna asli SVG, otomatis putih total saat kartu aktif via CSS Filter
function CompanyLogo({
  fileName,
  companyName,
  isActive,
}: {
  fileName: string;
  companyName: string;
  isActive: boolean;
}) {
  const svgPath = `/icons/company/${fileName}`;

  return (
    <div className="relative h-10 w-36 flex items-center justify-start">
      <Image
        src={svgPath}
        alt={`${companyName} logo`}
        fill
        // width={133}
        // height={40}
        priority
        /* FIX LOGO: Jika aktif/hover beri efek putih bersih (brightness-0 invert), jika tidak aktif biarkan warna asli bawaan SVG */
        className={`object-contain object-left w-auto h-full transition-all duration-300 ${
          isActive ? "brightness-0 invert" : "brightness-100"
        }`}
      />
    </div>
  );
}

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const controls = useAnimationControls();
  const isTransitioning = useRef(false);

  const originalLength = testimoniData.length;
  const extendedData = [...testimoniData, ...testimoniData, ...testimoniData];

  // Sinkronisasi Ref untuk mengunci index aktif terbaru di dalam internal scope
  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // PENGATURAN SCREEN DETECTOR
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const initialIndex = originalLength;
    const multiplier = isMobile ? 100 : 33.333;
    controls.set({ x: `-${initialIndex * multiplier}%` });
  }, [controls, originalLength, isMobile]);

  const handleSlide = useCallback(
    async (direction: number) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      const multiplier = isMobile ? 100 : 33.333;
      const currentActive = activeIndexRef.current;
      const nextIndexVirtual = originalLength + currentActive + direction;

      // Geser gerbong kereta slider menggunakan persentase murni tanpa tambahan pixel kaku agar tidak terpotong
      await controls.start({
        x: `-${nextIndexVirtual * multiplier}%`,
        transition: { type: "spring", stiffness: 260, damping: 32 },
      });

      let newRealIndex = (currentActive + direction) % originalLength;
      if (newRealIndex < 0) newRealIndex = originalLength - 1;
      setActiveIndex(newRealIndex);

      const resetIndexVirtual = originalLength + newRealIndex;
      controls.set({ x: `-${resetIndexVirtual * multiplier}%` });

      isTransitioning.current = false;
    },
    [controls, originalLength, isMobile],
  );

  // AUTOMATION AUTO-PLAY CAROUSEL
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [handleSlide]);

  return (
    <section
      id="testimonials"
      className="relative max-w-360 mx-auto bg-white dark:bg-neutral-900 py-20 text-black dark:text-white overflow-hidden"
    >
      {/* Header Judul */}
      <div className="custom-container text-center flex flex-col items-center gap-3 mb-16">
        <span className="border border-[#D5D7DA] dark:border-gray-500 px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 dark:text-white shadow-sm bg-white dark:bg-neutral-800">
          TESTIMONIALS
        </span>
        <h2 className="text-4xl lg:text-[48px] font-black text-gray-900 dark:text-white tracking-tight mt-4">
          What Our Clients Say
        </h2>
      </div>

      {/* WINDOW CONTAINER OVERFLOW HIDDEN */}
      <div className="custom-container relative overflow-hidden px-4 lg:px-0">
        {/* TRACK LINE SLIDER */}
        <m.div
          animate={controls}
          /* Menggunakan padding atau gap yang seragam dengan persentase langkah pembagi rel */
          className="flex flex-row w-full gap-[0%]"
        >
          {extendedData.map((data: TestimoniItemType, idx: number) => {
            const realIdx = idx % originalLength;
            const isActive = realIdx === activeIndex;

            return (
              <div
                key={`${data.id}-extended-${idx}`}
                onMouseEnter={() => {
                  if (!isTransitioning.current) setActiveIndex(realIdx);
                }}
                /* Pembagian lebar lajur gerbong slider: 100% penuh di mobile, atau pas 1/3 area (33.333%) di desktop */
                className="w-full md:w-[33.333%] px-3 shrink-0 box-border transition-all duration-300"
              >
                {/* KARTU VISUAL UTAMA */}
                <div
                  className={`relative flex flex-col gap-6 p-8 rounded-3xl border transition-all duration-500 text-left h-full cursor-pointer ${
                    isActive
                      ? "bg-linear-to-r from-[#9747FF] to-[#1179FC] border-transparent text-white shadow-2xl scale-[1.01] z-20"
                      : "bg-white dark:bg-neutral-500 border-gray-100 dark:border-gray-500 text-gray-900 dark:text-white shadow-sm z-10"
                  }`}
                >
                  {/* 1. Logo Perusahaan */}
                  <CompanyLogo
                    fileName={data.companyFile}
                    companyName={data.companyName}
                    isActive={isActive}
                  />

                  {/* 2. Simbol Quote */}
                  <span
                    className={`text-5xl font-black leading-none select-none transition-colors duration-300 ${
                      isActive ? "text-white/40" : "text-gray-200"
                    }`}
                  >
                    <Image
                      src="/icons/icon-testi-quote-white.svg"
                      alt="quote"
                      width={48}
                      height={48}
                    />
                  </span>

                  {/* 3. Isi Pesan Klien */}
                  <p
                    className={`text-base md:text-lg font-medium leading-relaxed grow transition-colors duration-300 ${
                      isActive
                        ? "text-white dark:text-white"
                        : "text-gray-700 dark:text-white"
                    }`}
                  >
                    {data.message}
                  </p>

                  {/* 4. Profil Klien */}
                  <div className="flex items-center gap-4 mt-4 pt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-500 shadow-sm shrink-0">
                      <Image
                        src={data.avatar}
                        alt={`${data.name} profile`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className={`font-black text-base transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {data.name}
                      </span>
                      <span
                        className={`text-xs font-semibold mt-0.5 transition-colors duration-300 ${
                          isActive ? "text-white/70" : "text-gray-400"
                        }`}
                      >
                        {data.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </m.div>
      </div>

      {/* TOMBOL NAVIGASI MANUAL */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <Button
          onClick={() => handleSlide(-1)}
          variant="ghost"
          size="icon"
          className="w-14 h-14 rounded-full p-0 border border-gray-100 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500 shadow-sm bg-white dark:bg-neutral-800 active:scale-95 transition-transform"
        >
          <Image
            src="/icons/button-prev-left.svg"
            alt="button prev"
            width={56}
            height={56}
            className="w-full h-full dark:invert"
          />
        </Button>
        <Button
          onClick={() => handleSlide(1)}
          variant="ghost"
          size="icon"
          className="w-14 h-14 rounded-full p-0 border border-gray-100 dark:border-gray-500  hover:bg-gray-50 dark:hover:bg-gray-500 shadow-sm bg-white dark:bg-neutral-800 active:scale-95 transition-transform"
        >
          <Image
            src="/icons/button-next-right.svg"
            alt="button next"
            width={56}
            height={56}
            className="w-full h-full dark:invert"
          />
        </Button>
      </div>
    </section>
  );
}
