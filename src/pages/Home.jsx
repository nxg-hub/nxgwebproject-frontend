import'./Home.css'
import React, { useRef } from 'react';
import Slider from '../components/Slider/Slider'
import { NavLink } from 'react-router-dom'
import REC from '../assets/images/REC.jpg'
import smoke from '../assets/images/smoke.png'
import IT from '../assets/images/IT.jpg'
import software from'../assets/images/software.jpg'
import icon2 from'../assets/icons/icon2.jpg'
import consulting from '../assets/images/consulting.jpg'
import icon1 from'../assets/icons/icon1.jpg'
import { BsArrowRight,BsArrowUp,BsArrowUpRight } from 'react-icons/bs'
import FaqList from '../components/FAQ/FaqList'
import contactbackground from '../assets/images/contactbackground.svg'
import Footer from '../components/Footer/index'
import { FiArrowUpRight } from 'react-icons/fi';



const Home = () => {
  const faqSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToFAQ = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  
  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };



  return (
    <>
<Slider/>
 {/*------------about us section------------*/}
 <section className="About-section">
  <div className="About-content">

    <div className="about-image">
      <img className="img" src={REC} alt="" />
    </div>

    <div className="About-word">

      <div className="About-section1">
        <div className="About-heading">

          <div className="About-description">
            <div>
              <img className='logo-icon' src={icon1} alt="" />
            </div>
            <div className='about-us'>
            <h1>ABOUT US</h1>
            </div>
          </div>

          <NavLink to="/about">
            <div className= "About-us-arrow bg-primary text-secondary px-[10px] py-[11px] rounded-full">
              <BsArrowRight className="group-hover:text-primary w-6 h-5" />
            </div>
          </NavLink>
        </div>

        <div className="text1">
          <h3 className='intro-text'>We bring you Creativity at its best!</h3>
          <div className="About-section1-text">
            <p className='sub-text'>
              NextGenHub is a Group Of Software Developers And IT Consultants From All Spheres Of The Information Technology World, Endued With Experiences, Bright Minds And Exposure. We Are A Group Of Innovative Minds Engaged In Constant Brainstorming For Exceptional Ideas.
            </p>
          </div>
        </div>
      </div>

      <div className="About-section2">
        <p className='sub-text'>
          Our Collective Skills Result in A Dynamic Force That Can Fulfill All The Requirement of Your Brand Or Career, No Matter How Diverse They May Be. We Are On A Mission To Re-engineer The World Through Technology.
        </p>
      </div>

      
    <div className='learn-more-arrow1'>

    <button className='group p-[8px]'>
    <a className='flex items-center font-semibold text-gray-700 group-hover:text-primarycolor group-hover:translate-x-2 transition-transform' href="/about">
      <span className='text-[#717171]'>
        Learn More
      </span>
      <BsArrowUpRight className='aboutarrow transform transition-transform group-hover:rotate-45 w-6 h-5 text-[#717171] ml-[5px]' />
    </a>
  </button>

    </div>
 
    </div>
  </div>
  
</section>


 {/*------------Services section----------------------*/}
 <section className="service-section">
  
  <div className='service-heading'>
    
    <div className="service-desc">
      <div>
        <img src={icon2} alt="" />
      </div>
      <div>
        <div className='ourservices'>OUR SERVICES</div>
      </div>
    </div>
    <div className='service-text-sub'>
    <div className='services-text'>We Assist You In Constructing Top-Tier Digital Solutions And Products Following Best Practices, While Also Offering An Extensive Array Of Associated Professional Services. Our Commitment Is To Provide Unparalleled Service To Our Esteemed Clients On A Global Scale.</div>
    </div>
    
  </div>
    

  <div className="service-content"> 

    <div className="section-2services">
      <div className="IT-Training border-[#eef2f6] border-[0.5px]">
        <div className='services-image'>
          <img className='image-IT' src={consulting} alt="" />
        </div>
        <div className="service-details">
          <h1 className='Intro-services'>IT Training</h1>
          <div className='SPACE services-info'>We Organize Software Development Training To Tech Professionals And Aspiring Tech Professionals, Equipping Them With Necessary Skills Required To Thrive In The Tech Industry.</div>
        </div>
      </div>

      <div className="Software-Development border-[#eef2f6] border-[0.5px]">
        <div>
          <img className='image-software' src={software} alt="" />
        </div>
        <div className="service-details">
          <h1 className='Intro-services'>Software Development</h1>
          <div className='SPACE services-info'>Our Team Of Professional Engineers Are Involved In Building Real World Solutions And Applications From Conceptualization To Deployment For Business Use Cases. Our Custom Software Development Services.</div>
        </div>
      </div>

      <div className="Consulting-Services border-[#eef2f6] border-[0.5px]">
        <div>
          <img className='image-consulting' src={IT} alt="" />
        </div>
        <div className="service-details">
          <h1 className='Intro-services'>Consulting Services</h1>
          <div className='SPACE services-info'>We Offer IT Consultancy Services, Including Technical Recruiting. <a style={{ textDecoration: "underline" }} href="/contact">Contact Us Today!</a></div>
        </div>
      </div>
    </div>
  </div>

  <div className='learn-more-arrow1 grid place-content-center' >
  <button className='group p-[8px]'>
    <a className='flex items-center font-semibold text-gray-700 group-hover:text-primarycolor group-hover:translate-x-2 transition-transform' href="/services">
      <span className='text-[#717171]'>
        Learn More
      </span>
      <BsArrowUpRight className='aboutarrow transform transition-transform group-hover:rotate-45 w-6 h-5 text-[#717171] ml-[5px]' />
    </a>
  </button>
  </div>
</section>



  {/*-------- Contact Section----------*/}
  <section  id='contact' style={{marginTop:"50px",marginLeft:"0",marginBottom:'0',padding:"0"}} ref={contactSectionRef}  >
    <div style={{display:"grid",placeContent:"center"}}>
      
    <div className='get-intouch-heading rounded-[20px] border-[#eef2f6] border-[0.5px]'>
      <div>
      <img src={icon2} alt="" />
      </div>
      <div>
      <div  className='get-inTouch'    onClick={scrollToContactSection}>Get In Touch</div>
      </div>
    </div>
    </div>
<div style={{backgroundImage: `url(${contactbackground})`,}} className='contact_container' >
    <div className='Contact-content'>

      <div style={{}} className='contact-section1'>

      <div style={{display:"flex",marginBottom:"16px"}} className='contact-subsection'>

      <div><img style={{borderRadius:"25px", boxShadow: " 0.1em 0.1em 0.15em #717171",marginRight:"10px"}} src={icon1} alt="" /></div>
      <h1  className='contact-intro'> LET'S START YOUR PROJECT </h1>
      </div>

      <div style={{width:"100%"}} className=''>
      <div className='contact-main-text'>Planning Your Next Project?</div>
      <div className='contact-main-text'>Message A Consultant! And Our Team Will Get Back To <br /> You Shortly!</div>
      
      <div className='contact-text'>We Go Beyond Software Development, We <br /> Shape Businesses And Careers.</div>
      <div className='contact-text' >Write your email and we will contact you to <br /> discuss your project!</div>
      
      </div>
      </div>

      <div style={{paddingTop:"0px",paddingBottom:"30px",paddingRight:"30px"}} className='contact-section2'  onClick={scrollToContactSection}>

          <div>
          <input  className="input" type="text" placeholder='Name' name='User_name' />
          </div>

          <div>
          <input className="input" type="number" placeholder='Phone Number' name='User_Phone Number' />
          </div>

          <div style={{margin:"0"}}>
          <input  className="input" type="email" placeholder='Email' name='User_Email' />
          </div>

          <div style={{}}>
          <textarea className='textarea' name="message" cols="30" rows="4"></textarea>
          </div>

          <div className='contact-button'>
  <button className='group text-primary rounded-[32px] py-2 pr-2 md:ml-0 ml-4 bg-[#2596be] flex items-center sm:w-[200px]'>
    <span className='text-[20px] font-bold mr-20 sm:ml-4 sm:mr-[3.9rem] group-hover:translate-x-2 transition-transform'>Submit</span>
    <span className='group-hover:rotate-45 transition-transform transform origin-center rounded-full p-2 text-[#46A6C8] bg-primary'>
      <FiArrowUpRight size={25} />
    </span>
  </button>
</div>

      </div>

    </div>
</div>
  </section>



  {/*-------------Faq section---------*/}
  <section className='faq-container'>
  <div >
    <div className='Faq-head'>
  <div className='Faq-text'>FAQ</div>
  </div>
    <div className='flex justify-center w-full '>
      <div className='w-full md:w-1/2'>
        <div className="flex justify-center"> {/* Center the FaqList */}
          <FaqList />
          
        </div>
      </div>
    </div>
    <div className='learn-more-arrow1 grid place-content-center pb-[50px]'>
    <button className='group' >
      <div className='BsArrowUpRight flex font-[400] text-[#717171]  group-hover:translate-x-2 transition-transform' onClick={scrollToTop} >
        Back to Top
      <BsArrowUpRight className=" transform transition-transform group-hover:rotate-45 w-6 h-5 mx-[5px]" />
      </div>
    </button>
  </div>
  </div>
</section>


{/* ----------------------Footer Section---------------------- */}

  {/*-------------Footer section---------*/}
  <section>
  <Footer/>
  </section>
    </>
  )
}

export default Home
