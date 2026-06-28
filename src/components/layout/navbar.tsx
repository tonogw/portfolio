"use client";

import { Button } from "@/components/ui/button";
import { navigationData } from "@/constant/navigation-data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion as m } from "motion/react";
import { Sun, Moon, Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme(); // Gunakan resolvedTheme agar lebih akurat mendeteksi sistem/laptop
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // PERBAIKAN: Begitu scroll > 0, langsung aktifkan efek kabut/blur & deteksi warna
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setMounted(true);
    };

    // Jalankan sekali saat load pertama
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  // Cek apakah mode gelap sedang aktif secara valid
  const isDarkMode = resolvedTheme === "dark";

  // WARNA TEKS PINTAR: Menjadi hitam jika sudah scroll DI LUAR mode gelap global
  const isTextBlack = scrolled && !isDarkMode;

  return (
    <header
      className={`
        fixed top-0 z-60 max-w-360 w-full left-1/2 -translate-x-1/2 transition-all duration-300
        ${isTextBlack ? "text-neutral-900" : "text-white"}
        ${scrolled ? "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md shadow-xs border-b border-neutral-200/20" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-between custom-container h-16 md:h-21.5">
        {/* 1. LOGO BERUBAH WARNA SESUAI BACKGROUND */}
        <Image
          src={
            isTextBlack
              ? "/icons/icon-logo-black.svg"
              : "/icons/icon-logo-white.svg"
          }
          alt="logo"
          width={120}
          height={40}
          style={{ width: "auto", height: "auto" }}
          className="max-w-35.25 max-h-11 h-auto object-contain"
        />

        {/* 2. NAVIGATION DESKTOP */}
        <nav className="hidden lg:block">
          <ul className="flex items-center justify-start gap-8 font-semibold">
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  className={`transition-colors ${isTextBlack ? "hover:text-violet-600" : "hover:text-primary-200"}`}
                  href={data.href}
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. AREA KANAN (TOGGLE THEME + HIRE ME + MOBILE MENU) */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* INTERAKTIF TOGGLE DARK / LIGHT (Bulan & Sun Berganti Presisi) */}
          <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className={`rounded-full h-10 w-10 border transition-colors cursor-pointer ${
                isTextBlack
                  ? "border-neutral-200 text-neutral-900 hover:bg-neutral-100"
                  : "border-neutral-800 text-white hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400 fill-yellow-400 animate-pulse" />
              ) : (
                <Moon
                  className={`h-5 w-5 ${isTextBlack ? "text-neutral-900 fill-neutral-900" : "text-white fill-transparent"}`}
                />
              )}
            </Button>
          </m.div>

          {/* BUTTON HIRE ME (DESKTOP) */}
          <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              className="hidden lg:flex px-8 gap-2 rounded-full h-12 bg-linear-to-r from-[#9747FF] to-[#1179FC] hover:shadow-xl transition-all"
            >
              <Link href="#contact" className="font-semibold text-white">
                <Image
                  src="/icons/icon-mail-white.svg"
                  alt="mail icon"
                  width={20}
                  height={20}
                  style={{ width: "auto", height: "auto" }}
                  className="max-w-6 max-h-6 h-auto object-contain"
                />
                Hire Me
              </Link>
            </Button>
          </m.div>

          {/* SHEET NAVIGATION UNTUK TABLET & MOBILE */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                // Dipaksa muncul di bawah layar 1024px (termasuk 768px md) menggunakan lg:hidden
                className={`lg:hidden rounded-full h-10 w-10 flex items-center justify-center cursor-pointer ${
                  isTextBlack
                    ? "text-neutral-900 hover:bg-neutral-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Menu className="h-6 w-6 stroke-[2.5]" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-white dark:bg-neutral-950 p-6"
            >
              <nav className="mt-16" aria-label="Mobile Navigation">
                <ul className="flex flex-col gap-4">
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <SheetClose asChild>
                        <Link
                          className="block p-3 rounded-xl font-bold text-lg text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                          href={data.href}
                        >
                          {data.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>

              <Button
                asChild
                className="mt-8 w-full h-12 rounded-full bg-linear-to-r from-[#9747FF] to-[#1179FC] text-white font-semibold shadow-md"
              >
                <SheetClose asChild>
                  <Link href="#contact">Hire Me</Link>
                </SheetClose>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
