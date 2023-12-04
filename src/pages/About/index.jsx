import React from "react";
import "./index.css";
import CustomButton from "../../components/Button";
import NLogo from "../../assets/icons/n.png";
import Footer from "../../components/Footer";
import AboutOne from "../../assets/images/aboutOne.jpg";
import AboutTwo from "../../assets/images/aboutTwo.jpg";
import AboutThree from "../../assets/images/aboutThree.jpg";
import LearnArrow from "../../assets/svgs/learnArrow.svg";
import { BsArrowUpRight } from "react-icons/bs";

const About = ({ open }) => {
  return (
    <>
      {/* Dark overlay on page, when mobile menu is opened */}
      <div className={`${open ? "overlay" : "hidden"}  md:hidden`}></div>

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

          <CustomButton children="Learn More" className="text-sm" />
        </div>
        <p className="text-center text-[16px] md:text-[20px] py-4 mt-[9rem]">
          NXG-HUB | ABOUT
        </p>
      </div>

      {/* About */}
      <div className="w-full center my-12 flex-col gap-10">
        <div className="flex-col gap-6 center w-[80%]">
          <div className="center">
            <div className="flex items-start">
              <img src={NLogo} alt="logo" />
            </div>
            <h2 className="text-secondary lg:text-[36px] md:text-[20px] font-semibold">
              About us
            </h2>
          </div>
        </div>

        {/* We Bring You Creativity At Its Best */}
        <div className="between flex-col md:flex-row w-[90%]">
          <div className="order-last md:order-first md:w-[60%] flex-col gap-4 items-start flex mb-[0rem] md:mb-0">
            <h3 className="lg:text-[32px] md:text-[20px] font-semibold text-secondary">
              We bring you Creativity at Its best!
            </h3>
            <p className="lg:text-[18px] md:text-[16px] text-color">
              NextGenHub (NXG-Hub) is a group of software developers and IT
              consultants from all spheres of the information technology world,
              endowed with experiences, bright minds, and exposure. We are a
              group of innovative minds engaged in constant brainstorming for
              exceptional ideas. Our collective skills result in a dynamic force
              that can fulfill all the requirements of your brand or career, no
              matter how diverse they may be. We are on a mission to re-engineer
              the world through technology.
            </p>
          </div>
          <div className="order-first md:order-last md:w-[35%]">
            <img src={AboutOne} alt="About" className="mb-4" />
          </div>
        </div>
      </div>

      {/* OUR MISSION */}
      <div className="between flex-col md:flex-row w-[90%]">
        <div className="md:w-[35%] float-left">
          <img src={AboutTwo} alt="About" className="mb-4" />
        </div>
        <div className="md:w-[60%] flex-col gap-4 items-start flex gap-4 items-start flex mb-[3rem] md:mb-0">
          <h3 className="lg:text-[32px] md:text-[20px] font-semibold text-secondary">
            Our Mission
          </h3>
          <p className="lg:text-[18px] md:text-[16px] text-color">
            NXG-HUB Digital Technologies Aims To Empower Numerous Youth By
            Offering Industry-Relevant Skill Training, Thus Enhancing Their
            Prospects For A More Promising Livelihood. Simultaneously, We Are
            Dedicated To Delivering Real-World Technological Solutions To Both
            Corporate And Government Entities, Contributing To The Digitization
            Of Africa's Economy.
          </p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="between flex-col md:flex-row w-[90%]">
        <div className="order-last md:order-first md:w-[60%] flex-col gap-4 items-start flex mb-[0rem] md:mb-0">
          <h3 className="lg:text-[32px] md:text-[20px] font-semibold text-secondary">
            What We Do
          </h3>
          <p className="lg:text-[18px] md:text-[16px] text-color">
            We Assist You In Constructing Top-Tier Digital Solutions And
            Products Following Best Practices, While Also Offering An Extensive
            Array Of Associated Professional Services. Our Commitment Is To
            Provide Unparalleled Service To Our Esteemed Clients On A Global
            Scale.
          </p>
        </div>
        <div className="order-first md:order-last md:w-[35%]">
          <img src={AboutThree} alt="About" className="mb-4" />
        </div>
      </div>
      <div className="learn-more-arrow2 mb-[40px]">
        <button className="group p-[8px]">
          <a
            className="flex items-center font-semibold text-gray-700 group-hover:text-primarycolor group-hover:translate-x-2 transition-transform"
            href="/career"
          >
            <span className="text-[#717171]">Learn More</span>
            <BsArrowUpRight className="aboutarrow transform transition-transform group-hover:rotate-45 w-6 h-5 text-[#717171] ml-[5px]" />
          </a>
        </button>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
