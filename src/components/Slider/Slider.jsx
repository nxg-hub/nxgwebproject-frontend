import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { slides } from "../../utils/slides";
import Dots from "../Dot/Dots";
import background from "../../assets/images/background.jpg";
import { NavLink, Link } from "react-router-dom";
import CustomButton from "../Button";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slides.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

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

    // Delay the navigation to ensure it happens after the slider transition
    setTimeout(() => {
      // Navigate to the specified route
      window.location.href = "/services";
    }, 500); // Adjust the delay time as needed
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
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="relative min-h-[550px] text-[#717171] font-medium rounded-[20px] bg-cover bg-center bg-no-repeat mx-4 md:mx-4"
    >
      {slides.map((slide, index) => {
        return (
          <div
            className={`${
              index === currentSlide ? "opacity-100 !translate-x-0" : ""
            } opacity-0 translate-x-[-40%] ease-in-out duration-500 transition-all relative`}
            key={index}
          >
            {index === currentSlide && (
              <div className="md:w-full pt-[32px] px-[23px] flex md:flex-row flex-col md:p-40 gap-[40px] items-center justify-between">
                <div className="md:order-2">
                  <img
                    className="md:w-[477px] md:h-[312px] h-[180px] w-[276px]"
                    src={slide.image}
                    alt={slide.title}
                  />
                </div>
                <div className="flex flex-col items-center md:items-start md:text-left md:w-[743px]">
                  <h2
                    style={{ whiteSpace: "pre-line" }}
                    className="text-center text-[28px] font-semibold md:text-[64px] md:text-start"
                  >
                    {slide.title}
                  </h2>
                  <p
                    style={{ whiteSpace: "pre-line" }}
                    className="w-[339px] md:w-[700px] px-2 md:px-0 md:text-start text-center text-[16px] font-normal md:text-[28px] py-4 md:py-6"
                  >
                    {slide.description.replace(/\\n/g, "\n")}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="md:absolute bottom-32 left-40 static center">
        <CustomButton
        
          children="Learn More"
          className="text-sm gap-2 py-[16px] px-[32px] md:gap-0 md:py-0 md:px-0"
          onClick={() => (window.location.href = "/services")}
        />
      </div>
      <div className="mt-[40px] md:mt-0">
        <Dots
          activeIndex={currentSlide}
          slides={slides}
          onClick={(activeIndex) => setCurrentSlide(activeIndex)}
        />
      </div>
    </div>
  );
};

export default Slider;
