import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 30px;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 20px;
  padding-left: 20px;
  color: white;
  background: linear-gradient(
    180deg,
    rgba(255, 96, 96, 1) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

function Card() {
  return <CardContainer>Titre de la location</CardContainer>;
}

export default Card;
