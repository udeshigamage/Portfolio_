const Navbar = () => {
  return (
    <div className="top-0 left-0 w-full z-50 fixed">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row bg-slate-900 gap-5 p-2 border border-white rounded-full m-2 shadow-md shadow-white px-10">
          <a
            href="#about"
            className="text-white font-bold text-lg cursor-pointer"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white font-bold text-lg cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white font-bold text-lg cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white font-bold text-lg cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
