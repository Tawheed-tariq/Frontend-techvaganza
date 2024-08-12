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
