import { ReactComponent as Star } from "../../images/Star.svg";
import "../../styles/notation.css";

function Notation({ rating }) {
  const ratingNumber = parseInt(rating);
  const tabRating = [1, 2, 3, 4, 5];
  return (
    <div className="StarContainer">
      {tabRating.map((value) => {
        if (value <= ratingNumber) {
          return (
            <Star
              style={{ fill: "#ff6060" }}
              key={value}
              className="StarStyle"
            />
          );
        } else {
          return (
            <Star
              style={{ fill: "#E3E3E3" }}
              key={value}
              className="StarStyle"
            />
          );
        }
      })}
    </div>
  );
}

export default Notation;
