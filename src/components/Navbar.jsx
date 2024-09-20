import { FaGithub, FaGoogle, FaLine } from "react-icons/fa";
import logo from "../assets/mekLogo.png";

function Navbar() {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-7 text-3xl">
        <a href="https://github.com/chxmek" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition-colors duration-300" />
        </a>
        <a href={`mailto:${"chawanwits.mek@gmail.com"}`} target="_blank" rel="noopener noreferrer">
          <FaGoogle className="hover:text-red-400 transition-colors duration-300" />
        </a>
        <a href="https://line.me/ti/p/xwXj93VOS5" target="_blank" rel="noopener noreferrer">
          <FaLine className="hover:text-green-400 transition-colors duration-300" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
