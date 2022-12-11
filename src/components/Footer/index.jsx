import styled from "styled-components";

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
        <svg
          width="32"
          height="36"
          viewBox="0 0 55 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0745 34.6485L8.84014 46.1362V62.2561H0V0H8.84014V34.8338L42.359 0H52.4883L26.1521 27.9782L54.33 62.2561H44.0165L20.0745 34.6485Z"
            fill="#ffffff"
          />
        </svg>
        <div>
          <svg
            width="26"
            height="30"
            viewBox="0 0 47 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.2658 20.4632L24.3497 7.67847L12.1945 0.637604L0.22345 21.5749L0.407616 41.2153L22.1396 54L24.3497 52.703V34.1744L34.1106 16.9428L44.0558 22.6866V41.2153L46.2658 39.9183V20.4632Z"
              fill="#ffffff"
            />
          </svg>
          <svg
            width="3"
            height="9"
            viewBox="0 0 6 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.532257 3.84196V16.4414L5.87317 13.2916V0.692101L0.532257 3.84196Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <svg
          width="22"
          height="27"
          viewBox="0 0 41 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.789307 43.2534L4.28853 36.5831C8.34026 39.3624 14.602 41.4005 20.6796 41.4005C28.5989 41.4005 31.7298 38.9918 31.7298 34.9155C31.7298 24.3542 2.07849 33.4332 2.07849 14.7193C2.07849 6.19619 9.62945 0.637604 21.6005 0.637604C27.6781 0.637604 34.6765 2.30518 38.7282 4.89918L35.0448 11.5695C30.8089 8.79019 26.2047 7.86376 21.6005 7.86376C14.2337 7.86376 10.5503 10.6431 10.5503 14.3488C10.5503 25.4659 40.2016 16.3869 40.2016 34.7302C40.2016 43.2534 32.4665 48.6267 19.9429 48.6267C12.392 48.812 4.65687 46.4033 0.789307 43.2534Z"
            fill="#ffffff"
          />
        </svg>
        <svg
          width="23"
          height="27"
          viewBox="0 0 42 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.3215 19.7221V48.2561H33.2181V41.9564C30.4556 46.218 25.1146 48.6267 17.7479 48.6267C7.06602 48.6267 0.435913 42.8828 0.435913 34.7302C0.435913 27.1335 5.22432 21.0191 19.2212 21.0191H32.6656V19.3515C32.6656 12.1253 28.4297 8.04905 20.142 8.04905C14.617 8.04905 8.90771 10.0872 5.22432 13.0518L1.72509 6.56676C6.5135 2.67575 13.5119 0.452316 21.0629 0.452316C34.1389 0.637602 41.3215 6.93733 41.3215 19.7221ZM32.8498 33.8038V27.1335H19.7737C11.3019 27.1335 8.90771 30.4687 8.90771 34.3597C8.90771 38.9918 12.7753 41.9564 19.2212 41.9564C25.6671 42.1417 30.8239 39.3624 32.8498 33.8038Z"
            fill="#ffffff"
          />
        </svg>
      </LogoContainer>
      <TextContainer>© 2022 Kasa. All rights reserved</TextContainer>
    </FooterContainer>
  );
}

export default Footer;
