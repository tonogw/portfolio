import { StaticImageData } from "next/image";
import landingPage from "../../public/icons/icon-landingpage-white.svg";
import dashSaas from "../../public/icons/icon-saas-white.svg";
import coProfile from "../../public/icons/icon-coprofile-white.svg";
import femaleAvatar1 from "../../public/images/icon-about-avatar-female-1.png";
import femaleAvatar2 from "../../public/images/icon-about-avatar-female-2.png";
import maleAvatar1 from "../../public/images/icon-about-avatar-male-1.png";
import maleAvatar2 from "../../public/images/icon-about-avatar-male-2.png";
// import binder from "../../public/icons/icon-about-project.svg";
import fifty from "../../public/icons/icon-about-50.svg";
import file0 from "../../public/icons/icon-about-file0.svg";
import file1 from "../../public/icons/icon-about-file1.svg";
import file2 from "../../public/icons/icon-about-file2.svg";
import file3 from "../../public/icons/icon-about-file3.svg";

type AboutData = {
  title: string;
  paragraph: string;
  projIcon: StaticImageData[];
  projQty: number;
  projStatus: string;
  clientAvatar: StaticImageData[];
  clientQty: StaticImageData;
  clientTestimoni: string;
};

export const aboutData: AboutData[] = [
  {
    title: "What Do I Help?",
    paragraph:
      "I am a Frontend Developer dedicated to solving problems and creating impactful digital experiences. By combining process-driven design and modern development practices, I build intuitive and responsive digital products that not only enhance user satisfaction but also drive business success. Let&apos;s collaborate to bring your vision to life and elevate your digital presence",
    projIcon: [file0, file1, file2, file3],
    projQty: 200,
    projStatus: "Project Completed",
    clientAvatar: [maleAvatar1, femaleAvatar1, maleAvatar2, femaleAvatar2],
    clientQty: fifty,
    clientTestimoni: "Happy Client",
  },
];

type AboutItem = {
  icon: StaticImageData;
  bg: string;
  project: string;
  qty: number;
};

export const aboutItem: AboutItem[] = [
  {
    icon: landingPage,
    bg: "bg-[#177EFF]",
    project: "Landing Page",
    qty: 5,
  },
  {
    icon: dashSaas,
    bg: "bg-[#8B32FF]",
    project: "Dashboard Saas",
    qty: 7,
  },
  {
    icon: coProfile,
    bg: "bg-[#EC1C96]",
    project: "Company Profile",
    qty: 12,
  },
];
