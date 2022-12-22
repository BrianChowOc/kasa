import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as ArrowTop } from "../../images/ArrowBottom.svg";
import { ReactComponent as ArrowBottom } from "../../images/ArrowTop.svg";

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderCollapse = styled.div`
  height: 52px;
  background-color: #ff6060;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  justify-content: space-between;
  @media screen and (max-width: 915px) {
    height: 30px;
    font-size: 13px;
  }
`;

const TextCollapse = styled.span`
  padding-left: 18px;
`;

const ArrowCollapse = styled.span`
  padding-right: 16px;
  @media screen and (max-width: 915px) {
    svg {
      width: 10px;
      height: 15px;
    }
  }
`;

const BodyCollapse = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #ff6060;
  background-color: #f6f6f6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 18px;
  padding-right: 27px;
  padding-top: 27px;
  padding-bottom: 19px;
  @media screen and (max-width: 915px) {
    font-size: 12px;
    svg {
      width: 10px;
      height: 15px;
    }
  }
`;

const BodyCollapseObject = styled.div`
  display: flex;
  color: #ff6060;
  background-color: #f6f6f6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 18px;
  padding-right: 27px;
  padding-top: 27px;
  padding-bottom: 19px;
`;

const UlStyle = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 915px) {
    font-size: 12px;
  }
`;

function Collapse({ text, description }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <CollapseContainer>
      <HeaderCollapse
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <TextCollapse>{text}</TextCollapse>
        {!isHidden ? (
          <ArrowCollapse>
            <ArrowBottom />
          </ArrowCollapse>
        ) : (
          <ArrowCollapse>
            <ArrowTop />
          </ArrowCollapse>
        )}
      </HeaderCollapse>
      {!isHidden && typeof description === "string" && (
        <BodyCollapse>{description}</BodyCollapse>
      )}
      {!isHidden && typeof description === "object" && (
        <BodyCollapseObject>
          <UlStyle>
            {description.map((word, index) => {
              return <li key={`${word}-${index}`}>{word}</li>;
            })}
          </UlStyle>
        </BodyCollapseObject>
      )}
    </CollapseContainer>
  );
}

Collapse.propTypes = {
  text: PropTypes.string,
};

export default Collapse;
