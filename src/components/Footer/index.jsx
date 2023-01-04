import { ReactComponent as KLogo } from "../../images/logo/KLogo.svg";
import { ReactComponent as ALogo } from "../../images/logo/ALogo.svg";
import { ReactComponent as SLogo } from "../../images/logo/SLogo.svg";
import { ReactComponent as HouseLogo } from "../../images/logo/HouseLogo.svg";
import "../../styles/footer.css";

function Footer() {
  return (
    <footer id="FooterContainer">
      <div id="LogoContainer">
        <KLogo fill="white" />
        <HouseLogo fill="white" />
        <SLogo fill="white" />
        <ALogo fill="white" />
      </div>
      <div id="TextContainer">© 2022 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
