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
import { BsArrowRight } from 'react-icons/bs'; // An arrow icon
import logo from '../../assets/logo.png'; // Your website's logo image

// Define the Header component
const Header = () => {
  // State variable to keep track of whether the mobile menu is open or closed
  const [open, setOpen] = useState(false);

  // Function to toggle (open/close) the mobile menu
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    // This is the main navigation bar
    <nav className='nav'>
      {/* The container for the navigation bar */}
      <div className='nav_container'>
        {/* Your website's logo */}
        <div >
            <NavLink exact to='/'>
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          
        {/* The main menu items */}
          <ul className={`nav-menu ${open ? 'active' : ''}`}>
            {/* Each item in the menu */}
          
            <div className='nav-list'>

          
              <li className='nav_item'>
                <NavLink exact to='/' activeClassName="active" className="nav-links" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>

              <li className='nav_item'>
                <NavLink exact to='/about' activeClassName="active" className="nav-links" onClick={toggleMenu}>
                  About
                </NavLink>
              </li>

              <li className='nav_item'>
                <NavLink exact to='/services' activeClassName="active" className="nav-links" onClick={toggleMenu}>
                  Services
                </NavLink>
              </li>

              <li className='nav_item'>
                <NavLink exact to='/career' activeClassName="active" className="nav-links" onClick={toggleMenu}>
                  Career
                </NavLink>
              </li>

              <li className='nav_item'>
                <NavLink exact to='/contact' activeClassName="active" className="nav-links" onClick={toggleMenu}>
                  Contact                   
                </NavLink>
              </li>

              

              {/* Social media icons */}
              <div className='platforms'>
                <div style={{ backgroundColor: "white", color: "#2596BE", padding: "5px", borderRadius: "20px" }}>
                  <FaLinkedin />
                </div>
                <div style={{ backgroundColor: "white", color: "#2596BE", padding: "5px", borderRadius: "20px" }}>
                  <FaFacebookSquare />
                </div>
                <div style={{ backgroundColor: "white", color: "#2596BE", padding: "5px", borderRadius: "20px" }}>
                  <FaTwitter />
                </div>
              </div>
            </div>

            {/* Contact Us link */}
            <div className='contact_info'>
              <NavLink exact to='/contact' style={{display:"flex", color: "#2596BE", textDecoration: "none", gap:"2rem",width:"200px" }}>
                <div style={{color:"white",marginLeft:"29px", paddingTop:"7px", border:"2px sl"}}> Contact Us </div>
                <div className='bg-white text-primarycolor px-[5px] py-[11px] rounded-full'>
                <BsArrowRight  className='group-hover: w-10 h-5 ' />
                </div>
              </NavLink>
            </div>
          </ul>

        {/* Hamburger button for mobile */}
        <div className='hamburger' onClick={toggleMenu}>
          <span className='sr-only'></span>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
