import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const MediaSidebar = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      <ul className="flex flex-col space-y-2 bg-[#A2834B]">
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white hover:bg-[#d4a76e]"
          >
            <IoLogoInstagram className="text-lg"/>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white hover:bg-[#d4a76e]"
          >
            <FaLinkedinIn className="text-lg"/>
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white hover:bg-[#d4a76e]"
          >
            <FaYoutube className="text-lg"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MediaSidebar;

