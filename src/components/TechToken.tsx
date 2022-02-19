import React, { FC } from "react";
import { classes } from "../configs/classnames";
interface TechTokenProps {
  title: string;
  iconComponent: React.FC<{ className?: string }>;
}

export const TechToken: FC<TechTokenProps> = ({ title, iconComponent }) => {
  const IconComponent = iconComponent;
  return (
    <div
      className={`flex flex-col items-center ${classes.background.dark} p-4 rounded shadow-xl hover:scale-105 duration-200 cursor-default gap-4`}
    >
      <IconComponent className={`h-16 w-16 ${classes.textAccent}`} />
      <p className={`${classes.textBase} text-center`}>{title}</p>
    </div>
  );
};
