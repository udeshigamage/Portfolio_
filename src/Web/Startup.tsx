import pico1 from "../assets/pico1.jpeg";
import { Spotlight } from "../Components/Spotlight";
import { TextGenerateEffect } from "../Components/Textgenerator";
import Magicbutton from "../Components/Magicbutton";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TypewriterEffectSmooth } from "../Components/Typewriter";
import { BackgroundBeams } from "../Components/background";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";

const Startup = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center overflow-hidden">
      <Spotlight fill="white" className="absolute -top-10 left-0" />
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center text-white">
        {/* Text Section */}
        <div className="sm:basis-2/3 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex flex-col lg:w-3/4">
            <TextGenerateEffect
              words="hi there ,I ' am"
              className="whitespace-pre-wrap"
            />
            <TypewriterEffectSmooth
              words={[
                { text: "Udeshi", className: "text-white" },
                { text: "Gamage", className: "text-white" },
              ]}
              className="whitespace-pre-wrap"
            />
            <p className="lg:text-lg my-2 lg:ml-10 text-sm px-5 sm:px-0">
              I am a passionate Full-Stack Developer with 6 months of internship
              experience in designing, developing, and deploying web
              applications. Skilled in both frontend and backend development, I
              focus on creating scalable, efficient, and user-friendly
              solutions. With a strong problem-solving mindset and attention to
              detail, I strive to build high-performance applications that
              enhance user experience and meet business needs.
            </p>

            {/* Contact Info */}
            <div className="mt-5">
              <div className="flex flex-row items-center gap-2 mx-5 lg:mx-10">
                <MdOutlineEmail className="h-6 w-6 text-neutral-500 dark:text-white" />
                <p className="text-white font-bold text-lg">
                  udeshigamage92@gmail.com
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 mt-2 mx-5 lg:mx-10">
                <IoCallOutline className="h-6 w-6 text-neutral-500 dark:text-white" />
                <p className="text-white font-bold text-lg">+94760305481</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center  sm:items-start gap-4 mt-5 ">
              <Magicbutton title="Download CV" />
              <div className="flex flex-row gap-5 lg:ml-44 lg:mt-8">
                <AiOutlineLinkedin className="h-10 w-10 text-black bg-white shadow-md shadow-white rounded-lg" />
                <FaGithub className="h-10 w-10 text-black bg-white shadow-md shadow-white rounded-lg" />
                <FaWhatsapp className="h-10 w-10 text-black bg-white shadow-md shadow-white rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="sm:basis-1/3 p-2 flex justify-center">
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
