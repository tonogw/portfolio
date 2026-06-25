import Image from "next/image";
import { projectItem } from "@/constant/project-data";

export default function Project() {
  return (
    <section
      id="project"
      className="absolute w-full max-w-360 left-1/2 -translate-x-1/2 bg-[#FFFFFF] pt-20"
    >
      <div className="custom-container text-center">
        <span className="border border-[#D5D7DA] px-4 py-0.5 rounded-full border-spacing-md">
          PORTFOLIO
        </span>
        <h2 className="pt-4 text-5xl font-bold pb-12">Latest Project</h2>
      </div>

      <div className="">
        {projectItem.map((item) => (
          <div key={item.id} className="custom-container flex flex-row">
            <Image
              src={item.image}
              alt={item.title}
              width={580}
              height={441}
              className="object-contain"
            />

            <span>{item.title}</span>
            <ul>
              <li className="border-0 border-gray-500 bg-amber-200 h-9 py-1 px-3 rounded-full">
                {item.tech}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
