import React, { FC } from "react";
import Link from "next/link";
import { classes } from "../configs/classnames";

interface ProjectCardProps {
  url?: string;
  repoLink?: string;
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
    <div
      className={`rounded shadow-xl mx-6 my-3 p-4 w-1/3 flex flex-col h-60 ${classes.background.dark} hover:transform hover:scale-105 duration-200`}
    >
      <div className="flex mb-4">
        <span className={`flex-1 text-lg ${classes.textWhite}`}>{title}</span>
        <div className="flex justify-start">
          {repoLink && (
            <Link href={repoLink}>
              <a
                target="_blank"
                rel="noreferrer"
                className={`bg-transparent hover:bg-aquamarine-800 hover:bg-opacity-20 ${classes.textBase} ${classes.textHover} font-normal font-mono py-1 px-2 rounded`}
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </Link>
          )}
          {url && (
            <Link href={url}>
              <a
                target="_blank"
                rel="noreferrer"
                className={`bg-transparent hover:bg-aquamarine-800 hover:bg-opacity-20 ${classes.textBase} ${classes.textHover} font-normal font-mono py-1 px-2 rounded`}
              >
                <i className="fas fa-external-link-square-alt"></i>
              </a>
            </Link>
          )}
        </div>
      </div>
      {/* <Link href={url}>
        <a target="_blank" rel="noreferrer">
        </a>
      </Link> */}

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
