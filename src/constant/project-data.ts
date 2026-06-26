import { StaticImageData } from "next/image";
import projVacation from "../../public/images/image-proj-vacation.png";
import projWallet from "../../public/images/image-proj-wallet.png";

type ProjectItem = {
  id: number;
  title: string;
  image: StaticImageData;
  tech: string[];
};

export const projectItem: ProjectItem[] = [
  {
    id: 1,
    title: "Vacation Landing Page",
    image: projVacation,
    tech: ["React", "Tailwind", "Responsive"],
  },
  {
    id: 2,
    title: "Digital Wallet",
    image: projWallet,
    tech: ["React", "Tailwind", "Responsive"],
  },
  {
    id: 3,
    title: "Vacation Webpage",
    image: projVacation,
    tech: ["React", "Tailwind", "Responsive"],
  },
  {
    id: 4,
    title: "e-Wallet Digital",
    image: projWallet,
    tech: ["React", "Tailwind", "Responsive"],
  },
];
