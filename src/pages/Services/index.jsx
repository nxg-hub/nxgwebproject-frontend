import React from "react";
import "./index.css";
import CustomButton from "../../components/Button";
import NLogo from "../../assets/icons/n.png";
import LearnArrow from "../../assets/svgs/learnArrow.svg";
import { ServicesUtils } from "../../utils/services";
import Footer from "../../components/Footer";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Services = ({ open }) => {
  return (
    <>
      {/* Dark overlay on page, when mobile menu is opened */}
      <div className={`${open ? "overlay" : "hidden"}  md:hidden`}></div>

      {/* Banner */}
      <div
        className="relative min-h-[550px] text-primary font-medium rounded-[20px] bg-cover bg-center bg-no-repeat mx-4 md:mx-4"
        style={{ backgroundImage: "url(/serviceBg.png)" }}
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
          NXG-HUB | SERVICES
        </p>
      </div>

      {/* Services */}
      <div className="w-full center my-12 flex-col gap-10">
        <div className="flex-col gap-6 center w-[80%]">
          <div className="center">
            <div className="flex items-start">
              <img src={NLogo} alt="logo" />
            </div>
            <h2 className="text-secondary lg:text-center text-[36px] md:text-center text-[20px] font-semibold">
              Our Services
            </h2>
          </div>
          <p className="lg:text-center text-[18px] md:text-center text-[16px] text-gray leading-[28px]">
            We Assist You In Constructing Top-Tier Digital Solutions And
            Products Following Best Practices, While Also Offering An Extensive
            Array Of Associated Professional Services. Our Commitment Is To
            Provide Unparalleled Service To Our Esteemed Clients On A Global
            Scale.
          </p>
        </div>

        <div className="w-full center flex-wrap services py-8 text-primary">
          <div className="center flex-wrap w-[95%] gap-4">
            {ServicesUtils.map((service) => (
              <div
                key={service.id}
                className="bg-gray md:h-[590px] lg:w-[32%] md:w-[48%] w-full p-4 flex-col flex rounded-[26px]"
              >
                <div>
                  <img
                    src={service.image}
                    alt="service image"
                    className="rounded-[20px]"
                  />
                </div>
                <div className="flex-col flex items-start w-full mt-6">
                  <h3 className="text-[24px] font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="font-light leading-[28px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training */}
      <div className="w-full center my-8 flex-col gap-8 bg-[#F1F1F1]">
        <div className="flex-col gap-6 center w-[80%]">
          <div className="center">
            <div className="flex items-start">
              <img src={NLogo} alt="logo" />
            </div>
            <h2 className=" text-secondary lg:text-center text-[36px] md:text-center text-[20px] font-semibold">
              Training
            </h2>
          </div>
          <div className="lg:text-[28px] md:text-[18px]">
            <p className="text-center font-semibold text-gray leading-[36px]">
              Register For Our Next Cohort
            </p>
            <p className="text-center font-semibold text-gray leading-[36px]">
              Click Here To Register For Our Next Tech BootCamp
            </p>
          </div>
          <div className="my-4">
            <div className="learn-more-arrow1 grid place-content-center">
              <button className="group p-[8px]">
                <Link
                  className="flex items-center font-semibold text-gray-700 group-hover:text-primarycolor group-hover:translate-x-2 transition-transform"
                  to="/career"
                >
                  <span className="text-[#717171]">Here</span>
                  <BsArrowUpRight className="aboutarrow transform transition-transform group-hover:rotate-45 w-6 h-5 text-[#717171] ml-[5px]" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Services;
