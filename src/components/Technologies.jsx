import { useEffect, useRef } from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiFlutter,
  SiCplusplus,
  SiPostman,
  SiSwagger,
  SiFigma,
  SiMicrosoftsqlserver,
  SiSourcetree,
  SiFirebase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineDotNet } from "react-icons/ai";

function Technologies() {
  const iconRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pop-animation');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    iconRefs.current.forEach(icon => {
      if (icon) {
        observer.observe(icon);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[
          { href: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: <FaHtml5 className="text-7xl text-red-500" /> },
          { href: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: <FaCss3Alt className="text-7xl text-blue-500" /> },
          { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: <IoLogoJavascript className="text-7xl text-yellow-400" /> },
          { href: "https://react.dev/", icon: <RiReactjsLine className="text-7xl text-cyan-400" /> },
          { href: "https://nextjs.org/", icon: <TbBrandNextjs className="text-7xl" /> },
          { href: "https://flutter.dev/", icon: <SiFlutter className="text-7xl text-cyan-500" /> },
          { href: "https://dotnet.microsoft.com/", icon: <AiOutlineDotNet className="text-7xl text-sky-700" /> },
          { href: "https://nodejs.org/", icon: <FaNodeJs className="text-7xl text-green-500" /> },
          { href: "https://firebase.google.com/", icon: <SiFirebase className="text-7xl text-amber-500" /> },
          { href: "https://www.microsoft.com/en-us/sql-server", icon: <SiMicrosoftsqlserver className="text-7xl text-red-700" /> },
          { href: "https://isocpp.org/", icon: <SiCplusplus className="text-7xl text-blue-300" /> },
          { href: "https://www.postman.com/", icon: <SiPostman className="text-7xl text-amber-500" /> },
          { href: "https://swagger.io/", icon: <SiSwagger className="text-7xl text-yellow-500" /> },
          { href: "https://github.com/", icon: <FaGithub className="text-7xl text-black-700" /> },
          { href: "https://www.sourcetreeapp.com/", icon: <SiSourcetree className="text-7xl text-blue-800" /> },
          { href: "https://code.visualstudio.com/", icon: <VscVscode className="text-7xl text-blue-600" /> },
          { href: "https://www.figma.com/", icon: <SiFigma className="text-7xl text-green-400" /> }
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            ref={el => iconRefs.current[index] = el}
          >
            <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
              {item.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Technologies;