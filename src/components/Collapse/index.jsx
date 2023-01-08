import { useState } from "react";
import { ReactComponent as ArrowTop } from "../../images/ArrowBottom.svg";
import { ReactComponent as ArrowBottom } from "../../images/ArrowTop.svg";
import "../../styles/collapse.css";

function Collapse({ title, description }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="CollapseContainer">
      <div
        className="HeaderCollapse"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <span className="TextCollapse">{title}</span>
        {!isHidden ? (
          <span className="ArrowCollapse">
            <ArrowBottom className="Arrow" />
          </span>
        ) : (
          <span className="ArrowCollapse">
            <ArrowTop className="Arrow" />
          </span>
        )}
      </div>
      {!isHidden && typeof description === "string" && (
        <div className="BodyCollapse">{description}</div>
      )}
      {!isHidden && typeof description === "object" && (
        <div className="BodyCollapseObject">
          <ul className="UlStyle">
            {description.map((word, index) => {
              return <li key={`${word}-${index}`}>{word}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Collapse;
