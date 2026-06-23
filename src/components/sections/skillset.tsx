"use client";

// import Link from "next/link";
import { skillsetItemData } from "@/constant/skillset-data";
// import { section } from "motion/react-client";
import Image from "next/image";
import {
  motion as m,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";

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

  const [started, setStarted] = useState(false);
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  // useEffect(() => {
  //   animate(count, 90, {
  //     duration: 1.5,
  //   });
  // }, []);

  // const [percent, setPercent] = useState(0);
  // const rounded = useTransform(count, (value) => Math.round(value));

  // useEffect(() => {
  //   let start = 0;
  //   const interval = setInterval(() => {
  //     start += 1;

  //     if (start >= 90) {
  //       clearInterval(interval);
  //       start = 90;
  //     }
  //     setPercent(start);
  //   }, 15);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section id="skill" className="custom-container h-237 ">
      <m.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="h-27 text-center my-15"
      >
        <div className="h-27  text-black bg-pink-200">
          <p className="bg-white  py-0.5 px-4 border border-gray-300 rounded-full">
            SKILL
          </p>
          <h2 className="font-extrabold text-[48px] pt-5">Skillset</h2>
        </div>
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
            whileHover={{
              y: -2,
              scale: 1.01,
            }}
            onViewportEnter={() => {
              animate(count, 90, {
                duration: 1.5,
              });
            }}
            variants={item}
            transition={{ duration: 0.5 }}
            // whileInView={{
            //   borderColor: "#FF8A00",
            // }}
            animate={{
              boxShadow: [
                "0 0 0px #FF8A00",
                "0 0 10px #FF8A00",
                "0 0 5px #FF8A00",
              ],
            }}
            className="
            border-2  bg-gray-400 rounded-xl 
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
                    strokeLinecap="round"
                    fill="none"
                  />
                  <m.circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="url(#skillGradient)"
                    strokeWidth="14"
                    strokeLinecap={"round"}
                    // style={{
                    //   filter: `
                    //   drop-shadow(0 0 4px #9747FF)
                    //   drop-shadow(0 0 8px #9747FF)
                    //   drop-shadow(0 0 12px #1179FC)
                    //   `,
                    // }}
                    fill="none"
                    strokeDasharray={circumference}
                    initial={{
                      strokeDashoffset: circumference,
                    }}
                    whileInView={{
                      strokeDashoffset,
                    }}
                    onViewportEnter={() => {
                      if (!started) {
                        setStarted(true);
                        animate(count, 90, {
                          duration: 1.5,
                        });
                      }
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                  />
                </svg>
                {/* <Image src={data.src} alt="icon" width={120} height={120} /> */}
                <span
                  className="
                  absolute inset-0 flex items-center justify-center 
                  text-2xl font-medium
                  "
                >
                  {/* {data.label} */}
                  {/* {rounded} */}
                  {/* {percent}% */}
                  {display}%
                </span>
              </div>
              <div className="w-98 my-9">
                <div className="flex items-center gap-2">
                  <m.div
                    // whileHover={{
                    //   scale: 1.5,
                    // }}
                    animate={data.motion.animate}
                    transition={data.motion.transition}
                    // transition={{
                    //   duration: 3,
                    //   repeat: Infinity,
                    // }}
                  >
                    <Image src={data.icon} alt="tech icon" />
                  </m.div>
                  <h3 className="font-extrabold ">{data.title}</h3>
                </div>
                <p>{data.desc}</p>
              </div>
            </div>
          </m.div>
        ))}
      </m.div>
      <div className="flex items-center justify-center my-8">
        <Button variant="link">
          <Image
            src="/icons/button-prev-left.svg"
            alt="button next"
            width={64}
            height={64}
            className="bg-amber-100 rounded-full my-8"
          />
          <Image
            src="/icons/button-next-right.svg"
            alt="button next"
            width={64}
            height={64}
            className="bg-amber-100 rounded-full"
          />
        </Button>
      </div>
    </section>
  );
}
