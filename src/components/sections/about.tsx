import React from "react";
import Image from "next/image";
import { classes } from "../../configs/classnames";
import { about } from "../../configs/data";
import { InfoSection } from "../InfoSection";

export const AboutSection = () => {
  return (
    <InfoSection id="about">
      <div className="flex h-full md:flex-row flex-col-reverse pt-4">
        <div className="w-full md:w-2/3 py-4 px-6 md:px-10">{about}</div>
        <div className="w-full md:w-1/3  flex items-center justify-center">
          <div
            className={`w-64 h-64 flex justify-center items-center relative rounded-md transform transition duration-200 ${classes.hoverRing}`}
          >
            <Image
              src="/me.jpg"
              alt="me"
              quality={70}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-md"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </InfoSection>
  );
};
