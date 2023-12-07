import React from 'react';
import './index.css';
import CustomButton from '../../components/Button';
import Footer from '../../components/Footer';
import AboutOne from '../../assets/images/aboutOne.jpg';
import AboutTwo from '../../assets/images/aboutTwo.jpg';
import AboutThree from '../../assets/images/aboutThree.jpg';
import { BsArrowUpRight } from 'react-icons/bs';

const About = () => {
  return (
    <main className="center w-screen overflow-x-hidden">
      <div className="w-full h-full flex-col center overflow-x-hidden">
        {/* Banner */}
        <div className="w-[95%] lg:h-[848px] h-[100vh] Aboutbanner center text-primary overflow-hidden rounded-[20px]">
          <div className="flex-col w-[85%] md:items-start flex md:gap-4 gap-3">
            <h1 className="lg:leading-[76px] text-lg md:text-xl lg:text-[64px] lg:w-[825px] font-semibold md:text-left">
              Engineering The Future Through Technology Innovation
            </h1>
            <h3 className="lg:text-[28px] md:text-[18px]">With NXG-HUB</h3>
            <div className="pt-10">
              <CustomButton>Learn More</CustomButton>
            </div>
          </div>
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
          <div className="between flex-col md:flex-row w-[90%]">
            <div className="order-last md:order-first md:w-[60%] flex-col gap-4 items-start flex mb-[0rem] md:mb-0">
              <h3 className="lg:text-[32px] md:text-[20px] font-semibold text-secondary">
                We bring you Creativity at Its best!
              </h3>
              <p className="lg:text-[18px] md:text-[16px] text-color">
                NextGenHub (NXG-Hub) is a group of software developers and IT consultants from all spheres of the information technology world, endowed with experiences, bright minds, and exposure. We are a group of innovative minds engaged in constant brainstorming for exceptional ideas. Our collective skills result in a dynamic force that can fulfill all the requirements of your brand or career, no matter how diverse they may be. We are on a mission to re-engineer the world through technology.
              </p>
            </div>
            <div className="order-first md:order-last md:w-[35%]">
              <img src={AboutOne} alt="About" className="mb-4"/>
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
              NXG-HUB Digital Technologies Aims To Empower Numerous Youth By Offering Industry-Relevant Skill Training, Thus Enhancing Their Prospects For A More Promising Livelihood. Simultaneously, We Are Dedicated To Delivering Real-World Technological Solutions To Both Corporate And Government Entities, Contributing To The Digitization Of Africa's Economy.
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
              We Assist You In Constructing Top-Tier Digital Solutions And Products Following Best Practices, While Also Offering An Extensive Array Of Associated Professional Services. Our Commitment Is To Provide Unparalleled Service To Our Esteemed Clients On A Global Scale.
            </p>
          </div>
          <div className="order-first md:order-last md:w-[35%]">
            <img src={AboutThree} alt="About" className="mb-4" />
          </div>
        </div>
        
        <div className='learn-more-arrow2 mb-[40px]' >
          <button className='group p-[8px]'>
            <link className='flex items-center font-semibold text-gray-700 group-hover:text-primarycolor group-hover:translate-x-2 transition-transform' href="/career">
              <span className='text-[#717171]'>
                Learn More
              </span>
              <BsArrowUpRight className='aboutarrow transform transition-transform group-hover:rotate-45 w-6 h-5 text-[#717171] ml-[5px]' />
            </link>
          </button>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

export default About;
