import React from 'react';
import './index.css'; 
import CustomButton from '../../components/Button';
import NLogo from '../../assets/icons/n.png'; 
import Footer from '../../components/Footer';
import AboutOne from '../../assets/images/aboutOne.jpg'

const About = () => {
  return (
    <main className="center w-screen overflow-x-hidden">
      <div className="w-full h-full flex-col center overflow-x-hidden">
        {/* Banner */}
        <div className="w-[95%] lg:h-[848px] h-[100vh] Aboutbanner center text-primary overflow-hidden rounded-[20px]">
          <div className="flex-col w-[85%] md:items-start items-center flex md:gap-4 gap-3">
            <h1 className="lg:leading-[76px] text-lg md:text-xl lg:text-[64px] lg:w-[825px] font-semibold text-center md:text-left">
              Engineering The Future Through Technology Innovation
            </h1>
            <h3 className="lg:text-[28px] text-lg">With NXG-HUB</h3>
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
              <h2 className="text-secondary text-[36px] font-semibold">About us</h2>
            </div>
          </div>

          {/* DUPLICATE THIS */}
          <div className='between w-[90%]'>
            <div className='flex-col gap-10 items-start flex w-[60%]'>
              <h3 className="text-[32px] font-semibold text-secondary">
                We bring you Creativity at its best!
              </h3>
              <p>NextGenHub (NXG-Hub) is a group of software developers and IT consultants from all spheres of the information technology world, endowed with experiences, bright minds, and exposure. We are a group of innovative minds engaged in constant brainstorming for exceptional ideas. Our collective skills result in a dynamic force that can fulfill all the requirements of your brand or career, no matter how diverse they may be. We are on a mission to re-engineer the world through technology.</p>
            </div>

            <div className="w-[35%]">
              <img src={AboutOne} alt="About"/>
            </div>
          </div>
          {/* DUPLICATE ENDS HERE */}
          
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

export default About;
