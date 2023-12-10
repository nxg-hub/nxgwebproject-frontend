import React from "react";

function Dots({ activeIndex, onClick, slides }) {
  return (
    <div className="flex justify-center gap-2 md:gap-5 pb-4">
      {slides.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index ? "!bg-[#46a6c8]" : ""
          } block bg-[#c9e5ef] w-[8px] h-[8px] md:w-[24px] md:h-[24px] rounded-full cursor-pointer transition-colors`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
}
export default Dots;
