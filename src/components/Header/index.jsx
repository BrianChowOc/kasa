import { Link } from "react-router-dom";
import { ReactComponent as KLogo } from "../../images/logo/KLogo.svg";
import { ReactComponent as ALogo } from "../../images/logo/ALogo.svg";
import { ReactComponent as SLogo } from "../../images/logo/SLogo.svg";
import { ReactComponent as HouseLogo } from "../../images/logo/HouseLogo.svg";
import { useLocation } from "react-router-dom";
import "../../styles/header.css";

function Header() {
  const location = useLocation();

  return (
    <div id="HeaderContainer">
      <Link to="/">
        <div id="LogoHeader">
          <KLogo fill="#ff6060" />
          <HouseLogo fill="#ff6060" />
          <SLogo fill="#ff6060" />
          <ALogo fill="#ff6060" />
        </div>
      </Link>
      <nav id="NavContainer">
        <Link
          className="StyledLink"
          to="/"
          style={{
            textDecoration: location.pathname === "/" ? "underline" : "none",
          }}
        >
          Accueil
        </Link>
        <Link
          className="StyledLink"
          to="/about"
          style={{
            textDecoration:
              location.pathname === "/about" ? "underline" : "none",
          }}
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
