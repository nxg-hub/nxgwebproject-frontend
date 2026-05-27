import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/svgs/logo.svg";
import arrow from "../../assets/svgs/arrowNav.svg";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/career", label: "Career" },
  { to: "/jobshadowing", label: "Job Shadowing" },
];

const mobileNavItems = navItems.slice(0, 3);

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  const handleClickContact = (event) => {
    event.preventDefault();
    setShowSidebar(false);

    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.location.href = `${window.location.origin}/#contact`;
  };

  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      if (showSidebar && ref.current && !ref.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showSidebar]);

  useEffect(() => {
    setShowSidebar(false);
  }, [location]);

  return (
    <>
      {showSidebar && (
        <div
          className={`${showSidebar ? "backdrop active" : "backdrop"} md:hidden`}
          onClick={() => setShowSidebar(false)}
        />
      )}

      <header className="w-screen center">
        <nav className="header-shell w-full mx-4 between gap-[10px] md:gap-0 my-3 h-[52px]">
          <div className="between gap-3 h-full">
            <div className="header-brand bg-secondary center h-full rounded-[3rem] px-6 shrink-0">
              <NavLink to="/" end>
                <img src={logo} alt="Logo" className="object-cover" />
              </NavLink>
            </div>

            <div className="mobile-quick-links lg:hidden">
              {mobileNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `mobile-quick-link ${isActive ? "mobile-quick-link-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="nav-list header-desktop-nav hidden w-full between h-full px-[0.40rem] rounded-[4rem] lg:flex gap-8 xl:gap-12">
              <ul className="nav-menu h-full between">
                {navItems.map((item) => (
                  <li key={item.to} className="nav_item h-full center">
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) =>
                        `nav-links ${isActive ? "nav-links-active" : ""}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="platforms center h-full text-md">
                <a
                  href="https://linkedin.com/company/nextgenhub-digital"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/nextgenhubdigital"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center"
                >
                  <FaFacebookSquare />
                </a>
                <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>

          <div className="header-contact header-desktop-contact hidden pr-2 pl-6 bg-secondary rounded-[3rem] h-full between lg:flex shrink-0">
            <Link
              to="#contact"
              className="between gap-3"
              onClick={handleClickContact}
            >
              <div style={{ color: "white" }}>Contact Us</div>
              <div className="bg-primary w-[40px] h-[40px] center rounded-full">
                <img src={arrow} alt="arrow" />
              </div>
            </Link>
          </div>

          <div className="header-mobile-menu lg:hidden bg-secondary cursor-pointer h-full rounded-[3rem] flex items-center justify-center shrink-0 px-2">
            <button
              type="button"
              className="text-secondary hover:bg-[#4D4D4D] transition duration-400 hover:text-primary bg-primary rounded-full md:text-xl lg:hidden p-[0.7rem] mr-2 md:mr-0 flex items-center md:px-2.5 md:w-1/5"
              onClick={() => setShowSidebar((prev) => !prev)}
              aria-label={showSidebar ? "Close menu" : "Open menu"}
            >
              <FaBars size={20} />
            </button>
          </div>
        </nav>

        <div
          ref={ref}
          className={`${
            showSidebar ? "sidebar active" : "sidebar"
          } md:hidden px-2 py-6 text-primary`}
        >
          <button
            type="button"
            className="float-right hover:bg-[#4D4D4D] duration-400 hover:text-secondary"
            onClick={() => setShowSidebar(false)}
            aria-label="Close menu"
          >
            <FaTimes size={30} />
          </button>

          <ul className="flex-col gap-4 flex w-full pt-10">
            {navItems.map((item) => (
              <li key={item.to} className="w-full border-b border-[#b2b2b2] py-2">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-links relative nav_underline ${isActive ? "nav-links-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="w-full border-b border-[#b2b2b2] py-2">
              <Link
                to="#contact"
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
            <a
              href="https://linkedin.com/company/nextgenhub-digital"
              target="_blank"
              rel="noreferrer"
              className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md"
            >
              <FaLinkedin />
            </a>
            <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
              <FaInstagram />
            </div>
            <a
              href="https://www.facebook.com/nextgenhubdigital"
              target="_blank"
              rel="noreferrer"
              className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md"
            >
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
