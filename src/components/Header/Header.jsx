// Importing necessary modules and styles
import React, { useState } from 'react';
import './Header.css'; // Styling for the header
import { NavLink } from 'react-router-dom'; // Helps with navigation
import {
  FaBars,
  FaFacebookSquare,
  FaLinkedin,
  FaTimes,
  FaTwitter
} from 'react-icons/fa'; // Icons for social media
import logo from '../../assets/svgs/logo.svg';
import arrow from '../../assets/svgs/arrowNav.svg';

// Define the Header component
const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className='w-screen center'>
      <nav className='w-[95%] between my-3 h-[52px]'>
        <div className='between gap-6 h-full w-[75%]'>
          <div className='bg-secondary center h-full rounded-[3rem] p-0'>
              <NavLink exact to='/'>
                <img src={logo} alt="Logo" className='object-cover' />
              </NavLink>
          </div>
            
          <div className='nav-list w-full between h-full px-[0.40rem] rounded-[4rem]'>
            <ul className={`nav-menu h-full between ${active ? 'active center' : ''}`}>
        
              <li className='nav_item h-full center'>
                <NavLink exact to='/'  className="nav-links">
                  Home
                </NavLink>
              </li>

              <li className='nav_item h-full center'>
                <NavLink exact to='/about' className="nav-links">
                  About
                </NavLink>
              </li>

              <li className='nav_item h-full center'>
                <NavLink exact to='/services'  className="nav-links">
                  Services
                </NavLink>
              </li>

              <li className='nav_item h-full center'>
                <NavLink exact to='/career'  className="nav-links">
                  Career
                </NavLink>
              </li>

              <li className='nav_item h-full center'>
                <NavLink exact to='/contact' className="nav-links">
                  Contact                   
                </NavLink>
              </li>

            </ul>

            <div className='platforms center h-full center'>
                <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
                  <FaLinkedin />
                </div>
                <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
                  <FaFacebookSquare />
                </div>
                <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
                  <FaTwitter />
                </div>
            </div>
          </div>
        </div>
        
        <div className='pr-2 pl-6 bg-secondary rounded-[3rem] h-full between'>
            <NavLink exact to='/contact' className="between gap-3">
              <div style={{color:"white"}}> Contact Us </div>
                <div className='bg-primary w-[40px] h-[40px] center rounded-full'>
                  <img src={arrow} alt="arrow" />
                </div>
            </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
