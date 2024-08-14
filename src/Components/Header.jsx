
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
import { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ register: false, resources: false });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <>
      <div className='whole'>

        <nav className='Navbar'>
          <img src="logo.png" alt='Logo' className='logo' />

            <GiHamburgerMenu size={24} className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}/>

          <ul className={`list ${isOpen ? 'show' : ''}`}>
            <li><Link to='/' className='Home'>Home</Link></li>
            <li><Link to='/events' className='Home'>Events</Link></li>
            <li
              className={dropdownOpen.register ? 'show' : ''}
              onClick={() => toggleDropdown('register')}
            >
              <Link to='/' className='Home'>
                Register
                <span className="dropdown-icon">▼</span> 
              </Link>
              <ul className='dropdown'>
               
              </ul>
            </li>
            <li
              className={dropdownOpen.resources ? 'show' : ''}
              onClick={() => toggleDropdown('resources')}
            >
              <Link to='/' className='Home'>
                Resources
                <span className="dropdown-icon">▼</span> 
              </Link>
              <ul className='dropdown'>
                
              </ul>
            </li>
            <li><Link to='/' className='Home'>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
