import { StaticImageData } from "next/image";
import myAvatar from "../../public/images/image-standout-avatar.png";
import othAvatar from "../../public/images/image-standout-avatar2.png";
import chkWhite from "../../public/icons/icon-standout-check-white.svg";
import chkBlck from "../../public/icons/icon-standout-check-black.svg";
import crossRed from "../../public/icons/icon-standout-x.svg";

type StandOut = {
  id: number;
  label: string;
  avatar: StaticImageData;
  icon: StaticImageData;
  data: {
    desc: string;
  }[];
};

export const standOut: StandOut[] = [
  {
    id: 1,
    label: "With Me",
    avatar: myAvatar,
    icon: chkWhite, // isDark ? chkWhite : chkBlack
    data: [
      {
        desc: "React Expert",
      },
      {
        desc: "Precise Website Implementation",
      },
      {
        desc: "TypeScript Proficiency",
      },
      {
        desc: "Clean, Maintainable Code",
      },
      {
        desc: "Responsible Website Development",
      },
      {
        desc: "Performance Optimization",
      },
      {
        desc: "UI Design Proficiency (Figma)",
      },
    ],
  },

  {
    id: 2,
    label: "Another Talent",
    avatar: othAvatar,
    icon: crossRed,
    data: [
      {
        desc: "Basic React Knowledge",
      },
      {
        desc: "Inconsistent Design Translation",
      },
      {
        desc: "Little to No TypeScript Knowledge",
      },
      {
        desc: "Unstructural Code",
      },
      {
        desc: "Inconsistent Responsiveness",
      },
      {
        desc: "Slow and Heavy Websites",
      },
      {
        desc: "No Design Skills",
      },
    ],
  },
];
