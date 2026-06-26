import { StaticImageData } from "next/image";
import avatarJack from "../../public/images/image-testi-JackGrealish.png";
import avatarKevin from "../../public/images/image-testi-kevin.png";
import avatarJeremy from "../../public/images/image-testi-jeremy.png";
import avatarFemale from "../../public/images/image-testi-female.png";

export interface TestimoniItemType {
  id: number;
  companyKey: "adobe" | "airbnb" | "loom" | "spotify"; // Menggunakan key untuk memanggil logo SVG kustom nanti
  name: string;
  role: string;
  message: string;
  avatar: StaticImageData;
}

export const testimoniData: TestimoniItemType[] = [
  {
    id: 1,
    companyKey: "adobe",
    name: "Jack Grealish",
    role: "CEO Adobe",
    message: "They tailor their solutions to our specific needs and goals.",
    avatar: avatarJack,
  },
  {
    id: 2,
    companyKey: "airbnb",
    name: "Kevin De Bruyne",
    role: "Project Manager Air BNB",
    message:
      "They organized their work and internal management was outstanding.",
    avatar: avatarKevin,
  },
  {
    id: 3,
    companyKey: "loom",
    name: "Jeremy Doku",
    role: "Senior Developers Loom",
    message: "Working with them was a great experience.",
    avatar: avatarJeremy,
  },
  {
    id: 4,
    companyKey: "spotify",
    name: "Female Avatar",
    role: "Senior Developers Spotify",
    message: "Working with them was a great experience.",
    avatar: avatarFemale,
  },
];
