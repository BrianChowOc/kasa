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
`;

const LogoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 210px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const StyledLink = styled(Link)`
  color: #ff6060;
  text-decoration: ${(props) => (props.line ? "undeline" : "none")};
  font-size: 24px;
  font-weight: 500;
`;

function Header() {
  const location = useLocation();
  const underlineHome = location.pathname === "/";
  const underlineAbout = location.pathname === "/about";
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
