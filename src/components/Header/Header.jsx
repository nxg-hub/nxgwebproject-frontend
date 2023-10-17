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
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  }

  return (
    <header className='w-screen center'>
      <nav className='w-[95%] between my-3 h-[52px]'>
        <div className='between gap-6 h-full w-[75%]'>
          <div className='bg-secondary center h-full rounded-[3rem] p-0'>
              <NavLink exact to='/'>
                <img src={logo} alt="Logo" className='object-cover' />
              </NavLink>
          </div>
            
          <div className='nav-list w-full between h-full px-[0.40rem] rounded-[4rem] sm:hidden lg:flex'>
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
        
        <div className='pr-2 pl-6 bg-secondary rounded-[3rem] h-full between sm:hidden lg:flex'>
            <NavLink exact to='/contact' className="between gap-3">
              <div style={{color:"white"}}> Contact Us </div>
                <div className='bg-primary w-[40px] h-[40px] center rounded-full'>
                  <img src={arrow} alt="arrow" />
                </div>
            </NavLink>
        </div>

        <div className='text-secondary text-xl lg:hidden' onClick={handleMenu}>
            <FaBars />
        </div>
      </nav>
      {open && (
        <div className='absolute w-screen h-[60vh] top-0 bottom-0 px-2 py-6 bg-secondary text-primary flex-col flex'>
          <div className='flex items-end text-xl justify-end w-full' onClick={handleMenu}>
            <FaTimes />
          </div>

          <div className='flex items-start mt-8 w-full'>
            <ul className={`flex-col gap-4 h-full flex w-full`}>
          
              <li className='w-full'>
                <NavLink exact to='/'  className="nav-links">
                  Home
                </NavLink>
              </li>

              <li className='w-full'>
                <NavLink exact to='/about' className="nav-links">
                  About
                </NavLink>
              </li>

              <li className='w-full'>
                <NavLink exact to='/services'  className="nav-links">
                  Services
                </NavLink>
              </li>

              <li className='w-full'>
                <NavLink exact to='/career'  className="nav-links">
                  Career
                </NavLink>
              </li>

              <li className='w-full'>
                <NavLink exact to='/contact' className="nav-links">
                  Contact                   
                </NavLink>
              </li>

            </ul>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
