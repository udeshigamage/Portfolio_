import pico1 from "../assets/pico1.jpeg";
import { Spotlight } from "../Components/Spotlight";
import { TextGenerateEffect } from "../Components/Textgenerator";
import Magicbutton from "../Components/Magicbutton";
import { FaGithub } from "react-icons/fa";
import { TypewriterEffectSmooth } from "../Components/Typewriter";
import { BackgroundBeams } from "../Components/background";
import { MdMail, MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import resumex from "../assets/resumex.pdf";
export default function Startup() {
  return (
    <div
      className="min-h-screen bg-slate-900 text-white flex justify-center items-center overflow-hidden"
      id="about"
    >
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
              I am a passionate Full-Stack Developer with experience in
              designing, developing, and deploying web applications. I am
              particularly familiar with using React for frontend development
              and C# with ASP.NET for backend development, along with
              technologies like EF Core, LINQ, MVC, and SQL for database
              management. Skilled in both frontend and backend, I focus on
              creating scalable, efficient, and user-friendly solutions. With a
              strong problem-solving mindset and attention to detail, I strive
              to build high-performance applications that enhance user
              experience and meet business needs. During my internship, I
              contributed to the development of the Adastra Interpretation
              Management System for a UK-based customer and the Okidoki Sri
              Lanka Heap Management System, gaining valuable hands-on experience
              with real-world projects.
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
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-5">
              <a href={resumex} download="resumex" className="relative z-50">
                <Magicbutton title="Download CV" />
              </a>
              <div className="flex flex-row gap-5 lg:ml-44 lg:mt-8 z-50 relative">
                <a
                  href="https://www.linkedin.com/in/udeshi-gamage-606223267"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineLinkedin className="h-10 w-10 text-black bg-white shadow-md shadow-white rounded-lg cursor-pointer" />
                </a>
                <a
                  href="https://github.com/udeshigamage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-10 w-10 text-black bg-white shadow-md shadow-white rounded-lg cursor-pointer" />
                </a>
                <a
                  href={`mailto:udeshigamage92@gmail.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdMail className="h-10 w-10 text-black bg-white shadow-md shadow-white rounded-lg cursor-pointer" />
                </a>
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
}
