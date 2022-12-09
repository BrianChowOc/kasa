import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

function Footer() {
  return (
    <FooterContainer>
      <NightModeButton>Footer</NightModeButton>
    </FooterContainer>
  );
}

export default Footer;
