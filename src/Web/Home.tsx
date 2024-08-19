import Magicbutton from "../Components/Magicbutton";
import { FaGithub, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { Spotlight } from "../Components/Spotlight";

import { TypewriterEffectSmooth } from "../Components/Typewriter";
import { BackgroundBeams } from "../Components/background";

import { AiOutlineLinkedin } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const Home = () => {
  return (
    <div className="relative  w-full">
      <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center overflow-hidden">
        <Spotlight fill="white" className="absolute -top-10 left-0" />

        <div className="flex flex-col text-center items-center lg:w-3/4 ">
          <TypewriterEffectSmooth
            words={[
              {
                text: "Ready to take your digital presence to the next level?",
                className: "text-center whitespace-pre-wrap",
              },
            ]}
          />{" "}
          <h1 className="text-white font-bold text-md">
            Reach out to me today and let &apos;s discuss how i can help you to
            achieve your goals
          </h1>
          <Magicbutton title="Contact Me" />
          <div className="flex flex-row position:relative gap-5 justify-center items-center mt-7 ">
            <AiOutlineLinkedin className="h-10 w-10 text-black  mt-1 bg-white shadow-md shadow-white rounded-lg" />
            <FaGithub className="h-10 w-10 text-black  mt-1 bg-white shadow-md shadow-white rounded-lg" />
            <FaWhatsapp className="h-10 w-10 text-black  mt-1 bg-white shadow-md shadow-white rounded-lg" />
            <MdMail className="h-10 w-10 text-black  mt-1 bg-white shadow-md shadow-white rounded-lg" />
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Home;
