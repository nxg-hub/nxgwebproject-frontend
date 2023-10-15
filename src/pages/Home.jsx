import React from 'react'
import Slider from '../components/Carousel/Slider'
import { NavLink } from 'react-router-dom'
import REC from '../assets/REC.jpg'
import smoke from '../assets/smoke.png'
import IT from '../assets/IT.jpg'
import software from'../assets/software.jpg'
import icon2 from'../assets/icon2.jpg'
import consulting from '../assets/consulting.jpg'
import icon1 from'../assets/icon1.jpg'
import { BsArrowRight,BsArrowUpRight } from 'react-icons/bs'


const Home = () => {
  return (
    <>
  <Slider/>;
  {/*------------about us section------------*/}
  <section style={{margin:"",  width:"1352px", justifyContent:"space-between",height:"527px",objectFit:"cover"}}>
    <div className='About-content'>

    <div style={{ marginLeft:"10px",height:"417px"}} className='about-image'>
      <img style={{height:"475px",width:"600px"}} src={REC} alt="" />
    </div>

  <div className='About-word' style={{backgroundImage: `url(${smoke})`,  marginLeft:"30px", borderRadius:"20px", height:"417px"}}>
    
    <div className='About-section1 bg-sky-100'>

      <div className='About' style={{ display:"flex", margin:"20px",justifyContent:"space-between"}}>
        <div style={{display:"flex"}}>
        <div><img src={icon1} alt="" /></div>
        <h1 style={{fontFamily:"Manrope",fontWeight:"600",fontSize:"36px",color:"#717171"}}>ABOUT US </h1>
        </div>

        <NavLink to='/about'>
              <div className='bg-white text-primarycolor px-[10px] py-[11px] rounded-full'>
                <BsArrowRight className='group-hover:text-primarycolor w-6 h-5'/>
              </div>
              </NavLink>
              
      </div>

    <div className=''>
      <h3 style={{marginTop:"20px",marginLeft:"20px",marginBottom:"15px", color:"#717171",fontSize:"20px", fontFamily:"Manrope",fontWeight:"600",}}>We bring you Creativity at its best!</h3>

      <div  style={{margintop:"15px",marginBottom:"25px",marginRight:"15px",marginLeft:"15px",fontSize:"18px",color:"#717171", fontWeight:"400"}} className='text1'>
      <p>NextGenHub is A Group Of Software Developers And IT <br /> Consultants From All Spheres Of The Information Technology World,<br /> Endued With Experiences, Bright ,Minds And Exposure. We Are A Group Of Innovative <br />Minds Engaged In Constant Brainstorming For Exceptional Ideas</p>
      </div>
    </div>
    </div>


    <div  className='About-section2  bg-sky-100'>
      <p style={{margin:"30px",fontSize:"18px",fontWeight:"400",color:"#717171"}}>Our Collective Skills Result in A Dynamic Force That Can Fulfill All The <br /> Requirement of Your Brand Or Career ,No Matter How Diverse <br /> They May Be. We Are On A Mission To Re-engineer The World Through Technology</p>
      
      
      </div>
      
  </div>
  
    </div>
    <div style={{margin:"100px"}}>
    <div style={{ display:"grid", placeItems:"center", }}>
        <button style={{border:"2px solid #717171",paddingTop:"8px",paddingBottom:"8px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",width:"200px", display:"grid", placeItems:"center",color:"#717171"}}>
          <a  style={{display:"flex",fontWeight:"400"}} href="/about">learn more <BsArrowUpRight className='group-hover:text-primarycolor w-6 h-5'/></a>
        </button>
      </div>
    </div>

  </section>


  {/*------------Services section----------------------*/}
  <section style={{marginTop:"30px", border:"2px solid white", width:"1376px", }}>
    <div className='service-content'>

      <div  style={{ display:"flex",margin:"30px",justifyContent:"space-between"}} className='service-desc'>
        <div style={{display:"flex"}}>
          <div>
            <img src={icon2} alt="" />
          </div>
        <div  style={{ color:"#2596BE",fontSize:"36px",fontWeight:"600",}} className=''>
      <h1 style={{}}> OUR SERVICES </h1>
        </div>
        </div>

        <div style={{ margin:"0px", fontSize:"18px",fontWeight:"400",color:"#717171"}} className=''>
        <p style={{fontSize:"18px",fontWeight:"400",color:"#717171"}}>
          We Assist You In Constructing Top-Tier Digital Solution And Products  Following Best <br /> Practices While Also Offering AnExtensive Array Of Associated Professional Services. <br /> Our Commitments To Provide Unparalleled Service To Our Esteemed Clients On A <br />  Global Scale. 
        </p>

        </div>

      </div>

      <div  className='section-2services'>

      <div style={{border:"2px solid white", borderRadius:"20px"}} className='IT-Training'>
        <div style={{margin:"20px",backgroundColor:"#FAF9F6", border:"2px solid white"}}>

        <div>
          <img src={IT} alt="" />
        </div>
        <div style={{marginTop:"30px",marginBottom:"30px"}} className=''>
        <h1 style={{fontSize:"28px",fontWeight:"600",color:"#717171"}}>IT Training </h1>
        </div>

        <div style={{margin:""}}>
        <p style={{fontSize:"18px",fontWeight:"400",color:"#717171"}}>We Organize Software Development Training <br /> To Tech Professionals And Aspiring Tech <br /> Professionals, Equiping Them With <br /> Necessary Skills Required To Three In The <br /> Tech Industry
        </p>
        </div>
        </div>
  
      </div>

     


      <div style={{ borderRadius:"20px"}} className='Software Development'>
        <div style={{margin:"20px", border:"2px solid white",backgroundColor:"#FAF9F6",padding:"20px"}}>

        <div>
        <img src={software} alt="" />
        </div>

        <div style={{marginTop:"30px",marginBottom:"30px"}}>
        <h1 style={{fontSize:"28px",fontWeight:"600",color:"#717171"}}>Software Development</h1>
        </div>

        <div>
        <p style={{fontSize:"18px", fontWeight:"400", color:"#717171"}}> Our Team Of Professional Engineers Are <br /> Involved In Building Real World Solutions <br /> And Applications From Conceptualization To <br /> Deployment For Business Use Case Our <br /> Custom Software Development Services
        </p>
        </div>
        </div>
      </div >

      <div style={{ borderRadius:"20px"}}  className='Consulting Services'>
        <div style={{margin:"20px", border:"2px solid white", backgroundColor:"#FAF9F6",padding:"20px"}}>
        <div>
        <img src={consulting} alt="" />
        </div>

        <div style={{marginTop:"30px",marginBottom:"30px"}}>
        <h1 style={{fontSize:"28px",fontWeight:"600",color:"#717171"}}>Consulting Services </h1>
        </div>
        <p style={{fontSize:"18px", fontWeight:"400", color:"#717171"}} >We Offer IT Consultancy Services... <br />Including Technical Recruiting Contact Us <br />Today!</p>

      </div>
      </div>
      <div>
          <button>Learn More</button>
        </div>
      </div>

    </div> 


  </section>


  {/*-------- Contact Section----------*/}
  <section>
    <div className=''>
      <img src="" alt="" />
      <p>Get In Touch</p>
    </div>
    <div className='Contact-content'>

      <div className='contact-section1'>

      <div className=''>
      <div><img src="" alt="" /></div>
      <h1> LET'S START YOUR PROJECT </h1>
      </div>

      <div className=''>
      <p>Planning Your Next Project?</p>
      <p>Message A Consultant! And Our Team Will Get Back To <br /> You Shortly!</p>
      <p>We Go Beyond Software Development, We <br /> Shape Businesses And Careers.</p>
      <p>Write your email and we will contact you to <br /> discuss your project!</p>
      </div>
      </div>

      <div className='contact-section2'>

          <div>
          <input type="text" placeholder='Name' name='User_name' />
          <div/>

            <div>
          <input type="number" placeholder='Phone Number' name='User_Phone Number' />
          </div>

          <div>
          <input type="email" placeholder='Email' name='User_Email' />
          </div>

          <div>
          <input type="text" placeholder='Subject' name='User_Subject' />
          </div>

          <div>
          <textarea name="message" cols="30" rows="5"></textarea>
          </div>

          <div>
          <button className='Btn'>Submit</button>
          </div>
    
      </div>

    </div>
    </div>
  </section>
  {/*-------------Faq section---------*/}
  <section>
    <div>
      <h1>FAQ</h1>
    </div>
  </section>
    </>
  )
}

export default Home
