import React from "react";
import { FC } from "react";
import { classes } from "../configs/classnames";

interface SkillItemProps {
  title: string;
  items: { text: string; additionalText?: string }[];
}

export const SkillItem: FC<SkillItemProps> = ({ items, title }) => {
  return (
    <div className="px-6 md:px-10">
      <h4 className={`mb-2 text-lg ${classes.textWhite}`}>{title}</h4>
      <ul className="flex w-full flex-wrap">
        {items.map((item, index) => (
          <SkillListItem
            key={index}
            text={item.text}
            additionalText={item.additionalText}
          />
        ))}
      </ul>
    </div>
  );
};

interface SkillListItemProps {
  text: string;
  additionalText?: string;
}

export const SkillListItem: FC<SkillListItemProps> = ({
  text,
  additionalText,
}) => {
  return (
    <li className="w-full md:w-1/2 mb-2 md:mb-0">
      <span className={classes.textAccent}>-</span> {text}{" "}
      {additionalText ? `(${additionalText})` : ""}
    </li>
  );
};
