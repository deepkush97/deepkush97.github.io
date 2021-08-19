import React from "react";
import { skills } from "../../configs/data";
import { InfoSection } from "../InfoSection";
import { SkillItem } from "../SkillItem";

export const SkillsSection = () => {
  return (
    <InfoSection id="skills">
      <div className="flex h-full flex-col space-y-4 pt-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} title={skill.title} items={skill.items} />
        ))}
      </div>
    </InfoSection>
  );
};
