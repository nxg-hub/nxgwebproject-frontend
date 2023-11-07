import React from 'react';
import './index.css';
import CustomButton from '../../components/Button';
import NLogo from '../../assets/icons/n.png';
import Footer from '../../components/Footer';
import AboutOne from '../../assets/images/aboutOne.jpg';
import AboutTwo from '../../assets/images/aboutTwo.jpg';
import AboutThree from '../../assets/images/aboutThree.jpg';
import LearnArrow from '../../assets/svgs/learnArrow.svg';

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
        <div className="w-full center my-12 flex-col gap-10">
          <div className="flex-col gap-6 center w-[80%]">
            <div className="center">
              <div className="flex items-start">
                <img src={NLogo} alt="logo" />
              </div>
              <h2 className="text-secondary lg:text-[36px] md:text-[20px] font-semibold">About us</h2>
            </div>
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

<div className="lg:text-left md:text-center my-4">
    <CustomButton backgroundColor="#FFF" border="1px solid #717171" textColor="#717171" borderRadius="20px" padding="5px 40px">
        <p>Learn</p>
            <img src={LearnArrow} alt="learn arrow" />
    </CustomButton>
</div>


        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

export default About;
