import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HostImg from "../../components/HostImg";
import Notation from "../../components/Notation";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import logementList from "../../datas/logementList";
import Collapse from "../../components/Collapse";
import Error from "../Error";

const HousingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  margin-left: 100px;
  @media screen and (max-width: 915px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

const MainInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media screen and (max-width: 915px) {
    margin-top: 15px;
    flex-direction: column;
  }
`;

const TitleStyle = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: #ff6060;
  @media screen and (max-width: 915px) {
    font-size: 18px;
  }
  @media screen and (max-width: 280px) {
    font-size: 15px;
  }
`;

const LocationStyle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
  margin-top: 5px;
  margin-bottom: 5px;
  @media screen and (max-width: 915px) {
    font-size: 14px;
  }
  @media screen and (max-width: 280px) {
    font-size: 11px;
  }
`;

const NameStarContainer = styled.div`
  @media screen and (max-width: 915px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
`;

const NameStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
  margin-right: 10px;
  @media screen and (max-width: 915px) {
    font-size: 12px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
  @media screen and (max-width: 915px) {
    flex-direction: column;
  }
`;

const DescriptionCollapseStyle = styled.div`
  margin-right: 76px;
  width: 100%;
  @media screen and (max-width: 915px) {
    margin-bottom: 20px;
  }
`;

function Housing() {
  const { id } = useParams();
  const logement = logementList.filter((appart) => {
    return appart.id === id;
  });

  if (logement.length === 0) {
    return <Error />;
  }

  const name = logement[0].host.name.split(" ");
  const firstName = name[0];
  const lastName = name[1];
  return (
    <HousingContainer>
      <Slideshow pictures={logement[0].pictures} />
      <MainInfoContainer>
        <div>
          <TitleStyle>{logement[0].title}</TitleStyle>
          <LocationStyle>{logement[0].location}</LocationStyle>
          <div style={{ display: "flex", marginTop: "10px" }}>
            {logement[0].tags.map((tag) => {
              return (
                <div style={{ marginRight: "10px" }}>
                  <Tag text={tag} />
                </div>
              );
            })}
          </div>
        </div>
        <NameStarContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <NameStyle>
              <div>{firstName}</div>
              <div>{lastName}</div>
            </NameStyle>
            <HostImg img={logement[0].host.picture} />
          </div>
          <div style={{ heigth: "10px" }}>
            <Notation rating={logement[0].rating} />
          </div>
        </NameStarContainer>
      </MainInfoContainer>
      <DescriptionContainer>
        <DescriptionCollapseStyle
          style={{ marginRight: "76px", width: "100%" }}
        >
          <Collapse text="Description" description={logement[0].description} />
        </DescriptionCollapseStyle>
        <div style={{ width: "100%" }}>
          <Collapse text="Équipements" description={logement[0].equipments} />
        </div>
      </DescriptionContainer>
    </HousingContainer>
  );
}

export default Housing;
