import styled from "styled-components";
import PropTypes from "prop-types";

const BannerContainer = styled.div`
  display: flex;
  height: 223px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackgroundContainer = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  font-weight: 500;
  font-size: 48px;
  filter: brightness(70%);
  z-index: 10;
`;

const TextBanner = styled.div`
  position: absolute;
  color: white;
  z-index: 50;
  font-weight: 500;
  font-size: 48px;
`;

function Banner({ text, imgBanner }) {
  return (
    <BannerContainer>
      <BackgroundContainer src={imgBanner} alt="banner cover" />
      <TextBanner>{text}</TextBanner>
    </BannerContainer>
  );
}

Banner.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
};

export default Banner;
