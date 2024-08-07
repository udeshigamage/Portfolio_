import React from "react";

const Navbar = () => {
  return (
    <div className="top-0 left-0 w-full z-50  bg-slate-900 fixed">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row  position:relative gap-4 p-2 border border-white rounded-full m-2 shadow-md shadow-white">
          <h1 className="text-white font-bold text-lg">About</h1>
          <h1 className="text-white font-bold text-lg">Skills</h1>
          <h1 className="text-white font-bold text-lg">Projects</h1>
          <h1 className="text-white font-bold text-lg">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
