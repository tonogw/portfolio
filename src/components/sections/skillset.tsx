"use client";

import { skillsetItemData } from "@/constant/skillset-data";
import Image from "next/image";
import {
  motion as m,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Skillset() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = 90;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const [started, setStarted] = useState(false);
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  return (
    <section
      id="skill"
      className="max-w-360 min-h-237 mx-auto pt-20 pb-20 bg-white"
    >
      <div className="custom-container">
        {/* Header Judul Section */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 text-center mb-14"
        >
          <span className="bg-white py-1 px-4 border border-gray-300 rounded-full text-xs font-bold text-gray-700 shadow-xs">
            SKILL
          </span>
          <h2 className="font-black text-4xl lg:text-[48px] text-gray-900 tracking-tight">
            Skillset
          </h2>
        </m.div>

        {/* GRID KARTU SKILLSET */}
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="gap-6 grid grid-cols-1 md:grid-cols-2 w-full text-left"
        >
          {skillsetItemData.map((data) => (
            <m.div
              key={data.id}
              variants={item}
              transition={{ duration: 0.4 }}
              className="
                group relative border border-[#D5D7DA] hover:border-l-[6px] hover:border-l-[#9747FF] 
                bg-white rounded-2xl p-6 transition-all duration-300 shadow-xs cursor-pointer
                hover:border-[#9747FF] hover:bg-linear-to-r hover:from-[#9747FF] hover:to-[#1179FC]
                hover:shadow-[0_10px_30px_-5px_rgba(151,71,255,0.3)] hover:scale-[1.01] hover:-translate-y-1
              "
            >
              <div className="flex gap-6 items-center">
                {/* Kolom Kiri: Progress Lingkaran SVG */}
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 shrink-0">
                  {/* FIX JAM 3: Memastikan orientasi rotasi murni 0 derajat (jam 3) */}
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    className="w-full h-full rotate-0"
                  >
                    <defs>
                      <linearGradient
                        id="skillGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#9747FF" />
                        <stop offset="100%" stopColor="#1179FC" />
                      </linearGradient>
                      <linearGradient
                        id="hoverGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#F3EBFF" />
                        <stop offset="100%" stopColor="#F3EBFF" />
                      </linearGradient>
                    </defs>

                    {/* Lingkaran Alas (Track) - STROKE 14 */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="#F2F4F7"
                      strokeWidth="14"
                      fill="none"
                      className="group-hover:stroke-white/20 transition-colors duration-300"
                    />

                    {/* Lingkaran Progress Batang - STROKE 14 */}
                    <m.circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="url(#skillGradient)"
                      strokeWidth="14"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      onViewportEnter={() => {
                        if (!started) {
                          setStarted(true);
                          animate(count, 90, {
                            duration: 1.5,
                            ease: "easeOut",
                          });
                        }
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                      className="group-hover:stroke-[url(#hoverGradient)] transition-all duration-300"
                    />
                  </svg>

                  {/* Teks Persentase di Tengah Lingkaran */}
                  <span className="absolute inset-0 flex items-center justify-center text-xl lg:text-2xl font-black text-gray-900 group-hover:text-white transition-colors duration-300">
                    {display}%
                  </span>
                </div>

                {/* Kolom Kanan: Detail Teks Deskripsi */}
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="flex items-center gap-2.5">
                    {/* Ikon Teknologi */}
                    <m.div
                      animate={data.motion.animate}
                      transition={data.motion.transition}
                      className="w-7 h-7 flex items-center justify-center shrink-0 transition-all duration-300"
                    >
                      {/* FIX ICON: Menghilangkan filter brightness/invert agar warna asli brand tetap menyala */}
                      <Image
                        src={data.icon}
                        alt={`${data.title} icon`}
                        width={28}
                        height={28}
                        className="object-contain h-auto w-auto"
                      />
                    </m.div>
                    {/* Judul Teknologi */}
                    <h3 className="font-extrabold text-lg text-gray-900 group-hover:text-white transition-colors duration-300">
                      {data.title}
                    </h3>
                  </div>
                  {/* Narasi/Deskripsi */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {data.desc}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>

        {/* TOMBOL NAVIGASI SLIDER */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button
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
      </div>
    </section>
  );
}
