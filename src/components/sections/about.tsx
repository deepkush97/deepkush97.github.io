import React from "react";
import { classes } from "../../configs/classnames";
import { about } from "../../configs/data";
import { InfoSection } from "../InfoSection";

export const AboutSection = () => {
  return (
    <InfoSection id="about">
      <div className="flex h-full flex-row">
        <div className="w-2/3 py-4 px-10">{about}</div>
        <div className="w-1/3 flex items-center justify-center">
          <div
            className={`w-64 h-64 flex justify-center items-center relative rounded-md bg-cover border-r-8 transform transition duration-200 ${classes.hoverRing}`}
            style={{ backgroundImage: 'url("./me.jpg")' }}
          ></div>
        </div>
      </div>
    </InfoSection>
  );
};
