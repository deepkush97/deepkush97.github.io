import React, { FC } from "react";
import Link from "next/link";
import { classes } from "../configs/classnames";

interface ProjectCardProps {
  url?: string;
  repoLink: string;
  title: string;
  description: string;
  techStack: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  description,
  title,
  url,
  repoLink,
  techStack,
}) => {
  return (
    <Link href={repoLink}>
      <a
        target="_blank"
        rel="noreferrer"
        className={`rounded shadow-xl mx-6 my-3 p-4 w-full md:w-1/3 flex flex-col h-60 ${classes.background.dark} hover:scale-105 duration-200`}
      >
        <div className="flex mb-4">
          <span className={`flex-1 text-lg ${classes.textWhite}`}>{title}</span>
          <div className="flex justify-start">
            {url && (
              <Link href={url}>
                <a
                  title="Open live demo"
                  className={`bg-transparent hover:bg-aquamarine-800 hover:bg-opacity-20 ${classes.textBase} ${classes.textHover} font-normal font-mono py-1 px-2 rounded`}
                >
                  <i className="fas fa-external-link-square-alt"></i>
                </a>
              </Link>
            )}
          </div>
        </div>
        <p className="text-sm flex-1">{description}</p>

        <p className="flex flex-wrap text-xs gap-1">
          {techStack.map((stack, index) => (
            <div
              className={`bg-transparent  ${classes.textAccent} inline-block font-normal font-mono  px-1 border ${classes.border}`}
              title={stack}
              key={index}
            >
              {stack}
            </div>
          ))}
        </p>
      </a>
    </Link>
  );
};
