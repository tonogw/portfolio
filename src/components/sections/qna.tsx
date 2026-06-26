import Image from "next/image";
import { faqData } from "@/constant/faq-data";

export default function QnA() {
  return (
    <section
      id="qna"
      className="relative max-w-360 h-216.5 mx-auto bg-white py-20 text-black overflow-hidden"
    >
      {/* Header Judul */}
      <div className="custom-container text-center flex flex-col items-center gap-3 mb-16">
        <span className="border border-[#D5D7DA] px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 shadow-sm bg-white">
          QNA
        </span>
        <h2 className="text-4xl lg:text-[48px] font-bold text-gray-900 tracking-tight mt-1">
          Your Questions, Answered
        </h2>
      </div>
    </section>
  );
}
