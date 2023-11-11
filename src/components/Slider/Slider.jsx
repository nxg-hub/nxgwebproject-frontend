import { useState,useEffect } from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight  } from "react-icons/ai"
import "./Slider.css"
import { SliderData } from './Sliderdata'
import Dots from './Dots'
import background from '../../assets/images/background.jpg'
import { NavLink } from 'react-router-dom'; // Helps 


 

const Slider = () => {
  const [ currentSlide, setCurrentSlide]= useState(0);
  const slideLength = SliderData.length;
  // slidelength = 1 2 3 4
  // currentSlide  = 0 1 2 3
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength -1 ?  0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 :  currentSlide - 1);
  };

  function auto(){
    slideInterval= setInterval(nextSlide, intervalTime)
  }

  useEffect(()  => {
    setCurrentSlide(0)
  }, []);
  
  useEffect(()=> {
  if (autoScroll){
    auto()
  }
  return() => clearInterval(slideInterval)
  }, [currentSlide]);

  return (
    <div  style={{backgroundImage: `url(${background})`}} className='slider '>
      <div className='ARROW'>
      <AiOutlineArrowLeft className=' arrow prev ' onClick={prevSlide}/>
      <AiOutlineArrowRight className=' arrow next ' onClick={nextSlide}/>
      </div>
      {SliderData.map((slide,index)=>{
        return(
          <div  className={index === currentSlide ? "slide  current " :"slide"} key={index}>
            {index === currentSlide && (
              <> 
              <div className='vector-heading'>
              <img className='vector' src={slide.image} alt="" />
              </div>
              <div className='content '>
                <h2 style={{whiteSpace: "pre-line", }} className='Title-slide'>{slide.title}</h2>
                <p style={{whiteSpace: "pre-line"}} className='Text-slide'>{slide.description.replace(/\\n/g, '\n')}</p>
                <div className='Button-Container'>

                <NavLink exact to="/services">
                  <button className='btn'> Learn More </button>
                </NavLink>
                </div>
              </div>
    
              </>
            )}    
              
          </div>
          
          
        )
      })  }
      <Dots
                activeIndex={currentSlide}
                SliderData={SliderData}
                onClick={(activeIndex) => setCurrentSlide(activeIndex)}/>
    </div>
  )
}

export default Slider
