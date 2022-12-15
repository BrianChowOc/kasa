import { useParams } from "react-router-dom";
import styled from "styled-components";
import HostImg from "../../components/HostImg";
import Notation from "../../components/Notation";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import logementList from "../../datas/logementList";
import Collapse from "../../components/Collapse";

const HousingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  margin-left: 100px;
`;

const MainInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const TitleStyle = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: #ff6060;
`;

const LocationStyle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
`;

const NameStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
  margin-right: 10px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
`;

function Housing() {
  const { id } = useParams();
  const logement = logementList.filter((appart) => {
    return appart.id === id;
  });
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
          <div style={{ display: "flex", marginTop: "20px" }}>
            {logement[0].tags.map((tag) => {
              return (
                <div style={{ marginRight: "10px" }}>
                  <Tag text={tag} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginBottom: "24px",
            }}
          >
            <NameStyle>
              <div>{firstName}</div>
              <div>{lastName}</div>
            </NameStyle>
            <HostImg img={logement[0].host.picture} />
          </div>
          <Notation rating={logement[0].rating} />
        </div>
      </MainInfoContainer>
      <DescriptionContainer>
        <div style={{ marginRight: "76px", width: "100%" }}>
          <Collapse text="Description" description={logement[0].description} />
        </div>
        <div style={{ width: "100%" }}>
          <Collapse text="Équipements" description={logement[0].equipments} />
        </div>
      </DescriptionContainer>
    </HousingContainer>
  );
}

export default Housing;
