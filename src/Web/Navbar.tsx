const Navbar = () => {
  return (
    <div className="top-0 left-0 w-full z-50   fixed">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row  bg-slate-900 position:relative gap-5 p-2 border border-white rounded-full m-2 shadow-md shadow-white px-10">
          <h1 className="text-white font-bold text-lg ">About</h1>
          <h1 className="text-white font-bold text-lg">Skills</h1>
          <h1 className="text-white font-bold text-lg">Projects</h1>
          <h1 className="text-white font-bold text-lg">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
