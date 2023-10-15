import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title"style={{ whiteSpace: "pre-line" }}>{slide.title}</h2>
          <h3 className="slide-text"style={{ whiteSpace: "pre-line" }}>{slide.description.replace(/\\n/g, '\n')}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
