import Collapse from "../../components/Collapse";
import Banner from "../../components/Banner";
import styled from "styled-components";
import imageHeaderAbout from "../../images/imageHeaderAbout.png";

const AboutContainer = styled.div`
  margin: 0px 100px 0px 100px;
`;

const CollapseContainer = styled.div`
  margin-top: 31px;
  margin-left: 100px;
  margin-right: 100px;
`;

const CollapseStyle = styled.div`
  margin-bottom: 31px;
`;

function About() {
  return (
    <AboutContainer>
      <Banner imgBanner={imageHeaderAbout} />
      <CollapseContainer>
        <CollapseStyle>
          <Collapse
            text="Fiabilité"
            description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
        </CollapseStyle>
        <CollapseStyle>
          <Collapse
            text="Respect"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </CollapseStyle>
        <CollapseStyle>
          <Collapse
            text="Service"
            description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
        </CollapseStyle>
        <CollapseStyle>
          <Collapse
            text="Sécurité"
            description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </CollapseStyle>
      </CollapseContainer>
    </AboutContainer>
  );
}

export default About;
