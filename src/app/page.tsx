"use client";

import Hero from "@/components/sections/hero";
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about";
import Skillset from "@/components/sections/skillset";
import StandOut from "@/components/sections/standout";
import Project from "@/components/sections/project";
import Experience from "@/components/sections/experience";
import Testimonial from "@/components/sections/testimonial";
import QnA from "@/components/sections/qna";
import Contact from "@/components/sections/contact";
// import ContactDialog from "@/components/contact/ContactDialog";
// import SubmitAnimation from "@/components/animation/SubmitAnimation";

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
      <Testimonial />
      <QnA />
      <Contact />
      {/* <SubmitAnimation /> */}
    </>
  );
}
