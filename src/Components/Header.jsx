import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import RegisterDropdown from "./RegisterDropdown";
import ResourceDropdownMenu from "./ResourceDropdown";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ResourceDropdown, setResourceDropdown] = useState(false);

  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-xl">
            <img src="/logo.png" className="h-14" alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/events" className="text-white hover:text-gray-300">
            Events
          </Link>
          <div className="relative">
            <button
              className="text-white hover:text-gray-300 focus:outline-none flex items-center"
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
          <div className="relative">
            <button
              className="text-white hover:text-gray-300 focus:outline-none flex items-center"
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
          <Link to="/contact" className="text-white hover:text-gray-300">
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
