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
          <div className="flex justify-center w-full flex-row mt-20">
            <div className="md:hidden flex justify-center gap-2 text-center relative rounded-[20px] border-[#eef2f6] border-[0.5px] mb-8 w-[50%] md:w-[20%] py-2">
              <span>
                <img src="/tag.png" alt="icon" />
              </span>
              <span>
                <h2 className="text-[#2596BE] font-semibold text-md md:text-[36px]">
                  Services
                </h2>
              </span>
            </div>
            <div className="hidden md:block gap-2 text-center relative rounded-[20px] border-[#eef2f6] border-[0.5px] mb-8 w-[40%] md:w-[20%] py-2">
              <h2 className="text-[#2596BE] font-semibold text-md md:text-[36px] ml-4">
                Services
              </h2>
              <span className="absolute md:top-4 md:flex md:justify-center md:w-[calc(100%-10rem)] ml-2 md:ml-0">
                <img src="/tag.png" alt="icon" className="px-4 " />
              </span>
            </div>
          </div>

          <p className="text-center md:text-[18px] text-[16px] font-normal text-gray leading-[28px]">
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
                  {service.id === 3 && (
                      <Link to={service.contactLink} className="text-primary underline mt-3">
                        Contact Us Today!
                      </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training */}
      <div className="w-full center my-12 flex-col gap-8 bg-[#F1F1F1]">
        <div className="flex-col gap-6 center w-[80%] my-8">
          <div className="flex justify-center w-full flex-row">
            <div className="md:hidden flex justify-center gap-2 text-center relative border-[#ABBED1] rounded-[20px] border-[0.5px] mb-8 w-[50%] md:w-[20%] py-2">
              <span>
                <img src="/tag.png" alt="icon" />
              </span>
              <span>
                <h2 className="text-[#2596BE] font-semibold text-md md:text-[36px]">
                  Training
                </h2>
              </span>
            </div>
            <div className="hidden md:block gap-2 text-center relative rounded-[20px] border-[#ABBED1] border-[0.5px] mb-8 w-[40%] md:w-[20%] py-2">
              <h2 className="text-[#2596BE] font-semibold text-md md:text-[36px] ml-4">
                Training
              </h2>
              <span className="absolute md:top-4 md:flex md:justify-center md:w-[calc(100%-10rem)] ml-2 md:ml-0">
                <img src="/tag.png" alt="icon" className="px-4 " />
              </span>
            </div>
          </div>
          <div className="md:text-[28px] text-[18px]">
            <p className="text-center font-semibold text-gray md:leading-[36px] leading-[24px]">
              Register For Our Next Cohort
            </p>
            <p className="text-center font-semibold text-gray md:leading-[36px] leading-[24px]">
              Click Here To Register For Our Next Tech BootCamp
            </p>
          </div>
          <div className="my-4">
            <div className="grid place-content-center">
              <button className="group border-[1px] p-2 hover:bg-[#A4CDDC] border-[#abbed1] w-[180px] rounded-[20px] flex justify-center">
                <Link
                  className="flex items-center font-semibold text-gray-700 group-hover:text-primarycolor group-hover:translate-x-2 transition-transform"
                  to="https://forms.gle/c7auu7gyrwbxwqeH8"
                  target="_blank"
                  rel="noopener noreferrer" // recommended for security
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
