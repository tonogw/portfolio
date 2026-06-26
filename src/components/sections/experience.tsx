import { experienceData } from "@/constant/experience-data";
import { motion as m } from "motion/react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full max-w-360 mx-auto min-h-213 bg-white py-20 text-black overflow-hidden"
    >
      {/* Bagian Header Judul */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="custom-container text-center flex flex-col items-center gap-3"
      >
        <span className="border border-[#D5D7DA] px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 shadow-sm bg-white">
          WORK EXPERIENCE
        </span>
        <h2 className="text-4xl lg:text-[48px] font-black text-gray-900 tracking-tight mt-1">
          Profesional Career
        </h2>
      </m.div>

      <div className="custom-container h-30.5 bg-amber-200">
        <ul>
          {experienceData.map((data) => (
            <li key={data.id} className="flex flex-row my-2">
              <div className="overflow-hidden bg-linear-to-r from-[#9747FF] to-[#1179FC] w-40.75 h-30.5 text-white text-base font-semibold text-center mr-5.75 ">
                {data.period}
                <div>
                  <svg
                    width="140"
                    height="122"
                    viewBox="0 0 140 122"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="32.5"
                      cy="66.5"
                      r="107.5"
                      fill="url(#paint0_linear_21271_419)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_21271_419"
                        x1="-116.88"
                        y1="-52.9666"
                        x2="305.88"
                        y2="105.967"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.321139" stopColor="#9747FF" />
                        <stop offset="1" stopColor="#1179FC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="h-18.5 w-52.75 gap-6">
                <h3 className="font-semibold text-[20px] w-52.75 h-7.5 py-6 mr-6">
                  {data.role}
                </h3>

                {/* <Image
                  src={data.icon}
                  alt={data.coName}
                  width={32}
                  height={32}
                /> */}
                <span>{data.coName}</span>
              </div>
              <div className="m-6">{data.achievement}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
