import Banner from "../../components/Banner";
import Card from "../../components/Card";
import imageHeaderHome from "../../images/imageHeaderHome.png";
import logementList from "../../datas/logementList.js";
import { Link } from "react-router-dom";
import "../../styles/home.css";

function Home() {
  return (
    <div id="HomeContainer">
      <Banner
        imgBanner={imageHeaderHome}
        text="Chez vous, partout et ailleurs"
      />
      <div id="CardContainer">
        {logementList.map((logement) => (
          <Link
            className="CardStyle"
            key={logement.id}
            to={`/housing/${logement.id}`}
          >
            <Card title={logement.title} cover={logement.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
