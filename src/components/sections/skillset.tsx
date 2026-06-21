"use client";

// import Link from "next/link";
import { skillsetItemData } from "@/constant/skillset-data";
// import { section } from "motion/react-client";
import Image from "next/image";
import {
  motion as m,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { useEffect } from "react";

export default function Skillset() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = 90;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const count = useMotionValue(0);

  useEffect(() => {
    animate(count, progress, {
      duration: 1.5,
    });
  }, []);

  const rounded = useTransform(count, (value) => Math.round(value));

  return (
    <section id="skill" className="custom-container h-237 ">
      <m.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="h-27 text-center my-15"
      >
        <h2 className="font-extrabold text-[48px] h-27 pt-5 text-black bg-pink-200">
          Skillset
        </h2>
      </m.div>
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
      gap-5 h-158
      grid grid-cols-1 md:grid-cols-2 w-full  my-5 text-left
      "
      >
        {skillsetItemData.map((data) => (
          <m.div
            key={data.id}
            variants={item}
            transition={{ duration: 0.5 }}
            className="
            border-2 border-black bg-gray-400 rounded-xl
            "
          >
            <div className="w-full flex mx-6 gap-6">
              <div className="relative w-30 h-30 my-6">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <defs>
                    <linearGradient
                      id="skillGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#9747FF" />
                      <stop offset="100%" stopColor="#1179FC" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#D5D7DA"
                    strokeWidth="14"
                    fill="none"
                  />
                  <m.circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="url(#skillGradient)"
                    strokeWidth="14"
                    strokeLinecap={"round"}
                    fill="none"
                    strokeDasharray={circumference}
                    initial={{
                      strokeDashoffset: circumference,
                    }}
                    whileInView={{
                      strokeDashoffset,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                  />

                  {/* <Image src={data.src} alt="icon" width={120} height={120} /> */}
                  <m.span
                    className="
                  absolute inset-0 flex items-center justify-center 
                  text-2xl font-medium
                  "
                  >
                    {data.label}
                    {/* {rounded} */}
                  </m.span>
                </svg>
              </div>
              <div className="w-98 my-9">
                <Image src={data.icon} alt="" />
                <h3 className="font-extrabold">{data.title}</h3>
                <p>{data.desc}</p>
              </div>
            </div>
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
