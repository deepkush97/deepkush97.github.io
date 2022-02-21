import { FC } from "react";
import Link from "next/link";
import { classes } from "../configs/classnames";

interface SocialMediaCardProps {
  url: string;
  iconClass: string;
  description: string;
  linkText: string;
}

export const SocialMediaCard: FC<SocialMediaCardProps> = ({
  description,
  iconClass,
  url,
  linkText,
}) => {
  return (
    <div
      className={`p-4 mx-8 md:mx-3 w-full md:w-1/4 flex flex-col justify-between  text-center rounded shadow-2xl ${classes.background.dark} hover:transform duration-200`}
    >
      <h4 className={`text-xl ${classes.textWhite}`}>
        <i className={`${iconClass} fa-2x`}></i>
      </h4>
      <p>{description}</p>
      <div className="flex items-center justify-center">
        <a
          target="_blank"
          href={url}
          rel="noreferrer"
          className={`${classes.textAccent} ${classes.underline}`}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};
