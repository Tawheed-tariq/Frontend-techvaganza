import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { createPortal } from "react-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
              <FaChevronDown className="ml-1" />
            </button>
          </div>
          <div className="relative">
            <button
              className="text-white hover:text-gray-300 focus:outline-none flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Resources
              <FaChevronDown className="ml-1" />
            </button>
          </div>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
      <DropDownMenu isDropdownOpen={isDropdownOpen} />
    </header>
  );
};

export default Header;

const DropDownMenu = ({ isDropdownOpen }) => {
  return createPortal(
    <div
      className={`absolute right-20 top-16 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
        isDropdownOpen ? "block" : "hidden"
      }`}
      style={{ zIndex: 9999 }}
    >
      <Link
        to="/register/attendee"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Attendee Register
      </Link>
      <Link
        to="/register/student"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Student Register
      </Link>
      <Link
        to="/register/committee"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Committee Register
      </Link>
    </div>,
    document.getElementById("dropdown-root")
  );
};
