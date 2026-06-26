"use client";

import { motion as m, Variants } from "motion/react";

type AnimationState = "idle" | "loading" | "success" | "error";

export default function SubmitAnimation({ state }: { state: AnimationState }) {
  // 1. Animasi Kertas Surat (Masuk ke dalam amplop saat loading)
  // FIX: Menambahkan anotasi tipe data 'Variants' dari Framer Motion secara eksplisit
  const paperVariants: Variants = {
    idle: { y: 0, opacity: 1 },
    loading: {
      y: 40,
      opacity: [1, 0.8, 0.5, 0],
      transition: {
        duration: 0.8,
        ease: "easeInOut", // Di dalam Variants resmi, tipe ini sah
        repeat: Infinity,
        repeatType: "loop",
      },
    },
    success: { y: 40, opacity: 0 },
    error: { y: 40, opacity: 0 },
  };

  // 2. Animasi Penutup Amplop Atas (Menutup saat sukses/gagal)
  const lidVariants: Variants = {
    idle: { scaleY: 1, originY: 0 },
    loading: { scaleY: 1 },
    success: {
      scaleY: -0.9,
      originY: 0,
      fill: "#354fc4",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    error: {
      scaleY: -0.9,
      originY: 0,
      fill: "#354fc4",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  // 3. Animasi Badge Status Bulat (Muncul pop-up di akhir)
  const badgeVariants: Variants = {
    idle: { scale: 0, opacity: 0 },
    loading: { scale: 0, opacity: 0 },
    success: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.3 },
    },
    error: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.3 },
    },
  };

  return (
    <div className="relative flex items-center justify-center w-40 h-40 mx-auto">
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="80" cy="80" r="69.8871" fill="#C1CBFF" />
        <circle
          cx="80"
          cy="80"
          r="77.86"
          fill="#F3EBFF"
          stroke="white"
          stroke-width="4.27991"
        />

        <mask
          id="mask0_16510_2169"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="4"
          y="4"
          width="152"
          height="152"
        >
          <circle cx="80.0001" cy="80" r="75.3047" fill="#F3EBFF" />
        </mask>

        <g mask="url(#mask0_16510_2169)">
          {/* FIX UTAMA 1: Mengubah 'Variants' menjadi 'variants' (huruf kecil) */}
          <m.g variants={paperVariants} animate={state}>
            {/* Kertas Putih */}
            <path
              d="M34.7146 63.4232H105.721C115.176 63.4232 122.841 71.088 122.841 80.5429V96.2901H34.7146V63.4232Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M104.421 63.4233H35.2122C34.842 63.3983 34.4684 63.3856 34.0919 63.3856C25.2134 63.3856 17.9868 70.4585 17.7394 79.2772H33.2699V79.315H120.313L89.6128 79.315C89.853 70.7552 96.6684 63.8402 105.188 63.4415C104.934 63.4294 104.678 63.4233 104.421 63.4233Z"
              fill="url(#paint2_linear_16510_2169)"
            />
            {/* Garis Tulisan Surat */}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M55.6626 87.9453H100.809V90.1124H55.6626V87.9453ZM55.6625 95.1688H100.809V97.3359H55.6625V95.1688ZM100.809 102.392H55.6625V104.559H100.809V102.392Z"
              fill="url(#paint3_linear_16510_2169)"
            />
          </m.g>

          {/* BADAN BELAKANG AMPLOP */}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M81.3335 45.397C79.4786 44.0798 76.9935 44.0798 75.1386 45.3969L19.8157 84.6819C17.7809 86.1268 17.2099 88.4145 17.7394 90.4067V153.649C17.7394 158.573 21.7315 162.566 26.6559 162.566H129.816C134.741 162.566 138.733 158.573 138.733 153.649V90.407C139.262 88.4148 138.691 86.1269 136.656 84.6819L81.3335 45.397Z"
            fill="#4D64DE"
          />

          <mask
            id="mask1_16510_2169"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="17"
            y="44"
            width="122"
            height="119"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M80.1162 45.2409C78.994 44.4299 77.4781 44.4299 76.3558 45.2409L19.185 86.5581C18.6358 86.9551 18.2672 87.4545 18.0587 87.993C17.8554 88.3544 17.7394 88.7714 17.7394 89.2156V153.649C17.7394 158.573 21.7314 162.565 26.6559 162.565H129.816C134.741 162.565 138.733 158.573 138.733 153.649V89.2156C138.733 88.7717 138.617 88.3548 138.414 87.9936C138.205 87.4549 137.837 86.9552 137.287 86.5581L80.1162 45.2409Z"
              fill="#6600EB"
            />
          </mask>

          <g mask="url(#mask1_16510_2169)">
            <rect
              x="34.7145"
              y="95.2065"
              width="88.1264"
              height="39.0068"
              fill="white"
            />
            <path
              d="M17.7394 163.069V94.8075L139.455 163.069H17.7394Z"
              fill="url(#paint0_linear_16510_2169)"
            />
            <path
              d="M139.455 163.069V94.8075L17.7395 163.069H139.455Z"
              fill="url(#paint1_linear_16510_2169)"
            />
            {/* LIPATAN SEGITIGA DEPAN AMPLOP */}
            <path
              d="M73.3033 116.26C76.2299 113.781 80.5196 113.781 83.4462 116.26L133.358 158.536C138.934 163.259 135.594 172.37 128.286 172.37H28.4631C21.1556 172.37 17.8156 163.259 23.3917 158.536L73.3033 116.26Z"
              fill="#AC6EFC"
            />
          </g>

          {/* FIX UTAMA 2: Mengubah 'Variants' menjadi 'variants' (huruf kecil) */}
          <m.path
            variants={lidVariants}
            animate={state}
            d="M19.185 86.5581L76.3558 45.2409C77.4781 44.4299 78.994 44.4299 80.1162 45.2409L137.287 86.5581C138.5 87.43 139 88.5 139 89.5L80 89.5L19 89.5C19 88.5 19.5 87.43 19.185 86.5581Z"
            fill="#6600EB"
          />
        </g>

        {/* FIX UTAMA 3: Mengubah 'Variants' menjadi 'variants' (huruf kecil) */}
        <m.g variants={badgeVariants} animate={state}>
          {state === "success" ? (
            <>
              <path
                d="M124.5 96C136.374 96 146 86.3741 146 74.5C146 62.6259 136.374 53 124.5 53C112.626 53 103 62.6259 103 74.5C103 86.3741 112.626 96 124.5 96Z"
                fill="url(#paint4_linear_16510_2169)"
              />
              <path
                d="M134.738 68.7092L122.119 81.3288L116.382 75.5926"
                stroke="white"
                stroke-width="5.24451"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </>
          ) : state === "error" ? (
            <>
              <circle
                cx="124.5"
                cy="74.5"
                r="21.5"
                fill="url(#paint_error_linear)"
              />
              <path
                d="M116.5 66.5L132.5 82.5M132.5 66.5L116.5 82.5"
                stroke="white"
                stroke-width="5.24451"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </>
          ) : null}
        </m.g>

        <defs>
          <linearGradient
            id="paint0_linear_16510_2169"
            x1="0.999999"
            y1="111.5"
            x2="57"
            y2="129"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1179FC" />
            <stop offset="1" stop-color="#9747FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_16510_2169"
            x1="156.194"
            y1="111.5"
            x2="100.194"
            y2="129"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1179FC" />
            <stop offset="1" stop-color="#9747FF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_16510_2169"
            x1="70.3"
            y1="63.3856"
            x2="70.3"
            y2="79.2772"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B4C0FF" />
            <stop offset="1" stop-color="#DEE3FF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_16510_2169"
            x1="55.6626"
            y1="104.559"
            x2="100.809"
            y2="104.559"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B5C0FF" />
            <stop offset="1" stop-color="#B5C0FF" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_16510_2169"
            x1="103.206"
            y1="55.8931"
            x2="146.026"
            y2="96.1446"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8FE783" />
            <stop offset="1" stop-color="#20A10F" />
          </linearGradient>
          <linearGradient
            id="paint_error_linear"
            x1="103"
            y1="53"
            x2="146"
            y2="96"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF8383" />
            <stop offset="1" stop-color="#E11D48" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
