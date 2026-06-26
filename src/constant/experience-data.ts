import { StaticImageData } from "next/image";
import Slack from "../../public/icons/company/Company=Slack.svg";
import Telegram from "../../public/icons/company/Company=Telegram.svg";
import Line from "../../public/icons/company/Company=Line.svg";
import Skype from "../../public/icons/company/Company=Skype.svg";

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
