"use client";

import { Button } from "@/components/ui/button";
import { navigationData } from "@/constant/navigation-data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion as m } from "motion/react";
import { Sun, Moon, Menu, Sunrise } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [isDarkBg, setIsDarkBg] = useState(true);

  // const isDarkBg = scrolled || isLightBg;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true); //(window.scrollY > 0 && isDarkBg);
      } else {
        setScrolled(false);
      }
      setMounted(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;
  const isDarkMode = theme === "dark";

  const isTextBlack = scrolled && !isDarkMode;

  return (
    <header
      className={`
      fixed px-4 top-0 z-50 w-full text-white
      ${isTextBlack ? "text-black" : "text-white"}
      ${scrolled ? "backdrop-blur-3xl" : "bg-transparent"}
      `}
    >
      <div className="flex-between custom-container  h-16 md:h-21.5">
        {/* Image logo */}
        <Image
          src={
            isTextBlack
              ? "/icons/icon-logo-black.svg"
              : "/icons/icon-logo-white.svg"
          }
          alt="logo"
          priority
          width={120}
          height={40}
          className="
          max-w-35.25 max-h-11 h-auto
          "
        />

        {/* nav */}
        <nav className="hidden lg:block">
          <ul className="flex-start gap-8">
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  className={`transition-colors ${isTextBlack ? "text-black hover:text-violet-600" : "text-white hover:text-primary-200"}`}
                  href={data.href}
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <m.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className={`rounded-full h-10 w-10 border ${
                isTextBlack
                  ? "border-neutral-200 text-black hover:bg-neutral-100"
                  : "border-neutral-800 text-white hover:bg-white/10"
              }`}
              aria-label="Toggle-theme"
            >
              {isDarkMode ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
              ) : (
                // src={
                //   theme === "dark"
                //   ? "/icons/icon-sun.svg"
                //   : "/icons/icon-moon.svg"
                // }
                // alt="theme toggle"
                // width={24}
                // height={24}
                // className="dark:stroke-white"
                <Moon
                  className={`h-[1.2rem] w-[1.2rem]${isTextBlack ? "text-neutral-900" : "text-white"} text-yellow-400`}
                />
              )}
            </Button>
          </m.div>

          <m.div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            {/* button */}
            <Button
              asChild
              variant="default"
              className="hidden lg:flex px-12 gap-2 rounded-full h-12 bg-linear-50 from-[#9747FF] to-[#1179FC] hover:shadow-2xl"
            >
              <Link href="/contact" className="font-medium">
                <Image
                  src="/icons/icon-mail-white.svg"
                  alt="mail icon"
                  width={24}
                  height={24}
                  className="w-auto h-auto"
                />
                Hire Me
              </Link>
            </Button>
          </m.div>

          {/* sheet button */}
          <Sheet>
            <SheetTrigger asChild>
              {/* <Menu
              className="cursor-pointer lg:hidden"
              aria-label="Open main navigation"
              /> */}
              <Image
                src="/icons/icon-menu.svg"
                alt="menu"
                width={24}
                height={24}
                className="cursor-pointer lg:hidden"
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
                          className="hover:text-primary-200 p-4"
                          href={data.href}
                        >
                          {data.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button asChild className="mt-3 w-full">
                <SheetClose asChild>
                  <Link href="#contact">Me Hire</Link>
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
