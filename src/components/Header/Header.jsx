// Importing necessary modules and styles
import React, { useState, useRef, useEffect } from "react";
import "./Header.css"; // Styling for the header
import { NavLink, useLocation } from "react-router-dom"; // Helps with navigation
import {
  FaBars,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa"; // Icons for social media
import logo from "../../assets/svgs/logo.svg";
import arrow from "../../assets/svgs/arrowNav.svg";

// Define the Header component
const Header = ({ open, handleMenu }) => {
  const [active, setActive] = useState(false);
  const ref = useRef();
  const location = useLocation();
  console.log(open);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the mobile menu is open and clicked taget is not within the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        // close the menu
        handleMenu(false);
      }
    };
    // Listen to click outside the target and execute function
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  useEffect(() => {
    // close mobile menu on locaton change
    handleMenu(false);
  }, [location]);

  return (
    <header className='w-screen center'>
      <nav className='w-[95%] between gap-[10px] md:gap-0 my-3 h-[52px]'>
        <div className='between gap-6 h-full'>
          <div className='bg-secondary center w-[136%] h-full rounded-[3rem] p-0'>
            <NavLink exact to='/'>
              <img src={logo} alt='Logo' className='object-cover' />
            </NavLink>
          </div>

          <div className='nav-list w-full between h-full px-[0.40rem] rounded-[4rem] sm:hidden lg:flex'>
            <ul
              className={`nav-menu h-full between ${
                active ? "active center" : ""
              }`}
            >
              <li className='nav_item h-full center'>
                <NavLink exact to='/' className='nav-links '>
                  Home
                </NavLink>
              </li>

              <li className='nav_item h-full center'>
                <NavLink exact to='/about' className='nav-links'>
                  About
                </NavLink>
              </li>

              <li className='nav_item h-full center'>
                <NavLink exact to='/services' className='nav-links'>
                  Services
                </NavLink>
              </li>

              <li className='nav_item h-full center'>
                <NavLink exact to='/career' className='nav-links'>
                  Career
                </NavLink>
              </li>

              <li className='nav_item h-full center'>
                <NavLink exact to='/contact' className='nav-links'>
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
          <NavLink exact to='/contact' className='between gap-3'>
            <div style={{ color: "white" }}> Contact Us </div>
            <div className='bg-primary w-[40px] h-[40px] center rounded-full'>
              <img src={arrow} alt='arrow' />
            </div>
          </NavLink>
        </div>
        <div className='lg:hidden bg-secondary cursor-pointer h-full rounded-[3rem] w-[120%] flex flex-col items-end justify-center md:pr-2'>
          <div
            className='text-secondary hover:bg-[#4D4D4D] transition hover:text-primary bg-primary rounded-full md:text-xl lg:hidden p-[0.7rem] mr-2 md:mr-0 flex items-center md:px-2.5 md:w-1/5'
            onClick={handleMenu}
          >
            <FaBars size={20} />
          </div>
        </div>
      </nav>
      <div
        className={`${
          open ? "left-[5.3rem]" : "left-[45rem]"
        } lg:hidden transition-all z-40 md:ml-0 absolute w-[80vw] h-[90vh] top-0 bottom-0 px-2 py-6 bg-[#4D4D4D] text-primary flex-col flex`}
        ref={ref}
      >
        <div
          className='flex items-end text-xl justify-end w-full'
          onClick={handleMenu}
        >
          <FaTimes />
        </div>

        <div className='transition flex items-start mt-8 w-full'>
          <ul className={`flex-col gap-4 h-full flex w-full`} ref={ref}>
            <li className='w-full border-b border-[#b2b2b2] py-4 '>
              <NavLink
                exact
                to='/'
                className='nav-links transition-all hover:underline'
              >
                Home
              </NavLink>
            </li>

            <li className='w-full border-b border-[#b2b2b2] pb-2 py-2'>
              <NavLink exact to='/about' className='nav-links hover:underline'>
                About
              </NavLink>
            </li>

            <li className='w-full border-b border-[#b2b2b2] py-2'>
              <NavLink
                exact
                to='/services'
                className='nav-links hover:underline'
              >
                Services
              </NavLink>
            </li>

            <li className='w-full border-b border-[#b2b2b2] py-2'>
              <NavLink exact to='/career' className='nav-links hover:underline'>
                Careers
              </NavLink>
            </li>

            <li className='w-full border-b border-[#b2b2b2] py-2'>
              <NavLink
                exact
                to='/contact'
                className='nav-links hover:underline'
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='mt-10 flex justify-center w-[75vw] gap-5'>
          <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
            <FaTwitter />
          </div>
          <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
            <FaLinkedin />
          </div>
          <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
            <FaInstagram />
          </div>
          <div className='bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md'>
            <FaFacebookSquare />
          </div>
        </div>
      </div>
      {/* // )} */}
    </header>
  );
};

export default Header;
