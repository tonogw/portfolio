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
        duration: 6,
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
      /* FIX MOTION: Menaikkan jarak y ke 8px dan mengubah ease ke easeInOut agar efek mengambang kelihatan */
      animate: {
        y: [0, 8, 0],
      },
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
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
      /* FIX MOTION: Menggeser berlawanan arah (-8px) agar gerakannya silang dinamis antar kartu */
      animate: {
        y: [0, -8, 0],
      },
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
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
      /* FIX MOTION: Kombinasi x dan y yang seimbang menghasilkan efek simulasi kapal bergoyang lembut di air */
      animate: {
        x: [0, 4, 0],
        y: [0, 6, 0],
      },
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
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
        duration: 7,
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
      /* FIX MOTION: Skala denyut (pulse) dinaikkan sedikit agar perubahan ukuran terlihat tegas */
      animate: {
        scale: [1, 1.12, 1],
      },
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    src: IconRing,
    label: "90%",
    icon: IconTs,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
];
