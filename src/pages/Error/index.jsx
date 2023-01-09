import "../../styles/error.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Error() {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <div id="ErrorContainer">
      <div id="HeaderTextContainer">
        <div id="ErrorHeader">404</div>
        <div id="ErrorText"> Oups! La page que vous demandez n'existe pas.</div>
      </div>
      <Link id="StyledLink" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
