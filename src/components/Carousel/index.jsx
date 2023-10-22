import React, { useState, useEffect } from "react";
import './style.css';

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Update items per page based on screen width
  const updateItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setItemsPerPage(5); // Desktop
    } else if (screenWidth >= 768) {
      setItemsPerPage(4); // Tablet
    } else {
      setItemsPerPage(2); // Mobile
    }
  };

  // Handle window resize to update items per page
  const handleResize = () => {
    updateItemsPerPage();
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (currentSlide + itemsPerPage < items.length) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const visibleItems = items.slice(currentSlide, currentSlide + itemsPerPage);

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Event Gallery</h2>
      <div className="carousel">
        {/* <div className={`carousel-arrow left ${currentSlide === 0 ? "disabled" : ""}`} onClick={handlePrev}> */}
        <svg className={`carousel-arrow  ${currentSlide === 0 ? "disabled" : ""}`} onClick={handlePrev} width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.203 2.08928C15.203 1.86328 15.1025 1.66239 14.9519 1.51172L13.6963 0.256136C13.5456 0.105469 13.3196 0.00502002 13.1187 0.00502002C12.9178 0.00502002 12.6918 0.105469 12.5412 0.256136L0.839146 11.9581C0.688477 12.1088 0.58803 12.3348 0.58803 12.5357C0.58803 12.7366 0.688477 12.9626 0.839146 13.1133L12.5412 24.8153C12.6918 24.966 12.9178 25.0664 13.1187 25.0664C13.3196 25.0664 13.5456 24.966 13.6963 24.8153L14.9519 23.5597C15.1025 23.409 15.203 23.183 15.203 22.9821C15.203 22.7812 15.1025 22.5552 14.9519 22.4046L5.08301 12.5357L14.9519 2.66685C15.1025 2.51618 15.203 2.29018 15.203 2.08928Z" fill="#959595" />
        </svg>

        {/* </div> */}
        <div className="carousel-items">
          {visibleItems.map((item, index) => (
            <div className="carousel-item" key={index}>
              {item}
            </div>
          ))}
        </div>

        <svg className={`carousel-arrow  ${currentSlide + itemsPerPage >= items.length ? "disabled" : ""}`} onClick={handleNext} width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3994 12.5357C15.3994 12.3348 15.299 12.1088 15.1483 11.9581L3.44629 0.256136C3.29562 0.105469 3.06962 0.00502002 2.86872 0.00502002C2.66783 0.00502002 2.44182 0.105469 2.29116 0.256136L1.03557 1.51172C0.884905 1.66239 0.784459 1.88839 0.784459 2.08928C0.784459 2.29018 0.884905 2.51618 1.03557 2.66685L10.9044 12.5357L1.03557 22.4046C0.884905 22.5552 0.784459 22.7812 0.784459 22.9821C0.784459 23.2081 0.884905 23.409 1.03557 23.5597L2.29116 24.8153C2.44182 24.966 2.66783 25.0664 2.86872 25.0664C3.06962 25.0664 3.29562 24.966 3.44629 24.8153L15.1483 13.1133C15.299 12.9626 15.3994 12.7366 15.3994 12.5357Z" fill="#959595" />
        </svg>

      </div></div>
  );
};

export default Carousel;
