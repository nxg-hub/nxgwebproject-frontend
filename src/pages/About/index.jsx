import React from 'react';
import './index.css'; 
import CustomButton from '../../components/Button';
import NLogo from '../../assets/icons/n.png'; 
import REC from '../../assets/svgs/learnArrow.svg'; 
import Footer from '../../components/Footer';

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

          <div>
            <h3 className="text-[36px] font-semibold" style={{ color: "#2596BE", fontFamily: "Manrope" }}>
              We bring you Creativity at its best!
            </h3>
            <div className="text1" style={{ marginTop: "15px", marginBottom: "25px", marginRight: "15px", marginLeft: "15px", fontSize: "18px", fontFamily: "Manrope", fontWeight: "400" }}>
              <p>NextGenHub (NXG-Hub) is a group of software developers and IT consultants from all spheres of the information technology world, endowed with experiences, bright minds, and exposure. We are a group of innovative minds engaged in constant brainstorming for exceptional ideas. Our collective skills result in a dynamic force that can fulfill all the requirements of your brand or career, no matter how diverse they may be. We are on a mission to re-engineer the world through technology.</p>
            </div>
          </div>
        </div>

        <div className="About" style={{ display: "flex", margin: "20px", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div className="about-image" style={{ marginLeft: "10px", height: "417px" }}>
              <img src={REC} alt="REC" style={{ height: "386px", width: "491px" }} />
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div>
          <h3 className="text-[36px] font-semibold" style={{ color: "#2596BE", fontFamily: "Manrope" }}>Our Mission</h3>
          <div className="text1" style={{ marginTop: "15px", marginBottom: "25px", marginRight: "15px", marginLeft: "15px", fontSize: "18px", fontFamily: "Manrope", fontWeight: "400" }}>
            <p>NXG-HUB Digital Technologies aims to empower numerous youth by offering industry-relevant skill training, thus enhancing their prospects for a more promising livelihood. Simultaneously, we are dedicated to delivering real-world technological solutions to both corporate and government entities, contributing to the digitization of Africa's economy.</p>
          </div>
        </div>

        <div className="About" style={{ display: "flex", margin: "20px", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div className="about-image" style={{ marginLeft: "10px", height: "417px" }}>
              <img src={REC} alt="REC" style={{ height: "386px", width: "491px" }} />
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div>
          <h3 className="text-[36px] font-semibold" style={{ color: "#2596BE", fontFamily: "Manrope" }}>What We Do</h3>
          <div className="text1" style={{ marginTop: "15px", marginBottom: "25px", marginRight: "15px", marginLeft: "15px", fontSize: "18px", fontFamily: "Manrope", fontWeight: "400" }}>
            <p>We assist you in constructing top-tier digital solutions and products following best practices, while also offering an extensive array of associated professional services. Our commitment is to provide unparalleled service to our esteemed clients on a global scale.</p>
          </div>
        </div>

        <div className="About" style={{ display: "flex", margin: "20px", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div className="about-image" style={{ marginLeft: "10px", height: "417px" }}>
              <img src={REC} alt="REC" style={{ height: "386px", width: "491px" }} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

export default About;
