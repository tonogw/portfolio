import { StaticImageData } from "next/image";
import avatarJack from "../../public/images/icon-about-avatar-male-1.png";
import avatarKevin from "../../public/images/icon-about-avatar-male-2.png";
import avatarJeremy from "../../public/images/icon-about-avatar-female-1.png";
import avatarFemale from "../../public/images/image-testi-female.png";

export interface TestimoniItemType {
  id: number;
  companyFile: string; // Menyimpan nama file SVG asli secara dinamis
  companyName: string;
  name: string;
  role: string;
  message: string;
  avatar: StaticImageData;
}

export const testimoniData: TestimoniItemType[] = [
  {
    id: 1,
    companyFile: "Company=Adobe.svg", // Sesuai dengan nama file di folder public
    companyName: "Adobe",
    name: "Jack Grealish",
    role: "CEO Adobe",
    message: "They tailor their solutions to our specific needs and goals.",
    avatar: avatarJack,
  },
  {
    id: 2,
    companyFile: "Company=Airbnb.svg",
    companyName: "Airbnb",
    name: "Kevin De Bruyne",
    role: "Project Manager Air BNB",
    message:
      "They organized their work and internal management was outstanding.",
    avatar: avatarKevin,
  },
  {
    id: 3,
    companyFile: "Company=Loom.svg",
    companyName: "Loom",
    name: "Jeremy Doku",
    role: "Senior Developers Loom",
    message: "Working with them was a great experience.",
    avatar: avatarJeremy,
  },
  {
    id: 4,
    companyFile: "Company=Spotify.svg",
    companyName: "Spotify",
    name: "Female Avatar",
    role: "Senior Developers Spotify",
    message: "Working with them was a great experience.",
    avatar: avatarFemale,
  },
];
