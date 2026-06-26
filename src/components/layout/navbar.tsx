"use client";
import { Button } from "@/components/ui/button";
import { navigationData } from "@/constant/navigation-data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion as m } from "motion/react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true); // Default true karena start di Hero (Gelap)

  useEffect(() => {
    // 1. Deteksi scroll sederhana untuk efek blur background navbar
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // 2. FIX TOTAL: Intersection Observer untuk mendeteksi section gelap secara akurat
    const observerOptions = {
      root: null,
      rootMargin: "-20px 0px -80% 0px", // Hanya mendeteksi bagian atas layar (area tempat navbar diam)
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Jika section berlatar gelap (#hero atau #contact) masuk ke area atas layar
        if (entry.isIntersecting) {
          setIsDarkBg(true);
        } else {
          // Jika keluar, berarti layar sedang menampilkan area terang (About, Skillset, dll)
          setIsDarkBg(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Targetkan section yang berlatar belakang gelap di page Anda
    const darkSections = ["hero", "contact"];
    darkSections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Penentuan kelas utility Tailwind secara dinamis
  const textColorClass = isDarkBg ? "text-white" : "text-gray-900";
  const linkHoverClass = isDarkBg
    ? "hover:text-primary-200"
    : "hover:text-purple-600";

  const navbarBgClass = scrolled
    ? isDarkBg
      ? "backdrop-blur-3xl bg-neutral-950/40 border-b border-white/5 shadow-2xl"
      : "backdrop-blur-3xl bg-white/60 border-b border-gray-200/50 shadow-md"
    : "bg-transparent";

  return (
    <header
      className={`
      fixed top-0 z-50 w-full transition-all duration-300 ease-in-out h-16 md:h-21.5 flex items-center
      ${textColorClass} ${navbarBgClass}
      `}
    >
      <div className="flex justify-between custom-container w-full">
        {/* Image logo - Otomatis berganti aset putih / hitam tergantung background section */}
        <Image
          src={
            isDarkBg
              ? "/icons/icon-logo-white.svg"
              : "/icons/icon-logo-black.svg"
          }
          alt="logo"
          priority
          // fill
          width={120}
          height={120}
          className="w-30 h-30  transition-all duration-300"
        />

        {/* nav */}
        <nav className="hidden lg:block">
          <ul className="flex-start gap-8 font-medium">
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  className={`transition-colors duration-300 ${linkHoverClass}`}
                  href={data.href}
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          {/* button */}
          <Button
            asChild
            variant="default"
            className="hidden lg:flex px-4 lg:px-12 gap-2 rounded-full h-12 bg-linear-50 from-[#9747FF] to-[#1179FC] hover:shadow-2xl text-white border-0"
          >
            <Link href="/contact" className="font-medium">
              <Image
                src="/icons/icon-mail-white.svg"
                alt="mail icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              Hire Me
            </Link>
          </Button>
        </m.div>

        {/* sheet button (Mobile Menu) */}
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="/icons/icon-menu.svg"
              alt="menu"
              width={24}
              height={24}
              className={`cursor-pointer lg:hidden transition-all duration-300 ${
                isDarkBg ? "" : "invert brightness-0"
              }`}
              aria-label="Open main navigation"
            />
          </SheetTrigger>
          <SheetContent>
            <nav className="mt-16" aria-label="Mobile Navigation">
              <ul className="flex flex-col gap-4">
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <SheetClose asChild>
                      <Link
                        className="hover:text-purple-600 p-4 block text-gray-900 font-medium"
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
              className="mt-6 w-full rounded-full h-12 bg-linear-50 from-[#9747FF] to-[#1179FC] text-white"
            >
              <SheetClose asChild>
                <Link href="/contact">Hire Me</Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
