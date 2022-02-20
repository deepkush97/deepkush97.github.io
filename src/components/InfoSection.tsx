import React, { FC } from "react";
import { classes } from "../configs/classnames";
import { navigation } from "../configs/data";

interface InfoSectionProps {
  id: keyof typeof navigation;
}
export const InfoSection: FC<InfoSectionProps> = ({
  id,

  children,
}) => {
  const { number, text } = navigation[id];
  return (
    <section id={id} className="min-h-80v flex flex-col py-36 md:py-28 w-full">
      <h3
        className={`text-2xl flex items-center space-x-1 ${classes.textWhite}`}
      >
        <span className={`${classes.textAccent} font-mono pl-10`}>
          {number}.
        </span>{" "}
        <span>{text}</span>
      </h3>
      {children}
    </section>
  );
};
