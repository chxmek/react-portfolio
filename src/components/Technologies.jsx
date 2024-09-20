import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFlutter, SiCplusplus, SiPostman, SiSwagger, SiFigma, SiMicrosoftsqlserver, SiSourcetree, SiFirebase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs, FaGithub, FaHtml5, FaCss3Alt,  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineDotNet } from "react-icons/ai";


function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlutter className="text-7xl text-cyan-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiOutlineDotNet className="text-7xl text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFirebase className="text-7xl text-amber-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMicrosoftsqlserver className="text-7xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl text-amber-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSwagger className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-black-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSourcetree className="text-7xl text-blue-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <VscVscode className="text-7xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFigma className="text-7xl text-green-400" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
