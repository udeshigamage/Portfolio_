import React from "react";
import pico1 from "../assets/pico1.jpeg";
import { Spotlight } from "../Components/Spotlight";
import { TextGenerateEffect } from "../Components/Textgenerator";
import Magicbutton from "../Components/Magicbutton";
import {
  FaGithub,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa";
import { TypewriterEffectSmooth } from "../Components/Typewriter";
import { BackgroundBeams } from "../Components/background";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";

const Startup = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center overflow-hidden">
      <Spotlight fill="white" className="absolute -top-10 left-0" />
      <div className="flex flex-row justify-center items-center text-white">
        <div className="basis-2/3 ">
          <div className="flex  flex-col ">
            <div className="flex flex-col  lg:w-3/4 ">
              <TextGenerateEffect
                words="hi there ,I ' am"
                className="text-center whitespace-pre-wrap"
              />
              <TypewriterEffectSmooth
                words={[
                  {
                    text: "Udeshi",
                    className: "text-white",
                  },
                  {
                    text: "Gamage",
                    className: "text-white",
                  },
                ]}
                className="text-center whitespace-pre-wrap"
              />
              <p className="text-lg  my-2 ml-10">
                I am a passionate Full-Stack Developer with 6 months of
                internship experience in designing, developing, and deploying
                web applications. Skilled in both frontend and backend
                development, I focus on creating scalable, efficient, and
                user-friendly solutions. With a strong problem-solving mindset
                and attention to detail, I strive to build high-performance
                applications that enhance user experience and meet business
                needs.
              </p>
              <div className="flex flex-row position:relative gap-2 ml-32 my-5">
                <MdOutlineEmail className="h-6 w-6 text-neutral-500 dark:text-white mt-1" />
                <p className="text-white font-bold text-lg">
                  udeshigamage92@gmail.com
                </p>
              </div>
              <div className="flex flex-row position:relative gap-2 ml-32 ">
                <IoCallOutline className="h-6 w-6 text-neutral-500 dark:text-white mt-0.5" />
                <p className="text-white font-bold text-lg">+94760305481</p>
              </div>
              <div className="flex flex-row position:relative gap-2  ">
                <Magicbutton title="Download CV" />
                <div className="flex flex-row position:relative gap-2 ml-80 mt-7 ">
                  <AiOutlineLinkedin className="h-10 w-10 text-black  mt-1 bg-white shadow-md shadow-white rounded-lg" />
                  <FaGithub className="h-10 w-10 text-black  mt-1 bg-white shadow-md shadow-white rounded-lg" />
                  <FaWhatsapp className="h-10 w-10 text-black  mt-1 bg-white shadow-md shadow-white rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" basis-1/3  p-2   ">
          <img
            src={pico1}
            width={300}
            height={200}
            className="rounded-full shadow-md shadow-white"
          />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Startup;
