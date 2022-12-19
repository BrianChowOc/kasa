import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../../images/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../images/RightArrow.svg";

const SlideshowContainer = styled.div`
  width: 100%;
  height: 415px;
  position: relative;
  border-radius: 25px;
  svg {
    position: "absolute";
    top: "40%";
    right: "23px";
    cursor: "pointer";
  }
  @media screen and (max-width: 915px) {
    height: 255px;
    svg {
      height: 20px;
      width: 11.6px;
    }
  }
`;

const CountStyle = styled.div`
  position: absolute;
  color: white;
  bottom: 24px;
  left: 50%;
  @media screen and (max-width: 915px) {
    display: none;
  }
`;

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
    <SlideshowContainer>
      <div style={slideStyle}>
        {pictures.length > 1 && (
          <LeftArrow style={leftArrowStyle} onClick={goToPrevious} />
        )}
        {pictures.length > 1 && (
          <RightArrow style={rightArrowStyle} onClick={goToNext} />
        )}
        {pictures.length > 1 && (
          <CountStyle>
            {currentIndex + 1}/{pictures.length}
          </CountStyle>
        )}
      </div>
    </SlideshowContainer>
  );
}

export default Slideshow;
