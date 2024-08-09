import React from "react";
import { TextGenerateEffect } from "../Components/Textgenerator";
import Magicbutton from "../Components/Magicbutton";
import { FaHome, FaLocationArrow, FaUser } from "react-icons/fa";
import { Spotlight } from "../Components/Spotlight";
import { FloatingNav } from "../Components/Navbar";
import { FaMessage } from "react-icons/fa6";
import { TypewriterEffectSmooth } from "../Components/Typewriter";

const Home = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <FaMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center overflow-hidden">
        <Spotlight fill="white" className="absolute -top-10 left-0" />

        <div className="flex flex-col text-center items-center lg:w-3/4 ">
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experience"
            className="text-center whitespace-pre-wrap"
          />
          <TypewriterEffectSmooth
            words={[
              {
                text: "hi I'm Udeshi Gamage,Fullstack developer based in Srilanka.",
                className: "text-center whitespace-pre-wrap",
              },
            ]}
          />{" "}
          <Magicbutton title="See My Work" />
        </div>
      </div>
    </div>
  );
};

export default Home;
