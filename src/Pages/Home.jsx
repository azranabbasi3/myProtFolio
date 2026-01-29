import React from "react";
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
      className="w-full bg-[#f8f7f1] text-[#0b2e41] px-4 py-6 md:py-12 md:px-8  scroll-mt-20"
      id="home"
    >
      <div className="flex flex-col w-full md:flex-row justify-between md:items-center">
        <div className="flex flex-col gap-4 flex-1 md:gap-18">
          <h1 className="text-xl  md:text-5xl font-semibold md:font-bold leading-tight:">
            Hey There,
            <br />
            I'm Azran Abbasi
          </h1>
          <p className="md:font-bold uppercase text-sm text-[#286f6c] ">
            Mern Stack Developer
          </p>
        </div>

        <div className=" md:w-[320px]  h-[450px] mt-5 md:-mt-10 flex-1 flex md:items-center justify-center">
          <div className="relative   flex w-[350px]  md:w-[350px] md:items-center md:justify-center">
            <img
              src="/bgc.svg"
              alt="Background Image"
              className="md:absolute  md:left-1/2 md:-translate-x-1/2 w-[300px] md:w-[350px] "
            />
            <img
              src="/myimg.png"
              alt="Azran Image"
              className="absolute md:-bottom-35 md:left-1/2 md:-translate-x-1/2 w-[280px] md:w-[330px] z-20"
            />
          </div>
        </div>

        <div className="hidden md:justify-between md:flex-1  md:items-center z-50 pointer-events-auto md:flex">
          <div className="w-full ml-13 flex justify-center items-center">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
      <div className="md:absolute md:left-1/2 md:top-11/12 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer hidden md:block">
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
