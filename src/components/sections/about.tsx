import React from "react";
import { classes } from "../../configs/classnames";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-80v flex flex-col py-24 w-full">
      <h3 className={`text-2xl ${classes.textWhite}`}>
        <span className={`${classes.textAccent} font-mono pl-10`}>01.</span>{" "}
        About
      </h3>

      <div className="flex h-full flex-row mt-4">
        <div className="w-2/3 py-4 px-10">
           I'm Deepanshu Kushwaha, a Software Engineer by profession. I've
          pursued my Bachelor Of Engineering in 2019 from Government Engineering
          College, Dahod. I have a keen passion to build beautiful and
          eye-sparkling software with a standard and well-built code base. I'm a
          person with a very enthusiastic and down-to-earth personality, but I
          like to watch stars and explore nature. I like to spend my time at
          work, developing, reading blogs and articles, and listening to music.
          I even engage myself in discussing, sharing, and absorbing knowledge
          and experience from other people around me. I am really into as much
          knowledge and experience, every other small gold nuggets of the
          industry.
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <div
            className="w-64 h-64 flex justify-center items-center relative bg-blend-multiply grayscale contrast-100 rounded-md bg-cover border-r-8 hover:ring-4 hover:ring-aquamarine-500 transform transition duration-200 hover:scale-105"
            style={{ backgroundImage: 'url("./me.jpg")' }}
          ></div>
        </div>
      </div>
      <div className="py-4 px-10 pt-8">
        <h4 className={`mb-4 text-lg ${classes.textWhite}`}>Skills</h4>
        <div className="">
          <ul className="flex w-full flex-wrap">
            <li className="w-1/2">
              <span className={classes.textAccent}>-</span>{" "}
              Typescript/Javascript{" "}
              <span className={classes.textDark}>(Proficient)</span>
            </li>
            <li className="w-1/2">
              <span className={classes.textAccent}>-</span> C#{" "}
              <span className={classes.textDark}>(Proficient)</span>
            </li>
            <li className="w-1/2">
              <span className={classes.textAccent}>-</span> HTML/CSS{" "}
              <span className={classes.textDark}>(Proficient)</span>
            </li>
            <li className="w-1/2">
              <span className={classes.textAccent}>-</span> Python{" "}
              <span className={classes.textDark}>(Limited)</span>
            </li>
            <li className="w-1/2">
              <span className={classes.textAccent}>-</span> Java{" "}
              <span className={classes.textDark}>(Limited)</span>
            </li>
            <li className="w-1/2">
              <span className={classes.textAccent}>-</span> C/C++{" "}
              <span className={classes.textDark}>(Limited)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
