type StandOut = {
  id: number;
  label: string;
  data: {
    icon: string;
    desc: string;
  }[];
};

export const standOut: StandOut[] = [
  {
    id: 1,
    label: "With Me",
    data: [
      {
        icon: "v",
        desc: "React Expert",
      },
      {
        icon: "v",
        desc: "Precise Website Implementation",
      },
      {
        icon: "v",
        desc: "TypeScript Proficiency",
      },
      {
        icon: "v",
        desc: "Clean, Maintainable Code",
      },
      {
        icon: "v",
        desc: "Responsible Website Development",
      },
      {
        icon: "v",
        desc: "Performance Optimization",
      },
      {
        icon: "v",
        desc: "UI Design Proficiency (Figma)",
      },
    ],
  },

  {
    id: 2,
    label: "Another Talent",

    data: [
      {
        icon: "x",
        desc: "Basic React Knowledge",
      },
      {
        icon: "x",
        desc: "Inconsistent Design Translation",
      },
      {
        icon: "x",
        desc: "Little to No TypeScript Knowledge",
      },
      {
        icon: "x",
        desc: "Unstructural Code",
      },
      {
        icon: "x",
        desc: "Inconsistent Responsiveness",
      },
      {
        icon: "x",
        desc: "Slow and Heavy Websites",
      },
      {
        icon: "x",
        desc: "No Design Skills",
      },
    ],
  },
];
