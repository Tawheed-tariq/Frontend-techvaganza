import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import RegisterDropdown from "./RegisterDropdown";
import ResourceDropdown from "./ResourceDropdown";

const Header = () => {
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "register") {
      setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
      setIsResourceDropdownOpen(false);
    } else if (dropdown === "resources") {
      setIsResourceDropdownOpen(!isResourceDropdownOpen);
      setIsRegisterDropdownOpen(false);
    }
  };

  return (
    <header
      className="py-4 px-28 w-full"
      style={{
        background:
          "linear-gradient(to bottom, #383838, 60% , rgba(0, 0, 0, 0))",
      }}
    >
      <div className="container w-lvw flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          <img src="/logo.png" className="h-14" alt="Logo" />
        </Link>

        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-white hover:text-primary hover:underline text-xl"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="text-white hover:text-primary text-xl hover:underline"
          >
            Events
          </Link>

          <div className="relative">
            <button
              className="text-white hover:text-primary flex items-center text-xl hover:underline"
              onClick={() => toggleDropdown("register")}
            >
              Register
              <FaChevronDown
                className={`ml-1 transition-transform duration-200 ${
                  isRegisterDropdownOpen ? "transform rotate-180" : ""
                } text-sm`}
              />
            </button>
            <RegisterDropdown isDropdownOpen={isRegisterDropdownOpen} />
          </div>

          <div className="relative">
            <button
              className="text-white hover:text-primary flex items-center text-xl hover:underline"
              onClick={() => toggleDropdown("resources")}
            >
              Resources
              <FaChevronDown
                className={`ml-1 transition-transform duration-200 ${
                  isResourceDropdownOpen ? "transform rotate-180" : ""
                } text-sm`}
              />
            </button>
            <ResourceDropdown isDropdownOpen={isResourceDropdownOpen} />
          </div>

          <Link
            to="/contact"
            className="text-white hover:text-primary text-xl  hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
