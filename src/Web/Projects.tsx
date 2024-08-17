import { CardDemo } from "../Components/Card";

import { BackgroundBeams } from "../Components/background";

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-white font-bold uppercase shadow-md p-2 rounded-lg shadow-white">
            A Small Selection Of Recent Projects
          </h1>
        </div>

        <CardDemo />
      </div>
      <BackgroundBeams />
    </div>
  );
}
