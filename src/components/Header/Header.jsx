// Importing necessary modules and styles
import React, { useState, useRef, useEffect } from "react";
import "./Header.css"; // Styling for the header
import { Link, NavLink, useLocation } from "react-router-dom"; // Helps with navigation
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
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/career", label: "Career" },
    { to: "/jobshadowing", label: "Job Shadowing" },
  ];

  const [active, setActive] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const ref = useRef();
  const location = useLocation();

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
      if (showSidebar && ref.current && !ref.current.contains(e.target)) {
        setShowSidebar(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showSidebar]);

  useEffect(() => {
    // close mobile menu on location change
    setShowSidebar(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showSidebar]);

  const handleBackdropClick = () => {
    setShowSidebar(false);
  };

  return (
    <>
      {/* mobile backdrop */}
      {showSidebar && (
        <div
          className={`${showSidebar ? "backdrop active" : "backdrop"} md:hidden`}
          onClick={handleBackdropClick}
        ></div>
      )}
      <header className="w-full center px-4">
        <nav className="header-nav w-full max-w-[1280px] gap-3 my-3">
          <div className="header-main-row between gap-3 h-full flex-1 min-w-0">
            <div className="header-brand bg-secondary center h-full rounded-[3rem] px-5 shrink-0">
              <NavLink exact to="/">
                <img src={logo} alt="Logo" className="object-cover" />
              </NavLink>
            </div>

            <div className="nav-list header-desktop-nav w-full between h-full px-[0.40rem] rounded-[4rem]">
              <ul
                className={`nav-menu h-full between ${
                  active ? "active center" : ""
                }`}
              >
                {navItems.map((item) => (
                  <li key={item.to} className="nav_item h-full center">
                    <NavLink exact to={item.to} className="nav-links">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="platforms center h-full center">
                <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
                  <Link to='https://linkedin.com/company/nextgenhub-digital' target='_blank'><FaLinkedin /></Link>
                </div>
                <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
                  <Link to='https://www.facebook.com/nextgenhubdigital' target='_blank'><FaFacebookSquare /></Link>
                </div>
                <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
                  <FaTwitter />
                </div>
              </div>
            </div>

            <div className="header-contact header-desktop-contact pr-2 pl-6 bg-secondary rounded-[3rem] h-full between shrink-0">
              <Link
                to="#contact"
                className="between gap-3"
                onClick={handleClickContact}
              >
                <div style={{ color: "white" }}> Contact Us </div>
                <div className="bg-primary w-[40px] h-[40px] center rounded-full">
                  <img src={arrow} alt="arrow" />
                </div>
              </Link>
            </div>

          </div>
        </nav>

        <div className="mobile-visible-links-bar">
          <div className="mobile-visible-links">
            <NavLink exact to="/" className="mobile-visible-link">
              Home
            </NavLink>
            <NavLink exact to="/about" className="mobile-visible-link">
              About
            </NavLink>
            <NavLink exact to="/services" className="mobile-visible-link">
              Services
            </NavLink>
          </div>

          <div className="header-mobile-toggle mobile-inline-toggle bg-secondary rounded-[3rem] px-2 flex items-center justify-center shrink-0">
            <button
              type="button"
              className="text-secondary hover:bg-[#4D4D4D] transition duration-400 hover:text-primary bg-primary rounded-full p-[0.7rem] flex items-center"
              onClick={() => setShowSidebar(!showSidebar)}
              aria-label={showSidebar ? "Close menu" : "Open menu"}
              aria-expanded={showSidebar}
              aria-controls="mobile-navigation"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>

        {/* mobile nav */}
        <div
          className={`${
            showSidebar ? "sidebar active" : "sidebar"
          } header-mobile-panel px-4 py-6 text-primary`}
          ref={ref}
          id="mobile-navigation"
        >
          <div className="mobile-menu-top">
            <NavLink to="/" className="mobile-menu-brand">
              <img src={logo} alt="Logo" className="object-cover" />
            </NavLink>

            <button
              type="button"
              className="mobile-menu-close"
              onClick={() => setShowSidebar(!showSidebar)}
              aria-label="Close menu"
            >
              <FaTimes size={26} />
            </button>
          </div>

          <ul className="mobile-nav-list flex-col gap-3 flex w-full">
            {navItems.map((item) => (
              <li key={item.to} className="mobile-nav-item">
                <NavLink
                  exact
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-links mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="mobile-nav-item">
              <Link
                to="#contact"
                className="nav-links mobile-nav-link"
                onClick={handleClickContact}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="mobile-menu-footer">
            <div className="mobile-socials">
              <Link
                to="https://linkedin.com/company/nextgenhub-digital"
                target="_blank"
                className="mobile-social-link"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="https://www.facebook.com/nextgenhubdigital"
                target="_blank"
                className="mobile-social-link"
              >
                <FaFacebookSquare />
              </Link>
              <div className="mobile-social-link">
                <FaTwitter />
              </div>
              <div className="mobile-social-link">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
