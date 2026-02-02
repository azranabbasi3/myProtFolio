import React from "react";
import Typewriter from "typewriter-effect";
import ScrollDown from "../components/ScrollButton";
import IconCloud from "../components/IconCloud/Icon-cloud";
const Home = () => {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <section
      className="w-full md:flex md:justify-evenly md:items-center bg-[#f8f7f1] text-[#0b2e41] md:h-screen px-4 py-6 md:py-12 scroll-mt-20"
      id="home"
    >
      <div className="flex flex-col w-full md:gap-30 md:flex-row  md:items-center ">
        <div className="flex flex-col gap-4 flex-1 md:gap-18 md:mb-15">
          <h1 className="text-xl md:text-4xl font-semibold md:font-bold">
            Hey There,
            <br />
            <Typewriter
              options={{
                strings: [
                  "I'm Azran Abbasi",
                  "I'm MERN Stack Developer",
                  "I'm Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
                pauseFor: 2000,
              }}
            />
          </h1>
        </div>

        <div className=" md:w-[320px]  h-[450px] mt-5 md:-mt-10 flex-1 flex md:items-center justify-center">
          <div className="relative   flex w-[350px]  md:w-[350px] md:items-center md:justify-center">
            <img
              src="/bgc.svg"
              alt="Background Image"
              className="md:absolute -bottom-40  md:left-1/2 md:-translate-x-1/2 w-[300px] md:w-[350px] "
            />
            <img
              src="/myimg.png"
              alt="Azran Image"
              className="absolute md:-bottom-30 md:left-1/2 md:-translate-x-1/2 w-[280px] md:w-[330px] z-20"
            />
          </div>
        </div>

        <div className="hidden md:flex-1  mb-15 z-50 pointer-events-auto md:block ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      <div className="md:absolute md:left-1/2 md:top-14/15 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer hidden md:block">
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
