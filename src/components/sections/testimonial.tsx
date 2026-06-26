"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimoniData, TestimoniItemType } from "@/constant/testimoni-data";
import { motion as m, Variants } from "motion/react";
import { Button } from "@/components/ui/button";

// 💡 Sub-komponen render logo SVG murni figma agar bisa ganti warna otomatis
function CompanyLogo({
  companyKey,
  isActive,
}: {
  companyKey: string;
  isActive: boolean;
}) {
  if (companyKey === "adobe") {
    return (
      <svg
        width="133"
        height="48"
        viewBox="0 0 133 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-colors duration-300 ${isActive ? "text-white" : "text-[#FF0000]"}`}
      >
        <path d="M14.635 6H0V41L14.635 6Z" fill="currentColor" />
        <path d="M24.9321 6H39.548V41L24.9321 6Z" fill="currentColor" />
        <path
          d="M19.7837 18.8999L29.0986 41.0001H22.9872L20.2032 33.9639H13.3862L19.7837 18.8999Z"
          fill="currentColor"
        />
        <path
          d="M63.4236 28.2579L65.1493 33.2061C65.2065 33.3301 65.2923 33.3873 65.4448 33.3873H68.7627C68.9439 33.3873 68.9725 33.3015 68.9439 33.1203L62.0888 14.0806C62.0602 13.928 62.0316 13.8994 61.879 13.8994H57.7603C57.6459 13.8994 57.5791 13.9852 57.5791 14.1092C57.5219 15.1103 57.4361 15.4154 57.3122 15.7109L51.2007 33.0917C51.1721 33.3015 51.2389 33.3873 51.4105 33.3873H54.3756C54.5568 33.3873 54.6426 33.3301 54.7093 33.1489L56.3397 28.2579H63.4236ZM57.2836 25.0258C58.1798 22.3181 59.362 18.8477 59.8387 16.8645H59.8673C60.4584 18.943 61.8504 23.0618 62.4797 25.0258H57.2836Z"
          fill="currentColor"
        />
        <path
          d="M77.7567 33.6828C79.5396 33.6828 81.4369 33.3587 83.3628 32.5292C83.5154 32.472 83.544 32.4052 83.544 32.2622C83.4867 31.7283 83.42 30.956 83.42 30.3649V12.4407C83.42 12.3262 83.42 12.269 83.277 12.269H80.0449C79.921 12.269 79.8638 12.3262 79.8638 12.4788V18.5521C79.3584 18.4949 79.0057 18.4663 78.5862 18.4663C73.371 18.4663 70.1675 21.9081 70.1675 26.208C70.1675 31.1944 73.4568 33.6828 77.7567 33.6828ZM79.8638 30.3649C79.3298 30.5365 78.7387 30.6033 78.1381 30.6033C75.7736 30.6033 73.8381 29.2685 73.8381 26.0269C73.8381 23.1571 75.8308 21.46 78.4718 21.46C79.0057 21.46 79.4729 21.5172 79.8638 21.6698V30.3649Z"
          fill="currentColor"
        />
        <path
          d="M93.8548 18.4663C89.4024 18.4663 86.647 21.8795 86.647 26.0937C86.647 29.8597 88.8398 33.6829 93.7881 33.6829C97.9736 33.6829 100.91 30.6033 100.91 25.9983C100.91 21.9368 98.4217 18.4663 93.8548 18.4663ZM93.6737 21.46C96.1907 21.46 97.2585 23.6243 97.2585 26.0937C97.2585 29.1446 95.6854 30.6605 93.8548 30.6605C91.5952 30.6605 90.2604 28.7632 90.2604 26.0269C90.2604 23.2143 91.681 21.46 93.6737 21.46Z"
          fill="currentColor"
        />
        <path
          d="M104.252 12.269C104.128 12.269 104.042 12.3262 104.042 12.4788V32.7675C104.042 32.8534 104.128 33.0059 104.252 33.0345C105.672 33.4731 107.16 33.6828 108.695 33.6828C113.09 33.6828 117.361 30.956 117.361 25.4644C117.361 21.4886 114.634 18.4663 110.363 18.4663C109.381 18.4663 108.466 18.6188 107.665 18.8858L107.627 12.5074C107.627 12.2976 107.57 12.269 107.36 12.269H104.252ZM113.71 25.8267C113.71 29.1159 111.459 30.6605 109.028 30.6605C108.523 30.6605 108.075 30.6319 107.665 30.5079V21.8509C108.132 21.6698 108.695 21.5172 109.734 21.5172C112.079 21.5172 113.71 23.0045 113.71 25.8267Z"
          fill="currentColor"
        />
        <path
          d="M129.423 26.8945C130.872 26.8945 132.064 26.8659 132.474 26.7706C132.627 26.742 132.684 26.6848 132.713 26.5608C132.798 26.2367 132.836 25.5597 132.836 24.7303C132.836 21.9082 131.139 18.4663 126.754 18.4663C122.273 18.4663 119.784 22.1179 119.784 26.2367C119.784 29.8883 121.71 33.6829 127.106 33.6829C129.128 33.6829 130.434 33.3587 131.559 32.8248C131.673 32.7676 131.73 32.6722 131.73 32.5006V30.0313C131.73 29.8883 131.645 29.8597 131.559 29.9169C130.434 30.3936 129.213 30.6319 127.879 30.6319C124.856 30.6319 123.483 28.9635 123.398 26.8945H129.423ZM123.398 24.3394C123.636 22.8902 124.551 21.317 126.601 21.317C128.861 21.317 129.452 23.2143 129.452 24.0724C129.452 24.101 129.452 24.225 129.452 24.3108C129.328 24.3394 128.947 24.3394 127.821 24.3394H123.398Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // Placeholder Logo Text biasa untuk Airbnb & Loom (bisa diganti SVG asli nanti)
  return (
    <span
      className={`text-2xl font-black transition-colors duration-300 ${isActive ? "text-white" : "text-gray-900"}`}
    >
      {companyKey.toUpperCase()}
    </span>
  );
}

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTOMATION CAROUSEL INFINITE LOOP
  // Menggeser fokus warna gradient setiap 4 detik secara bergantian
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimoniData.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimoniData.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimoniData.length - 1 ? 0 : prev + 1,
    );
  };

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-white py-20 text-black overflow-hidden"
    >
      {/* Header Judul Section */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="custom-container text-center flex flex-col items-center gap-3 mb-16"
      >
        <span className="border border-[#D5D7DA] px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 shadow-sm bg-white">
          TESTIMONIALS
        </span>
        <h2 className="text-4xl lg:text-[48px] font-black text-gray-900 tracking-tight mt-1">
          What Our Clients Say
        </h2>
      </m.div>

      {/* TRACK CAROUSEL CARDS */}
      <div className="custom-container relative px-4 lg:px-0">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-6 w-full items-stretch"
        >
          {testimoniData.map((data: TestimoniItemType, idx: number) => {
            // Kartu aktif jika indeksnya terpilih oleh auto-loop atau manual klik
            const isActive = idx === activeIndex;

            return (
              <m.div
                key={data.id}
                variants={cardVariants}
                // Mengizinkan user meng-override fokus manual via kursor hover mouse
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative flex flex-col gap-6 p-8 rounded-3xl border transition-all duration-500 w-full md:w-[calc(33.33%-16px)] text-left shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-linear-to-b from-[#9747FF] to-[#1179FC] border-transparent text-white shadow-2xl scale-[1.02] z-20"
                    : "bg-white border-gray-100 text-gray-900 shadow-sm z-10"
                }`}
              >
                {/* 1. Baris Atas: Logo Perusahaan */}
                <div className="h-12 flex items-center justify-start">
                  <CompanyLogo
                    companyKey={data.companyKey}
                    isActive={isActive}
                  />
                </div>

                {/* 2. Simbol Tanda Petik (Quote Icon) Khas Figma */}
                <span
                  className={`text-5xl font-black leading-none select-none transition-colors duration-300 ${
                    isActive ? "text-white/40" : "text-gray-200"
                  }`}
                >
                  ”
                </span>

                {/* 3. Baris Tengah: Isi Pesan Rekomendasi / Message */}
                <p
                  className={`text-base md:text-lg font-medium leading-relaxed grow transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-700"
                  }`}
                >
                  {data.message}
                </p>

                {/* 4. Baris Bawah: Info Profil Klien */}
                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-gray-100/20">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
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
                        isActive ? "text-white" : "text-gray-900"
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
              </m.div>
            );
          })}
        </m.div>
      </div>

      {/* BUTTON NAVIGASI MANUAL */}
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
