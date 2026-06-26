"use client";

import Hero from "@/components/sections/hero";
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about";
import Skillset from "@/components/sections/skillset";
import StandOut from "@/components/sections/standout";
import Project from "@/components/sections/project";
import Experience from "@/components/sections/experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Skillset />
      <StandOut />
      <Project />
      <Experience />
    </>
  );
}
