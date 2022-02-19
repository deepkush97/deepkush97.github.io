import React from "react";
import { FC } from "react";
import { classes } from "../configs/classnames";
import { TechToken } from "./TechToken";

interface SkillItemProps {
  title: string;
  items: { title: string; iconComponent: FC<{ className?: string }> }[];
}

export const SkillItem: FC<SkillItemProps> = ({ items, title }) => {
  return (
    <div className="px-6 md:px-10 space-y-4">
      <h4 className={`text-lg ${classes.textWhite}`}>{title}</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-12">
        {items.map((item, index) => (
          <TechToken {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
