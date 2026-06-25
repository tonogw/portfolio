"use client";

import Hero from "@/components/sections/hero";
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about";
import Skillset from "@/components/sections/skillset";
import StandOut from "@/components/sections/standout";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Skillset />
      <StandOut />
    </>
  );
}
