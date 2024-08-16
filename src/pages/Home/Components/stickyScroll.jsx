import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const MediaSidebar = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      <ul className="flex flex-col space-y-2 bg-[#A2834B]">
        
        {/* Instagram Link */}
        <li className="group relative">
          <a
            href="https://www.instagram.com/techvaganza.nitsri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 group-hover:w-24 text-white hover:bg-[#d4a76e] transition-all duration-500 ease-in-out"
          >
            <IoLogoInstagram className="text-lg" />
          </a>
        </li>

        {/* LinkedIn Link */}
        <li className="group relative">
          <a
            href="https://in.linkedin.com/company/techvaganza-nit-srinagar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 group-hover:w-24 text-white hover:bg-[#d4a76e] transition-all duration-500 ease-in-out"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
        </li>

        {/* YouTube Link */}
        <li className="group relative">
          <a
            href="https://www.youtube.com/@NITSrinagarofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 group-hover:w-24 text-white hover:bg-[#d4a76e] transition-all duration-500 ease-in-out"
          >
            <FaYoutube className="text-lg" />
          </a>
        </li>

      </ul>
    </div>
  );
};

export default MediaSidebar;
