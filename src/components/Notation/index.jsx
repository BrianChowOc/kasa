import { ReactComponent as Star } from "../../images/Star.svg";
import PropTypes from "prop-types";
import styled from "styled-components";

const StarContainer = styled.div`
  width: 190px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 915px) {
    svg {
      width: 15px;
      height: 15px;
    }
  }
  @media screen and (max-width: 280px) {
    width: 100px;
  }
`;

function Notation({ rating }) {
  const ratingNumber = parseInt(rating);
  const tabRating = [1, 2, 3, 4, 5];
  return (
    <StarContainer>
      {tabRating.map((value) => {
        if (value <= ratingNumber) {
          return <Star style={{ fill: "#ff6060" }} key={value} />;
        } else {
          return <Star style={{ fill: "#E3E3E3" }} key={value} />;
        }
      })}
    </StarContainer>
  );
}

Notation.propTypes = {
  rating: PropTypes.string,
};

export default Notation;
