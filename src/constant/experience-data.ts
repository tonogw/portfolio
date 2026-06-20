import { StaticImageData } from "next/image";
import Slack from "../../public/icons/company/Company=Slack.svg";
import Telegram from "../../public/icons/company/Company=Telegram.svg";
import Line from "../../public/icons/company/Company=Line.svg";
import Skype from "../../public/icons/company/Company=Skype.svg";

type ExperienceData = {
  period: string;
  icon: StaticImageData;
  role: string;
  achievement: string;
};

export const experienceData: ExperienceData[] = [
  {
    period: "2021 - 2024",
    icon: Slack,
    role: "Frontend Developers",
    achievement:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
  {
    period: "2021 - 2024",
    icon: Telegram,
    role: "Frontend Developers",
    achievement:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
  {
    period: "2021 - 2024",
    icon: Line,
    role: "Frontend Developers",
    achievement:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
  {
    period: "2021 - 2024",
    icon: Skype,
    role: "Frontend Developers",
    achievement:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
];
