import IconHtml from "../../public/icons/icon-skillset-html.svg";
import IconRing from "../../public/icons/icon-skillset-ring.svg";
import IconMongo from "../../public/icons/icon-skillset-mongodb.svg";
import IconJs from "../../public/icons/icon-skillset-javascript.svg";
import IconDocker from "../../public/icons/icon-skillset-docker.svg";
import IconReact from "../../public/icons/icon-skillset-reactjs.svg";
import IconTs from "../../public/icons/icon-skillset-typscript.svg";

type SkillsetItem = {
  id: number;
  title: string;

  src: string;
  label: string;
  icon: string;
  desc: string;
};

export const skillsetItemData: SkillsetItem[] = [
  {
    id: 1,
    title: "HTML",
    src: IconRing,
    label: "90%",
    icon: IconHtml,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
  {
    id: 2,
    title: "Mongo DB",
    src: IconRing,
    label: "90%",
    icon: IconMongo,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
  {
    id: 3,
    title: "Javascript",
    src: IconRing,
    label: "90%",
    icon: IconJs,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
  {
    id: 4,
    title: "Docker",
    src: IconRing,
    label: "90%",
    icon: IconDocker,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
  {
    id: 5,
    title: "React JS",
    src: IconRing,
    label: "90%",
    icon: IconReact,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
  {
    id: 6,
    title: "Typescript",
    src: IconRing,
    label: "90%",
    icon: IconTs,
    desc: "Building the structure of web pages with semantic markup for accessibility",
  },
];
