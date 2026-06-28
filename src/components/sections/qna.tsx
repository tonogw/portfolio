"use client";

import { faqData } from "@/constant/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion as m } from "motion/react";

export default function QnA() {
  return (
    <section
      id="faq"
      className="relative max-w-360 mx-auto bg-white dark:bg-neutral-900 py-20 text-black dark:text-white overflow-hidden"
    >
      {/* Header Judul */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="custom-container text-center flex flex-col items-center gap-3 mb-16"
      >
        <span className="border border-[#D5D7DA] px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 dark:text-white shadow-sm bg-white dark:bg-neutral-800">
          QNA
        </span>
        <h2 className="text-4xl lg:text-[48px] font-black text-gray-900 dark:text-white tracking-tight mt-4">
          Your Questions, Answered
        </h2>
      </m.div>

      {/* === FIX UTAMA: KONTEN ACCORDION SCALABLE === */}
      <div className="custom-container  mx-auto px-4 lg:px-0">
        {/* Induk Accordion diletakkan di luar looping agar manajemen open/close tersinkronisasi */}
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="dark:bg-gray-200"
            >
              {/* Baris 1: Pertanyaan (Hanya berisi teks pemicu klik) */}
              <AccordionTrigger>{item.trigger}</AccordionTrigger>

              {/* Baris 2: Jawaban (Diletakkan sejajar di bawah, otomatis turun baris baru) */}
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
