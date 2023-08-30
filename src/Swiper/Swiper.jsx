import React, { useState, useEffect } from "react";
import "./swiper.css";
import FirstSlide from "../images/FirstSlide.jpg";
import SecondSlide from "../images/SecondSlide.jpg";
import ThirdSlide from "../images/ThirdSlide.jpg";
import FourthSlide from "../images/FourthSlide.jpg";
const Swiper = () => {
  const wallPapers = [FirstSlide, SecondSlide, ThirdSlide, FourthSlide];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = wallPapers.length;

  const handleNextSlide = () => {
    if (currentSlide === slidesCount - 1) {
      return;
    }
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      return;
    }
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handlePaginationClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const home = document.querySelector(".home");
    home.style.backgroundImage = `url(${wallPapers[currentSlide]})`;
    console.log(wallPapers[currentSlide]);
  }, [currentSlide]);

  return (
    <div className="home ">
      <section className="homeSection">
        <div className="prev" onClick={handlePrevSlide}>
          <i className="fas fa-angle-left fa-2x"></i>
        </div>
        {wallPapers.map((slide, index) => (
          <div
            key={index}
            className={`content ph${index + 1} ${
              currentSlide === index ? "active" : ""
            }`}
          >
            {index === 0 && (
              <>
                <h1>Cdia</h1>
                <p>
                  Commercial digital investment <br />
                  Agency
                </p>
                <div className="button">
                  <a href="#services" className="btn">
                    view more
                  </a>
                  <a href="#vision" className="btn">
                    Get Started
                  </a>
                </div>
              </>
            )}
            {index === 1 && (
              <>
                <h1>SOFTWARE DEVELOPMENT</h1>
                <p>Websites - Mobile Apps - E-commerce</p>
              </>
            )}
            {index === 2 && (
              <>
                <h1>DIGITAL MARKETING</h1>
                <p>
                  Creative Designs - Social Media Management - Sponsored Ad SEO
                </p>
                <a href="/digital-marketing" className="btn">
                  View More
                </a>
              </>
            )}
            {index === 3 && (
              <>
                <h1>Media Production</h1>
                <p>Photography-Viddeography</p>
                <a href="mediaclub.html" className="btn">
                  View More
                </a>
              </>
            )}
          </div>
        ))}
        <div className="next" onClick={handleNextSlide}>
          <i className="fas fa-angle-right fa-2x"></i>
        </div>
        <div id="slide-number"></div>
      </section>
      <div className="indicators">
        {wallPapers.map((slide, index) => (
          <div
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => handlePaginationClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Swiper;
