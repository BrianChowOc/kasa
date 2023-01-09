import { useParams } from "react-router-dom";
import HostImg from "../../components/HostImg";
import Notation from "../../components/Notation";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import logementList from "../../datas/logementList";
import Collapse from "../../components/Collapse";
import Error from "../Error";
import "../../styles/housing.css";
import { useEffect } from "react";

function Housing() {
  const { id } = useParams();
  let logement = logementList.filter((appart) => {
    return appart.id === id;
  });

  useEffect(() => {
    document.title = `${logement.title}`;
  }, [logement]);

  if (logement.length === 0) {
    return <Error />;
  }

  logement = logement[0];
  const name = logement.host.name.split(" ");
  const firstName = name[0];
  const lastName = name[1];
  return (
    <div id="HousingContainer">
      <Slideshow pictures={logement.pictures} />
      <div id="MainInfoContainer">
        <div>
          <div id="TitleStyle">{logement.title}</div>
          <div id="LocationStyle">{logement.location}</div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            {logement.tags.map((tag) => {
              return (
                <div style={{ marginRight: "10px" }} key={tag}>
                  <Tag text={tag} />
                </div>
              );
            })}
          </div>
        </div>
        <div id="NameStarContainer">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div id="NameStyle">
              <div>{firstName}</div>
              <div>{lastName}</div>
            </div>
            <HostImg img={logement.host.picture} />
          </div>
          <div style={{ heigth: "10px" }}>
            <Notation rating={logement.rating} />
          </div>
        </div>
      </div>
      <div id="DescriptionContainer">
        <div
          id="DescriptionCollapseStyle"
          style={{ marginRight: "76px", width: "100%" }}
        >
          <Collapse title="Description" description={logement.description} />
        </div>
        <div style={{ width: "100%" }}>
          <Collapse title="Équipements" description={logement.equipments} />
        </div>
      </div>
    </div>
  );
}

export default Housing;
