import IconHtml from "../../public/icons/icon-skillset-html.svg";
import IconRing from "../../public/icons/icon-skillset-ring.svg";
import IconMongo from "../../public/icons/icon-skillset-mongodb.svg";
import IconJs from "../../public/icons/icon-skillset-javascript.svg";
import IconDocker from "../../public/icons/icon-skillset-docker.svg";
import IconReact from "../../public/icons/icon-skillset-reactjs.svg";
import IconTs from "../../public/icons/icon-skillset-typscript.svg";
import { TargetAndTransition, Transition } from "motion";
import { StaticImageData } from "next/image";

type MotionConfig = {
  animate: TargetAndTransition;
  transition: Transition;
};

type SkillsetItem = {
  id: number;
  title: string;
  motion: MotionConfig;
  // transition: Transition;

  src: string;
  label: string;
  icon: StaticImageData;
  desc: string;
};

export const skillsetItemData: SkillsetItem[] = [
  {
    id: 1,
    title: "HTML",
    motion: {
      animate: {
        rotate: [0, 360],
      },

      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
    src: IconRing,
    label: "90%",
    icon: IconHtml,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
  {
    id: 2,
    title: "Mongo DB",
    motion: {
      animate: {
        y: [0, 3, 0],
      },
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
    src: IconRing,
    label: "90%",
    icon: IconMongo,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
  {
    id: 3,
    title: "Javascript",
    motion: {
      animate: {
        y: [0, -3, 0],
      },
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
    src: IconRing,
    label: "90%",
    icon: IconJs,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
  {
    id: 4,
    title: "Docker",
    motion: {
      animate: {
        x: [0, 3, 0],
        y: [0, 2, 0],
      },
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
    src: IconRing,
    label: "90%",
    icon: IconDocker,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
  {
    id: 5,
    title: "React JS",
    motion: {
      animate: {
        rotate: [0, 360],
      },
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
    src: IconRing,
    label: "90%",
    icon: IconReact,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
  {
    id: 6,
    title: "Typescript",
    motion: {
      animate: {
        scale: [1, 1.05, 1],
      },
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
    src: IconRing,
    label: "90%",
    icon: IconTs,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
];
