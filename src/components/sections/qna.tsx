import Image from "next/image";
import { faqData } from "@/constant/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QnA() {
  return (
    <section
      id="faq"
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
      {faqData.map((item) => (
        <div key={item.value}>
          <Accordion
            type="single"
            collapsible
            defaultValue="qna"
            className="custom-container"
          >
            <AccordionItem value={item.value}>
              <AccordionTrigger>
                {item.trigger}
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </section>
  );
}
