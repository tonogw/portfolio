"use client";

import { motion as m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { sosmedIcon } from "@/constant/sosmed-data";
import { Button } from "../ui/button";

const Hero = () => {
  const nodes = [
    { top: "62%", left: "25%" },
    { top: "70%", left: "40%" },
    { top: "58%", left: "55%" },
    { top: "75%", left: "68%" },
  ];

  const words = ["I'm", "Edwin", "Anderson"];

  return (
    <section
      id="home"
      className="relative max-w-360 mx-auto h-209.5 lg:h-256  overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute max-w-360 mx-auto md:px-10 inset-0 z-0">
        <Image
          src="/images/hero-backdrop-gradient.png"
          alt="color gradient"
          fill
          sizes="1440"
          // width={1440}
          // height={1024}
          loading="eager"
          className="
          w-360 h-256
          object-cover object-center z-0"
        />
        {nodes.map((node, index) => (
          <m.div
            key={index}
            className="
          absolute w-2 h-2 rounded-full bg-white z-20 shadow-[0_0_10px_#fff]
          "
            style={{
              top: node.top,
              left: node.left,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}

        <Image
          src="/images/hero-line.svg"
          alt="matrix line"
          fill
          // width={1440}
          // height={826}

          // className="object-contain object-bottom bottom-0 z-10"
          className="
            absolute top-100 lg:top-39.75
            left-1/2 -translate-x-1/2 z-10
            min-w-150 xl:w-360 xl:h-256

            "
        />
        {/* </m.div> */}
        <m.div
          initial={{
            opacity: 0,
            x: -300,
          }}
          animate={{
            // y: [0, -4, 0],
            opacity: 1,
            x: 0,
          }}
        >
          <m.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 4, //1.2
              repeat: Infinity,
              // ease: "easeOut",
              // delay: 0.8,
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
              className="
         
            w-150 lg:w-188.5 h-auto 
            overflow-x-hidden
            "
            />
          </m.div>
        </m.div>
        <div className="absolute px-2 md:px-0 top-30 lg:top-36.5 inset-x-0 custom-container flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between z-30 text-white">
          <div className="text-[32px] md:text-[44px] lg:text-[56px] text-neutral-25 font-extrabold max-w-82.5 md:max-w-144 leading-tight">
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hey There,
            </m.div>

            <m.div
              className="flex gap-4"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              transition={{
                delay: 1.5,
              }}
            >
              {words.map((word) => (
                <m.span
                  key={word}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  {word}
                </m.span>
              ))}
            </m.div>
          </div>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-sm lg:text-lg text-[#D5D7DA ] font-normal max-w-90.25 lg:max-w-109 justify-center text-left lg:text-right my-auto"
          >
            Front-End Developer with a passion for clean code and intuitive
            design. Tuning ideas into functional beauty
          </m.p>
        </div>
        {/* Sosmed blok */}
        <div className="absolute top-160 lg:top-204 inset-x-0  custom-container z-30 flex justify-between">
          <div className="flex gap-4">
            {sosmedIcon.map((icon) => (
              <Link
                href={icon.href}
                key={icon.alt}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                   ${icon.hoverBg} 
                  group relative
                  w-12 h-12 lg:w-15 lg:h-15  flex items-center justify-center
                  rounded-full backdrop-blur-2xl bg-[#0A0D1280] shadow-2xl 
                  transition-all duration-500 
                  
                  `}
              >
                <m.div
                  animate={icon.motion.animate}
                  transition={icon.motion.transition}
                  whileHover={{ scale: 1.01 }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    // fill
                    width={icon.width}
                    height={icon.height}
                    className={`
                       ${icon.hoverBg}
                      absolute  
                      transition-opacity
                      duration-300 
                      opacity-100 
                      group-hover:opacity-0 
                      w-6 h-6 lg:w-9 lg:h-9  lg:hover:scale-110
                      
                      `}
                  />
                  <Image
                    src={icon.hoverSrc}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className={`
                      transition-all
                      w-9 h-9
                      duration-300 
                      opacity-0
                      group-hover:opacity-100
                      group-hover:w-6 group-hover:h-6 group-hover:lg:w-9 lg:h-9
                       
                       group-hover:lg:hover:w-12
                      
                      `}
                  />
                </m.div>
              </Link>
            ))}
          </div>
          {/* TOMBOL SCROLL DOWN HERO (IDENTIK GHOST BUTTON - LOGIKA LOCK 900PX) */}
          <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => {
                // Memicu scroll halus tepat sejauh 900px dari posisi paling atas halaman
                window.scrollTo({
                  top: 900,
                  behavior: "smooth",
                });
              }}
              // Membawa style kelas kontras, border, dan hover murni dari Ghost Button Anda
              className="gap-2 py-2 px-4 h-12 w-full lg:w-auto rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 border border-neutral-800 dark:border-neutral-200 hover:bg-neutral-900 dark:hover:bg-neutral-100 shadow-2xl cursor-pointer font-bold"
            >
              <span className="text-xs font-semibold tracking-wider uppercase">
                Scroll Down
              </span>

              {/* Kontainer Ikon dengan Efek Putar Framer Motion yang Identik */}
              <m.div
                style={{ width: "16px", height: "16px" }}
                className="relative flex items-center justify-center"
                whileHover={{ rotate: 360 }} // Otomatis berputar lucu 360° saat kursor menyentuh (hover)
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {/* Ikon untuk Light Mode (Tombol Hitam -> Panah White) */}
                <Image
                  src="/icons/icon-scrolldown-white.svg"
                  alt="arrow white"
                  width={16}
                  height={16}
                  style={{ width: "auto", height: "auto" }} // Mengunci aspek rasio Vercel Optimization
                  className="block dark:hidden animate-bounce"
                />

                {/* Ikon untuk Dark Mode (Tombol Putih -> Panah Black) */}
                <Image
                  src="/icons/icon-scrolldown-black.svg"
                  alt="arrow black"
                  width={16}
                  height={16}
                  style={{ width: "auto", height: "auto" }} // Mengunci aspek rasio Vercel Optimization
                  className="hidden dark:block animate-bounce"
                />
              </m.div>
            </Button>
          </m.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
