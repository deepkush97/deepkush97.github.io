import React from "react";
import { InfoSection } from "../InfoSection";
import { ProjectCard } from "../ProjectCard";
import { projects } from "../../configs/data";

export const ProjectSection = () => {
  return (
    <InfoSection id="projects">
      <div className="flex h-full flex-row mt-4">
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              description={project.description}
              title={project.title}
              techStack={project.techStack}
              url={project.url}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </div>
    </InfoSection>
  );
};
