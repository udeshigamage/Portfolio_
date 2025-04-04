const Magicbutton = ({ title }: { title: string }) => {
  return (
    <div>
      <button className="my-9 mx-10 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-2 text-sm font-medium text-white backdrop-blur-3xl">
          <div className="flex flex-row gap-1 ">{title}</div>
        </span>
      </button>
    </div>
  );
};

export default Magicbutton;
