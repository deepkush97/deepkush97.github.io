import Link from "next/link";
import React from "react";
import { classes } from "../../configs/classnames";
import { navigation } from "../../configs/data";
const contactSectionInfo = navigation["contact"];
export const HeroSection = () => {
  return (
    <section id="home" className="min-h-80v pb-24">
      <p className={`${classes.textAccent} font-mono`}> Hi, my name is</p>
      <h1
        className={`text-5xl md:text-7xl  font-extrabold ${classes.textWhite}`}
      >
        Deepanshu Kushwaha
      </h1>
      <h2 className={`text-4xl md:text-5xl font-bold mb-6`}>
        Listener. Learner. Do-er.
      </h2>
      <div className="w-full sm:w-2/3 mb-4">
        <p className={`text-lg font-medium`}>
          I'm a Software Engineer. <br />I have an experience in NodeJS, React
          and .NET Core, ASP.NET Core and many more things.{" "}
        </p>
      </div>
      <Link href={`/#${contactSectionInfo.id}`}>
        <a
          className={`bg-transparent ${classes.background.hoverTransparentAccent} ${classes.textAccent} inline-block font-normal font-mono my-4 py-4 px-6 border ${classes.border}`}
        >
          Contact me
        </a>
      </Link>
    </section>
  );
};
