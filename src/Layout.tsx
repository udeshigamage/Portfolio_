import React from "react";
import Home from "./Web/Home";
import { FaHome, FaUser } from "react-icons/fa";
import { FloatingNav } from "./Components/Navbar";

import { FaMessage } from "react-icons/fa6";

import { Aboutme } from "./Web/Aboutme";

import Projects from "./Web/Projects";
import Startup from "./Web/Startup";
import Navbar from "./Web/Navbar";
import { LampDemo } from "./Web/Skills";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Startup />
      <LampDemo />

      <Projects />
      <Home />
    </div>
  );
};

export default Layout;
