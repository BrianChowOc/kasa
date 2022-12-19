import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 20px;
  padding-left: 20px;
  color: white;
  background-image: url(${(props) => props.cover});
  background-position: center;
  background-size: cover;
  margin: 25px;

  @media screen and (max-width: 915px) {
    width: 335px;
    height: 255px;
  }
  @media screen and (max-width: 410px) {
    width: 300px;
    height: 200px;
    margin: 0px;
  }
  @media screen and (max-width: 280px) {
    width: 220px;
    height: 150px;
    margin: 0px;
    font-size: 15px;
  }
`;

function Card({ title, cover }) {
  return <CardContainer cover={cover}>{title}</CardContainer>;
}

Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
