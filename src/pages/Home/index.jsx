import styled from "styled-components";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import imageHeaderHome from "../../images/imageHeaderHome.png";
import logementList from "../../datas/logementList.js";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  margin: 0px 100px 0px 100px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  border-radius: 25px;
  padding-top: 31px;
  padding-bottom: 18px;
  margin-top: 43px;
`;

const CardStyle = styled(Link)`
  margin-top: 25px;
  margin-bottom: 25px;
  text-decoration: none;
`;
function Home() {
  return (
    <HomeContainer>
      <Banner
        imgBanner={imageHeaderHome}
        text="Chez vous, partout et ailleurs"
      />
      <CardContainer>
        {logementList.map((logement) => (
          <CardStyle key={logement.id} to={`/housing/${logement.id}`}>
            <Card title={logement.title} cover={logement.cover} />
          </CardStyle>
        ))}
      </CardContainer>
    </HomeContainer>
  );
}

export default Home;
