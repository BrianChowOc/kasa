import { useState } from "react";
import { ReactComponent as LeftArrow } from "../../images/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../images/RightArrow.svg";
import "../../styles/slideshow.css";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyle = {
    with: "100%",
    height: "100%",
    borderRadius: "25px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${pictures[currentIndex]})`,
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "42.5%",
    left: "23px",
    cursor: "pointer",
  };
  const rightArrowStyle = {
    position: "absolute",
    top: "42.5%",
    right: "23px",
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastIndex = currentIndex === pictures.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div id="SlideshowContainer">
      <div style={slideStyle}>
        {pictures.length > 1 && (
          <LeftArrow
            style={leftArrowStyle}
            onClick={goToPrevious}
            class="ArrowStyle"
          />
        )}
        {pictures.length > 1 && (
          <RightArrow
            style={rightArrowStyle}
            onClick={goToNext}
            class="ArrowStyle"
          />
        )}
        {pictures.length > 1 && (
          <div id="CountStyle">
            {currentIndex + 1}/{pictures.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default Slideshow;
