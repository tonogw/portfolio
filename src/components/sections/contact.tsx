import { Input } from "@/components/ui/input";
import { motion as m } from "motion/react";

export default function Contact() {
  return (
    <section
      id="standout"
      className="mx-auto max-w-360  bg-linear-to-t from-[#F3EBFF] to-neutral-25 py-20 text-black overflow-hidden"
    >
      {/* Container pembatas aplikasi */}
      <div className="custom-container h-214.25 flex flex-col gap-12">
        {/* Header Judul */}
        <m.div
          //   variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          //   initial={{ opacity: 0, y: 15 }}
          //   animate={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col gap-2 justify-center text-center items-center"
        >
          <span className="px-4 py-1.5 bg-[#F9F5FF] border border-purple-100 rounded-full text-xs lg:text-sm font-regular w-fit text-black shadow-sm">
            Contact
          </span>
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Get in Touch
          </h2>
        </m.div>
      </div>
    </section>
  );
}
