import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 223px;
  border-radius: 25px;
  font-weight: 500;
  font-size: 48px;
  background-color: yellow;
  background-image: url("../../images/imgBanner.jpg");
`;

function Banner() {
  return <BannerContainer>Chez vous, partout et ailleurs</BannerContainer>;
}

export default Banner;
