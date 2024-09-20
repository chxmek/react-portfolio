import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/myPic.png";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Chawanwit S.
            </h1>
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Frontend Developer
            </span>
            <p className="mt-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
            <a
              href="/Resume-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white px-3 py-2 mb-4 mt-1 rounded-lg transition duration-300 hover:opacity-80"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="brightness-75" src={profilePic} alt="Chawanwit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
