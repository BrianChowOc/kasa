import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ff6060;
  height: 558px;
`;

const ErrorHeader = styled.div`
  font-weight: 700;
  font-size: 288px;
`;

const ErrorText = styled.div`
  font-weight: 500;
  font-size: 36px;
`;

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #ff6060;
  font-size: 18px;
  font-weight: 500;
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
