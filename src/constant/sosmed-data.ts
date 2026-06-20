export type SosmedIconProps = {
  src: string;
  href: string;
  alt: string;
  width: number;
  height: number;
  hoverBg: string;
};

export const sosmedIcon: SosmedIconProps[] = [
  {
    src: "/icons/icon-sosmed-dribble-white.svg",
    href: "https://dribbble.com/",
    alt: "Dribble",
    width: 36,
    height: 36,
    // Color brand: bg-pink outline-dark-pink
    hoverBg: "hover:bg-[#FFABE7] hover:text-white",
  },

  {
    src: "/icons/icon-sosmed-ig-white.svg",
    href: "https://www.instagram.com/",
    alt: "Instagram",
    width: 36,
    height: 36,
    hoverBg:
      "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white",
  },
  {
    src: "/icons/icon-sosmed-in-white.svg",
    href: "https://www.linkedin.com/",
    alt: "Linkedin",
    width: 36,
    height: 36,
    hoverBg: "hover:bg-[#0a66c2] hover:text-white",
  },
];
