import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as KLogo } from "../../images/logo/KLogo.svg";
import { ReactComponent as ALogo } from "../../images/logo/ALogo.svg";
import { ReactComponent as SLogo } from "../../images/logo/SLogo.svg";
import { ReactComponent as HouseLogo } from "../../images/logo/HouseLogo.svg";
import { ReactComponent as DoorLogo } from "../../images/logo/DoorLogo.svg";

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
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoHeader>
        <KLogo fill="#ff6060" />
        <div>
          <HouseLogo fill="#ff6060" />
          <DoorLogo fill="#ff6060" />
        </div>
        <SLogo fill="#ff6060" />
        <ALogo fill="#ff6060" />
      </LogoHeader>
      <NavContainer>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/About">A propos</StyledLink>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
