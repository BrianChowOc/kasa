import styled from "styled-components";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  border-radius: 25px;
  margin-top: 43px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 26px;
  padding-bottom: 13px;
`;

function Home() {
  return (
    <>
      <Banner />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </>
  );
}

export default Home;
