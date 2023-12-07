// Importing necessary modules and styles
import React, { useState, useRef, useEffect } from "react";
import "./Header.css"; // Styling for the header
import { Link, NavLink, useLocation, } from "react-router-dom"; // Helps with navigation
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
const Header = () => {
  const [active, setActive] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const ref = useRef();
  const location = useLocation();



  // navigate to the contact section in the home page regardless of the current page when the Contact Us is clicked
  const handleClickContact = (event) => {
    event.preventDefault();
    
    // Build the anchor link to the home page and the contact section
    const contactLink = `${window.location.origin}/#contact`;
     // Navigate to the anchor link
     window.location.href = contactLink;
   


    // Assuming you have a function scrollToContactSection that scrolls to the contact section
    // You can replace this with your actual scrolling logic
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    // Close the menu if it's open
    setShowSidebar(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the mobile menu is open and clicked target is not within the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        // close the menu
        setShowSidebar(false);
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
    // close mobile menu on location change
    setShowSidebar(false);
  }, [location]);

  const handleBackdropClick = () => {
    setShowSidebar(false);
  };

  return (
    <>
      {/* mobile backdrop */}
      {showSidebar && (
        <div
          className={`${
            showSidebar ? "backdrop active" : "backdrop"
          } md:hidden`}
          onClick={handleBackdropClick}
        ></div>
      )}
      <header className="w-screen center">
        <nav className="w-[95%] between gap-[10px] md:gap-0 my-3 h-[52px]">
          <div className="between gap-6 h-full">
            <div className="bg-secondary center w-[136%] h-full rounded-[3rem] p-0">
              <NavLink exact to="/">
                <img src={logo} alt="Logo" className="object-cover" />
              </NavLink>
            </div>

            <div className="nav-list w-full between h-full px-[0.40rem] rounded-[4rem] sm:hidden lg:flex gap-[8rem]">
              <ul
                className={`nav-menu h-full between ${
                  active ? "active center" : ""
                }`}
              >
                <li className="nav_item h-full center">
                  <NavLink exact to="/" className="nav-links ">
                    Home
                  </NavLink>
                </li>

                <li className="nav_item h-full center">
                  <NavLink exact to="/about" className="nav-links">
                    About
                  </NavLink>
                </li>

                <li className="nav_item h-full center">
                  <NavLink exact to="/services" className="nav-links">
                    Services
                  </NavLink>
                </li>

                <li className="nav_item h-full center">
                  <NavLink exact to="/career" className="nav-links">
                    Career
                  </NavLink>
                </li>
              </ul>

              <div className="platforms center h-full center">
                <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
                  <FaLinkedin />
                </div>
                <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
                  <FaFacebookSquare />
                </div>
                <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>

          <div className="pr-2 pl-6 bg-secondary rounded-[3rem] h-full between sm:hidden lg:flex">
            {/* Change from NavLink to anchor tag */}
            <a
              href="#contact"
              className="between gap-3"
              onClick={handleClickContact}
            >
              <div style={{ color: "white" }}> Contact Us </div>
              <div className="bg-primary w-[40px] h-[40px] center rounded-full">
                <img src={arrow} alt="arrow" />
              </div>
            </a>
          </div>

        <div className='pr-2 pl-6 bg-secondary rounded-[3rem] h-full between sm:hidden lg:flex'>
          {/* Change from NavLink to anchor tag */}
          <Link to="/#contact" className='between gap-3' onClick={handleClickContact}>
            <div style={{ color: "white" }}> Contact Us </div>
            <div className='bg-primary w-[40px] h-[40px] center rounded-full'>
              <img src={arrow} alt='arrow' />
            </div>
          </Link>
        </div>
        <div className='lg:hidden bg-secondary cursor-pointer h-full rounded-[3rem] w-[120%] flex flex-col items-end justify-center md:pr-2'>
          <div
            className='text-secondary hover:bg-[#4D4D4D] transition duration-400 hover:text-primary bg-primary rounded-full md:text-xl lg:hidden p-[0.7rem] mr-2 md:mr-0 flex items-center md:px-2.5 md:w-1/5'
            onClick={handleMenu}
          >
            <FaBars size={20} />
          <div className="lg:hidden bg-secondary cursor-pointer h-full rounded-[3rem] w-[120%] flex flex-col items-end justify-center md:pr-2">
            <div
              className="text-secondary hover:bg-[#4D4D4D] transition duration-400 hover:text-primary bg-primary rounded-full md:text-xl lg:hidden p-[0.7rem] mr-2 md:mr-0 flex items-center md:px-2.5 md:w-1/5"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaBars size={20} />
            </div>
          </div>
        </nav>
        {/* mobile nav */}
        <div
          className={`${
            showSidebar ? "sidebar active" : "sidebar"
          } md:hidden px-2 py-6 text-primary`}
        >
          <div
            className="float-right hover:bg-[#4D4D4D] duration-400 hover:text-secondary"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FaTimes size={30} />
          </div>

          <ul className={`flex-col gap-4 flex w-full pt-10`}>
            <li className="w-full border-b border-[#b2b2b2] py-4 ">
              <NavLink
                exact
                to="/"
                className="nav-links transition-all relative nav_underline"
              >
                Home
              </NavLink>
            </li>

            <li className="w-full border-b border-[#b2b2b2] pb-2 py-2">
              <NavLink
                exact
                to="/about"
                className="nav-links relative nav_underline"
              >
                About
              </NavLink>
            </li>

            <li className="w-full border-b border-[#b2b2b2] py-2">
              <NavLink
                exact
                to="/services"
                className="nav-links relative nav_underline"
              >
                Services
              </NavLink>
            </li>

            <li className="w-full border-b border-[#b2b2b2] py-2">
              <NavLink
                exact
                to="/career"
                className="nav-links relative nav_underline"
              >
                Careers
              </NavLink>
            </li>


            <li className='w-full border-b border-[#b2b2b2] py-2'>
              {/* Change from NavLink to div */}
              <Link to="#contact" className='nav-links hover:underline'onClick={handleClickContact} >
            

            <li className="w-full border-b border-[#b2b2b2] py-2">
              <a
                href="#contact"
                className="nav-links relative nav_underline"
                onClick={handleClickContact}
              >

                Contact Us
              </Link>
            </li>
          </ul>
          <div className="mt-10 flex justify-center gap-5">
            <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
              <FaTwitter />
            </div>
            <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
              <FaLinkedin />
            </div>
            <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
              <FaInstagram />
            </div>
            <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
              <FaFacebookSquare />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
