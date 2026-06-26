import { aboutData, aboutItem } from "@/constant/about-data";
import Image from "next/image";
import { motion as m } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-162.5 lg:min-h-137 bg-neutral-950"
    >
      {/* Wrapper Utama Latar Belakang (Max 1440px mengikuti aset figma) */}
      <div className="absolute -top-32 lg:-top-16 left-1/2 -translate-x-1/2 z-10 w-full max-w-360">
        {/* === BLOK PUTIH UTAMA (Lebar Penuh 1440px) === */}
        <div className="absolute top-10 lg:top-25 left-1/2 -translate-x-1/2 w-full bg-white pt-8  lg:py-14  z-50 text-black">
          {/* === CUSTOM CONTAINER (Membatasi isi 1184px rata kanan-kiri segaris Navbar & Footer) === */}
          <div className="custom-container flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* === Left Blok: Menu List Box Ungu === */}
            <div className="w-full lg:w-89.25 bg-[#F3EBFF] rounded-xl p-6 flex flex-col justify-center shrink-0 shadow-md">
              <ul className="text-black w-full flex flex-col gap-4">
                {aboutItem.map((item) => (
                  <li
                    key={item.project}
                    className="text-black bg-white rounded-xl font-semibold flex items-center p-4 shadow-sm"
                  >
                    <div
                      className={`w-12 h-12 lg:w-14 lg:h-14 ${item.bg} rounded-full flex items-center justify-center mr-4 shrink-0`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.project}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-gray-900">
                        {item.project}
                      </div>
                      <div className="text-xs text-gray-400 font-normal mt-0.5">
                        {item.qty} project
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* === Right Blok: Konten Teks About === */}
            <div className="w-full lg:max-w-178.75 flex flex-col gap-4 text-left py-10">
              <span className="w-25.5 text-xs font-bold tracking-wider text-black border border-[#D5D7DA]  bg-[#FFFFFF] px-0 lg:px-3 py-1 rounded-full">
                ABOUT ME
              </span>

              {aboutData.map((data) => (
                <div key={data.title} className="flex flex-col gap-4">
                  {/* Judul Utama */}
                  <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black text-gray-900 tracking-tight leading-tight">
                    {data.title}
                  </h2>

                  {/* Paragraf Deskripsi */}
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal">
                    {data.paragraph}
                  </p>

                  {/* === Blok Informasi Statistik Dinamis === */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-6 border-t border-gray-100">
                    {/* STATISTIK 1: Project Completed + Animasi Dokumen Masuk Binder */}
                    <div className="flex items-center gap-4">
                      {/* Kontainer Animasi Folder & Dokumen */}
                      <div className="relative w-23 h-26 shrink-0 overflow flex items-end justify-center">
                        {/* Layer 3: File Pink (Paling Belakang) */}
                        <m.div
                          animate={{
                            y: [0, -38, 0],
                            x: [0, -16, 0],
                            rotate: [0, -8, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.6,
                          }}
                          className="absolute bottom-6 left-3 z-10 origin-bottom-right"
                        >
                          <Image
                            src={data.projIcon[2]}
                            alt="file pink"
                            // fill
                            width={55}
                            height={55}
                            className="object-contain w-13.75 h-13.75"
                          />
                        </m.div>

                        {/* Layer 2: File Purple (Tengah) */}
                        <m.div
                          animate={{
                            y: [0, -32, 0],
                            x: [0, -5, 0],
                            rotate: [0, -6, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.3,
                          }}
                          className="absolute bottom-6 left-5 z-15 origin-bottom-right"
                        >
                          <Image
                            src={data.projIcon[3]}
                            alt="file purple"
                            // fill
                            width={58}
                            height={58}
                            className="object-contain w-14.5 h-14.5"
                          />
                        </m.div>

                        {/* Layer 1: File Doc Terdepan (User Profile) */}
                        <m.div
                          animate={{ y: [0, -27, 0], x: [0, -6, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0,
                          }}
                          className="absolute bottom-5 left-7 z-20"
                        >
                          <Image
                            src={data.projIcon[1]}
                            alt="file doc user"
                            width={62}
                            height={62}
                            className="object-contain w-15.5 h-15.5"
                          />
                        </m.div>

                        {/* Layer Terdepan: Binder Kotak Pengikat Kuning (Statis menutupi bawah file) */}
                        <div className="absolute bottom-0 left-0 w-full h-16 z-30 flex items-end">
                          <Image
                            src={data.projIcon[0]}
                            alt="binder box"
                            width={92}
                            height={64}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>

                      {/* Teks Angka Proyek */}
                      <div>
                        <h3 className="text-3xl font-black text-gray-950 leading-none">
                          {data.projQty}+
                        </h3>
                        <p className="text-xs font-semibold text-gray-700 mt-1">
                          {data.projStatus}
                        </p>
                      </div>
                    </div>

                    {/* STATISTIK 2: Happy Clients + Animasi Koin Avatar Menyebar */}
                    <div className="flex items-center gap-4">
                      {/* Kontainer Avatar Tumpuk */}
                      <div className="flex overflow-hidden shrink-0 h-13 p-1 items-center pl-3">
                        {data.clientAvatar.map((avatar, idx) => (
                          <m.div
                            key={idx}
                            animate={{ x: [15 * idx, 0, 15 * idx] }}
                            transition={{
                              duration: 4,
                              ease: "easeInOut",
                              repeat: Infinity,
                              delay: idx * 0.1,
                            }}
                            className="inline-block h-13 w-13 rounded-full ring-0 ring-white  bg-gray-200 shadow-sm"
                            style={{
                              marginLeft: idx === 0 ? 0 : "-12px",
                              zIndex: 40 - idx,
                            }}
                          >
                            <Image
                              src={avatar}
                              alt={`client avatar ${idx + 1}`}
                              width={52}
                              height={52}
                              className="h-full w-full object-cover"
                            />
                          </m.div>
                        ))}
                      </div>

                      {/* Render Gambar "50+" SVG dari Data Konstanta */}
                      <div>
                        <Image
                          src={data.clientQty}
                          alt="fifty plus logo"
                          width={91}
                          height={60}
                          priority
                          className="h-auto w-auto object-contain"
                        />
                        <p className="text-xs font-semibold text-gray-700 mt-0.5">
                          {data.clientTestimoni}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gambar Latar Belakang Kurva */}
        <Image
          src="/icons/subtract.svg"
          alt="substract"
          width={1440}
          height={390}
          priority
          className="z-10 w-full h-auto object-center"
        />
      </div>
    </section>
  );
}
