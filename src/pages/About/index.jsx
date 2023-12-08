import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link
import { Link as ScrollLink } from "react-scroll";
import "./index.css";
import CustomButton from "../../components/Button";
import Footer from "../../components/Footer";
import first from "../../assets/images/first.jpg";
import second from "../../assets/images/aboutTwo.jpg";
import third from "../../assets/images/aboutThree.jpg";
import { BsArrowUpRight } from "react-icons/bs";

const About = () => {
  return (
    <>
      {/* Banner */}
      <div
        className="relative min-h-[550px] text-primary font-medium rounded-[20px] bg-cover bg-center bg-no-repeat mx-4 md:mx-4"
        style={{ backgroundImage: "url(/aboutBg.png)" }}
      >
        <div className="text-left pl-8 md:pl-20 pt-28 max-w-[60rem]">
          <p className="mt-16 text-[28px] md:text-[64px]">
            Engineering The Future <br /> Through Technology <br /> Innovation
          </p>
          <p className="text-[18px] md:text-[28px] py-4 md:py-6">
            With NXG-HUB
          </p>

           {/* Button */}
           <ScrollLink to="/about#about-us" smooth={true} duration={800} offset={-50}>
              <CustomButton className="text-sm">
                <span className=" text-[#FFFFFF] font-normal text-normal">
                  Learn More
                </span>
              </CustomButton>
          </ScrollLink>
        </div>

        <p className="text-center text-[16px] md:text-[20px] py-4 mt-[9rem]">
          NXG-HUB | ABOUT
        </p>
      </div>

      {/* About */}
      <div className='flex flex-col items-center py-[5.5rem]'>
        <div className='text-center relative rounded-[20px] border-[#eef2f6] border-[0.5px] mb-8 w-[40%] md:w-[20%] py-2'>
          <h2 className='ml-6 text-[#2596BE] font-semibold text-md md:text-[36px]'>
            About Us
          </h2>
          <img
            src='/tag.png'
            alt='icon'
            className='absolute bottom-[0.9rem] w-[51px] md:bottom-[2rem] right-[7rem] md:right-[11.7rem] px-4'
          />
        </div>

        {/* We Bring You Creativity At Its Best */}
        <section className="mb-10 md:mb-0 px-4 md:px-[9rem] ">
          <div className="between flex-col md:flex-row pb-10 md:pb-0">
            <div className="order-last md:order-first md:w-[60%] flex-col gap-4 items-start flex mb-[0rem] md:mb-0">
              <h3 className="lg:text-[32px] py-4 md:py-0 text-[20px] font-semibold text-secondary">
                We bring you Creativity at Its best!
              </h3>
              <p className="lg:text-[1.15rem] text-[1rem] text-[#717171]">
                NextGenHub (NXG-Hub) is a group of software developers and IT
                consultants from all spheres of the information technology
                world, endowed with experiences, bright minds, and exposure. We
                are a group of innovative minds engaged in constant
                brainstorming for exceptional ideas. Our collective skills
                result in a dynamic force that can fulfill all the requirements
                of your brand or career, no matter how diverse they may be. We
                are on a mission to re-engineer the world through technology.
              </p>
            </div>
            <div className="order-first md:order-last md:w-[35%] flex justify-end">
              <img src={first} alt="About" />
            </div>
          </div>
  

          {/* OUR MISSION */}
          <div className="lg:mb-10 md:mb-0 between flex-col md:flex-row">
            <div className="mr-10 float-left flex justify-end">
              <img src={second} alt="About"/>
            </div>
            <div className="lg:ml-10 md:ml-0 md:w-[60%] flex-col gap-4 items-start flex mb-[3rem] md:mb-0">
              <h3 className="lg:text-[32px] py-4 md:py-0 text-[20px] font-semibold text-secondary">
                Our Mission
              </h3>
              <p className="lg:text-[1.15rem] text-[1rem] text-[#717171]">
                NXG-HUB Digital Technologies Aims To Empower Numerous Youth By
                Offering Industry-Relevant Skill Training, Thus Enhancing Their
                Prospects For A More Promising Livelihood. Simultaneously, We
                Are Dedicated To Delivering Real-World Technological Solutions
                To Both Corporate And Government Entities, Contributing To The
                Digitization Of Africa's Economy.
              </p>
            </div>
          </div>
          

          {/* WHAT WE DO */}
          <div className="mb-6 between flex-col md:flex-row py-2 md:py-0">
            <div className="order-last md:order-first md:w-[60%] flex-col gap-4 items-start flex mb-[0rem] md:mb-0">
              <h3 className="lg:text-[32px] py-4 md:py-0 text-[20px] font-semibold text-secondary">
                What We Do
              </h3>
              <div className="flex flex-col mb-6">
                <p className="lg:text-[1.15rem] text-[1rem] text-[#717171]">
                  We Assist You In Constructing Top-Tier Digital Solutions And
                  Products Following Best Practices, While Also Offering An
                  Extensive Array Of Associated Professional Services. Our
                  Commitment Is To Provide Unparalleled Service To Our Esteemed
                  Clients On A Global Scale.
                </p>
              </div>{" "}
              {/* Button */}
              <div className="mb-10 mx-auto md:mx-0">
                <button className="group p-2">
                  <Link
                    className="flex items-center font-semibold text-gray-700 group-hover:text-primarycolor group-hover:translate-x-2 transition-transform"
                    to="/career"
                  >
                    <span className="text-[#717171] font-normal text-normal">
                      Learn More
                    </span>
                    <BsArrowUpRight className="transform transition-transform group-hover:rotate-45 w-6 h-5 text-[#717171] ml-[5px]" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="order-first md:order-last md:w-[35%] flex justify-end">
              <img src={third} alt="About" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;
