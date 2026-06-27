"use client";

import { motion as m } from "motion/react";
import type { AnimationState } from "@/components/animation/envelope/types";

interface SubmitAnimationProps {
  state: AnimationState;
}

export default function SubmitAnimation({ state }: SubmitAnimationProps) {
  const isCanceled = state === "error";
  const isSuccess = state === "success";
  const isProcessing = state === "loading" || isSuccess || isCanceled;

  return (
    <div className="relative w-30.5 h-32.5 mx-auto flex items-end justify-center perspective:800px">
      {/* 1. TUTUP SEGITIGA AMPLOP */}
      <m.div
        className="absolute bottom-16.5 left-0 w-30.5 h-11.25 origin-bottom"
        initial={{ rotateX: 0, zIndex: 10 }}
        animate={
          isSuccess
            ? { rotateX: 180, y: 2, zIndex: 40 } // Menutup ke depan kertas
            : { rotateX: 0, zIndex: 10 }
        }
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
      >
        <svg
          width="122"
          height="46"
          viewBox="0 0 122 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M63.7804 0.987894C61.9255 -0.329296 59.4404 -0.329299 57.5855 0.987891L2.26259 40.2729C0.227838 41.7178 -0.343238 44.0054 0.186314 45.9976H121.18C121.709 44.0057 121.138 41.7178 119.103 40.2729L63.7804 0.987894Z"
            fill="#4D64DE"
          />
        </svg>
      </m.div>

      {/* 2. KANTONG MASKING KERTAS (DITINGGIKAN AGAR KERTAS TERLIHAT MENCUAT) */}
      <div className="absolute bottom-0 left-[16px] w-22.25 h-28.75 overflow-hidden z-20 pointer-events-none">
        <m.div
          className="relative w-full h-full flex flex-col items-center"
          initial={{ y: 15, opacity: 1 }}
          animate={
            isSuccess
              ? { y: 85, opacity: 0 } // Sukses: Meluncur amblas ke bawah
              : isProcessing
                ? { y: [15, 5, 15] } // Loading: Mengambang naik turun menyembul di atas
                : { y: 15 }
          }
          transition={
            isSuccess
              ? { duration: 0.5, ease: "backIn" }
              : isProcessing
                ? { repeat: Infinity, duration: 1.8, ease: "easeInOut" }
                : { duration: 0.3 }
          }
        >
          {/* STRUKTUR KERTAS PUTIH FIGMA */}
          <div className="relative w-22.25 h-11.25 bg-white rounded-t-lg shadow-sm border border-neutral-100 flex flex-col items-center pt-2 px-2">
            {/* Garis Atas Kertas (Gradasi Biru) */}
            <div className="w-full mb-1">
              <svg
                width="103"
                height="16"
                viewBox="0 0 103 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto scale-90 origin-left"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M86.6817 0.0377564H17.4728C17.1026 0.0127209 16.729 0 16.3525 0C7.47398 0 0.247424 7.07293 0 15.8916H15.5305V15.9294H102.573L71.8735 15.9294C72.1136 7.36965 78.9291 0.454641 87.4482 0.0559175C87.1943 0.0438557 86.9387 0.0377564 86.6817 0.0377564Z"
                  fill="url(#paint0_linear_16510_2188)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_16510_2188"
                    x1="52.5607"
                    y1="0"
                    x2="52.5607"
                    y2="15.8916"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B4C0FF" />
                    <stop offset="1" stopColor="#DEE3FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Garis Teks Simulasi Tulisan */}
            <div className="w-full">
              <svg
                width="46"
                height="17"
                viewBox="0 0 46 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3/4 h-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.00012207 0H45.1469V2.16704H0.00012207V0ZM-2.00875e-05 7.22352H45.1467V9.39056H-2.00875e-05V7.22352ZM45.1467 14.447H-2.00875e-05V16.614H45.1467V14.447Z"
                  fill="url(#paint0_linear_16510_2197)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_16510_2197"
                    x1="0.00012207"
                    y1="16.614"
                    x2="45.1469"
                    y2="16.614"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B5C0FF" />
                    <stop offset="1" stopColor="#B5C0FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </m.div>
      </div>

      {/* 3. BADAN DEPAN AMPLOP BERMASKER */}
      <div className="absolute bottom-0 left-0 w-30.25 h-27.75 z-30 pointer-events-none">
        <svg
          width="121"
          height="111"
          viewBox="0 0 121 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <mask
            id="mask0_16510_2178"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="121"
            height="118"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.3769 0.608293C61.2546 -0.202765 59.7387 -0.202764 58.6165 0.608294L1.44562 41.9255C0.896377 42.3224 0.527782 42.8219 0.319321 43.3604C0.115982 43.7218 0 44.1388 0 44.583V109.016C0 113.941 3.99205 117.933 8.91649 117.933H112.077C117.001 117.933 120.993 113.941 120.993 109.016V44.583C120.993 44.139 120.877 43.7222 120.674 43.361C120.466 42.8222 120.097 42.3226 119.548 41.9255L62.3769 0.608293Z"
              fill="#6600EB"
            />
          </mask>
          <g mask="url(#mask0_16510_2178)">
            <rect
              x="16.9751"
              y="50.5739"
              width="88.1264"
              height="39.0068"
              fill="white"
            />
            <path
              d="M0 118.437V50.1749L121.716 118.437H0Z"
              fill="url(#paint0_linear_16510_2178)"
            />
            <path
              d="M121.716 118.437V50.1749L0.00012207 118.437H121.716Z"
              fill="url(#paint1_linear_16510_2178)"
            />
            <path
              d="M55.5639 71.627C58.4905 69.148 62.7802 69.148 65.7068 71.627L115.618 113.904C121.194 118.627 117.854 127.738 110.547 127.738H10.7237C3.41622 127.738 0.0762501 118.627 5.65228 113.904L55.5639 71.627Z"
              fill="#AC6EFC"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_16510_2178"
              x1="-16.7394"
              y1="66.8674"
              x2="39.2606"
              y2="84.3674"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1179FC" />
              <stop offset="1" stopColor="#9747FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_16510_2178"
              x1="138.455"
              y1="66.8674"
              x2="82.4551"
              y2="84.3674"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1179FC" />
              <stop offset="1" stopColor="#9747FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 4. SEAlING BADGE STATUS (MENYEGEL DI ATAS LIPATAN TUTUP) */}
      <m.div
        className="absolute bottom-[48px] z-50 flex items-center justify-center w-8.5 h-8.5 rounded-full shadow-md"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isSuccess
            ? { scale: 1, opacity: 1, backgroundColor: "#10B981" } // Hijau
            : isCanceled
              ? { scale: 1, opacity: 1, backgroundColor: "#EF4444" } // Merah
              : { scale: 0, opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 220, delay: 1.1 }}
      >
        {isSuccess && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
        {isCanceled && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </m.div>
    </div>
  );
}
