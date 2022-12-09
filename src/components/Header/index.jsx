import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
`;

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/About">A propos</StyledLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
