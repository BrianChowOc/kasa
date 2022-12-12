import styled from "styled-components";
import { ReactComponent as KLogo } from "../../images/logo/KLogo.svg";
import { ReactComponent as ALogo } from "../../images/logo/ALogo.svg";
import { ReactComponent as SLogo } from "../../images/logo/SLogo.svg";
import { ReactComponent as HouseLogo } from "../../images/logo/HouseLogo.svg";
import { ReactComponent as DoorLogo } from "../../images/logo/DoorLogo.svg";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 209px;
  width: 100%;
  margin-top: 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 200px;
`;
const TextContainer = styled.div`
  color: white;
  margin-top: 32px;
  font-size: 24px;
  font-weight: 500;
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <KLogo fill="white" />
        <div>
          <HouseLogo fill="white" />
          <DoorLogo fill="white" />
        </div>
        <SLogo fill="white" />
        <ALogo fill="white" />
      </LogoContainer>
      <TextContainer>© 2022 Kasa. All rights reserved</TextContainer>
    </FooterContainer>
  );
}

export default Footer;
