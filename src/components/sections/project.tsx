"use client";

import Image from "next/image";
import { projectItem } from "@/constant/project-data";
import { motion as m, Variants } from "motion/react";
import { Button } from "../ui/button";

export default function Project() {
  // Variants untuk Kontainer Grid Animasi Berantai (Stagger)
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants untuk Masing-masing Kartu Project
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    /* FIX 1: Mengubah absolute menjadi relative standar agar alur baris section portofolio mengantre rapi */
    <section
      id="projects"
      className="relative w-full max-w-360 mx-auto bg-white py-20 text-black overflow-hidden"
    >
      {/* Bagian Header Judul */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="custom-container text-center flex flex-col items-center gap-3"
      >
        <span className="border border-[#D5D7DA] px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 shadow-sm bg-white">
          PORTFOLIO
        </span>
        <h2 className="text-4xl lg:text-[48px] font-black text-gray-900 tracking-tight mt-1">
          Latest Project
        </h2>
      </m.div>

      {/* === FIX 2: AREA GRID KARTU PORTFOLIO === */}
      {/* Menggunakan custom-container agar sejajar lurus 1184px (lg:max-w-296) se-aplikasi */}
      <m.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="custom-container grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12"
      >
        {projectItem.map((item) => (
          <m.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            /* relative & overflow-hidden mengunci agar isi overlay tidak luber keluar sudut rounded */
            className="relative w-full aspect-[580/441] rounded-3xl overflow-hidden shadow-lg group cursor-pointer border border-gray-100"
          >
            {/* Foto Dokumentasi Project */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(max-w-768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />

            {/* Efek Gradasi Hitam Transparan Halus di bagian bawah agar teks putih figma mudah dibaca */}
            <div className="absolute inset-0 bg-linier-to-t from-black/60 via-black/10 to-transparent z-10" />

            {/* === FIX 3: OVERLAY TEKS & TECH STACK (Di letakkan di Kiri Bawah di atas gambar) === */}
            <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-20 flex flex-col gap-4 items-start text-left">
              {/* Judul Project */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight drop-shadow-sm">
                {item.title}
              </h3>

              {/* === NESTED MAP: Looping barisan tech stack berupa badge pill putih figma === */}
              <ul className="flex flex-wrap gap-2.5">
                {item.tech.map((techName, idx) => (
                  <li
                    key={idx}
                    className="bg-white/95 text-gray-900 font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
                  >
                    {techName}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tombol Tanda Panah Serong Kanan Bawah Khas Figma */}
            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
              <span className="text-xl font-bold text-gray-900">↗</span>
            </div>
          </m.div>
        ))}
      </m.div>

      {/* Slider Button Navigasi Bawah */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <Button
          variant="ghost"
          size="icon"
          className="w-14 h-14 rounded-full p-0 border border-gray-100 hover:bg-gray-50 shadow-sm bg-white"
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
          className="w-14 h-14 rounded-full p-0 border border-gray-100 hover:bg-gray-50 shadow-sm bg-white"
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
