import { useState } from "react";
import { ReactComponent as ArrowTop } from "../../images/ArrowBottom.svg";
import { ReactComponent as ArrowBottom } from "../../images/ArrowTop.svg";
import "../../styles/collapse.css";

function Collapse({ text, description }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div class="CollapseContainer">
      <div
        class="HeaderCollapse"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <span class="TextCollapse">{text}</span>
        {!isHidden ? (
          <span class="ArrowCollapse">
            <ArrowBottom class="Arrow" />
          </span>
        ) : (
          <span className="ArrowCollapse">
            <ArrowTop class="Arrow" />
          </span>
        )}
      </div>
      {!isHidden && typeof description === "string" && (
        <div class="BodyCollapse">{description}</div>
      )}
      {!isHidden && typeof description === "object" && (
        <div class="BodyCollapseObject">
          <ul class="UlStyle">
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
