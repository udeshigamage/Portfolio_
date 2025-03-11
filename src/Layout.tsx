import Home from "./Web/Home";
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
