import Image from "next/image";
import { standOut } from "@/constant/standout-data";
import {
  motion as m,
  Variants,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "motion/react";
import { useState } from "react";

export default function StandOut() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  //   const item = {
  //     hidden: {
  //       opacity: 0,
  //       y: 0,
  //     },
  //   };

  // 1. VARIANT UNTUK UTAMA / HEADER
  //   const headerVariants: Variants = {
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    // visible: {
    //   opacity: 1,
    //   y: 0,
    //   transition: { duration: 0.6, ease: "easeOut" },
    // },
  };

  // 2. VARIANT UNTUK CARD INDUK (Mengatur kapan anak-anaknya/list mulai muncul)
  //   const cardVariants: Variants = {
  const cardVariants: Variants = {
    hidden: (isWithMe: boolean) => ({
      opacity: 0,
      y: 50,
      x: isWithMe ? -50 : 50,
    }),
    show: (isWithMe: boolean) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        // 'delayChildren' mengatur kapan list di dalamnya mulai muncul setelah card diam
        // Card "With Me" (id:1) mulai list-nya di detik 0.6. Card "Another Talent" nunggu di detik 2.6
        delayChildren: isWithMe ? 0.6 : 2.6,
        staggerChildren: 0.15, // Jeda waktu kemunculan antar baris list (150ms)
      },
    }),
  };

  // 3. VARIANT UNTUK ANAK (Masing-masing baris <li>)
  //   const listVariants: Variants = {
  const listVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  //   const [started, setStarted] = useState(false);
  //   const count = useMotionValue(0);
  //   const [display, setDisplay] = useState(0);

  //   useMotionValueEvent(count, "change", (latest) => {
  //     setDisplay(Math.round(latest));
  //   });

  return (
    <section
      id="standout"
      className="w-full bg-linear-to-t from-[#F3EBFF] to-[#fdfdfd] py-20 text-black overflow-hidden"
    >
      {/* Container pembatas aplikasi */}
      <div className="custom-container flex flex-col gap-12">
        {/* Header Judul */}
        <m.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          //   initial={{ opacity: 0, y: 15 }}
          //   animate={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col gap-2 justify-center text-center items-center"
        >
          <span className="px-4 py-1.5 bg-[#F9F5FF] border border-purple-100 rounded-full text-xs font-regular w-fit text-black shadow-sm">
            COMPARISON
          </span>
          <h2 className="text-5xl md:text-4xl lg:text-[44px] font-black text-gray-900 tracking-tight">
            Why I Stand Out
          </h2>
        </m.div>

        {/* === GRID AREA CARD === */}
        {/* Menggunakan m.div induk sebagai pengontrol viewport scroll untuk kedua card di dalamnya */}
        <m.div
          //   initial="hidden"
          //   whileInView="visible"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start w-full"
        >
          {standOut.map((card) => {
            const isWithMe = card.id === 1;

            return (
              /* === INDUK CARD === */
              <m.div
                key={card.id}
                custom={isWithMe} // Mengirim status ke variants untuk kalkulasi delay & posisi
                // variants={cardVariants}
                variants={cardVariants}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ amount: 0.2 }}
                // onViewportEnter={() => {
                //   animate(count, 90, {
                //     duration: 1.5,
                //   });
                // }}
                // animate={{
                //   boxShadow: [
                //     "0 0 0px #FF8A00",
                //     "0 0 10px #FF8A00",
                //     "0 0 5px #FF8A00",
                //   ],
                // }}
                // Animasi masuknya Card "Another Talent" di-delay total agar menunggu list "With Me" selesai
                transition={{ delay: isWithMe ? 0 : 2.0 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`w-full flex flex-col items-center p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100 transition-all ${
                  isWithMe
                    ? "bg-linear-to-r from-[#9747FF] to-[#1179FC] text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                {/* Subtitle Nama Card */}
                <m.h3
                  variants={listVariants}
                  className={`text-lg font-bold mb-6 ${isWithMe ? "text-white" : "text-gray-900"}`}
                >
                  {card.label}
                </m.h3>

                {/* Avatar Bulat */}
                <m.div
                  variants={listVariants}
                  className="w-20 h-20 rounded-full overflow-hidden border-0 border-white shadow-md mb-4 bg-gray-50"
                >
                  <Image
                    src={card.avatar}
                    alt={card.label}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </m.div>

                {/* === LIST ANAK (<li>) === */}
                <ul className="w-full flex flex-col gap-4 items-center">
                  {card.data.map((item, index) => (
                    /* Setiap <li> otomatis mewarisi state 'hidden' & 'visible' dari induknya */
                    <m.li
                      key={index}
                      variants={listVariants}
                      className="flex items-center gap-3 text-sm lg:text-base font-medium leading-tight"
                    >
                      {/* Ikon Check / Cross */}
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center mt-0.5">
                        <Image
                          src={card.icon}
                          alt="status icon"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>

                      {/* Teks Deskripsi */}
                      <span
                        className={isWithMe ? "text-white/90" : "text-gray-600"}
                      >
                        {item.desc}
                      </span>
                    </m.li>
                  ))}
                </ul>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
