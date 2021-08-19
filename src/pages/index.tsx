import React from "react";
import { HeroSection } from "../components/sections/hero";
import { AboutSection } from "../components/sections/about";
import { SkillsSection } from "../components/sections/skills";
import { ProjectSection } from "../components/sections/project";
import { ContactSection } from "../components/sections/contact";
import { ExperienceSection } from "../components/sections/experience";
const Home = () => {
  return (
    <div className="pb-24">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};
export default Home;
