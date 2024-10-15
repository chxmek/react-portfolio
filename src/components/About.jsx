import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/myWorkPic.jpg";
import { ABOUT_TEXT, ABOUT_TEXT2 } from "../constants";

function About() {
  const { ref: aboutRef, inView: aboutVisible } = useInView({
    triggerOnce: false, // ให้ตรวจจับทั้งเข้าและออก
  });

  return (
    <div className="pb-4" ref={aboutRef}>
      <h2 className="mt-20 mb-14 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">
        About Me
      </h2>
      <div className="flex flex-wrap">
        <div
          className={`w-full lg:w-1/2 lg:p-8 transition-transform duration-1000 ease-[cubic-bezier(0.4, 0, 0.2, 1)] will-change-transform ${
            aboutVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl brightness-75"
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>
        <div
          className={`w-full lg:w-1/2 transition-transform duration-1000 ease-[cubic-bezier(0.4, 0, 0.2, 1)] will-change-transform ${
            aboutVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            <p className="max-w-xl">{ABOUT_TEXT2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
