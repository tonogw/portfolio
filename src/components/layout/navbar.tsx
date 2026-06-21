"use client";
import { Button } from "@/components/ui/button";
import { navigationData } from "@/constant/navigation-data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
      fixed px-4 top-0 z-50 w-full text-white
      ${scrolled ? "backdrop-blur-3xl" : "bg-transparent"}
      `}
    >
      <div className="flex-between custom-container  h-16 md:h-21.5">
        {/* Image logo */}
        <Image
          src="/icons/icon-logo-white.svg"
          alt="logo"
          priority
          width={120}
          height={40}
          className="max-w-35.25 max-h-11 stroke-black"
        />

        {/* nav */}
        <nav className="hidden lg:block">
          <ul className="flex-start gap-8">
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link className="hover:text-primary-200" href={data.href}>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* button */}
        <Button
          asChild
          variant="default"
          className="hidden lg:flex px-12 gap-2 rounded-full h-12 bg-linear-50 from-[#9747FF] to-[#1179FC]"
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
    </header>
  );
};

export default Navbar;
