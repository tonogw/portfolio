import { StaticImageData } from "next/image";
import Slack from "../../public/icons/icon-work-slack.svg";
import Telegram from "../../public/icons/icon-work-telegram.svg";
import Line from "../../public/icons/icon-work-line.svg";
import Skype from "../../public/icons/icon-work-skype.svg";

type ExperienceData = {
  id: number;
  period: string;
  icon: StaticImageData;
  coName: string;
  role: string;
  achievement: string;
};

export const experienceData: ExperienceData[] = [
  {
    id: 1,
    period: "2021 - 2024",
    icon: Slack,
    coName: "Slack",
    role: "Frontend Developers",
    achievement:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
  {
    id: 2,
    period: "2021 - 2024",
    icon: Telegram,
    coName: "Telegram",
    role: "Frontend Developers",
    achievement:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
  {
    id: 3,
    period: "2021 - 2024",
    icon: Line,
    coName: "Line",
    role: "Frontend Developers",
    achievement:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
  {
    id: 4,
    period: "2021 - 2024",
    icon: Skype,
    coName: "Skype",
    role: "Frontend Developers",
    achievement:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
];
