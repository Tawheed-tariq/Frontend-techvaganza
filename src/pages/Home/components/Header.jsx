import { useState } from 'react';
import './Header.css';
import '../../../styles/Home.css';
import '../../../App.css';
import logo from '../../../../public/logo.png';
import bg1 from '../../../../public/Group 1.png';

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
        <img src={bg1} alt='bg' className='background-image' />

        <nav className='Navbar'>
          <img src={logo} alt='Logo' className='logo' />

          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <ul className={`list ${isOpen ? 'show' : ''}`}>
            <li><a href='/' className='Home'>Home</a></li>
            <li><a href='/events' className='Home'>Events</a></li>
            <li
              className={dropdownOpen.register ? 'show' : ''}
              onClick={() => toggleDropdown('register')}
            >
              <a href='/register' className='Home'>
                Register
                <span className="dropdown-icon">▼</span> 
              </a>
              <ul className='dropdown'>
               
              </ul>
            </li>
            <li
              className={dropdownOpen.resources ? 'show' : ''}
              onClick={() => toggleDropdown('resources')}
            >
              <a href='/resources' className='Home'>
                Resources
                <span className="dropdown-icon">▼</span> 
              </a>
              <ul className='dropdown'>
                
              </ul>
            </li>
            <li><a href='/contact' className='Home'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
