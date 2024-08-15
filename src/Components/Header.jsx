import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import RegisterDropdown from "./RegisterDropdown";
import ResourceDropdownMenu from "./ResourceDropdown";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ResourceDropdown, setResourceDropdown] = useState(false);

  return (
    <header className="p-4 linear-bg">
      <div className="container  mx-auto flex justify-between items-center">
        {/* logo  */}
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-xl">
            <img src="/logo.png" className="h-14" alt="Logo" />
          </Link>
        </div>

        {/* links  */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300 underline-animate relative inline-block ">
            Home
          </Link>
          <Link to="/events" className="text-white hover:text-gray-300 underline-animate relative inline-block">
            Events
          </Link>

          {/* dropdown links  */}
          <div className="text-white hover:text-gray-300 underline-animate relative inline-block ">
            <button
              className="focus:outline-none flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Register
              <FaChevronDown
                className={`ml-1 transition-transform duration-200 ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <div className="text-white hover:text-gray-300 underline-animate relative inline-block ">
            <button
              className="focus:outline-none flex items-center"
              onClick={() => setResourceDropdown(!ResourceDropdown)}
            >
              Resources
              <FaChevronDown
                className={`ml-1 transition-transform duration-200 ${
                  ResourceDropdown ? "transform rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <Link to="/contact" className="text-white hover:text-gray-300 underline-animate relative inline-block ">
            Contact
          </Link>
        </div>
      </div>
      <RegisterDropdown isDropdownOpen={isDropdownOpen} />
      <ResourceDropdownMenu isDropdownOpen={ResourceDropdown} />
    </header>
  );
};

export default Header;