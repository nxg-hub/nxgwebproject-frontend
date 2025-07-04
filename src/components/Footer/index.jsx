import { Link } from "react-router-dom";
import NLogo from "../../assets/icons/n.png";
import Location from "../../assets/svgs/location.svg";
import Call from "../../assets/svgs/call.svg";
import Mail from "../../assets/svgs/mail.svg";
import CustomButton from "../Button";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { address, address2 } from "../../utils/address";
import React from "react";

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
};

const Footer = () => {
  return (
    <div className="relative bg-[#F1F1F1] w-full pt-8 center text-primary">
      <div className=" w-[95%] bg-gray py-10 rounded-[20px] flex-col center">
        <div className="w-[90%] flex flex-wrap md:justify-center md:flex-nowrap justify-between lg:gap-0 gap-6  font-light">
          <div className="md:w-[60%] mb-18 md:mb-0 flex-col gap-5 flex items-start">
            <div className="center gap-1">
              <div className="flex items-start">
                <img src={NLogo} alt="logo" />
              </div>
              <h2 className="text-secondary text-[20px] font-semibold">
                CONTACT US
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-start">
                <img src={Location} alt="logo" />
              </div>
              <p className="w-[60%]">
                <Link to={address} target="_blank">
                  1, Chris Okafor Street Isolo, Lagos, Nigeria.
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-start">
                <img src={Location} alt="logo" />
              </div>
              <p className="w-[60%]">
                <Link to={address2} target="_blank">
                  Annex Office: 22 Lagos-Abeokuta Expressway, Sango-Otta, Lagos.
                </Link>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-start">
                <img src={Call} alt="logo" />
              </div>
              <p className="w-[80%]">
                <Link to="tel:+2349037394146">
                  Phone: +234-903-739-4146 || +234 706 784
                  7829
                </Link>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-start">
                <img src={Mail} alt="logo" />
              </div>
              <p className="">
                <Link to="mailto:info@nextgenhub.com.ng">
                  Email: info@nextgenhub.com.ng
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-row md:justify-center mt-24 md:mt-0 gap-[4rem] w-full">
            <div className="md:w-fit w-full flex-col gap-4 flex items-start">
              <h2 className="text-secondary text-[20px] font-semibold">
                ABOUT US
              </h2>
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/about">About Us</Link>
              </p>
              <p>
                <Link to="/services">Our Service</Link>
              </p>
              <p>
                <Link to="#">Terms & Condition</Link>
              </p>
              <p>
                <Link to="#">Privacy Policy</Link>
              </p>
            </div>
            <div className="md:w-fit w-full flex-col gap-4 flex items-start">
              <h2 className="text-secondary text-[20px] font-semibold">
                USEFUL LINKS
              </h2>
              <p>
                <Link to="/training">Training</Link>
              </p>
              <p>
                <Link to="#">NXG-Job-Hub</Link>
              </p>
              <p>
                <Link to="/ignite">IGNITE</Link>
              </p>
              <p>
                <Link to="/career">Career</Link>
              </p>
              <p>
                <Link to="#contact" onClick={handleClickContact}>
                  Contact
                </Link>
              </p>
              <p>
                <Link to="/scholarship">Scholarship</Link>
              </p>
              <p>
                <Link to="#">FAQ</Link>
              </p>
            </div>
          </div>
          <div className="md:w-[50%] w-full flex-col gap-4 flex items-start">
            <h2 className="text-secondary text-[20px] font-semibold">
              SUBSCRIPTION
            </h2>
            <p>
              Combining Our Expertise Yields A Versatile Team Ready To
              Accomplish All Your Brand Or Career Requirements. Stay Tuned For
              Our Latest Updates By Subscribing Here.
            </p>
            <form name="mail_subscription" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="mail_subscription" />
              <div className="border border-primary rounded-md between p-1 w-full">
                {/* Netlify form for submission handling */}
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  id="email"
                  required
                  className=" placeholder-primary placeholder-opacity-80 border-none outline-none bg-gray pl-4 w-full"
                />
                <CustomButton
                  children="Subscribe"
                  backgroundColor="#FFF"
                  textColor="#717171"
                  border="1px solid #fff"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="absolute md:static top-[25rem] left-8 md:top-0 md:mt-16 mt-0 flex items-start w-[90%] gap-6">
          <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
            <Link to="https://twiiter.com/" target="_blank">
              <FaTwitter />
            </Link>
          </div>
          <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
            <Link
              to="https://linkedin.com/company/nextgenhub-digital"
              target="_blank">
              <FaLinkedin />
            </Link>
          </div>
          <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
            <Link to="https://instagram.com/" target="_blank">
              <FaInstagram />
            </Link>
          </div>
          <div className="bg-primary rounded-full h-[40px] w-[40px] text-secondary center text-md">
            <Link
              to="https://www.facebook.com/nextgenhubdigital"
              target="_blank">
              <FaFacebookSquare />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
