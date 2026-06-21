"use client";

import { motion as m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { sosmedIcon } from "@/constant/sosmed-data";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative h-209.5 lg:h-256 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src="/images/image-hero.png"
          alt="Hero image"
          width={1440}
          height={1024}
          loading="eager"
        /> */}

        <Image
          src="/images/hero-backdrop-gradient.png"
          alt="color gradient"
          fill
          priority
          // width={1440}
          // height={1024}
          // loading="eager"
          className="object-cover object-center z-0"
        />

        <Image
          src="/images/hero-line-white.png"
          alt="matrix line"
          width={1440}
          height={826}
          priority
          // className="object-contain object-bottom bottom-0 z-10"
          className="absolute top-100 lg:top-39.75 min-w-150 lg:w-360 h-auto left-1/2 -translate-x-1/2 z-10"
        />
        <m.div
          initial={{
            opacity: 0,
            x: -300,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.8,
          }}
          className="
          absolute
          top-85
          lg:top-94
          left-1/2
          -translate-x-1/2
          z-20
          overflow-x-hidden
          w-110 lg:w-188.5 h-auto
          "
        >
          <Image
            src="/images/potret-hero-backdrop.png"
            alt="potrait of man"
            width={754}
            height={681}
            priority
            className="
         
            w-150 lg:w-188.5 h-auto 
            overflow-x-hidden
            "
          />
        </m.div>
        <div className="absolute px-2 md:px-0 top-30 lg:top-36.5 inset-x-0 custom-container flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between z-30 text-white">
          <m.div animate={{}}>
            <h1 className="text-[32px] md:text-[44px] lg:text-[56px] text-neutral-25 font-extrabold max-w-82.5 md:max-w-144 leading-tight">
              Hey There, <br />
              I&apos;m Edwin Andersen
            </h1>
          </m.div>
          <p className="text-sm lg:text-lg text-[#D5D7DA ] font-normal max-w-90.25 lg:max-w-109 justify-center text-left lg:text-right my-auto">
            Front-End Developer with a passion for clean code and intuitive
            design. Tuning ideas into functional beauty
          </p>
        </div>
        {/* Sosmed blok */}
        <div className="absolute top-170 lg:top-204 inset-x-0  custom-container z-30 flex justify-between">
          <div className="flex gap-4 ">
            {sosmedIcon.map((icon) => (
              <Link
                href={icon.href}
                key={icon.alt}
                target="_blank"
                rel="noopener noreferrer"
                className={`${icon.hoverBg} group relative
                  w-12 lg:w-15 h-12 lg:h-15  flex items-center justify-center
                  rounded-full backdrop-blur-2xl bg-[#0A0D1280] shadow-2xl 
                  transition-all duration-500 
                  
                  `}
              >
                <m.div whileHover={{ scale: 1.2 }}>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    priority
                    className={`
                       ${icon.hoverBg}
                      absolute  
                      transition-opacity
                      duration-300 
                      opacity-100 
                      group-hover:opacity-0 
                      w-6 lg:w-9 h-6 lg:h-9 lg:hover:h-12 lg:hover:w-12
                      
                      `}
                  />
                  <Image
                    src={icon.hoverSrc}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    priority
                    className={`
                      ${icon.hoverBg}
                      transition-opacity
                      duration-300 
                      opacity-0
                      group-hover:opacity-100
                      group-hover:w-6 group-hover:lg:w-9 
                      group-hover:h-6 group-hover:lg:h-9 
                      group-hover:lg:hover:h-12 group-hover:lg:hover:w-12
                      
                      `}
                  />
                </m.div>
              </Link>
            ))}
          </div>
          <m.div whileHover={{ scale: 2 }}>
            <Button className="gap-2 py-1.5 px-2.75 lg:px-4 h-10 rounded-full bg-[#0A0D1280] ">
              <span className="hidden lg:inline">Scroll Down</span>

              <Image
                src="/icons/icon-scrolldown-white.svg"
                alt="arrow down"
                width={16}
                height={16}
              />
            </Button>
          </m.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
