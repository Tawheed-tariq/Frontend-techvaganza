import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import RegisterDropdown from "./RegisterDropdown";
import ResourceDropdown from "./ResourceDropdown";

const Sidebar = ({ isOpen, onClose }) => {
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
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-neutral-500 bg-opacity-90 backdrop-blur-lg shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50`}
      style={{
        zIndex: 9999,
        background: "rgba(255, 255, 255, 0.1)", // Custom background with 10% opacity
        "border-right": "1px solid rgba(255, 255, 255, 0.2)", // Custom border with 20% opacity
      }}
    >
      <div className="flex justify-end p-4">
        <button className="text-gray-200 text-2xl" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <div className="flex flex-col p-4">
        <Link
          to="/"
          className="text-gray-200 hover:text-primary text-xl py-2"
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          to="/events"
          className="text-gray-200 hover:text-primary text-xl py-2 hover:underline"
          onClick={onClose}
        >
          Events
        </Link>

        <div className="relative py-2">
          <button
            className="text-gray-200 hover:text-primary flex items-center text-xl hover:underline"
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

        <div className="relative py-2">
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
          className="text-gray-200 hover:text-primary text-xl py-2"
          onClick={onClose}
        >
          Contact
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
