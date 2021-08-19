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
    <a
      target="_blank"
      href={url}
      rel="noreferrer"
      className={`p-4 mx-6 md:mx-3 w-full md:w-1/4 flex flex-col justify-between  text-center rounded shadow-2xl ${classes.background.dark} hover:transform hover:scale-105 duration-200`}
      role="button"
    >
      <h4 className={`text-xl ${classes.textWhite}`}>
        <i className={`${iconClass} fa-2x`}></i>
      </h4>
      <p>{description}</p>
      <p className={classes.textAccent}>{linkText}</p>
    </a>
  );
};
