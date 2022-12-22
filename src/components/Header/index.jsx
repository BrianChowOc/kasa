import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as KLogo } from "../../images/logo/KLogo.svg";
import { ReactComponent as ALogo } from "../../images/logo/ALogo.svg";
import { ReactComponent as SLogo } from "../../images/logo/SLogo.svg";
import { ReactComponent as HouseLogo } from "../../images/logo/HouseLogo.svg";
import { useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 100px 69px 100px;
  @media screen and (max-width: 915px) {
    margin: 20px;
  }
`;

const LogoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 210px;
  @media screen and (max-width: 915px) {
    width: 150px;
  }
  @media screen and (max-width: 280px) {
    width: 100px;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 250px;
  @media screen and (max-width: 915px) {
    width: 150px;
  }
  @media screen and (max-width: 410px) {
    width: 120px;
  }
  @media screen and (max-width: 280px) {
    width: 110px;
  }
`;

const StyledLink = styled(Link)`
  color: #ff6060;
  text-decoration: ${(props) => (props.line === "true" ? "undeline" : "none")};
  font-size: 24px;
  font-weight: 500;
  @media screen and (max-width: 915px) {
    font-size: 12px;
  }
`;

function Header() {
  const location = useLocation();
  const underlineHome = location.pathname === "/" ? "true" : null;
  const underlineAbout = location.pathname === "/about" ? "true" : null;
  return (
    <HeaderContainer>
      <LogoHeader>
        <KLogo fill="#ff6060" />
        <HouseLogo fill="#ff6060" />
        <SLogo fill="#ff6060" />
        <ALogo fill="#ff6060" />
      </LogoHeader>
      <NavContainer>
        <StyledLink to="/" line={underlineHome}>
          Accueil
        </StyledLink>
        <StyledLink to="/about" line={underlineAbout}>
          A Propos
        </StyledLink>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
