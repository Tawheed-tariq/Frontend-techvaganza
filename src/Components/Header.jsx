import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import RegisterDropdown from "./RegisterDropdown";
import ResourceDropdown from "./ResourceDropdown";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "register") {
      setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
      setIsResourceDropdownOpen(false);
    } else if (dropdown === "resources") {
      setIsResourceDropdownOpen(!isResourceDropdownOpen);
      setIsRegisterDropdownOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className="py-4 px-28 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18, 18, 18, 0.8), 40% , rgba(0, 0, 0, 0))",
        }}
      >
        <div className="flex flex-row justify-between items-center container mx-auto ">
          <Link to="/" className="text-white font-bold text-xl">
            <img src="/logo.png" className="h-16" alt="Logo" />
          </Link>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white text-2xl" onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className="hidden md:flex items-center md:space-x-14 large:space-x-16">
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
              <RegisterDropdown
                isDropdownOpen={isRegisterDropdownOpen}
                position={{ right: 250, top: 68 }}
              />
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
              <ResourceDropdown
                isDropdownOpen={isResourceDropdownOpen}
                position={{ right: 80, top: 68 }}
              />
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
      <div className="md:hidden">
        <Sidebar
          className="md:hidden"
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
      </div>
    </>
  );
};

export default Header;
