import { useState,useEffect } from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight  } from "react-icons/ai"
import "./Slider.css"
import { SliderData } from './Sliderdata'
import Dots from './Dots'
import background from '../../assets/images/background.jpg'
import { NavLink,Link,useNavigate } from 'react-router-dom'; // Helps 


 
// ... (other imports)

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const slideLength = SliderData.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  const handleButtonClick = () => {
    // Clear the interval to stop auto-scrolling
    clearInterval(slideInterval);

    // Navigate to the specified route
    navigate(SliderData[currentSlide]?.route || '/default-route'); 
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div style={{ backgroundImage: `url(${background})` }} className='slider relative'>
      <div className='ARROW'>
        <AiOutlineArrowLeft className=' arrow prev ' onClick={prevSlide} />
        <AiOutlineArrowRight className=' arrow next ' onClick={nextSlide} />
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div className={index === currentSlide ? "slide  current " : "slide"} key={index}>
            {index === currentSlide && (
              <>
                <div className='vector-heading'>
                  <img className='vector' src={slide.image} alt="" />
                </div>
                <div className='content '>
                  <h2 style={{ whiteSpace: "pre-line" }} className='Title-slide text-center text-[28px] md:text-[64px] md:text-start'>{slide.title}</h2>
                  <p style={{ whiteSpace: "pre-line" }} className='Text-slide'>{slide.description.replace(/\\n/g, '\n')}</p>
                  <div className='Button-Container'>
                    {/* Use a regular button instead of NavLink */}
                    <button className='btn' onClick={handleButtonClick}>
                      Learn More
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
      <Dots
        activeIndex={currentSlide}
        SliderData={SliderData}
        onClick={(activeIndex) => setCurrentSlide(activeIndex)} />
    </div>
  );
};

export default Slider;
