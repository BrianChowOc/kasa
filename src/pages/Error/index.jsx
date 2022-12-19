import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #ff6060;
  height: 558px;

  @media screen and (max-width: 915px) {
    font-size: 12px;
  }
`;

const ErrorHeader = styled.div`
  font-weight: 700;
  font-size: 288px;
  @media screen and (max-width: 915px) {
    font-size: 96px;
  }
`;

const ErrorText = styled.div`
  font-weight: 500;
  font-size: 36px;
  @media screen and (max-width: 915px) {
    font-size: 18px;
  }
`;

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledLink = styled(Link)`
  color: #ff6060;
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 915px) {
    font-size: 14px;
  }
`;

function Error() {
  return (
    <ErrorContainer>
      <HeaderTextContainer>
        <ErrorHeader>404</ErrorHeader>
        <ErrorText> Oups! La page que vous demandez n'existe pas.</ErrorText>
      </HeaderTextContainer>
      <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
    </ErrorContainer>
  );
}

export default Error;
