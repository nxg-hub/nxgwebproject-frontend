// import "./Home.css";
import React, { useRef } from "react";
import Slider from "../components/Slider/Slider";
import { Link, NavLink } from "react-router-dom";
import about_us from "../assets/images/about_us.jpg";
import IT from "../assets/images/IT.jpg";
import software from "../assets/images/software.jpg";
import icon2 from "../assets/icons/icon2.jpg";
import consulting from "../assets/images/consulting.jpg";
import icon1 from "../assets/icons/icon1.jpg";
import { BsArrowRight, BsArrowUp, BsArrowUpRight } from "react-icons/bs";
import FaqList from "../components/FAQ/FaqList";
import contactbackground from "../assets/images/contactbackground.svg";
import Footer from "../components/Footer/index";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  const faqSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToFAQ = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Slider />
      <div className="md:mt-16 px-4">
        {/* section one*/}
        <section className="w-full">
          <div className="w-auto flex flex-col mt-8 md:mt-0 md:flex-row gap-6">
            <img className="max-w-full h-auto" src={about_us} alt="about us" />

            <div className="md:items-start items-center text-[#717171] flex flex-col gap-4">
              <div className="bg-[#deeff5] rounded-[20px] p-4 md:p-8">
                <div className="flex justify-between relative">
                  <div className="">
                    <img
                      className="absolute rounded-full"
                      src={icon1}
                      alt="nxg"
                    />
                    <h1 className="font-semibold md:font-medium text-[#717171] text-[20px] md:text-xl md:px-6 px-7">
                      ABOUT US
                    </h1>
                  </div>

                  <NavLink to="/about">
                    <div className="bg-primary text-secondary hover:bg-[#717171] transition-colors px-[7px] py-[8px] rounded-full">
                      <BsArrowRight className="group-hover:text-primary w-6 h-5" />
                    </div>
                  </NavLink>
                </div>

                <h3 className="text-[18px] font-semibold md:text-[20px] md:font-medium py-7">
                  We bring you Creativity at its best!
                </h3>
                <p className="text-[12px] md:text-[18px] font-normal">
                  NextGenHub is a Group Of Software Developers And IT
                  Consultants From All Spheres Of The Information Technology
                  World, Endued With Experiences, Bright Minds And Exposure. We
                  Are A Group Of Innovative Minds Engaged In Constant
                  Brainstorming For Exceptional Ideas.
                </p>
              </div>

              <div className="bg-[#deeff5] rounded-[20px] p-4 md:p-8">
                <p className="text-[12px] md:text-[18px] font-normal">
                  Our Collective Skills Result in A Dynamic Force That Can
                  Fulfill All The Requirement of Your Brand Or Career, No Matter
                  How Diverse They May Be. We Are On A Mission To Re-engineer
                  The World Through Technology.
                </p>
              </div>
              <button className="group p-[8px] border-[1px] hover:bg-[#A4CDDC] border-[#abbed1] w-[180px] rounded-[20px] flex justify-center">
                <Link
                  className="flex items-center font-semibold text-gray-700 group-hover:translate-x-2 transition-transform"
                  to="/about"
                >
                  <span className="text-[#717171]">Learn More</span>
                  <BsArrowUpRight className="transform transition-transform group-hover:rotate-45 w-6 h-5 text-[#717171] ml-[5px]" />
                </Link>
              </button>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section className="mt-12 md:mt-20">
          <div className="flex md:flex-row flex-col md:justify-between justify-normal gap-8 w-full">
            <div className="md:pl-10 md:py-0 items-center md:items-start flex justify-center">
              <div className="w-[22px] h-[22px]">
                <img className="max-w-full" src={icon2} alt="nxghub" />
              </div>
              <h1 className="md:my-0 my-[25px] whitespace-nowrap md:font-medium md:ml-0 ml-2 font-semibold text-[#2596BE] text-[20px] md:text-[36px]">
                OUR SERVICES
              </h1>
            </div>
            <p className="text-right w-auto text-[14px] md:text-[18px] font-normal text-[#717171]">
              We Assist You In Constructing Top-Tier Digital Solutions And
              Products Following Best Practices, While Also Offering An
              Extensive Array Of Associated Professional Services. Our
              Commitment Is To Provide Unparalleled Service To Our Esteemed
              Clients On A Global Scale.
            </p>
          </div>

          {/* section 3 */}
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(100%,_1fr))] gap-8 mt-8 md:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] md:mt-7 w-full">
            <div className="w-auto rounded-[20px] h-full md:p-4 p-3 items-start border-[#eef2f6] border-[0.5px] text-[#717171] hover:bg-[#717171] hover:text-primary transition-colors">
              <div>
                <img className="w-full" src={consulting} alt="it_training" />
              </div>
              <div className="md:mt-[32px] h-auto ">
                <h1 className="md:my-0 my-[25px] md:font-medium font-semibold text-[18px] md:text-[28px]">
                  IT Training
                </h1>
                <p className="text-[16px] md:text-[18px] font-normal">
                  We Organize Software Development Training To Tech
                  Professionals And Aspiring Tech Professionals, Equipping Them
                  With Necessary Skills Required To Thrive In The Tech Industry.
                </p>
              </div>
            </div>

            <div className="w-auto rounded-[20px] h-full md:p-4 p-3 items-start border-[#eef2f6] border-[0.5px] text-[#717171] hover:bg-[#717171] hover:text-primary transition-colors">
              <div>
                <img
                  className="w-full"
                  src={software}
                  alt="software_development"
                />
              </div>
              <div className="md:mt-[32px] h-auto">
                <h1 className="md:my-0 my-[25px] md:font-medium font-semibold text-[18px] md:text-[28px]">
                  Software Development
                </h1>
                <p className="text-[16px] md:text-[18px] font-normal">
                  Our Team Of Professional Engineers Are Involved In Building
                  Real World Solutions And Applications From Conceptualization
                  To Deployment For Business Use Cases. Our Custom Software
                  Development Services.
                </p>
              </div>
            </div>

            <div className="w-auto rounded-[20px] h-full md:p-4 p-3 items-start border-[#eef2f6] border-[0.5px] text-[#717171] hover:bg-[#717171] hover:text-primary transition-colors">
              <div>
                <img className="w-full" src={IT} alt="consulting_services" />
              </div>
              <div className="md:mt-[32px] h-auto">
                <h1 className="md:my-0 my-[25px] md:font-medium font-semibold text-[18px] md:text-[28px]">
                  Consulting Services
                </h1>
                <div className="text-[18px] font-normal">
                  We Offer IT Consultancy Services, Including Technical
                  Recruiting.{" "}
                  <Link className="underline" href="#contact">
                    Contact Us Today!
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="group p-[8px] border-[1px] hover:bg-[#A4CDDC] border-[#abbed1] w-[180px] rounded-[20px] flex justify-center">
              <Link
                className="flex items-center font-semibold text-gray-700 group-hover:translate-x-2 transition-transform"
                to="/services"
              >
                <span className="text-[#717171]">Learn More</span>
                <BsArrowUpRight className="transform transition-transform group-hover:rotate-45 w-6 h-5 text-[#717171] ml-[5px]" />
              </Link>
            </button>
          </div>
        </section>

        {/* section 4 */}
        <section id="contact" ref={contactSectionRef}>
          <div className="my-10 flex justify-center">
            <div className="flex px-7 py-[10px] rounded-[32px] border-[#eef2f6] border-[0.5px]">
              <div>
                <img src={icon2} alt="nxghub" />
              </div>
              <div
                className="text-[20px] md:text-[36px] md:font-normal font-semibold text-[#2596BE] ml-2"
                onClick={scrollToContactSection}
              >
                Get In Touch
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${contactbackground})` }}
            className="p-8 bg-cover bg-center rounded-[14.5px]"
          >
            <div className="p-2 bg-primary rounded-[20px] md:p-12 grid grid-cols-[repeat(auto-fit,_minmax(100%,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] md:gap-0 gap-[80px] md:pb-0">
              <div className="flex flex-col mt-12 md:mt-0">
                <div className="flex items-start">
                  <img
                    style={{
                      borderRadius: "25px",
                      boxShadow: " 0.1em 0.1em 0.15em #717171",
                      marginRight: "10px",
                    }}
                    src={icon1}
                    alt="nxghub"
                  />
                  <h1 className="text-[18px] md:text-[36px] font-semibold">
                    {" "}
                    LET'S START YOUR PROJECT{" "}
                  </h1>
                </div>

                <div className="w-full text-[#717171] mt-[14px]">
                  <p className="md:text-[20px] text-normal font-normal md:font-semibold">
                    Planning Your Next Project? <br />
                    Message A Consultant! And Our Team Will Get Back To You
                    Shortly!
                  </p>
                  <br />
                  <p className="md:text-[18px] text-[14px] font-normal">
                    We Go Beyond Software Development, We <br /> Shape
                    Businesses And Careers.
                    <br /> <br />
                    Write your email and we will contact you to <br /> discuss
                    your project!
                  </p>
                </div>
              </div>

              <div
                onClick={scrollToContactSection}
                className="flex flex-col w-full md:w-auto gap-2 md:gap-0 md:pl-0"
              >
                <input
                  className="py-2 md:py-4 px-6 md:rounded-[32px] rounded-[20.104px] focus:outline-0 md:w-[100%] border border-[#A8D5E5]"
                  type="text"
                  placeholder="Name"
                  name=""
                  id=""
                />

                <input
                  className="py-2 md:py-4 md:my-4 px-6 md:rounded-[32px] rounded-[20.104px] focus:outline-0 md:w-[100%] border border-[#A8D5E5]"
                  type="tel"
                  placeholder="Contact Number"
                />

                <input
                  className="py-2 md:py-4 px-6 md:rounded-[32px] rounded-[20.104px] focus:outline-0 md:w-[100%] border border-[#A8D5E5]"
                  type="email"
                  placeholder="Email"
                />

                <textarea
                  className="py-2 md:py-4 px-6 md:mt-3 mt-0 md:rounded-[32px] rounded-[20.104px] focus:outline-0 md:w-[100%]  border border-[#A8D5E5]"
                  type="text"
                  placeholder="Messages"
                />

                <div className="flex justify-end mt-[37px] mb-[62px] md:mb-0">
                  <button className="group text-primary rounded-[32px] py-2 pr-2 md:ml-0 ml-4 bg-[#2596be] flex items-center sm:w-[200px]">
                    <span className="text-[20px] font-bold mr-20 sm:ml-4 sm:mr-[3.9rem] group-hover:translate-x-2 transition-transform">
                      Submit
                    </span>
                    <span className="group-hover:rotate-45 transition-transform transform origin-center rounded-full p-2 text-[#46A6C8] bg-primary">
                      <FiArrowUpRight size={25} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 5 */}
        <section className="w-full">
          <div className="flex mx-auto w-[60px] justify-center md:w-[150px] mt-[100px] mb-[40px] bg-[#A4CDDC] rounded-[32px] ">
            <span className="py-2 px-[10px] md:px-[38px] md:py-[5px] text-[#717171] text-[20px] md:text-[36px] font-semibold">
              FAQ
            </span>
          </div>
          <div className="flex justify-center w-full ">
            <div className="w-auto md:w-full">
              <div className="flex justify-center px-4">
                <FaqList />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-[50px]">
            <button className="group border-[1px] hover:bg-[#A4CDDC] border-[#abbed1] w-[180px] rounded-[20px] flex justify-center">
              <div
                className="flex font-normal text-[#717171] group-hover:translate-x-2 transition-transform p-2"
                onClick={scrollToTop}
              >
                Back to Top
                <BsArrowUpRight className="transform transition-transform group-hover:rotate-45 w-6 h-5 mx-[5px]" />
              </div>
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
