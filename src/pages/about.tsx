import React from "react";
import dynamic from "next/dynamic";
import { PageLayoutProps } from "../components/PageLayout";
const PageLayout = dynamic<PageLayoutProps>(
  import("../components/PageLayout").then((component) => component.PageLayout)
);
const About = () => {
  return (
    <>
      <PageLayout title="About">
        <div className="px-sm-5">
          <div className="d-flex align-items-center mb-3">
            <h2 className="flex-grow-1 m-0">Hi,</h2>
            <div className="font-weight-bolder">
              My favorite emojis : 😁🥺😋🤣
            </div>
          </div>
          <p>
            &emsp;I'm <span className="display-7">Deepanshu Kushwaha</span>, a
            Software Engineer by profession. I've pursued my Bachelor Of
            Engineering in 2019 from Government Engineering College, Dahod.
            <br /> I have a keen passion to build beautiful and eye-sparkling
            software with a standard and well-built code base. I'm a person with
            a very enthusiastic and down-to-earth personality, but I like to
            watch stars and explore nature. I like to spend my time at work,
            developing, reading blogs and articles, and listening to music. I
            even engage myself in discussing, sharing, and absorbing knowledge
            and experience from other people around me. I am really into as much
            knowledge and experience, every other small gold nuggets of the
            industry.
          </p>
          <p>
            Being in the field I'm now, was not the future I had decided it to
            be, I wanted to be a pilot. But in fact, I have a hesitation to fly
            high, above all. I want to be in an environment where I can be with
            people, learn and grow together and make it as no one feel left
            alone.
            <br />I got astonished by the fact how a computer works. My first
            programming sort of thing in class 4th. My computer teacher was
            teaching us MS-Logo (I got to know this now, at the time of writing,
            that it is MSWLogo 😁). After that, I had seen my brother which was
            in senior secondary back then, working and building projects on
            Visual Basics. After that, when I got introduced to computer subject
            in school, my interest grew cumulatively as I got in high school and
            pitched in choosing Computer Science after 10th class. My computer
            science teacher, <span className="display-8">Kapil Sehgal</span>,
            let us grew our minds in logic and programming more than needed (for
            our age more is better here) 😂. I got to know how things work and
            how logic is used in programming, and then I decided to get myself
            into this fascinating world of Computer Engineering. It was a piece
            of cake for me, but the cake contained coffee, I guess. It helped me
            to introduce myself, what's{" "}
            <span className="display-8">Engineering of Computer</span> is all
            about, more than programming, in simple terms. Then, I get into the
            industry and it's all pretty great, I could say like that.
          </p>
        </div>
      </PageLayout>
    </>
  );
};
export default About;
