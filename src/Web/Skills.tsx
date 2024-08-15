"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../Components/lamp";
import pico1 from "../assets/mongodb.jpg";
import pico2 from "../assets/net.jpg";
import pico3 from "../assets/node.png";

import pico4 from "../assets/mysql.png";

import pico5 from "../assets/figma.png";

import pico6 from "../assets/nextjs.png";
import pico7 from "../assets/c++.jpg";
import pico8 from "../assets/c.png";
import pico9 from "../assets/css_2.png";
import pico10 from "../assets/posgresql.png";
import pico11 from "../assets/phthon.png";

import pico12 from "../assets/csharp.png";
import pico13 from "../assets/css.png";
import pico14 from "../assets/js.png";
import pico15 from "../assets/java.png";
import pico16 from "../assets/github.png";
import pico17 from "../assets/postman_2.jpg";
import pico18 from "../assets/react_2.png";
import pico19 from "../assets/typescript.png";
import pico20 from "../assets/visualstudio.jpg";
import pico21 from "../assets/html.png";
import { BackgroundBeams } from "../Components/background";

export function LampDemo() {
  const images = [
    pico1,
    pico2,
    pico3,
    pico4,
    pico5,
    pico6,
    pico7,
    pico8,
    pico9,
    pico21,
    pico10,
    pico11,
    pico12,
    pico13,
    pico14,
    pico15,
    pico16,
    pico17,
    pico18,
    pico19,
    pico20,
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center overflow-hidden flex flex-col ">
      <div className="flex flex-col justify-center items-center lg:text-5xl m-2">
        <h1 className="text-white shadow-md p-2 rounded-lg shadow-white mt-5">
          Technical Skills
        </h1>
      </div>

      <div className="grid grid-cols-7 gap-4 p-4 gap-y-5 mt-20">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-[120px] h-[100px] flex items-center justify-center bg-white rounded-full border border-gray-600 border-shadow-md shadow-gray-500 border-4"
          >
            <img
              src={src}
              alt="skills"
              className="w-full h-full object-contain p-2 hover:scale-110 rounded-full"
            />
          </div>
        ))}
      </div>
      <BackgroundBeams />
    </div>
  );
}
