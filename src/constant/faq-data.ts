type FAQData = {
  value: string;
  trigger: string;
  content: string;
};

export const faqData: FAQData[] = [
  {
    value: "item-1",
    trigger: "What's your approach to frontend development?",
    content:
      "I focus on clean, maintable code, and prioritize user experience. My approach involves close collaborations with designer to ensure exact implementation and seamless interactions all devices",
  },
  {
    value: "item-2",
    trigger: "How do you ensure website load quickly and eficiently?",
    content:
      "Efficiency is achieved through strict optimization techniques: implementing Next.js Server Components (RSC) to minimize client-side JavaScript, leveraging automated asset optimization (WebP/SVG compression), utilizing efficient data-fetching patterns, and optimizing core web vitals to reduce Time to First Byte (TTFB).",
  },
  {
    value: "item-3",
    trigger: "What kind of projects do you specilize?",
    content:
      "I specialize in building high-performance web applications, dynamic portfolio platforms, interactive dashboards, and business process automation tools. I focus heavily on integrating modern front-end tech stacks with robust API integrations and smooth UI transitions.",
  },
  {
    value: "item-4",
    trigger: "How do you handle project deadline?",
    content:
      "Deadlines are managed using structured logic and agile milestones. I break down complex deliverables into high-priority components, continuously track integration risks, and utilize automated workflows to ensure timely deployment without compromising system stability.",
  },
  {
    value: "item-5",
    trigger: "What technologies do you use?",
    content:
      "My core technical ecosystem consists of Next.js, React.js, Tailwind CSS, TypeScript, Framer Motion, Node.js, and Docker for containerized development environments, ensuring scalable and fully responsive end-to-end applications.",
  },
];
