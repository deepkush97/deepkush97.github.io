import React, { FC } from "react";
import Link from "next/link";
import { classes } from "../configs/classnames";

interface ProjectCardProps {
  url: string;
  title: string;
  description: string;
  techStack: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  description,
  title,
  url,
  techStack,
}) => {
  return (
    <div
      className={`rounded shadow-xl mx-6 my-3 p-4 w-1/3 flex flex-col h-60 ${classes.background.dark}`}
    >
      <Link href={url}>
        <a target="_blank" rel="noreferrer">
          <h3 className={`text-lg ${classes.textWhite} pb-2`}>{title}</h3>
        </a>
      </Link>

      <p className="text-sm flex-1">{description}</p>

      <p className="flex flex-wrap text-xs">
        {techStack.map((stack, index) => (
          <span className="mx-2 mb-2" key={index}>
            {stack}
          </span>
        ))}
      </p>
    </div>
  );
};
