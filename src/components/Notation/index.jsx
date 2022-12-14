import { ReactComponent as Star } from "../../images/Star.svg";
import PropTypes from "prop-types";
import styled from "styled-components";

const StarContainer = styled.div`
  width: 190px;
  display: flex;
  justify-content: space-between;
`;

function Notation({ rating }) {
  const ratingNumber = parseInt(rating);
  const tabRating = [1, 2, 3, 4, 5];
  return (
    <StarContainer>
      {tabRating.map((value) => {
        if (value <= ratingNumber) {
          return <Star height={30} width={30} style={{ fill: "#ff6060" }} />;
        } else {
          return <Star height={30} width={30} style={{ fill: "#E3E3E3" }} />;
        }
      })}
    </StarContainer>
  );
}

Notation.propTypes = {
  rating: PropTypes.string,
};

export default Notation;
